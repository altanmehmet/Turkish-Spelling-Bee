<template>
  <div>
    <div class="split right">
      <div class="hive-actions">
          <div v-on:click="checkWord()" class="hive-action hive-action__submit sb-touch-button">Enter</div>
          <div v-on:click="delete_last_letter(this.value)" class="hive-action hive-action__delete sb-touch-button">Delete</div>
          <div v-on:click="refresh()" class="hive-action hive-action__shuffle sb-touch-button"></div></div>
      <div class="row" >
        <span id="category-text"><b>Puan : {{this.puan}}</b></span>
      <span id="category-text"><b>Bulunan Kelimeler</b></span>
      
      <!-- <div class="line"></div> -->
      <div class="content-2">
        <li class="list" v-for="(item) in scores" :key="item">
          {{item}}
        </li>
        
      </div>
    </div>
      </div>
    <div class = "split left">
      
        <section class="inputField" :dir="controls.rtl ? 'rtl' : null">
  <ui-textfield
    pattern=".{4,7}"
    class="userInput"
    v-model="value"
    :disabled="controls.disabled"
    :dense="controls.dense"
    :required="controls.required"
    :class="{'demo-text-field-custom-colors': controls.customColor}"
    helper-text-id="pw-validation-msg"
  >
    
  </ui-textfield>
  <ui-textfield-helper id="pw-validation-msg" class="userInputt" visible validMsg>
  Kelime en az 3, en fazla 7 karakterden oluşabilir.
  </ui-textfield-helper>
  
</section>
        
    <div class="sb-hive">
        <div class = "hive">
            
                <svg class="hive-cell center" viewBox="0 0 120 103.92304845413263"  v-on:click="add_to_text(firstCenter)">
                <polygon class="cell-fill-center" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5"></polygon>
                <text v-on="firstCenter" class="cell-letter" x="50%" y="50%" dy="0.35em">{{firstCenter}}</text></svg>

                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" v-on:click="add_to_text(secondOuter)">
                <polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5"></polygon>
                <text v-on="secondOuter" class="cell-letter" x="50%" y="50%" dy="0.35em">{{secondOuter}}</text></svg>

                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" v-on:click="add_to_text(thirdOuter)">
                <polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5"></polygon>
                <text v-on="thirdOuter" class="cell-letter" x="50%" y="50%" dy="0.35em">{{thirdOuter}}</text></svg>

                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" v-on:click="add_to_text(fourthOuter)">
                <polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5"></polygon>
                <text v-on="fourthOuter" class="cell-letter" x="50%" y="50%" dy="0.35em">{{fourthOuter}}</text></svg>

                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" v-on:click="add_to_text(fifthOuter)">
                <polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5"></polygon>
                <text v-on="fifthOuter" class="cell-letter" x="50%" y="50%" dy="0.35em">{{fifthOuter}}</text></svg>

                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" v-on:click="add_to_text(sixthOuter)">
                <polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5"></polygon>
                <text v-on="sixthOuter" class="cell-letter" x="50%" y="50%" dy="0.35em">{{sixthOuter}}</text></svg>

                <svg class="hive-cell outer" viewBox="0 0 120 103.92304845413263" v-on:click="add_to_text(seventhOuter)">
                <polygon class="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" stroke-width="7.5"></polygon>
                <text v-on="seventhOuter" class="cell-letter" x="50%" y="50%" dy="0.35em">{{seventhOuter}}</text></svg>
            
        </div>
        </div>
        
        
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

const modul = require('sozluk-api')
export default {
  name: 'HomeView',
  components: {
    
  },
  data(){
    return{
      value: '',
      controls: {
        disabled: false,
        rtl: false,
        dense: false,
        required: false,
        customColor: false,
        helperText: false,
        isVisible: false,
        isValidMsg: false
      },
        scores:[],
        puan:0,
        firstCenter:"",
        secondOuter:"",
        thirdOuter:"",
        fourthOuter:"",
        fifthOuter:"",
        sixthOuter:"",
        seventhOuter:"",
        letterCache : [],
        arraySilent:[],
        arrayVowels:[],
        letters : ['b', 'c','ç', 'd',  'f', 'g','ğ','h', 'j', 'k', 'l', 'm', 'n',
          'p','r', 's','ş', 't', 'v','y', 'z'],
        vowels : ['a','e','ı','i','o','ö','u','ü'],
    }
  },
  methods: {
    letterCacheCheck(){
      console.log(this.letterCache)
      let flag = 0
      console.log(this.value[0])
      
      for (let i = 0; i < this.value.length; i++) {
      
        for (let j = 0; j < this.letterCache.length; j++) {
            if(this.letterCache[j] == this.value[i] ){
              flag = 1
            }
              }
        if(flag == 0){
           return false
            }
      flag = 0
}
      return true
    },
    delete_last_letter(value){
      this.value = value.substring(0, value.length - 1);
    },
     add_to_text(text){
       this.value += text
     },
     async checkWord(){
      let kelime = await modul.tdk(this.value)
      console.log(kelime)
      console.log(this.value)
      if(kelime && this.letterCacheCheck()){
        this.$toast("Doğru" + " " + this.value.length + " " + "puan kazandınız!")
        this.puan += this.value.length
        this.scores.push(this.value)
        this.value = ""
        
      }
      else {
        this.$toast('Böyle bir kelime yok ya da kovanda olmayan bir harf kullandınız!')
        this.value = ""
        // alert("Kelime yanlış")
      }
      
     },
     refresh(){
       
      console.log(this.letterCache)
     },
     randomLetters(){
    while(this.arraySilent.length < 6){
      var r = Math.floor(Math.random() * 21);
      if(this.arraySilent.indexOf(r) === -1) this.arraySilent.push(r);
      }
      this.secondOuter = this.letters[this.arraySilent[0]]
      this.fourthOuter = this.letters[this.arraySilent[1]]
      this.fifthOuter = this.letters[this.arraySilent[3]]
      this.sixthOuter = this.letters[this.arraySilent[4]]
      this.seventhOuter = this.letters[this.arraySilent[5]]
      for (let i = 0; i < this.arraySilent.length; i++) {
        this.letterCache.push(this.letters[this.arraySilent[i]])
      }
     },
     randomLettersVowels(){
    while(this.arrayVowels.length < 2){
      var r = Math.floor(Math.random() * 8);
      if(this.arrayVowels.indexOf(r) === -1) this.arrayVowels.push(r);
      }
      this.firstCenter = this.vowels[this.arrayVowels[0]]
      this.thirdOuter = this.vowels[this.arrayVowels[1]]
      this.letterCache.push(this.vowels[this.arrayVowels[0]])
      this.letterCache.push(this.vowels[this.arrayVowels[1]])

     },
    
  },
  mounted(){
        this.randomLetters();
        this.randomLettersVowels();
      
       
  },
  
}
</script>
<style scoped >
@charset "utf-8";
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  /* overflow-x: hidden; */
  padding-top: 20px;
}

/* Control the left side */
.left {
  top:5%;
  left: 0;
  display:flex;
  flex-direction: column;
  
}

/* Control the right side */
.right {
  display:flex;
  flex-direction: row;
  top:10%;
  right: 0;
}

.inputField{
  margin:3%;
}
.content-2 {
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    /* margin-right: 0px !important; */
    margin-top: 5px;
    width: 60% !important;
    margin-left:20%;
    
    border: 2px solid rgb(155, 155, 155);
    border-radius: 5px;
    box-shadow: 5px 5px 15px 5px rgb(139, 139, 139);
  }
.list {
    list-style: none;
  }
  #category-text {
    position: relative;
    font-family: NouvelR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 35px;
  }
.row {
    overflow: hidden;
    overflow-y: scroll;
    height: 100% !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* margin-left: 6px;
  margin-right: 6px; */
  }
.userInput{
  margin-top:5%;
  z-index:3;
  width: 60%;
  font-weight: bold;
  display:flex;
  margin-left:20%;
}
.userInputt{
  display:flex;
  margin-left:20%;
  width: 60%;
  margin-top:0%;
}
.sb-hive-input-content::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 2px;
    height: 1.25em;
    background: #f7da21;
    -webkit-animation: 1000ms blink step-end infinite;
    animation: 1000ms blink step-end infinite;
}
.sb-hive-hidden-input .sb-hive-input-content {
    visibility: hidden;
}
.sb-hive-input-content {
    height: 100%;
    display: inline-block;
    position: relative;
    transform: translateY(0%);
    min-width: 1px;
}
.sb-hive-hidden-input {
    overflow: hidden;
    pointer-events: none;
}
.sb-hive-input {
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: .5px;
    text-rendering: optimizeLegibility;
    line-height: 1.25;
    height: 1.25em;
    width: 100%;
    font-size: 2em;
    padding-top: 2px;
    text-align: center;
    position: relative;
}
.hive-actions {
    /* text-align: center; */
    display: flex;
    right:45%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    top:27%; 
    /* flex-wrap: nowrap; */
    position: absolute;
    width: 60%;
}
.hive-actions .hive-action__submit {
    order: 3;
}
.hive-actions .hive-action__delete {
    order: 1;
}
.hive-actions .hive-action__shuffle {
    order: 2;
}
.hive-action__shuffle {
    background: center no-repeat;
    background-size: 60%;
    background-image: url("repeat.png");
    height: 2em;
    width: 2em;
    min-width: 2em;
}
.hive-action {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 15px 0; */
    width: 4em;
    min-width: 6em;
    height: 4em;
    background-color: white;
    font-size: 0.8em;
    margin: 8 8px;
    color: #333;
    border: 1px solid #dcdcdc;
    border-radius: 2.5em;
    letter-spacing: 0.01em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
}
.hive-cell {
    position: absolute;
    top: calc(100% / 1.7);
    left: 45%;
    width: 40%;
    height: calc(100% / 3);
    }
.sb-hive {
    /* width: 100%; */
    /* margin: 25px auto; */
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.hive{
    position: relative;
    
    width: 60%; 
    margin-left:12%;
    margin-top:-20%; 
    padding-bottom: 65.92305%;

}
.hive-cell:nth-child(5) {
    transform: translate(75%, 50%);
}
.hive-cell:nth-child(3) {
    transform: translate(0, -100%);
}
.hive-cell:nth-child(1) {
    transform: translate(0, 0);
}
.hive-cell:nth-child(2) {
    transform: translate(-75%, -50%);
}
.hive-cell:nth-child(4) {
    transform: translate(75%, -50%);
}
.hive-cell:nth-child(6) {
    transform: translate(0, 100%);
}
.hive-cell:nth-child(7) {
    transform: translate(-75%, 50%);
}
.hive-cell .cell-fill {
    cursor: pointer;
    fill: #e6e6e6;
    transition: all 100ms;
}
.hive-cell .cell-fill-center {
    cursor: pointer;
    fill: #e6e6e6;
    transition: all 100ms;
}
.hive .cell-letter {
    font-weight: 700;
    font-size: 1.875em;
    text-anchor: middle;
    /* text-transform: capitalize; */
    pointer-events: none;
}
</style>
