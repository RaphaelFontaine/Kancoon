import { TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
import React, { useRef } from 'react';
// import { useForm } from "react-hook-form";
import { IMail } from 'models';
import { toast } from 'react-hot-toast';
import { useForm, ValidationError } from '@formspree/react';

const PHONE_REGEX = new RegExp(/^(0|\+33)[6-7]([0-9]{2}){4}$/);
const MAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

export function ContactForm() {
  const [state, handleSubmit] = useForm("mnqydqgy");

  toast.success('Votre formulaire a bien été envoyé')
  // if (state.succeeded) {
  //   toast.success('Votre formulaire a bien été envoyé')
  // }
  // if (!state.errors) {
  //   toast.error('Echec lors de l\'envoi de votre formulaire')
  // }
  return (
    <div className='bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl'>
      <form onSubmit={handleSubmit}>
        {/* <div className="flex flex-col"> */}
          <div className='flex flex-row items-center justify-center px-10 py-10 space-x-5'>
            <div className='flex-col'>
              <div>
                <label className='text-white' htmlFor="name">
                  Nom *
                </label>
              </div>
              <div>
                <input
                  className='focus:border-green text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-64 h-8'
                  id="name"
                  type="text" 
                  name="name"
                  placeholder="Jean Dupont"
                  required={true}
                />
              </div>
            </div>  
            <div className='flex-col'>
              <div>
                <label className='text-white' htmlFor="email">
                  E-mail *
                </label>
              </div>
              <div>
                <input
                  className='focus:border-green text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-64 h-8'
                  id="email"
                  type="email" 
                  name="email"
                  placeholder="jean.dupont@gmail.com"
                  required={true}
                />
              </div>  
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>  
          </div>  
          <div className='flex flex-row items-center justify-center px-10 py-10 space-x-5'>
            <div className='flex-col'>
              <div>
                <label className='text-white' htmlFor="phone">
                  Téléphone *
                </label>
              </div>
              <div>
                <input
                  className='focus:border-green text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-64 h-8'
                  id="phone"
                  type="phone" 
                  name="phone"
                  placeholder="0611223344"
                  required={true}
                />
              </div>
              <ValidationError 
                prefix="phone" 
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className='flex-col'>
              <div>
                <label className='text-white' htmlFor="subject">
                  Sujet
                </label>
              </div>
              <div>
                <input
                  className='focus:border-green text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-64 h-8'
                  id="subject"
                  type="text" 
                  name="subject"
                  placeholder="Stores Bannes"
                />
              </div>
              <ValidationError 
                prefix="subject" 
                field="subject"
                errors={state.errors}
              />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center px-10 py-10 pt-6'>
            <label className='text-white flex items-start justify-start' htmlFor="message">
              Message
            </label>
            <input
              className='focus:border-green text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-full h-40'
              id="message"
              type="text" 
              name="message"
              placeholder="Votre message"
            />
            <ValidationError 
              prefix="message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <div className='flex items-center justify-center pb-4'>
            <Button type="submit" size="md" className='bg-white button-form text-green hover:text-white mt-7 hover:bg-green transition-all active:scale-90 duration-1000 mb-10'>
                  Envoyer
            </Button>
          </div>
        {/* </div> */}
      </form> 
    </div>

  );
}

export default function GetInTouchSimple() {

  return (
    <ContactForm />
  );
}

// export function GetInTouchSimple() {

//   const { register, trigger, getValues, formState : { errors } } = useForm<IMail>()

//   const submitForm = async() => {
//     const is_valid = await trigger()
//     if(!is_valid) return
//     const requestOptions : RequestInit = {
//       method: 'POST',
//       headers: { 
//         'Content-Type': 'application/json' 
//       },
//       body: JSON.stringify(getValues())
//     }
    
//     const asyncFunc = async() => {
//       const res = await fetch('api/send_email', requestOptions)
//       if(!res.ok){
//         throw new Error("Votre mail error")
//       }
//     } 

//     toast.promise(asyncFunc(), {
//       loading : 'Envoi de votre mail en cours',
//       success : 'Votre mail a été envoyé avec succès !',
//       error : (err) => err.message
//     })
//   }
// }


