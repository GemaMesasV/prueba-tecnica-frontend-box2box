<template>
  <div class="px-96" >
    <div class="flex items-center">
      <t-input placeholder="Buscar comida..." maxlength="1" v-model="text"/>
      <t-button @click="onSearch">Search</t-button>
    </div>
    <div class="grid gap-24 grid-cols-12 mt-10" >
      <MealCard
        v-for="meal in meals" :key="meal.name" :meal="meal"
      >
      </MealCard>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import MealCard from '@/components/MealCard.vue'

export default {
  data() {
    return {
      text: '',
      meals: []
    }
  },
  components: {
    MealCard
  },
  name: 'FoodsView',
  methods: {
    onSearch() {
      axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.text}`)
      .then(response => {
        this.meals = response.data.meals
      })
    },
  }
}
</script>
