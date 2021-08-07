<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from "vue-class-component";
  import { Task } from "@/models/task";
  import { PropType } from "@vue/runtime-core";

  @Options({
    components: {},
    props: {
      task: Object as PropType<Task>,
    },

    emits: ["delete-task", "toggle-reminder"],
  })
  export default class TaskRow extends Vue {
    task: Task = {
      id: 0,
      text: "Not Set",
      day: "Never",
      reminder: false,
    } as Task;
  }
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
