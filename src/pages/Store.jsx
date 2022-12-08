import Header from "../components/Header"
import Footer from "../components/Footer"
import Announcements from "../components/Announcements"
import Hero from "../components/Hero"
import VendorSection from "../components/sections/VendorSection"

const Store = () => {
  return (
    <main>
        <Announcements />
        <Header />
        <Hero title="Store Title" imageUrl="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
        <VendorSection />
        <Footer />
    </main>
  )
}

export default Store