<template>
    <div class="home">
      <video autoplay muted loop id="bg-video">
        <source src="@/assets/video.mp4" type="video/mp4">
      </video>
      <div class="content">
        <h1>Демократизация генеративного ИИ</h1>
        <p>Генеративный ИИ - ключ к облегчению науного процесса.</p>
      </div>
      <ParallaxSection>
        <h2>Почему это важно?</h2>
        <p>Генеративный ИИ (GenAI) становится более доступным благодаря сочетанию мощных предобученных моделей, облачных вычислений и открытого исходного кода. На сегодняшний день он уже облегчает жизнь студентов, художников и многих других людей.</p>
      </ParallaxSection>
    </div>
  </template>
  
  <script>
  import ParallaxSection from '../components/ParallaxSection.vue';
  
  export default {
    components: {
      ParallaxSection
    }
  };
  </script>
  
  <style>
  #bg-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }
  
  .content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    padding: 20px;
  }
  
  .home {
    position: relative;
    overflow: hidden;
  }
  
  .home::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  </style>
  