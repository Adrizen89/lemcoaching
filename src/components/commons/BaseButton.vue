<template>
  <a
    :href="link"
    target="_blank"
    class="mt-5 bg-mcoaching-accent text-mcoaching-primary border border-mcoaching-accent bg-m flex items-center justify-center gap-2 py-2 px-4 sm:py-2 sm:px-4 rounded-md
    text-xs sm:text-xs 
    font-medium
    transition duration-300 hover:bg-mcoaching-accent/80 cursor-pointer"
  >
    {{ text }}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
  </a>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>