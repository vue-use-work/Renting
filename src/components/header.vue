<template>

<div class="north">

<a class="logo" href=""><img src="../assets/image/logo@2x.png" alt=""></a>
<div style="width: 30px; margin:0 10px; color: #333; float: right;">
  <img style="width: 20px; height: 20px; margin-top: 20px;" src="../assets/image/new@2x.png" alt="">
</div>
<div id="dd" href="javascript:void(0)" class="userTool"  v-on:mouseover="overShow()" v-on:mouseout="outHide()">{{user_info.userName}}
  <div class="toolWalp" v-if="userEdit">
    <div class="arrow"></div>
    <div class="tool">
      <ul>
        <li><router-link class="active2 a2" :to="{ name: 'login'}">退出登录</router-link></li>
        <li  @click="dialogFormVisible = true">修改密码</li>
      </ul>
    </div>
  </div>
</div>

<el-dialog title="收货地址" :visible.sync="dialogFormVisible" class="modifyPassword">
    <div id="modifyPassword">
      <div class="modifyWin">
        <div class="row clearfix">
          <label>原密码：</label>
          <input type="password" minlength="6" placeholder="请输入原密码" v-model="form.oldpassword">
        </div>
        <div class="row clearfix">
          <label>新密码：</label>
          <input type="password" minlength="6" placeholder="请输入新密码" v-model="form.password">
        </div>
        <div class="row clearfix">
          <label>确认密码：</label>
          <input type="password" minlength="6" placeholder="请输入确认密码" v-model="form.surePassword">
        </div>
        <div class="bot clearfix">
          <a href="javascript:;" @click="editPassword()">确定</a>
          <a href="javascript:;" @click="dialogFormVisible = false">取消</a>
        </div>
      </div>
    </div>
</el-dialog>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import axios from '../http/axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      dialogFormVisible: false,
      form: {
        oldpassword: '',
        surePassword: '',
        password: '',
      },
      userEdit: false,
      token: localStorage.getItem("token")
    }
  },
  computed: {
    ...mapGetters({
      user_info: 'user_info',
    })
  },
  mounted() {
    console.log("header: user_info")
    console.log(this.user_info)
  },
  methods: {
    overShow () {
      this.userEdit = true
    },
    outHide (child) {
      this.userEdit = false
    },
    async editPassword () {
      console.log(this.form.surePassword,this.form.password)
      if(this.form.surePassword != this.form.password){
        console.log("dfwdadfd")
        this.$message('请保持两次输入密码一致！')
        return false
      }
      const resData = await axios.get('api/user/'+this.form.oldpassword+'/'+this.form.password+'?accesstoken='+this.token)
      if(resData.code == '200'){
        this.$message('删除成功')
        this.getDepartInfo();
      }else {
        this.$message(resData.msg)
      }
    }

  }
}
</script>

<style scoped  lang="sass">
.el-dialog__header
  background: #2476E9
  .el-dialog__title
    font-size: 14px
    color: #fff
  .el-dialog__headerbtn
    .el-dialog__close
      color: #fff
.el-dialog__body
  padding: 0


.userTool
  padding: 20px 40px
  color: #fff
  text-align: center
  float: right
  font-size: 14px
  text-decoration: none
  position: relative
  z-index: 1
  cursor: pointer
  &:before
    background: url(../assets/image/default_portrait.png) left center
    content: ''
    position: absolute
    top: 15px
    left: 0
    display: block
    width: 30px
    height: 30px
    background-size: 30px
  &:after
    background: url(../assets/image/pack@2x.png) center center
    content: ''
    position: absolute
    top: 29px
    right: 11px
    display: block
    width: 13px
    height: 6px
    background-size: 13px 6px
  .toolWalp
    position: absolute
    top: 45px
    right: 20px
    background: none
    .tool
    .arrow
      background: url("../assets/image/topArrow@2x.png") no-repeat
      background-size: 20px 8px
      position: absolute
      top: 17px
      left: 101px
      width: 20px
      height: 8px
    .tool ul
      margin-top: 25px
      background: #313E69
      padding: 0 5px
      width: 130px
      border-radius: 8px
      display: block
      li
        font: 12px/40px 'PingFangSC-Regular'
        color: #fff
        text-align: center
        border-bottom: 1px solid #827d7d
        cursor: pointer
        a
          color: #fff

.cl:after, .clearfix:after
  content: "."
  display: block
  height: 0
  clear: both
  visibility: hidden

.cl, .clearfix
  zoom: 1

.north
  position: fixed
  width: 100%
  height: 60px
  top: 0
  left: 0
  color: #fff
  font-size: 14px
  z-index: 1000
  min-width: 980px
  background: #313E69
  padding: 0 10px
  .logo
    float: left
    padding: 14px
    img
      width: 57px
      height: 32px
  .user
    padding: 10px 40px
    margin: 10px 10px
    color: #fff
    text-align: center
    float: right
    font-size: 14px
    text-decoration: none
    position: relative
    &:before
      background: url(../assets/image/default_portrait.png) left center
      content: ''
      position: absolute
      top: 5px
      left: 0
      display: block
      width: 30px
      height: 30px
      background-size: 30px
    &:after
      background: url(../assets/image/pack_up.png) left center
      content: ''
      position: absolute
      top: 15px
      right: 11px
      display: block
      width: 12px
      height: 12px
      background-size: 12px
.modifyWin
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
#modifyPassword
  width: 400px
  height: 250px
  background: #fff
  z-index: 2
  position: relative

.modifyWin
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
