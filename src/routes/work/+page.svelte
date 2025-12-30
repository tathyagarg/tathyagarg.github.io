<script lang="ts">
  import Card from "$lib/components/Card.svelte";
</script>

<div class="pt-12">
  <h2>3</h2>
  <h1>Work</h1>
</div>

<div class="pt-8 w-full text-left">
  <i class="text-sm w-full text-left"
    >(The images loading slowly is not intentional, my server is just extremely
    slow.)</i
  >
  <div class="grid grid-cols-1 gap-4">
    <Card
      title="DWMUN'25"
      content="A website for my school's Model United Nations conference."
      bannerUrl="/screenshots/dwmun.png"
      link="https://dwmun.co.in"
    />

    <Card
      title="Techfusion'24"
      content="Website for an online tech event hosted by my school."
      bannerUrl="/screenshots/techfusion.png"
      link="https://archive.arson.dev/sites/techfusion"
    />

    <Card
      title="Intoxicode"
      content="Website for a custom programming language I made"
      bannerUrl="/screenshots/intoxicode.png"
      link="https://intoxicode.arson.dev/"
    />
  </div>
</div>
