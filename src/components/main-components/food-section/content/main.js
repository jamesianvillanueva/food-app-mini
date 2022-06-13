import { Links } from "../links/links"
import { NavBarContainer, GridContainer, Boxes, Image, Title, Description, ButtonLabel} from "../food-section-style"
import { items } from "../constant/items"

const Main = () => {
    return(
        <NavBarContainer>
            <div>
                <ul className="flex flex-row border-b border-b-gray-400">
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-1 md:my-0 my-7 font-bold p-5'>
                            <a href={link.link} className='md:text-base text-sm text-white font-roboto hover:text-orange-400 duration-500 hover:underline hover:underline-offset-[20px] hover:decoration-4'>{link.name}</a>
                        </li>
                    ))
                }
                </ul>                
            </div>
            <GridContainer>
                {
                    items.map((key, i) => {
                        return(
                            <Boxes key={i}>
                                <Image src={key.image} />                   
                                <Title >{key.title}</Title>
                                <Description>{key.desc}</Description>
                                <ButtonLabel><a className="underline underline-offset-[4px] decoration-3">Order Now</a></ButtonLabel>
                            </Boxes>
                        )
                    })
                }
            </GridContainer>
            
        </NavBarContainer>
    )
}

export default Main