

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DQFFEWFO.js","_app/immutable/chunks/D6DX8ZRF.js","_app/immutable/chunks/NLeI49yf.js","_app/immutable/chunks/kVPCwi2N.js"];
export const stylesheets = [];
export const fonts = [];
