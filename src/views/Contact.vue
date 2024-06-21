<template>
    <div class="contact">
      <h1>Контакты</h1>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Ваше имя" v-model="name" required />
        <input type="email" placeholder="Ваш email" v-model="email" required />
        <textarea placeholder="Ваше сообщение" v-model="message" required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      submitForm() {
        alert(`Спасибо за ваше сообщение, ${this.name}!`);
      }
    }
  };
  </script>
  
  <style>
  .contact {
    padding: 20px;
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input, textarea {
    margin: 10px;
    padding: 10px;
    width: 80%;
  }
  
  button {
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  