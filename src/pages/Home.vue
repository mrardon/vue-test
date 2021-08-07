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

<script lang="ts">
  import { Options, Vue } from "vue-class-component";
  import Tasks from "@/components/Tasks.vue";
  import AddTask from "@/components/AddTask.vue";
  import { Task } from "@/models/task";

  @Options({
    components: {
      Tasks,
      AddTask,
    },
    props: {
      showAddTask: Boolean,
    },
  })
  export default class Home extends Vue {
    tasks: Task[] = [];
    showAddTask!: boolean;

    async addTask(newTask: Task) {
      const response = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const data = await response.json();

      this.tasks = [...this.tasks, data];
    }

    async deleteTask(id: number) {
      if (confirm("Are you sure?")) {
        const response = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });

        response.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting task");
      }
    }

    async toggleReminder(id: number) {
      const taskToToggle = await this.fetchTask(id);
      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const response = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      });

      const data = await response.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    }

    async fetchTasks(): Promise<Task[]> {
      const response = await fetch("api/tasks");
      const data = await response.json();

      return data;
    }

    async fetchTask(id: number): Promise<Task> {
      const response = await fetch(`api/tasks/${id}`);
      const data = await response.json();

      return data;
    }

    async created() {
      this.tasks = await this.fetchTasks();
    }
  }
</script>
