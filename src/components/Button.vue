<template>
  <header>
    <button @click="onClick" class="btn" :style="{ background: color }">
      {{ text }}
    </button>
  </header>
</template>

<script lang="ts">
  import { Options, Vue } from "vue-class-component";

  @Options({
    components: {},
    props: {
      text: String,
      color: String,
    },
    emits: ["btn-click"],
  })
  export default class Button extends Vue {
    text!: string;
    color!: string;

    onClick(): void {
      this.$emit("btn-click");
    }
  }
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
