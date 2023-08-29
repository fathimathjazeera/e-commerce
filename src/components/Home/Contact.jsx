import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div>
<section className='contact' id='contact'>
    <h1 className="heading">contact us</h1>
    <div className="row">
        <form action="">
            <input type="text" placeholder='name' className='box' />
            <input type="email" placeholder='email' className='box' />
            <input type="number" placeholder='number' className='box' />
            <textarea name="" id="" cols="30" rows="10" placeholder='message' className='box'></textarea>
            <input type="submit" value={'send message'}  className='btn'/>

        </form>
      
    </div>
</section>
</div>
    )
}

export default Contact