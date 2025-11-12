<script setup lang="ts">
const services = [
  {
    id: 1,
    name: 'Мужская стрижка',
    duration: 45,
    price: 1500,
    description: 'Классическая мужская стрижка с учётом формы головы и стиля клиента.',
  },
  {
    id: 2,
    name: 'Бритьё опасной бритвой',
    duration: 30,
    price: 1200,
    description: 'Классическое бритьё с горячим полотенцем, уход за кожей и контур бороды.',
  },
  {
    id: 3,
    name: 'Укладка волос',
    duration: 20,
    price: 800,
    description:
      'Лёгкая укладка волос или моделирование формы, с использованием профессиональных средств.',
  },
  {
    id: 4,
    name: 'Стрижка бороды',
    duration: 20,
    price: 700,
    description: 'Оформление бороды, коррекция линии щёк и подбородка.',
  },
  {
    id: 5,
    name: 'Стрижка усов',
    duration: 10,
    price: 400,
    description: 'Подчёркивание усов и аккуратная коррекция контура.',
  },
  {
    id: 6,
    name: 'Комплекс “Стрижка + Борода”',
    duration: 60,
    price: 2000,
    description: 'Полный комплекс: стрижка волос и бороды с профессиональным уходом.',
  },
  {
    id: 7,
    name: 'Окрашивание бороды / усов',
    duration: 30,
    price: 1000,
    description: 'Лёгкое окрашивание без повреждения кожи и волос.',
  },
  {
    id: 8,
    name: 'Уход за волосами (маски/шампунь)',
    duration: 15,
    price: 500,
    description: 'Питательная маска или массаж головы с профессиональными средствами.',
  },
  {
    id: 9,
    name: 'Коррекция кожи головы',
    duration: 15,
    price: 500,
    description: 'Уход за кожей головы, массаж и профилактика раздражений.',
  },
  {
    id: 10,
    name: 'Детская стрижка',
    duration: 30,
    price: 1000,
    description: 'Стрижка для детей до 12 лет, с учётом комфорта и безопасности.',
  },
]
</script>

<template>
  <div class="service-list">
    <div v-for="service in services" :key="service.id" class="service">
      <input class="service-checkbox" type="checkbox" />
      <div>
        <p class="service-name">{{ service.name }}</p>
        <p class="service-price">{{ service.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
}

.service {
  display: flex;
  border-radius: 10px;
  gap: 16px;
  padding: 16px;
  background-color: var(--tg-theme-bg-color);
}

.service-checkbox {
  margin-top: 7px;
  width: 16px;
  height: 16px;
}

.service-name {
  font-size: 19px;
}
</style>
