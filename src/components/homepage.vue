<template>
  <div id="homepage" style="width:100%;">
    <div style="width:100%;">
      <h1 class="titleforwelcome">Welcome You</h1>
      <p class="mesforwelcome">欢迎您来到复杂网络与安全研究实验室</p>
      <p class="cliforwelcome">点击了解更多 ></p>
      <img src="../../static/asserts/pic/homepage1.jpg" width="60%">
    </div>
    <div style="width:100%;height:100%;">
      <h1  class="titleforwelcome">Photo wall</h1>
        <p class="mesforwelcome">这是我们的照片墙</p>
        <p class="cliforwelcome">点击联系我们 ></p>
          <div style="height:800px;width:100%;margin-top:50px;">
            <el-carousel :interval="4000" height="900px">
              <el-carousel-item v-for="item in lunitems" :key="item.id">
                <img :src="item.src" width="100%"/>
              </el-carousel-item>
            </el-carousel>
          </div>
    </div>
    <div style="width:100%;height:100%;margin-top:200px;">
      <h1 class="titleforwelcome">Message</h1>
      <p class="mesforwelcome">这是实验室发布的一些消息</p>
      <p class="cliforwelcome">点击了解更多 ></p>
      <div v-for="item in message" :key="item"><p class="cliformessage">{{item}}</p></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homepage',
  data(){
    return{
      lun:"../pic/1.png",
      lunitems:[
        {id:1,src:"../../static/asserts/pic/1.png"},
        {id:2,src:"../../static/asserts/pic/2.jpg"},
        {id:3,src:"../../static/asserts/pic/2.jpg"}
        ],
      message:[
        ,"在鼠标 hover 底部的指示器时就会触发切换"
        ,"更换和维修扩展计划"
        ,"可以协助回答您的问题"
        ,"在鼠标 hover 底部的指示器时就会触发切换"
        ,"更换和维修扩展计划"
        ,"可以协助回答您的问题"

      ]
    }
  },
}
</script>

<style>
#homepage{
  position:absolute;
}
  .titleforwelcome{
    font-size: 50px;
    font-weight: 500;
    line-height: 5px;
  }
  .mesforwelcome{
    font-size: 20px;
  }
  .cliformessage{
    color: #2d82c7;
    font-weight: 500;
    transition: 0.3s;
  }
  .cliformessage:hover{
    cursor: pointer;
    color: #404142;
    font-weight: 500;
    transition: 0.3s;
  }
  .cliforwelcome{
    color: #0760a8;
    transition: 0.3s;
    font-weight: 500;
  }
  .cliforwelcome:hover{
    cursor: pointer;
    color: #404142;
    font-weight: 500;
    transition: 0.3s;
  }
</style>
