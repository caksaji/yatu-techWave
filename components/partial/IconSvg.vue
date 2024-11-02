<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    class="flex-shrink-0 stroke-2 stroke-current transform"
    :class="{ 'rotate-180': props.name === 'log-out' }"
    style="stroke-linecap: round; stroke-linejoin: round;"
  >
    <template v-if="props.name === 'arrow-right'">
      <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" />
    </template>
    <template v-else-if="props.name === 'linkedin'">
      <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" />
      <path d="M7 17V13.5V10" />
      <path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" />
      <path d="M7 7.01L7.01 6.99889" />
    </template>
    <template v-else-if="props.name === 'x'">
      <path d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z" />
      <path d="M20 3L4 21" />
    </template>
    <template v-else-if="props.name === 'instagram'">
      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
      <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" />
      <path d="M17.5 6.51L17.51 6.49889" />
    </template>
  </svg>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: null, required: true }
})
</script>
