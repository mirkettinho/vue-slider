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
       loading: true,
       goAutoscroll: true

    }
  },

  methods:{
    skip(isNext){
      console.log('skip');
      if(isNext) this.counter++
      else this.counter--

      if(this.counter === this.image.length) this.counter = 0
      if(this.counter < 0) this.counter = this.image.length -1
    },

    autoplay(){
    setInterval(()=>{
      console.log('entrato');
      if(this.goAutoscroll) this.skip(true)
    },3000)
  }
  },

  mounted(){
    setTimeout(()=>{
      this.loading = false
      this.autoplay()
    },5000)
  }
}).mount("#app")