<template>
  <div class="home">
    <h1 >HOME</h1>
    <h3 ref="homeTitleRef">{{counter.title}}</h3>
    <div class="counter">
      <button @click="counter.countUp(2)" class="counter__btn" >++</button>
      <button @click="counter.countUp()" class="counter__btn" >+</button>
      <div class="counter__count">{{ counter.count }}</div>
      <button @click="counter.countDown()" class="counter__btn" >-</button>
      <button @click="counter.countDown(2)" class="counter__btn">--</button>
    </div>

    <p>This counter is odd/even{{ counter.isAddEven }} </p>

    <div class="edit">
      <label>
        Edit title
        <input type="text" v-autofocus v-model="counter.title">
      </label>
    </div>

  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { vAutofocus } from "@/directives/vAutoFocus.js";
  import { useCounterStore } from "@/stores/counter.js";

  const homeTitleRef = ref(null)

  const counter = useCounterStore()
</script>

<style lang="scss">
.home {
  text-align: center;
}
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  &__btn {

  }
  &__count {
    font-weight: 700;
    font-size: 26px;
  }
}
</style>