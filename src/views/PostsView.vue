<template>
  <div class="posts">
    <h1>posts</h1>


    <ul>
      <li v-for="(post, idx) in posts" :key="idx">
        <router-link
            :to="{
              name: 'postsDetail',
              params: {id: post.id }
            }">
          {{ post.title }}
        </router-link>
      </li>

    </ul>
    
    <textarea v-autofocus></textarea>
    <button class="posts-view-button" @click="counter.countUp()">
      Add Couter ++
      {{ counter.count }}
    </button>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutoFocus.js'
import { useCounterStore } from "@/stores/counter.js";

const posts = ref([
  {
    id: 1,
    title: 'post1',
  },
  {
    id: 2,
    title: 'post2',
  },
  {
    id: 3,
    title: 'post3',
  },
])

const counter = useCounterStore()

</script>

<style>
.posts-view-button {
  display: block;
}
</style>