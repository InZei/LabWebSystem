<template>
  <div id="adminqueryuser">
  <el-container>
  <el-main>
      <span style="font-size:36px;font-weight:bolder">查询用户</span>
      <el-form style="margin-top:40px;" :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="学号" class="primary_text_query">
        <el-input v-model="formInline.user" placeholder="学号"></el-input>
      </el-form-item>
      <el-form-item label="类型" class="primary_text_query">
        <el-select v-model="formInline.region" placeholder="类型">
          <el-option label="学生" value="student"></el-option>
          <el-option label="教师" value="teacher"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

  <el-table
      @row-click="tohome"
      :data="tableData.slice((currentPage1-1)*pagesize,currentPage1*pagesize)"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="动态消息"
        stripe
        width="1000">
      </el-table-column>
      <el-table-column
        prop="name"
        label="日期">
      </el-table-column>
  </el-table>

  </el-main>
  </el-container>

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
  name: 'adminqueryuser',
  
    data() {
      return {
          pagesize:16,
          currentPage1:1,
          tableData: [{
            date: '2016-05-02',
            name: '王小东',
            address: '前端组'
          }],
        formInline: {
          user: '',
          region: ''
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

#adminqueryuser{
  position: absolute;
  text-align: center;
  float: left;
  width: 60%;
  padding: 0;
  margin-left: 17%;
}

</style>
