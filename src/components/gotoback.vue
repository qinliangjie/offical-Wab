<template>
<transition name='slide-fade'>
    <div class='page-component-up' v-show='isShow' @click='getTop'>
    </div>
</transition>
</template>
<script>
export default {
  name: 'BackTop',  // 这个是export出去的组件名，我定义为BackTop
  props: {
  },
  data () {
    return {
      isShow: false,
      target: ''
    }
  },
  methods: {
//  添加样式，鼠标hover上去，改变颜色
    addhoverClass (e) {
      if (e.type === 'mouseover') {
        this.$el.classList.add('hover')
      } else if (e.type === 'mouseout') {
        this.$el.classList.remove('hover')
      }
    },
    showIcon () {
  //  根据scrollTop的值来判断是否显示返回顶部的icon
      if (document.documentElement.scrollTop > 200) {
        this.isShow = true
        this.$el.addEventListener('mouseover', this.addhoverClass)
        this.$el.addEventListener('mouseout', this.addhoverClass)
      } else if (document.documentElement.scrollTop < 200) {
        this.isShow = false
      }
    },
    getTop () {
    	
// 点击icon之后自动返回顶部的函数
      let timer = setInterval(() => {
        let top = document.documentElement.scrollTop;
        let speed = Math.ceil(top / 5)
        document.documentElement.scrollTop = top - speed
        if (top === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  },
  mounted () {
    this.target = window;
    window.addEventListener('scroll', this.showIcon,true)
  },
  beforeDestroy () {
   //  组件销毁的时候，需要删除scroll的监听事件。
    this.target.removeEventListener('scroll', this.showIcon,true)
  }
}
</script>

<style scoped="">
  .slide-fade-enter-active {
     transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.3, 0.8, 1.0);
    opacity: 0;
  }
  .slide-fade-enter, .slide-fade-leave-to {
   transform: translateY(-20px);
    opacity: 0;
  }
  .page-component-up {
    position: fixed;
    left: 90%;
    bottom: 200px;
    width: 80px;
    height: 80px;
    cursor: pointer;
    opacity: .4;
    transition: .3s;
    text-align: center;
    z-index: 999;
    opacity: 1;
	  background: url("../../static/img/gotoback.png") no-repeat;
  }
  .hover {
    opacity: .8;
  }
</style>