<template>
  <div id="laboratoryintro">
      
    <img src="../../static/asserts/pic/BITlogo.png" style="margin-top:100px;opacity:0.8;border-radius:50%;box-shadow: 0px 0px 10px #FFFFFF;" width="20%">
    <div style="width:100%;">
        <h1 style="font-weight:100;font-size:30px;color:#EEEEEE;">实验室所属院校：北京理工大学</h1>
        <p style="width:50%;color:#EEEEEE;margin-left:25%;font-weight:100;font-size:16px;">北京理工大学是中国共产党创办的第一所理工科大学,学校前身是1940年成立于延安的自然科学院，历经晋察冀边区工业专门学校、华北大学工学院等办学时期，1949年定址北京,并接收中法大学校本部和数理化三个系，1952年定名为北京工业学院，1988年更名为北京理工大学。</p>
        <p id="link">了解更多 ></p>
    </div>
    <img src="../../static/asserts/pic/labintro1.png" style="margin-top:100px;opacity:0.8;" width="25%">
        <div style="width:100%;">
        <h1 style="font-weight:100;font-size:30px;color:#EEEEEE;">实验室所属院校：北京理工大学</h1>
        <p style="width:50%;color:#EEEEEE;margin-left:25%;font-weight:100;font-size:16px;">北京理工大学是中国共产党创办的第一所理工科大学,学校前身是1940年成立于延安的自然科学院，历经晋察冀边区工业专门学校、华北大学工学院等办学时期，1949年定址北京,并接收中法大学校本部和数理化三个系，1952年定名为北京工业学院，1988年更名为北京理工大学。</p>
        <p id="link">了解更多 ></p>
    </div>
    <img src="../../static/asserts/pic/labintro2.png" style="margin-top:100px;opacity:0.8;" width="35%">
        <div style="width:100%;">
        <h1 style="font-weight:100;font-size:30px;color:#EEEEEE;">领导班子</h1>
        <p style="width:50%;color:#EEEEEE;margin-left:25%;font-weight:100;font-size:16px;">谁谁谁带领实验室</p>
        <p id="link">了解更多 ></p>
    </div>
    <div id="lingdao">
        <el-row>
            <el-col :span="8">
                <div class="grid-content">
                    <el-row>
                        <el-col :span="24"><div class="grid-content bg-purple-dark">张嘉诚</div></el-col>
                        <el-col :span="24"><div class="grid-content bg-purple-dark" style="color:6cc29b;">潜心研究经学，著书立说，创“荆公新学”，促进宋代疑经变古学风的形成。在哲学上，他用“五行说”阐述宇宙生成，丰富和发展了中国古代朴素唯物主义思想；其哲学命题“新故相除”，把中国古代辩证法推到一个新的高度。</div></el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <el-row>
                        <el-col :span="24"><div class="grid-content bg-purple-dark">庞治宇</div></el-col>
                        <el-col :span="24"><div class="grid-content bg-purple-dark" style="color:6cc29b;">早年曾为木工，后以卖画为生，五十七岁后定居北京。擅画花鸟、虫鱼、山水、人物，笔墨雄浑滋润，色彩浓艳明快，造型简练生动，意境淳厚朴实。所作鱼虾虫蟹，天趣横生。</div></el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <el-row>
                        <el-col :span="24"><div class="grid-content bg-purple-dark">张嘉熙</div></el-col>
                        <el-col :span="24"><div class="grid-content bg-purple-dark" style="color:6cc29b;">他与二哥张善子昆仲创立“大风堂派”，是二十世纪中国画坛最具传奇色彩的泼墨画工。特别在山水画方面卓有成就。后旅居海外，画风工写结合，重彩、水墨融为一体，尤其是泼墨与泼彩，开创了新的艺术风格，因其诗、书、画与齐白石、溥心畲齐名，故又并称为“南张北齐”和“南张北溥”，名号多如牛毛。与黄君璧、溥心畲以“渡海三家”齐名。二十多岁便蓄著一把大胡子，成为张大千日后的特有标志。</div></el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
    <img src="../../static/asserts/pic/place.jpg" style="margin-top:100px;opacity:1;" width="80%">
    <div style="width:100%;">
        <h1 style="font-weight:100;font-size:30px;color:#EEEEEE;">实验室所属院校：北京理工大学</h1>
        <p style="width:50%;color:#EEEEEE;margin-left:25%;font-weight:100;font-size:16px;">北京理工大学是中国共产党创办的第一所理工科大学,学校前身是1940年成立于延安的自然科学院，历经晋察冀边区工业专门学校、华北大学工学院等办学时期，1949年定址北京,并接收中法大学校本部和数理化三个系，1952年定名为北京工业学院，1988年更名为北京理工大学。</p>
        <p id="link">了解更多 ></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'laboratoryintro',
}
</script>

<style>
.grid-content{
    margin:20px;
}
#lingdao{
    height:200px;
    margin-left:20%;
    width:60%;
    color:#FFFFFF;
}
#link{
    color:#2d82c7;
    font-size: 19px;
}
#laboratoryintro{
    position: absolute;
    width: 100%;
    background: #000000;
    height: 5000px;
    margin: 0;
    padding:0;
    text-align:center;
    margin-top:-80px;
    overflow-y: hidden;
}
</style>
