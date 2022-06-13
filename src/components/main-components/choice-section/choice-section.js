import { Wrapper, Container, Section, SectionTitle, SectionText, GridContainer, Boxes, Image, Title, Description } from "./choce-section-style"
import { items } from "./constant/items"


const ChoiceSection = () => {
    return(
        <Wrapper>
            <Container>
                <Section>
                    <SectionTitle>
                        Best way to eat healty food
                    </SectionTitle>
                    <SectionText>
                        Making a reservation at Delicious restaurant is easy and takes just a couple of minutes
                    </SectionText>
                </Section>
                <GridContainer>
                    {
                        items.map((key, i) => {
                            return(
                                <Boxes key={i}>
                                    <Image src={key.image} />
                                    <Title >{key.title}</Title>
                                    <Description>{key.desc}</Description>
                                </Boxes>
                            )
                        })
                    }
                </GridContainer>
            </Container>            
        </Wrapper>
    )
}

export default ChoiceSection