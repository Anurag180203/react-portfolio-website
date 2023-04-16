import "./contact.css"
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8al654g', 'template_vrwy65w', form.current, '9s35f86NurmacCXOx')
    
    e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anurag180203@gmail.com</h5>
            <a href="mailto:anurag180203@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Other Email</h4>
            <h5>anuarg180203@gmail.com</h5>
            <a href="mailto:anuarg180203@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8433264195</h5>
            <a href="https://api.whatsapp.com/send?phone+918433264195" target='_blank'>Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact;