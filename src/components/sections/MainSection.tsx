import React from 'react'
import "../../scss/styles/MainSection.scss"
import Button from '../UI/Button/Button'

export default function MainSection() {
    return (
        <section className="background container">
            <div className='background_theme'>
                <div className="background__text">
                    <h1>Test assignment for front-end developer</h1>
                    <p>
                        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                    </p>
                </div>
                <Button
                    href={'#form'}
                    isButton={false}
                >
                    Sign up
                </Button>
            </div>
        </section>
    )
}
