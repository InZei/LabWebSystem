<template>
  <div id="activemessage">
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

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-size="pagesize"
      layout="prev, pager, next"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script>

export default {
  name: 'activemessage',
   data() {
        return {
          pagesize:16,
          currentPage1:1,
          tableData: [{
            date: '2016-05-02',
            name: '王小东',
            address: '前端组'
          },{
            date: '2016-05-02',
            name: '王小东',
            address: '前端组'
          },
          {
            date: '2016-05-02',
            name: '王小东',
            address: '前端组'
          },
          {
            date: '2016-05-02',
            name: '王小东',
            address: '前端组'
          },
          {
            date: '2016-05-02',
            name: '王小东',
            address: '前端组'
          },
          {
            date: '2016-05-02',
            name: '王小东',
            address: '前端组'
          }, {
            date: '2016-05-04',
            name: '王小东',
            address: '前端组'
          }, {
            date: '2016-05-01',
            name: '王小东',
            address: '前端组'
          }, {
            date: '2016-05-03',
            name: '王小东',
            address: '前端组'
          },
          {
            date: '2016-05-02',
            name: '王小东',
            address: '前端组'
          }, {
            date: '2016-05-04',
            name: '王小东',
            address: '前端组'
          }, {
            date: '2016-05-01',
            name: '王小东',
            address: '前端组'
          }, {
            date: '2016-05-03',
            name: '王小东',
            address: '前端组'
          }
        ,{
            date: '2016-05-02',
            name: '王小东',
            address: '前端组'
          }, {
            date: '2016-05-04',
            name: '王小东',
            address: '前端组'
          }, {
            date: '2016-05-01',
            name: '王小东',
            address: '前端组'
          }, {
            date: '2016-05-03',
            name: '王小东',
            address: '前端组'
          },{
            date: '2016-05-02',
            name: '王小东',
            address: '前端组'
          }]
        }
      },
    methods: {
      tohome(){
      this.$router.push({
        path:'/',
      })
    },
      handleCurrentChange(currentPage1) {
        this.currentPage1=currentPage1;
      },
      handleEdit(index, row) {
        console.log(index, row);
      }
    }
}
</script>

<style>
#activemessage{
  position:absolute;
  text-align: center;
  float: left;
  width: 60%;
  padding: 0;
  margin-left: 17%;
}
.el-table{
  font-size: 18px;
  font-weight: bolder;
}

.el-pagination{
  font-size: 18px;
}


</style>
