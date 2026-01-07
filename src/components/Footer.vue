<template>
  <footer class="footer-wrapper" v-observe>
    <div class="footer-container">
      <!-- Brand -->
      <div class="footer-brand animate">
        <h2 class="footer-title">{{ t("brand.name") }}</h2>
        <p class="footer-text">{{ t("footer.tagline") }}</p>
      </div>

      <!-- Quick Links -->
      <div class="footer-links animate">
        <h3>{{ t("footer.quickLinks") }}</h3>
        <ul>
          <li><a href="#hero">{{ t("home") }}</a></li>
          <li><a href="#about">{{ t("about") }}</a></li>
          <li><a href="#services">{{ t("services") }}</a></li>
          <li><a href="#contact">{{ t("contact") }}</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-contact animate">
        <h3>{{ t("footer.contactUs") }}</h3>
        <p>{{ t("contact.city") }}</p>
        <p>{{ t("contact.phone") }}: +237 682299950</p>
        <p>Email: sostecsltd@gmail.com</p>
      </div>

      <!-- Socials -->
      <div class="footer-socials animate">
        <h3>{{ t("footer.follow") }}</h3>
        <div class="icons">
          
          <a href="#" target="_blank"><font-awesome-icon :icon="['fab','facebook-f']" /></a>
          <a href="#" target="_blank"><font-awesome-icon :icon="['fab','instagram']" /></a>
          <a href="#" target="_blank"><font-awesome-icon :icon="['fab','twitter']" /></a>
          <a href="https://wa.me/682299950?text=${text}" target="_blank"><font-awesome-icon :icon="['fab','whatsapp']" /></a>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="footer-bottom animate">
      <p>© 2026 sostecsltd — {{ t("footer.rights") }}</p>
    </div>
  </footer>
</template>

<script>
import { translations } from '../i18n.js'

export default {
  setup() {
    const t = translations.t.bind(translations)
    return { t }
  },
  directives: {
    observe: {
      mounted(el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            el.querySelectorAll('.animate').forEach((child, i) => {
              if (entry.isIntersecting) {
                child.style.opacity = 1
                child.style.transform = 'translateY(0)'
                child.style.transition = `all 0.6s ease ${(i + 1) * 0.15}s`
              } else {
                // Reset to animate again when re-entering viewport
                child.style.opacity = 0
                child.style.transform = 'translateY(20px)'
                child.style.transition = 'none'
              }
            })
          },
          { threshold: 0.2 }
        )
        observer.observe(el)
      }
    }
  }
}
</script>


<style scoped>
.footer-wrapper {
  background: linear-gradient(160deg, #0b1220, #0f1b2e, #0a0f1a);
  color: #e8f0ff;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

/* Animate children */
.animate {
  opacity: 0;
  transform: translateY(20px);
}

/* Container */
.footer-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px 30px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
}

/* Footer styles (same as before) */
.footer-title {
  font-size: 24px;
  font-weight: bold;
}
.footer-text {
  max-width: 300px;
  opacity: 0.85;
}
.footer-links ul {
  padding: 0;
  list-style: none;
}
.footer-links ul li {
  margin-bottom: 8px;
}
.footer-links ul li a {
  color: #cfd8ff;
  text-decoration: none;
  transition: 0.3s;
}
.footer-links ul li a:hover {
  padding-left: 6px;
  color: #7ec9ff;
}
.footer-socials .icons {
  display: flex;
  gap: 14px;
  margin-top: 10px;
}
.footer-socials a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.footer-socials a:hover {
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 0 16px rgba(0, 180, 255, 0.4);
}
.footer-socials i {
  font-size: 16px;
  color: #d5e3ff;
}
.footer-bottom {
  text-align: center;
  padding: 14px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  opacity: 0.85;
}

/* Mobile */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
}
</style>
