<template>
    <div id="app">
        <div v-if="isLoading">
            Loading...
        </div>
        <div v-else>
            <p>
                <button @click="decrement">-</button>
                {{counter}}
                <button @click="increment">+</button>
            </p>
            <button @click="reset">reset</button>
        </div>
    </div>
</template>

<script>
  import {useLoader} from "./modules/loader";
  import {useCounter} from "./modules/counter";

  export default {
    name: 'app',
    setup() {
      return {
        ...useCounter({defaultValue: 10}),
        ...useLoader({delay: 1000})
      }
    }
  }
</script>
