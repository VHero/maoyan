<template lang="html">
    <div class="loading">
       <span></span>
       <span></span>
       <span></span>
       <span></span>
       <span></span>
    </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
.loading{
     width: 83px;
     height: 40px;
     position: absolute;
     top: 50%;
     margin-top: -20px;
     left: 50%;
     margin-left: -42px;
 }
 .loading span{
     display: inline-block;
     width: 8px;
     height: 100%;
     border-radius: 4px;
     background: #df2d2d;
     -webkit-animation: load 1s ease infinite;
 }
 @-webkit-keyframes load{
     0%,100%{
         height: 40px;
         background-color: #df2d2d;
     }
     50%{
         height: 70px;
         margin: -15px 0;
         background-color:#e54847;
     }
 }
 .loading span:nth-child(2){
     -webkit-animation-delay:0.2s;
 }
 .loading span:nth-child(3){
     -webkit-animation-delay:0.4s;
 }
 .loading span:nth-child(4){
     -webkit-animation-delay:0.6s;
 }
 .loading span:nth-child(5){
     -webkit-animation-delay:0.8s;
 }
</style>
