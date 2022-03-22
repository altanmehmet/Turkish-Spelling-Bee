<template>
  <div class="home">
    <div class="info"> 
      <div class = "headLoc"> 
    <h1 class="title"> Spelling Bee Türkçe </h1>
    </div>
     
     <div>
     <h3  @click="openModal" class="side_text"> Nasıl Oynanır? </h3>
     </div>
     </div>
     <ui-divider></ui-divider>
     <img src="@/assets/ari.png" class="image" />
    <GamePage />
  </div>
</template>

<script>
// @ is an alias to /src
import GamePage from '@/components/GamePage.vue'

export default {
  name: 'HomeView',
  components: {
    GamePage
  },
  methods : {
    openModal(){
      this.$swal.fire({
  title: 'Create words using letters from the hive.',
  text: "Words must contain at least 4 letters.Words must include the center letter.Our word list does not include words that are obscure, hyphenated, or proper nouns.No cussing either, sorry.Letters can be used more than once.",
})
    }
  }
}

</script>
<style scoped>
.headLoc{
  display: flex;
  margin-left: 42%;
}
.info{
  height: 100%;
  width: 100%;;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  
}
.side_text {
  margin-right: 5vh;
  display: flex;


}
.image {
  margin-top: 1%;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  width: 10vh;;
  height: 10vh;
}
.title {
  top: 0%;
  text-align: start;
  justify-content: center;
  /* position: absolute; */
 /* height: 40px; */
  
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
/* line-height: 45px; */
  display: flex;
  align-items: center;
}
</style>
