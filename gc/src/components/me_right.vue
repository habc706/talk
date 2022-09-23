<template>
    <div class="user-container">
        <!-- 搜索 -->
        <div class="sousuo">
            <input type="text" placeholder="搜索...">
            <i class="iconfont icon-31sousuo icon1"></i>
        </div>

        <!-- 频道 -->
        <div class="pindao">
           <New></New>
        </div>

        <!-- 关于 -->
        <div class="guanyu">
            <p class="p1">关于本站</p>
            <text class="text" selectable="false" space="false" decode="false">
                {{text}}
            </text>
        </div>
    </div>
  
</template>

<script>
import New from './new_tiezi.vue'
import People_sum from './people_sum.vue'
export default {
    props:{
        // ids:{
        //     type:String,
        //     required:true,
        // }
    },
    components:{
      New,
      People_sum,   
    },
    data() {
      return {
        text:'黑客说是一个为开发者定制的交流平台，我们希望通过技术驱动优质交流，高度定制的编辑器和一对一的实时聊天会给你全新的交流体验。',
       
      };
    },
    mounted() {
      
    },

}
</script>

<style lang="less" scoped>
p{
    margin: 0px;
}
.user-container{
    position: relative;
    width: 100%;
    min-height: 100%;
    overflow-y: auto;
}
.user-container::-webkit-scrollbar{
    width: 0 !important;
    height: 0;
}//隐藏滚动条
.sousuo{
    position: absolute;
    top: 3px;
    left: 5%;
    width: 90%;
    height: 30px;
}
.sousuo input{
    width: 100%;
    height: 100%;
    outline: none;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
    background-color: rgba(198, 197, 197, 0.37);
    text-indent: 3em;
}
.icon1{
    position: absolute;
    top: 5px;
    left: 12px;
    font-size: 20px;
}
.pindao{
    position: absolute;
    top: 50px;
    width: 100%;
    height: 330px;
}

.guanyu{
    position: absolute;
    top: 395px;
    width: 100%;
    height: 125px;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid rgba(220, 219, 219, 0.744);
    border-radius: 10px;
    user-select: none;
}
.p1{
    position: absolute;
    top: 12px;
    left: 12px;
}
.text{
    position: absolute;
    top: 40px;
    left: 0px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 8px;
    font-size: 14px;
    color: rgb(100, 99, 99);
    text-align: left;
}

</style>