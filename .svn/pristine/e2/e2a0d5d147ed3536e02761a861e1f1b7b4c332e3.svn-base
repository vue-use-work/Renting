<style lang="sass" scoped>
  @import "../../assets/sass/addApartment.sass"

  .data-containers
    margin-left: 13px
    margin-right: 13px
  .build_basic
    margin-top: 20px
  .save
    width: 160px
    line-height: 18px!important
    height: 38px !important
    background-color: #2476E9
    color: white
    margin-left: 50px

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
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm departAdd" style="padding-top: 20px">
            <el-form-item label="部门名称：" prop="departName">
              <el-input v-model="ruleForm.departName" placeholder="请输入部门名称"></el-input>
            </el-form-item>
            <el-form-item label="部门负责人：" prop="departManager">
              <el-input v-model="ruleForm.departManager" placeholder="请输入部门负责人"></el-input>
            </el-form-item>
            <el-form-item label="负责人电话：" prop="managerPhone">
              <el-input v-model="ruleForm.managerPhone" placeholder="请输入负责人电话"></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="status">
              <el-radio-group v-model="ruleForm.status">
                <el-radio :label="1">启动</el-radio>
                <el-radio :label="0">关闭</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button class="save" @click="addDepart" >保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '../../components/header.vue'
  import menuLeft from '../../components/nav.vue'
  import axios from '../../http/axios'

  export default {
    data() {
      let checkPhone = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('手机号码不能为空'));
        }else if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value))){
          return callback(new Error('请输入正确手机号码'));
        }else{
          callback()
        }
      };
      return {
        token: sessionStorage.getItem("token"),
        companyId: this.$route.query.companyId || undefined,
        ruleForm:{
          departName: '',
          departManager: '',
          managerPhone: '',
          status: 1
        },
        rules: {
          departName: [
            { required: true, message: '请输入部门名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          departManager: [
            { required: true, message: '请输入部门负责人', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          managerPhone: [
            { required: true, message: '请输入负责人电话', trigger: 'blur' },
            { validator: checkPhone, trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      if(this.companyId != undefined)
        this.getDepart()
      console.log("token:"+ this.token)
    },
    mounted() {
      console.log(this.companyId)
    },
    methods: {
      getDepart: async function() {
        let data = {
          'id': this.companyId[0]
        }
        const resData = await axios.post('/api/departs/?accesstoken='+this.token,data)
        if(resData.code == '400'){
          this.$message(resData.msg)
        }
        this.form = resData.data[0]
      },
      addDepart: async function() {
        this.ruleForm.status == 1 ? this.ruleForm.status = 'O' : this.ruleForm.status = 'C'
        if(this.companyId == undefined){
          const resData = await axios.post('/api/departs?accesstoken='+this.token,this.ruleForm)
          if(resData.code == '400'){
            this.$message(resData.msg)
          }else if(resData.code == '200'){
            this.$router.push({ path: '/departManage'});
          }
        }else {
          const resData = await axios.put('/api/departs/'+this.companyId+'?accesstoken='+this.token,this.ruleForm)
          if(resData.code == '400'){
            this.$message(resData.msg)
          }else if(resData.code == '200'){
            this.$router.push({ path: '/departManage'});
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
