<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <!-- Sección del carrusel -->
      <q-card-section>
        <q-carousel
          control-type="outline"
          control-color="red"
          swipeable
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          v-model:fullscreen="fullscreen"
          height="100vh"
        >
          <q-carousel-slide :name="1">
            <q-card class="carousel-card">
              <!-- Sección de imagen con tamaño controlado -->
              <q-card-section>
                <q-img src="/assets/pwaI.jpg" style="max-height: 300px; object-fit: cover;" />
              </q-card-section>
              <!-- Sección de texto -->
              <q-card-section>
                <IntroSlide />
              </q-card-section>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide :name="2">
            <q-card class="carousel-card">
              <!-- Sección de imagen con tamaño controlado -->
              <q-card-section>
                <q-img src="/assets/soporte.jpg" style="max-height: 300px; object-fit: cover;" />
              </q-card-section>
              <!-- Sección de texto -->
              <q-card-section>
                <RequirementSlides title="Soporte Offline" description="Una PWA debe ofrecer soporte offline. Esto se logra a través de un Service Worker, que almacena en caché recursos para que la aplicación funcione sin conexión." />
              </q-card-section>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide :name="3">
            <q-card class="carousel-card">
              <!-- Sección de imagen con tamaño controlado -->
              <q-card-section>
                <q-img src="/assets/https.jpg" style="max-height: 300px; object-fit: cover;" />
              </q-card-section>
              <!-- Sección de texto -->
              <q-card-section>
                <RequirementSlides title="HTTPS" description="Para garantizar la seguridad de la PWA, debe estar servida a través de HTTPS. Esto protege las comunicaciones y asegura que los datos del usuario estén seguros." />
              </q-card-section>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide :name="4">
            <q-card class="carousel-card">
              <!-- Sección de imagen con tamaño controlado -->
              <q-card-section>
                <q-img src="/assets/manifest.png" style="max-height: 300px; object-fit: cover;" />
              </q-card-section>
              <!-- Sección de texto -->
              <q-card-section>
                <RequirementSlides title="Manifesto Web App" description="El archivo manifest.json define cómo se comportará la PWA cuando se instale en un dispositivo. Incluye el nombre, íconos, colores y más." />
              </q-card-section>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide :name="5">
            <q-card class="carousel-card">
              <!-- Sección de imagen con tamaño controlado -->
              <q-card-section>
                <q-img src="/assets/cross.png" style="max-height: 300px; object-fit: cover;" />
              </q-card-section>
              <!-- Sección de texto -->
              <q-card-section>
                <RequirementSlides title="Compatibilidad Cross-Platform" description="La PWA debe ser compatible con múltiples dispositivos y plataformas, adaptándose tanto a móviles como a escritorio sin necesidad de cambios significativos." />
              </q-card-section>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide :name="6">
            <q-card class="carousel-card">
              <!-- Sección de imagen con tamaño controlado -->
              <q-card-section>
                <q-img src="/assets/act.png" style="max-height: 300px; object-fit: cover;" />
              </q-card-section>
              <!-- Sección de texto -->
              <q-card-section>
                <RequirementSlides title="Actualizaciones Silenciosas" description="Una característica clave es la capacidad de actualizar en segundo plano sin interrumpir la experiencia del usuario, gracias a los Service Workers." />
              </q-card-section>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide :name="7">
            <q-card class="carousel-card">
              <!-- Sección de imagen con tamaño controlado -->
              <q-card-section>
                <q-img src="/assets/conclusion.jpg" style="max-height: 300px; object-fit: cover;" />
              </q-card-section>
              <q-card-section>
                <ConclusionSlide />
              </q-card-section>
            </q-card>
          </q-carousel-slide>
          <!-- Sección de texto -->

          <template v-slot:control>
            <q-carousel-control
              position="bottom-right"
              :offset="[18, 18]"
            >
              <q-btn
                push round dense color="white" text-color="secondary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import IntroSlide from '@/components/IntroSlide.vue';
import RequirementSlides from '@/components/RequirementSlides.vue';
import ConclusionSlide from '@/components/ConclusionSlide.vue';

export default {
  components: {
    IntroSlide,
    RequirementSlides,
    ConclusionSlide
  },
  setup() {
    return {
      slide: ref(1),
      fullscreen: ref(false)
    }
  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
}

.carousel-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}



.q-card-section {
  padding: 10px;
}
</style>
