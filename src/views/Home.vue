<template>
  <div>
    <Header/>
    <Hero/>
    <ConnectorStrip />
    <About/>
    <Services/>
    <WhyChooseUs/>
    <HowToOrder/>
    <Packages/>
    <Booking/>
    <Contact/>
    <JoinOurTeam/>
    <Footer/>
    <WhatsappButton/>
    
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import WhyChooseUs from '../components/WhyChooseUs.vue'
import Booking from '../components/Booking.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import WhatsappButton from '../components/WhatsappButton.vue'
import ConnectorStrip from '@/components/ConnectorStrip.vue'
import Packages from '@/components/Packages.vue'
import HowToOrder from '@/components/HowToOrder.vue'
import JoinOurTeam from '@/components/JoinOurTeam.vue'


export default {
  components: { Header, Hero, About, Services, WhyChooseUs, Booking, Contact, Footer, WhatsappButton, ConnectorStrip, Packages, HowToOrder,JoinOurTeam }
}
</script>
