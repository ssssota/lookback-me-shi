<script>
  import CenteringPane from "../components/CenteringPane.svelte";
</script>

<CenteringPane>
  <p>
    <img src="./images/firstaccident.png" alt="first accident" />
  </p>
  <p>
    ハッカソン初日 1度目の事故<br />
    なぜか動かなくなったのでエラーを無視しようとしている
  </p>
  <p>
    本来ビルド(バンドル)したら
    <code>node_modules</code>
    は必要なくなるはず<br />
    なのに 一緒にデプロイしないと動かなくなった
  </p>
</CenteringPane>

<style>
  p {
    text-align: center;
    width: 100%;
  }
  img {
    width: 50%;
  }
</style>
