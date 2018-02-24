<style lang="sass" scoped>
@import "../assets/sass/login.sass"
#app
  padding: 0!important
</style>

<template>
  <div class="data-container">
    <section class="login">
      <div class="box">
        <img src="../assets/image/logobtn@2x.png"/>
        <h4 style="">幸会&nbsp·&nbsp物业</h4>
        <el-form ref="form" :model="userFrom" class="con">
          <el-form-item label="" class="form-group">
            <el-input v-model="userFrom.userName" placeholder="手机号/登录账号"></el-input>
          </el-form-item>
          <el-form-item label="" class="form-group" style="margin-bottom:0px">
            <el-input v-model="userFrom.passwd" placeholder="密码" type="password"></el-input>
          </el-form-item>
          <el-form-item class="form-group">
            <el-checkbox v-model="userFrom.checked">记住密码</el-checkbox>
          </el-form-item>
          <el-form-item class="form-group" style="margin-bottom:5px">
            <button id="login_btn" @click="login()" type="button">登录</button>
          </el-form-item>
          <el-form-item class="form-group">
            <span>联系客服：021-68746534</span>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data() {
      return {
        userFrom: {
          checked: true,
          userName:'',
          passwd:'',
        }
      }
    },
    methods: {
      ...mapActions([
        'userLogin'
      ]),
      login () {
        this.userLogin(this.userFrom)
      }
    }
  }
</script>
