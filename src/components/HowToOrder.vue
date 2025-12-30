<template>
  <section id="how-to-order" class="how-section" ref="howRef">

    <h2 class="section-title reveal">
      {{ t('howOrderTitle') }}
    </h2>

    <div class="how-container reveal">

      <div class="how-image floating">
        <img src="../assets/howto.jpg" alt="Booking Cleaning Service" />
      </div>

      <div class="how-content">

        <div
          v-for="(s,i) in steps"
          :key="i"
          class="step-card reveal"
          :style="{ transitionDelay:`${0.25 + (i*0.18)}s` }"
        >

          <div class="step-icon pop">
            <span>{{ i+1 }}</span>
          </div>

          <div>
            <h3>{{ t(s.title) }}</h3>
            <p>{{ t(s.text) }}</p>
          </div>

        </div>

        <a href="#booking" class="book-btn pulse reveal" style="transition-delay:.9s">
          {{ t('bookNowBtn') }}
        </a>

      </div>

    </div>

  </section>
</template>

<script>
import { translations } from "../i18n.js"
import { ref, onMounted, computed } from "vue"

export default{
  setup(){

    const t = translations.t.bind(translations)

    const steps = computed(()=>[
      { title:'howStep1Title', text:'howStep1Text' },
      { title:'howStep2Title', text:'howStep2Text' },
      { title:'howStep3Title', text:'howStep3Text' },
    ])

    const howRef = ref(null)

    onMounted(()=>{

      const els = howRef.value.querySelectorAll(".reveal")

      const obs = new IntersectionObserver(entries=>{
        entries.forEach(e=>{

          // animate when visible
          if(e.isIntersecting){
            e.target.classList.add("visible")
          } else {
            // remove when leaving so animation restarts
            e.target.classList.remove("visible")
          }

        })
      },{ threshold:.25 })

      els.forEach(el=>obs.observe(el))
    })

    return { t, steps, howRef }
  }
}
</script>

<style scoped>
.how-section{
  padding:4rem 2rem;
  background:#f7fcfb;
  text-align:center;
}

/* TITLE */
.section-title{
  font-size:2rem;
  color:#0f3057;
  margin-bottom:3rem;
}

/* LAYOUT */
.how-container{
  max-width:1150px;
  margin:0 auto;
  display:flex;
  align-items:center;
  gap:2.5rem;
}

/* IMAGE */
.how-image img{
  width:100%;
  border-radius:22px;

  border:1px solid transparent;
  background:
    linear-gradient(white,white) padding-box,
    linear-gradient(135deg,#1a7c73,#3cd39b) border-box;

  box-shadow:0 25px 55px rgba(0,0,0,.12);
}

/* subtle float animation */
.floating{
  animation: float 6s ease-in-out infinite;
}

@keyframes float{
  0%{ transform:translateY(0)}
  50%{ transform:translateY(-10px)}
  100%{ transform:translateY(0)}
}

/* CONTENT */
.how-content{
  flex:1;
  text-align:left;
}

/* STEP CARD */
.step-card{
  display:flex;
  align-items:center;
  gap:1rem;
  margin-bottom:1.2rem;
}

/* STEP ICON */
.step-icon{
  min-width:45px;
  height:45px;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(145deg,#ffffff,#e8fbf5);
  border:1px solid rgba(0,170,150,.25);
  color:#0f3057;
  font-weight:700;
  box-shadow:
    0 10px 25px rgba(0,0,0,.08),
    inset 0 0 10px rgba(0,170,150,.12);
}

/* POP EFFECT WHEN REVEALED */
.pop.visible{
  animation: popIn .6s ease forwards;
}

@keyframes popIn{
  0%{ transform:scale(.6); opacity:0 }
  100%{ transform:scale(1); opacity:1 }
}

/* BUTTON */
.book-btn{
  display:inline-block;
  margin-top:1.6rem;
  padding:.9rem 1.6rem;
  border-radius:16px;
  font-weight:600;
  text-decoration:none;
  color:white;
  background:linear-gradient(135deg,#1a7c73,#38d49a);
  box-shadow:0 14px 28px rgba(0,0,0,.18);
  transition:.3s;
}

.book-btn:hover{
  transform:translateY(-3px);
  box-shadow:0 20px 38px rgba(0,0,0,.22);
}

/* SOFT HEARTBEAT */
.pulse.visible{
  animation:pulse 2.6s ease-in-out infinite;
}

@keyframes pulse{
  0%,100%{ transform:scale(1) }
  50%{ transform:scale(1.03) }
}

/* REVEAL ANIMATION */
.reveal{
  opacity:0;
  transform:translateY(35px);
  transition:all .95s cubic-bezier(.19,1,.22,1);
}

.visible{
  opacity:1;
  transform:translateY(0);
}

/* MOBILE */
@media(max-width:900px){
  .how-container{
    flex-direction:column;
    text-align:center;
  }

  .how-content{
    text-align:left;
    width:100%;
  }
}
</style>
