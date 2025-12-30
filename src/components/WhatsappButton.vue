<template>
  <a :href="whatsAppLink" target="_blank" class="whatsapp-btn">
    <whatsappIcon />
  </a>
</template>

<script>
import { translations } from '../i18n.js'
import whatsappIcon from '../assets/whatsappIcon.vue'
export default {
  computed: {
    whatsAppLink() {
      const text = encodeURIComponent(translations.t('whatsappMessage'))
      return `https://wa.me/673717424?text=${text}`
    }
  }
}
</script>

<style>
.whatsapp-btn {
  position: fixed; bottom: 20px; right: 20px;
  width: 60px; height: 60px; background: #25D366;
  border-radius: 50%; display: flex; justify-content: center; align-items: center;
  animation: pulse 2s infinite; z-index: 1000;
}
.whatsapp-btn img { width: 30px; height: 30px; }
@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
</style>
