
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f739jup', 'template_ywiq3wo', form.current, {
        publicKey: '2lDTsgjoX3s301Wc-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  const shoot=()=>{
    alert('Your Message Successfully Sent!')
    
  }

  return(
    <section id="Contact" className="contact--section" >
    <div >
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">Contact us to make projects...</p>
    </div>
    <form className="contact--form--container" ref={form} onSubmit={sendEmail} >
        <div className="container2">
            <label htmlFor="first-name" className="contact--label">
                <span className="text-md">First Name</span>
                <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
            </label>
            <label htmlFor="last-name" className="contact--label">
                <span className="text-md">Last Name</span>
                <input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
            </label>
            <label htmlFor="email" className="contact--label">
                <span className="text-md">Email</span>
                <input type="email" className="contact--input text-md" name="email" id="email" required />
            </label>
            <label htmlFor="phone-number" className="contact--label">
                <span className="text-md">Phone Number</span>
                <input type="number" className="contact--input text-md" name="phone-number" id="phone-number" required />
            </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
                <span className="text-md">Choose a topic</span>
                <select  id="choose-topic" name="choose-topic" className="contact--input text-md">
                    <option>Select One...</option>
                    <option>Websites...</option>
                    <option>Apps..</option>
                    <option>Others...</option>
                </select>
            </label>
            <label htmlFor="message" className="contact--label">
                <span className="text-md">Message</span>
                <textarea  className="contact--input text-md" name="message"  id="message" rows="8" placeholder="Type your message..."/>
            </label>
            <label htmlFor="checkbox" className="checkbox--label">
                <input type="checkbox" required name="checkbox" id="checkbox"/>
                <span className="text-sm"> I accept the terms</span>
            </label>
            <div >  <button type='submit' onClick={shoot}  className="btn btn-primary contact--form-btn">Submit</button> </div>
    </form>
    </section>
)
}; 




