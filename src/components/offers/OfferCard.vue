<script>
import siteConfig from "../../config/siteConfig";
export default {
  props: {
    title: String,
    description: String,
    benefits: Array,
    price: Number,
    duration: String,
    featured: Boolean,
    tel: String
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${siteConfig.tel}`;
    },
  },
};
</script>

<template>
  <article
    class="
    relative border text-white flex flex-col justify-center gap-5 lg:gap-13
    p-5 rounded-lg shadow-lg bg-mcoaching-background/40 backdrop-blur-md transition-all duration-300 transform
    hover:scale-105 
    w-11/12 sm:w-2/3 md:w-3/7 lg:w-11/12
    h-auto min-h-[520px] sm:min-h-[450px] md:min-h-[450px] lg:min-h-[550px]"
    :class="featured ? 'border-mcoaching-accent shadow-xl lg:scale-105 hover:scale-110' : 'border-white'"
  >
    <!-- Badge Populaire -->
    <p v-if="featured" class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-mcoaching-accent text-mcoaching-background text-xs font-bold px-3 py-1 rounded-full shadow-md border border-mcoaching-accent">
      ⭐ Populaire
    </p>

    <!-- Titre -->
    <h3 class="font-semibold text-lg sm:text-sm text-center">
      {{ title }}
    </h3>

    <!-- Liste des avantages -->
    <div class="text-xs lg:text-xs xl:text-sm flex flex-col justify-center items-center gap-2 text-gray-300 h-52 sm:h-50 md:h-35 ">
      <p class="text-center" v-for="(benefit, index) in benefits" :key="index">→ {{ benefit }}</p>
    </div>

    <!-- Prix -->
    <p class="text-3xl sm:text-3xl font-bold text-center">
      {{ price }}€
      <span class="text-sm sm:text-base font-bold">/ {{ duration }}</span>
    </p>

    <!-- Bouton WhatsApp -->
    <a
      :href="whatsappLink"
      target="_blank"
      class="w-full rounded-lg 
      py-2 lg:py-2
      text-xs lg:text-xs
      font-semibold text-center transition duration-300 bg-transparent  border "
      :class=" featured ? 'border-mcoaching-accent text-mcoaching-accent hover:bg-mcoaching-accent hover:text-mcoaching-background' : 'border-mcoaching-light text-mcoaching-light hover:bg-mcoaching-light/80 hover:text-mcoaching-background'"
    >
      En savoir plus
    </a>

    <!-- Description -->
    <p class="text-xs text-mcoaching-light/80 text-center h-10">
      {{ description }}
    </p>
  </article>
</template>
