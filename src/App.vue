<template>
  <div>
    {{ userData.name }} @{{userData.username}} | Online : {{ online }}
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink :to="{ name: 'modalsView' }">Modals</RouterLink>
  </nav>

  <RouterView />
</template>
<script setup>
import { reactive, provide } from "vue";

import { useOnline } from '@vueuse/core'

const online = useOnline()

const userData = reactive({
  name: 'Yuri',
  username: 'hel1_yeah'
})

provide('userData', userData)

</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
