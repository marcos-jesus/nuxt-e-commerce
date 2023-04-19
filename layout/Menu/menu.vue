<template>
  <div class="header">
    <Logo />
    <Input />
    <Login/>
  </div>
</template>
<script setup>
  import Logo from '../Logo/logo.vue'
  import Input from '@/components/Input/input.vue'
  import Login from '@/layout/MenuLogin/menu-login.vue'
</script>
<style scoped>
  .header {
    display: flex;
    padding: 1.25rem 0;
    background:#121214;
    display: flex;
    justify-content: space-between;
  }
</style>