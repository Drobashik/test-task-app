import { useEffect, useState } from "react"
import testRegularExp from "../helpers/testRegularExp"
import { Validations } from "../models/models"

export const useValidation = (value: File | string | null, validations: Validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [fileError, setFileError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {

                case 'minLength':
                    (<string>value).length < (validations[validation] as number) ? setMinLengthError(true) : setMinLengthError(false);
                    break;

                case 'maxLength':
                    (<string>value).length > (validations[validation] as number) ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;

                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;

                case 'isEmail':
                    setEmailError(testRegularExp(value as string, 'email'))
                    break;

                case 'isPhone':
                    setPhoneError(testRegularExp(value as string, 'phone'))
                    break;
                    
                case 'isFile':
                    (<File>value)?.size > 5000000 ? setFileError(true) : setFileError(false)
                    break;

            }
        }
    }, [value])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        phoneError,
        fileError,
    }

}