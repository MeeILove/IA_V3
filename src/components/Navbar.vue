<template>
    <div>
      <div class="navbar">
        <div class="hamburger-menu" @click="toggleMenu">
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="menu-overlay" :class="{ open: isOpen }">
        <div class="menu-content">
          <router-link to="/" @click.native="closeMenu">Главная</router-link>
          <router-link to="/about" @click.native="closeMenu">О себе</router-link>
          <router-link to="/contact" @click.native="closeMenu">Контакты</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
      closeMenu() {
        this.isOpen = false;
      }
    }
  };
  </script>
  
  <style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    z-index: 10;
  }
  
  .hamburger-menu {
    cursor: pointer;
    line-height: 0;
  }
  
  .hamburger-menu span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0 -2px;
    background: white;
  }
  
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    z-index: 9;
  }
  
  .menu-overlay.open {
    transform: translateX(0);
  }
  
  .menu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .menu-content a {
    color: white;
    padding: 20px;
    font-size: 1.5em;
    text-decoration: none;
  }
  </style>
  