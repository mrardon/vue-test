<template>
  <div class="tasks">
    <TaskRow
      @delete-task="emit('delete-task', task.id)"
      @toggle-reminder="emit('toggle-reminder', task.id)"
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  import { Task } from "@/models/task";
  import TaskRow from "./TaskRow.vue";

  defineProps<{
    tasks: Task[];
  }>();

  const emit = defineEmits<{
    (e: "delete-task", id: string): void;
    (e: "toggle-reminder", id: string): void;
  }>();
</script>
