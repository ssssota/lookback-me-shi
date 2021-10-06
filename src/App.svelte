<script lang="ts">
  import ProgressBar from "./components/ProgressBar.svelte";
  import SlideView from "./components/SlideView.svelte";
  import { page } from "./utils/page";
  import TitlePage from "./pages/TitlePage.svelte";
  import ContentsPage from "./pages/ContentsPage.svelte";
  import Usage from "./pages/Usage.svelte";
  export let listView = false;

  const pages = [
    TitlePage,
    ContentsPage,
    Usage,
    // INSERT YOUR PAGE HERE!
  ];

  const handleKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowRight":
      case "Space":
      case "Enter":
        page.next();
        break;
      case "ArrowLeft":
        page.prev();
        break;
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

{#if !listView}
  <SlideView onLeftClick={page.prev} onRightClick={page.next}>
    <svelte:component this={pages[$page - 1]} />
  </SlideView>
  <ProgressBar progress={($page - 1) / (pages.length - 1)} />
{:else}
  {#each pages as p}
    <SlideView onLeftClick={undefined} onRightClick={undefined}>
      <svelte:component this={p} />
    </SlideView>
  {/each}
{/if}
