<template>
  <section id="join" class="join-section" ref="joinRef">
    <h2>{{ t('joinTitle') }}</h2>
    <p>{{ t('joinText') }}</p>

    <button class="join-btn" @click="showForm = true">
      {{ t('joinButton') }}
    </button>

    <!-- Modal -->
    <div v-if="showForm" class="modal">
      <div class="modal-card reveal visible">
        <button class="close" @click="showForm = false">×</button>

        <h3>{{ t('formTitle') }}</h3>

        <form @submit.prevent="submitForm">

          <input v-model="form.name" :placeholder="t('fullName')" required />
          <input v-model="form.phone" :placeholder="t('phone')" required />
          <input v-model="form.idNumber" :placeholder="t('idNumber')" />

          <input v-model="form.relationship" :placeholder="t('relationship')" />
          <input v-model="form.ageRange" :placeholder="t('ageRange')" />

          <input v-model="form.city" :placeholder="t('city')" />
          <input v-model="form.quarter" :placeholder="t('quarter')" />
          <input v-model="form.residence" :placeholder="t('residence')" />

          <input v-model="form.experience" :placeholder="t('experience')" />
          <input v-model="form.duration" :placeholder="t('duration')" />

          <textarea v-model="form.description" :placeholder="t('description')"></textarea>

          <input v-model="form.language" :placeholder="t('language')" />

          <label class="checkbox">
            <input type="checkbox" v-model="form.training" />
            {{ t('training') }}
          </label>

          <small class="note">
            {{ t('note') }}
          </small>

          <button type="submit" class="submit-btn">
            {{ t('submitBtn') }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { translations } from "../i18n.js";

export default {
  setup() {
    const t = translations.t.bind(translations);
    const showForm = ref(false);

    const form = ref({
      name:"",
      phone:"",
      idNumber:"",
      relationship:"",
      ageRange:"",
      city:"",
      quarter:"",
      residence:"",
      experience:"",
      duration:"",
      description:"",
      language:"",
      training:false
    });
    

    const submitForm = () => {
      const body = `
Full Name: ${form.value.name}
Phone: ${form.value.phone}
ID: ${form.value.idNumber}
Relationship: ${form.value.relationship}
Age: ${form.value.ageRange}

City: ${form.value.city}
Quarter: ${form.value.quarter}
Residence: ${form.value.residence}

Experience: ${form.value.experience}
Duration: ${form.value.duration}
Description: ${form.value.description}

Language: ${form.value.language}
Willing to train: ${form.value.training ? "Yes":"No"}
`;

      window.location.href =
        "mailto:sostecsltd@gmail.com"
        + "?subject=Cleaner Application"
        + "&body=" + encodeURIComponent(body);
    };

    const joinRef = ref(null);

    onMounted(() => {
      const elements = joinRef.value.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e =>
          e.target.classList.toggle("visible", e.isIntersecting)
        );
      }, { threshold:0.2 });

      elements.forEach(el => observer.observe(el));
    });

    return { t, showForm, form, submitForm, joinRef };
  }
};

const showForm = ref(false)


watch(showForm, (open) => {
  document.body.style.overflow = open ? "hidden" : ""
})

</script>

<style scoped>
.join-section{
  background:#f4fbf8;
  padding:4rem 2rem;
  text-align:center;
  border-radius:18px;
  box-shadow:0 10px 25px rgba(0,0,0,.06);
}

.join-btn{
  padding:.9rem 1.8rem;
  background:#0f7b8b;
  color:white;
  border:none;
  border-radius:12px;
  cursor:pointer;
}

.modal{
   position: fixed;
  inset: 0; /* replaces top/right/bottom/left */
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
}

.modal-card{
  background:white;
  border-radius:18px;
  padding:2rem;
  width:95%;
  box-shadow:0 10px 30px rgba(0,0,0,.2);
  max-width: 520px;
  
  

  /* 👇 THIS MAKES THE FORM SCROLL */
  max-height: 90vh;
  overflow-y: auto;

  box-shadow: 0 10px 24px rgba(0,0,0,0.15);
}

.close{
  border:none;
  background:none;
  font-size:1.6rem;
  float:right;
  cursor:pointer;
}

form{
  display:flex;
  flex-direction:column;
  gap:.8rem;
}

input, textarea{
  padding:.8rem;
  border-radius:10px;
  border:1px solid #dce7e3;
  background:#f9fffd;
}

.submit-btn{
  background:#0f3057;
  color:white;
  padding:.8rem;
  border:none;
  border-radius:12px;
  cursor:pointer;
}

.checkbox{
  display:flex;
  gap:.5rem;
  align-items:center;
}

.note{
  opacity:.7;
}

/* reveal */
.reveal{
  opacity:0;
  transform:translateY(40px);
  transition:all .8s cubic-bezier(.19,1,.22,1);
}

.visible{
  opacity:1;
  transform:translateY(0);
}
</style>
