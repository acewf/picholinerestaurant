export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","delivery/deliveroo-vertical.png","delivery/deliveroo.svg","delivery/just-eat-logo.svg","delivery/just-eat-vertical.png","delivery/pichonline-owner-cooking.jpeg","delivery/uber-eats.svg","delivery/uber-eats2124.jpeg","delivery/uber-eats2124.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","logo.jpg","mstile-150x150.png","olive-branch.jpg","olive-tree.png","olive-tree.svg","picholine","safari-pinned-tab.svg","site.webmanifest","waves.svg"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".svg":"image/svg+xml",".jpeg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"start-2266b4d2.js","js":["start-2266b4d2.js","chunks/index-3519897d.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
