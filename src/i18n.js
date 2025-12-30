import { reactive } from 'vue'

export const translations = reactive({
  lang: localStorage.getItem('lang') || 'en',
  text: {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      booking: 'Book now',
      contact: 'Contact',
      heroHeadline: 'Stay your best, keep your environment fresh',
      heroSub: ' We provide to you the most Reliable, Eco-friendly, and Affordable cleaning services',
      aboutTitle: 'About Us',
      servicesTitle: 'Our Services',
      whyChooseTitle: 'Why Choose Us',
      bookingTitle: 'Book a Cleaning',
      contactTitle: 'Contact Us',
      packages: ['Golden', 'Standard', 'Normal', 'Silver'],
      submit: 'Submit',
      whatsappMessage: 'Hello, I would like to book a cleaning service.',
      phone: '+1 234 567 890',
      terms: 'Terms',
      privacy: 'Privacy',
      address: 'Great soppo, Buea, Cameroon',
      email: 'info@cleanpro.com',
      connectorMessage: "Expert home care — plumbing, maintenance & peace of mind.",
      aboutIntro: "We are a dedicated cleaning company delivering premium-quality cleaning solutions for homes, offices and commercial spaces. Our goal is to create fresh, healthy environments where you feel comfortable and confident.",

aboutWho: "Who We Are",
aboutWhoText: "A trusted cleaning team offering professional service with transparency and care.",

aboutEco: "Eco-Friendly",
aboutEcoText: "We prioritise safe, sustainable, non-toxic cleaning products.",

aboutTeam: "Trained Team",
aboutTeamText: "Our cleaners are vetted, trained and committed to excellence.",

aboutTrust: "Customer First",
aboutTrustText: "We build long-term relationships through reliability and respect.",


serviceHomeTitle: 'Home Cleaning',
serviceHomeDesc: 'Thorough cleaning to keep your home fresh, organised and sparkling.',
serviceOfficeTitle: 'Office Cleaning',
serviceOfficeDesc: 'Professional workspace cleaning to maintain a healthy and productive environment.',
serviceDeepTitle: 'Deep Cleaning',
serviceDeepDesc: 'Intensive top-to-bottom cleaning for harder-to-reach and forgotten areas.',
serviceMoveTitle: 'Move-in / Move-out Cleaning',
serviceMoveDesc: 'Complete preparation cleaning for new tenants, relocations or hand-overs.',
serviceLaundryTitle: 'Laundry Service',
serviceLaundryDesc: 'Wash, dry and fold laundry care designed for comfort and convenience.',
serviceDishesTitle: 'Dish Washing',
serviceDishesDesc: 'Thorough dish washing and kitchen cleaning for a spotless cooking area.',
packagesTitle: "Our Packages",

packageClassic: "Classic Package",
packagePremium: "Premium Package",
packageGolden: "Golden Package",
packageSpecial: "Special Package",

classicPoints: [
  "Sweeping: ceiling, walls, floor and yard",
  "Mopping: washing and drying floors and walls without stain scrubbing",
  "Dusting: removing dust from all surfaces",
  "Washing blinds, back rests and table cloths",
  "Vacuuming & organising spaces",
  "Does NOT include kitchens & toilets"
],

premiumPoints: [
  "More detailed sweeping of walls, ceilings and yards",
  "Mopping with stain removal (scrubbing)",
  "Dusting of all surfaces",
  "Washing blinds, back rests, carpets and glass",
  "Vacuuming & organising spaces",
  "Polishing faded areas",
  "Includes kitchens and toilets"
],

goldenPoints: [
  "Intensive sweeping of walls, ceilings and floors",
  "Mopping with stain scrubbing",
  "Full surface dust removal",
  "Washing blinds, table cloths & fragile objects",
  "Vacuuming & organising",
  "Polishing services",
  "Includes kitchens & toilets",
  "Best for hospitals, malls, labs and VIP spaces"
],

specialPoints: [
  "Pre & post cleaning of construction sites",
  "Event cleaning — conferences, ceremonies & seminars"
],
howOrderTitle: "How to Book Our Service",

howStep1Title: "Click Book Now",
howStep1Text: "Choose your service and fill out a simple booking form.",

howStep2Title: "We Contact You",
howStep2Text: "Our friendly team reaches out to confirm the details.",

howStep3Title: "We Come to You",
howStep3Text: "Our professional cleaners arrive and make your space shine!",

bookNowBtn: "Book Now",
contactTitle: "Contact Us",
  contactSubtitle: "We are always happy to hear from you. Reach us anytime.",
  contactPhone: "Phone",
  contactEmail: "Email",
  contactLocation: "Location",
joinTitle: "Join Our Cleaning Team",
  joinText:"We welcome disciplined and motivated cleaners. Whether you are trained or ready to learn, apply and grow with us.",
  joinButton: "Apply Now",

  formTitle: "Cleaner Application Form",
  submitBtn: "Submit Application",
  fullName: "Full name",
  phone: "Contact number",
  idNumber: "ID / Passport number",
  relationship: "Relationship status",
  ageRange: "Age range",
  city: "City / Town",
  quarter: "Quarter",
  residence: "Residence",
  experience: "Do you have professional cleaning experience?",
  duration: "Duration of experience",
  description:"Describe your work experience (organization + duties)",
  language: "Professional language",
  training:"I am willing to undergo two weeks onsite training",
  note:"Applicants without prior training but ready for two weeks training should indicate here. Thank you."


    },
    
    fr: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      booking: 'Réserver maintenant',
      contact: 'Contact',
      heroHeadline: 'Services de nettoyage professionnels',
      heroSub: 'Fiable, Écologique et Abordable',
      aboutTitle: 'À propos de nous',
      servicesTitle: 'Nos Services',
      whyChooseTitle: 'Pourquoi nous choisir',
      bookingTitle: 'Réservez un nettoyage',
      contactTitle: 'Contactez-nous',
      packages: ['Or', 'Standard', 'Normal', 'Argent'],
      submit: 'Envoyer',
      whatsappMessage: 'Bonjour, je souhaite réserver un service de nettoyage.',
      phone: '+1 234 567 890',
      terms: 'Conditions',
      privacy: 'Politique',
      address: '123 Clean St, Ville, Pays',
      email: 'info@cleanpro.com',
      connectorMessage: "Un service fiable pour votre maison — plomberie, entretien et sérénité.",
      aboutIntro: "Nous sommes une entreprise de nettoyage dédiée à fournir des services de qualité premium pour les maisons, bureaux et espaces professionnels. Notre objectif est de créer des environnements sains et agréables.",

aboutWho: "Qui sommes-nous",
aboutWhoText: "Une équipe de nettoyage de confiance, professionnelle et transparente.",

aboutEco: "Éco-responsable",
aboutEcoText: "Nous privilégions des produits sûrs et non-toxiques.",

aboutTeam: "Équipe formée",
aboutTeamText: "Nos agents sont qualifiés et engagés pour la qualité.",

aboutTrust: "Clients avant tout",
aboutTrustText: "Nous construisons la confiance par la fiabilité et le respect.",


      
    }
  },
  t(key) {
    return this.text[this.lang][key]
  },
  switchLang(newLang) {
    this.lang = newLang
    localStorage.setItem('lang', newLang)
  }
})
