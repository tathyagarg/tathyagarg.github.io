export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/Moonscape.otf","fonts/Transcity.otf","fonts/atwriter.ttf","icons/github.svg","icons/instagram.svg","robots.txt","screenshots/dwmun.png","screenshots/home.png","screenshots/intoxicode.png","screenshots/techfusion.png"]),
	mimeTypes: {".otf":"font/otf",".ttf":"font/ttf",".svg":"image/svg+xml",".txt":"text/plain",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.AFbc9hVD.js",app:"_app/immutable/entry/app.DmWDYoV9.js",imports:["_app/immutable/entry/start.AFbc9hVD.js","_app/immutable/chunks/CmJNvUa3.js","_app/immutable/chunks/NLeI49yf.js","_app/immutable/chunks/C9CeRHbG.js","_app/immutable/entry/app.DmWDYoV9.js","_app/immutable/chunks/NLeI49yf.js","_app/immutable/chunks/BNpsGkg0.js","_app/immutable/chunks/D6DX8ZRF.js","_app/immutable/chunks/C9CeRHbG.js","_app/immutable/chunks/DRqcXWoE.js","_app/immutable/chunks/tkBMcn0E.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
