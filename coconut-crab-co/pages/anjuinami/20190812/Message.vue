<template>
  <section class="container">
    <div class="fixed-bg bg">
      <div class="cover-white">
        <div class="contents">
          <div style="height: 40px;"></div>
          <div>
            <h1 class="title">
                Dear 伊波杏樹 様
            </h1>
            <h2 class="subtitle">
              An seule étoile ～Rythme d'été～
            </h2>
            <h2 class="subtitle">
              From あなたのファンより
            </h2>
          </div>
          <div class="message-root">
            <div 
              class="balloon balloon-right"
              v-for="(message, index) in messages" 
              v-if="message.text.trim()"
              v-bind:key="index">
                <p class="message-area">{{message.text.trim()}}</p>
                <p v-if="message.name" class="name-area">by {{message.name.trim()}}</p>
            </div>
            <div class="message-bottom"></div>
          </div>
          <div class="links">
            <button class="button is-primary" v-on:click="clickBack()">戻る</button>
          </div>
          <div style="height: 54px;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: function() {
    return {
      title: "An seule étoile ～Rythme d'été～"
    };
  },
  data: function() {
    return {
      m: "",
      messages: []
    };
  },
  async asyncData({ $axios }) {
    const url =
      "https://firebasestorage.googleapis.com/v0/b/coconut-crab-co.appspot.com/o/anjuinami%2F20190812%2Fmessage%2Fmessage.txt?alt=media&token=d6b5be25-a56e-4abd-9855-b7ea8549b67e";
    const response = await $axios.get(url);
    console.log(response);
    return {
      m: response.data,
      messages: response.data.split(",").map(function(element, index, array) {
        var elements = element.split("||");
        return {
          text: elements[0],
          name: elements[1]
        };
      })
    };
  },
  mounted: function() {},
  methods: {
    clickBack: function() {
      console.log("clickBack");
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.title {
  font-family: "NamePop";
}

.button {
  display: table;
  text-align: center;
  margin: 4px auto;
}

.balloon {
  position: relative;
  padding: 12px;
  background-color: #afeeee;
  border: 2px solid #1e90ff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #a7a7a7;
}
.balloon::before {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  top: 8px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.balloon::after {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  top: 8px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.balloon-left {
  margin: 54px 72px 0 0;
}
.balloon-left::before {
  left: -15px;
  border-right: 15px solid #1e90ff;
}
.balloon-left::after {
  left: -12px;
  border-right: 15px solid #afeeee;
}
.balloon-right {
  margin: 54px 0 0 72px;
}
.balloon-right::before {
  right: -15px;
  border-left: 15px solid #1e90ff;
}
.balloon-right::after {
  right: -12px;
  border-left: 15px solid #afeeee;
}
.message-root {
  margin: 0 32px 0 108px;
}
.message-area {
  width: 100%;
  display: inline-block;
  text-align: left;
  font-size: 1.4em;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.name-area {
  display: inline-block;
  text-align: center;
  font-size: 1.4em;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.message-bottom {
  height: 54px;
}
@media only screen and (max-width: 750px) {
  .message-root {
    margin: 0 16px 0 16px;
  }
}
@media only screen and (min-width: 751px) {
  .bg {
    background-image: url(/anjuinami/20190812/background_2.jpg);
  }
}
</style>

<style>
@media only screen and (max-width: 750px) {
  body::before {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    padding-bottom: 108px;
    content: "";
    z-index: -1;
    background-image: url(/anjuinami/20190812/background_2.jpg);
  }
}
</style>

