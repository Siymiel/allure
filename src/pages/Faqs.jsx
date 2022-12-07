import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Questions from '../components/sections/Faq';
import Announcements from '../components/Announcements';

const Faqs = () => {
  return (
    <main>
        <Announcements />
        <Header />
        <Hero title="Frequently Asked Questions" imageUrl="https://images.unsplash.com/photo-1535813547-99c456a41d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"/>
        <Questions />
        <Footer />
    </main>
  )
}

export default Faqs