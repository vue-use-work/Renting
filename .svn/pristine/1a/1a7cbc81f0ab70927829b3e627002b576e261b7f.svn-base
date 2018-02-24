<template>
  <div class="data-container">
    <!--<a @click="addRoom()" href="javascript:;">添加</a>-->
    <div class="clearfix">
      <a @click="deleteRoom()" href="javascript:;">删除</a>
      <p class="fl">
        <input type="text" placeholder="手机号码" ref="roomNum"  @keyup="addRoomNum()" >
      </p>
      <p class="fl">
        <input type="text" placeholder="手机号码" ref="roomNum"  @keyup="addRoomNum()" >
      </p>
      <div class="roomLeft">
        <input v-for="(item, index) in totleNum" :key="index" v-model="totleNum[index]"  />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      totleNum: []
    }
  },
  methods: {
    addRoom() {
      this.showFirst = true
    },
    addRoomNum() {
      console.log( this.$refs.roomNum.value )
      let num = this.$refs.roomNum.value
      for (let i=0; i<=num; i++){
        this.totleNum.push('20' + i)
      }
      console.log(this.totleNum)
    },


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
