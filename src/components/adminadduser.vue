<template>
  <div id="adminadduser">
    <div style="width:40%;margin-left:28%">
    <el-container>
      <el-main>
        <span style="margin-left:80px;font-size:42px;font-weight:bolder">添加新用户</span>
        <el-form style="margin-top:40px;" ref="form" :model="form" label-width="80px">
        <el-form-item label="学号:" class="primary_text_add">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="姓名" class="primary_text_add">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" class="primary_text_add">
          <el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-form-item label="类别" class="primary_text_add">
          <el-input v-model="form.category"></el-input>
        </el-form-item>
        <el-form-item label="国籍" class="primary_text_add">
          <el-input v-model="form.nationality"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" class="primary_text_add">
          <el-input v-model="form.birthday"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" class="primary_text_add">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="移动电话" class="primary_text_add">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="备注" class="primary_text_add">
          <el-input  type="textarea" v-model="form.remarks"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >立即创建</el-button>
          <el-button style="margin-left:40px;">取消</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
  </div>


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
  name: 'adminadduser',
  data() {
      return {
        form: {
          number:'',
          name: '',
          sex:'',
          category:'',
          nationality:'',
          birthday:'',
          email:'',
          phone:'',
          remarks: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style>

.primary_text_add > :first-child{
  font-size: 16px;
  font-weight: bolder;
}

#adminadduser{
  position: absolute;
  width: 100%;
}

#form{
  padding: 0;
  margin-left: 20%;
  text-align: center;
  float: left;
}
</style>
