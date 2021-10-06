<script>
  import PaddingPane from "../components/PaddingPane.svelte";
</script>

<PaddingPane>
  <h3>誰？</h3>
  <p class="team">チーム <img src="https://raw.githubusercontent.com/kanko-dori/branding/master/logo.svg" alt="閑古鳥"> のデザイナ兼フロントエンドエンジニア</p>
  <p>
    <img src="./images/me-shi.svg" alt="my me-shi">
  </p>
</PaddingPane>

<style>
  .team {
    display: flex;
    align-items: center;
  }
  .team img {
    width: 12vmin;
  }
</style>
