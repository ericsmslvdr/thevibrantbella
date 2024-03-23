import { Footer } from '@components/footer'
import { Header } from '@components/header'

export const MainLayout = ({ children }) => {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}