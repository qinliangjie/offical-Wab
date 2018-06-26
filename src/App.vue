<template>
  <div id="app">
    <b-header></b-header>
    <router-view/>
    
    <Footer></Footer>
  </div>
</template>

<script>
  import BHeader from '@/components/BHeader'
  import Footer from '@/components/footer'
  export default {
    name: 'app',
    components: {BHeader,Footer},
    mounted:function(){
    },
    methods:{
    }
  }
</script>

<style>
#app {
  font-family: '\u5FAE\u8F6F\u96C5\u9ED1', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F9F9F9
}
body{
  margin:0;
}
a:active, a:hover, a:link, a:visited {
    outline: 0;
}
.swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        border-radius: 20px;
        background: #FFF;
        opacity: .35;
        filter: alpha(opacity=35);
        -webkit-transition: width .4s ease-in;
    }
.swiper-pagination-bullet-active{
width: 45px;
    background: #FFF;
    opacity: 1;
    filter: alpha(opacity=100);
    }
</style>
 