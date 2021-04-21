const app = new Vue({
  el:"#app",
  data:{
    message: "写真を撮影しました",
    seen: false
  },
  methods:{
    move(){
      setTimeout(() =>{
        location.href = "bakagamiru.html"
      },4000)
    }
  }
})
