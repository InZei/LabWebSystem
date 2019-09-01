<template>
  <div id="home">
    <el-container>
      <!-- 头部 -->
      <el-header id="head">
        <el-button type="primary" round style="float:right;margin:10px;">登录</el-button>
      </el-header>


      <el-container>
        <!-- 导航栏 -->
        <el-aside width="auto" ref="aside" id="aside">
            <el-menu background-color="#44494e"
              text-color="#fff"
              active-text-color="#999999" 
              default-active="1" 
              class="el-menu-vertical" 
              @open="handleOpen" 
              @close="handleClose" 
              :collapse="isCollapse" style="border-right:0px;">
              <i class="el-icon-back" style="font-size:30px;margin:15px;color:#888888;cursor: pointer;" @click="isCollapseChange" v-if="!isCollapse"></i>
              <i class="el-icon-right" style="font-size:30px;margin:15px;color:#888888;cursor: pointer;" @click="isCollapseChange" v-if="isCollapse"></i>
                <el-menu-item index="1"  @click="tohome" style="border:none">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">首页</span>
                </el-menu-item>

                <el-menu-item index="2" @click="toactivemessage">
                  <i class="el-icon-menu"></i>
                  <span slot="title">动态消息</span>
                </el-menu-item>

                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-s-order"></i>
                    <span>研究成果</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1" style="font-size:8px" @click="toeduachievements">教学成果</el-menu-item>
                    <el-menu-item index="3-2" style="font-size:8px" @click="tosciachievements">科研成果</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-cpu"></i>
                    <span>教学科研</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1" style="font-size:8px" @click="toteachinfo">授课信息</el-menu-item>
                    <el-menu-item index="4-2" style="font-size:8px" @click="tosciproject">科研项目</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-menu-item index="5" @click="toadmissioninfo">
                  <i class="el-icon-s-data"></i>
                  <span slot="title">招生消息</span>
                </el-menu-item>

                <el-menu-item index="6" @click="tointercooperation">
                  <i class="el-icon-s-check"></i>
                  <span slot="title">国际合作</span>
                </el-menu-item>

                <el-submenu index="7">
                  <template slot="title">
                    <i class="el-icon-s-promotion"></i>
                    <span>关于我们</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="7-1" style="font-size:8px"  @click="tolaboratoryintro">实验室简介</el-menu-item>
                    <el-menu-item index="7-2" style="font-size:8px" @click="toteacherteam">师资队伍</el-menu-item>
                    <el-menu-item index="7-3" style="font-size:8px" @click="tostudentinfo" >学生信息</el-menu-item>
                    <el-menu-item index="7-4" style="font-size:8px" @click="tocontactus">联系我们</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
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
      isCollapse:true,
      heiforscorll:0,
    }
  },
  mounted: function () {
        window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  methods: {
    toeduachievements(){
      this.$router.push({
        path:'/eduachievements',
      })
    },
    tosciachievements(){
      this.$router.push({
        path:'/sciachievements',
      })
    },
    toteachinfo(){
      this.$router.push({
        path:'/teachinfo',
      })
    },
    tosciproject(){
      this.$router.push({
        path:'/sciproject',
      })
    },
    toadmissioninfo(){
      this.$router.push({
        path:'/admissioninfo',
      })
    },
    tointercooperation(){
      this.$router.push({
        path:'/intercooperation',
      })
    },
    tocontactus(){
      this.$router.push({
        path:'/contactus',
      })
    },
    tostudentinfo(){
      this.$router.push({
        path:'studentinfo',
      })
    },
    toteacherteam(){
      this.$router.push({
        path:'teacherteam',
      })
    },
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
    tolaboratoryintro(){
      this.$router.push({
        path:'/laboratoryintro',
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
    },
    handleScroll: function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
                      document.body.scrollTop
            var scroll = scrollTop - this.heiforscorll;
            this.heiforscorll = scrollTop;
            if(this.heiforscorll==0){
                document.getElementById("head").style.opacity="1";
            }
            else{
                document.getElementById("head").style.opacity="0.7";
            }
            if(scroll<0){
                // this.$refs.aside.left='-200px';
                document.getElementById("aside").style.left='10px';
            }else{
                // this.$refs.aside.left='10px';
                document.getElementById("aside").style.left='-220px';
            }
    }
  },
  destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
  }
}
</script>

<style>
  span{
    font-size: 10px;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 0px;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  html,
  body{
    font-weight:100;
    font-family:"Calibri Light";
    padding:0; 
    margin:0;
    height: 100%;
    
    background: #ffffff;
  }
  .el-header {
    position: fixed;
    left:0px;
    top:0px;
    z-index: 9999;
    background-color: #000000;
    color: #333;
    box-shadow: 2px 2px 10px #000000;
    line-height: 60px;
    width: 100%;
    transition: 0.5s;
  }
    .el-main {
    width: 100%;
    color: #333;
    margin:0;
    padding:0;
    text-align: center;
    padding-top: 80px;
    height: 5000px;
  }
  
  .el-aside {
    position: fixed;
    left: 10px;
    top: 65px;
    opacity:0.618;
    border-radius: 30px;
    box-shadow: 2px 2px 10px #000000;
    margin:5px;
    margin-top: 10px;
    margin-right: 10px; 
    overflow-x: hidden;
    background-color: #44494e;
    color: #333;
    transition: 0.3s;
    z-index: 999999;
  }

</style>
