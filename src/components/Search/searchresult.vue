<template lang="html">
  <div>
      <detailheader :title="title"></detailheader>
      <div class="movie-list" v-if="!loadding">
        <h3>'{{this.val}}'的搜索结果共有{{search_result.total}}条</h3>
        <moviecontent v-for="(item,index) in search_result.subjects" :key="search_result.id" :directors="item.directors[0].name"  :casts="item.casts" :image="item.images.large" :title="item.title" :average="item.rating.average" :id="item.id"></moviecontent>
      </div>
      <div  v-if="loadding">
         <loadding></loadding>
      </div>
  </div>
</template>

<script>
import detailheader from '../Header/detailheader'
import moviecontent from '../MovieContent/moviecontent.vue'
import loadding from '../Loadding'
export default {
  data(){
    return {
      title:'猫眼电影',
      searchlist:['',''],
      search_result: {
        total: '',
        subjects: [{
          rating: {
            max: '',
            average: ''
          },
          genres: [],
          title: '',
          year: '',
          images: {
            small: '',
            large: '',
            medium: ''
          },
          directors: [{
            name: ''
          }],
          casts: [{
            name: '',
            id: ''
          }],
          collect_count: '',
          alt: '',
          id: ''
        }]
      },
      loadding:true,
      val:''
    }
  },
  components:{
    'detailheader':detailheader,
    'moviecontent':moviecontent,
    'loadding':loadding
  },
  created(){
    this.showSearch();
  },
  methods:{
    showSearch(){
      this.val = this.$route.query.name;
      const searchurl='https://api.douban.com/v2/movie/search?q=' + this.val;
      this.$http.jsonp(searchurl)
      .then(response=>{
        this.search_result=response.body;
        this.loadding=false;
        console.log(response);
      })
    }
  }

}
</script>

<style lang="css">
.movie-list h3{
  font-size: 0.4rem;
  padding: 0.43rem 0.2rem;
  text-align: center;
  font-weight: bold;
  background-color: #f2fbfb;
}
</style>
