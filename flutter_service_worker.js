'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "70ae709ad51183a0d089f6ebadca10ba",
"assets/AssetManifest.bin.json": "e9dc8fa0ad698a9906a65f400840b03d",
"assets/AssetManifest.json": "2c488fe8cc4531b02979e61cdfe45da2",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/aaasd_6.png": "6d313e77020e2b7d741b76e241bc30de",
"assets/assets/images/app_launcher_icon.png": "dcd4f841cc441b1475b2d8a3d2150023",
"assets/assets/images/asdasd.png": "9f1d47cbfa6748b53f7f3f07c62fe349",
"assets/assets/images/asdasdasdqqq.png": "94269421d53f48dfe0b8b4fc3a07d414",
"assets/assets/images/asdasdzzxc.png": "3e5112eacd5a6c1cecc5b0aee93739b4",
"assets/assets/images/asdasdzzzz.png": "f7279543219dc33d7b59ba0fbfb2cb31",
"assets/assets/images/asdasd_6.png": "528299915c89c9a06485bbf3f8575b6b",
"assets/assets/images/asdsadsad.png": "005a67a424369b6df8832e69108caad2",
"assets/assets/images/asdzxc.png": "23a2d712f6b725013a67df909726694b",
"assets/assets/images/dwnnn.png": "7da0625a9065bad6c875724c5e666cad",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/hard.png": "1cefce5cbfdbee8f970a7518975b6962",
"assets/assets/images/krug_(12).png": "135cf82f35d716445d9b1580dea4b793",
"assets/assets/images/krug_(13).png": "df3f7e39bee982b3b9dc032dbdf6df9c",
"assets/assets/images/krug_(15).png": "9fa8af66e42407fc780331ee99500037",
"assets/assets/images/krug_(16).png": "b41cce5f4dcd9e5cbb4792a958a6b0a3",
"assets/assets/images/krug_(25).png": "2b55bc94d610a294d23024880af84371",
"assets/assets/images/krug_(39).png": "dc822c91e4884eec4c358f7e755c5e83",
"assets/assets/images/krug_(48).png": "5197f024cc28c95009c760b61a9b99bd",
"assets/assets/images/krug_(51).png": "2d0083324bcc10e39b5d4e0ef5f591e3",
"assets/assets/images/krug_(52).png": "30d2fdf0812d206c6c091383e18b8365",
"assets/assets/images/krug_(55).png": "dffe9e8e4b71c602e7b5b0c24fff2995",
"assets/assets/images/krug_(63).png": "738076196de13413709fe7ea40a0c4a1",
"assets/assets/images/krug_(67).png": "71f75631d828664075673f549ca479c8",
"assets/assets/images/krug_(68).png": "b23d41ce59a2e13daf618f98fd00d412",
"assets/assets/images/krug_(69).png": "66424b1fa8ce3dddd185996cab6b33cf",
"assets/assets/images/krug_(70).png": "2c92a828cd4b98562678913c4caec448",
"assets/assets/images/krug_(73).png": "fd1187ac5f2d6731f1f512beb07b1c48",
"assets/assets/images/krug_(74).png": "cb13cca7d6df1ef21026e3d46b7437e9",
"assets/assets/images/krug_(77).png": "d110f03c032939d5c64c606acb52212d",
"assets/assets/images/krug_(78).png": "edaf3687c960ca04c174764c1b2c7cbe",
"assets/assets/images/krug_(79).png": "245a7f977887b8a67410b2fad494791c",
"assets/assets/images/krug_(80).png": "53e446685a8e30a58943c54e016dd885",
"assets/assets/images/leftas.png": "dcb60c23eebb46da6fb3b2f7c2193db2",
"assets/assets/images/lollll.png": "52cd5f9da64ddc45d35ff5fa37f59f7c",
"assets/assets/images/nmn.png": "f862f9fd4bd7069fb1878d70a31a4873",
"assets/assets/images/rightASASD.png": "a892dd014089bdc8a08a80682e8a6471",
"assets/assets/images/sd).png": "e53cfc5d7990e0b1a9bcdd2242d030d4",
"assets/assets/images/sdzzzzz.png": "066f375130e91c9ae5d1355fa5f3cf6a",
"assets/assets/images/thbnmm.png": "a3f08024ab43e827380c961da8944ebb",
"assets/assets/images/tppp.png": "03e8d64027f8fcfd389fbd943784a558",
"assets/assets/images/tw2sad.png": "8036ea1d38dd96e49ba117cfe2386c48",
"assets/assets/images/zaaazzz.png": "2f676bae7e070257424f93ddbc4bdb4c",
"assets/assets/images/_2.png": "f0a660c723a1aa36bceda72deea4c2fd",
"assets/assets/images/__(1000_x_1000_.)_(24).png": "34516478b53d4aa4b1db5d8b6f4510e7",
"assets/assets/lottie_animations/4dtnTIUEvx_(1).json": "e45abfef825fe9ddf55863edf92672d8",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/__(2000_x_1500_.)_(2000_x_1000_.)_(6).mp4": "2af4f08561bd2141b03eecf48dede17b",
"assets/assets/videos/__(2000_x_1500_.)_(2000_x_1000_.)_(8).mp4": "f7f99537d78862cd1bc5998ff45bf297",
"assets/assets/videos/__(2000_x_1500_.)_(2000_x_1000_.)_(9).mp4": "60f5e0846af6c2f5018f77afc7ec3907",
"assets/assets/videos/___(1).mp4": "35fa74bdc451fedefd4311e9a252f279",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "ad28b3b69eb60a9ed99d143ce6b89159",
"assets/NOTICES": "c05be5e71fa55a3210631386b00a9975",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "70fcba3bb297735dd659f9911cfd717e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e7ecec8daa022dae2272386151a2b87a",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "83ad552fe7b7cc8ee8311f60941e02f5",
"canvaskit/canvaskit.wasm": "72ceae406442681eb7bedfa856264163",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "4ba8d2a0ca33a008c2716df1c4d4bebc",
"canvaskit/chromium/canvaskit.wasm": "faccee5e3a41fd214ddd106fe9024c42",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "8bd6b02debe4cb77998782baa1eed362",
"canvaskit/skwasm.wasm": "e02b06c626f97135f314f451d2fd7dad",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/app_launcher_icon.png": "dcd4f841cc441b1475b2d8a3d2150023",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c7dac6b99f0500e6dbe60d62ec8d9f86",
"/": "c7dac6b99f0500e6dbe60d62ec8d9f86",
"main.dart.js": "34879331071f2b23229adc2d6a3c7189",
"manifest.json": "db96f0a6c0e7f40efa61321ac06dbc89",
"version.json": "74b4c1c9b462318050637d2538413cbd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
