<template>
		<div class="head_wrap">
            <div class="head">
                <div class="head_con">
                    <a href="javascript:;"><h1 class="logo"></h1></a>
                    <ul class="menu_list">
                        <router-link to="/" exact>
                            <li class=""><a href="javascript:;"><i class="c_line"></i>{{$t('m.header.home')}}
                            </a></li>
                        </router-link>
                        <router-link to="/company" >
                            <li><a href="javascript:;"><i class="s_line"></i><i class="c_line"></i>{{$t('m.header.company')}}</a></li>
                        </router-link>
                        <router-link to="/corporate" >
                            <li><a href="javascript:;"><i class="s_line"></i><i class="c_line"></i>{{$t('m.header.corporate')}}</a></li>
                        </router-link>
                        <router-link to="/products" >
                            <li><a href="javascript:;"><i class="s_line"></i><i class="c_line"></i>{{$t('m.header.products')}}</a></li>
                        </router-link>
                        <router-link to="/joinus" >
                            <li v-on:click="reload()"><a href="javascript:;"><i class="s_line"></i><i class="c_line"></i>{{$t('m.header.joinus')}}</a></li>
                        </router-link>
                        <li class="language_1">
                            <a href="javascript:;" class="simple" :class="langs == 'zh'? 'simple current': ''" @click="changeLang('zh')">简</a>
                            <a href="javascript:;" :class="langs == 'tc'? 'current': ''" @click="changeLang('tc')"><i class="s_line"></i>繁</a>
                            <a href="javascript:;" :class="langs == 'en'? 'current': ''" @click="changeLang('en')"><i class="s_line"></i>EN</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        
</template>

<script>
export default {
  data () {
  	return{
  		
        langs:'zh'
  	}
  },
  mounted:function(){
  	 
  },
  methods:{
    reload:function(){
        this.$router.go(0)
    },
    changeLang:function(e){
        this.langs = e;
        this.$i18n.locale = this.langs;
        this.$store.commit('newTitle',this.$i18n.locale)
    }
  }
}
</script>
<style >
.head_wrap {
    width: 100%;
    position: fixed;
    left: 0;
    z-index: 9999;
    height: 100px;
    background:rgba(0,0,0,.5);
}
.head_con {
    width: 1200px;
    margin: 0 auto;
    position: relative;
}
.head_con .logo {
    display: block;
    height: 70px;
    width: 105px;
    background: url(../../static/img/logo.png) no-repeat;
    text-indent: -9999px;
    overflow: hidden;
    position: absolute;
    left: 15px;
    top: 15px;
    font-size: 1em
}
.menu_list {
	display: block;
	width: auto;
	list-style: none;
    height: 100px;
    position: absolute;
    right: 0;
    top: 0;
}
.menu_list li {
	width: auto;
	display: block;
    float: left;
}
.menu_list li a {
	width: auto;
    display: block;
    float: left;
    height: 100px;
    padding: 0 30px;
    line-height: 100px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    position: relative;
    text-align: center;
    -webkit-transition: font-weight .3s;
    transition: font-weight .3s;
}
.menu_list a.active a .c_line, .menu_list li:hover a .c_line {
    display: block;
}
.menu_list li a .c_line {
    display: none;
    height: 4px;
    width: 80px;
    background: #F08200;
    overflow: hidden;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    top: 0;
    -webkit-transition: top .2s;
    transition: top .2s;
}
.menu_list li a .s_line {
    display: block;
    height: 13px;
    width: 1px;
    background: #FFF;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -6.5px;
    opacity: .3;
    filter: alpha(opacity=30);
}
.menu_list .language_1 a.current {
    opacity: 1;
    filter: alpha(opacity=100);
}
.menu_list .language_1 a:hover {
    font-weight: 400;
    opacity: 1;
    filter: alpha(opacity=100);
}
.menu_list .language_1 .simple {
    margin-left: 20px;
}
.menu_list .language_1 a {
    height: 20px;
    width: auto;
    font-size: 14px;
    line-height: 20px;
    margin-top: 40px;
    padding: 0 8px;
    opacity: .6;
    filter: alpha(opacity=60);
}

</style>