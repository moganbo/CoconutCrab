<template>
  <section class="container">
    <div>
      <h1 class="title">
        やしがにカンパニー
      </h1>
      <h2 class="subtitle">
        トップページ
      </h2>
      <h3>
        伊波杏樹
      </h3>
      <div class="links">
        <div class="button-area">
          <button class="button is-primary" v-on:click="clickAnju20190812()">An seule étoile ～Rythme d'été～</button>
        </div>
        <div class="button-area">
          <button class="button is-primary" v-on:click="clickAnju20191225()">3 fête!!!</button>
        </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "トップ"
    };
  },
  data: function() {
    return {};
  },
  mounted: function() {},
  methods: {
    clickAnju20190812: function() {
      console.log("clickIllust");
      this.$router.push("/anjuinami/20190812/");
    },
    clickAnju20191225: function() {
      console.log("clickIllust");
      this.$router.push("/anjuinami/20191225/");
    }
  }
};
</script>

<style scoped>
.links {
  padding-top: 15px;
}
.button-area {
  padding: 8px 0;
}
</style>

