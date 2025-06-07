import React from 'react'
import '../../assets/style/home.css'
import Banner from './components/Banner'
import Services from './components/Services'
import Project from './components/Project'
import Working from './components/Working'
import ContactUs from '../contact/ContactUs'
export default function Index() {
  return (
    <>
    <Banner/>
    <Services/>
    <Project/>
    <Working/>
    <ContactUs/>
    </>
  )
}
