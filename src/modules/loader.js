import {onMounted, ref} from "@vue/composition-api";

const defaultProps = {
  delay: 500
};

export function useLoader({delay} = defaultProps) {
  const isLoading = ref(true);

  function start() {
    setTimeout(() => {
      isLoading.value = false;
    }, delay)
  }

  onMounted(() => {
    start();
  });

  return { isLoading }
}