<template lang="html">
  <div class="section-movie-celebrities">
      <ul class="movie-celebrities">
        <li v-for="(cast,index) in casts">
          <a href="">
            <img :src="cast.avatars.small" alt="">
            <span>{{cast.name}}</span>
          </a>
        </li>
      </ul>
      <a href="javascript:;" class="all-celebrities" @click="showCast(castsid)">全体演职人员 <i class="fa fa-angle-right"></i></a>
  </div>
</template>

<script>
export default {
  props:['casts','castsid'],
  data:function(){
    return {
    }
  },
  methods:{
    showCast(id){
      const path="/cast/"+id;
      this.$router.push({
        path:path
      })
    }
  }
}
</script>

<style lang="css">
.section-movie-celebrities{
  margin: 0.3rem 0;
  background: #fff;

}
.movie-celebrities{
  border-bottom: 1px solid #ccc;
  padding: 0.4rem 0.2rem;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  box-sizing: border-box;
}
.movie-celebrities::-webkit-scrollbar{
  height:0!important;
}
.movie-celebrities li{
  display: inline-block;
  margin-right: 0.2rem;
}
.movie-celebrities li:last-child{
  margin-right: 0;
}
.movie-celebrities li a{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
}
.movie-celebrities li span{
  font-size: 0.3rem;
  display: block;
  text-align: center;
  color: #000;
  margin-top: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.all-celebrities{
  display: flex;
  justify-content: space-between;
  font-size: 0.4rem;
  color: #666;
  padding: 0.2rem 0.2rem;
  text-decoration: none;
}
.all-celebrities i{
  color: #aaa;
  font-size: 0.5rem;
}
</style>
