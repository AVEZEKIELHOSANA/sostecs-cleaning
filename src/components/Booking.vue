<template>
  <section id="booking" class="booking-section" ref="bookingRef">
    
    <h2 class="section-title reveal">
      {{ t('bookingTitle') }}
    </h2>

    <form class="booking-form reveal" @submit.prevent="submitForm">

      <label>{{ t('service') }}</label>
      <select v-model="form.service" required>
        <option disabled value=""> Select Service </option>
        <option>Home Cleaning</option>
        <option>Office Cleaning</option>
        <option>Deep Cleaning</option>
        <option>Sanitization</option>
        <option>Other</option>
      </select>

      <label>{{ t('packageLabel') }}</label>
      <select v-model="form.package" required>
        <option disabled value=""> Select Package </option>
        <option v-for="pkg in t('packages')" :key="pkg">
          {{ pkg }}
        </option>
      </select>

      <label>Full Name</label>
      <input type="text" v-model="form.name" required/>

      <label>Email</label>
      <input type="email" v-model="form.email" required/>

      <label>Phone</label>
      <input type="tel" v-model="form.phone" required/>

      <label>Address / City</label>
      <input type="text" v-model="form.address" required/>

      <label>Preferred Date & Time</label>
      <input type="datetime-local" v-model="form.date" required/>

      <label>Message (optional)</label>
      <textarea v-model="form.message"></textarea>

      <button type="submit">
        {{ t('submit') }}
      </button>
    </form>

    <p v-if="successMessage" class="success">{{ successMessage }}</p>

  </section>
</template>

<script>
import { ref, reactive, onMounted } from "vue"
import { translations } from "../i18n.js"

export default {
  setup() {

    const t = translations.t.bind(translations)

    const form = reactive({
      service: "",
      package: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      date: "",
      message: ""
    })

    const successMessage = ref("")
    const bookingRef = ref(null)

    const submitForm = () => {
      const summary = `
Service: ${form.service}
Package: ${form.package}

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Address: ${form.address}
Preferred Date/Time: ${form.date}

Message:
${form.message || "None"}
      `

      // ---------- EMAIL ----------
      const mailto = `mailto:hosanaezekiel21@gmail.com
?subject=${encodeURIComponent("Cleaning Booking Request")}
&body=${encodeURIComponent(summary)}`

      window.open(mailto, "_blank")

      // ---------- WHATSAPP ----------
      const whatsapp = `https://wa.me/237673717424?text=${encodeURIComponent(summary)}`
      window.open(whatsapp, "_blank")

      successMessage.value = "Booking request sent successfully! We will contact you shortly 🙂"

      setTimeout(()=> successMessage.value="", 6000)
    }

    // ---------- REVEAL ANIMATION ----------
    onMounted(() => {
      const elements = bookingRef.value.querySelectorAll(".reveal")

      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("visible")
          } else {
            e.target.classList.remove("visible")
          }
        })
      }, { threshold: 0.25 })

      elements.forEach(el => observer.observe(el))
    })

    return { t, form, submitForm, successMessage, bookingRef }
  }
}
</script>

<style>
.booking-section{
  padding:4rem 2rem;
  background:#f0f8ff;
  text-align:center;
}

.booking-form{
  display:flex;
  flex-direction:column;
  gap:1rem;
  max-width:520px;
  margin:auto;
}

.booking-form input,
.booking-form select,
.booking-form textarea{
  padding:.8rem;
  border-radius:10px;
  border:1px solid #cfdcdc;
  width:100%;
  background:#ffffff;
}

.booking-form button{
  padding:.9rem 2rem;
  background:#0f7b8b;
  color:white;
  border:none;
  border-radius:12px;
  cursor:pointer;
  transition:.3s;
}

.booking-form button:hover{
  background:#0c5e69;
}

.success{
  color:#1a7c2d;
  margin-top:1rem;
  font-weight:600;
}

/* ---- ANIMATIONS ---- */
.reveal{
  opacity:0;
  transform:translateY(40px);
  transition:all .8s cubic-bezier(.19,1,.22,1);
}

.reveal.visible{
  opacity:1;
  transform:translateY(0);
}
</style>
