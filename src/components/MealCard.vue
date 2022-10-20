<template>
   <t-card
    >
      <div class="h-full bg-cover rounded-t-2xl pt-3" :style="{ 'background-image':`url(${meal.strMealThumb})`}">
        <div class="bg-white text-sm w-20 rounded-2xl ml-2">
          {{meal.strCategory}}
        </div>
      </div>
      <template v-slot:footer>
        <div class="flex justify-between">
          <div>
            {{meal.strMeal}}
          </div>
          <div>
            <font-awesome-icon class="mr-2" icon="fa-regular fa-eye" />
            <font-awesome-icon icon="fa-regular fa-heart" @click="addFavorite(meal)"/>
          </div>
        </div>
      </template>
    </t-card>
</template>

<script>
  import store from '../store'

  export default {
    name: 'MealCard',
    props: {
      meal: Object
    },
    methods: {
      addFavorite(meal) {
        store.commit('add', meal);
      },
    }
  }
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>