<script setup>
import NavigationBar from './components/commons/NavigationBar.vue';
import HomeView from './views/HomeView.vue';
import Offers from './views/Offers.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import FooterBar from './components/commons/FooterBar.vue';
</script>

<template>
<header>
<NavigationBar />
</header>

<main>
  <HomeView />
  <div class="relative w-full h-32 -mt-16 bg-gradient-to-b from-mcoaching-background/5 via-mcoaching-background to-m-coaching-background"></div>
  <Offers />
  <About />
  <Contact />
  <FooterBar />

</main>
</template>

