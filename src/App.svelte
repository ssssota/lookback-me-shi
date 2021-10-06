<script lang="ts">
  import ProgressBar from "./components/ProgressBar.svelte";
  import SlideView from "./components/SlideView.svelte";
  import AboutMeShi from "./pages/AboutMeShi.svelte";
  import ActionsFail from "./pages/ActionsFail.svelte";
import Conclusion from "./pages/Conclusion.svelte";
  import FirstAccident from "./pages/FirstAccident.svelte";
  import FirstMove from "./pages/FirstMove.svelte";
  import IntroPage from "./pages/IntroPage.svelte";
  import MeShi from "./pages/MeShi.svelte";
  import NeverGiveUp from "./pages/NeverGiveUp.svelte";
  import NpmAltPnpm from "./pages/NpmAltPnpm.svelte";
  import Repository from "./pages/Repository.svelte";
  import TitlePage from "./pages/TitlePage.svelte";
  import { page } from "./utils/page";
  export let listView = false;

  const pages = [
    TitlePage,
    IntroPage,
    MeShi,
    AboutMeShi,
    Repository,
    FirstMove,
    FirstAccident,
    NpmAltPnpm,
    NeverGiveUp,
    ActionsFail,
    Conclusion,
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
