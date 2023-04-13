const {createApp} = Vue;

createApp({
  data(){
    return{
      image:[
        "./assets/img/ferrari.jpg",
        "./assets/img/gtr.jpg",
        "./assets/img/r8.jpg",
        "./assets/img/silver.jpg",
        "./assets/img/supra.jpg",
        "./assets/img/porsche.jpg"
      ],
       counter: 0,
       loading: true

    }
  },

  methods:{
    skip(isNext){
      if(isNext) this.counter++
      else this.counter--

      if(this.counter === this.image.length) this.counter = 0
      if(this.counter < 0) this.counter = this.image.length -1
    }
  },

  mounted(){
    setTimeout(()=>{
      this.loading = false
    },1000)
  }
}).mount("#app")