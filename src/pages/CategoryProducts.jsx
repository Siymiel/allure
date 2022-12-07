import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import CatProducts from "../components/sections/CategoryProducts"
import Announcements from '../components/Announcements'

const CategoryProducts = () => {
  return (
    <main>
        <Announcements />
        <Header />
        <Hero title="Category Name" imageUrl="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        <CatProducts />
        <Footer />
    </main>
  )
}

export default CategoryProducts