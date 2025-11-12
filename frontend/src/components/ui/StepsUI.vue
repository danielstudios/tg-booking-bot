<script setup lang="ts">
defineProps<{
  steps: number
  currentStep: number
}>()
</script>

<template>
  <div class="steps-list">
    <div
      v-for="(step, index) in steps"
      :key="index"
      :class="[{ active: index <= currentStep }, 'step']"
    ></div>
  </div>
</template>

<style scoped>
.steps-list {
  display: flex;
  gap: 9px;
}

.step {
  background-color: var(--tg-theme-hint-color);
  width: 100%;
  height: 3px;
  border-radius: 2px;
}

.step.active {
  background-color: var(--tg-theme-link-color);
}
</style>
