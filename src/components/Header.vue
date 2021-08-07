<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script lang="ts">
  import { Options, Vue } from "vue-class-component";
  import Button from "./Button.vue";

  @Options({
    components: {
      Button,
    },
    props: {
      title: String,
      showAddTask: Boolean,
    },
    emits: ["toggle-add-task"],
  })
  export default class Header extends Vue {
    title!: string;
    showAddTask!: boolean;
  }
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
