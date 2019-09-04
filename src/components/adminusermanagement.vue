<template>
  <div id="adminusermanagement">
      <div id="readmessage">
      <el-row style="width:60%;margin-left:20%;">
          <el-col :span="12"><div style="text-align:left;font-size:20px;font-weight:1000;">管理员</div></el-col>
          <el-col :span="12"><div style="text-align:right;font-size:15px;font-weight:100;color:#FFFFFF">电话&nbsp&nbsp&nbsp&nbsp&nbsp邮箱&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp微信</div></el-col>
          &nbsp;
          <el-divider></el-divider>
      </el-row>
      
      <h1 class="titleformessage">管理员用户界面</h1>
      <p style="line-height: 30px;">AWSLAWSLAWSLAWSLAWSLAWSLAWSLAWAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSLAWSL</p>
    </div>
    <h1 class="titleformessage">用户信息管理</h1>
    <div class="con">
      <el-divider></el-divider>
    </div>

    <el-row>
      <el-col :offset="4" :span="8">
        <img src="../../static/asserts/pic/110.jpg" class="link1" style="margin-top:60px;opacity:0.8;border-radius:50%;box-shadow: 0px 0px 10px #FFFFFF;" width="50%" @click="toadminadduser">
        <div style="width:100%;margin-top:40px;margin-bottom:60px;">
        <span class="link1" style="font-weight:100;font-size:30px;font-weight:bolder;color:#000;" @click="toadminadduser">添加新用户</span>
        </div>
        </el-col>
        <el-col :span="8">
        <img src="../../static/asserts/pic/110.jpg" class="link1" style="margin-top:60px;opacity:0.8;border-radius:50%;box-shadow: 0px 0px 10px #FFFFFF;" width="50%" @click="toadminqueryuser">
        <div style="width:100%;margin-top:40px;margin-bottom:60px;">
        <span class="link1" style="font-weight:100;font-size:30px;font-weight:bolder;color:#000;" @click="toadminqueryuser">查询用户</span>
        </div>
      </el-col>
    </el-row>

    <el-container>
        <el-footer>
          <el-divider></el-divider>
          <p style="text-align:center;font-size:18px;font-weight:100">@copyright</p>
        </el-footer>
      </el-container>
    </div>
</template>


<script>

export default {
  name: 'adminusermanagement',
    methods: {
    toadminadduser(){
      this.$router.push({
        path:'/adminadduser',
      });
      
    },
    toadminqueryuser(){
      this.$router.push({
        path:'/adminqueryuser',
      });
    },
    }
}
</script>

<style>
.el-input{
  
}
.con{
    width: 60%;
    margin-left:20%;
    margin-top: 20px;
}

.titleformessage{
   font-size: 50px;
    font-weight: 100;
    line-height: 70px;
    width: 80%;
    margin-left: 10%;
}

.link1:hover{
    cursor: pointer;
    font-weight: bolder;

}

#adminusermanagement{
  position: absolute;
  width: 100%;
}

#readmessage{
  background:40% url("../../static/asserts/pic/conus.png");
  width: 100%;
  color: aliceblue;
  height: 500px;
  padding-top:80px;
  margin-top: -80px;
}


</style>
