import { TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
import React, { useRef, useState } from 'react';
import { IMail } from 'models';
import { toast } from 'react-hot-toast';
import { ValidationError } from '@formspree/react';
import axios from 'axios';
import { useForm, FieldErrors } from 'react-hook-form';

const PHONE_REGEX = new RegExp(/^(0|\+33)[6-7]([0-9]{2}){4}$/);
const MAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

export function ContactForm() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const phoneRegex = new RegExp(/^(0|\+33)[6-7]([0-9]{2}){4}$/);

  const emailRef = React.useRef<HTMLInputElement>(null);
  const phoneRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Utilisation d'axios pour envoyer le formulaire à Formsprée
      await axios.post('https://formspree.io/mnqydqgy', data);
      toast.success('Le formulaire a été soumis avec succès!')

      setSubmitted(true);
    } catch (error) {
      toast.error('Une erreur est survenue lors de la soumission du formulaire.\nVeuillez contactez le 02 51 95 94 00')
    }

    setIsSubmitting(false);
  };

  // const [state, handleSubmit] = useForm("mnqydqgy");
  // console.log(state)
  // if (state.succeeded) {
  //   console.log('succes')
  //   toast.success('Votre formulaire a bien été envoyé')
  // }

  // if (state.errors) {
  //   console.log('error')
  //   toast.error('Echec lors de l\'envoi de votre formulaire')
  // }
  return (
    <div className='bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl'>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  className='focus:border-green overflow-hidden text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-64 h-8'
                  id="name"
                  type="text" 
                  name="name"
                  placeholder=" Jean Dupont"
                  required= {true}
                />
                {errors.name && <p className='text-white absolute text-satisfaction'>Ce champ est requis.</p>}
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
                  type="text" 
                  placeholder=" jean.dupont@gmail.com"
                  {...register('email', {
                    required: 'Veuillez entrer votre adresse e-mail.',
                    pattern: {
                      value: emailRegex,
                      message: 'Veuillez entrer une adresse e-mail valide.',
                    },
                    validate: (value) =>
                      value.trim() !== '' ||
                      'Veuillez entrer votre adresse e-mail.',
                  })}
                />
                {errors.email && <p className='text-white absolute text-satisfaction'>{errors.email.message}</p>}
              </div> 
              {/* {errors.phoneNumber && <p>{errors.email.message}</p>}  */}
              {/* <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              /> */}
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
                  type="text" 
                  placeholder=" 0611223344"
                  {...register('phoneNumber', {
                    required: 'Veuillez entrer votre numéro de téléphone.',
                    pattern: {
                      value: phoneRegex,
                      message: 'Veuillez entrer un numéro de téléphone valide.',
                    },
                    validate: (value) =>
                      value.trim() !== '' ||
                      'Veuillez entrer votre numéro de téléphone.',
                  })}
                />
              </div>
              {errors.phoneNumber && <p className='text-white absolute text-satisfaction'>{errors.phoneNumber.message}</p>}
              {/* <ValidationError 
                prefix="phone" 
                field="phone"
                errors={state.errors}
              /> */}
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
                  placeholder=" Stores Bannes"
                />
              </div>
              {/* <ValidationError 
                prefix="subject" 
                field="subject"
                errors={state.errors}
              /> */}
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
              placeholder=" Votre message"
            />
            {/* <ValidationError 
              prefix="message" 
              field="message"
              errors={state.errors}
            /> */}
          </div>
          <div className='flex items-center justify-center pb-4'>
            <Button type="submit" disabled={isSubmitting} size="md" className='bg-white button-form text-green hover:text-white mt-7 hover:bg-green transition-all active:scale-90 duration-1000 mb-10'>
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
    <ContactForm/>
  );
}

