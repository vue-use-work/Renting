<style lang="sass">
@import "../../assets/sass/common_table.sass"
</style>

<style scoped  lang="sass">
  @import "../../assets/sass/district.sass"
  @import "../../assets/sass/common_zy.sass"
  .content

    .struct-left
      position: absolute
      background-color: #f3f3f3
      top: 50px
      width: 160px
      bottom: 0px
      left: 0px
      .orgnize
        display: block
        // background-color: green
        font: 14px/20px "PingFangSC"
        font-weight: 500
        text-align: center
        padding: 20px 0 10px
        margin: 0 20px
        border-bottom: 1px solid #dddddd
      ul > li
        position: relative
        margin-top: 20px
        margin-left: 20px
        cursor: pointer
        &.notfirst::before
          display: block
          width: 2px
          height: 40px
          background-color: #ccc
          position: absolute
          left: 7px
          top: -24px
          content: ''
          z-index: 1
        span
          font: 12px/17px 'PingFangSC'
          margin-left: 10px
        img
          position: relative
          width: 15px
          height: 15px
          z-index: 100
    .content-right
      left: 20px
</style>

<template>
  <div style="width: 100%;">
    <head-top></head-top>
    <menu-left></menu-left>
    <!--content-->
    <div class="content" style="padding: 0 0 0 20px">
      <h1 class="topBar clearfix">
        <span class="fl">权限</span>
        <span class="point">·</span>
        <span class="fl">{{tabTwo}}</span>
      </h1>

      <div class="content-right">
        <div class="searchPanel">
          <div class="lists">
            <label for="">搜索部门</label>
            <input class="name" name="departName" v-model="departName" placeholder="请输入部门名称">
            <div class="query" @click="searchDepartBtName">
              <img src="../../assets/image/search@2x.png" alt="">
              <span>查询</span>
            </div>
          </div>
        </div>
        <div class="toolBar">
          <div class="add" @click="addDepart">
            <img src="../../assets/image/add@2x.png" alt="">
            <span>新增</span>
          </div>
          <div class="edit" @click="editDepart">
            <img src="../../assets/image/editor@2x.png" alt="">
            <span>修改</span>
          </div>
          <div class="delete" @click="deleteDepart">
            <img src="../../assets/image/delete@2x.png" alt="">
            <span>删除</span>
          </div>
        </div>

          <div class="dataTable">
            <el-table ref="multipleTable" stripe border :data="tableData3" tooltip-effect="dark" @selection-change="handleSelectionChange" @row-click="tableRowCLick">
              <el-table-column type="selection" label="全选" width="55" align="center">
              </el-table-column>
              <el-table-column label="序号" width="120" align="center">
                <template slot-scope="scope">{{ scope.row.id }}</template>
              </el-table-column>
              <el-table-column prop="departName" label="部门名称" width="150" align="center">
              </el-table-column>
              <el-table-column prop="departManager" label="负责人" width="150" align="center">
              </el-table-column>
              <el-table-column prop="managerPhone" label="负责人电话" width="150" align="center">
              </el-table-column>
              <el-table-column prop="userCount" label="人数" width="150" align="center">
              </el-table-column>
              <el-table-column label="状态" show-overflow-tooltip align="center">
                <template slot-scope="scope"><span v-if="scope.row.status == 'C'">关闭</span><span v-if="scope.row.status == 'O'">开启</span></template>
              </el-table-column>
            </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '../../components/header.vue'
  import menuLeft from '../../components/nav.vue'
  import _ from 'lodash'
  import axios from '../../http/axios'
  export default {
    data () {
      return {
        tableData3: [],
        departName: '',
        tabTwo: '部门管理',
        multipleSelection: [],
        selectId: [],
        token: sessionStorage.getItem("token")
      }
    },
    created () {
      //document.title = '首页'
    },
    mounted () {
      this.getDepartInfo()
    },
    watch: {
      multipleSelection: function () {
        let arr = [];
        for (let i in this.multipleSelection) {
          arr.push(this.multipleSelection[i].id);
        }
        this.selectId = arr.join()
        console.log('单选勾中的id为：' + this.selectId);
      }
    },
    methods: {
      async getDepartInfo (){
        let data = {
          'page': 1,
          'rows': 20,
          'departName':this.departName
        }
        const resData = await axios.post('api/departs/?accesstoken=29bfe196-5c4e-499d-a762-bc4f8c2c9f70',data)
        this.tableData3 = resData.data
      },
      searchDepartBtName() {
        console.log("serarch")
        this.getDepartInfo()
      },

      // 获取多选参数
      handleSelectionChange(val) {
        this.multipleSelection = val;
        let arr = [];
        for (let i in this.multipleSelection) {
          arr.push(this.multipleSelection[i].id);
        }
        this.selectId = arr.join()
        console.log('全选勾中的id为：' + this.selectId);
      },

      // 新增部门
      addDepart() {
        this.$router.push({ path: '/permission/departAdd'});
      },

      // 编辑部门
      editDepart() {
        this.selectId = this.selectId.split(',')
        console.log(this.selectId.length)
        if(this.selectId.length > 1){
          this.$message('请选择单行数据')
          return false
        }
        this.$router.push({ path: '/permission/departAdd', query: {companyId: this.selectId}});
      },

      // 删除部门
      async deleteDepart() {
        this.selectId = this.selectId.split(',')
        console.log(this.selectId)
        let data = {
          'ids': this.selectId
        }
        const resData = await axios.delete('api/departs?accesstoken='+this.token,data)
        if(resData.code == '200'){
          this.$message('删除成功')
          this.getDepartInfo();
        }
      },
      reloadData() {
        if (this.multipleSelection) {
          this.multipleSelection.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row,true);
          });
        }
      },
      tableRowCLick(val){
        let index = this.multipleSelection.indexOf(val)
        if(index >= 0 ){
          this.multipleSelection.splice(index,1)
        }else{
          this.multipleSelection.push(val)
          if (this.multipleSelection.length == 1) {
            this.reloadData()
          }
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    },
    components: {
      headTop,
      menuLeft
    }
  }
</script>

