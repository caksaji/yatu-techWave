<template>
  <div>
    <LandingNavbar data-aos="fade-up" />
    <NuxtPage />
    <ErrorNoInternetConnection />
  </div>
</template>

<script setup>
import LandingNavbar from '~/components/partial/LandingNavbar'
import ErrorNoInternetConnection from '~/components/partial/ErrorNoInternetConnection'

useHead({ titleTemplate: titleChunk => titleChunk ? `${titleChunk} | TechWave` : 'TechWave' })
</script>
