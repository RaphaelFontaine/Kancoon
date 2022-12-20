import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

export function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
        <div className='bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl'>
        <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <TextInput
            className='hover:border-green'
            placeholder="Nom/Prénom (obligatoire)"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
            />
            <TextInput
            className='hover:border-green'
            placeholder="E-mail (obligatoire)"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
            />
        </SimpleGrid>
        <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <TextInput
            className='focus:border-green'
            placeholder="Téléphone (obligatoire)"
            name="phone"
            variant="filled"
            {...form.getInputProps('phone')}
            />
            <TextInput
            className='hover:border-green'
            placeholder="Sujet"
            name="sujet"
            variant="filled"
            {...form.getInputProps('sujet')}
            />
        </SimpleGrid>
        <Textarea
            className='hover:border-green'
            mt="md"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps('subject')}
        />

        <Group position="center" mt="xl">
            <Button type="submit" size="md" className='bg-black text-white hover:text-black hover:bg-white transition-all duration-500'>
            Envoyer
            </Button>
        </Group>
        </div>
    </form>
  );
}