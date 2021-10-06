<script>
import CenteringPane from "../components/CenteringPane.svelte";

</script>
<CenteringPane>
  <p>
    <img src="./images/npm.png" alt="pnpm to npm">
  </p>
  <p>
    先の問題解決にnpmを使わないとダメでは？<br>
    →爆速pnpm廃止、npmを使用
  </p>
  <p>キャッシュが効きにくく遅すぎてパイプラインが2分から6分に</p>
</CenteringPane>

<style>
  p {
    text-align: center;
    width: 100%;
  }
  img {
    width: 80%;
  }
</style>
