import { Section, SectionTitle, SectionText, Div1, Button } from "../food-section-style"

const Header = () => {
    return(
        <Section>
            <Div1>
                <SectionTitle>
                    Best way to eat healty food
                </SectionTitle>
                <SectionText>
                    Making a reservation at Delicious restaurant is easy and takes just a couple of minutes
                </SectionText>
            </Div1>
            <Div1>
                <Button>Full Menu</Button>
            </Div1>
        </Section>
    )
}

export default Header