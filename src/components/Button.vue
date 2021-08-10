<template>
  <header>
    <button @click="onClick" class="btn" :style="{ background: color }">
      {{ text }}
    </button>
  </header>
</template>

<script setup lang="ts">
  import { defineEmits, defineProps } from "vue";

  defineProps<{
    text: string;
    color: string;
  }>();

  const emit = defineEmits<{
    (e: "btn-click"): void;
  }>();

  const onClick = (): void => {
    emit("btn-click");
  };
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
