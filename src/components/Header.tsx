import React from 'react'
import Button from './UI/Button/Button'
import "../scss/styles/Header.scss"
import logo from "../assets/Logo.svg"

export default function Header() {

    return (
        <header>
            <div className="head container">
                <div className="head__logo">
                    <img
                        src={logo}
                        alt="Logo"
                    />
                </div>
                <div className="head__btn-section">
                    <Button
                        href={'#users'}
                        isButton={false}
                    >
                        Users
                    </Button>
                    <Button
                        href={'#form'}
                        isButton={false}
                    >
                        Sign up
                    </Button>
                </div>
            </div>
        </header>
    )

}
