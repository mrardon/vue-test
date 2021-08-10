<template>
  <form @submit.prevent="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script setup lang="ts">
  import { ref, defineEmits } from "vue";
  import { Task } from "@/models/task";

  const emit = defineEmits<{
    (e: "add-task", newTask: Task): void;
  }>();

  let text = ref("");
  let day = ref("");
  let reminder = ref<string>(false as any as string);

  const onSubmit = () => {
    const newTask: Task = {
      id: "new_task",
      text: text.value,
      day: day.value,
      reminder: reminder.value as unknown as boolean,
    };

    emit("add-task", newTask);

    text.value = "";
    day.value = "";
    reminder.value = false as any as string;
  };
</script>

<style scoped>
  .add-form {
    margin-bottom: 40px;
  }
  .form-control {
    margin: 20px 0;
  }
  .form-control label {
    display: block;
  }
  .form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  .form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form-control-check label {
    flex: 1;
  }
  .form-control-check input {
    flex: 2;
    height: 20px;
  }
</style>
