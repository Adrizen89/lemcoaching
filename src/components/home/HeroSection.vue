<script setup>
import { computed } from 'vue';
import BaseButton from '../commons/BaseButton.vue';
import siteConfig from '../../config/siteConfig';

const hero = siteConfig.heroSection;

const whatsappLink = computed(() => {
  return `https://wa.me/${siteConfig.tel}`;
});
</script>

<template>
  <section id="home" class="relative w-full max-w-screen min-h-screen overflow-hidden">
    <!-- Vidéo de fond -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source :src="hero.videoUrl" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo.
    </video>

    <!-- Overlay Noir Transparent -->
    <div class="absolute inset-0 bg-mcoaching-primary/60"></div>

    <!-- Contenu superposé -->
    <div class="absolute inset-0 flex flex-col items-center lg:items-start justify-center gap-10 text-white max-w-full p-4 sm:p-6 md:p-10 lg:p-16">

      <h1 class="font-extrabold text-center lg:text-left text-3xl md:text-4xl lg:text-6xl">
        {{ hero.title }}
      </h1>

      <p class="mt-3 text-center text-xs sm:text-sm lg:text-md">
        {{ hero.description }}
      </p>
      
      <BaseButton :text="hero.buttonText" :link="whatsappLink" />
      
    </div>
  </section>
</template>

<style scoped>
/* Animation d'entrée en fade-in */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1, p, button {
  animation: fade-in 1s ease-out;
}
</style>
