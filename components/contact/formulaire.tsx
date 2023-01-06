import { TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef } from 'react';

export function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone:'',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      phone: (value) => value.trim().length < 9 ,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
        <div className='bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl'>
        <SimpleGrid className='px-10 pt-10 space-x-5' cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <TextInput
              classNames={{
                "input": "focus:border-green"
              }}
              className='hover:border-green'
              placeholder="Nom/Prénom (obligatoire)"
              name="name"
              variant="filled"
              {...form.getInputProps('name')}
              />
              <TextInput
              classNames={{
                "input": "focus:border-green"
              }}
              className='hover:border-green'
              placeholder="E-mail (obligatoire)"
              name="email"
              variant="filled"
              {...form.getInputProps('email')}
            />
        </SimpleGrid>
        <SimpleGrid className='px-10 py-10 space-x-5' cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <TextInput
              classNames={{
                "input": "focus:border-green"
              }}
              className='focus:border-green'
              placeholder="Téléphone (obligatoire)"
              name="phone"
              variant="filled"
              {...form.getInputProps('phone')}
              />
              <TextInput
              classNames={{
                "input": "focus:border-green"
              }}
              className='hover:border-green'
              placeholder="Sujet"
              name="sujet"
              variant="filled"
              {...form.getInputProps('sujet')}
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
            name="message"
            variant="filled"
            {...form.getInputProps('message')}
        />
        
        <Group position="center" mt="xl" className='flex flex-col '>
          <ReCAPTCHA className='mt-7' sitekey='6LcdHcsZAAAAAJqdcjHkgjydMxHY-jtTU-Jl0FrO'
          />
          <Button type="submit" size="md" className='bg-black text-white mt-7 hover:bg-green transition-all duration-1000 mb-10'>
            Envoyer
          </Button>
        </Group>
        </div>
    </form>
  );
}