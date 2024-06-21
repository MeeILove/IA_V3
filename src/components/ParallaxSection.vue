<template>
  <div class="parallax">
    <div class="parallax-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.parallax {
  position: relative;
  background-image: url('../assets/parallax-image.jpg');
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон для улучшения читаемости текста */
}
</style>
