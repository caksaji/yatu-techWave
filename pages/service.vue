<template>
  <div>
    <div class="section reason bg-gradient-to-br from-gray-800 via-prime-950 to-gray-900 text-white">
      <div class="container py-24">
        <div class="relative">
          <div data-aos="fade-right" class="flex items-center gap-2">
            <div class="flex-shrink-0 h-px w-full max-w-8 bg-white" />
            <span class="flex-shrink-0">Sebelum melanjutkan,</span>
          </div>
          <!--
            Sepenting apakah implementasi AI untuk menjalankan bisnis di zaman ini?

            Implementasi AI sangat penting untuk menjalankan bisnis di zaman ini karena beberapa alasan:

            1. **Keunggulan Kompetitif**: AI membantu perusahaan untuk tetap kompetitif dengan meningkatkan efisiensi dan produktivitas. Bisnis yang memanfaatkan AI dapat beradaptasi lebih cepat terhadap perubahan pasar.

            2. **Pengambilan Keputusan yang Lebih Baik**: Dengan analisis data yang kuat, AI memberikan wawasan yang mendalam yang memungkinkan manajer untuk membuat keputusan yang lebih terinformasi.

            3. **Pengalaman Pelanggan yang Ditingkatkan**: AI memungkinkan personalisasi layanan dan produk, yang meningkatkan kepuasan dan loyalitas pelanggan.

            4. **Efisiensi Operasional**: Automatisasi proses bisnis mengurangi waktu dan biaya, memungkinkan karyawan untuk fokus pada tugas yang lebih strategis.

            5. **Inovasi Produk dan Layanan**: AI dapat membantu dalam pengembangan produk baru dengan menganalisis tren dan umpan balik pelanggan, mempercepat siklus inovasi.

            6. **Pengelolaan Risiko**: AI dapat membantu dalam identifikasi dan mitigasi risiko, baik itu dalam aspek keamanan siber maupun manajemen keuangan.

            7. **Skalabilitas**: Dengan solusi berbasis AI, bisnis dapat lebih mudah mengembangkan operasi mereka tanpa proporsional meningkatkan biaya operasional.

            8. **Analisis Pasar yang Mendalam**: AI mampu menganalisis tren pasar dan perilaku konsumen secara real-time, memberikan bisnis keunggulan dalam merespons permintaan pasar.

            Di era digital ini, kemampuan untuk mengintegrasikan AI bukan hanya tentang efisiensi, tetapi juga tentang bertahan dan berkembang dalam lingkungan yang semakin kompetitif. Bisnis yang tidak memanfaatkan teknologi ini berisiko tertinggal. Apakah ada aspek khusus dari implementasi AI yang ingin kamu eksplor lebih lanjut?
          -->
          <SectionTitle data-aos="fade-up" data-aos-delay="300" text="Pernahkah Terpikirkan ketika..."  class="max-w-6xl"/>
          <div class="pt-12 space-y-8">
            <div class="flex flex-wrap items-start justify-center pt-12 -m-2">
              <div v-for="(ps, i) in problemSolving" :key="i" data-aos="fade-up" :data-aos-delay="(100 * i) + 550" class="flex-shrink-0 h-full w-full p-2 md:w-1/2 lg:w-1/3">
                <div tabindex="0" class="flex flex-col justify-between h-full py-12 px-4 border border-white/10 rounded-xl outline-0 bg-gray-800 duration-300 hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg lg:px-8 xl:px-12">
                  <div class="flex transform scale-75 origin-top-left">
                    <div v-for="i in 2" :key="2" class="flex-shrink-0 h-0 w-0" style="border-width: 3rem 1rem 0 1rem; border-style: solid; border-color: #60a5fa transparent transparent transparent; transform: skewX(calc(45deg / -2));" />
                  </div>
                  <div class="text-3xl font-medium md:text-2xl" style="word-spacing: .5ch;">
                    {{ ps.p }}
                  </div>
                  <div class="pt-12 text-xl">
                    {{ ps.s }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section h-32">
      Hehe
    </div>
  </div>
</template>

<script setup>
import SectionTitle from '~/components/partial/SectionTitle'
import SpButton from '~/components/partial/SpButton'
import OrnamentDotCircle from '~/components/partial/OrnamentDotCircle'

definePageMeta({ path: '/layanan' })

useHead({ title: 'Layanan' })

const problemSolving = [
  {
    p: 'Saya seorang retailer online tapi tingkat konversi yang rendah karena sulit menemukan produk yang tepat untuk pelanggan.',
    s: 'Dengan menggunakan algoritma machine learning untuk analisis perilaku pelanggan dan pola pembelian, perusahaan mengembangkan sistem rekomendasi yang memberikan saran produk yang relevan berdasarkan riwayat pembelian dan preferensi pengguna. Hasilnya, tingkat konversi meningkat secara signifikan.'
  },
  {
    p: 'Saya memiliki perusahaan manufaktur tapi sering mengalami downtime yang mahal akibat kegagalan mesin yang tidak terduga.',
    s: 'Dengan menerapkan sensor IoT dan algoritma data science, perusahaan mulai mengumpulkan data dari mesin untuk memprediksi kapan mereka mungkin mengalami kerusakan. Melalui pemeliharaan prediktif, perusahaan dapat melakukan pemeliharaan sebelum terjadi masalah, mengurangi downtime dan biaya operasional.'
  },
  {
    p: 'Saya bekerja di sebuah bank yang menghadapi peningkatan jumlah kasus penipuan yang merugikan pelanggan dan reputasi kami.',
    s: 'Dengan menggunakan AI dan algoritma pembelajaran mesin untuk menganalisis transaksi dalam waktu nyata, bank dapat mengidentifikasi pola perilaku yang mencurigakan. Sistem ini memberikan notifikasi otomatis kepada tim keamanan untuk menyelidiki transaksi yang berpotensi curang. Implementasi ini menurunkan jumlah kasus penipuan secara signifikan dan meningkatkan kepercayaan pelanggan.'
  }
]

const startDiscuss = (about = null) => window.open(`https://wa.me/6281111111111?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20layanan%20${about ? "*" + about + "*" : 'yang%20tersedia'}%2C%20bisakah%20kita%20mulai%20diskusi%3F`)
</script>
