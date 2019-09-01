<template>
  <div id="teacherteam">
    <h1>师资队伍</h1>
    <div style="width:100%;float:right;">
      <div class="summary">
        <!--为什么文本就不能对齐呢-->
        <h1 align="right">概述</h1>
        <p align="right">我们实验室中有两名优秀教师，都是红遍大江南北，成为无数年轻人的精神支柱</p>
      </div>
    </div>
    <br/>
    <div style="width:80%;">
      <div class="intro">
        <div class="introleft">
          <img src="../../static/asserts/pic/teacherwang.jpeg" />
        </div>
        <div class="introright">
          <p>
            王境泽老师以一组真香图火遍大江南北，其真香定理被称为人类三大本质定理之一。
          </p>
        </div>
        <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=2)" width="80%" color=#987cb9 SIZE=10 />      
      </div>
      <div class="intro">
        <div class="introleft">
          <p>
            周老师，别名窃格瓦拉，多次因偷电瓶车被拘留。因为当初在接受记者采访时说出
              “在家里面一个人很无聊，都没有朋友玩，都没有女朋友玩，
              可进了看守所里面个个都是人才，说话又好听，超喜欢在里面的感觉。”
              “打工是不可能打工的，这辈子都不可能打工的。”
            等名言而窜红网络，成为无数年轻人的精神领袖。
          </p>
        </div>
        <div class="introright">
          <img src="../../static/asserts/pic/teacherzhou.jpeg" />
          
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
