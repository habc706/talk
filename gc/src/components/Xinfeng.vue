<template>
    <div class="xinfeng-container">
      <div class="left">
        <div class="title">
          <p>私信</p>
        </div>
        <div class="content">
          <Chat :ids="index" :data="it" v-for="(it,index) in data" :key="it"></Chat>
        </div>
      </div>
      <div class="right">
        <div class="tips" v-show="!ischat">
          <p style="font-size: 20px;font-weight: 600;margin-bottom: 10px;">私信</p>
          <p>在这里可以和其他用户展开私密对话</p>
        </div>
        <Chat_content v-show="ischat"></Chat_content>
      </div>
    </div>
</template>
  
<script>
import bus from '../util/bus.js'
import Chat_content from './si_xin/chat_content.vue'
import Chat from './si_xin/chat.vue'
export default {
  components:{
    Chat_content,
    Chat
  },
  data() {
      return {
        ischat:false,
        data:[
          {pic:'https://img0.baidu.com/it/u=1015111727,1469931686&fm=253&fmt=auto&app=120&f=JPEG?w=400&h=400',name:'小姐姐1号',content:'小哥哥在吗？',time:'下午5:36',sum:1},
          {pic:'https://img2.baidu.com/it/u=3517140624,2794543687&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',name:'小姐姐2号',content:'小哥哥在吗？',time:'下午5:37',sum:1},
          {pic:'https://img0.baidu.com/it/u=3199886319,1680108383&fm=253&fmt=auto&app=138&f=JPEG?w=525&h=500',name:'小姐姐3号',content:'小哥哥在吗？',time:'下午5:38',sum:1},
          {pic:'https://img0.baidu.com/it/u=3563930880,3376982041&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',name:'小姐姐4号',content:'小哥哥在吗？',time:'下午5:39',sum:1},
        ]
      };
    },
    mounted() {
      
    },
    created(){
      bus.emit('setCurrentIndex_to_tab_left',2)
      bus.on('set_ischat_to_Xinfeng',(e)=>{
        this.ischat=e
      })
    },
    activated(){
      bus.emit('setCurrentIndex_to_tab_left',2) 
    },
  
}
</script>
  
<style lang="less" scoped>
// 左边区域start
.left{
  position: absolute;
  left: 0px;
  width: 314px;
  height: 100%;
  box-sizing: border-box;
  border: 0.5px solid rgba(175, 175, 175, 0.416);
  border-top: 0px;
  border-bottom: 0px;
  overflow: hidden;
}
.title{
  position: absolute;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 0.5px solid rgba(175, 175, 175, 0.416); 
}
.title p{
  margin-left: 20px;
  font-size: 17px;
  font-weight: 600;
}
.content{
  position: absolute;
  top: 0px;
  padding-top: 40px;
  width: 100%;
  height: 100%;
  overflow: auto;
}
// 左边区域end
// 右边区域start
.right{
  position: absolute;
  left: 314px;
  width: 640px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tips{
  width: 300px;
  height: 200px;
  position: relative;
}
// 右边区域end
.xinfeng-container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
p{
  margin: 0px;
}
.xinfeng-container::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
}//隐藏滚动条
</style>