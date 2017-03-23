<template lang="html">
  <div>
    <header class="clearfix">
      <i class="fa fa-angle-left back" @click="back"></i>
      <p class="detail-title">{{title}}</p>
    </header>
  </div>
</template>

<script>
export default {
  props:['title'],
  methods:{
    back:function(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css">
.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.clearfix{*zoom:1;}
header{
  background: #e54847;
  height: 1.2rem;
  line-height: 1.2rem;
  position: relative;
  z-index: 2;
}
header .back{
  height: 1.2rem;
  line-height: 1.2rem;
  margin-left: 0.2rem;
  color: #fff;
  position: absolute;
  z-index: 2;
}
header .detail-title{
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
  font-weight: bold;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
}
.movie-description{
  padding: 0.3rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
