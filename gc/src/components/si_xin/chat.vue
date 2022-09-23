<template>
    <div :class="['chat-container',ischoosed||isenter?'hui':'']" @mouseenter="this.isenter=true" @mouseleave="this.isenter=false" @click="tochat">
      <img :src="data.pic" class="userpic">
      <div class="right">
        <p class="name">{{data.name}}</p>
        <p class="neirong"><span :class="[isread?'none':'']">[{{data.sum}}条]</span>{{data.content}}</p>
        <p class="time">{{data.time}}</p>
      </div>
      
    </div>
  </template>
  
  <script>
  import bus from '../../util/bus.js'
  export default {
    props:{
        ids:{
            type:String,
            required:true,
        },
        data:{
          required:true,
        }
    },

    data() {
      return {
        ischoosed:false,
        isenter:false,
        isread:false,
      };
    },
    mounted() {
      
    },
    methods:{
      tochat(){
        this.ischoosed=true
        this.isread=true
        bus.emit('set_ischoosed',[false,this.ids])//改变灰色背景
        bus.emit('set_ischat_to_Xinfeng',true)//修改ischat，让聊天页面显示出来
        bus.emit('gengxin_chatContent',[this.data.name,this.data.pic])//初始化聊天页面
      },
    },
    created(){
      bus.on('set_ischoosed',(e)=>{
        if(this.ids==e[1]){
          
        }else{
          this.ischoosed=e[0]
        }
      }) 
    },

  
  }
  </script>
  
  <style lang="less" scoped>
//内容区start
.name{
  position: absolute;
  font-size: 14px;
  top: 6px;
  left: 10px;
  letter-spacing: 00.5px;
  max-width: 150px;
  color: black;
  overflow: hidden;
  height: 17px;
}
.neirong{
  position: absolute;
  bottom: 5px;
  font-size: 12px;
  left: 10px;
  letter-spacing: 00.5px;
  overflow: hidden;
  height: 17px;
  max-width: 200px;
  color: rgb(138, 138, 137);
}
.time{
  position: absolute;
  right: 15px;
  top: 6px;
  color: rgb(138, 138, 137);
  display: flex;
  font-size: 12px;
  user-select: none;
}
.none{
  display: none;
}
//内容区end
  .chat-container{
  position: relative;
  width: 100%;
  height: 50px;
  user-select: none;
  }
  .hui{
    background-color: rgba(213, 211, 211, 0.316);
  }  
  p{
  margin: 0px;
  }
  .chat-container::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
  }//隐藏滚动条
  .userpic{
    position: absolute;
    left: 10px;
    top: 5px;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
  }
  .right{
    position: absolute;
    left: 54px;
    width: 260px;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 0.5px solid rgba(175, 175, 175, 0.416);
  }
  </style>