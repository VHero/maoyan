<template lang="html">
  <div>
    <div v-if="!loadding">
      <detailheader title="全体演职人员"></detailheader>
      <div class="castslist">
        <cast v-for="(item,index) in casts" :castname="item.name" :castenname="item.name_en" :avatar="item.avatars" :castid="item.id" key="item.id"></cast>
      </div>
    </div>
    <div  v-if="loadding">
       <loadding></loadding>
    </div>
  </div>

</template>

<script>
import detailheader from '../Header/detailheader'
import cast from '../Casts/cast'
import loadding from '../Loadding'
export default {
  data() {
    return {
      casts: {
        avatars: {
          small: "",
          large: "",
          medium: ""
        },
        name_en: "",
        name: "",
        alt: "",
        id: ""
      },
      loadding:true
    }
  },
  components: {
    'detailheader': detailheader,
    'cast': cast,
    'loadding':loadding
  },
  created() {
    const path = 'https://api.douban.com/v2/movie/subject/' + this.$route.params.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd';
    this.$http.jsonp(path)
      .then((response) => {
        this.casts = response.body.casts;
        this.loadding=false;
      })
  }
}
</script>

<style lang="css">
</style>
