<template>
  <section id="hero" class="hero-section" ref="heroRef">
    <!-- Background decorative squares -->
    <div class="bg-squares">
      <span></span>
      <span></span><span></span>
      <span></span><span></span>
      <span></span><span></span>
      <span></span><span></span>
      <span></span><span></span>
      <span></span>
    </div>

    <!-- Hero content -->
    <div class="hero-content">
      <h1 :class="{ show: visible }" class="fade-in">{{ t('heroHeadline') }}</h1>
      <p :class="{ show: visible }" class="fade-in delay-1">{{ t('heroSub') }}</p>
      <button 
        :class="{ show: visible }" 
        class="cta-btn fade-in delay-2"
        @click="scrollToBooking"
      >
        {{ t('booking') }}
      </button>
    </div>

    <!-- Hero image -->
    <div :class="{ show: visible }" class="hero-image fade-in delay-1">
      <img src="../assets/hands-cleaning-elevator-buttons.jpg" alt="Cleaning Service"/>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { translations } from '../i18n.js'

export default {
  setup() {
    const t = translations.t.bind(translations)
    const visible = ref(false)
    const heroRef = ref(null)

    onMounted(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) visible.value = true
      })
      if (heroRef.value) observer.observe(heroRef.value)
    })

    const scrollToBooking = () => {
      const booking = document.getElementById('booking')
      if (booking) booking.scrollIntoView({ behavior: 'smooth' })
    }

    return { t, scrollToBooking, visible, heroRef }
  }
}
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8fbff, #e9f5ff);
  position: relative;
  overflow: hidden;
}

/* Hero content */
.hero-content { flex: 1; min-width: 320px; text-align: center; z-index: 2; }
.hero-content h1 {
  font-size: 2.8rem; font-weight: 700; color: #0f3d4c; letter-spacing: 0.5px; margin-bottom: 1rem;
}
.hero-content p { font-size: 1.2rem; color: #3f6f7c; }

/* Hero image */
.hero-image { flex: 1; min-width: 320px; text-align: center; position: relative; z-index: 2; }
.hero-image img {
  max-width: 95%;
  border-radius: 18px;
  box-shadow: 0 20px 60px rgba(0,0,0,.12), 0 5px 18px rgba(0,0,0,.06);
  transform: translateY(24px) scale(.96);
  opacity: 0;
  transition: transform 1.5s cubic-bezier(.19,1,.22,1), opacity 1.2s ease;
}

/* CTA button */
.cta-btn {
  padding: 1rem 2.6rem;
  margin-bottom: 2.6rem;
  background: linear-gradient(135deg, #003366, #3f6f7c);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: .3px;
  transform: scale(.92);
  opacity: 0;
  box-shadow: 0 10px 25px rgba(39,174,96,.25), inset 0 0 0 rgba(255,255,255,0);
  transition: transform .45s cubic-bezier(.22, .61, .36, 1), box-shadow .45s ease, opacity .6s ease;
}
.cta-btn:hover {
  transform: scale(1.04) translateY(-2px);
  box-shadow: 0 18px 40px rgba(39,174,96,.32), inset 0 1px 10px rgba(255,255,255,.35);
}

/* Fade-in for image & content */
.fade-in { opacity: 0; transform: translateY(18px); transition: opacity .9s ease, transform .9s ease; }
.fade-in.delay-1 { transition-delay: .25s; }
.fade-in.delay-2 { transition-delay: .5s; }
.show { opacity: 1 !important; transform: translateY(0) !important; }

/* Floating animation for hero image */
.hero-image.show img {
  animation: floatSoft 7s ease-in-out infinite;
  opacity: 1;
  transform: translateY(0) scale(1);
}
@keyframes floatSoft {
  0%   { transform: translateY(0) scale(1); }
  50%  { transform: translateY(-10px) scale(1.01); }
  100% { transform: translateY(0) scale(1); }
}

/* --- Background squares --- */
.bg-squares {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}
.bg-squares span {
  position: absolute;
  border-radius: 6px;
  filter: blur(.3px);
  opacity: .75;
  animation: floatBox 14s infinite ease-in-out;
}
.bg-squares span:nth-child(1){ top: 12%; left: 18%; width: 22px; height: 22px; animation-delay:0s; background: rgba(39,174,96,.22);}
.bg-squares span:nth-child(2){ top: 68%; left: 8%; width: 18px; height: 18px; animation-delay:2s; background: rgba(76,201,240,.20);}
.bg-squares span:nth-child(3){ top: 22%; right: 15%; width: 20px; height: 20px; animation-delay:4s; background: rgba(52,152,219,.18);}
.bg-squares span:nth-child(4){ bottom: 12%; right: 28%; width: 16px; height: 16px; animation-delay:6s; background: rgba(46,204,113,.18);}
.bg-squares span:nth-child(5){ bottom: 3%; left: 42%; width: 24px; height: 24px; animation-delay:8s; background: rgba(41,128,185,.16);}
.bg-squares span:nth-child(6){ bottom: 30%; left: 22%; width: 24px; height: 24px; animation-delay:8s; background: rgba(41,128,185,.16);}
.bg-squares span:nth-child(7){ bottom: 80%; left: 52%; width: 24px; height: 24px; animation-delay:8s; background: rgba(41,128,185,.16);}
.bg-squares span:nth-child(8){ bottom: 70%; left: 82%; width: 24px; height: 24px; animation-delay:8s; background: rgba(41,128,185,.16);}
.bg-squares span:nth-child(9){ bottom: 45%; left: 98%; width: 24px; height: 24px; animation-delay:8s; background: rgba(41,128,185,.16);}
.bg-squares span:nth-child(10){ bottom: 90%; left: 2%; width: 24px; height: 24px; animation-delay:8s; background: rgba(41,128,185,.16);}
.bg-squares span:nth-child(11){ bottom: 19%; left: 10%; width: 24px; height: 24px; animation-delay:8s; background: rgba(41,128,185,.16);}
.bg-squares span:nth-child(12){ bottom: 50%; left: 60%; width: 24px; height: 24px; animation-delay:8s; background: rgba(41,128,185,.16);}

@keyframes floatBox {
  0% { transform: translateY(0) translateX(0) scale(1); }
  50% { transform: translateY(-18px) translateX(10px) scale(1.05); }
  100% { transform: translateY(0) translateX(0) scale(1); }
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .hero-section { flex-direction: column; padding: 4rem 1.5rem; }
  .hero-content h1 { font-size: 2.2rem; }
}
</style>
