import { Footer, Header } from "@shared/components"

export const MainLayout = ({ children }) => {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}