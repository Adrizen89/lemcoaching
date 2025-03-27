<template>
  <section id="offers" class="min-h-screen flex flex-col gap-10 items-center p-6 sm:p-10 max-w-full">
    <h2 class="text-3xl sm:text-4xl font-extrabold text-center text-mcoaching-accent">Mes Offres</h2>
    <p class="text-mcoaching-light text-center">Choisissez entre un programme d’accompagnement ou un pack de séances individuelles pour atteindre vos objectifs.</p>
    
    <Toggle v-model="isPack" />

    <transition name="fade" mode="out-in">
      <div v-if="!isPack" class="mt-6 grid md:flex md:flex-wrap md:justify-center md:w-full lg:grid lg:grid-cols-3 w-full max-w-7xl justify-items-center gap-20 lg:gap-0">
        <OfferCard v-for="offer in offers" :key="offer.title" v-bind="offer" />
      </div>
      
      <div v-else class="mt-6 grid sm:grid-cols-2 w-full max-w-7xl justify-items-center gap-10 md:gap-0 lg:flex lg:justify-center lg:gap-20">
        <PackOfferCard v-for="pack in packs" :key="pack.title" v-bind="pack" />
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from "vue";
import siteConfig from "../config/siteConfig";
import OfferCard from "../components/offers/OfferCard.vue"
import PackOfferCard from "../components/offers/PackOfferCard.vue"
import Toggle from "../components/offers/Toggle.vue"

// Déclaration des données réactives
const offers = ref(siteConfig.offers);
const packs = ref(siteConfig.sessionPacks);
const isPack = ref(false); // Géré dynamiquement via v-model
</script>

<style scoped>
/* Animation de chaque carte */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease-in;
}

.fade-enter {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
