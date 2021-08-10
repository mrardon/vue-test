<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-if="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script setup lang="ts">
  import { computed, defineProps, defineEmits } from "vue";
  import { useRoute } from "vue-router";
  import Button from "./Button.vue";

  defineProps<{
    title: string;
    showAddTask: boolean;
  }>();

  defineEmits<{
    (e: "toggle-add-task"): void;
  }>();

  const route = useRoute();

  const homePage = computed(() => route.path === "/");
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
