<template>
  <div class="west">
    <ul class="ul1">
      <!--有二级菜单- -->
      <li class="li1" v-on:mouseover="overShow('yt')" v-on:mouseout="outHide('yt')">
        <a class="ab1" :class="{acb1:showTextYt}" href="javascript:;">业态</a>
        <ul class="ul2" v-show="showTextYt">
          <li class="li2"><router-link class="active2 a2" :to="{ name: 'district', params: { id: '00' }}">商业楼宇</router-link></li>
          <li class="li2"><router-link class="active2 a2" :to="{ name: 'district', params: { id: '01' }}">长租公寓</router-link></li>
          <li class="li2"><router-link class="active2 a2" :to="{ name: 'district', params: { id: '02' }}">居民住宅</router-link></li>
          <li class="li2"><router-link class="active2 a2" :to="{ name: 'addApart'}">添加业态</router-link></li>
          <li class="li2"><router-link class="active2 a2" :to="{ name: 'company'}">我的业态</router-link></li>
        </ul>
      </li>
      <!--一级菜单- -->
      <li class="li1">
        <a class="ab2"  href="javascript:;">服务</a>
      </li>
      <li class="li1">
        <a class="ab3" href="javascript:;">账务</a>
      </li>
      <li class="li1" v-on:mouseover="overShow('qx')" v-on:mouseout="outHide('qx')">
        <a class="ab4" :class="{acb1:showTextQx}" href="javascript:;">权限</a>
        <ul class="ul2" v-show="showTextQx">
          <li class="li2"><router-link class="active2 a2" :to="{ name: 'departManage'}">部门管理</router-link></li>
          <li class="li2"><router-link class="active2 a2" :to="{ name: 'staffManage'}">员工管理</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      campusType: 'campusType',
    })
  },
  data () {
    return {
      showTextYt: false,
      hideTextYt: true,
      showTextQx: false,
      hideTextQx: true
    }
  },
  methods: {
    chanceYt (id) {
      this.$store.dispatch('changeCampusType', id)
      console.log("nav:" + this.campusType)
    },
    overShow (child) {
      if(child == 'yt'){
        this.showTextYt = !this.showTextYt
        this.hideTextYt = !this.hideTextYt
      }else if(child == 'qx'){
        this.showTextQx = !this.showTextQx
        this.hideTextQx = !this.hideTextQx
      }

    },
    outHide (child) {
      if(child == 'yt'){
        this.showTextYt = !this.showTextYt
        this.hideTextYt = !this.hideTextYt
      }else if(child == 'qx'){
        this.showTextQx = !this.showTextQx
        this.hideTextQx = !this.hideTextQx
      }
    }
  }
}
</script>
<style scoped  lang="sass">
  @import "../assets/sass/common.sass"
</style>
