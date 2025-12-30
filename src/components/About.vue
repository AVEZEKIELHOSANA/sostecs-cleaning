<template>
  <section id="about" class="about-section" ref="aboutRef">
    <h2 class="section-title reveal">{{ t('aboutTitle') }}</h2>

    <p class="intro reveal delay-1">
      {{ t('aboutIntro') }}
    </p>

    <div class="about-cards">
      <div class="card reveal delay-1">
        <h3>{{ t('aboutWho') }}</h3>
        <p>{{ t('aboutWhoText') }}</p>
      </div>

      <div class="card reveal delay-2">
        <h3>{{ t('aboutEco') }}</h3>
        <p>{{ t('aboutEcoText') }}</p>
      </div>

      <div class="card reveal delay-3">
        <h3>{{ t('aboutTeam') }}</h3>
        <p>{{ t('aboutTeamText') }}</p>
      </div>

      <div class="card reveal delay-4">
        <h3>{{ t('aboutTrust') }}</h3>
        <p>{{ t('aboutTrustText') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { translations } from '../i18n.js'

export default {
  setup() {
    const t = translations.t.bind(translations)
    const aboutRef = ref(null)

    onMounted(() => {
      const elements = aboutRef.value.querySelectorAll('.reveal')

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            } else {
              entry.target.classList.remove('visible')
            }
          })
        },
        { threshold: 0.2 }
      )

      elements.forEach(el => observer.observe(el))
    })

    return { t, aboutRef }
  }
}
</script>

<style scoped>
.about-section {
  padding: 5rem 2rem 6rem;
  text-align: center;
  background: #f9fcff;
}

.section-title {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #003366;
}

.intro {
  max-width: 780px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: #4a4a4a;
  line-height: 1.8;
}

.about-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  justify-content: center;
}

.card {
  background: white;
  padding: 1.8rem;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.06);
  flex: 1 1 250px;
  max-width: 320px;
  transition: transform .35s ease, box-shadow .35s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 38px rgba(0,0,0,0.08);
}

.card h3 {
  margin-bottom: .6rem;
  color: #0c3c78;
}

.card p {
  color: #555;
  line-height: 1.7;
}

/* Reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all .9s cubic-bezier(.22,1,.36,1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.delay-1 { transition-delay: .15s; }
.delay-2 { transition-delay: .3s; }
.delay-3 { transition-delay: .45s; }
.delay-4 { transition-delay: .6s; }

@media (max-width: 768px) {
  .section-title { font-size: 2rem; }
  .card { max-width: 100%; }
}
</style>
