/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "8df90fb09d279895196cc9efd50e0fc1"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "6790b74617185c02c06a1379cd8f572d"
  },
  {
    "url": "assets/css/0.styles.4e418412.css",
    "revision": "2f55d8e9f7d990682f6ba4939348bb47"
  },
  {
    "url": "assets/img/image-1.28bfdabc.png",
    "revision": "28bfdabcc212669c05beafe31f303147"
  },
  {
    "url": "assets/img/image-2.9a7e129b.png",
    "revision": "9a7e129b9fcd85fc379f217eb76b9c41"
  },
  {
    "url": "assets/img/image-3.0210e7cc.png",
    "revision": "0210e7ccf8b96afa2da34ac5d301ee25"
  },
  {
    "url": "assets/img/image-4.8ecf077b.png",
    "revision": "8ecf077b6176aaeb1adac819d68dce20"
  },
  {
    "url": "assets/img/image-5.de7eee28.png",
    "revision": "de7eee284f3350e74b822c2e0294d741"
  },
  {
    "url": "assets/img/image-6.0373d5c4.png",
    "revision": "0373d5c46f3a275f775667d4a38603c9"
  },
  {
    "url": "assets/img/image.0d6f05c0.png",
    "revision": "0d6f05c06b1f2068f7511f5743af44f7"
  },
  {
    "url": "assets/img/Relation.235c8aaa.svg",
    "revision": "235c8aaa4816a3294299154ff94df419"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3a3d4bad.js",
    "revision": "7fe005d51a310f62fdbca77203a1c973"
  },
  {
    "url": "assets/js/11.8e986381.js",
    "revision": "3301a7d5e7e015e2a9322d49d22424bd"
  },
  {
    "url": "assets/js/12.afc41f22.js",
    "revision": "9d612b3ed031aca0daaa0aec94c3dbd0"
  },
  {
    "url": "assets/js/13.aefedbce.js",
    "revision": "cc3b23b336300069ce23cca74efdce04"
  },
  {
    "url": "assets/js/14.269233a3.js",
    "revision": "9eab04c9934f8bb6e2534a27ba4469d0"
  },
  {
    "url": "assets/js/15.c69c9e01.js",
    "revision": "1d490c4e968ac94b10e6ce8280a686e5"
  },
  {
    "url": "assets/js/16.32d0a413.js",
    "revision": "56032b026566504c4c4e80e4d42df883"
  },
  {
    "url": "assets/js/17.03deb549.js",
    "revision": "c850ff9755d32a32dc9908ee900c11a3"
  },
  {
    "url": "assets/js/18.42ab4df2.js",
    "revision": "364f0e4c6cb957646b68fd0e890911c0"
  },
  {
    "url": "assets/js/19.37fec180.js",
    "revision": "f216c9d1153de5858c631769e0c7c58b"
  },
  {
    "url": "assets/js/2.0d4937b0.js",
    "revision": "2bb2240e6f41483ff22fe42275fc7e8d"
  },
  {
    "url": "assets/js/20.e9462cba.js",
    "revision": "cc55ff541fcce44f28d39c619f4c7a64"
  },
  {
    "url": "assets/js/21.57913b72.js",
    "revision": "bc0eca0a965411eea8dced272bd902cd"
  },
  {
    "url": "assets/js/22.c5fefb24.js",
    "revision": "05f6bdeab341dd45c2e5b1cee8319fda"
  },
  {
    "url": "assets/js/23.9250bee6.js",
    "revision": "4ff759c8c286a5433072297f9ab400ae"
  },
  {
    "url": "assets/js/24.8a878e04.js",
    "revision": "0bdbc92a397fe411154173dba2c8222d"
  },
  {
    "url": "assets/js/25.c817ada7.js",
    "revision": "64cd8c16147b7c0ef2185cc39e2df05a"
  },
  {
    "url": "assets/js/27.e0a30cbf.js",
    "revision": "6b360d71b9cafc5a3fcb74916d6486a2"
  },
  {
    "url": "assets/js/3.31ca8fb2.js",
    "revision": "aa3b3dcc3bb04dcecff22d8353797858"
  },
  {
    "url": "assets/js/4.812af63e.js",
    "revision": "0236428aa3a7e134e870aade1673b0b2"
  },
  {
    "url": "assets/js/5.e6746813.js",
    "revision": "f7161c1ef1cbdfb7913e7b87cf5afb6d"
  },
  {
    "url": "assets/js/6.f7784441.js",
    "revision": "d1b9575e7f4e71abd186035467c90759"
  },
  {
    "url": "assets/js/7.45d261cf.js",
    "revision": "396e9626c00e6fef1dceca4ff47c9a46"
  },
  {
    "url": "assets/js/8.28bb39cc.js",
    "revision": "7a8f50807f8b8dedda8ab8320c26c1f0"
  },
  {
    "url": "assets/js/9.6f8a10da.js",
    "revision": "b091bd45e1d36ee80ca578862d20ee71"
  },
  {
    "url": "assets/js/app.6b56a9d4.js",
    "revision": "1ab00ab1171434c9e695978ed295d172"
  },
  {
    "url": "conclusion/index.html",
    "revision": "39497063d57d07df8a6eb78417555680"
  },
  {
    "url": "design/index.html",
    "revision": "19be4911f5b917bc423fb2be91a81511"
  },
  {
    "url": "index.html",
    "revision": "f2200fa61287f38c2324a63b0e71f469"
  },
  {
    "url": "intro/index.html",
    "revision": "8c0a1387809e1e9599055629c29a097b"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "c307af9899be2ca11ad465fd2353ff57"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4a21f3f6cc25596b35a583a83f3e9e10"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "606cf47672f094a95c20ec943afdcce8"
  },
  {
    "url": "software/index.html",
    "revision": "e78e9d19725a0c42f8c09471a4a9a55b"
  },
  {
    "url": "test/index.html",
    "revision": "b52b4e8f1d7272cd8a8d4a50feaf6b6b"
  },
  {
    "url": "use cases/index.html",
    "revision": "b7a55d21eed76208f2d51651fdeced49"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
