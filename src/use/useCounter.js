import { ref, computed, watch, onMounted, nextTick } from 'vue'

const counter = ref(0)

export function useCounter(){
	const	counterTitle = ref('Counter Title')

	function countUp(num = 1){
		counter.value += num
		nextTick(() => console.log('test nextTick'))
	}

	function countDown(num) {
		counter.value -= num
	}

	watch(counter, (newV, oldV) => {
		if (newV > 5 ) alert(`counter - ${newV}`)
		testWatch()
	} )

	const testWatch = () => {
		console.log('testWatch')
	}

	const chekOdd = computed(() => counter.value % 2 === 0  ? 'even' : 'odd')

	const logTitle = () => console.log(counterTitle.value)

	return {
		counter,
		counterTitle,
		countUp,
		countDown,
		chekOdd,
		logTitle,
	}
}