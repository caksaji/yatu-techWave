<template>
  <div>
    <div class="section hero bg-gray-900 text-white">
      <div class="max-w-screen-xl p-4 mx-auto">
        <div class="rounded-xl bg-cover bg-center bg-no-repeat bg-prime-500">
          <div class="container pt-48 pb-12">
            <div class="w-52 text-xl font-medium">
              Kombinasi yang powerfull antara data science & software development
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-12">
        <div class="flex flex-col gap-8 items-end justify-between sm:flex-row">
          <div>
            <div class="flex items-center gap-2">
              <div class="flex-shrink-0 h-px w-full max-w-8 bg-white" />
              <span class="flex-shrink-0">Singkatnya, kami spesialis</span>
            </div>
            <SectionTitle text="Data Science dan Pengembangan Produk AI" class="max-w-4xl" />
          </div>
          <div class="flex">
            <SpButton color="white" size="lg" border round>
              Cari tahu
            </SpButton>
            <SpButton tabindex="-1" color="white" size="lg" icon-only round>
              <template #icon>
                <IconSvg name="arrow-right" class="h-5 w-5" />
              </template>
            </SpButton>
          </div>
        </div>
      </div>
    </div>
    <div class="section about bg-gray-900 text-white">
      <div class="container py-24">
        <div class="flex flex-col gap-8 justify-between pt-24 border-t border-dashed border-gray-600 sm:flex-row sm:items-end">
          <div class="hidden -space-x-20 sm:flex">
            <div class="flex-shrink-0 border rounded-full border-white" style="height: calc(10rem - 2px); width: calc(10rem - 2px);" />
            <div class="flex flex-col flex-shrink-0 gap-3 justify-center h-40 w-60 rounded-full overflow-hidden" style="z-index: 1;">
              <div v-for="i in 13" :key="i" class="flex-shrink-0 h-px w-full bg-gray-400" />
            </div>
            <div class="flex-shrink-0 h-40 w-40 rounded-full bg-white" />
          </div>
          <div class="max-w-xs space-y-4 text-xl font-medium">
            <div class="flex gap-2">
              <SpButton
                v-for="(s, i) in socMed"
                :key="i"
                color="white"
                icon-only
                border
                round
                @click="openLink(s.link)"
              >
                <template #icon>
                  <IconSvg :name="s.icon" class="h-5 w-5" />
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
    <div class="section service">
      <div class="container relative py-24">
        <OrnamentDotCircle color="gray-900" class="absolute top-12 right-0 transform translate-x-1/3 opacity-10" />
        <div class="relative">
          <div class="flex items-center gap-2">
            <div class="flex-shrink-0 h-px w-full max-w-8 bg-gray-900" />
            <span class="flex-shrink-0">Selanjutnya,</span>
          </div>
          <SectionTitle text="Inilah Solusi yang Kami Tawarkan atas Masalah Anda"  class="max-w-6xl"/>
          <div class="flex flex-wrap w-full pt-12 md:flex-nowrap">
            <div v-for="(s, i) in mainService" :key="i" class="w-full transform duration-300 group sm:w-1/2 md:w-1/4 md:hover:w-2/4">
              <div class="flex gap-4 flex-col justify-between h-full w-full pt-12 pb-4 px-4 border border-gray-900 rounded-xl text-white" :class="{ 'bg-gray-500': i === 0, 'bg-gray-900': i === 1, 'bg-prime-700': i === 2, 'bg-prime-500': i === 3 }">
                <div class="space-y-4">
                  <div class="text-3xl uppercase font-medium md:text-2xl" style="word-spacing: .5ch;">
                    {{ s.name }}
                  </div>
                  <div class="relative h-28">
                    <div class="absolute top-0 left-0 transform duration-300 origin-top-left group-hover:scale-100 md:scale-0">
                      {{ s.description }}
                    </div>
                  </div>
                </div>
                <div class="flex justify-end w-full">
                  <SpButton color="white" border round>
                    Cari tahu
                    <template #icon>
                      <IconSvg name="arrow-right" class="h-5 w-5" />
                    </template>
                  </SpButton>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-8 justify-between pt-12 sm:flex-row sm:items-end">
            <div class="max-w-xs text-xl">
              Dengan pengalaman melalui banyak studi kasus, kami percaya dapat memberikan solusi tebaik atas masalah anda
            </div>
            <div class="flex w-full justify-end">
              <div class="space-y-2">
                <div class="text-xl">
                  Butuh diskusi?
                </div>
                <div class="flex">
                  <SpButton color="black" size="lg" border round>
                    Hubungi kami
                  </SpButton>
                  <SpButton tabindex="-1" color="black" size="lg" icon-only round>
                    <template #icon>
                      <IconSvg name="arrow-right" class="h-5 w-5" />
                    </template>
                  </SpButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section benefit bg-gray-900 text-white">
      Benefit of using AI
    </div>
    <div class="section testimonial">
      Testimonial
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '~/components/partial/SectionTitle'
import SpButton from '~/components/partial/SpButton'
import IconSvg from '~/components/partial/IconSvg'
import OrnamentDotCircle from '~/components/partial/OrnamentDotCircle'

const socMed = [
  { icon: 'linkedin', link: 'https://linkedin.com' },
  { icon: 'x', link: 'https://x.com' },
  { icon: 'instagram', link: 'https://instagram.com' }
]
const mainService = [
  {
    name: 'Analisa Bisnis',
    description: 'Kami menganalisis kebutuhan bisnis anda untuk mengidentifikasi peluang, menyederhanakan proses, dan meningkatkan efisiensi demi pertumbuhan yang berkelanjutan'
  },
  {
    name: 'Peramalan Pasar',
    description: 'Dengan wawasan berbasis data, kami memprediksi tren pasar untuk membantu keputusan strategis dan mengoptimalkan posisi kompetitif bisnis anda'
  },
  {
    name: 'Pembuatan Software',
    description: 'Tim kami menciptakan solusi perangkat lunak kustom yang disesuaikan dengan kebutuhan unik anda, menjamin fungsionalitas dan pengalaman pengguna yang baik'
  },
  {
    name: 'Arsitektur Digital',
    description: 'Kami merancang kerangka digital yang kuat untuk terintegrasi dengan sistem anda, meningkatkan kinerja, dan mendukung inovasi di masa depan'
  }
]

const openLink = (link) => window.open(link)
</script>
