<template lang="html">
  <div>
      <detailheader :title="title"></detailheader>
      
  </div>
</template>

<script>
import detailheader from '../Header/detailheader'
export default {
  data(){
    return {
      title:'猫眼电影'
    }
  },
  components:{
    'detailheader':detailheader
  }
}
</script>

<style lang="css">
</style>
