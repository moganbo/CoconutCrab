export default function({ $axios, redirect }) {
  $axios.setToken("access_token");

  // 注: ここの引数を今は使わないからと _ とかにするとエラーになる
  $axios.onResponse(config => {});
}
