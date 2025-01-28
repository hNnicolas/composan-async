import { ref, onMounted, onUnmounted } from 'vue'

export function useIdleTime() {
  const secondes = ref(0)
  const totalIdleTime = ref(0)

  setInterval(() => {
    secondes.value++
    totalIdleTime.value += secondes.value
  }, 1000)

  function mouseMove(event: MouseEvent) {
    secondes.value = 0
  }

  onMounted(() => window.addEventListener('mousemove', mouseMove))
  onUnmounted(() => window.removeEventListener('mousemove', mouseMove))

  return {
    secondes,
    totalIdleTime,
  }
}
