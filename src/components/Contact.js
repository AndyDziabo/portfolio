import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SideBar from './SideBar';

function Contact() {
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({
      user_name: "",
      user_email: "",
      message: ""
    });

    const updateForm = (e) => {
      setForm ({
          ...form,
          [e.target.name]: e.target.value,
      });
    }

    const sendEmail = (e) => {
      e.preventDefault();

      if(e.target.user_name.value === ""){
        console.log("Must have name.")
        setErrorName(true);
      }else if(e.target.user_email.value === ""){
        console.log("Must have Email.")
        setErrorEmail(true);
      }else if(!/\S+@\S+.\S+/.test(e.target.user_email.value)){
        console.log("Must be a valid Email.")
      }else if(e.target.message.value === ""){
        console.log("Must have message.")
        setErrorMessage(true);
      }else{
        setSending(true);
        console.log("send email")
          emailjs.sendForm('service_5g1cmko', 'template_h42cuiw', e.target, 'u9NyyJilj9EpoYRK2')
            .then((result) => {
                console.log(result.text);
                setSent(true);
                setSending(false);
                setTimeout(function(){
                  setSent(false);
                },4000);
                setForm({
                  user_name: "",
                  user_email: "",
                  message: ""
                })
            }, (error) => {
                setSending(false);
                console.log(error.text);
            });
      }
      setTimeout(function(){
        setErrorName(false);
        setErrorEmail(false);
        setErrorMessage(false);
      },2000);
    };

    return(
      <div className='contact-container'>
        <SideBar />
        <form className='form' onSubmit={sendEmail}>
          {sent ?
          <div className='sent'>
            <h2>Message Sent Successfully, I will be in touch soon.</h2>
            <h2>Thank You</h2>
          </div>
          :
          <div>
          <div>
            <div>
              <label>Name {errorName ? <span className='error'> * Name is Required</span> : null }</label>
              <input 
                type="text" 
                name="user_name" 
                onChange={updateForm}
                value={form.user_name}
              />
              <label>Email {errorEmail ? <span className='error'> * Valid email Required</span> : null } </label>
              <input 
                type="email" 
                name="user_email"
                onChange={updateForm}
                value={form.user_email} 
              />
            </div>
          </div>
          <div>
            <div>
              <label>Message {errorMessage ? <span className='error'> * Message is Required</span> : null } </label>
            </div>
            <textarea 
              name="message"
              onChange={updateForm}
              value={form.message} 
            />
            <div>
              {sending ?
                <input className='sending' value=" Sending..." readOnly />
                :
                <input className='send-btn' type="submit" value="Send" />
              }
            </div>
            </div>
          </div>
          }
        </form>
      </div>
    )
}

export default Contact;