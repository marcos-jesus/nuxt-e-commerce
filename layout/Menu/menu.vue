<template>
  <div class="bg-blue-600">
    <Logo />
    <Input />
    <div class="headerStyle">
      <Login/>
    </div>
  </div>
</template>
<script setup>
  import Logo from '../Logo/logo.vue'
  import Input from '@/components/Input/input.vue'
  import Login from '@/layout/MenuLogin/menu-login.vue'
</script>