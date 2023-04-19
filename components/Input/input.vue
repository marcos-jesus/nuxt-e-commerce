<template>
  <div>
    <input type="text">
    <button class="btn btn-outline-primary btnSearch">
      <span class="bi bi-search  align-self-center btnSearchIcon"></span>
    </button>
  </div>
  
</template>
<script setup></script>
<style scoped>
  input {
    border-radius: 6px;
    border: 0;
    background: white;
    padding: 0.85rem;
    width: 25rem;
    color: white;
    font-weight: bold;
  }

  input:focus {
    border-radius: 6px;
    border: 0;
    background-color: white;
    padding: 0.85rem;
    width: 25rem;
  }

  .btnSearch {
    border: none;
    border-radius: 8px;
    background-color: #8004f3;
  }

  .btnSearch:focus {
    border: none;
    border-radius: 8px;
    background-color: #8004f3;
  }

  .btnSearchIcon {
    font-size: 19px;
  }

  .btnSearch:hover {
    border: none;
    border-radius: 8px;
    background-color: #f2d21c;
  }

  .btn-outline-primary {
    color: white;
  }

  .btn-outline-primary:hover .bi-search {
    color: #8004f3;
  }

  .btn-outline-primary:hover .bi-search {
    color: #8004f3;
  }
</style>