<script setup lang="ts">
import { AuthService } from '@/services/authService';
</script>

<template>
  <button class="btn" @click="AuthService.login">Click Me</button>
</template>

<style scoped lang="scss"></style>