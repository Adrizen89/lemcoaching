<template>
    <footer class="w-full text-white text-sm py-6 border-t border-gray-800 max-w-full">
      
      <!-- Contenu principal -->
      <div class="container mx-auto flex flex-col md:flex-row justify-evenly items-center px-6 md:px-12 space-y-6 md:space-y-0">
        
        <!-- Logo -->
        <div>
          <img :src="siteConfig.logo" alt="M Coaching" class="h-10 w-10">
        </div>
  
        <!-- Navigation -->
        <ul class="flex flex-wrap justify-center md:justify-start gap-6">
          <li><a href="#home" @click.prevent="scrollTo('home')" class="footer-link">Accueil</a></li>
          <li><a href="#offers" @click.prevent="scrollTo('offers')" class="footer-link">Offres</a></li>
          <li><a href="#about" @click.prevent="scrollTo('about')" class="footer-link">Le coach</a></li>
          <li><a href="#contact" @click.prevent="scrollTo('contact')" class="footer-link">Contact</a></li>
        </ul>
  
        <!-- Liens supplémentaires -->
        <ul class="flex flex-wrap justify-center md:justify-start gap-6">
          <li><a href="https://www.linkedin.com/in/adrien-berard-0263801b2/" target="_blank" class="footer-link">Créé par <span class="text-mcoaching-accent font-semibold">ADB Digital</span></a></li>
        </ul>
        
      </div>
  
      <!-- Copyright -->
      <div class="text-center text-mcoaching-light/80 text-xs mt-6">
        © {{ new Date().getFullYear() }} M Coaching - Tous droits réservés.
      </div>
  
    </footer>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
import siteConfig from "../../config/siteConfig";
  
  const isScrolled = ref(false);
  
  // Fonction pour faire défiler jusqu'à une section
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    isMenuOpen.value = false;
  };
  
  // Gérer le scroll de la page
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
  };
  
  
  // Ajouter et retirer l'écouteur d'événements
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  
  <style>
  .footer-link {
    cursor: pointer;
    transition: color 0.3s ease;
  }
  .footer-link:hover {
    color: var(--tw-color-accent);
  }
  </style>
  