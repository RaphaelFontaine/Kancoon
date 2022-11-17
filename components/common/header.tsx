import {
    createStyles,
    Menu,
    Center,
    Collapse,
    Burger,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import Link from 'next/link';
import { useState } from 'react';

interface Link {
    link: string;
    label: string;
    links?: undefined | {
        link: string;
        label: string;
    }[];
}
const links : Link[]=[
    {
        link : "/",
        label : "Accueil"
    },
    {
        link : "/la-societe",
        label : "La Société"
    },
    {
        link : "/pergolas",
        label : "Pergolas",
    },
    {
        link : "",
        label : "Stores",
        links : [
            {
                link : "/stores-interieurs-moustiquaires",
                label : "Stores Intérieurs - Moustiquaires"
            },
            {
                link : "/stores-exterieurs-stores-bannes",
                label : "Stores Extérieurs - Stores Bannes"
            },
            {
                link : "/parasols",
                label : "Parasols Professionnels"
            },
            {
                link : "/voiles-dombrages",
                label : "Voiles D'ombrage"
            }
        ]
    },
    {
        link : "/terrasses-bois-composite",
        label : "Terrasses",
    },
    {
        link : "/contact",
        label : "Contact",
    },
    {
        link : "https://www.decostory.fr/izy/",
        label : "Menuiserie IZY",
        links : [
            {
                link : "https://www.decostory.fr/izy/volets-sables-d-olonne",
                label : "Volets"
            },
            {
                link : "https://www.decostory.fr/izy/fenetres-sables-d-olonne",
                label : "Fenêtres"
            },
            {
                link : "https://www.decostory.fr/izy/portes-entree-sables-d-olonne",
                label : "Portes D'entrée"
            },
            {
                link : "https://www.decostory.fr/izy/portes-garage-sables-d-olonne",
                label : "Portes de Garage"
            },
            {
                link : "https://www.decostory.fr/izy/portails-clotures-sables-d-olonne",
                label : "Portail, Clôture"
            },
            {
                link : "https://www.decostory.fr/izy/veranda-sables-d-olonne",
                label : "Véranda"
            }
        ]
    }
]

export default function HeaderAction() {
    const [opened, setOpened] = useState(false);
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item className="transition-all duration-500 text-white hover:text-green font-police" key={item.link}>
                <Link
                    key={item.label}
                    href={item.link}
                    target={link.label == 'Menuiserie IZY' ? "_blank" : "_self"}
                >
                    {item.label}
                </Link>
            </Menu.Item>
        ));
  
        if (menuItems) {
            return (
                <Menu key={link.label} width={200} trigger="hover" transition={"scale-y"} transitionDuration={500} radius={0} offset={0} classNames={{
                    "dropdown" : "bg-light-grey border-t-[3px] border-x-0 border-b-0 border-green",
                    "item" : "hover:bg-light-grey",
                }}>
                    <Menu.Target>
                        <div className='flex items-center h-full'>
                            <Link 
                                key={link.label}
                                href={link.link}
                                className={`transition-all duration-500 text-white hover:text-green font-police ${link.label == 'Stores' ? "cursor-default" : "cursor-pointer" }`}
                                target={link.label == 'Menuiserie IZY' ? "_blank" : "_self"}
                            >
                                <Center>
                                    <span className="mr-1">
                                        {link.label}
                                    </span>
                                    <IconChevronDown size={16} stroke={1.5} />
                                </Center>
                            </Link>
                        </div>
                    </Menu.Target>
                    <Menu.Dropdown className='p-0'>
                        {menuItems}
                    </Menu.Dropdown>
                </Menu>
            );
        }
  
        return (
            <Link
                key={link.label}
                href={link.link}
                className="transition-all duration-500 text-white hover:text-green font-police"
            >
                {link.label}
            </Link>
        );
    });
  
    return (
        <div className='fixed top-0 lg:bg-dark-grey inset-x-0 font-police z-50'>
            <div className='h-24 max-w-6xl mx-auto bg-dark-grey flex items-center'>
                <Link href={"/"}>
                    <img src="/assets/all/logo-kancoon.png" alt={"Kancoon"} className="mx-2 h-14"/>
                </Link>
                <div className='hidden lg:flex items-center space-x-8 ml-20 h-full'>
                    {items}
                </div>
                <Burger
                    className='lg:hidden ml-auto mr-4 border-4 border-black'
                    color={opened ? '#ADC906' : 'white'}
                    opened={opened}
                    onClick={() => setOpened(!opened)}
                    />
            </div>
            <Collapse in={opened} className="lg:hidden mx-12 flex flex-col bg-footer-grey space-x-8 max-h-[85vh] overflow-y-scroll">
                {links.map(link => <Phone_menu_item link={link}/>)}
            </Collapse>
        </div>
    );
}


function Phone_menu_item({link} : {link : Link}){
    const [opened_phone, setOpened] = useState(false);

    return(
        <>
            <div className='flex border-b-2 text-white border-b-white hover:bg-white/20'>
                <Link 
                    href={link.link}
                    target={link.label == 'Menuiserie IZY' ? "_blank" : "_self"}
                    className={`flex item-center pl-4 py-3 hover:text-green transition-all ${link.label == 'Stores' ? "cursor-default" : "cursor-pointer" }`}>
                        {link.label.toUpperCase()}
                </Link> 
                {
                    link?.links && 
                    <button 
                        className='ml-auto px-4 py-3 border-2 border-black hover:bg-footer-grey hover:text-green transition-all'
                        onClick={() => setOpened(!opened_phone)}>
                            {opened_phone ? '-' : '+'}
                    </button>
                }
            </div>
            {link?.links && 
                <Collapse in={opened_phone} className='ml-auto px-4 hover:text-green transition-all'>
                    {link.links.map(sublink => 
                        <Link
                            key={sublink.label}
                            href={sublink.link}
                            className="flex item-center pl-6 py-3 border-b-2 border-white hover:bg-white/20 transition-all duration-500 text-white hover:text-green text-sm font-police"
                            target={link.label == 'Menuiserie IZY' ? "_blank" : "_self"}
                        >
                            {sublink.label.toUpperCase()}
                        </Link>    
                    )}
                </Collapse>
            }
        </>
    )
}