import { useWindowScroll } from '@mantine/hooks';
import { Button, Group } from '@mantine/core';
import { BsArrowUpCircle } from 'react-icons/bs';

export default function ScrollTopButton() {
    const [scroll, scrollTo] = useWindowScroll();
  
    return (
      <Group position="right">
        <BsArrowUpCircle className='border-full mr-8 w-12 h-12 cursor-pointer bg-black absolute rounded-full hover:bg-green transition-all duration-500' onClick={() => scrollTo({ y: 0 })}/>
      </Group>
    );
  }