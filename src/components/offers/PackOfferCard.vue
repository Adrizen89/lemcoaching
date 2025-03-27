<script>
import siteConfig from "../../config/siteConfig";
export default {
  props: {
    title: String,
    description: String,
    benefits: Array,
    price: Number,
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
    relative border text-white flex flex-col justify-between
    p-5 rounded-lg shadow-lg bg-mcoaching-background/40 backdrop-blur-md transition-all duration-300 transform
    hover:scale-105 
    w-11/12 md:w-3/4 lg:w-1/3
    h-auto min-h-[420px] sm:min-h-[450px] md:min-h-[400px] lg:min-h-[450px]"
  >

    <!-- Titre -->
    <h3 class="font-semibold text-lg sm:text-sm text-center">
      {{ title }}
    </h3>

    <!-- Liste des avantages -->
    <div class="text-xs lg:text-xs flex flex-col justify-center items-center gap-2 text-gray-300 h-30 sm:h-30 ">
      <p class="text-center" v-for="(benefit, index) in benefits" :key="index">→ {{ benefit }}</p>
    </div>

    <!-- Prix -->
    <p class="text-3xl sm:text-3xl font-bold text-center">
      {{ price }}€
    </p>

    <!-- Bouton WhatsApp -->
    <a
      :href="whatsappLink"
      target="_blank"
      class="w-full rounded-lg 
      py-2 lg:py-2
      text-xs lg:text-xs
      font-medium text-center transition duration-300 bg-transparent border
      border-mcoaching-light text-mcoaching-light hover:bg-mcoaching-light/80 hover:text-mcoaching-background "
    >
      En savoir plus
    </a>

    <!-- Description -->
    <p class="text-xs text-mcoaching-light/80 text-center h-10">
      {{ description }}
    </p>
  </article>
</template>
