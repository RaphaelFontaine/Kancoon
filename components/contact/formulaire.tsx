import { TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { IMail } from 'models';

export function GetInTouchSimple() {
  const { register, trigger, getValues, formState : { errors } } = useForm<IMail>()

  const submitForm = async() => {
    const is_valid = await trigger()
    if(!is_valid) return
    try {
      const requestOptions : RequestInit = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(getValues())
      }
      const response = await fetch('api/send_email', requestOptions)
      console.log(response)
    } catch (error) {
      
    }
  }

  return (
    <div>
        <div className='bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl'>
        <SimpleGrid className='px-10 pt-10 space-x-5' cols={2} mt="xl" >
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
                minLength : { value : 2, message : ""}
              })}
              error={errors.email?.message}
            />
        </SimpleGrid>
        <SimpleGrid className='px-10 py-10 space-x-5' cols={2} mt="xl" >
            <TextInput label="Téléphone" placeholder="06 11 22 33 44"
              classNames={{
                "input": "focus:border-green",
                'label' : "text-white"
              }}
              className='focus:border-green'
              {...register('phone', {
                required : { value : true, message : "Ce champ est requis !"},
                minLength : { value : 2, message : ""}
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
          {/* <ReCAPTCHA className='mt-7' sitekey='6LcdHcsZAAAAAJqdcjHkgjydMxHY-jtTU-Jl0FrO'
          /> */}
          <Button onClick={submitForm} type="submit" size="md" className='bg-white button-form text-green hover:text-white mt-7 hover:bg-green transition-all active:scale-90 duration-1000 mb-10'>
            Envoyer
          </Button>
        </Group>
        </div>
    </div>
  );
}