<template>
  <div id="contactus">
      <div id="readmessage">
      <el-row style="width:60%;margin-left:20%;">
          <el-col :span="12"><div style="text-align:left;font-size:20px;font-weight:1000;">联系我们</div></el-col>
          <el-col :span="12"><div style="text-align:right;font-size:15px;font-weight:100;color:#FFFFFF">电话&nbsp&nbsp&nbsp&nbsp&nbsp邮箱&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp微信</div></el-col>
          &nbsp;
          <el-divider></el-divider>
      </el-row>
      
      <h1 class="titleformessage">Contact Support</h1>
      <p style="line-height: 30px;">可以通过下面的各种方式联系实验室，对实验室进行了解，实验室将倾听您的问题和宝贵的建议。</p>
    </div>
    <h1 class="titleformessage">下面是我们的联系方式</h1>
    <div class="con">
      <el-divider></el-divider>
      <p style="font-size:30px;font-weight:500">电话</p>
      <p style="color:#2d82c7;font-size:20px;">1888-8888-888</p>
      <p style="font-size:30px;font-weight:500">邮箱</p>
      <p style="color:#2d82c7;font-size:20px;">1888-8888-888@qq.com</p>
      <p style="font-size:30px;font-weight:500">微信</p>
      <p style="color:#2d82c7;font-size:20px;">1888-8888-888</p>
    </div>
  </div>
</template>


<script>

export default {
  name: 'studentinfo',
}
</script>

<style>
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
#contactus{
  position: absolute;
  width: 100%;
}

#readmessage{
  background:40% url("../../static/asserts/pic/conus.png");
  
  text-align: center;
  width: 100%;
  color: aliceblue;
  height: 500px;
  padding-top:80px;
  margin-top: -80px;
}


</style>
