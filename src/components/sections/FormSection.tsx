import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useInput } from '../../hooks/useInput'
import "../../scss/styles/FormSection.scss"
import Button from '../UI/Button/Button'
import FileInput from '../UI/FileInput/FileInput'
import { Input } from '../UI/Input/Input'
import { PositionBox } from '../PositionBox'
import { dataToken, getToken } from '../../axios/getToken'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux'
import { postUser } from '../../store/actions/userAction'
import formData from '../../helpers/formData'
import ModalSuccess from '../ModalSuccess'
import Preloader from '../UI/Preloader/Preloader'
import useUpload from '../../hooks/useUpload'

export default function FormSection() {
  const name = useInput('', { isEmpty: true, minLength: 2, maxLength: 60 });
  const email = useInput('', { isEmpty: true, isEmail: true, maxLength: 100, minLength: 2 });
  const phone = useInput('', { isEmpty: true, isPhone: true });
  const position_id = useInput('1', {});
  const photo = useInput(null, { isFile: true });

  const [isInputValid, setInputValid] = useState(false)
  const {photoName, uploadFile, setPhotoName} = useUpload(photo)

  const dispatch = useAppDispatch()
  const { isLoading, userDto, error } = useAppSelector(state => state.auth)

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
    setPhotoName('')
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
    <>
      <section className='form-section container' id='form'>
        <h1>Working with POST request</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-section__inputs">
            <Input
              error={name.isDirty && name.minLengthError || name.maxLengthError ? true : false}
              value={name.value}
              onChange={name.onChange}
              label='Your name'
              helperText={name.isDirty && name.minLengthError || name.maxLengthError ? 'The name must be at least 2 characters.' : ''}
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
            value={photo.value as string}
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
        </form>
      </section>
      {userDto?.success && <ModalSuccess />}
    </>
  )
}