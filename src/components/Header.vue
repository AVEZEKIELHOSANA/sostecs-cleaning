<template>
  <header class="header">
    <!-- Logo -->
    <div class="logo">
      <img src="@/assets/logo.jpg" alt="SosTecsltd" />
      <span>Cleaning</span>
    </div>

    <!-- Desktop Navigation -->
   <nav class="nav-links">
  <a href="#home">
    <font-awesome-icon icon="home" />
    {{ translations.t('home') }}
  </a>

  <a href="#about">
    <font-awesome-icon icon="info-circle" />
    {{ translations.t('about') }}
  </a>

  <a href="#services">
    <font-awesome-icon icon="broom" />
    {{ translations.t('services') }}
  </a>

  <a href="#booking">
    <font-awesome-icon icon="calendar-check" />
    {{ translations.t('booking') }}
  </a>

  <a href="#contact">
    <font-awesome-icon icon="envelope" />
    {{ translations.t('contact') }}
  </a>
</nav>

<div class="mobile-right">
    <!-- Mobile Burger Button -->
    <div class="burger" @click="toggleMobileMenu">
      <span :class="{ open: mobileOpen }"></span>
      <span :class="{ open: mobileOpen }"></span>
      <span :class="{ open: mobileOpen }"></span>
    </div>

    <div class="lang-switch">
  <button 
    :class="{ active: translations.lang === 'en' }"
    @click="setLang('en')">
    EN
  </button>

  <button 
    :class="{ active: translations.lang === 'fr' }"
    @click="setLang('fr')">
    FR
  </button>
</div>
</div>

    <!-- Mobile Menu -->
    <transition name="slide">
  <div v-if="mobileOpen" class="mobile-menu">

  <button class="close-btn" @click="closeMenu">
    <font-awesome-icon :icon="['fas','times']" />
  </button>

  <a href="#home" @click="closeMenu">
    <font-awesome-icon icon="home" />
    {{ translations.t('home') }}
  </a>

  <a href="#about" @click="closeMenu">
    <font-awesome-icon icon="info-circle" />
    {{ translations.t('about') }}
  </a>

  <a href="#services" @click="closeMenu">
    <font-awesome-icon icon="broom" />
    {{ translations.t('services') }}
  </a>

  <a href="#booking" @click="closeMenu">
    <font-awesome-icon icon="calendar-check" />
    {{ translations.t('booking') }}
  </a>

  <a href="#contact" @click="closeMenu">
    <font-awesome-icon icon="envelope" />
    {{ translations.t('contact') }}
  </a>

  <div class="mobile-lang">
    <button @click="setLang('en')">EN</button>
    <button @click="setLang('fr')">FR</button>
  </div>

</div>

</transition>

  </header>
</template>

<script setup>
import { ref } from 'vue'
import { translations } from '@/i18n'



const userLang = navigator.language || navigator.userLanguage;
// e.g. "en-US" → take only "en"
const langCode = userLang.split('-')[0];
console.log(langCode);

const mobileOpen = ref(false)

function toggleMobileMenu() {
  mobileOpen.value = !mobileOpen.value
}

function closeMenu() {
  mobileOpen.value = false
}

function setLang(lang) {
  translations.switchLang(lang)
}
</script>

<style scoped>
/* Header container */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.logo img{
  width: 75px;
}

/* Desktop nav */
.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #28a745; /* green accent */
}

/* Burger menu */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 18px;
  cursor: pointer;
}

.burger span {
  display: block;
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.burger span.open:nth-child(2) {
  opacity: 0;
}

.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.mobile-right {
  display: flex;
  align-items: center;
  gap: 1rem; /* <-- small space between burger & lang */
}


.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
}


/* Mobile menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  background: #fff;
  padding: 2.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: -2px 0 8px rgba(0,0,0,0.2);
  z-index: 200;
}

.mobile-menu a {
  font-size: 1.2rem;
  color: #333;
}

/* Slide animation */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

.lang-switch {
  display: flex;
  gap: 8px;
  align-items: center;
}

.lang-switch button,
.mobile-lang button {
  border: 1px solid #ccc;
  background: white;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.lang-switch button.active,
.mobile-lang button.active {
  background: #0ea5e9;
  color: white;
  border-color: #0ea5e9;
}


/* Responsive */
@media screen and (min-width: 768px){
  .nav-links{
    display: flex;
  }

}
@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .burger {
    display: flex;
  }
  .close-btn{
    display: flex;
  }
}
</style>
