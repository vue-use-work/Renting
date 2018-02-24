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
  .mg20
    margin-top: 20px
  .w60
    width: 50px
  .w50
    width: 40px
  .w150
    width: 150px
  padding: 0 0 0 0
  margin-top: 10px
  width: 972px
  h2
    font: bold 14px/40px '微软雅黑'
    color: #333
  .list
    padding: 10px 0
    lable
      width: 260px
      float: left
      position: relative
    span:first-child
      width: 60px
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
      top: 7px
      right: 50px
      font-size: 14px
  textarea
    font-size: 12px
    color: #999999
    font: 12px/23px '微软雅黑'
    border: 1px solid #dddddd
    padding: 5px
    border-radius: 2px
    width: 972px


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

.row1list
  border: 1px solid #dddddd
  padding: 15px!important
  border-radius: 2px
  width: 980px!important
  .el-select
    float: left
    margin-left: 30px
  .el-input__inner
    width: 160px!important
  .addItem
    float: left
    font: 14px/30px '微软雅黑'
    color: #333
    img
      width: 20px
      height: 20px
      margin-right: 8px
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
        <span class="fl">编辑房屋信息11</span>
      </h1>
      <div class="roomEdit">
        <div class="editItem">
          <h2>编辑房屋信息</h2>
          <p class="list clearfix">
            <lable><span>房间号：</span><input class="w150" type="text" v-model="roomData.roomName" placeholder="请输入房间号"><span class="red">*</span></lable>
            <lable><span>所在楼层：</span><input class="w150" type="text" v-model="roomData.floorName" placeholder="请输入所在楼层"><span class="red">*</span></lable>
            <lable><span>房间面积：</span><input class="w150" type="text" v-model="roomData.roomSize" placeholder="请输房屋面积"><span class="tis">m</span><span class="red">*</span></lable>
          </p>
          <p class="list clearfix radio_walp">
            <lable><span>房屋定金：</span><input :disabled="true" class="w150" type="text" placeholder="请输入房屋押金"><span class="tis">元</span><span class="red">*</span></lable>
            <span>房屋状态：</span>
            <input :disabled="true" id="open" name="roleStatus" type="radio" checked />
            <label class="bt" for="open" style="width: 77px">已出租</label>
            <input :disabled="true" id="close" name="roleStatus" type="radio" />
            <label class="bt" for="close" style="width: 77px">未出租</label>
          </p>
          <p class="list clearfix">
            <lable><span>付款方式：</span>
              <span style="padding:0 8px 0 0px">押</span><input :disabled="true" class="w50" type="text" placeholder="">
              <span style="padding:0 8px 0 15px">付</span><input :disabled="true" class="w50" type="text" placeholder="">
              <span class="red">*</span>
            </lable>
            <lable><span>房屋租金：</span><input :disabled="true" class="w150" type="text" placeholder="请输入房屋租金"><span class="tis">元</span><span class="red">*</span></lable>
            <lable><span>房屋押金：</span><input :disabled="true" class="w150" type="text" placeholder="请输入房屋押金"><span class="tis">元</span><span class="red">*</span></lable>
          </p>
        </div>

        <div class="editItem mg20">
          <h2>其他费用</h2>
          <p class="row1list list clearfix" style="width: 950px!important">
            <a href="javascript:;" class="addItem"><img src="../../assets/image/increase@2x.png" alt="">添加</a>
            <el-select v-model="value" placeholder="其他押金" size="small" disabled>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="门卡押金" size="small" disabled>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <lable style="margin-left: 20px; width: 200px;"><input :disabled="true" class="w150" type="text" placeholder="请输入房屋押金"><span class="tis">元</span></lable>
            <a href="javascript:;" class="addItem"><img src="../../assets/image/cancel@2x.png" alt="">添加</a>
          </p>
        </div>

        <div class="editItem mg20">
          <h2>收租日期设置</h2>
          <p class="list row1list clearfix radio_walp" style="padding: 15px 0px!important;">
            <input :disabled="true" id="open2" name="roleStatus" type="radio" checked />
            <label class="bt" for="open" style="width: 77px">提前</label>
            <input :disabled="true" class="w50" type="text" placeholder="">
            <span>日收租</span>

            <input :disabled="true" id="open3" name="roleStatus" type="radio" checked />
            <label class="bt" for="open" style="width: 77px;margin-left: 20px;">固定</label>
            <input :disabled="true" class="w50" type="text" placeholder="">
            <span>日收租<em>（每期第一个月）</em></span>

            <input :disabled="true" id="open4" name="roleStatus" type="radio" checked />
            <label class="bt" for="open" style="width: 77px;margin-left: 20px;">固定</label>
            <input :disabled="true" class="w50" type="text" placeholder="">
            <span>日收租<em>（每期提前一个月）</em></span>
          </p>
        </div>

        <div class="editItem mg20">
          <h2>房屋配置</h2>
          <p class="list row1list" style="width: 950px!important;">
            <el-checkbox disabled v-model="checked1">备选项</el-checkbox>
            <el-checkbox disabled v-model="checked2">备选项</el-checkbox>
            <el-checkbox disabledv-model="checked3">备选项</el-checkbox>
            <el-checkbox disabled v-model="checked4">备选项</el-checkbox>
            <el-checkbox disabled v-model="checked5">备选项</el-checkbox>
          </p>
        </div>

        <div class="editItem mg20">
          <h2>收租日期设置</h2>
          <p class="list ">
            <textarea disabled placeholder="请详细描述你的房屋信息"></textarea>
          </p>
        </div>
        <p class="bot"><a href="javascript:;" @click="editRoomInfo">确定修改</a></p>

      </div>
    </div>
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
        roomId: this.$route.query.roomId || undefined,
        campusType: this.$route.query.campusType || undefined,
        roomData: '',
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: true,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    mounted() {
      console.log(this.roomId)
      if(this.roomId != undefined)
        this.getRoomInfo()
    },
    methods: {
      getRoomInfo: async function() {
        console.log("sadwsw")
        const resData = await axios.get('/api/room/getRoomInfo?roomId='+this.roomId)
        if(resData.code == '400'){
          this.$message(resData.msg)
        }else if(resData.code == '200'){
          this.roomData = resData.data.room
          console.log(this.roomData)
        }
      },
      editRoomInfo: async function() {
        let data = {
          "room":{
            "id": this.roomId,
            "floorName": this.roomData.floorName,
            "roomSize": this.roomData.roomSize,
            "roomName": this.roomData.roomName
          }
        }
        const resData = await axios.post('/api/room/update',data)
        console.log(resData)
        if(resData.code == '400'){
          alert(resData.msg)
        }else if(resData.code == '200'){
          this.$message(resData.msg)
          this.$router.push({ path: '/district', query: {campusType: this.campusType}});
        }
      }
    },
    components: {
      headTop,
      menuLeft
    }
  }
</script>



