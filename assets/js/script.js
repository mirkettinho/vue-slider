const {createApp} = Vue;

createApp({
  data(){
    return{
      image: "./assets/img/ferrari.jpg",
      counter: 0
    }
  }
}).mount("#app")