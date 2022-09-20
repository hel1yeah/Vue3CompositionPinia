<template>
<div class="modals">
  <h1>Modals</h1>
  <div>
    Show Dark Modal ?
    <label >
      <input type="checkbox" v-model="isDarkModal">
    </label>
  </div>
  <button @click="togleModal">Show modal</button>
  <component
      v-model="showModal"
      :is="isTypeModal"
      title="Title slot (props)"
    >
    <p>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ab ad alias consectetur cumque magni mollitia qui quidem ratione sit vel.
        At cum dignissimos dolore eos eum illo molestias odio quo.
      </span>
    </p>
  </component>

</div>
</template>

<script setup>
//imports components
import AppModal from "@/components/AppModal.vue";
import AppDarkModal from '@/components/AppDarkModal.vue'
//imports
import { ref, computed } from 'vue'
// modal
const showModal = ref(false)

const isDarkModal = ref(false)

const togleModal = () => {
  showModal.value = !showModal.value
}

const isTypeModal = computed( () => {
  return isDarkModal.value ? AppDarkModal : AppModal
})

</script>

<style scoped>

</style>