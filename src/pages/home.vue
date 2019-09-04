<template>
  <div id="home">
    <el-container>
      <!-- 头部 -->
      <el-header id="head">
        <el-button type="primary" round style="float:right;margin:10px;" @click="tologin" v-if="islogin">登录</el-button>
        <div @click="drawerchange">
          <el-avatar  class="headimg" style="float:right;margin:10px;" v-if="!islogin">章</el-avatar>
        </div>
        <el-drawer
          class="drawer"
          title="用户中心"
          :visible.sync="drawer"
          :direction="direction"
          style="z-index:9999!important;"
          >
          <div style="margin-left:15px;">
            <el-button type="primary" round >修改个人信息</el-button>
            <el-button type="success" round @click="towritemail">发送消息</el-button>
            <el-button type="warning" round @click="signout">注销</el-button>
          </div>
          <div id="rivmsg" v-for="item in 10" :key="item">
            <el-row>
             
              <el-col :span="24"><div > <div id="rivmsgfrom">螺旋爆炸<i class="el-icon-close" id="closeicon"></i></div>
              <el-divider></el-divider>
            <div id="rivmsgwhat">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div></div></el-col>
            </el-row>
           
          </div>

          

        </el-drawer>

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
          <transition :name="transitionName">
            <router-view/>
          </transition>
                  
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
      islogin:false,
      drawer: false,
      isCollapse:true,
      transitionName:'fold-left',
      heiforscorll:0,
    }
  },
  watch:{'$route' (to,from) {
      const routerDeep = ['/','/activemessage','/eduachievements','/sciachievements','/teachinfo','/sciproject','/admissioninfo','/intercooperation','/laboratoryintro','/teacherteam','/studentinfo','/contactus']
      const toDepth = routerDeep.indexOf(to.path);
      const fromDepth = routerDeep.indexOf(from.path);
      this.transitionName = toDepth > fromDepth ? 'fold-left' : 'fold-right';
      window.scrollTo(0,0);
      
    }},
  mounted: function () {
        
        window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  methods: {
    drawerchange(){
      console.log(1);
      this.drawer=true;
    },
    toeduachievements(){
      this.$router.push({
        path:'/eduachievements',
      });
      
    },
    tosciachievements(){
      this.$router.push({
        path:'/sciachievements',
      })
    },
    signout(){
      this.islogin=true;
      this.tohome();
      this.drawer=false;
    },
    toteachinfo(){
      this.$router.push({
        path:'/teachinfo',
      })
    },
    towritemail(){
      this.$router.push({
        path:'/writemail',
      })
      this.drawer=false;
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
    tologin(){

      this.$router.push({
        path:'/login',
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
#closeicon{
  float: right;
  margin-right:10px;
  line-height: 50px;
}
#rivmsgfrom{
  font-size: 30px;
  line-height: 50px; 
  margin-top:10px;
  height:60px; 
  width:100%;
}
#rivmsgwhat{
  font-size: 20px;
  width:100%;
  line-height: 30px;
  word-break:break-all;
}
#rivmsg{
  border-radius: 40px;
  margin-top:20px;
  margin-bottom: 20px;
  margin-left:2.5%;
  background: #c0c0c0;
  box-shadow: 2px 2px 10px #555555;
  padding:10px;
  width: 95%;
}
.el-drawer__header{
  font-size: 30px!important;
}

.el-drawer{
  background: #ffffff;
  overflow: auto;
  opacity: 0.818;
  height: 100%!important;
}

  .drawer::-webkit-scrollbar {
      display: none;
    }
  .el-drawer::-webkit-scrollbar {
      display: none;
    }
  .drawer{
    height: 100% !important;
  }
.el-drawer__body{
  height: 500px !important;
}
.headimg{
  background: #309bff;
  transition: 1s;
  cursor: pointer;
}
.headimg:active{
  background: #046cf5;
}
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
    z-index: 99;
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
    height: 100%;
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



/* 动画 */
.fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .5s;
  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .5s;
  }
  @keyframes fold-left-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: hidden; */
    }
  }

  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .5s;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .5s;
  }
  @keyframes fold-right-in{
    0% {
      width: 100%;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-right-out  {
    0% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: hidden; */
    }
  }
</style>
