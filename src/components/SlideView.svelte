<script lang="ts">
  import { page } from "../utils/page";

  export let onLeftClick: svelte.JSX.EventHandler<MouseEvent, HTMLDivElement> | undefined;
  export let onRightClick: svelte.JSX.EventHandler<MouseEvent, HTMLDivElement> | undefined;
  export let pageCount: boolean | undefined = undefined;
</script>

<div class="wrapper">
  <section class="slide">
    <slot />
  </section>
  <div class:cursor={onLeftClick != null} class="left" on:click={onLeftClick} />
  <div class:cursor={onRightClick != null} class="right" on:click={onRightClick} />
  {#if pageCount === true}
    <div class="page-count">{$page}</div>
  {/if}
</div>

<style>
  .wrapper {
    background-color: black;
    width: 100%;
    height: 100%;

    padding: 0;
    margin: 0;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .left.cursor {
    cursor: url(../images/left.svg) 0 0, pointer;
  }
  .right {
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    top: 0;
  }
  .right.cursor {
    cursor: url(../images/right.svg) 0 0, pointer;
  }
  .page-count {
    --size: 1.5em;
    position: fixed;
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 calc(var(--size) / 2) 0 rgba(0, 0, 0, 0.5);

    bottom: calc(var(--size) / 2);
    right: calc(var(--size) / 2);
  }

  :global(html) {
    --slide-width: min(100vw, calc(400vh / 3));
    --slide-height: min(75vw, 100vh);

    font-size: calc(var(--slide-width) / 40);
  }

  .slide {
    background-color: white;

    width: var(--slide-width);
    height: var(--slide-height);
  }
  .slide :global(h1) {
    font-size: 2rem;
  }
  .slide :global(h2) {
    font-size: 1.6rem;
  }
  .slide :global(h3) {
    font-size: 1.4rem;
  }
  .slide :global(h4, h5, h6, p, li) {
    font-size: 1.2rem;
  }
</style>
