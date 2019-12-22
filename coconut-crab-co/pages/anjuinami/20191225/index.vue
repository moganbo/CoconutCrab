<template>
  <section class="container">
    <div class="fixed-bg bg">
      <div class="cover-white">
        <div class="contents">
          <SnowFall />
          <div style="height: 40px;"></div>
          <div>
            <h1 class="title">
              Dear 伊波杏樹 様
            </h1>
            <h2 class="subtitle">
              3 fête!!!
            </h2>
          </div>
          <div>
            <img
              class="top-illust"
              src="/anjuinami/20191225/top_illust_20191225.jpg"
            />
            <div class="illusts_area">
              <div class="illust_area anju_xmas_area">
                <img
                  class="illust-anju"
                  src="/anjuinami/20191225/anju/anju_xmas.png"
                />
              </div>
              <div class="illust_area sponsor_01_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_01.png"
                />
              </div>
              <div class="illust_area sponsor_02_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_02.png"
                />
              </div>
              <div class="illust_area sponsor_03_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_03.png"
                />
              </div>
              <div class="illust_area sponsor_04_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_04.png"
                />
              </div>
              <div class="illust_area anju_year_end_party_area">
                <img
                  class="illust-anju"
                  src="/anjuinami/20191225/anju/anju_year_end_party.png"
                />
              </div>
              <div class="illust_area sponsor_05_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_05.png"
                />
              </div>
              <div class="illust_area sponsor_06_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_06.png"
                />
              </div>
              <div class="illust_area sponsor_07_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_07.png"
                />
              </div>
              <div class="illust_area sponsor_08_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_08.png"
                />
              </div>
              <div class="illust_area sponsor_09_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_09.png"
                />
              </div>
              <div class="illust_area anju_reunion_area">
                <img
                  class="illust-anju"
                  src="/anjuinami/20191225/anju/anju_reunion.png"
                />
              </div>
              <div class="illust_area sponsor_10_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_10.png"
                />
              </div>
              <div class="illust_area sponsor_11_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_11.png"
                />
              </div>
              <div class="illust_area sponsor_12_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_12.png"
                />
              </div>
              <div class="illust_area sponsor_13_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_13.png"
                />
              </div>
              <div class="illust_area sponsor_14_area">
                <img
                  class="illust-sponsor"
                  src="/anjuinami/20191225/sponsor/sponsor_14.png"
                />
              </div>
            </div>
          </div>
          <!-- <div class="links">
            <button class="button is-primary" v-on:click="clickMessage()">あなたのファンから<br>メッセージの新着があります。</button>
            <p> ↑ 押してみてね♪</p>
          </div> -->
          <div class="footer">
            <p class="credit">
              企画：やしがにカンパニー🌴🦀<br />
              Twitter：<a href="https://twitter.com/CoconutCrab_Co"
                >@CoconutCrab_Co</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SnowFall from "~/components/SnowFall";
export default {
  components: {
    SnowFall
  },
  head() {
    return {
      title: "3 fête!!!"
    };
  },
  data: function() {
    return {};
  },
  mounted: function() {
    document.oncontextmenu = function() {
      return false;
    };
  },
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
  color: #ffffff;
}

.subtitle {
  color: #e0e0e0;
}

.bg {
  background-image: url(/anjuinami/20191225/background.png);
}

.cover-white {
  background-color: rgba(255, 255, 255, 0.2);
}

.top-illust {
  max-width: calc(100% - 48px);
  margin: 24px 24px 24px 24px;
}

.illust_area {
  max-width: calc(100% - 48px);
}

.anju_xmas_area {
  margin: 0 0 0 108px;
}
.anju_year_end_party_area {
  margin: 0 0 0 350px;
}
.anju_reunion_area {
  margin: 0 500px 0 0;
}

.sponsor_01_area {
  margin: 0 500px 0 0;
}
.sponsor_02_area {
  margin: 0 0 0 0;
}
.sponsor_03_area {
  margin: 0 200px 0 0;
}
.sponsor_04_area {
  margin: 0 0 0 200px;
}
.sponsor_05_area {
  margin: 0 0 0 0;
}
.sponsor_06_area {
  margin: 0 0 0 200px;
}
.sponsor_07_area {
  margin: 0 0 0 0;
}
.sponsor_08_area {
  margin: 0 500px 0 0;
}
.sponsor_09_area {
  margin: 0 300px 0 0;
}
.sponsor_10_area {
  margin: 0 200px 0 0;
}
.sponsor_11_area {
  margin: 0 0 0 100px;
}
.sponsor_12_area {
  margin: 0 0 0 300px;
}
.sponsor_13_area {
  margin: 0 0 0 200px;
}
.sponsor_14_area {
  margin: 0 0 0 0;
}

.illust-anju {
  max-width: 512px;
  max-height: 512px;
}
.illust-sponsor {
  max-width: 256px;
  max-height: 256px;
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

.credit {
  background-color: #e0e0e0;
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
  .illust_area {
    max-width: calc(100% - 32px);
  }

  .anju_xmas_area {
    margin: 0 0 0 54px;
  }
  .anju_year_end_party_area {
    margin: 0 0 0 168px;
  }
  .anju_reunion_area {
    margin: 0 256px 0 0;
  }

  .illust-anju {
    max-width: 256px;
    max-height: 256px;
  }
  .illust-sponsor {
    max-width: 192px;
    max-height: 192px;
  }
}

#snowfall {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
