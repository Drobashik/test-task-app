import { useState } from "react"
import { Validations } from "../models/models"
import { useValidation } from "./useValidation"

export const useInput = (initialValue: File | string | null, validations: Validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidation(value as string, validations)

    const onChange = (e: Event) => {
        setValue((<HTMLInputElement>e.target)?.value)
        setIsDirty(true)
    }

    const fileOnChange = (file: File | null) => {
        setValue(file)
    }

    const setEmpty = (value = '') => {
        setValue(value)
        setIsDirty(false)
    }

    return {
        value,
        isDirty,
        onChange,
        fileOnChange,
        setEmpty,
        ...valid
    }
}