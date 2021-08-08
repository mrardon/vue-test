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

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useRoute } from "vue-router";
  import Button from "./Button.vue";

  export default defineComponent({
    components: {
      Button,
    },
    props: {
      title: String,
      showAddTask: Boolean,
    },
    emits: ["toggle-add-task"],
    setup() {
      const route = useRoute();

      const homePage = computed(() => route.path === "/");

      return { homePage };
    },
  });
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
