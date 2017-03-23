<template lang="html">
  <div>
    <footer class="footer">
      <div class="copyright">© 猫眼电影</div>
      <p class="icp">京ICP备16022489号-1 京公网安备11010502030881号</p>
      <p class="company-name">北京猫眼文化传媒有限公司</p>
    </footer>
  </div>

</template>

<script>
export default {
  name:'footer'
}
</script>

<style lang="css">
.footer{
  padding: 0.5rem 0;
}
footer .company-name{
  font-size: 0.3rem;
  color: #ccc;
  text-align: center;
  margin: 0.2rem 0;
}
footer .copyright{
  font-size: 0.4rem;
  text-align: center;
  color: #333;
  margin: 0.2rem 0;
}
footer .icp{
  font-size: 0.3rem;
  color: #ccc;
  text-align: center;
}
</style>
