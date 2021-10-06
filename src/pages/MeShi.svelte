<script>
  import CenteringPane from "../components/CenteringPane.svelte";
</script>

<CenteringPane>
  <div>
    <p>
      <img src="./images/me-shi.ss.png" alt="me-shi screenshot" />
    </p>
    <p>これをつくった</p>
  </div>
</CenteringPane>

<style>
  div {
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  img {
    width: 100%;
  }
</style>
