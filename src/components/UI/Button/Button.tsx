import React from 'react';
import style from './Button.module.scss'

type ButtonProps = {
    children: React.ReactNode;
    isButton: boolean;
    href?: string;
    disabled?: boolean;
    onClick?: (event: any) => void;
}

export default function Button({ children, isButton, href, disabled = false, onClick }: ButtonProps) {
    return (
        isButton ?

            <button
                className={style.btn}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>

            :

            <a
                href={href}
                className={style.btn}
            >
                {children}
            </a>

    )
}
