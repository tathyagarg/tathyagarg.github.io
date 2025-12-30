import "clsx";
import { y as attr, x as bind_props, z as stringify } from "../../../chunks/index.js";
import { j as fallback } from "../../../chunks/utils2.js";
import { e as escape_html } from "../../../chunks/context.js";
function Card($$renderer, $$props) {
  let title = $$props["title"];
  let content = $$props["content"];
  let bannerUrl = $$props["bannerUrl"];
  let link = fallback($$props["link"], "#");
  $$renderer.push(`<a class="block hover:*:decoration-wavy! hover:*:underline! transition-all duration-200"${attr("href", link)} target="_blank" rel="noopener noreferrer"><div class="w-full border-2 border-[#00000050] rounded-lg overflow-hidden shadow-lg *:font-['Georgia']" style="background-color: rgba(17, 17, 17, 0.8);"><img class="w-full"${attr("src", bannerUrl)}${attr("alt", `${stringify(title)} banner`)}/> <div class="text-left p-2"><div class="text-xl">${escape_html(title)}</div> <div class="text-base">${escape_html(content)}</div></div></div></a>`);
  bind_props($$props, { title, content, bannerUrl, link });
}
function _page($$renderer) {
  $$renderer.push(`<div class="pt-12"><h2>3</h2> <h1>Work</h1></div> <div class="pt-8 w-full text-left"><i class="text-sm w-full text-left">(The images loading slowly is not intentional, my server is just extremely
    slow.)</i> <div class="grid grid-cols-1 gap-4">`);
  Card($$renderer, {
    title: "DWMUN'25",
    content: "A website for my school's Model United Nations conference.",
    bannerUrl: "/screenshots/dwmun.png",
    link: "https://dwmun.co.in"
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "Techfusion'24",
    content: "Website for an online tech event hosted by my school.",
    bannerUrl: "/screenshots/techfusion.png",
    link: "https://archive.arson.dev/sites/techfusion"
  });
  $$renderer.push(`<!----> `);
  Card($$renderer, {
    title: "Intoxicode",
    content: "Website for a custom programming language I made",
    bannerUrl: "/screenshots/intoxicode.png",
    link: "https://intoxicode.arson.dev/"
  });
  $$renderer.push(`<!----></div></div>`);
}
export {
  _page as default
};
