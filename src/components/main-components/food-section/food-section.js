import { Wrapper, Container } from "./food-section-style"
import Header from "./content/header"
import Main from "./content/main"

const FoodSection = () => {
    return (
        <Wrapper>
            <Container>
                <Header />
                <Main />
            </Container>
        </Wrapper>
    )
}

export default FoodSection