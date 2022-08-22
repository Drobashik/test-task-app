import React, { FormEvent } from 'react'
import '../scss/styles/ModalSuccess.scss'
import successImage from '../assets/success-image.svg'
import Button from './UI/Button/Button'


function ModalSuccess() {
  function closeModal(event: FormEvent) {
    ((event.target as ParentNode).parentNode?.parentNode as HTMLElement).style.display = 'none'
  }

  return (
    <div className='success-modal'>
      <div className="success-modal__box">
        <h1>User successfully registered</h1>
        <img src={successImage} alt="Success" />
        <Button isButton={true} onClick={closeModal}>
          Continue
        </Button>
      </div>
    </div>
  )
}

export default ModalSuccess