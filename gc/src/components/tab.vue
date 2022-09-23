<template>
    <div class="tab-container" :style="{height:screenHeight+'px',width:screenWidth+'px'}">
      <img src="https://img2.baidu.com/it/u=36978389,430586978&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663520400&t=5beb22609a5234227bb86ee7da6f94cb" class="touxiang"/>
        <div class="tab">
          <div class="tab-left">
            <tabs></tabs>
          </div>
          <div class="luyouqu">
            <router-view v-slot="{ Component }">
              <keep-alive>
                 <component :is="Component" />
              </keep-alive>
            </router-view>      
          </div>
        </div>

    </div>
  
</template>

<script>
import bus from '../util/bus.js'
import tabs from "./tab_left.vue";
export default {
    components:{
        tabs
    },
    data() {
      return {
        screenWidth:'',
        screenHeight:'',
      };
    },
    mounted() {
      this.screenWidth = document.body.clientWidth;
      this.screenHeight = document.body.clientHeight;
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
          this.screenHeight = document.body.clientHeight;
        })();
      };
    },
    watch:{
      
    },

}
</script>

<style lang="less" scoped>
p{
    margin: 0;
}
.tab-container{
    position: relative;
    display: flex;
    justify-content: center;
    // overflow: hidden;
}
.tab{
  position: relative;
  width: 95%;
  height: 100%;
  overflow: hidden;
}
.touxiang{
  position:fixed;
  bottom: 15px;
  left: 40px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  box-sizing: border-box;
}
.tab-left{
    position: absolute;
    top: 10px;
    left: 10px;
    height: 330px;
    width: 50px;
    box-sizing: border-box;
}
.luyouqu{
    position: absolute;
    display: flex;
    left: 60px;
    top: 10px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

</style>