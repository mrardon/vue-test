<template>
  <div>
    <AddTask v-if="showAddTask" @add-task="addTask" />

    <Tasks
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
      :tasks="tasks"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, defineProps } from "vue";
  import Tasks from "@/components/Tasks.vue";
  import AddTask from "@/components/AddTask.vue";
  import { Task } from "@/models/task";

  defineProps<{
    showAddTask: boolean;
  }>();

  const tasks = ref<Task[]>([]);

  const fetchTasks = async (): Promise<void> => {
    await fetch("api/tasks")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        tasks.value = json;
      });
  };

  const addTask = async (newTask: Task) => {
    //remove the stub new task id
    newTask.id = "";
    await fetch("api/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        tasks.value = [...tasks.value, data];
      });
  };

  const deleteTask = async (id: string) => {
    if (confirm("Are you sure?")) {
      await fetch(`api/tasks/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          tasks.value = tasks.value.filter((task) => task.id !== id);
        })
        .catch((error) => {
          alert(`Error deleting task: ${error}`);
        });
    }
  };

  const fetchTask = async (id: string): Promise<Task> => {
    return await fetch(`api/tasks/${id}`).then((response) => {
      return response.json();
    });
  };

  const toggleReminder = async (id: string) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    await fetch(`api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        tasks.value = tasks.value.map((task) =>
          task.id === id ? { ...task, reminder: data.reminder } : task
        );
      });
  };

  // init the tasks
  fetchTasks();
</script>
