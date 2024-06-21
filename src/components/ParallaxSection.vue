<template>
  <div class="parallax">
    <div class="overlay">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.parallax {
  background-image: url('../assets/parallax-image.jpg');
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white; /* Цвет текста на изображении */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон для улучшения читаемости текста */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Цвет текста */
}

::v-deep h2, ::v-deep p {
  color: white; /* Цвет текста */
}
</style>
