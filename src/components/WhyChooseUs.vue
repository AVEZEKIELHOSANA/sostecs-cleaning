<template>
  <section id="why-us" class="why-us-section" ref="whyRef">
    <div class="why-wrapper">

      <!-- LEFT — TEXT -->
      <div class="why-content reveal">
        <h2 class="section-title">
          {{ t('whyChooseTitle') }}
        </h2>

        <ul class="benefits">
          <li class="reveal">Professional & Trusted</li>
          <li class="reveal">Eco-friendly products</li>
          <li class="reveal">Flexible scheduling</li>
          <li class="reveal">Trained staff</li>
          <li class="reveal">Great customer service</li>
        </ul>
      </div>

      <!-- RIGHT — IMAGE -->
      <div class="why-image reveal">
        <img src="../assets/buckets.jpg" alt="Cleaning Service" />
      </div>

    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { translations } from "../i18n";

export default {
  setup() {
    const t = translations.t.bind(translations);
    const whyRef = ref(null);

    onMounted(() => {
      const elements = whyRef.value.querySelectorAll(".reveal");

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add("visible");
          });
        },
        { threshold: 0.2 }
      );

      elements.forEach(el => observer.observe(el));
    });

    return { t, whyRef };
  }
};
</script>

<style>
.why-us-section{
  padding:4rem 2rem;
}

/* SIDE BY SIDE LAYOUT */
.why-wrapper{
  max-width:1100px;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:3rem;
}

/* TEXT */
.why-content{
  flex:1;
}

.section-title{
  font-size:2rem;
  margin-bottom:1.5rem;
  color: #003366;
}

.benefits{
  list-style:none;
  padding:0;
  display:flex;
  flex-direction:column;
  gap:1rem;
}

.benefits li{
  background:white;
  padding:1rem 1.5rem;
  border-radius:14px;
  box-shadow:0 4px 14px rgba(0,0,0,.06);
}

/* IMAGE RIGHT */
.why-image{
  flex:1;
  display:flex;
  justify-content:center;
}

.why-image img{
  width:380px;
  max-width:100%;
  border-radius:18px;
  box-shadow:0 15px 30px rgba(0,0,0,.08);
}

/* SCROLL REVEAL ANIMATION */
.reveal{
  opacity:0;
  transform:translateY(40px);
  transition:all .8s cubic-bezier(.19,1,.22,1);
}

.reveal.visible{
  opacity:1;
  transform:translateY(0);
}

/* RESPONSIVE */
@media(max-width:900px){
  .why-wrapper{
    flex-direction:column;
    text-align:center;
  }

  .why-image{
    order:-1; /* image goes on top for mobile */
  }
}
</style>
