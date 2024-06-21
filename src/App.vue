<template>
    <div id="app">
      <Navbar />
      <router-view />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue';
  
  export default {
    name: 'App',
    components: {
      Navbar
    }
  };
  </script>
  
  <style>
  body, html {
    margin: 0;
    font-family: 'Arial', sans-serif;
    overflow-x: hidden;
  }
  </style>
  