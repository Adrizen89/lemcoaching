<script>
import siteConfig from "../config/siteConfig";

export default {
  data() {
    return {
      contact: siteConfig.contact,
    };
  },
};
</script>

<template>

  <section id="contact" class="min-h-screen text-white flex flex-col justify-center max-w-full">
      
    <div class="relative z-10 w-full h-32 -mb-16 bg-gradient-to-t from-mcoaching-background/5 via-mcoaching-background to-mcoaching-background"></div>

      <!-- Section Réseaux Sociaux -->
      <article class="relative  w-full flex flex-col justify-evenly h-80 px-10 md:px-20 text-center md:text-left"
      :style="{ backgroundImage: `url('/images/img3.png')`, backgroundPosition: `center ${offsetY}px`, backgroundSize: 'cover' }">
        
        <!-- Overlay pour lisibilité -->
        <div class="absolute inset-0 bg-mcoaching-primary/60"></div>
  
        <!-- Titre -->
        <h4 class="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold animate-fade-in">
          Rejoignez-moi sur mes réseaux sociaux !
        </h4>
  
        <!-- Icônes des réseaux sociaux -->
        <aside class="relative flex justify-center md:justify-start gap-8 mt-4">
            <a v-for="(link, name) in contact.socialLinks" :key="name" :href="link" target="_blank">
        <img :src="`/images/${name}_logo.png`" :alt="name" class="w-10 h-10 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0px_5px_5px_rgba(192,233,109,0.4)]">
      </a>
        </aside>
        
      </article>
      <div class="relative w-full h-32 -mt-16 bg-gradient-to-b from-mcoaching-background/5 via-mcoaching-background to-m-coaching-background"></div>
      
    </section>
</template>