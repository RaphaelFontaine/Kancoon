import { TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { IMail } from 'models';
import { RequestOptions } from 'https';


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
            <TextInput label="Nom complet" placeholder="Ahmed Sila"
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
            <TextInput
              classNames={{
                "input": "focus:border-green"
              }}
              className='hover:border-green'
              placeholder="E-mail (obligatoire)"
              {...register('email', {
                required : { value : true, message : "Ce champ est requis !"},
                minLength : { value : 2, message : ""}
              })}
              error={errors.email?.message}
            />
        </SimpleGrid>
        <SimpleGrid className='px-10 py-10 space-x-5' cols={2} mt="xl" >
            <TextInput
              classNames={{
                "input": "focus:border-green"
              }}
              className='focus:border-green'
              placeholder="Téléphone (obligatoire)"
              {...register('phone', {
                required : { value : true, message : "Ce champ est requis !"},
                minLength : { value : 2, message : ""}
              })}
              error={errors.phone?.message}
            />
            <TextInput
              classNames={{
                "input": "focus:border-green"
              }}
              className='hover:border-green'
              placeholder="Sujet"
              {...register('subject')}
              error={errors.subject?.message}
            />
        </SimpleGrid>
        <Textarea
            classNames={{
              "input": "focus:border-green"
            }}
            className='mx-10'
            mt="md"
            placeholder="Message"
            maxRows={10}
            minRows={5}
            autosize
            {...register('message')}
            error={errors.message?.message}
        />
        
        <Group position="center" mt="xl" className='flex flex-col '>
          {/* <ReCAPTCHA className='mt-7' sitekey='6LcdHcsZAAAAAJqdcjHkgjydMxHY-jtTU-Jl0FrO'
          /> */}
          <Button onClick={submitForm}
          type="submit" size="md" className='bg-white button-form text-green hover:text-white mt-7 hover:bg-green transition-all active:scale-90 duration-1000 mb-10'>
            Envoyer
          </Button>
        </Group>
        </div>
    </div>
  );
}