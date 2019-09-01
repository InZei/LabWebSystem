<template>
  <div id="contactus" style="height:1080px;">
    <div>
      <h1>联系我们</h1>
      <br>
      
      <div class="containter">
        <div class="logo">
          <img src="../../static/asserts/pic/wechat.png" style="max-width: 70%;"/>
          <br>
          
        </div>
        <div class="logo">
          <img src="../../static/asserts/pic/weibo.png" style="max-width: 70%;"/>
          <br>
         
        </div>
        <div class="logo">
          <img src="../../static/asserts/pic/twitter.png" style="max-width: 70%;"/>
          <br>
          
        </div>
        <div class="logo">
          <img src="../../static/asserts/pic/facebook.svg" style="max-width: 70%;"/>
          <br><br>
          
        </div>
        <div class="content">
          微信:这里直接贴微信号吗
        </div>
        <div class="content">
          微博  
        </div>
        <div class="content">
          推特
        </div>
        <div class="content">
          脸书
        </div>
      </div>
      
      <!--怎么让绿框框沉底？->
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/>-->
      <div class="bottom">
          <div>
            <p>地址：中关村校区中心教学楼xxx房间</p>
            <p>传真：010-68912775   邮箱：xxxxx@bit.edu.cn</p>
            
          </div>
      </div>
    </div>

  </div>
</template>


<script>

export default {
  name: 'contactus',
}
</script>

<style>
.containter{
  width: 100%;
  height: 500px;
}
.logo{
  width: 25%;
  float: left;
  box-sizing: border-box;
  padding: 10px;
  min-width: 150px;

}

.content{
  width: 25%;
  float:left;

}
.bottom{
  background:#066640;
  padding:20px 20px;
  width: 100%;
  min-height: 200px;
  font-size: 20px;
  color: white;
  line-height: 25px;
  max-width: 1920px;
  margin: 0 auto;
}

</style>
