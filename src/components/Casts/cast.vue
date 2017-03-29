<template lang="html">
  <div class="cast-item" >
      <img :src="avatar.large" alt="">
      <div class="cast-article">
        <p class="name">{{castname}}</p>
        <p class="name-en">{{castenname}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    castname:{
      type:String,
    },
    castenname:{
      type:String,
    },
    avatar:{
      type:Object,
      default:function(){
        return {
          large:''
        }
      }
    },
    castid:{
      type:String,
      require:true
    }
  }
}
</script>

<style lang="css">
.cast-item{
  display: flex;
  padding: 0.22rem 0.2rem;
  border-bottom: 1px solid #ccc;
}
.cast-item  img{
  width: 2rem;
  height: 2.8rem;
}
.cast-article{
  display: flex;
  flex-direction: column;
}
.cast-article p{
  font-size: 0.3rem;
  margin-left: 0.3rem;
  line-height: 0.5rem;
}
.cast-article .name{
  font-weight: bold;
  font-size: 0.36rem;
}
.cast-article .name-en{
}
.cast-article .sex{
  margin-top: 0.2rem;
}
.cast-article .born{
  margin-top: 0.4rem;
}
</style>
