<script setup lang="ts">
import { computed, ref } from 'vue'
import StepsView from './components/ui/StepsUI.vue'
import BookingForm from './components/features/BookingForm.vue'
import MasterList from './components/features/MasterList.vue'
import ServiceList from './components/features/ServiceList.vue'
import SlotPicker from './components/features/SlotPicker.vue'

const currentStep = ref(0)
const steps = [
  { component: ServiceList, title: 'Выбор услуги' },
  { component: MasterList, title: 'Выбор мастера' },
  { component: SlotPicker, title: 'Выбор времени' },
  { component: BookingForm, title: 'Заполните форму бронирования' },
]
const CurrentStepComponent = computed(() => steps[currentStep.value]?.component)
const currentTitle = computed(() => steps[currentStep.value]?.title)
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <p class="header-title">{{ currentTitle }}</p>
      <StepsView :steps="steps.length" :current-step="currentStep" />
    </header>
    <main>
      <component :is="CurrentStepComponent" />
    </main>
  </div>
</template>

<style scoped>
.header {
  padding: 16px;
}

.header-title {
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
}
</style>
