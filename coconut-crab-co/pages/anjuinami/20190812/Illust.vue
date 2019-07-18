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
        イラスト
      </h2>
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
    return {};
  },
  mounted: function() {},
  method: {}
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
</style>

