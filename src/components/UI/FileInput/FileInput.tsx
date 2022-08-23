import React from 'react';
import style from './FileInput.module.scss';

type FileInputProps = {
    helperText: string;
    accept: string;
    onChange: (event: any) => void;
    photoName: string;
}

export default function FileInput({ helperText, accept, onChange, photoName }: FileInputProps) {
    return (
        <div className={style.fileContainer}>
            <div className={style.file}>
                <label htmlFor="file">Upload</label>
                <input
                    id="file"
                    type="file"
                    name='photo'
                    accept={accept}
                    onChange={(e) => onChange(e)}
                />
                <span>{photoName}</span>
            </div>
            {helperText &&
                <span className={style.helper}>{helperText}</span>}
        </div>
    )
}
