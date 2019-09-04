<template>
  <div id="readmessage1">
     <el-row style="width:100%;">
        <el-col :span="12"><div style="text-align:left;font-size:20px;font-weight:500;">发送消息</div></el-col>
        <el-col :span="12"><div style="text-align:right;font-size:15px;font-weight:100;color:#888888">通知</div></el-col>
    </el-row>
    <el-divider></el-divider>
    <h1 class="titleformessage1">请选择要发送的对象<el-input v-model="input" placeholder="输入规则：username;username;username;"></el-input></h1>
    <el-divider></el-divider>
    <h1 class="titleformessage1">请编写内容</h1>
    <el-input
    type="textarea"
    id="mail"
    placeholder="请输入内容"
    autosize="{ minRows: 2, maxRows: 8 }"
    v-model="textarea">
    </el-input>
    <el-button class="loginbutton1">发&nbsp&nbsp&nbsp送</el-button>
  </div>
</template>


<script>

export default {
  name: 'readmessage',
  data(){
      return{
          textarea:"",
          input:"",
          messagess:"我的填啊实打实的啊实打实的打实打算的我的填啊实打实的打实打算的我的填啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实我的打算啊实打实的我的填啊实啊实打实的啊实打实的打实打算啊实打实的我的填啊实啊实打实的啊实打实的打实打算啊实打实的",
      }
  }
}
</script>

<style>
.loginbutton1{
  height:60px;margin-top:60px;width:80%;color:#FFFFFF;font-size:20px;background: linear-gradient(#7caff1, #217ae0);
}

#mail{
    width: 80%;
    margin-left: 10%;
    
    line-height: 30px;
    font-family:"Calibri Light";
}
.titleformessage1{
   font-size: 30px;
    font-weight: 100;
    line-height: 70px;
    width: 80%;
    margin-left: 10%;
}
#readmessage1{
  position: absolute;
  width: 50%;
  margin-left: 25%;
}
</style>
