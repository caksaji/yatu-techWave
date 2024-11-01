<template>
  <NuxtLayout>
    <NuxtPage />
    <ErrorNoInternetConnection />
  </NuxtLayout>
</template>

<script setup>
import ErrorNoInternetConnection from '~/components/partial/ErrorNoInternetConnection'

useHead({ titleTemplate: titleChunk => titleChunk ? `${titleChunk} | TechWave` : 'TechWave' })
</script>
