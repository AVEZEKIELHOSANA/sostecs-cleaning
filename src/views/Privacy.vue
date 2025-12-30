<template>
  <div class="page">
    <Header/>
    <main>
      <h1>{{ t('privacy') }}</h1>
      <p>All your privacy content here...</p>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { translations } from '../i18n.js'

export default { components: { Header, Footer }, setup() { return { t: translations.t.bind(translations) } } }
</script>
