import Header from '../components/header/header'
import { Container } from './layoutStyle'

export const Layout = ({children}) => {
    return(
        <Container>
            <Header/>
            <main>{ children }</main>
        </Container>
    )
}