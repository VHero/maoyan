<template lang="html">
  <div class="comment">
    <div class="comment-header">
      <div class="rating">
        <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>
      </div>
      <time>{{comment.created_at}}</time>
    </div>
    <div class="comment-content">
      <p>{{comment.content}}</p>
    </div>
    <div class="comment-footer">
      <img :src="comment.author.avatar" :alt="comment.author.alt">
      <p class="name">{{comment.author.name}}</p>
      <p class="comment-like"><i class="fa fa-thumbs-o-up"></i><span>{{comment.useful_count}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props:['comment']
}
</script>

<style lang="css">
.comment-header{
  display: flex;
  margin:0.2rem 0;
}
.rating{
  color: #ffc600;
  font-size: 0.36rem;
}
.comment-header time{
  font-size: 0.36rem;
  color: #999;
  margin-left: 0.3rem;
}
.comment-content{
  margin: 0.2rem 0;
}
.comment-content p{
  font-size: 0.36rem;
  color: #333;
  line-height: 0.5rem;
}
.comment-footer{
  display: flex;
  margin: 0.2rem 0;
  align-items: center;
}
.comment-footer img{
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}
.comment-footer .name{
  font-size: 0.36rem;
  color: #333;
  margin-left: 0.4rem;
  flex:2;
}
.comment-like{
  display: flex;
  align-items: center;
}
.comment-like span{
  font-size: 0.36rem;
}
.comment-like i{
  font-size: 0.4rem;
  margin-right: 0.2rem;
}

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
  width: 100%;
}
.comment-more{
  display: block;
  color: #e54847;
  text-align: center;
  font-size: 0.4rem;
  padding: 0.3rem 0;
}
</style>
