<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const lazyBackgrounds = document.querySelectorAll('.lazy-background');
  
  window.addEventListener('load', () => {
    lazyBackgrounds.forEach(element => {
      element.style.backgroundImage = `url('${element.dataset.bg}')`;
      element.style.backgroundPosition = 'left';
      element.style.backgroundSize = 'cover';
    });
  });
});
</script>

<template>
  <section id="contact" class="min-h-screen text-white flex flex-col justify-center max-w-full">
      
    <div class="relative z-10 w-full h-32 -mb-16 bg-gradient-to-t from-mcoaching-background/5 via-mcoaching-background to-mcoaching-background"></div>

    <!-- Section Réseaux Sociaux -->
    <article class="relative w-full flex flex-col justify-center gap-7 h-100 px-10 md:px-20 text-center md:text-left lazy-background"
    data-bg="/images/img-contact.webp">
      
      <!-- Overlay pour lisibilité -->
      <div class="absolute inset-0 bg-mcoaching-primary/70"></div>

      <!-- Titre -->
      <h4 class="relative text-center text-mcoaching-light lg:text-left text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold animate-fade-in">
        Rejoignez-moi sur mes réseaux sociaux !
      </h4>
      
      <!-- Icônes de réseaux sociaux -->
      <aside class="relative flex w-full justify-center lg:justify-start gap-8 items-center">

        <!-- Instagram -->
        <a href="https://instagram.com/votre-compte" target="_blank" rel="noopener noreferrer" aria-label="Suivez-moi sur Instagram" class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="#FFF" />
          </svg>
        </a>

        <!-- Facebook -->
        <a href="https://facebook.com/votre-page" target="_blank" rel="noopener noreferrer" aria-label="Suivez-moi sur Facebook" class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!-- Facebook Logo -->
            <path 
              d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
              fill="#FFFFFFFF" />
          </svg>
        </a>

        <!-- Tiktok -->
        <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer" aria-label="Connectez-vous avec moi sur LinkedIn" class="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!-- TikTok Logo -->
              <path 
                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                style="fill:#FFF" />
              <path 
                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                style="fill:none;stroke:#fff;opacity:0.1;stroke-width:8px" />
              <path 
                d="M325.45,0v349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0Z"
                style="fill:#fff" />
              <path 
                d="M325.45,0v349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0Z"
                style="fill:none;stroke:#fff;opacity:0.1;stroke-width:8px" />
              <path 
                d="M389,102.39a122.29,122.29,0,0,1-63.51,0V0L237,0V349.38a162.55,162.55,0,0,0,40.92,319.13A162.55,162.55,0,0,0,441.22,511.4a162.55,162.55,0,0,0-115.77-301.9Z"
                style="fill:transparent" />
              <path 
                d="M389,102.39a122.29,122.29,0,0,1-63.51,0V0L237,0V349.38a162.55,162.55,0,0,0,40.92,319.13A162.55,162.55,0,0,0,441.22,511.4a162.55,162.55,0,0,0-115.77-301.9Z"
                style="fill:none;stroke:#fff;opacity:0.1;stroke-width:8px" />
            </svg>
        </a>

      </aside>
    </article>
    
    <div class="relative w-full h-32 -mt-16 bg-gradient-to-b from-mcoaching-background/5 via-mcoaching-background to-mcoaching-background"></div>
  </section>
</template>