<div>
  <slot />
</div>

<style>
  div {
    --vertical-padding: 1.6rem;
    --horizontal-padding: 3rem;
    padding: var(--vertical-padding) var(--horizontal-padding);
    height: 100%;
    position: relative;
    box-sizing: border-box;
  }
  :global(h1) {
    margin: 2rem 0 0 0;
  }
  :global(h2) {
    margin: 1.5rem 0 0 0;
  }
  :global(h3) {
    margin: 1.2rem 0 0 0;
  }
  :global(h4, h5, h6, p) {
    margin: 1rem 0 0 0;
  }

  @media print {
    @page {
      size: 1280px 960px;
      margin: 0;
    }
    div {
      page-break-after: always;
    }
  }
</style>
