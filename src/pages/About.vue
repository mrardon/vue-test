<template>
  <h3>Version 1.0.0</h3>
  <router-link to="/">Go Back</router-link>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";

  defineProps<{
    showAddTask: boolean;
  }>();
</script>
