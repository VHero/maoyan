<template lang="html">
<div>
  <section class="summary-content">
    <div class="detail-count">
      <button><i class="fa fa-user-o"></i>{{reviews_count}}人想看</button>
      <button><i class="fa fa-user-o"></i>{{wish_count}}人看过</button>

    </div>
    <div class="summary-wrap">
      <div class="summary" v-bind:style="summaryStyle" ref="summary">
        {{summary}}
      </div>
      <a href="javascript:;" class="more" @click="showSummary"><i class="fa" v-bind:class="{ 'fa-angle-down': isMoreMsg,'fa-angle-up':!isMoreMsg}"></i></a>
    </div>

  </section>
</div>
</template>

<script>
export default {
  props: ['summary', 'reviews_count', 'wish_count'],
  data:function(){
    return {
      summaryStyle:{
        maxHeight:'1.6rem'
      },
      isMoreMsg:true
    }
  },
  methods: {
    showSummary: function() {
      if (this.isMoreMsg) {
        this.$refs.summary.style.maxHeight = '100rem';
        this.isMoreMsg = false;
      } else {
        this.$refs.summary.style.maxHeight = '1.6rem';
        this.isMoreMsg = !this.isMoreMsg;
      }
    }
  }
}
</script>

<style lang="css">
.detail-content{
  background: #f4f4f4;
}
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

.detail-count{
  display: flex;
  justify-content: space-around;
}
.detail-count button{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
  background: #e54847;
  border: none;
  width: 3rem;
  height: 1rem;
  border-radius: 5px;
  color: #fff;
}
.detail-count button i{
  margin-right: 0.1rem;
}
.summary-content{
  background: #fff;
  padding-top: 0.2rem;
  position: relative;
  z-index: 2;
}
.summary-wrap{

}
.summary-wrap .summary{
  display: flex;
  padding: 0.2rem;
  font-size: 0.3rem;
  line-height: 0.6rem;

  overflow: hidden;
  text-overflow: ellipsis;
}
.summary-wrap .more{
  color: #e54847;
  display: flex;
  justify-content: center;
  text-decoration: none;
}
</style>
