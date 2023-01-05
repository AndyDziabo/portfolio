import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SideBar from './SideBar';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      if(e.target.user_name.value === ""){
        console.log("Must have name.")
      }else if(e.target.user_email.value === ""){
        console.log("Must have Email.")
      }else if(!/\S+@\S+.\S+/.test(e.target.user_email.value)){
        console.log("Must be a valid Email.")
      }else if(e.target.message.value === ""){
        console.log("Must have message.")
      }else{
        console.log("send email")
          emailjs.sendForm('service_5g1cmko', 'template_h42cuiw', form.current, 'u9NyyJilj9EpoYRK2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
      }
    };

    return(
      <div className='contact-container'>
        <SideBar />
        <form className='form' ref={form} onSubmit={sendEmail}>
          <div>
            <div>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
          </div>
          <div>
            <div>
              <label>Message</label>
            </div>
            <textarea name="message" />
            <div>
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>
    )
}

export default Contact;