<template>
  <div id="home">
    <el-container>
      <!-- 头部 -->
      <el-header id="head">
        <el-button type="primary" round style="float:right;margin:10px;" @click="tohome">返回</el-button>
      </el-header>


      <el-container>
        <!-- 页内容 -->
        <el-main style="text-align:left;margin-top:80px;">
          <el-row>
            <el-col :offset="6" :span="6">
              <p style="font-size:36px;font-weight:bolder">请登录。</p>
              
              <el-input class="el-input1" style="margin-top:50px;" v-model="account_input" placeholder="请输入账号"></el-input>
              <el-input class="el-input1" style="margin-top:40px;" placeholder="请输入密码" v-model="password_input" show-password></el-input>
              
              <p style="font-size:20px;">*初始密码值为123456</p>

              <el-button class="loginbutton" @click="test">登&nbsp&nbsp&nbsp录</el-button>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-container>
        <el-footer id="login_footer">
          <el-divider></el-divider>
          <p style="text-align:center;font-size:18px;font-weight:100">@copyright</p>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vueaxios,axios)
export default {
  name: 'home',
    data(){
      return{
      account_input:'',
      password_input:''
      }
    },
    methods: {
    test(){
      Vue.axios.get('/api/user/test').then(
        function(res){
          console.log(res);
        });
    },
    tohome(){

      this.$router.push({
        path:'/',
      })
    },
    }
    }
</script>

<style>
.loginbutton{
  height:60px;margin-top:60px;width:100%;color:#FFFFFF;font-size:20px;background: linear-gradient(#7caff1, #217ae0);
}

.el-input1 input{
  border:none !important;
  background-color: rgb(255, 255, 255)!important;
  font-weight: 100;
  height: 60px !important;
  border-radius: 5px !important;
}

.el-input1{
  border-radius: 5px !important;
  box-shadow: 2px 2px 10px #000000;
  height: 60px;
  line-height: 60px;
}

  .el-header {
    position: fixed;
    left:0px;
    top:0px;
    z-index: 999;
    background-color: #000000;
    box-shadow: 2px 2px 10px #000000;
    line-height: 60px;
    width: 100%;
    transition: 0.5s;
  }
  
</style>