<template>
  <teleport to="body">
    <div  v-if="modelValue" class="modal">
      <h2>{{title}}</h2>
        <slot />
      <button @click="hideModal"> Hide Modal </button>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  modelValue :{
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'No title props',
  }
})

const emit = defineEmits(['update:modelValue',])

const hideModal = (e) => {
  emit('update:modelValue', false)
}

</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  /*transform: translate(-50%, -50%);*/
  background: olive;
  padding: 10px;
  width: 100%;
  height: 100%;
  z-index: 200;
}
</style>