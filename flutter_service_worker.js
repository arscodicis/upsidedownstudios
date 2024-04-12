'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "45ce04274e570d40d622c6c9021fffa2",
"assets/AssetManifest.bin.json": "0eb695c4452bceda5586869201e1f6a6",
"assets/AssetManifest.json": "4288169e6e37258a107eb87aaa8191ee",
"assets/FontManifest.json": "937a1645f18958767853678e1109fca3",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/Mono.ttf": "96985f7a507afce5ab786569d2b2368f",
"assets/NOTICES": "1887acc3f293ec300399cba439c98b10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "946de7fd1470d676b40bcb8f3fbffef1",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "aad23b975d521339314bdc3ab4d4fbf0",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "773ebba095ec3590660722932c6e8500",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "e0bf253dc822f16a3c2a27cc229e03c5",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "afd764841ed1ab86e0d8070e83531e68",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "1b9aa14436c86843d7081313d68f2e72",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"index.html": "354a6152a36653186d087e4432d1a3a9",
"/": "354a6152a36653186d087e4432d1a3a9",
"main.dart.js": "4e3bed9ea724042757542e4bcba0fc85",
"manifest.json": "e8ce348aae7634979590e415ed22e2ae",
"upsidedownstudios/.git/COMMIT_EDITMSG": "334131c4451cd7b87e710fcbeac540a8",
"upsidedownstudios/.git/config": "0dc7acd4b545c236b75ef4d67287d553",
"upsidedownstudios/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"upsidedownstudios/.git/FETCH_HEAD": "ad0798656ea3455f6b58b42bc83ebccb",
"upsidedownstudios/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"upsidedownstudios/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"upsidedownstudios/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"upsidedownstudios/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"upsidedownstudios/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"upsidedownstudios/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"upsidedownstudios/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"upsidedownstudios/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"upsidedownstudios/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"upsidedownstudios/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"upsidedownstudios/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"upsidedownstudios/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"upsidedownstudios/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"upsidedownstudios/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"upsidedownstudios/.git/index": "fcb7c18b34515c7d5b7f917c57d913cb",
"upsidedownstudios/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"upsidedownstudios/.git/logs/HEAD": "6015097c67788008d207ecb1e96b1ff1",
"upsidedownstudios/.git/logs/refs/heads/main": "6015097c67788008d207ecb1e96b1ff1",
"upsidedownstudios/.git/logs/refs/remotes/origin/HEAD": "e3888bed38ef6b2c90bb3a922df76dbc",
"upsidedownstudios/.git/logs/refs/remotes/origin/main": "4f367e884aeea2b68cfad8051f56c15a",
"upsidedownstudios/.git/objects/04/e56b923fae27ceabc3e82e4337a10d0fc6e002": "88c530d4019f8815a19ce7d89124242c",
"upsidedownstudios/.git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
"upsidedownstudios/.git/objects/0a/6fd602c16a125de1385f3e3f7e3f9028d334a0": "85901109a52fcb7c1c2324416088fa69",
"upsidedownstudios/.git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
"upsidedownstudios/.git/objects/16/ecdc15f811166fdc58c81c82b4cab97b3d7514": "94550893f336ca3f522a556ecf5513f5",
"upsidedownstudios/.git/objects/1d/9dea5edd547527119a0b0f60fa1442ac0fc933": "947b7ff32ed487b8948c014dd6006909",
"upsidedownstudios/.git/objects/1f/1bbbd166dcb9e971efd417d7ca2b383f343a4b": "49db6e943a87f3ced7ceabd374f99449",
"upsidedownstudios/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"upsidedownstudios/.git/objects/29/e3a040577e27f88189a9babc4f13942b736133": "95132476349e60b41a89cc84a8cc2547",
"upsidedownstudios/.git/objects/2f/133ae03f46c21902cd39c3ef540e79c8fbe925": "9df742532df2075dd5f462877e060294",
"upsidedownstudios/.git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
"upsidedownstudios/.git/objects/4a/cc1a3003feb577048a64a490681047151dfcd7": "076c23242c2e10fd2cda6fafe922be8f",
"upsidedownstudios/.git/objects/4d/bd9d412a45b1d055c7e8678a8d687c38b8fd2c": "e334af020f283be63e136c867ccd6136",
"upsidedownstudios/.git/objects/4e/bda507c112fadd39115e93ad359659db41ba2d": "904c0dbb165110b2e93c08bdb6f69392",
"upsidedownstudios/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"upsidedownstudios/.git/objects/53/e355d945dd976fd19256079a5398f2381a8677": "fc14765085f808fa0ab9ab4fb701196f",
"upsidedownstudios/.git/objects/54/85ff0da6517d00dc1c9c0cd7c474adc10daece": "5491b6b26e051bc6892ed9a723ed7e4a",
"upsidedownstudios/.git/objects/56/6dc7b7cea94844e545796448ba71b2e805d227": "abf3891e3698cfe7eb19139b64b2636a",
"upsidedownstudios/.git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
"upsidedownstudios/.git/objects/5c/f10808c9f96fa5c3ceecb2c8c7e48b3cbc829f": "d1c4376e0ff81875da24db14105e1f6b",
"upsidedownstudios/.git/objects/60/54d06619681a7480b5b00b8f21aebdb044ffbf": "8ee86e12e0ea873151c72447b076525b",
"upsidedownstudios/.git/objects/65/1ad9969627ddda40c6b5ba36e24e48420ebb64": "39b38286e8aebe6a90afe9b8d512c78f",
"upsidedownstudios/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"upsidedownstudios/.git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
"upsidedownstudios/.git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
"upsidedownstudios/.git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
"upsidedownstudios/.git/objects/7a/9a0d050847cb1e89d963a824dcbc297153cb17": "e9d95084ba8e052f4a32fd0b2445352b",
"upsidedownstudios/.git/objects/7d/79c4d5ae84ecd29738ff95116dae2cd18f22bc": "ba108a70bf9cbd88c81aa2cde927adc9",
"upsidedownstudios/.git/objects/88/666120b07d6c4a7d5b3054cbdaad136001dcd4": "485f77e25448119aa245f939acfca556",
"upsidedownstudios/.git/objects/89/3fa6d8bef6441eba91bcc3d114fea40ebed808": "bf3790fbb87c1d325cf5d118c265e23b",
"upsidedownstudios/.git/objects/8f/017c7f7657bede830b99705e966daeac441ca5": "1fb2d297671798895d5fcbbcde67024b",
"upsidedownstudios/.git/objects/91/b8075c1cefab265ad39d76618eacd4cab59a24": "ef0d39361bf3026af017bfca1d78c0c5",
"upsidedownstudios/.git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
"upsidedownstudios/.git/objects/95/ce523f6115bfba06212dbb3beeb94589041013": "ee1bd3e7daac8164b066abec0068ce93",
"upsidedownstudios/.git/objects/a2/e9eae767def9e16649574f6904faa549891d76": "b21133e1063546f4d892d9d3bb628428",
"upsidedownstudios/.git/objects/ae/4aeb8cc1b0e677a3cd18d9a2eb0557e8231501": "7cbd430fab35f82b13d32b43b16869cd",
"upsidedownstudios/.git/objects/ae/6042a9c2f34b9a4fa804044f7981762a0b30eb": "4494ba7488381e9eac957ea149668d50",
"upsidedownstudios/.git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
"upsidedownstudios/.git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
"upsidedownstudios/.git/objects/c3/4b489a631f61adc3d5d0b54be5396ea7ff39c4": "8b3610fbf08635347c74b56fbd0f7048",
"upsidedownstudios/.git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
"upsidedownstudios/.git/objects/c7/f795a25cd6aed0393c138f5ea1607fe10ebcaa": "c5c4227e8fe09ff90a48054d8b2b93db",
"upsidedownstudios/.git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
"upsidedownstudios/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"upsidedownstudios/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"upsidedownstudios/.git/objects/d8/30642eb26a41c436b012eeefd6eedf7fda6b23": "ea6ac99fd7241e33db1e504a35f6d062",
"upsidedownstudios/.git/objects/da/f35876cc6ac65e2e6b3ff480316dda5961bab7": "2289cd640d1c3f85e1630a7c36a8010f",
"upsidedownstudios/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"upsidedownstudios/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"upsidedownstudios/.git/objects/e7/56618408449ab7c5b0914260c979c5562e8028": "ff0d9d274319bd6a273298fd9b29e2a2",
"upsidedownstudios/.git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
"upsidedownstudios/.git/objects/eb/1f60d591912688deb57d8a5877ce1e255f2d81": "a8bb51f9c9dd2d37f87cd847c5ec212a",
"upsidedownstudios/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"upsidedownstudios/.git/objects/f8/d9a2cc0951d026e96c8fc096c6bb2f8b40c923": "952d5637272fb9eec49c0c9cad422e98",
"upsidedownstudios/.git/refs/heads/main": "e858ee9d4b59a79e9eb1b74a0c408a03",
"upsidedownstudios/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"upsidedownstudios/.git/refs/remotes/origin/main": "313996dc4ceb52bbeb38e060553dfb29",
"upsidedownstudios/assets/AssetManifest.bin": "45ce04274e570d40d622c6c9021fffa2",
"upsidedownstudios/assets/AssetManifest.bin.json": "0eb695c4452bceda5586869201e1f6a6",
"upsidedownstudios/assets/AssetManifest.json": "4288169e6e37258a107eb87aaa8191ee",
"upsidedownstudios/assets/FontManifest.json": "937a1645f18958767853678e1109fca3",
"upsidedownstudios/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"upsidedownstudios/assets/fonts/Mono.ttf": "96985f7a507afce5ab786569d2b2368f",
"upsidedownstudios/assets/NOTICES": "1887acc3f293ec300399cba439c98b10",
"upsidedownstudios/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"upsidedownstudios/assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "946de7fd1470d676b40bcb8f3fbffef1",
"upsidedownstudios/assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "aad23b975d521339314bdc3ab4d4fbf0",
"upsidedownstudios/assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "773ebba095ec3590660722932c6e8500",
"upsidedownstudios/assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "e0bf253dc822f16a3c2a27cc229e03c5",
"upsidedownstudios/assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "afd764841ed1ab86e0d8070e83531e68",
"upsidedownstudios/assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "1b9aa14436c86843d7081313d68f2e72",
"upsidedownstudios/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"upsidedownstudios/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"upsidedownstudios/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"upsidedownstudios/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"upsidedownstudios/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"upsidedownstudios/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"upsidedownstudios/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"upsidedownstudios/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"upsidedownstudios/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"upsidedownstudios/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"upsidedownstudios/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"upsidedownstudios/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"upsidedownstudios/index.html": "3fe53e61470346270bf75f6aef909519",
"upsidedownstudios/main.dart.js": "b2724ae1cba71858f4e65d8fa6739965",
"upsidedownstudios/manifest.json": "e8ce348aae7634979590e415ed22e2ae",
"upsidedownstudios/version.json": "a808c9454a6055ca2baf608a0c9b3b7a",
"version.json": "a808c9454a6055ca2baf608a0c9b3b7a"};
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
