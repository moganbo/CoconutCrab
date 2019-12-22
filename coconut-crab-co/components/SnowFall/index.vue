<template>
  <div id="snowfall" />
</template>

<script>
// particles.jsで降らせる雪の設定を読み込み
import snow from "~/assets/js/particles/snow.js";

export default {
  mounted() {
    // 画面が表示された時にparticles.jsを動かす
    // ※すべての画像が読み込まれたあとに動かすようにする
    var images = document.getElementsByTagName("img");
    var onloadCount = 0;
    for (var i = 0; i < images.length; i++) {
      var img = new Image();
      img.onload = function() {
        onloadCount++;
        if (onloadCount >= images.length) {
          window.particlesJS("snowfall", snow.data);
        }
      };
      img.src = images[i].src;
    }
  }
};
</script>

<style>
#snowfall {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
