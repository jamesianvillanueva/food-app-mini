import { Container, Wrapper, Div1, Button, Img, SectionTitle, LeftSection, SectionText } from './mainStyle'


const Main = () => {
    return(
        <Wrapper>
            <Container>
                <Div1>
                    <LeftSection>
                        <SectionTitle>
                            Meet, Eat & Enjoy <br/>
                            the true taste
                        </SectionTitle>
                        <SectionText>
                            Making a reservation at Delicious restaurant is easy and takes just a couple of minutes
                        </SectionText>
                        <Button>Our Menu</Button>
                    </LeftSection>        
                </Div1>
                <Div1>
                    <Img src='images/main-content-background.jpg'/>
                </Div1>
            </Container>
        </Wrapper>    
    )
}

export default Main