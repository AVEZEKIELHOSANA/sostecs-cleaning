<template>
  <section class="connector-strip fade-up">
    <p>{{ t('connectorMessage') }}</p>
  </section>
</template>

<script>
import { translations } from '../i18n.js'

export default {
  setup() {
    const t = translations.t.bind(translations)
    return { t }
  }
}
</script>

<style scoped>
.connector-strip {
  width: 80%;
  padding: 1.4rem 1rem;
  margin: 0 auto;
  text-align: center;

  /* soft luxury look */
  background: linear-gradient(135deg, #f8fbfdff 0%, #f8fffa 100%);
  border-radius: 14px;

  color: #1b3a57;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.3px;

  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.07);

  /* spacing between sections */
  margin-top: -1.5rem;
  margin-bottom: 2.5rem;
}

/* ✨ fade-up animation */
.fade-up {
  opacity: 0;
  transform: translateY(14px);
  animation: fadeUp 0.9s ease-out forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* mobile love */
@media (max-width: 768px) {
  .connector-strip {
    font-size: 0.95rem;
    border-radius: 12px;
  }
}
</style>
