<template lang="html">
  <div>
    <detailheader v-bind:title="title"></detailheader>
    <div class="search">
      <div class="search-wrap">
        <label for="">
          <input type="text" class="inputer" v-model="query">

            <i class="fa fa-search" @click="search"></i>

        </label>
        <div class="hot-search">
          <p>热门搜索</p>
          <ul class="hot-movie">
            <li v-for="(item,index) in hotSearch" @click="hotMovie(item.id)">
              {{item.name}}
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import detailheader from '../Header/detailheader.vue'
export default {
  name:'search',
  components:{
    'detailheader': detailheader,
  },
  data(){
    return {
      title:'猫眼电影',
      searchcontent:'',
      query:'',
      hotSearch:[
      {name: '金刚狼3', id: '25765735'},
      {name: '一条狗的使命', id: '6873143'},
      {name: '生化危机:终章', id: '20471852'},
      {name: '乐高蝙蝠侠', id: '26145033'},
      {name: '爱乐之城', id: '25934014'},
      {name: '欢乐好声音', id: '26354572'}]
    }
  },
  methods:{
    search(){
      this.$router.push({path: '/searchresult', query: { name: this.query }})
      this.query='';
    },
    hotMovie(id){
      const path = '/movie/' + id;
      this.$router.push({path:path});
    }
  }
}
</script>

<style lang="css">
.search{
  background: #f4f4f4;
  height: 20rem;
}
.search-wrap{
  padding-top: 0.4rem;
}
.search-wrap label{
  display: flex;
  padding:0 0.2rem;
}
.search-wrap label input{
  border: none;
  border-radius: 20px;
  height: 0.8rem;
  line-height: 0.8rem;
  flex:4;
  padding: 0 0.2rem;
  font-size: 0.4rem;
}
.search-wrap label  i{
  font-size: 0.6rem;
  margin-left: 0.4rem;
  display: flex;
  align-items: center;
  color: #e54847;
}
.hot-search{
  margin-top: 0.4rem;
  padding: 0 0.2rem;
}
.hot-search p{
  font-size: 0.5rem;
}
.hot-movie {
  margin-top: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
.hot-movie li{
  display: block;
  width: 30%;
  padding: 0 1%;
  font-size: 0.4rem;
  background-color: #fff;
  border-radius: 10px;
  color: #e54847;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.2rem;
}
</style>
