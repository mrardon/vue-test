<template>
  <div class="tasks">
    <TaskRow
      @delete-task="$emit('delete-task', task.id)"
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      v-for="task in tasks"
      :key="task.id"
      :task="task"
    />
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from "vue-class-component";
  import { Task } from "@/models/task";
  import { PropType } from "@vue/runtime-core";
  import TaskRow from "./TaskRow.vue";

  @Options({
    components: {
      TaskRow,
    },
    props: {
      tasks: Object as PropType<Task[]>,
    },
    emits: ["delete-task", "toggle-reminder"],
  })
  export default class Tasks extends Vue {
    tasks: Task[] = [];
  }
</script>
