<template>
  <div id="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <!-- 导航栏 -->
        <el-aside width="auto">
            <el-menu background-color="#545c64"
              text-color="#fff"
              active-text-color="#999999" 
              default-active="1" 
              class="el-menu-vertical" 
              @open="handleOpen" 
              @close="handleClose" 
              :collapse="isCollapse" >
              <i class="el-icon-back" style="font-size:30px;margin:15px;color:#888888;" @click="isCollapseChange" v-if="!isCollapse"></i>
              <i class="el-icon-right" style="font-size:30px;margin:15px;color:#888888;" @click="isCollapseChange" v-if="isCollapse"></i>
                <el-menu-item index="1"  @click="tohome">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </el-menu-item>

                <el-menu-item index="2" @click="toactivemessage">
                  <i class="el-icon-menu"></i>
                  <span slot="title">动态消息</span>
                </el-menu-item>
                
            </el-menu>
        </el-aside>
        <!-- 页内容 -->
        <el-main>
          
          
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
      isCollapse:false
    }
  },
  methods: {
    tohome(){
      this.$router.push({
        path:'/',
      })
    },
    toactivemessage(){
      this.$router.push({
        path:'/activemessage',
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    isCollapseChange(){
      if(this.isCollapse){
        this.isCollapse=false;
      }
      else{
        this.isCollapse=true;
      }
    }
  }
}
</script>

<style>
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 0px;
  }
  body{
    padding:0; 
    margin:0;
  }
  .el-header {
    background-color: #363636;
    color: #333;
    
    line-height: 60px;
  }
    .el-main {
    box-shadow: 2px 2px 10px #888888;
    margin-top:10px;
    background-color: #E9EEF3;
    color: #333;
    height: 1000px;
  }
  
  .el-aside {
    box-shadow: 2px 2px 10px #888888;
    margin-top:10px;
    margin-right: 10px; 
    overflow-x: hidden;
    background-color: #545c64;
    color: #333;
    
    
  }

</style>
