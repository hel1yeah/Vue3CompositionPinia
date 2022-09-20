<template>
  <div class="post-detail">
    <h1>post-detail</h1>
    <p>router  {{ $route.params.id }}  </p>

    <button @click="showId">
      Show id page
    </button>

    <button @click="goHome">
      go home
    </button>

    <router-link :to="{ name: 'posts'}"> &lt; back </router-link>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function showId() {
  console.log('route.params', route.params.id)
  console.log(router)
}

const goHome = () => router.push({ name:'home' })

console.log( route)

</script>