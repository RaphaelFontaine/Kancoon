import { TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
import React from 'react';
import { useForm } from "react-hook-form";
import { IMail } from 'models';
import { toast } from 'react-hot-toast';

const PHONE_REGEX = new RegExp(/^(0|\+33)[6-7]([0-9]{2}){4}$/);
const MAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);


export function GetInTouchSimple() {

  const { register, trigger, getValues, formState : { errors } } = useForm<IMail>()

  const submitForm = async() => {
    const is_valid = await trigger()
    if(!is_valid) return
    const requestOptions : RequestInit = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(getValues())
    }
    const res = await fetch('api/send_email')
    if(res.ok){
      toast.success('Email envoyé avec succès !')

    }else{
      toast.error('Une erreur est survenue lors de l\'envoi')

    }
    // toast.promise(, requestOptions), {
    //   loading : 'Envoi de votre mail en cours',
    //   success : 'Votre mail a été envoyé avec succès !',
    //   error : (err) => err.message
    // })
  }

  return (
    <div>
        <div className='bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl'>
        <SimpleGrid className='px-10 pt-10 space-x-5' cols={2} mt="xl">
            <TextInput label="Nom complet" placeholder="Jean Dupont"
              {...register('full_name', {
                required : { value : true, message : "Ce champ est requis !"},
                minLength : { value : 2, message : ""}
              })}
              error={errors.full_name?.message}
              className='hover:border-green'
              classNames={{
                "input": "focus:border-green",
                'label' : "text-white"
              }}
            />
            <TextInput label="E-mail" placeholder="jean.dupont@gmail.com"
              classNames={{
                "input": "focus:border-green",
                'label' : "text-white"
              }}
              className='hover:border-green'
              {...register('email', {
                required : { value : true, message : "Ce champ est requis !"},
                pattern: { value : MAIL_REGEX, message : "Veuillez renseigner un email valide !"}
              })}
              error={errors.email?.message}
            />
        </SimpleGrid>
        <SimpleGrid className='px-10 py-10 space-x-5' cols={2} mt="xl" >
            <TextInput label="Téléphone" placeholder="0611223344"
              classNames={{
                "input": "focus:border-green",
                'label' : "text-white"
              }}
              className='focus:border-green'
              {...register('phone', {
                required : { value : true, message : "Ce champ est requis !"},
                pattern: { value : PHONE_REGEX, message : "error phone"}
              })}
              error={errors.phone?.message}
            />
            <TextInput label="Sujet" placeholder="Stores Bannes"
              classNames={{
                "input": "focus:border-green",
                'label' : "text-white"
              }}
              className='hover:border-green'
              {...register('subject')}
              error={errors.subject?.message}
            />
        </SimpleGrid>
        <Textarea label="Message"
            classNames={{
              "input": "focus:border-green",
              'label' : "text-white"
            }}
            className='mx-10'
            mt="md"
            maxRows={10}
            minRows={5}
            autosize
            {...register('message')}
            error={errors.message?.message}
        />
        
        <Group position="center" mt="xl" className='flex flex-col'>
          <Button onClick={submitForm} type="submit" size="md" className='bg-white button-form text-green hover:text-white mt-7 hover:bg-green transition-all active:scale-90 duration-1000 mb-10'>
            Envoyer
          </Button>
        </Group>
        </div>
    </div>
  );
}