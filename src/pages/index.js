import Head from 'next/head'
import Image from 'next/image'
import ChoiceSection from '../components/main-components/choice-section/choice-section'
import FoodSection from '../components/main-components/food-section/food-section'
import Main from '../components/main-components/main/main'
import { Layout } from '../layout/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Layout>
            <Main />
            <ChoiceSection />
            <FoodSection />
        </Layout>
    )
}
