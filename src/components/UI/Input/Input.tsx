import { styled, TextField } from '@mui/material';
import React from 'react';

/* Setting inline styles for input field to make a big priority */

const InputTextField = styled(TextField)({
    '& label': {
        fontFamily: '"Nunito" !important',
        color: '#7E7E7E !important'
    },
    '& input': {
        fontFamily: '"Nunito" !important',
        color: '#000 !important'
    },
    'fieldset': {
        borderColor: '#D0CFCF !important',
        color: '#D0CFCF !important',
        borderWidth: '1px !important',
    },
    '& p': {
        fontFamily: '"Nunito" !important',
    },
    '.Mui-error.MuiFormLabel-filled': {
        color: '#CB3D40 !important',
    },
    '.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: '#CB3D40 !important',
        borderWidth: '2px !important',
        transition: '50ms !important',
    },
    '@media (max-width: 360px)': {
        '.MuiInputBase-root': {
            maxWidth: '328px !important',
        }
    }
})

export const Input = ({ ...props }) => {

    return (
        <InputTextField
            {...props}
            fullWidth
        />
    )

}
