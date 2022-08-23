import React, { FormEvent, useEffect, useState } from 'react'
import { dataToken, getToken } from '../axios/getToken';
import formData from '../helpers/formData';
import { useInput } from '../hooks/useInput';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import useUpload from '../hooks/useUpload';
import { postUser } from '../store/actions/userAction';
import ModalSuccess from './ModalSuccess';
import { PositionBox } from './PositionBox';
import Button from './UI/Button/Button';
import FileInput from './UI/FileInput/FileInput';
import { Input } from './UI/Input/Input';
import Preloader from './UI/Preloader/Preloader';

function Form() {
    const name = useInput('', { isEmpty: true, minLength: 2, maxLength: 60 });
    const email = useInput('', { isEmpty: true, isEmail: true, maxLength: 100, minLength: 2 });
    const phone = useInput('', { isEmpty: true, isPhone: true });
    const position_id = useInput('1', {});
    const photo = useInput(null, { isFile: true });

    const [isInputValid, setInputValid] = useState(false)
    const { photoName, uploadFile, setPhotoName } = useUpload(photo)

    const dispatch = useAppDispatch()
    const { isLoading, userDto } = useAppSelector(state => state.auth)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const user = formData(
            name.value as string,
            email.value as string,
            phone.value as string,
            position_id.value as string,
            photo.value as File,
        )

        dispatch(postUser(user, dataToken.token))

        name.setEmpty()
        email.setEmpty()
        phone.setEmpty()
        setPhotoName('Upload your photo')
    }

    useEffect(() => {
        getToken()
    }, [])

    useEffect(() => {
        if (name.minLengthError || email.emailError
            || phone.phoneError || photo.fileError
            || !photo.value || name.maxLengthError ||
            email.maxLengthError || email.minLengthError) {

            setInputValid(false);
            return;

        }
        setInputValid(true)
    },
        [name.minLengthError, email.emailError,
        phone.phoneError, photo.fileError,
        photo.value, name.maxLengthError,
        email.maxLengthError, email.minLengthError])


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-section__inputs">
                <Input
                    error={(name.isDirty && name.minLengthError) || name.maxLengthError ? true : false}
                    value={name.value}
                    onChange={name.onChange}
                    label='Your name'
                    helperText={(name.isDirty && name.minLengthError) || name.maxLengthError ? 'The name must be at least 2 characters.' : ''}
                />
                <Input
                    error={email.isDirty && email.emailError ? true : false}
                    value={email.value}
                    onChange={email.onChange}
                    label='Email'
                    helperText={email.isDirty && email.emailError ? 'The email must be a valid email address.' : ''}
                />
                <Input
                    error={phone.isDirty && phone.phoneError ? true : false}
                    value={phone.value}
                    onChange={phone.onChange}
                    label='Phone'
                    helperText={phone.isDirty && phone.phoneError ? 'The phone field is required.' : '+38 (XXX) XXX - XX - XX'}
                />
            </div>
            <div className="form-section__radio">
                <PositionBox
                    onChange={position_id.onChange}
                />
            </div>

            <FileInput
                photoName={photoName}
                helperText={photo.fileError ? 'The photo may not be greater than 5 Mbytes.' : ''}
                accept="image/jpg,image/jpeg"
                onChange={uploadFile}
            />

            <div className='form-section__btn'>
                {!isLoading && <Button
                    isButton={true}
                    disabled={!isInputValid}
                >
                    Sign up
                </Button>}
                {
                    isLoading &&
                    <Preloader />
                }
            </div>
            {userDto?.success && <ModalSuccess />}
        </form>
    )
}

export default Form