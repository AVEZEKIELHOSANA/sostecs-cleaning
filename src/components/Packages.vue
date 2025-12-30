<template>
  <section id="packages" class="packages" ref="pkgRef">
    <h2 class="section-title reveal">
      {{ t('packagesTitle') }}
    </h2>

    <div class="packages-grid">

      <div v-for="(pkg,i) in packages" :key="i"
           class="package-card reveal"
           :class="'delay-'+(i%3+1)">

        <h3 class="pkg-title">
          {{ t(pkg.title) }}
        </h3>

        <ul>
          <li v-for="(point,j) in t(pkg.points)" :key="j">
            ✓ {{ point }}
          </li>
        </ul>

      </div>

    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from "vue"
import { translations } from "../i18n.js"

export default{
  setup(){

    const t = translations.t.bind(translations)

    const packages = computed(()=>[
      { title:'packageClassic', points:'classicPoints'},
      { title:'packagePremium', points:'premiumPoints'},
      { title:'packageGolden', points:'goldenPoints'},
      { title:'packageSpecial', points:'specialPoints'}
    ])

    const pkgRef = ref(null)

    onMounted(()=>{
      const els = pkgRef.value.querySelectorAll(".reveal")
      const obs = new IntersectionObserver(entries=>{
        entries.forEach(e=>{
          e.target.classList.toggle("visible", e.isIntersecting)
        })
      },{threshold:.25})
      els.forEach(el=>obs.observe(el))
    })

    return {t,packages,pkgRef}
  }
}
</script>

<style scoped>
.packages{
  padding:4rem 2rem;
  text-align:center;
  background:white;
}

.section-title{
  font-size:2rem;
  margin-bottom:3rem;
  color:#0f3057;
}

/* GRID */
.packages-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:1.8rem;
  max-width:1100px;
  margin:0 auto;
}

/* CARD */
.package-card{
  background:#f9fbfb;
  border-radius:14px;
  padding:1.6rem;
  box-shadow:0 10px 26px rgba(0,0,0,.06);
  text-align:left;
  transition:.3s;
}

.package-card:hover{
  transform:translateY(-6px);
}

.pkg-title{
  background: #3f6f7c;
  display:inline-block;
  padding:.4rem 1rem;
  border-radius:20px;
  color:white;
  margin-bottom:1rem;
}

ul{
  padding-left:1rem;
}

li{
  margin: .4rem 0;
  font-size:.95rem;
}

/* ANIMATION */
.reveal{
  opacity:0;
  transform:translateY(40px);
  transition:all .8s cubic-bezier(.19,1,.22,1);
}

.visible{
  opacity:1;
  transform:translateY(0);
}

.delay-1{transition-delay:.2s}
.delay-2{transition-delay:.4s}
.delay-3{transition-delay:.6s}

/* RESPONSIVE */
@media(max-width:850px){
  .packages-grid{
    grid-template-columns:1fr;
  }
}
</style>
