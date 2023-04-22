<template>
  <div class="input-group">
    <input class="form-control" type="text">
    <ElButton class="btn btn-outline-primary btnSearch" @click="searchMethod">
      <span class="bi bi-search  align-self-center btnSearchIcon" aria-hidden="true"></span>
    </ElButton>
  </div>
</template>
<script setup>
  import { ElButton } from 'element-plus'
</script>
<style scoped src="./input.scss"></style>