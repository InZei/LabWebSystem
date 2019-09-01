<template>
  <div id="readmessage">
     <el-row style="width:100%;">
        <el-col :span="12"><div style="text-align:left;font-size:20px;font-weight:500;">动态消息</div></el-col>
        <el-col :span="12"><div style="text-align:right;font-size:15px;font-weight:100;color:#888888">实验室新闻&nbsp&nbsp&nbsp&nbsp&nbsp通知&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp公告</div></el-col>
    </el-row>
    <el-divider></el-divider>
    <h1 class="titleformessage">我的填啊实啊实打实的啊实打实的打实打算啊实打实的</h1>
    <el-divider></el-divider>
    <p style="color:#000000;line-height: 30px;text-align:left;">{{messagess}}</p>
  </div>
</template>


<script>

export default {
  name: 'readmessage',
  data(){
      return{
          messagess:"我的填啊实打实的啊实打实的打实打算的我的填啊实打实的打实打算的我的填啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实打实的打实打算的我的填啊实我的打算啊实我的打算啊实打实的我的填啊实啊实打实的啊实打实的打实打算啊实打实的我的填啊实啊实打实的啊实打实的打实打算啊实打实的",
      }
  }
}
</script>

<style>
.titleformessage{
   font-size: 50px;
    font-weight: 100;
    line-height: 70px;
    width: 80%;
    margin-left: 10%;
}
#readmessage{
  position: absolute;
  width: 50%;
  margin-left: 25%;
}
</style>
