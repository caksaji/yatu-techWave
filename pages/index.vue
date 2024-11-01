<template>
  <div>
    <div class="section hero bg-gray-800 text-white">
      <div class="max-w-screen-xl p-4 mx-auto">
        <div class="rounded-xl bg-cover bg-center bg-no-repeat bg-prime-500">
          <div class="container pt-48 pb-12">
            <div class="w-48 text-xl font-medium">
              Kombinasi yang powerfull antara data science & software development
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-12">
        <div class="flex flex-col gap-8 items-end justify-between sm:flex-row">
          <div>
            <div class="flex items-center gap-2">
              <div class="flex-shrink-0 h-px w-full max-w-8 bg-gray-200" />
              <span class="flex-shrink-0">Singkatnya, kami spesialis</span>
            </div>
            <div class="max-w-4xl text-5xl uppercase md:text-6xl">
              Data Science dan Pengembangan Produk AI
            </div>
          </div>
          <div class="flex">
            <SpButton color="white" size="lg" border round>
              Cari tahu
            </SpButton>
            <SpButton tabindex="-1" color="white" size="lg" icon-only round>
              <template #icon>
                <IconSvg name="nav-arrow-right" class="h-5 w-5" />
              </template>
            </SpButton>
          </div>
        </div>
      </div>
    </div>
    <div class="section about bg-gray-800 text-white">
      <div class="container py-24">
        <div class="flex flex-col gap-8 justify-between sm:flex-row sm:items-end">
          <div class="hidden -space-x-20 sm:flex">
            <div class="flex-shrink-0 border rounded-full border-white" style="height: calc(10rem - 2px); width: calc(10rem - 2px);" />
            <div class="flex flex-col flex-shrink-0 gap-3 justify-center h-40 w-60 rounded-full overflow-hidden" style="z-index: 1;">
              <div v-for="i in 13" :key="i" class="flex-shrink-0 h-px w-full bg-gray-400" />
            </div>
            <div class="flex-shrink-0 h-40 w-40 rounded-full bg-white" />
          </div>
          <div class="max-w-xs space-y-4 text-xl font-medium">
            <div class="flex gap-2">
              <SpButton v-for="(s, i) in socMed" color="white" icon-only border round>
                <template #icon>
                  <IconSvg name="nav-arrow-right" class="h-5 w-5" />
                </template>
              </SpButton>
            </div>
            <div>
              Kami menciptakan produk berdasarkan data science dan diperkuat dengan machine learning untuk memberikan solusi atas masalah yang ada
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SpButton from '~/components/partial/SpButton'
import IconSvg from '~/components/partial/IconSvg'

const socMed = [
  { name: 'linkedin', link: 'https://linkedin.com' },
  { name: 'x', link: 'https://x.com' },
  { name: 'instagram', link: 'https://instagram.com' }
]
</script>
