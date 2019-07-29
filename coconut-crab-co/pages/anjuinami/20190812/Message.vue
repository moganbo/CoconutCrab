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
        メッセージ
      </h2>
    </div>
    <div class="message-root">
      <div 
        v-for="(message, index) in messages" 
        v-if="message.trim()"
        v-bind:key="index" 
        v-bind:class="{
          'balloon-left': index % 2 == 0,
          'balloon-right': index % 2 == 1
        }">
        <p class="message-area">{{message.trim()}}</p>
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
      "https://firebasestorage.googleapis.com/v0/b/coconut-crab-co.appspot.com/o/anjuinami%2F20190812%2Fmessage%2Fmessage.txt?alt=media&token=b788cd52-af93-4dc1-8db0-9eb1521e6511";
    const response = await $axios.get(url);
    console.log(response);
    return {
      m: response.data,
      messages: response.data.split(",")
    };
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
.balloon-left {
  margin: 12px 0 12px 0;
  position: relative;
  padding: 12px;
  background-color: #ffcccc;
  border: 2px solid #ca8888;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #a7a7a7;
}
.balloon-left::before {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: -15px;
  top: 8px;
  border-right: 15px solid #ca8888;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.balloon-left::after {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: -12px;
  top: 8px;
  border-right: 15px solid #ffcccc;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.balloon-right {
  margin: 12px 0 12px 0;
  position: relative;
  padding: 12px;
  background-color: #ffcccc;
  border: 2px solid #ca8888;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #a7a7a7;
}
.balloon-right::before {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  right: -15px;
  top: 8px;
  border-left: 15px solid #ca8888;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.balloon-right::after {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  right: -12px;
  top: 8px;
  border-left: 15px solid #ffcccc;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.message-root {
  margin: 0 16px 0 16px;
}
.message-area {
  font-size: 1.4em;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>

