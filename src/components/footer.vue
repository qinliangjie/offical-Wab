<template>
		<div class="footer_wrap">
            <div class="footer">
                <img src="../../static/images/logo.png" alt="" class="footerImg logoIc" />
                <img src="../../static/images/morefun.png" alt="" class="footerImg logoMf" />
                <p>{{footer.text}}</p>
            </div>
            
        </div>
        
</template>
<script>
export default {
  data () {
    return{
        footer:{
           text:'©MoreFun Technology Limited . Trademarks belong to their respective owners. All rights reserved'
        }
    }
  },
  mounted:function(){
    
  },
  methods:{

  }
}
</script>
<style scoped>
    .footer_wrap{
        width: 100%;
        height: 181px;
        background-color: #333
    }
    .footer{
        width: 1200px;
        margin: 0 auto;
        padding:33px 0;
        height: 181px;
        text-align: center;
        background-color: #333
    }
    .footer .logoMf{
        width: 122px;
        height:28px;
        margin-left: 24px
    }
    .footer p{
        margin-top: 24px;
        color: white
    }
</style>