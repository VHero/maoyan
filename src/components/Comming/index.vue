<template lang="html">
<div>
  <v-header></v-header>
  <div class="movie-wrap" v-if="!loadding">
    <div class="movie-content">
      <ul class="movie-list">
        <li @click="moreMsg(item.id)" v-for="(item,id) in theaters">
          <img :src="item.images.small" :alt="item.title">
          <div class="description">
            <p class="title">{{item.title}}</p>
            <p class="author">导演:<span>{{item.directors[0].name}}</span></p>
            <p class="actor">演员:<span>{{item.casts[0].name}}, {{item.casts[1].name}}</span></p>
          </div>
          <div class="score">
            <p class="average">{{item.rating.average}}</p>

          </div>
        </li>
      </ul>
    </div>
  </div>
  <div  v-if="loadding">
     <loadding></loadding>
  </div>

</div>
</template>

<script>
import vHeader from "../Header"
import loadding from '../Loadding'
export default {
  name: 'comming',
  data () {
    return {
      loadding:true,
      theaters:[]
    }
  },
  components:{
    'v-header':vHeader,
    'loadding':loadding
  },
  mounted: function () {

  },
  methods:{
    moreMsg:function(id){
      const path="/movie/"+id;
      this.$router.push({
        path:path
      });
    }
  },
  created:function(){
    this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon')
        .then(function (data) {
          console.log(data);
          this.theaters=data.body.subjects;
          this.loadding=false;
        })
        .catch(function (response) {
          console.log(response)
        })
  }
}
</script>

<style lang="css">
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
.movie-list li{
  display: flex;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc;
}
.movie-list li img{
  flex:1;
  width: 2rem;
  height: 2.6rem;
}
.movie-list li .description{
  margin-left: 0.3rem;
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: space-around;
}
.movie-list li .description p{
  font-size: 0.24rem;

}
.movie-list li .score{
  display: flex;
  flex:1;
  flex-direction: column;
  margin-top: 0.4rem;
}
.movie-list li .score p{
  font-size: 0.36rem;
}

.movie-list li .score .average{
  font-size: 0.48rem;
  color: #ff9a00;
  font-weight: bold;
}

.movie-list li .description .title{
  font-size: 0.36rem;
  font-weight: bold;
}
</style>
