import { Links } from "../links/links"
import { NavBarContainer, GridContainer, Boxes, Title, ImageContainer, Description, ButtonLabel} from "../food-section-style"
import Image from 'next/image'
import { items, itemss } from "../constant/items"
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from "react"
import { sliderSettings } from "../carousel/carousel-settings"

const Main = () => {
    const [FilteredMenu, setFilteredMenu] = useState(items)

    
    const GetValue = value => {      
        if(value == 'all'){
            setFilteredMenu(items)
        }
        else{
            setFilteredMenu(items.filter(item => item.foodtype == value))  
        }      
    }
    
    return(
        
        <NavBarContainer>
            <div>
                <ul className="flex flex-row border-b border-b-gray-400">
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-1 md:my-0 my-7 font-bold p-5'>
                            <p onClick={(e) => GetValue(link.id)} className='md:text-base text-sm text-white font-roboto hover:text-orange-400 duration-500 hover:underline hover:underline-offset-[20px] hover:decoration-4'>{link.name}</p>
                        </li>
                    ))
                }
                </ul>                
            </div>
            <GridContainer>
                <Slider {...sliderSettings}>
                {
                    FilteredMenu.map((key, i) => {
                        return(                            
                            <Boxes key={i}>
                                <ImageContainer>
                                    <Image src={key.image} width='200' height='200' className='block rounded-full'/>    
                                </ImageContainer>               
                                <Title >{key.title}</Title>
                                <Description>{key   .desc}</Description>
                                <ButtonLabel><a className="underline underline-offset-[4px] decoration-3">Order Now</a></ButtonLabel>
                            </Boxes>
                        )
                    })
                }
                </Slider>
            </GridContainer>
            
        </NavBarContainer>
    )
}

export default Main