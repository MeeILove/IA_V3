<template>
    <div class="parallax">
      <slot></slot>
    </div>
  </template>
  
  <style>
  .parallax {
    background-image: url('@/assets/parallax-image.jpg');
    height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  </style>
  