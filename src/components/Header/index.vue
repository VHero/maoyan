<template lang="html">
  <div>
    <div class="v-header clearfix">
      <img src="../../assets/avatar.png" alt="" class="m-logo">
      <div class="m-title">
        <h2 class="title">猫眼电影</h2>
        <p>在线选座，热门影讯，爱上看电影</p>
      </div>
      <div class="m-search">
        <!-- <i class="fa fa-search"></i> -->
        <router-link tag="i" to="/search" class="fa fa-search"></router-link>
      </div>
    </div>
    <div class="v-nav-bar clearfix">
      <router-link to="/" tag="a">正在热映</router-link>
      <router-link to="/comming" tag="a">即将上映</router-link>
    </div>
  </div>


</template>

<script>

export default {

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
.v-header{
  background-color: #f7f7f7;
  height: 1.24rem;
  padding: 0.24rem 0.3rem;
}
.m-logo{
  width: 1.24rem;
  float: left;
}
.m-title{
  margin-left: 0.5rem;
  float: left;
}
.title{
  font-size: 0.4rem;
  margin-top: 0.1rem;
  font-weight: bold;
}
.m-title p{
  font-size: 0.24rem;
  margin-top: 0.18rem;
}
.m-search{
  height: 1.24rem;
  float: right;

}
.m-search i{
  font-size: 0.6rem;
  margin-top: 0.3rem;
}
.v-nav-bar{
  height: 1.2rem;
  background-color: #df2d2d;
}
.v-nav-bar a{
  height: 100%;
  float: left;
  width: 50%;
  line-height: 1.2rem;
  font-size:16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  font-size: 0.4rem;
}
.v-nav-bar a:hover{
  text-decoration: none;
}
</style>
