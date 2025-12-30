<script lang="ts">
  export const prerender = true;

  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
  import Nav from "$lib/components/Nav.svelte";

  import { onMount } from "svelte";

  onMount(() => {
    const canvas = document.createElement("canvas");
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const imageData = ctx?.createImageData(size, size);
    const data = imageData?.data;

    for (let i = 0; i < (data?.length ?? 0); i += 4) {
      const shade_range = Math.random();
      const shade = (shade_range > 0.5 ? 255 : 0) * Math.random() * 0.75;

      if (data) {
        data[i] = shade;
        data[i + 1] = shade;
        data[i + 2] = shade;
        data[i + 3] = 10;
      }
    }

    ctx?.putImageData(imageData ?? new ImageData(0, 0), 0, 0);
    document.body.style.backgroundImage = `url(${canvas.toDataURL()})`;
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Tathya's Awesome Website</title>

  <meta property="og:title" content="Tathya's porfolio" />
  <meta
    property="og:description"
    content="Tathya's personal website and portfolio"
  />
  <meta name="description" content="Tathya's personal website and portfolio" />
  <meta property="og:site_name" content="arson.dev" />
  <meta property="og:url" content="https://arson.dev" />
  <meta property="og:image" content="/screenshots/home.png" />

  <meta charset="UTF-8" />
</svelte:head>

<div
  class="min-h-[100vh] h-full w-full flex items-center justify-center text-center flex-col"
>
  {@render children()}
  <Nav />
</div>
