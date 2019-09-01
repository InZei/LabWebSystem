<template>
  <div id="teacherteam">
    <h1>学生信息</h1>
    <div style="width:100%;float:right;">
      <div class="summary">
        <!--为什么文本就不能对齐呢-->
        <h1 align="right">概述</h1>
        <p align="right">这里展示两名优秀同学，由于照片大小原因导致文字和照片有重合，
          需要更换更小的照片或者使用css限制图片大小(暂时还不会)</p>
      </div>
    </div>
    <br/>
    <div style="width:80%;">
      <div class="intro">
        <div class="introleft">
          <img src="../../static/asserts/pic/stucai.jpeg" />
        </div>
        <div class="introright">
          <p>
            蔡同学以一首鸡你太美的篮球舞出道，饱受全网骂名，
            自之前被周董粉丝焦作人之后宣布不再进行流量灌水，转而专注作品——开始祸害奖项：
            终于凭借不知道什么操作用一首全文没汉字的歌拿下了2019华歌榜金曲奖。
          </p>
        </div>
        <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=2)" width="80%" color=#987cb9 SIZE=10 />      
      </div>
      <div class="intro">
        <div class="introleft">
          <p>
            乔奶奶，id乔碧萝殿下，长期凭借童声不露面直播，并收获大量粉丝。
            但在一次炒作直播事故中意外露脸，刷了十万礼物的榜一连夜买站票销号走了，其本人也被直播平台封杀，
          </p>
        </div>
        <div class="introright">
          <img src="../../static/asserts/pic/stuqiao.jpeg" />
          
        </div>
        <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=2)" width="80%" color=#987cb9 SIZE=10 />      
      </div>
    </div>


    

  </div>
</template>


<script>

export default {
  name: 'teacherteam',
}
</script>

<style>
.teacherteam{
  padding: 50px 50px;
  margin: 50px 50px;
}
.summary{
  margin: 0px 60px;
  padding: 20px 20px;
  float: right;
  background-color: rgba(31, 27, 27, 0.5);
}

.intro{
  width: 100%;
  font-size: 24px;
  margin: 0px 12.5%;

}
.introleft{
  width: 50%;
  float: left;
}
.introright{
  width: 50%;
  float: right;
}
</style>
