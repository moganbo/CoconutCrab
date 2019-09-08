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
          </div>
          <div>
            <img class="top-illust" src="https://firebasestorage.googleapis.com/v0/b/coconut-crab-co.appspot.com/o/anjuinami%2F20190812%2Fimage%2Ftop_illust.png?alt=media&token=ba24abc2-9861-4402-a216-7cc8caf347a6">
          </div>
          <div class="links">
            <!-- <button class="button is-primary" v-on:click="clickIllust()">イラスト</button> -->
            <!-- <button class="button is-primary" v-on:click="clickSponsor()">協賛者リスト</button> -->
            <button class="button is-primary" v-on:click="clickMessage()">あなたのファンから<br>メッセージの新着があります。</button>
            <!-- <button class="button is-primary" v-on:click="clickVideoTest()">動画テスト</button> -->
            <p> ↑ 押してみてね♪</p>
          </div>
          <div 
          class="footer">
            <p class="credit">企画：やしがにカンパニー🌴🦀<br> Twitter：<a href="https://twitter.com/CoconutCrab_Co">@CoconutCrab_Co</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "An seule étoile ～Rythme d'été～"
    };
  },
  data: function() {
    return {};
  },
  mounted: function() {},
  methods: {
    clickIllust: function() {
      console.log("clickIllust");
      this.$router.push("/anjuinami/20190812/Illust");
    },
    clickSponsor: function() {
      console.log("clickSponsor");
      this.$router.push("/anjuinami/20190812/Sponsor");
    },
    clickMessage: function() {
      console.log("clickMessage");
      this.$router.push("/anjuinami/20190812/Message");
    },
    clickVideoTest: function() {
      console.log("clickVideoTest");
      this.$router.push("/anjuinami/20190812/VideoTest");
    }
  }
};
</script>

<style scoped>
.title {
  font-family: "NamePop";
}

.bg {
  background-image: url(/anjuinami/20190812/background.jpg);
}

.top-illust {
  max-width: calc(100% - 48px);
  margin: 24px 24px 24px 24px;
}

.button {
  height: 60px;
  display: table;
  text-align: center;
  margin: 4px auto;
  white-space: pre-line;
  word-break: break-all;
}

.footer {
  height: 54px;
  vertical-align: bottom;
}
@media only screen and (max-width: 750px) {
  .fixed-bg {
    min-height: 100vh;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #e0ffff;
  }
  .top-illust {
    max-width: calc(100% - 32px);
    margin: 0 16px 0 16px;
  }
}
</style>

