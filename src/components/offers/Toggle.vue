<template>
  <div class="
        flex 
        border border-gray-600 rounded-full overflow-hidden 
        w-[90%] sm:w-[70%] md:w-[50%]
        text-xs
        bg-mcoaching-primary">
      <button
        @click="isPack = false"
        class="px-2 py-2 transition-all duration-300 text-mcoaching-light border-mcoaching-accent w-2/4"
        :class="!isPack ? 'bg-mcoaching-accent font-bold text-mcoaching-primary border-none' : 'text-mcoaching-light hover:text-mcoaching-light/80'"
      >
        Programmes
      </button>
      <button
        @click="isPack = true"
        class="px-6 py-2 transition-all duration-300 w-2/4"
        :class="isPack ? 'bg-mcoaching-accent font-bold text-mcoaching-primary border-none' : 'text-mcoaching-light hover:text-mcoaching-light/80'"
      >
        Packs de séances
      </button>
    </div>
</template>

<script setup>
const isPack = defineModel();
</script>
