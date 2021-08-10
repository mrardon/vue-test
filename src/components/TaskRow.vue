<template>
  <div
    @dblclick="emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="emit('delete-task', task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  import { Task } from "@/models/task";

  defineProps<{
    task: Task;
  }>();

  const emit = defineEmits<{
    (e: "delete-task", id: string): void;
    (e: "toggle-reminder", id: string): void;
  }>();
</script>

<style scoped>
  .fas {
    color: red;
  }
  .task {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .task.reminder {
    border-left: 5px solid green;
  }

  .task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
