<template lang="html">
  <div>
    <section class="movie-detail-wrap">
        <div class="movie-background" :style="{background:moviebg}"></div>
        <div class="movie-filter"></div>
        <div class="movie-container">
          <div class="movie-img-left">
            <img :src="movieDetail.image" alt="">
          </div>
          <div class="movie-article-right">
            <h3 class="movie-title">{{movieDetail.title}}</h3>
            <p>{{movieDetail.original_title}}</p>
            <p>人均评分: <span>{{movieDetail.average}}</span></p>
            <p class="movie-genres">
              {{movieDetail.genres.join(', ')}}
            </p>
            <p>上映时间: <span>{{movieDetail.pubdate}}</span></p>
            <p>时长: <span>{{movieDetail.durations}}</span></p>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  props:['movieDetail','moviebg']
}
</script>

<style lang="css">
.movie-detail-wrap{
  position: relative;
}
.movie-background{
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(.6rem);
    background-size: cover;
    background-image: gray;
    background-repeat: no-repeat;
    background-position-y: 40%;
    z-index: 0;
}
.movie-filter{
  position: absolute;
  width: 100%;
  height: 100%;
  /*rgba(64,69,77,0.55);*/
  background-color: rgb(64, 69, 77,0.55);
}
.movie-container{
  position: relative;
  display: flex;
  padding: 0.3rem 0.4rem;
  color: #fff;
}
.movie-container .movie-img-left{
  margin-right: 0.4rem;
}
.movie-container .movie-img-left img{
  border: 1px solid #fff;
  display: block;
  width: 2rem;
}
.movie-container .movie-article-right{
  flex:1;
  font-size: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.movie-article-right .movie-title{
  font-size: 0.4rem;
  font-weight: bold;
}
.movie-genres span{
  display: inline-block;
  margin-right: 0.2rem;
}
</style>
