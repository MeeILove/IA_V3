<template>
  <div class="home">
    <video autoplay muted loop id="bg-video">
      <source src="../assets/video.mp4" type="video/mp4">
    </video>
    <div class="content">
      <h1>Демократизация генеративного ИИ</h1>
      <p>Генеративный ИИ - ключ к облегчению науного процесса.</p>
    </div>
    <section class="parallax">
      <div class="parallax-content">
        <h2>Почему это важно?</h2>
        <p>Генеративный ИИ (GenAI) становится более доступным благодаря сочетанию мощных предобученных моделей, облачных вычислений и открытого исходного кода. На сегодняшний день он уже облегчает жизнь студентам, художникам и многим другим людям.</p>
      </div>
    </section>
    <div class="additional-content">
      <section>
        <h2>Введение</h2>
        <p>Генеративный ИИ позволяет создавать новые и уникальные контенты, такие как тексты, изображения и даже видео, используя алгоритмы машинного обучения. Это открывает множество возможностей для креативных индустрий, разработки новых продуктов и услуг, а также улучшения пользовательского опыта.</p>
      </section>
      <section>
        <h2>Примеры использования</h2>
        <p>Генеративный ИИ активно используется в различных областях. Например, в медицине он помогает создавать новые лекарственные препараты, в искусстве - генерировать уникальные произведения, а в бизнесе - разрабатывать персонализированные маркетинговые стратегии.</p>
      </section>
      <section>
        <h2>Будущее генеративного ИИ</h2>
        <p>С развитием технологий генеративный ИИ будет становиться все более доступным и мощным инструментом, способным преобразовать различные аспекты нашей жизни и работы. Важно понимать и изучать его потенциал, чтобы максимально эффективно использовать его возможности.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
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

.parallax {
  background-image: url('../assets/parallax-image.jpg');
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.parallax-content {
  color: white;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон для улучшения читаемости текста */
}

.additional-content {
  padding: 20px;
  background: white;
  color: black;
}

.additional-content section {
  margin-bottom: 20px;
}
</style>
