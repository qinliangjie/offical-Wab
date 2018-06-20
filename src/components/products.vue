<template>
  <div id="products" class="index_box">
    <div class="top_wrap">
           <div class="topImg">
             <img src="../../static/images/topimg.png" alt="">
           </div>
           <div class="topmark"></div>
    </div>
    <div class="navTitle">
      <p>{{navTitle}} <span>{{games}}</span></p>
    </div>
    <div class="content">
        <div class="item" v-for="(item,index) in gameDate">
          <img class="itemImg" :src="item.img" alt="" :class="{' fl':index%2 != 1}" />
          <div class="itemDom " :class="{' fr':index%2 != 1}">
            <p class="itemTitle">{{item.title}}</p>
            <p class="itemContent">{{item.content}}</p>
            <a class="itemA" :href="item.hrefs">{{gotoLineL}}</a>
          </div>
          <div class="clear"></div>
        </div>
        <BackTop ></BackTop><!-- 返回顶部 -->
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      navTitle:'产品业务',
      gotoLineL:'进入官网',
      games:'games',
      gameDate:[
        {
          id:'1',
          title:'《塔防三国志》',
          content:'由《三国演义》改编，风靡亚洲，荣获千万三国迷一致好评的tower defense巨作现已正式登台！ 穿越千年，您将化身成为汉献帝，不仅可以招揽名士，统将御敌，夜深人静时，还有后宫女将与您嬉戏玩乐唷~ 速来一睹为快吧！',
          img:'../../static/images/game1.png',
          hrefs:'https://www.baidu.com'
        },{
          id:'2',
          title:'《娱乐三国志》',
          content:'由《三国演义》改编，风靡亚洲，荣获千万三国迷一致好评的tower defense巨作现已正式登台！ 穿越千年，您将化身成为汉献帝，不仅可以招揽名士，统将御敌，夜深人静时，还有后宫女将与您嬉戏玩乐唷~ 速来一睹为快吧！',
          img:'../../static/images/game1.png',
          hrefs:'https://www.baidu.com'
        },{
          id:'3',
          title:'《moba三国志》',
          content:'由《三国演义》改编，风靡亚洲，荣获千万三国迷一致好评的tower defense巨作现已正式登台！ 穿越千年，您将化身成为汉献帝，不仅可以招揽名士，统将御敌，夜深人静时，还有后宫女将与您嬉戏玩乐唷~ 速来一睹为快吧！',
          img:'../../static/images/game1.png',
          hrefs:'https://www.baidu.com'
        },{
          id:'3',
          title:'《嘻哈三国志》',
          content:'由《三国演义》改编，风靡亚洲，荣获千万三国迷一致好评的tower defense巨作现已正式登台！ 穿越千年，您将化身成为汉献帝，不仅可以招揽名士，统将御敌，夜深人静时，还有后宫女将与您嬉戏玩乐唷~ 速来一睹为快吧！',
          img:'../../static/images/game1.png',
          hrefs:'https://www.baidu.com'
        }
      ]
    }
  },
  mounted:function(){ 
  },
  updated:function(){

  },
  methods:{ 
  }
}
</script>
<style scoped>
#products .content{
  position: relative;
  width: 1200px;
  margin:0 auto;
}
#products .navTitle{
  width: 100%;
  height: 90px;
  border-bottom:1px solid #F08200;
}
#products .navTitle p{
  width: 1200px;
  line-height: 120px;
  font-size: 24px;
  color: #f08200;
  margin:0 auto;
  font-weight: bold;
  cursor: default;
}
#products .navTitle p span{
  font-size: 16px;
  color: #999;
  font-weight: normal;
}   
.content .item{
  width: 100%;
  margin-top: 39px;
  margin-bottom: 55px;
}
.content .item .itemImg{
  width: 460px;
  height: 271px;
  float: right;
}
.content .item .fl{
  margin-right: 82px;
  float: left !important
}
.content .item .fr{
  float: right !important
}
.content .item .itemDom{
  width: 657px;
  height: 271px;
  float: left
}
.content .item .itemDom .itemTitle{
  font-size: 22px;
  color: #333;
  margin:20px 0;
}
.content .item .itemDom .itemContent{
  overflow: hidden;
  max-height: 120px;
  min-height: 100px;
  font-size: 16px;
  color: #333;
  text-indent: 2em
}
.content .item .itemDom .itemA{
  display: block;
  width: 111px;
  height: 33px;
  font-size: 16px;
  color: white;
  line-height: 33px;
  text-align: center;
  background-color: #F08200;
  margin-top: 37px;
  cursor: pointer;
  text-decoration: none;
}
.fl .itemA{
  float: left;
}
.fr .itemA{
  float: right;
}
</style>
