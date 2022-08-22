import React from 'react'
import "../../scss/styles/UserSection.scss"
import UserCards from '../UserCards'

export default function UserSection() {

  return (
    <section className='user-section container' id='users'>
      <h1>Working with GET request</h1>
      <div className="user-section__card-box">
        <UserCards />
      </div>
    </section>
  )

}
