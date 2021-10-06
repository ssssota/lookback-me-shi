<script>
  import PaddingPane from "../components/PaddingPane.svelte";
</script>

<PaddingPane>
  <h3>
    <img
      src="https://raw.githubusercontent.com/kanko-dori/me-shi/main/frontend/static/logo.svg"
      alt="me-shi"
    /> とは
  </h3>
  <p>知らない人に簡単に紹介</p>
  <ul>
    <li>ハッカソン後に参加者とつながるためのWebアプリ</li>
    <li>名刺をモチーフに交換したりシェアしたり</li>
    <li>詳しいことは後の人が話します🤥</li>
    <li>
      <p>ざっくり技術構成</p>
      <ul>
        <li>フロントエンドAzure+SvelteKit+TailwindCSS</li>
        <li>バックエンドAWS+AppSync</li>
      </ul>
    </li>
  </ul>
</PaddingPane>

<style>
  h3 {
    display: flex;
  }
  h3 img {
    width: 25%;
  }
</style>
