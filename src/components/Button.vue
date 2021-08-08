<template>
  <header>
    <button @click="onClick" class="btn" :style="{ background: color }">
      {{ text }}
    </button>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    components: {},
    props: {
      text: String,
      color: String,
    },
    emits: ["btn-click"],

    setup(props, { emit }) {
      const onClick = (): void => {
        emit("btn-click");
      };

      return { onClick };
    },
  });
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
