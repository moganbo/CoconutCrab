<template>
  <section class="container">
    <div>
      <h1 class="title">
        伊波杏樹
      </h1>
      <h2 class="subtitle">
        An seule étoile ～Rythme d'été～
      </h2>
      <h2 class="subtitle">
        動画テスト
      </h2>
    </div>
    <div>
    <h1><a href="https://github.com/anteriovieira/vue-youtube">vue-youtube</a></h1>
    <youtube
      class="youtube"
      ref="youtube"
      :video-id="videoId"
      @ready="ready"
      @ended="ended"
      @playing="playing"/>
    <button class="button" @click="playVideo">play</button>
    <button class="button" @click="pauseVideo">pause</button>
    <button class="button" @click="stopVideo">stop</button>
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
  data() {
    return {
      videoId: "XU5mHcrqU6g"
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    stopVideo() {
      this.player.stopVideo();
    },
    ready() {
      console.log("ready");
    },
    ended() {
      console.log("ended");
    },
    playing() {
      console.log("playing");
    }
  }
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 38px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 8px;
}
.button {
  display: table;
  text-align: center;
  margin: 4px auto;
}
.youtube {
  width: 640px;
  height: 360px;
}
@media only screen and (max-width: 750px) {
  .youtube {
    width: 320px;
    height: 180px;
  }
}
</style>

