import { Button } from '@mantine/core';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useForm } from 'react-hook-form';

type FormValues = {
  Nom: string;
  Email: string;
  Téléphone: string;
  Sujet: string;
  Message: string;
};

export function ContactForm() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const phoneRegex = new RegExp(/^(0|\+33)[6-7]([0-9]{2}){4}$/);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    
      const result = await res.json();
      if (result.success) {
        toast.success("Le formulaire a été soumis avec succès !");
        setSubmitted(true);
      } else {
        toast.error("Une erreur est survenue lors de l'envoi du mail.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Impossible d'envoyer le message.\nVeuillez contacter le 02 51 95 94 00");
    }
    setIsSubmitting(false);    
  };
  return (
    <div className='bg-light-grey border-2 w-[90%] ft:w-auto border-white hover:border-green transition-all duration-500 rounded-xl'>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-wrap items-center justify-center px-10 py-5 ft:py-10 gap-5'>
            <div className='flex-col'>
              <div>
                <label className='text-white' htmlFor="name">
                  Nom *
                </label>
              </div>
              <div>
                <input
                  className='focus:border-green overflow-hidden text-dark-grey bg-white text-satisfaction rounded-sm border-1 border-white border-xl w-64 h-8'
                  type="text" 
                  id="Nom"
                  placeholder=" Jean Dupont"
                  {...register('Nom', { required: true })}
                />
                {errors.Nom && <p className='text-white absolute text-satisfaction'>Ce champ est requis.</p>}
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
                  id="Email"
                  type="text" 
                  placeholder=" jean.dupont@gmail.com"
                  {...register('Email', {
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
                {errors.Email && <p className='text-white absolute text-satisfaction'>{errors.Email.message}</p>}
              </div> 
            </div>  
          </div>  
          <div className='flex flex-wrap items-center justify-center px-10 py-5 ft:py-10 gap-5'>
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
                  {...register('Téléphone', {
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
              {errors.Téléphone && <p className='text-white absolute text-satisfaction'>{errors.Téléphone.message}</p>}
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
                  placeholder=" Stores Bannes"
                  {...register('Sujet', { required: false })}
                />
              </div>
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
              placeholder=" Votre message"
              {...register('Message', { required: false })}
            />
          </div>
          <div className='flex items-center justify-center pb-4'>
            <Button type="submit" disabled={isSubmitting} size="md" className='bg-white button-form text-green hover:text-white mt-7 hover:bg-green transition-all active:scale-90 duration-1000 mb-10'>
                  Envoyer
            </Button>
          </div>
      </form> 
    </div>

  );
}

export default function GetInTouchSimple() {
  return (
    <>
      <ContactForm/>
    </>
  );
}
