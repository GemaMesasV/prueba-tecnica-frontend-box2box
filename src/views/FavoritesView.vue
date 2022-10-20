<template>
  <div class="grid gap-24 grid-cols-12 mt-10" >
      <MealCard
        v-for="meal in meals" :key="meal.name" :meal="meal"
      >
      </MealCard>
    </div>
</template>

<script>
import store from '../store'
import MealCard from '@/components/MealCard.vue'

export default {
  data() {
    return {
      meals: store.state.favoriteMeals
    }
  },
  name: 'FavoritesView',
  components: {
    MealCard
  },
}
</script>
