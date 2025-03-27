<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import siteConfig from "../../config/siteConfig";

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const whatsappNumber = "33683024142";

// Fonction pour faire défiler jusqu'à une section
const scrollTo = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  isMenuOpen.value = false;
};

// Gérer le scroll de la page
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Activer/désactiver le menu mobile
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Générer le lien WhatsApp
const whatsappLink = () => `https://wa.me/${whatsappNumber}`;

// Ajouter et retirer l'écouteur d'événements
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-black/80 shadow-lg' : 'bg-transparent'
    ]"
    class="text-white flex justify-between h-16 px-6 md:px-12 items-center"
  >
    <!-- Logo -->
    <div class="w-16 h-16 flex items-center">
      <img :src="siteConfig.logo" alt="Logo" class="h-10 w-10">
    </div>

    <!-- Navigation Desktop -->
    <ul class="hidden md:flex gap-10 items-center">
      <li><button @click="scrollTo('home')" class="hover:text-mcoaching-accent cursor-pointer">Accueil</button></li>
      <li><button @click="scrollTo('offers')" class="hover:text-mcoaching-accent cursor-pointer">Offres</button></li>
      <li><button @click="scrollTo('about')" class="hover:text-mcoaching-accent cursor-pointer">Le coach</button></li>
      <li><button @click="scrollTo('contact')" class="hover:text-mcoaching-accent cursor-pointer">Contact</button></li>
    </ul>

    <!-- Menu Hamburger Mobile -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none z-50" aria-label="Ouvrir le menu">
      <!-- Icône Menu -->
      <svg v-if="!isMenuOpen" class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
      <!-- Icône Croix -->
      <svg v-else class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Menu Mobile -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black/90 flex flex-col items-center justify-center gap-10 text-white text-lg transition-all duration-300"
    >
      <button @click="scrollTo('home')" class="hover:text-mcoaching-accent">Accueil</button>
      <button @click="scrollTo('offers')" class="hover:text-mcoaching-accent">Offres</button>
      <button @click="scrollTo('about')" class="hover:text-mcoaching-accent">Le coach</button>
      <button @click="scrollTo('contact')" class="hover:text-mcoaching-accent">Contact</button>
    </div>
  </nav>
</template>
