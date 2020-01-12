import {ref} from "@vue/composition-api";

const defaultProps = {
  defaultValue: 0
};

export function useCounter({defaultValue} = defaultProps) {
  const counter = ref(defaultValue);

  function increment() {
    counter.value++;
  }

  function decrement() {
    counter.value--;
  }

  function reset() {
    counter.value = defaultValue;
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}