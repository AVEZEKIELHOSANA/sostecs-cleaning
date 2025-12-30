<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title fade-in">{{ t('contactTitle') }}</h2>
    <div class="contact-info fade-in delay-1">
      <p><strong>Address:</strong> {{ t('address') }}</p>
      <p><strong>Phone:</strong> {{ t('phone') }}</p>
      <p><strong>Email:</strong> {{ t('email') }}</p>
    </div>
    <div class="map fade-in delay-2">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </section>
</template>

<script>
import { translations } from '../i18n.js'
export default { setup() { return { t: translations.t.bind(translations) } } }
</script>

<style>
.contact-section { padding: 4rem 2rem; text-align: center; }
.section-title { font-size: 2rem; margin-bottom: 2rem; }
.contact-info { margin-bottom: 2rem; }
.map iframe { border-radius: 12px; }
.fade-in { opacity: 0; animation: fadeIn 1s forwards; }
.fade-in.delay-1 { animation-delay: 0.2s; }
.fade-in.delay-2 { animation-delay: 0.4s; }
@keyframes fadeIn { to { opacity: 1; } }
</style>
