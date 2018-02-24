<style scoped  lang="sass">
  @import "../../assets/sass/district.sass"
  @import "../../assets/sass/common_zy.sass"
  .el-checkbox__label
    color: red !important
  .el-checkbox+.el-checkbox
    margin-left: 0
  .content
    .content-right
      margin-top: 20px
      .title
        display: block
        font: 14px/20px 'PingFangSC'
        color: #333333
        font-weight: 500
        margin-top: 30px
        margin-bottom: 20px
        &:first-of-type
          margin-top: 0
          margin-bottom: 0
        &:nth-of-type(2)
          margin-top: 20px
      .yetai
        margin: 10px
        border: 1px solid #dddddd
        display: flex
        flex-wrap: wrap
        width: 972px
        padding: 5px 15px 10px
        >.box
          width: 180px
          height: 20px
          margin-top: 5px
      .section
        // margin-top: 10px
        // margin-bottom: 10px
        &.detail
          display: flex
          flex-direction: column
          .row
            display: flex
            flex-direction: row
            height: 52px
            margin-top: 5px
            align-items: center
            >div
              margin-right: 20px
              .title-name
                height: 17px
                width: 60px
                font: 12px/17px 'PingFangSC-Regular'
                color: #333

              input
               height: 32px
               width: 160px
               padding: 7px
               border: 1px solid #ccc
               border-radius: 2px
        &.fanwei
          .level
            display: flex
            .topLevel
              margin-left: 20px
          .yunying-detail
            .box
              margin-top: 5px
            li
              // flex: 1
              width: 210px
              .detail
                margin-left: 25px
                display: flex
                flex-direction: column
  .radio_walp
    input[type="radio"]
      display: none
      + label
        display: inline-block
        font-size: 14px
    label::before
      content: ""
      display: inline-block
      width: 30px
      height: 30px
      background: url(../../assets/image/radio_unselect@2x.png) no-repeat 9px 3px
      background-size: 20px
      vertical-align: middle
      margin-right: 5px
    input[type="radio"]:checked + label::before
      background: url(../../assets/image/radio_select@2x.png) no-repeat 9px 3px
      background-size: 20px

  .sure-add
    cursor: pointer
    background-color: #2476e9
    color: white
    width: 200px
    height: 32px
    font: 14px/20px 'PingFangSC-Regular'
    border-radius: 2px
    margin-top: 30px
    margin-bottom: 60px
    margin-left: 280px

</style>

<style lang="sass">
.zy
  .el-select .el-input
    input
      width: 160px !important;
      font-size: 12px
      padding-left: 5px
  .el-checkbox__label
    color: #333 !important
  .secondth .el-checkbox__label
    color: #999 !important
</style>
<template>
  <div class="zy zy-staffAdd" style="width: 100%;">
    <head-top></head-top>
    <menu-left></menu-left>
    <!--content-->
    <div class="content" style="padding: 0 0 0 13px">
      <h1 class="topBar clearfix">
        <span class="fl">权限</span>
        <span class="point">·</span>
        <span class="fl">{{tabTwo}}</span>
      </h1>
      <div class="content-right">
        <span class="title">新建员工</span>
        <div class="section detail">
          <div class="row">
            <div>
            <label class="title-name" for="staffName">员工姓名：</label>
            <input type="text" v-model="staffName" id="staffName" placeholder="请输入员工姓名">
          </div>
          <div>
            <label class="title-name" for="staffPhone">员工电话：</label>
            <input type="text" v-model="staffTel" maxlength="11" id="staffPhone" placeholder="请输入员工电话">
          </div>
          <div>
            <label class="title-name" for="staffType">员工类型：</label>
            <el-select v-model="staffType" placeholder="请输入员工类型">
                <el-option value="01" label="运营人员" key="01">
                </el-option>
                <el-option  value="02" label="服务人员" key="02">
                </el-option>
              </el-select>
          </div>
        </div>
        <div class="row">
          <div>
            <label class="title-name" for="staffDepart">员工部门：</label>
              <el-select v-model="staffDepartId" id="staffDepart" size="large" placeholder="请选择员工部门">
                <el-option v-for="item in departList" :value="item.id" :label="item.departName" :key="item.id"> <!-- :label="item.label" -->
                </el-option>
              </el-select>
          </div>
        </div>
        </div>
        <span class="title">员工服务业态</span>
        <div class="section yetai"  v-if="yetai.length > 0">
            <el-checkbox v-for="(item,index) in yetai" class="box" :key="item.id" v-model="yetai[index].isSelect">{{item.campusName}}</el-checkbox>
        </div>
        <span class="title">运营范围</span>
        <div class="section fanwei" v-for="(funcLevlA,indexA) in funcList" :key='funcLevlA.id'>
          <div class="level">
            <div class="topLevel">
            <el-checkbox class="box" @change="checkBoxChange('a',indexA)" v-model="funcList[indexA].isSelect" > {{ funcLevlA.name }}</el-checkbox>
          </div>
          </div>
          <ul class="yunying-detail yetai">
            <li v-for="(funcLevlB,indexB) in funcLevlA.subFunc" :key='funcLevlB.id' >
              <el-checkbox class="box" @change="checkBoxChange('b',indexA,indexB)" v-model="funcList[indexA].subFunc[indexB].isSelect">{{funcLevlB.name}}</el-checkbox>
              <div class="detail">
                <el-checkbox @change="checkBoxChange('c',indexA,indexB,indexC)"  v-for="(funcLevlC,indexC) in funcLevlB.subFunc" :key='funcLevlC.id' class="box secondth" v-model="funcList[indexA].subFunc[indexB].subFunc[indexC].isSelect" >{{funcLevlC.name}}</el-checkbox>
              </div>
            </li>
          </ul>
        </div>
        <div class="section lastSec">
          <button class="sure-add" @click="staffAddClick">确定添加</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import headTop from '../../components/header.vue'
  import menuLeft from '../../components/nav.vue'
  import axios from '../../http/axios'
  import validator from '../../plugins/validator.js'
  export default {
    data () {
      return {
        token:sessionStorage.getItem("token"),
        updateStaff:null,
        staffType:null,
        tabTwo: '员工管理',
        yetai:[],
        campusIds:['5000000000351'],
        fanwei:[],
        staffDepartId:'',
        departList:[],
        staffName:'',
        staffTel:'',
        funcList:[],
        selectedfuncList:[],
      }
    },
    created () {
    },
    mounted () {

      let staff = this.$route.query.staff
      console.log('staff',staff);
      if (staff != null) {
        this.updateStaff = staff
        this.staffName = staff.userName
        this.staffTel = staff.loginId
        this.staffType = staff.type
      }
      this.getDepartInfo()
      this.getFunc()
      this.getCommunity()
    },
    methods: {
      async getDepartInfo (){
        let data = null
        if (this.updateStaff) {
          const resData = await axios.get('/api/departs/user/'+this.updateStaff.id+'?accesstoken='+this.token)
          data = resData.data
        }else{
           const resData = await axios.get('/api/current_company/departs?accesstoken='+this.token)
           data = resData.data
        }
        this.departList = data
        if(this.updateStaff){
          for (var i = 0; i < data.length; i++) {
             if(data[i].isSelect){
              this.staffDepartId = data[i].id
              break
             }
           }
        }
      },
      async getCommunity (){
        let resData = null
        if (this.updateStaff) {
          resData = await axios.get('/api/campus/getBodyUserCampus?bodyUserId='+this.updateStaff.id+'&accesstoken='+this.token)
        }else{
          resData = await axios.get('/api/campus/getCompanyCampus?accesstoken='+this.token)
        }
        this.yetai = resData.data
      },
      async getFunc(){
        const resData = await axios.get('/api/user/func?accesstoken='+this.token+ (this.updateStaff === null? '': ('&id='+this.updateStaff.id )))
        if (this.updateStaff ) {
          console.log('当前用户的id:' + this.updateStaff.id, resData.data)
        }
        this.funcList = resData.data
      },
      staffAddClick(){
        if(!validator.checkName(this.staffName)){
          this.$message('输入姓名不合法');
          return
        }

        if(!validator.checkTelPhone(this.staffTel)){
          this.$message('输入手机号不合法');
          return
        }

        if(!validator.checkNull(this.staffType)){
          this.$message('未选择类型');
          return
        }

        if(!validator.checkNull(this.staffDepartId)){
          this.$message('未选择部门');
          return
        }
        this.postAddStaff()
      },
      getAllCommunityIds(){
        if (!this.yetai) {
          return []
        }
        let yetaiIds = []
        for (var i = 0; i < this.yetai.length; i++) {
          let item = this.yetai[i]
          if(item.isSelect){
            yetaiIds.push(parseInt(item.id))
          }
        }
        return yetaiIds
      },
      getAllSelectFuncIds(){
        if(this.funcList === null){
          return []
        }
        let funcIds = [];
        for (var i = 0; i < this.funcList.length; i++) {
          let funcA = this.funcList[i]
          if (funcA.isSelect) {
            funcIds.push(parseInt(funcA.id))
          }
          if (funcA.subFunc == null) {
            continue
          }
          for (var j = 0; j < funcA.subFunc.length; j++) {
            let funcB = funcA.subFunc[j]
            if (funcB.isSelect) {
              funcIds.push(parseInt(funcB.id))
            }
            if (funcB.subFunc == null) {
              continue
            }
            for (var k = 0; k <  funcB.subFunc.length; k++) {
              let funcC = funcB.subFunc[k]
              if(funcC.isSelect){
                funcIds.push(parseInt(funcC.id))
              }
            }
          }
        }
        return funcIds
      },
      async postAddStaff(){
        let data = {
          'loginId':this.staffTel,
          'userName':this.staffName,
          'type':this.staffType,
          'disableTag': 'O',
          'departId':this.staffDepartId,
          'campusIds':this.getAllCommunityIds(),
          'funcIds':this.getAllSelectFuncIds()
        }
        let resData =null
        if (this.updateStaff) {
          resData = await axios.put('/api/users/'+this.updateStaff.id+'?accesstoken='+this.token,data)
        }else{
          resData = await axios.post('/api/users?accesstoken='+this.token,data)
        }

        if (resData && resData.code === '200') {
          this.$router.push({ path: '/staffManage'});
        }
      },
      checkBoxChange(type,indexA,indexB,indexC){
        let func = null
        if (type === 'a') {
           func = this.funcList[indexA]
        }else if(type === 'b'){
          func = this.funcList[indexA].subFunc[indexB]
          if (func.isSelect) {
            this.funcList[indexA].isSelect = func.isSelect
          }else{
            this.checkIsNeedClose(this.funcList[indexA])
          }
        }else if(type === 'c'){
          func = this.funcList[indexA].subFunc[indexB].subFunc[indexC]
          if (func.isSelect) {
            this.funcList[indexA].isSelect = func.isSelect
            this.funcList[indexA].subFunc[indexB].isSelect = func.isSelect
          }else{
            if(this.checkIsNeedClose(this.funcList[indexA].subFunc[indexB])){
              this.checkIsNeedClose(this.funcList[indexA])
            }
          }
        }
        this.makeSubFuncSelectAsSelf(func)
      },
      makeSubFuncSelectAsSelf(self){
        if (self === null || self.subFunc === null) {
          return
        }
        for (var i = 0; i < self.subFunc.length; i++) {
          self.subFunc[i].isSelect = self.isSelect
          this.makeSubFuncSelectAsSelf(self.subFunc[i])
        }
      },
      checkIsNeedClose(item){
        let isSelect = false
        if (item === null || item.subFunc === null) {
          return false
        }
        for (var i = 0; i < item.subFunc.length; i++) {
          if(item.subFunc[i].isSelect === true){
            isSelect = true
            break
          }
        }
        item.isSelect = isSelect
        console.log(!isSelect,item)
        return !isSelect
      }
    },
    components: {
      headTop,
      menuLeft
    }
  }
</script>
