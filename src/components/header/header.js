import { Wrapper, Container, Div1, Div2, Div3, Div4, Button } from "./headerStyle"
import React, { useState } from 'react'

import 'twin.macro'
import { Links } from "./links/link"

const Header = () => {
    let [open, setOpen] = useState(false);
    return(
        <Wrapper>
            <Container>
                <Div1>
                    <ion-icon color='coral' name="fast-food-outline"></ion-icon>
                    <span tw='font-semibold text-orange-500 text-lg cursor-pointer'>Food Picks</span>
                </Div1>
                <Div2>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 bg-black':'top-[-490px]'}`}>
                        {
                            Links.map((link)=>(
                                <li key={link.name} className='md:ml-8 md:my-0 my-7'>
                                    <a href={link.link} className='text-xs text-white font-roboto hover:text-orange-500 duration-500'>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </Div2>
                <Div3>
                    <Button>Order Food</Button>
                </Div3>
                <Div4 onClick={()=>setOpen(!open)}>
                    <ion-icon color='coral' name={open ? 'close-outline':'menu-outline'}></ion-icon>
                </Div4>
            </Container>
        </Wrapper>
    )

}

export default Header