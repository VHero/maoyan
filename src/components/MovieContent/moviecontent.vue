<template lang="html">
<div class="subject-content" @click="showSearchMsg(id)">
  <img :src="image" alt="">
  <div class="subject-description">
    <p class="subject-title">{{title}}</p>
    <p class="subject-director">导演: <span>{{directors}}</span></p>
    <p class="subject-actor">演员: <span v-for="(item,index) in actors">{{item.name}} </span></p>
  </div>
  <div class="movie-score">
  <p>{{average}}</p>
  </div>
</div>
</template>

<script>
export default {
  props:['directors','casts','image','title','average','id'],
  data(){
    return {
      actors:[]
    }
  },
  created(){
    this.actors=this.casts.splice(0,2);
  },
  methods:{
    showSearchMsg(id){
      const path="/movie/"+id;
      this.$router.push({
        path:path
      });

    }
  }
}
</script>

<style lang="css">
.subject-content{
  display: flex;
  padding: 0.2rem;
 border-bottom: 1px solid #ccc;
}
.subject-content img{
border: none;
flex: 1;
width: 2rem;
height: 2.6rem;
}
.subject-description{
  display: flex;
  flex: 3;
  justify-content: space-around;
  flex-direction: column;
  margin-left: 0.3rem;
}
.subject-description p{
  font-size: 0.24rem;
}
.subject-title{
  font-size: 0.36rem;
    font-weight: bold;
}
.subject-actor{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.movie-score{
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.movie-score p{
  font-size: 0.6rem;
  color: #ff9a00;
}
</style>
