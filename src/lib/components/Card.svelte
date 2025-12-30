<script lang="ts">
  export let title: string;
  export let content: string;
  export let bannerUrl: string;
  export let link: string = "#";
</script>

<a
  class="block hover:*:decoration-wavy! hover:*:underline! transition-all duration-200"
  href={link}
  target="_blank"
  rel="noopener noreferrer"
>
  <div
    class="w-full border-2 border-[#00000050] rounded-lg overflow-hidden shadow-lg *:font-['Georgia']"
    style="background-color: rgba(17, 17, 17, 0.8);"
  >
    <img class="w-full" src={bannerUrl} alt="{title} banner" />
    <div class="text-left p-2">
      <div class="text-xl">{title}</div>
      <div class="text-base">{content}</div>
    </div>
  </div>
</a>
