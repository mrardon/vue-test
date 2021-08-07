<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
      :tasks="tasks"
    />
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from "vue-class-component";
  import Header from "./components/Header.vue";
  import { Task } from "./models/task";
  import Tasks from "./components/Tasks.vue";
  import AddTask from "./components/AddTask.vue";

  @Options({
    components: {
      Header,
      Tasks,
      AddTask,
    },
  })
  export default class App extends Vue {
    tasks: Task[] = [];
    showAddTask = false;

    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    }

    addTask(newTask: Task) {
      this.tasks = [...this.tasks, newTask];
    }

    deleteTask(id: number) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    }

    toggleReminder(id: number) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    }

    created() {
      this.tasks = [
        {
          id: 1,
          text: "Doctors Appt",
          day: "March 1st at 2:30pm",
          reminder: true,
        },
        {
          id: 2,
          text: "Meeting at School",
          day: "March 3rd at 1:30pm",
          reminder: true,
        },
        {
          id: 3,
          text: "Food Shopping",
          day: "March 3rd at 11:00am",
          reminder: false,
        },
      ];
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Poppins", sans-serif;
  }
  .container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
  }
  .btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }
  .btn:focus {
    outline: none;
  }
  .btn:active {
    transform: scale(0.98);
  }
  .btn-block {
    display: block;
    width: 100%;
  }
</style>
