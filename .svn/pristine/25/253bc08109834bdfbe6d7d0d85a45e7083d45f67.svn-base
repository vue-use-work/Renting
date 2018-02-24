<style lang="sass">
  @import "../../assets/sass/common_table.sass"
</style>
<style lang="sass" scoped>
  .topBar
    font: bold 12px/40px 微软雅黑
    border-bottom: 1px solid #ddd
    margin: 0 0 0 0
    color: #333
    span
      float: left
    .point
      font: bold 43px/40px '微软雅黑'
      color: #ccc
      line-height: 40px
      display: inline-block
      padding: 0 5px
  .roomEdit
    padding: 0 0 0 0
    margin-top: 10px
    width: 972px
    .mg20
      margin-top: 20px
    .w60
      width: 50px
    .w50
      width: 40px
    .w150
      width: 150px
    h2
      font: bold 14px/40px '微软雅黑'
      color: #333
    .list
      padding: 10px 0
      lable
        width: 300px
        float: left
        position: relative
      span:first-child
        width: 85px
        text-align: right
        float: left
        font: 12px/30px '微软雅黑'
      em
        color: #999
      input
        font: 12px/30px '微软雅黑'
        border: 1px solid #CCCCCC
        border-radius: 2px
        padding-left: 10px
      .red
        font: bold 14px/30px '微软雅黑'
        color: #D7352C
        padding-left: 5px
      .tis
        position: absolute
        top: 5px
        right: 45px
        font-size: 14px
    textarea
      font-size: 12px
      color: #999999
      font: 12px/23px '微软雅黑'
      border: 1px solid #dddddd
      padding: 5px
      border-radius: 2px
      width: 972px


  .addItem
    /*float: left*/
    font: 14px/30px '微软雅黑'
    color: #333
    display: inline-block
    margin-left: 30px
    img
      width: 20px
      height: 20px
      margin-right: 8px
  .row1list
    border: 1px solid #dddddd
    padding: 0 15px 15px 0!important
    border-radius: 2px
    width: 980px!important
    .el-select
      float: left
      margin-left: 30px
    .el-input__inner
      width: 160px!important
      .el-input__inner
        border: 1px solid #ccc
      .tis
        position: absolute
        top: 7px
        right: 50px
        font-size: 14px
  .bot
    text-align: center
    padding: 30px 50px
    a
      color: #fff
      display: inline-block
      width: 200px
      background: #2476E9
      font: 14px/32px '宋体'
      border-radius: 2px
  .myName
    border: 1px solid #2476E9
    border-radius: 2px
    padding: 4px 10px
    color: #2476E9
    text-align: center
    float: left
  .active
    border: 1px solid #2476E9
    background: #2476E9
    border-radius: 2px
    padding: 4px 10px
    color: #fff
  .addName
    border: 1px solid #22AC38
    border-radius: 2px
    padding: 4px 10px
    color: #22AC38
    text-align: center
    float: left
    margin-left: 20px
    img
      width: 20px
      margin-right: 5px
    .con
      .dis
        background: #F5F9FF
        border: 1px solid #B8D6FF
        color: #333
        font: 12px/30px '宋体'
      .conform
        margin-top: 10px
        .row
          margin-top: 25px
          label
            width: 80px
            text-align: right
            font: 12px/30px '宋体'
            float: left
          input
            width: 250px
            font: 12px/30px '宋体'
            float: left
            padding-left: 10px
            margin-left: 10px
            border-radius: 2px !important
            border: 1px solid #ccc
        .bot
          margin: 30px 0 0 0
          a
            border-radius: 2px
            width: 120px
            height: 30px
            font: 14px/30px '宋体'
            border: 1px solid #2476E9
            float: left
            text-align: center
            &:first-child
              background: #2476E9
              color: #fff
              margin-left: 90px
            &:last-child
              background: #fff
              color: #2476E9
              margin-left: 18px
</style>
<template>
  <div>
    <head-top></head-top>
    <menu-left></menu-left>

    <!--content-->
    <div class="content" style="padding: 0 0 0 13px">
      <h1 class="topBar clearfix">
        <span class="fl">业态</span>
        <span class="point">·</span>
        <span class="fl">集中式房态图</span>
        <span class="point">·</span>
        <span class="fl">租客登记</span>
      </h1>
      <div class="roomEdit">

        <!--租客登记-->
        <div class="editItem">
          <h2>租客登记</h2>
          <p class="list clearfix">
            <lable><span>承租人姓名：</span><input class="w150" type="text" v-model="contractInfo.signerName" placeholder="承租人姓名"><span class="red">*</span></lable>
            <lable><span>承租人手机：</span><input class="w150" type="text" v-model="contractInfo.signerMobile" placeholder="承租人手机"><span class="red">*</span></lable>
          </p>
          <p class="list clearfix radio_walp">
            <lable><span>承租人身份证：</span><input class="w150" type="text" v-model="contractInfo.signerIdNo" placeholder="承租人身份证"><span class="red">*</span></lable>
            <span style="width: 85px; text-align: right; float: left;">承租人性别：</span>
            <el-radio-group v-model="contractInfo.userSex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="2">女</el-radio>
            </el-radio-group>

            <!--<input id="open" name="roleStatus" type="radio" value="1" v-model="contractInfo.userSex" checked />-->
            <!--<label class="bt" for="open" style="width: 77px">男</label>-->
            <!--<input id="close" name="roleStatus" type="radio" value="0" v-model="contractInfo.userSex" />-->
            <!--<label class="bt" for="close" style="width: 77px">女</label>-->
          </p>
          <p class="list clearfix radio_walp">
            <lable style="width: 800px">
              <span>入住人信息：</span>
              <a href="javascript:;" @click="isMySelf()" :class="{active : contractInfo.isSigner}" class="myName">承租人本人入住</a>
              <a v-for="user in contractInfo.users" href="javascript:;" class="addName">{{user.userName}}</a>
              <a href="javascript:;" @click="openAddUsers()" class="addName"><img src="../../assets/image/increase@2x.png" alt="">添加承租人</a>
            </lable>
          </p>
          <p class="list clearfix">
            <lable style="width: 800px">
              <span>租期起止：</span>
              <el-date-picker
                style="float: left; width: 166px;"
                v-model="contractInfo.startDate"
                type="date"
                value-format="yyyyMMdd"
                placeholder="请选择开始日期">
              </el-date-picker>
              <el-select v-model="dateYear" @change="changeDate()" placeholder="选择年" style="float: left; margin-left: 30px; width: 90px;">
                <el-option
                  v-for="item in years"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="dateMouth" @change="changeDate()" placeholder="选择月" style="float: left; margin-left: 30px; width: 90px;">
                <el-option
                  v-for="item in mouths"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-date-picker
                style="float: left; margin-left: 30px; width: 166px;"
                v-model="contractInfo.endDate"
                type="date"
                placeholder="选择结束日期"
                format="yyyy-MM-dd"
                value-format="yyyyMMdd"
                disabled
                size="mini">
              </el-date-picker>

            </lable>
          </p>
          <p class="list clearfix">
            <lable><span>付款方式：</span>
              <span style="padding:0 8px 0 0px">押</span><input class="w50" type="text" v-model.number="contractInfo.feePerPeriod">
              <span style="padding:0 8px 0 15px">付</span><input class="w50" type="text" v-model.number="contractInfo.period">
              <span class="red">*</span>
            </lable>
            <lable><span>房屋租金：</span><input class="w150" v-model.number="contractInfo.rentAmt" type="text" placeholder="房屋租金"><span class="tis" style="right: 60px">元</span><span class="red">*</span></lable>
            <lable><span>房屋押金：</span><input class="w150" v-model.number="contractInfo.guaranteeAmt" disabled type="text" placeholder="房屋押金"><span class="tis" style="right:62px">元</span><span class="red">*</span></lable>
          </p>
        </div>

        <!--其他费用-->
        <div class="editItem mg20">
          <h2>其他费用<a href="javascript:;" @click="addFeeItem()" class="addItem"><img src="../../assets/image/increase@2x.png" alt="">添加</a></h2>
          <div class="row1list list " style="width: 950px!important">
            <p class="clearfix" style="margin-top: 20px" v-for="(fee,index) in contractInfo.fees" >
              <el-select v-model="fee.feeType" placeholder="请选择"  @change="changeValue('one',index,fee.feeType)">
                <el-option
                  v-for="item in oneMenu"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="fee.feeSubType" placeholder="请选择"  @change="changeValue('two',index,fee.feeSubType)" size="small" >
                <el-option
                  v-for="item in twoMenu"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <lable style="margin-left: 20px; width: 200px;"><input v-model="fee.totalFee" class="w150" type="text" placeholder="房屋押金"><span class="tis">元</span></lable>
              <lable style="margin-left: 20px; width: 200px;"><input v-model="fee.feeDesc" class="w150" type="text" placeholder="填写备注信息"></lable>
              <a href="javascript:;" style="margin-left: -5px" @click="removeFeeItem(index)" class="addItem"><img src="../../assets/image/cancel@2x.png" alt=""></a>
            </p>
          </div>
        </div>

        <!--最晚收租日-->
        <div class="editItem mg20">
          <h2>最晚收租日</h2>
          <p class="list row1list clearfix radio_walp" style="padding: 15px 15px!important; width: 936px!important;">

            <el-radio-group v-model="contractInfo.feeCollectType">
              <el-radio :label="1">提前</el-radio>
              <el-radio :label="2">当月</el-radio>
              <el-radio :label="3">上月</el-radio>
            </el-radio-group>
            <span style="margin-left: 30px">收租日：</span>
            <input class="w50" type="text" placeholder="" v-model.number="contractInfo.feeCollectFormula">
          </p>
        </div>
        <div class="editItem mg20" >
          <h2>账单计划</h2>
          <div class="dataTable">
            <el-table
              :data="planData"
              style="width: 100%"
              border stripe tooltip-effect="dark" >
              <el-table-column
                prop="pNum"
                label="期数"
                width="180"
                align="center">
              </el-table-column>
              <el-table-column
                prop="region"
                label="期数时间"
                width="180"
                align="center">
              </el-table-column>
              <el-table-column
                label="账单明细"
                align="center">
                <template slot-scope="scope">
                  <div v-for="(item,index) in scope.row.money">
                    <spen v-if="item.totalFee != undefined ">
                      <em v-if="item.feeLable != undefined ">{{item.feeLable}}-</em>{{item.feeSubLable}}: {{ item.totalFee }}元<br>
                    </spen>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="data"
                label="最晚支付时间"
                align="center">
              </el-table-column>
            </el-table>
          </div>
        </div>
        <p class="bot" v-if="showHide"><a href="javascript:;" @click="commitRoomInfo">确定添加</a></p>
        <p class="bot" v-if="!showHide"><a href="javascript:;" @click="updateRoomInfo">确定修改</a></p>

      </div>
    </div>

    <el-dialog title="添加入住人" :visible.sync="dialogFormVisible" class="room-contract">
      <div class="con">
        <div class="modifyWin">
          <!--:rules="rules"-->
          <el-form :model="userForm"  ref="userForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="姓名：" prop="userName" style="width: 210px; float: left">
              <el-input v-model="userForm.userName" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别：" prop="userSex" style="width: 210px; float: left; padding-top: 3px">
              <el-radio-group v-model="userForm.userSex">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="0">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="年龄：" prop="userAge" style="width: 210px; float: left">
              <el-input v-model="userForm.userAge" placeholder="请输入年龄"></el-input>
            </el-form-item>
            <el-form-item label="手机号：" prop="userMobile" style="width: 210px; float: left">
              <el-input v-model="userForm.userMobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="身份证：" prop="userIdentityNo" style="float: left">
              <el-input style="width:340px" v-model="userForm.userIdentityNo" placeholder="请输入身份证号"></el-input>
            </el-form-item>

          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button><el-button style="margin-left: 10px; background: #2476E9 " type="primary" @click="addUsers()">确 定</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import headTop from '../../components/header.vue'
  import menuLeft from '../../components/nav.vue'
  import _ from 'lodash'
  import axios from '../../http/axios'
  import { mapGetters } from 'vuex'
  export default {

    data () {
      return {
        token: sessionStorage.getItem("token"),
        campusType: this.$route.query.campusType,
        showHide: false,
        contractInfo:{
          roomId: this.$route.query.roomId || undefined,
          signerName: "",
          signerMobile: "",
          signerIdNo: "",
          userSex: 1,
          isSigner: true,
          users:[],

          startDate: '',
          endDate: '',

          rentAmt: '',//租金
          guaranteeAmt: '',//押金
          period: '',//预付租金
          feePerPeriod: '',//预付押金

          fees: [{
            feeType:"",
            feeSubType:"",
            totalFee:"",
            feeDesc:"",
            feeLable: ''
          }],

          feeCollectType: 2,
          feeCollectFormula: ''
        },

        moneyArr: [],
        dialogFormVisible: false,
        userForm: {
          userMobile:"",
          userName:"",
          userIdentityNo:"",
          userSex: 1,
          userAge:""
        },
        rentDate:["20180303", "20190909"],
        planData: [],
        monthNum: '',
        dateYear: '',
        dateMouth: '',
        years: [{
          value: 0,
          label: '零年'
        }, {
          value: 1,
          label: '一年'
        }, {
          value: 2,
          label: '两年'
        }, {
          value: 3,
          label: '三年'
        }, {
          value: 4,
          label: '四年'
        }, {
          value: 5,
          label: '五年'
        }],
        mouths: [{
          value: 0,
          label: '0个月'
        }, {
          value: 1,
          label: '1个月'
        }, {
          value: 2,
          label: '2个月'
        }, {
          value: 3,
          label: '3个月'
        }, {
          value: 4,
          label: '4个月'
        }, {
          value: 5,
          label: '5个月'
        },{
          value: 6,
          label: '6个月'
        }, {
          value: 7,
          label: '7个月'
        }, {
          value: 8,
          label: '8个月'
        }, {
          value: 9,
          label: '9个月'
        }, {
          value: 10,
          label: '10个月'
        }, {
          value: 11,
          label: '11个月'
        }, {
          value: 12,
          label: '12个月'
        }],
        oneMenu: [
         {
         value: '00',
         label: '押金'
       },
          {
            value: '01',
            label: '周期性费用'
          }, {
            value: '02',
            label: '首次租约一次支付'
          }],
        oneValue: '',
        twoMenu: [{
            value: '02',
            label: '药匙押金'
          }, {
            value: '03',
            label: '电器押金'
          }],
        twoValue: '',
        resultData: []
      }
    },
    mounted() {
      this.getRoomContract()
      this.contractInfo.feeCollectType = parseInt(this.contractInfo.feeCollectType)
    },
    watch: {
      'contractInfo.feeCollectFormula' () {
        this.getPlanData()
      },
      dateYear () {
        if(this.contractInfo.feeCollectFormula != ''){
          this.getPlanData()
        }
      },
      dateMouth () {
        if(this.contractInfo.feeCollectFormula != ''){
          this.getPlanData()
        }
      },
      rentDate () {
        let endYear = parseInt((this.rentDate[1]).slice(0,4))
        let startYear = parseInt((this.rentDate[0]).slice(0,4))
        let endMouth = parseInt((this.rentDate[1]).slice(4,6))
        let startMouth = parseInt((this.rentDate[0]).slice(4,6))
        this.monthNum = (endYear - startYear)*12 +  (endMouth - startMouth)
      },
      'contractInfo.rentAmt' () {
        this.getYjMoney()
        if(this.contractInfo.feeCollectFormula != ''){
          this.getPlanData()
        }
      },
    },
    methods: {

      //入住人信息
      isMySelf () {
        this.contractInfo.isSigner = !this.contractInfo.isSigner
      },
      openAddUsers () {
        this.dialogFormVisible = true
      },
      async addUsers() {
        this.contractInfo.users.push(this.userForm)
        this.userForm =  {
          userMobile:"",
          userName:"",
          userIdentityNo:"",
          userSex: 1,
          userAge:""
        },
          this.dialogFormVisible = false
      },

      //租期起止
      changeDate() {
        if(this.contractInfo.startDate == '')
          this.$message("请输入开始时间")
        //return false
        let startYear = parseInt((this.contractInfo.startDate).slice(0,4))
        let startMouth = parseInt((this.contractInfo.startDate).slice(4,6))
        let startData = (this.contractInfo.startDate).slice(6,8)
        let addYear = startYear + parseInt(this.dateYear)
        let addMouth = startMouth + parseInt(this.dateMouth)
        if((addMouth-12) > 0){
          addMouth = addMouth-12
          addYear++
        }
        if(addMouth < 10){
          addMouth = '0'+addMouth
        }

        this.contractInfo.endDate = addYear.toString() + '-' + addMouth.toString() + "-" + startData
      },

      //付款方式
      getYjMoney () {
        this.contractInfo.guaranteeAmt = this.contractInfo.rentAmt * this.contractInfo.feePerPeriod
      },

      //其他费用
      addFeeItem() {
        this.contractInfo.fees.push({feeType: '', feeSubType: '', totalFee: '',feeDesc: '',feeLable:''})
      },
      removeFeeItem: function (index) {
        this.contractInfo.fees.splice(index, 1);
      },

      changeValue(menu,index,value) {
        let obj = {};
        if(menu == 'one'){
          obj = this.oneMenu.find((item)=>{
            return item.value === value;
          });
          this.contractInfo.fees[index].feeLable = obj.label
        }else if(menu == 'two'){
          obj = this.twoMenu.find((item)=>{
            return item.value === value;
          });
          this.contractInfo.fees[index].feeSubLable = obj.label
        }
      },
      getRentDate () {
        let endYear = parseInt((this.rentDate[1]).slice(0,4))
        let startYear = parseInt((this.rentDate[0]).slice(0,4))
        let endMouth = parseInt((this.rentDate[1]).slice(4,6))
        let startMouth = parseInt((this.rentDate[0]).slice(4,6))
        this.monthNum = (endYear - startYear)*12 +  (endMouth - startMouth)
      },
      async getYearAndMonth (start,end,mt,date,money) {
        console.log("after:"+start+','+end)
        var result = [];
        var staYear = parseInt(start.slice(0,4));
        var endYear = parseInt(end.slice(0,4));
        var staMon = parseInt(start.slice(4,6)) - mt;
        var staMonEnd = staMon + 1;
        console.log("end:" + end.length)
        if(end.length == 8){
          var endMon = parseInt(end.slice(4,6));
        }else {
          var endMon = parseInt(end.slice(5,7));
        }
        var pNum = 1

        let moneyArr = [];
        let cycleArr = [];
        let lenFees = this.contractInfo.fees
        for(let i= 0; i< lenFees.length; i++){
          if(lenFees[i].feeType == "01"){
            cycleArr.push({feeLable: lenFees[i].feeLable, feeSubLable: lenFees[i].feeSubLable, totalFee: lenFees[i].totalFee})
          }
          moneyArr.push({feeLable: lenFees[i].feeLable, feeSubLable: lenFees[i].feeSubLable, totalFee: lenFees[i].totalFee})
        }
        cycleArr.push({totalFee: money,feeSubLable:'租金'})
        while (staYear <= endYear) {
          if (staYear === endYear) {
            while (staMon < endMon) {
              if(pNum == 1){
                moneyArr.push({totalFee: money,feeSubLable:'租金'})
                result.push(
                  {
                    pNum: pNum,
                    region: staYear+'.'+staMon+'.'+ date + '-' + staYear+'.'+staMonEnd+'.'+ date ,
                    data: staYear+'.'+staMonEnd+'.'+ date,
                    money: moneyArr
                  }
                );
              }else {
                result.push(
                  {
                    pNum: pNum,
                    region: staYear+'.'+staMon+'.'+ date + '-' + staYear+'.'+staMonEnd+'.'+ date ,
                    data: staYear+'.'+staMonEnd+'.'+ date,
                    money: cycleArr
                  }
                );
              }
              staMon++;
              pNum++
              staMonEnd++;
            }
            staYear++;
          } else {
            if (staMonEnd > 12) {
              staMon = 1;
              staMonEnd = 2;
              staYear++;
            }
            if(pNum == 1){
              moneyArr.push({totalFee: money,feeSubLable:'租金'})
              result.push(
                {
                  pNum: pNum,
                  region: staYear+'.'+staMon+'.'+ date + '-' + staYear+'.'+staMonEnd+'.'+ date ,
                  data: staYear+'.'+staMonEnd+'.'+ date,
                  money: moneyArr
                }
              );
            }else {
              result.push(
                {
                  pNum: pNum,
                  region: staYear+'.'+staMon+'.'+ date + '-' + staYear+'.'+staMonEnd+'.'+ date ,
                  data: staYear+'.'+staMonEnd+'.'+ date,
                  money: cycleArr
                }
              );
            }
            staMon++;
            pNum++;
            staMonEnd++;
          }
        }
        this.planData = result
      },

      getPlanData:  _.debounce(
        async function () {
          this.getRentDate()
          this.getYearAndMonth(this.contractInfo.startDate,this.contractInfo.endDate,0,this.contractInfo.feeCollectFormula,this.contractInfo.rentAmt)
        },
        500
      ),
      commitRoomInfo: async function() {
        let mobile = this.contractInfo.signerMobile
        if(this.contractInfo.signerName == ''){
          this.$message("请输入正确的姓名！")
          return
        }
        else if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(mobile))){
          this.$message("请输入正确承租人手机！")
          return false

        }else if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.contractInfo.signerIdNo))){
          this.$message("请输入正确承租人身份证！")
          return false
        }else if(this.contractInfo.startDate == ''){
          this.$message("请输入正确租期起止！")
          return false
        }else if(this.contractInfo.period == '' || this.contractInfo.feePerPeriod == ''){
          this.$message("请输入正确付款方式！")
          return false
        }else if(this.contractInfo.rentAmt == ''){
          this.$message("请输入正确房屋租金！")
          return false
        }else if(this.contractInfo.feeCollectFormula == '' || this.contractInfo.feeCollectFormula > 31){
          this.$message("请输入正确最晚收租日！")
          return false
        }
        if((this.contractInfo.endDate).length > 8){
          this.contractInfo.endDate = (this.contractInfo.endDate).slice(0,4)+(this.contractInfo.endDate).slice(5,7)+(this.contractInfo.endDate).slice(8,10)
        }
        const resData = await axios.post('/api/contracts?accesstoken=' + this.token,this.contractInfo)
        if(resData.code == '400'){
          this.$message(resData.msg)
        }else if(resData.code == '200'){
          this.$router.push({ path: `/district/${this.campusType}` })
        }else if(resData.code == '402'){
          this.$message(resData.msg)
          this.$router.push({path: "/"})
        }
      },


      //更新合同
      updateRoomInfo: async function() {
        let mobile = this.contractInfo.signerMobile
        if(this.contractInfo.signerName == ''){
          this.$message("请输入正确的姓名！")
          return
        }
        else if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(mobile))){
          this.$message("请输入正确承租人手机！")
          return false
        }else if(this.contractInfo.signerIdNo == ''){
          this.$message("请输入正确承租人身份证！")
          return false
        }else if(this.contractInfo.startDate == ''){
          this.$message("请输入正确租期起止！")
          return false
        }else if(this.contractInfo.period == '' || this.contractInfo.feePerPeriod == ''){
          this.$message("请输入正确付款方式！")
          return false
        }else if(this.contractInfo.rentAmt == ''){
          this.$message("请输入正确房屋租金！")
          return false
        }else if(this.contractInfo.feeCollectType == '' || this.contractInfo.feeCollectFormula == '' || this.contractInfo.feeCollectFormula > 31){
          this.$message("请输入正确最晚收租日！")
          return false
        }
        if((this.contractInfo.endDate).length > 8){
          this.contractInfo.endDate = (this.contractInfo.endDate).slice(0,4)+(this.contractInfo.endDate).slice(5,7)+(this.contractInfo.endDate).slice(8,10)
        }
        const resData = await axios.put('/api/contracts/'+this.contractInfo.id+'?accesstoken=' + this.token,this.contractInfo)
        if(resData.code == '400'){
          this.$message(resData.msg)
        }else if(resData.code == '200'){
          this.$router.push({ path: `/district/${this.campusType}` })
        }else if(resData.code == '402'){
          this.$message(resData.msg)
          this.$router.push({path: "/"})
        }
      },

      //显示合同
      getRoomContract :  async function() {
        const resData = await axios.get('/api/contracts/'+this.contractInfo.roomId+'?accesstoken=' + this.token)
        if(resData.code == '400'){
          this.showHide = true
        }else if(resData.code == '200'){
          this.contractInfo = resData.data
          this.contractInfo.feeCollectType = parseInt(resData.data.feeCollectType)
          this.contractInfo.userSex = parseInt(resData.data.userSex)

          //计算时间 getYearAndMonth(startDate,endDate,0,feeCollectFormula,rentAmt)
          let stringEndDate = parseInt((resData.data.endDate).slice(0,4))
          let stringStartDate = parseInt((resData.data.startDate).slice(0,4))
          let stringEndMouth = parseInt((resData.data.endDate).slice(4,6))
          let stringStartMouth = parseInt((resData.data.startDate).slice(4,6))
          this.dateYear = stringEndDate - stringStartDate
          if(stringEndMouth >= stringStartMouth){
            this.dateMouth = stringEndMouth - stringStartMouth
          }else {
            this.dateMouth = (12-stringStartMouth) + stringEndMouth
            this.dateYear--
          }

          console.log("before:"+resData.data.startDate+','+resData.data.endDate)

          let feeInfos = this.contractInfo.fees
          for (let i=0; i<feeInfos.length; i++){
            if(feeInfos[i].feeSubType == '02'){
              feeInfos[i].feeSubLable='药匙押金'
            }else if(feeInfos[i].feeSubType == '03'){
              feeInfos[i].feeSubLable='电器押金'
            }
            if(feeInfos[i].feeType == '00'){
              feeInfos[i].feeLable='押金'
            }else if(feeInfos[i].feeType == '01'){
              feeInfos[i].feeLable='周期性费用'
            }else if(feeInfos[i].feeType == '02'){
              feeInfos[i].feeLable='首次租约一次支付'
            }
          }
        }
      }
    },
    components: {
      headTop,
      menuLeft
    }
  }
</script>
