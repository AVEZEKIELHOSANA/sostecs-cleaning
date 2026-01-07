<template>
  <section id="services" class="services-section" ref="servicesRef">
    <h2 class="section-title reveal">
      {{ t('servicesTitle') }}
    </h2>

    <div class="carousel reveal delay-1">
      <div class="carousel-inner"
        :style="{ transform:`translateX(-${currentIndex * cardWidth}px)` }">

        <div v-for="(service, i) in services" :key="i" class="service-card">
          <img :src="service.img" :alt="service.title" />
          <h3>{{ t(service.title) }}</h3>
          <p>{{ t(service.desc) }}</p>
        </div>

      </div>
    </div>

    <div class="controls reveal delay-2">
      <button @click="prev">‹</button>
      <button @click="next">›</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { translations } from "../i18n.js";
import home from '../assets/home-cleaning.jpg'
import office from '../assets/office-cleaning.jpg'
import deep from '../assets/deep-clean.jpg'
import move from '../assets/move-cleaning.jpg'
import laundry from '../assets/laundry.jpg'
import dishes from '../assets/dishes.jpg'


export default {
  setup() {
    const t = translations.t.bind(translations);

    const services = computed(() => [
      { title:'serviceHomeTitle',  desc:'serviceHomeDesc',  img:home },
      { title:'serviceOfficeTitle',desc:'serviceOfficeDesc',img:office },
      { title:'serviceDeepTitle',  desc:'serviceDeepDesc',  img:deep },
      { title:'serviceMoveTitle',  desc:'serviceMoveDesc',  img:move },
      { title:'serviceLaundryTitle',desc:'serviceLaundryDesc',img:laundry },
      { title:'serviceDishesTitle', desc:'serviceDishesDesc', img:dishes }
    ]);

    const currentIndex = ref(0);
    const cardWidth = 280;

    const next = () => {
      currentIndex.value =
        currentIndex.value < services.value.length - 1 ? currentIndex.value + 1 : 0;
    };

    const prev = () => {
      currentIndex.value =
        currentIndex.value > 0 ? currentIndex.value - 1 : services.value.length - 1;
    };

    // autoplay
    setInterval(next, 4500);

    // reveal animation on scroll
    const servicesRef = ref(null);

    onMounted(() => {
      const elements = servicesRef.value.querySelectorAll(".reveal");

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry =>
          entry.target.classList.toggle("visible", entry.isIntersecting)
        );
      }, { threshold: 0.2 });

      elements.forEach(el => observer.observe(el));
    });

    return { t, services, currentIndex, cardWidth, next, prev, servicesRef };
  }
};
</script>

<style scoped>
.services-section{
  padding:4rem 2rem;
  text-align:center;
  background:#e9f5f1;
}

.section-title{
  font-size:2rem;
  margin-bottom:2rem;
  color:#0f3057;
}

/* Carousel */
.carousel{
  overflow:hidden;
  max-width:900px;
  margin:0 auto;
}

.carousel-inner{
  display:flex;
  gap:1.2rem;
  transition: transform .6s ease;
}

/* Card */
.service-card{
  min-width:260px;
  background:white;
  padding:1rem;
  border-radius:14px;
  box-shadow:0 8px 22px rgba(0,0,0,.06);
  transition:.3s;
}

.service-card:hover{
  transform:translateY(-6px);
}

.service-card img{
  width:100%;
  border-radius:12px;
  margin-bottom:1rem;
}

/* Controls */
.controls{
  margin-top:1.2rem;
  display:flex;
  justify-content:center;
  gap:1rem;
}

.controls button{
  font-size:1.8rem;
  border:none;
  background:white;
  border-radius:50%;
  width:42px;
  height:42px;
  cursor:pointer;
  box-shadow:0 6px 16px rgba(0,0,0,.08);
}

/* Reveal animation */
.reveal{
  opacity:0;
  transform:translateY(40px);
  transition:all .8s cubic-bezier(.19,1,.22,1);
}

.visible{
  opacity:1;
  transform:translateY(0);
}

.delay-1{ transition-delay:.2s; }
.delay-2{ transition-delay:.4s; }

@media(max-width:768px){
  .service-card{ min-width:220px; }
}
</style>
