import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    )
}

export default Contact;