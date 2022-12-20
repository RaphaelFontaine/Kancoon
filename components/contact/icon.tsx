export function Icon() {
    return (
      <div className="flex flex-col space-y-8 px-[15%] py-[15%] items-center justify-center text-white"> 
          <div className="flex flex-col items-center justify-center hover:bg-dark-grey w-[330px] h-[200px] bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl">
            <img className="bg-green rounded-[50%]"
                src="/assets/contact/tel.png"
                width="43px"
                height="43px"
                loading="lazy"
                >
            </img>
            <div className="px-[15%]">
                <a className="hover:text-green hover:bg-dark-grey transition-all duration-500 flex items-center justify-center" href="tel:+33251959400">02 51 95 94 00 <br/> <br/></a> 
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[330px] h-[200px] bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl">
            <img className="bg-green rounded-[50%]"
                src="/assets/contact/mail.png"
                width="43px"
                height="43px"
                loading="lazy"
                >
            </img>
            <div className="px-[15%]">
                <a className="hover:text-green transition-all duration-500" href="mailto:contact@kancoon.fr">contact@kancoon.fr</a>
            </div>
          </div>
          <div className="flex flex-col hover:bg-dark-grey items-center justify-center w-[330px] h-[200px] bg-light-grey border-2 border-white hover:border-green transition-all duration-500 rounded-xl">
            <img className="bg-green rounded-[50%]"
                src="/assets/contact/kancoon.png"
                width="43px"
                height="43px"
                loading="lazy"
                >
            </img>
            <div className="px-[15%]">
                <a className="hover:text-green transition-all duration-500" href="https://www.google.com/maps/place/Kancoon/@46.5190377,-1.7813082,15z/data=!4m2!3m1!1s0x0:0xae810b9969796b41?sa=X&ved=2ahUKEwjDgf3cxcDtAhUyxIUKHfn4AJoQ_BIwDHoECBYQBQ" target={"_blank"}> 
                    19 rue Clément Ader Olonne sur Mer 85340 Les Sables d’Olonne
                </a>
            </div>
          </div>
      </div>
    );
  }
  