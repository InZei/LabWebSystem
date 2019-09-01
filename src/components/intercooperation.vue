<template>
  <div id="intercooperation">
      <el-table
      :data="tableData.slice((currentPage1-1)*pagesize,currentPage1*pagesize)"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="国际合作"
        width="1200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="address"
        label="部门">
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-size="pagesize"
      layout="total,prev, pager, next,jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script>

export default {
  name: 'intercooperation',
   data() {
        return {
          pagesize:10,
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
.el-table{
  font-size: 18px;
  font-weight: bolder;
  margin-left: 5%;
}

.el-pagination{
  float:right;
  font-size: 18px;
}

intercooperation
{
  padding:0; 
  margin:0;
}
</style>
