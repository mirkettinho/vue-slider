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
      thumbImage:[
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
    },
    autoplay{
    setInterval(()=>{
      skip(true)
    },2000)
  }
  },

  mounted(){
    setTimeout(()=>{
      this.loading = false
    },2000)
  }
}).mount("#app")