import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'Pinia counter title'
  }),
  actions: {
    countUp(amount = 1){
      this.count += amount
    },
    countDown(amount = 1){
      this.count -= amount
    },
  },
  getters: {
    isAddEven(state){
      return state.count % 2 === 0 ? 'add' : 'even'
    }
  }
})
