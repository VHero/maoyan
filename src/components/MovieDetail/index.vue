<template lang="html">
  <div>
    <div class="detail-content"  v-if="!loadding">
      <detailheader v-bind:title="movieDetail.title"></detailheader>
      <moviecontent v-bind:movieDetail="movieDetail" v-bind:moviebg="moviebg"></moviecontent>

      <moviesummary v-bind:summary="movieDetail.summary" :reviews_count="movieDetail.reviews_count" :wish_count="movieDetail.wish_count"></moviesummary>
      <celebrities v-bind:casts="movieDetail.casts"></celebrities>
      <div class="movie-comment">
        <h3 class="comment-title">短评</h3>
        <ul class="comment-wrap">
          <li v-for="(comment,index) in movieDetail.popular_comments">
            <comment v-bind:comment="comment"></comment>
          </li>
        </ul>
        <a href="" class="comment-more">查看全部短评<span>{{movieDetail.popular_comments.length}}</span>条短评</a>
      </div>
      <icp></icp>
    </div>
    <div  v-if="loadding">
       <loadding></loadding>
    </div>
  </div>

</template>

<script>
import detailheader from '../Header/detailheader.vue'
import celebrities from '../Celebrities'
import comment from '../Comment'
import loadding from '../Loadding'
import moviecontent from '../MovieContent'
import icp from '../Footer'
import moviesummary from '../Summary'
export default {
  name: 'MovieDetail',
  data: function() {
    return {
      movieDetail: {
        'rating': {
          'max': '',
          'average': '',
          'details': {
            '1': '',
            '3': '',
            '2': '',
            '5': '',
            '4': ''
          },
          'stars': '',
          'min': 0
        },
        trailer_urls: [],
        collect_count: '',
        'wish_count': '',
        'reviews_count': '',
        'images': {
          'small': '',
          'large': '',
          'medium': ''
        },
        'alt': '',
        'year': '',
        'pubdates': [],
        'id': '',
        'pubdate': '',
        'title': '',
        'languages': [],
        'countries': [],
        'writers': [{
            'avatars': {
              'small': '',
              'large': '',
              'medium': ''
            },
            'name_en': '',
            'name': '',
            'alt': '',
            'id': ''
          },
          {
            'avatars': {
              'small': '',
              'large': '',
              'medium': ''
            },
            'name_en': '',
            'name': '',
            'alt': '',
            'id': ''
          }
        ],
        'casts': [{
          'avatars': {
            'small': '',
            'large': '',
            'medium': ''
          },
          'name_en': '',
          'name': '',
          'alt': '',
          'id': ''
        }],
        'summary': '',
        'directors': [{
          'avatars': {
            'small': '',
            'large': '',
            'medium': ''
          },
          'name_en': '',
          'name': '',
          'alt': '',
          'id': ''
        }],
        'durations': [],
        'genres': [],
        popular_comments: [{
          rating: {
            max: '',
            min: '',
            value: ''
          },
          author: {
            uid: '',
            avatar: '',
            name: ''
          },
          content: '',
          create_at: ''
        }],
        comments_count: '',
        popular_reviews: ''
      },
      loadding: true,
      moviebg: ''
    }
  },
  components: {
    'detailheader': detailheader,
    'comment': comment,
    'celebrities': celebrities,
    'loadding': loadding,
    'moviecontent':moviecontent,
    'icp':icp,
    'moviesummary':moviesummary
  },
  created: function() {
    const path = 'https://api.douban.com/v2/movie/subject/' + this.$route.params.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd'
    this.$http.jsonp(path)
      .then(
        (response) => {
          console.info(response.body);
          this.loadding = false;
          this.movieDetail = response.body;
          this.movieDetail.average = response.body.rating.average;
          this.movieDetail.image = response.body.images.medium;
          this.movieDetail.durations = response.body.durations[0];
          this.movieDetail.genres = response.body.genres;
          this.moviebg=`url(${response.body.images.large})`;
        }
      )
  },

}
</script>

<style lang="css">


.movie-comment{
  background: #fff;
}
.comment-title{
  padding: 0.2rem;
  font-size: 0.4rem;
  color: #666;
  font-family: '微软雅黑';
  font-weight: bold;
  border-bottom: 1px solid #e5e5e5;
}
.comment-wrap{
  padding: 0.2rem;
}
.comment-wrap li{
  border-bottom: solid #e5e5e5 1px;
}
.comment-more{
  display: block;
  color: #e54847;
  text-align: center;
  font-size: 0.4rem;
  padding: 0.3rem 0;
}


</style>
