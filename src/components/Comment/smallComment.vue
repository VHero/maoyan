<template lang="html">
  <div>
    <div v-if="!loadding">
      <detailheader :title="title"></detailheader>
      <div class="movie-comment">
        <ul class="comment-wrap">
          <li v-for="(comment,index) in smallComment.comments">
            <comment v-bind:comment="comment"></comment>
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
import detailheader from '../Header/detailheader.vue'
import comment from '../Comment'
import loadding from '../Loadding'
export default {
  data(){
    return{
      smallComment: {
        comments: [{
          rating: {
            max: '',
            value: ''
          },
          useful_count: '',
          author: {
            name: '',
            avatar: '',
            alt: '',
            signature: '',
            id: ''
          },
          created_at: '',
          content: ''
        }],
        total: '',
        subject: {
          title: ''
        }
      },
      title:'',
      loadding:true
    }
  },
  components:{
    'detailheader':detailheader,
    'comment':comment,
    'loadding':loadding
  },
  created(){
    const path='https://api.douban.com/v2/movie/subject/' + this.$route.params.id + '/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&count=40&client=something&udid=dddddddddddddddddddddd';
    this.$http.jsonp(path)
    .then((response)=>{
      this.smallComment=response.body;
      this.title="短评 - "+this.smallComment.subject.title;
      this.loadding=false;
    })
  }
}
</script>

<style lang="css">
</style>
