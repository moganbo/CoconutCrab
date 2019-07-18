<template>
  <section class="container">
    <div>
      <h1 class="title">
        やしがにカンパニー
      </h1>
      <h2 class="subtitle">
        トップページ
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "トップ"
    };
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
  padding-top: 15px;
}
</style>

