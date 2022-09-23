<template>
    <div class="user-container">
        <!-- 搜索 -->
        <div class="sousuo">
            <input type="text" placeholder="搜索...">
            <i class="iconfont icon-31sousuo icon1"></i>
        </div>

        <!-- 个人 -->
        <div class="geren">
            <img src="https://img2.baidu.com/it/u=36978389,430586978&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663520400&t=5beb22609a5234227bb86ee7da6f94cb" class="userpic">
            <p class="username">总之就很酸</p>
            <p class="lv">Lv1</p>
            <!-- 签到 -->
            <div class="qiandao">
                <p>每日签到</p>
            </div>
            <!-- 注意 -->
            <i class="iconfont icon-zhuyi icon2"></i>
            <!-- 积分 -->
            <div class="jifen">
                <p>我的积分 <span>100</span></p>
            </div>
        </div>

        <!-- 频道 -->
        <div class="pindao">
            <Pindao></Pindao>
        </div>

        <!-- 总人数 -->
        <div class="people_sum">
            <People_sum :ids="ids"></People_sum>
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
import Pindao from './pindao.vue'
import People_sum from './people_sum'
export default {
    props:{
        ids:{
            type:String,
            required:true,
        }
    },
    components:{
      Pindao,
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
.geren{
  position: absolute;
  top: 40px;
  left: 0px;
  width: 100%;
  height: 105px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid rgba(220, 219, 219, 0.744);
  border-radius: 10px;
}
.userpic{
    position: absolute;
    top: 10px;
    left: 12px;
    width: 45px;
    height: 45px;
    box-sizing: border-box;
    border: 1px solid rgba(220, 219, 219, 0);
    border-radius: 10px;
}
.username{
    position: absolute;
    top: 12px;
    left: 65px;
    font-size: 14px;
    color: rgb(15 23 42);
    letter-spacing: 0.5px;
}
.lv{
    position: absolute;
    top: 35px;
    left: 65px;
    font-size: 16px;
    font-weight: 600;
    color: rgb(234 179 8);
}
.qiandao{
    position: absolute;
    top: 10px;
    right: 12px;
    width: 70px;
    height: 22px;
    background-color: rgb(234 179 8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid rgba(220, 219, 219, 0);
    border-radius: 8px;
}
.qiandao p{
    color: #fff;
    font-size: 13px;
}
.icon2{
    position: absolute;
    bottom: 5px;
    left: 12px;
    font-size: 22px;
    color: rgb(78, 77, 77);
    cursor: pointer;
}
.jifen{
    position: absolute;
    right: 12px;
    bottom: 7px;
}
.jifen p{
    font-size: 13px;
    color: rgb(120, 118, 118);
}
.jifen p span{
    font-size: 20px;
    font-weight: 600;
    color: rgb(234 179 8);
}
.pindao{
    position: absolute;
    top: 155px;
    width: 100%;
    height: 330px;
}
.people_sum{
    position: absolute;
    top: 496px;
    width: 100%;
    height: 380px;
}
.guanyu{
    position: absolute;
    top: 886px;
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