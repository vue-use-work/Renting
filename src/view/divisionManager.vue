<style lang="sass" scoped>
  @import "../assets/sass/addApartment.sass"

  .data-containers
    margin-left: 13px
    margin-right: 13px
  .build_basic
    margin-top: 20px

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
    background: url(../assets/image/radio_unselect@2x.png) no-repeat 9px 3px
    background-size: 20px
    vertical-align: middle
    margin-right: 5px
  input[type="radio"]:checked + label::before
    background: url(../assets/image/radio_select@2x.png) no-repeat 9px 3px
    background-size: 20px

</style>

<template>
  <div style="width: 100%;">
    <head-top></head-top>
    <menu-left></menu-left>
    <!--content-->
    <div class="content2" style="padding: 0 0 0 13px">
      <h1 class="topBar clearfix">
        <span class="fl">权限</span>
        <span class="point">·</span>
        <span class="fl">部门管理</span>
      </h1>

      <div class="data-containers">
        <div class="build_basic">
          <div class="formTitle clearfix">
            <span><h1>填写部门信息</h1></span>
            <span>（*为必填项）</span>
          </div>
          <form>
            <table class="table" style="border: 1px">
              <tr>
                <td class="tabLeft">部门名称：</td>
                <td class="tabCenter"><input v-model="apartName" maxlength="30" type="text" placeholder="请输入部门名称"/></td>
                <td class="tabRight">*</td>
              </tr>
              <tr>
                <td class="tabLeft">部门负责人：</td>
                <td class="tabCenter"><input v-model="apartAddress" maxlength="30" type="text" placeholder="请输入负责人姓名"/>
                </td>
                <td class="tabRight">*</td>
              </tr>
              <tr>
                <td class="tabLeft">负责人电话：</td>
                <td class="tabCenter"><input v-model="contact" maxlength="10" type="text" placeholder="请输入负责人手机号" @blur=""/></td>
                <td class="tabRight">*</td>
              </tr>
              <tr >

                <td class="tabLeft">状态：</td>
                <td colspan="2" class="tabLeft33" style="padding-left: 12px">
                  <input id="open" name="roleStatus" type="radio" checked />
                  <label class="bt" for="open" style="width: 77px">启用</label>
                  <input id="close" name="roleStatus" type="radio" />
                  <label class="bt" for="close" style="width: 77px">关闭</label>
                </td>

              </tr>
              <tr>
                <td class="tabLeft"></td>
                <td class="tabCenter">
                  <div class="btn_next">
                    <input type="button" value="保存" @click=""/>
                  </div>
                </td>
                <td class="tabRight"></td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '../components/header.vue'
  import menuLeft from '../components/nav.vue'
  import axios from '../http/axios'

  export default {
    data() {
      return {
        value: '',
        apartName: '',
        apartAddress: '',
        contact: '',
        phoneNum: '',
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {

      selectThreeMenu: {}
    },
    components: {
      headTop,
      menuLeft
    }
  }
</script>

