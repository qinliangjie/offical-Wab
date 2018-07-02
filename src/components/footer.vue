<template>
		<div class="footer_wrap">
            <div class="footer">
                <div class="fl msg_list">
                    <div class="msg_item">
                        <p class="item_title">{{$t('m.footer.lm')}}</p>
                        <p class="item_">{{$t('m.footer.lo')}}</p>
                    </div>
                    <div class="msg_item">
                        <p class="item_title">{{$t('m.footer.fu')}}</p>
                        <p class="item_">{{$t('m.footer.wx')}}</p>
                    </div>
                    <div class="msg_item">
                        <p class="item_title">{{$t('m.footer.cu')}}</p>
                        <p class="item_">{{$t('m.footer.cs')}}</p>
                        <p class="item_">{{$t('m.footer.pa')}}</p>
                    </div>
                    <div class="msg_item">
                        <p class="item_title">{{$t('m.footer.li')}}</p>
                        <p class="item_">{{$t('m.footer.sa')}}</p>
                        <p class="item_">{{$t('m.footer.pp')}}</p>
                        <p class="item_">{{$t('m.footer.ip')}}</p>
                    </div>
                    <p class="footer_p">{{footer.text}}</p>
                    <div class="clear"></div>
                </div>        
                <img src="../../static/img/footer.png" alt="" class="footerImg logoIc" />
                
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
        height: 280px;
        background-color: #efefef
    }
    .footer{
        width: 1200px;
        margin: 0 auto;
        height: 181px;
        text-align: center;
        background-color: #efefef
    }
    .footer .msg_list{
        width:630px;
        margin-left: 200px;
        text-align: left
    }
    .footer .msg_list .msg_item{
        width: 25%;
        line-height: 32px;
        float: left;
    }
    .footer .msg_list .msg_item .item_title{
        font-size: 20px;
        color: #333;
        margin-top: 60px
    }
    .footer .msg_list .msg_item .item_{
        font-size: 14px;
        color: #747B81;
        cursor: pointer;
    }
    .footer .logoIc{
        margin-top: 60px
    }
    .footer .footer_p{
        font-size: 12px;
        color: #999;
        margin-top: 40px;
        float: left;
    }
</style>