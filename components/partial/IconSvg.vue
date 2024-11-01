<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    class="flex-shrink-0 stroke-2 stroke-current transform"
    :class="{ 'rotate-180': props.name === 'log-out' }"
    style="stroke-linecap: round; stroke-linejoin: round;"
  >
    <template v-if="props.name === 'nav-arrow-right'">
      <path d="M9 6L15 12L9 18" />
    </template>
  </svg>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: null, required: true }
})
</script>
