importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })]
  })
);

if (!self.define) {
  const e = e => {
      "require" !== e && (e += ".js");
      let r = Promise.resolve();
      return i[e] ||
        (r = new Promise(async r => {
          if ("document" in self) {
            const i = document.createElement("script");
            (i.src = e), document.head.appendChild(i), (i.onload = r);
          } else importScripts(e), r();
        })), r.then(() => {
        if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
        return i[e];
      });
    },
    r = (r, i) => {
      Promise.all(r.map(e)).then(e => i(1 === e.length ? e[0] : e));
    },
    i = { require: Promise.resolve(r) };
  self.define = (r, c, o) => {
    i[r] ||
      (i[r] = Promise.resolve().then(() => {
        let i = {};
        const s = { uri: location.origin + r.slice(1) };
        return Promise.all(
          c.map(r => {
            switch (r) {
              case "exports":
                return i;
              case "module":
                return s;
              default:
                return e(r);
            }
          })
        ).then(e => {
          const r = o(...e);
          return i.default || (i.default = r), i;
        });
      }));
  };
}
define("./sw.js", ["./workbox-2bf53ce0"], function(e) {
  "use strict";
  self.addEventListener("message", e => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }), e.precacheAndRoute(
    [
      {
        url: "Account/Config.conf",
        revision: "ef1a50185e3114cdabc8828370f74063"
      },
      {
        url: "Account/Css/main.css",
        revision: "af819d2ee395c4200c07f294c6a01667"
      },
      {
        url: "Account/icon_dock.png",
        revision: "2e58c699195699845997922794188c30"
      },
      {
        url: "Account/icon.png",
        revision: "2e58c699195699845997922794188c30"
      },
      {
        url: "Account/iconAvatar.png",
        revision: "854e6b34513b1c2b65c6b689c38caa88"
      },
      {
        url: "Account/Locale/en.lang",
        revision: "397aa84a1026ec776555ba785083eb42"
      },
      {
        url: "Account/Locale/fi.lang",
        revision: "53f7ab6ff9ae28be062ceeaf76f50617"
      },
      {
        url: "Account/Locale/fr.lang",
        revision: "cb47dbdc49c7217a65ce078d112c79b4"
      },
      {
        url: "Account/Locale/no.lang",
        revision: "6b29eb650aa33592adc271ae99186724"
      },
      {
        url: "Account/Locale/pl.lang",
        revision: "ec0bd923791ce15698e4c73437e64ada"
      },
      {
        url: "Account/preview.png",
        revision: "78c229285bc4c41fe82c84aaafaf72e0"
      },
      {
        url: "Account/Scripts/account.js",
        revision: "4a29387951b93756aedbde5c6395492b"
      },
      {
        url: "Account/Scripts/accountmain.js",
        revision: "a699d0632c110f5d810ab931afbe879e"
      },
      {
        url: "Account/Scripts/newstorage.js",
        revision: "65e636f7f07c4020d9ba74629bf75b2a"
      },
      {
        url: "Account/Templates/friendnetwork1.html",
        revision: "34010556f5fe8e812fe02b703bf636b5"
      },
      {
        url: "Account/Templates/friendnetwork2.html",
        revision: "2a857828b8ff3a5b49f0e94595945220"
      },
      {
        url: "Account/Templates/main.html",
        revision: "15bdb62ec2db0b0d4a818b1fc380b404"
      },
      {
        url: "Account/Templates/storage_edit.html",
        revision: "badf65dc7abf90751f1ce60a61637988"
      },
      {
        url: "Account/Templates/storage.html",
        revision: "c4e8e6fc78031062e07fb018054bb1dd"
      },
      {
        url: "Applicationmgr/applicationmgr.js",
        revision: "6ae274cfe86bd046a28ef740269e95cf"
      },
      {
        url: "Applicationmgr/Config.conf",
        revision: "761426ea76eefe1a34cdecebfd5a8e4d"
      },
      {
        url: "Applicationmgr/gui.js",
        revision: "730c90b8a505706cd9e09caba60c58d8"
      },
      {
        url: "Applicationmgr/icon.png",
        revision: "14f19fdb7ec45a8765df064e3358d1e1"
      },
      {
        url: "Applicationmgr/index.html",
        revision: "5f62744eedff66b0c9b86a38d840d05c"
      },
      {
        url: "Applicationmgr/Locale/en.lang",
        revision: "d251caafa40f4916faca146c8d8ee890"
      },
      {
        url: "Applicationmgr/Locale/fi.lang",
        revision: "ed0b7ecdf0ec24b118cddf7a60495a3f"
      },
      {
        url: "Applicationmgr/Locale/fr.lang",
        revision: "865c87d2aacc69852e08bdb1954afdb1"
      },
      {
        url: "Applicationmgr/Locale/no.lang",
        revision: "c43849eb76f5dba49fa9eb8c7e6c0457"
      },
      {
        url: "Applicationmgr/Locale/pl.lang",
        revision: "f3a458b8ac67dea2ea42ed13945e9b7d"
      },
      {
        url: "Applicationmgr/preview.png",
        revision: "37899028767f3d0ae8b974134b4d7066"
      },
      {
        url: "Applicationmgr/Templates/main.html",
        revision: "13b7b52b7217676c36f332963f069e33"
      },
      {
        url: "Author/Config.conf",
        revision: "3b56ccf142ef822b6058df8e349cce46"
      },
      {
        url: "Author/Css/design_atmospheric.css",
        revision: "79f7554fd61c2aa4a3f96d75d02ae539"
      },
      {
        url: "Author/Css/design_dark.css",
        revision: "9acb9a53fe7cd2481ce355ee016354e6"
      },
      {
        url: "Author/Css/design_default.css",
        revision: "b85b8af61f1aa9c2d227c692cd0ee9a5"
      },
      {
        url: "Author/Css/editor_inside.css",
        revision: "be647fb82d399dc7fb79f84033f2cddc"
      },
      {
        url: "Author/Css/editor.css",
        revision: "ab159d214576b7a28bd2cadcdd4ac76f"
      },
      {
        url: "Author/Css/prefs.css",
        revision: "e89eb6eb398c1b18393e90495884961f"
      },
      {
        url: "Author/Documentation/index.html",
        revision: "394ff6885b24bd5823d3664a5107a256"
      },
      {
        url: "Author/Gfx/bagebreak.png",
        revision: "5a3d1a67aab6222d81af632e27fcb79f"
      },
      {
        url: "Author/Gfx/page.png",
        revision: "2ef6d783abf578fe21703cd43ca8b911"
      },
      {
        url: "Author/Gfx/pagebreak.png",
        revision: "2196aa04f3ac9b9c5280ca0bd9b2478f"
      },
      {
        url: "Author/Gfx/pagebreaklast.png",
        revision: "bae007064b8f0a81ab65113bba3c0a51"
      },
      {
        url: "Author/Gfx/pagebreaks.xcf",
        revision: "cc17b1257942f1b359a0d2134676873e"
      },
      {
        url: "Author/icon_dock.png",
        revision: "701075efdadff282d7552ae0c399719f"
      },
      {
        url: "Author/icon.png",
        revision: "701075efdadff282d7552ae0c399719f"
      },
      {
        url: "Author/index.html",
        revision: "a5b6087de8abb71ca03a4795ad5549e5"
      },
      {
        url: "Author/Locale/en.lang",
        revision: "e1199e53b35613198e1350da30a20c02"
      },
      {
        url: "Author/Locale/fi.lang",
        revision: "d1ab15f2a893dcbfc6d17db007ee03d8"
      },
      {
        url: "Author/Locale/fr.lang",
        revision: "abc62e64d4b76387ceb784aca7714bcd"
      },
      {
        url: "Author/Locale/no.lang",
        revision: "4401a01d936b40a67bcee0118aee534d"
      },
      {
        url: "Author/Locale/pl.locale",
        revision: "4029f17fdceb3a839a2dd265a19afe42"
      },
      {
        url: "Author/preview.png",
        revision: "701075efdadff282d7552ae0c399719f"
      },
      {
        url: "Author/Scripts/author.js",
        revision: "a89d6d4b04f67585594efefef1aaebb6"
      },
      {
        url: "Author/Scripts/ckeditor/adapters/jquery.js",
        revision: "eca72ded5e930c658e7a0b7c0284342d"
      },
      {
        url: "Author/Scripts/ckeditor/build-config.js",
        revision: "0d574007db05885c26e450d70a8d32ad"
      },
      {
        url: "Author/Scripts/ckeditor/CHANGES.md",
        revision: "3b6868ce7adf9aec138bd25c13dc2b3e"
      },
      {
        url: "Author/Scripts/ckeditor/ckeditor.js",
        revision: "2d0c4dc04aff7277fce663f17814d668"
      },
      {
        url: "Author/Scripts/ckeditor/config.js",
        revision: "7fd6d3c17c97f1a2f8f8726367ba441e"
      },
      {
        url: "Author/Scripts/ckeditor/contents.css",
        revision: "b16b7140e24e38fbf62337ae3d3ae29a"
      },
      {
        url: "Author/Scripts/ckeditor/lang/af.js",
        revision: "12556d71b1ee4a345809a37d2cc34cd3"
      },
      {
        url: "Author/Scripts/ckeditor/lang/ar.js",
        revision: "658df7d95af25484f1e989dc46874bdb"
      },
      {
        url: "Author/Scripts/ckeditor/lang/bg.js",
        revision: "7bbb34bbdb9e5f14fe3f74a198d26868"
      },
      {
        url: "Author/Scripts/ckeditor/lang/bn.js",
        revision: "46a0ef5312c51e735543754b44c197d8"
      },
      {
        url: "Author/Scripts/ckeditor/lang/bs.js",
        revision: "4f8d762a5efa48cb19d685ed1494f1bc"
      },
      {
        url: "Author/Scripts/ckeditor/lang/ca.js",
        revision: "97ca8cf5a0a592432ef81558bc849462"
      },
      {
        url: "Author/Scripts/ckeditor/lang/cs.js",
        revision: "97e118d4d8e33b7ec8c8ca11d8834e41"
      },
      {
        url: "Author/Scripts/ckeditor/lang/cy.js",
        revision: "c18d4c5beeda7491c2dccfd320931935"
      },
      {
        url: "Author/Scripts/ckeditor/lang/da.js",
        revision: "f0a4b27f5d2a4cdad5a9155e80b352e0"
      },
      {
        url: "Author/Scripts/ckeditor/lang/de.js",
        revision: "aee6ad394c6b56438a6f798ae4a761e7"
      },
      {
        url: "Author/Scripts/ckeditor/lang/el.js",
        revision: "1ccc6896b14f2cd8c23a94e52c08ef9e"
      },
      {
        url: "Author/Scripts/ckeditor/lang/en-au.js",
        revision: "44d018f3ee305e0268a32603254c0b38"
      },
      {
        url: "Author/Scripts/ckeditor/lang/en-ca.js",
        revision: "537d4bd23ca9c932873eea6f8bde013c"
      },
      {
        url: "Author/Scripts/ckeditor/lang/en-gb.js",
        revision: "3f62dc3a5c5dc0e40a9204b234958fa0"
      },
      {
        url: "Author/Scripts/ckeditor/lang/en.js",
        revision: "46f72563886018d8bc8a9a02c5a049e1"
      },
      {
        url: "Author/Scripts/ckeditor/lang/eo.js",
        revision: "9cfce9c6b15c6ceb753f56429ef1fb20"
      },
      {
        url: "Author/Scripts/ckeditor/lang/es.js",
        revision: "dd7392605c1cdaea08424b23a8c33c90"
      },
      {
        url: "Author/Scripts/ckeditor/lang/et.js",
        revision: "6e15a269be47fbebcb3e3017e3e5bbad"
      },
      {
        url: "Author/Scripts/ckeditor/lang/eu.js",
        revision: "6850047d06893d0c5372b888ffab48b8"
      },
      {
        url: "Author/Scripts/ckeditor/lang/fa.js",
        revision: "b12393b6492349f67a6b984eeb1dd660"
      },
      {
        url: "Author/Scripts/ckeditor/lang/fi.js",
        revision: "155082de6c3a8e84145a3a549c6e4a36"
      },
      {
        url: "Author/Scripts/ckeditor/lang/fo.js",
        revision: "c9e84b4a36e3a8e2d0f0ddcec8e6be4c"
      },
      {
        url: "Author/Scripts/ckeditor/lang/fr-ca.js",
        revision: "64933416d6b7d797c0891e794090eaa1"
      },
      {
        url: "Author/Scripts/ckeditor/lang/fr.js",
        revision: "46c2ac884343f52e3805d050e8f22ba1"
      },
      {
        url: "Author/Scripts/ckeditor/lang/gl.js",
        revision: "291ac014b90531d16045639a6e789c6a"
      },
      {
        url: "Author/Scripts/ckeditor/lang/gu.js",
        revision: "1a1dedbfd755e104a632e392ffdf983e"
      },
      {
        url: "Author/Scripts/ckeditor/lang/he.js",
        revision: "1a04c8dd60993d0a983c153160f2d8c3"
      },
      {
        url: "Author/Scripts/ckeditor/lang/hi.js",
        revision: "4364c98c48d35bacb988ee2bc3d881d2"
      },
      {
        url: "Author/Scripts/ckeditor/lang/hr.js",
        revision: "05963bc74668c0f7ecf9d64bbe0b73e6"
      },
      {
        url: "Author/Scripts/ckeditor/lang/hu.js",
        revision: "801039c758b483390017bc1cde6db55b"
      },
      {
        url: "Author/Scripts/ckeditor/lang/id.js",
        revision: "62ab3d0ef3579dcc0b5699c160c83bf2"
      },
      {
        url: "Author/Scripts/ckeditor/lang/is.js",
        revision: "4c7345a9cafb240bbe81b57512c1a8a2"
      },
      {
        url: "Author/Scripts/ckeditor/lang/it.js",
        revision: "ec1495748b8ac42ad468f5799ba06598"
      },
      {
        url: "Author/Scripts/ckeditor/lang/ja.js",
        revision: "cc8b2797d24876d29f9319a6c836717e"
      },
      {
        url: "Author/Scripts/ckeditor/lang/ka.js",
        revision: "399662c4bc45aef937a5401113acef68"
      },
      {
        url: "Author/Scripts/ckeditor/lang/km.js",
        revision: "56f0b39ad9227bf8b6e8fc4346ce9e9b"
      },
      {
        url: "Author/Scripts/ckeditor/lang/ko.js",
        revision: "413d63a86e0f26d7253747b6f48f99c6"
      },
      {
        url: "Author/Scripts/ckeditor/lang/ku.js",
        revision: "c1808583b398ec8424ca689f27a7985a"
      },
      {
        url: "Author/Scripts/ckeditor/lang/lt.js",
        revision: "23b1e34c77de0860f45b8e3766970e0b"
      },
      {
        url: "Author/Scripts/ckeditor/lang/lv.js",
        revision: "5e2abfab15c7db0030874c2e7470974c"
      },
      {
        url: "Author/Scripts/ckeditor/lang/mk.js",
        revision: "697b1d2933d695072885c228afd3133c"
      },
      {
        url: "Author/Scripts/ckeditor/lang/mn.js",
        revision: "c37ead9bf63d318a3c0f93050cfbbe27"
      },
      {
        url: "Author/Scripts/ckeditor/lang/ms.js",
        revision: "7352928ff0cb7e66fa21b308333f62cc"
      },
      {
        url: "Author/Scripts/ckeditor/lang/nb.js",
        revision: "e4e06aa2fa70e5c1d1dd0a7024f1594c"
      },
      {
        url: "Author/Scripts/ckeditor/lang/nl.js",
        revision: "429e98607fe9e427ccba87ff9e73ca7e"
      },
      {
        url: "Author/Scripts/ckeditor/lang/no.js",
        revision: "fc6837195372e1b3da1f8d5ae01717d5"
      },
      {
        url: "Author/Scripts/ckeditor/lang/pl.js",
        revision: "19d342f5e939c32c16ba6da16d03dad8"
      },
      {
        url: "Author/Scripts/ckeditor/lang/pt-br.js",
        revision: "84391a9104920b3e8c5bc197d4841037"
      },
      {
        url: "Author/Scripts/ckeditor/lang/pt.js",
        revision: "2745e5f068508b35165c9212be6848eb"
      },
      {
        url: "Author/Scripts/ckeditor/lang/ro.js",
        revision: "3cc8f8246d1a81626f3fae82520458d5"
      },
      {
        url: "Author/Scripts/ckeditor/lang/ru.js",
        revision: "b224c27b0ab15cdc28adfb5eb1789a70"
      },
      {
        url: "Author/Scripts/ckeditor/lang/si.js",
        revision: "7d866c111960a7fd7d764960d8dcf14a"
      },
      {
        url: "Author/Scripts/ckeditor/lang/sk.js",
        revision: "74096a24e298c6fb03297c7e8000cd5c"
      },
      {
        url: "Author/Scripts/ckeditor/lang/sl.js",
        revision: "293d1ff87593a58d91ea8db8166f01e2"
      },
      {
        url: "Author/Scripts/ckeditor/lang/sq.js",
        revision: "685eff2740b8c5d45d592afe61c329d6"
      },
      {
        url: "Author/Scripts/ckeditor/lang/sr-latn.js",
        revision: "81955560b244c2e0ea887d3766324c7d"
      },
      {
        url: "Author/Scripts/ckeditor/lang/sr.js",
        revision: "9f456c9a8193c88378242306d979d59a"
      },
      {
        url: "Author/Scripts/ckeditor/lang/sv.js",
        revision: "c3cf1dd04554bbbd276f4258715e6cdf"
      },
      {
        url: "Author/Scripts/ckeditor/lang/th.js",
        revision: "a396eb425809cb0ae855046cc1702cac"
      },
      {
        url: "Author/Scripts/ckeditor/lang/tr.js",
        revision: "25ae3d383a78bf54f122ec9cb0fd8abb"
      },
      {
        url: "Author/Scripts/ckeditor/lang/tt.js",
        revision: "9d28a69952765f4545716cfea365c2e8"
      },
      {
        url: "Author/Scripts/ckeditor/lang/ug.js",
        revision: "19a84cc3fb5b19a7a6d4a2d6e7251517"
      },
      {
        url: "Author/Scripts/ckeditor/lang/uk.js",
        revision: "cc6a34d7d8bdd593ea26ea52172302f9"
      },
      {
        url: "Author/Scripts/ckeditor/lang/vi.js",
        revision: "4a6014920a81cb836d68c265602534cd"
      },
      {
        url: "Author/Scripts/ckeditor/lang/zh-cn.js",
        revision: "59e66988eaf007d72e3554c8c76d359b"
      },
      {
        url: "Author/Scripts/ckeditor/lang/zh.js",
        revision: "a76fa68fe9da5f6e430d9d6b597c1a4b"
      },
      {
        url: "Author/Scripts/ckeditor/LICENSE.md",
        revision: "fa477151686981ba14684f8cda0ac352"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/a11yhelp.js",
        revision: "2b2a1e86ada84921ff2d5fec2c62e5cf"
      },
      {
        url:
          "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/_translationstatus.txt",
        revision: "9d2f1b77aa8589aad32d2e72c4a48c1c"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/af.js",
        revision: "77610eb458651a84ea6d9816a48e2465"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ar.js",
        revision: "5298f260e9dbdfed7f668ad4b716efff"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/bg.js",
        revision: "19519bc82b1da9d8766bf66b02d0ea86"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ca.js",
        revision: "68dd8f9b75d9021c8012f41d75bcae2e"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/cs.js",
        revision: "1341eaada39a7bbdfc02e01b0f943114"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/cy.js",
        revision: "a37116c7f656d23986f7ee12013e9931"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/da.js",
        revision: "1117ea5bd66ee2413bf3e6588bdfbe3f"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/de.js",
        revision: "84736adbace6b2d18a1519df58df9984"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/el.js",
        revision: "2745cc14fa5ca729389a71a39fcbc68c"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/en-gb.js",
        revision: "89521eceb85233a81fabb51da258b7a7"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/en.js",
        revision: "e1029f1f34f02309446e47f24c4a228b"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/eo.js",
        revision: "ef98d102aae2bde0ce1cf168d885ea24"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/es.js",
        revision: "4b09630f06aeb20c90562aad9b103e2b"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/et.js",
        revision: "a5f44dbe1a4387dab0fa5fd5f85adaa9"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/fa.js",
        revision: "8e3b2cddf8a75f9dbc3e86a8b848fdc8"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/fi.js",
        revision: "92f430b3b19bab5b7f66a7ba0936f1eb"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/fo.js",
        revision: "a0f94ef1e0367ff2d76a1f8994c9e83b"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/fr-ca.js",
        revision: "b2e2a582ef5afd92f3f4befb056ad048"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/fr.js",
        revision: "1048134331d92947735983cb211c810b"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/gl.js",
        revision: "e5fb7f32608bd881e49eddaad3ae2831"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/gu.js",
        revision: "92179fa4b45fe3b8f1232813dc13c7a0"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/he.js",
        revision: "e10bf870d07f28ac77259df7c567d888"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/hi.js",
        revision: "a9f1cbf7bf73e7d89bbae3110a60bf4d"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/hr.js",
        revision: "b10a04fa6669949dd1320db1926a513a"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/hu.js",
        revision: "ebdb6d297819eeeb39356729bb6fec16"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/id.js",
        revision: "b93a1f0bc1c9f348d3a6453201d3625d"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/it.js",
        revision: "b1ff65b9f67039884a5ccd0ff4c962cf"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ja.js",
        revision: "5b1a52753aa05e3050098ca2ab659720"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/km.js",
        revision: "dc280f545f6c804f5dc74fe9958e38af"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ko.js",
        revision: "9c336d8507b9e9a0b1ec25d4824da955"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ku.js",
        revision: "5627d70c2cb29c0b8a8859475f14b03c"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/lt.js",
        revision: "9efc5a52d2a61c867e6c3a8ab1a46872"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/lv.js",
        revision: "f3516185b33d6057866fa8583e6535a9"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/mk.js",
        revision: "bc2643e6980f452c5f1b2e11e3e99356"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/mn.js",
        revision: "fefd4a353473e72b7e2b2fbaf49eee70"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/nb.js",
        revision: "1f65c4a6cac889ee8ca3b94ab947e6ed"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/nl.js",
        revision: "84f19169119e8596c4f46d16816f2574"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/no.js",
        revision: "23e4843573feffc12f9426bad9cc179a"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/pl.js",
        revision: "563a08846e6e508cf8acaf6ab6df84ad"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/pt-br.js",
        revision: "83c646ae16e2884b792653fc00583411"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/pt.js",
        revision: "17438750dcfdee4c4ce019f02b1f35c7"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ro.js",
        revision: "8111f2045c0917fef7fe543eda1ecf8f"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ru.js",
        revision: "2bf63c01825e49b88df885f81b8b18a1"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/si.js",
        revision: "fcbece7992db8baaa70a6c6bd905dd71"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sk.js",
        revision: "46dc4c6c82b4619544cea3a711fe9180"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sl.js",
        revision: "d09deb43939f4a05533caf739fad3f9b"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sq.js",
        revision: "72144bea3ffdd02943120f2b53b6d168"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sr-latn.js",
        revision: "d6ce66a03a23203755313099c73bbc5b"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sr.js",
        revision: "5acbd14158d9be935d41ff787bbc2d42"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sv.js",
        revision: "dbb3e291a2ac8be732f99871f9416092"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/th.js",
        revision: "544a3c7d8ec92f86a435340baa626f49"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/tr.js",
        revision: "1bc1e21f0d82f8befa53ad9756abc460"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/tt.js",
        revision: "4392a5773db42dc27239394ec928891e"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ug.js",
        revision: "a035042cac07450623d2535bdc26c103"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/uk.js",
        revision: "1ab1651d0ce0ce2c2f817b0178749d16"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/vi.js",
        revision: "68623c4e31e0b281cb798088c30e6612"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/zh-cn.js",
        revision: "ef606137846fc04a14073346878f3388"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/zh.js",
        revision: "75be02e7a3ab97e56b74304fdc22bed8"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/about/dialogs/about.js",
        revision: "caae736d9b47df33924af67f49af7a76"
      },
      {
        url:
          "Author/Scripts/ckeditor/plugins/about/dialogs/hidpi/logo_ckeditor.png",
        revision: "6318d2b6f7fc79b4ed0404ffbc2dac1e"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/about/dialogs/logo_ckeditor.png",
        revision: "70dd831c761a20467a6ba9e5ae736f91"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/clipboard/dialogs/paste.js",
        revision: "1ef599eede007bc73616734f24895ab8"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/dialog/dialogDefinition.js",
        revision: "8eaa88b59fa1235f9cd660926ba96de2"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/icons_hidpi.png",
        revision: "1f57f384a8331a0cd3b8dfadfb61f0cd"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/icons.png",
        revision: "30df606419222c418c24d5cca47f66e5"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/image/dialogs/image.js",
        revision: "a2d3c431adfc4ad6481205059fba6905"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/image/images/noimage.png",
        revision: "77404b5590596de508a542979f3cda84"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/link/dialogs/anchor.js",
        revision: "da98eee7c83fffd4fc1c4bffdb733fa4"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/link/dialogs/link.js",
        revision: "43746a26b1aa8fdbca9e714af38a5ad1"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/link/images/anchor.png",
        revision: "c23e1c6b52f6ca6678b77f38fef61789"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/link/images/hidpi/anchor.png",
        revision: "9df1a4e40cabf35907a16ea59f3f9df1"
      },
      {
        url:
          "Author/Scripts/ckeditor/plugins/magicline/images/hidpi/icon-rtl.png",
        revision: "b37d0404583c0ac273a27873451c3234"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/magicline/images/hidpi/icon.png",
        revision: "5ba2e7b6aa50c7843ae9ca01ce08b606"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/magicline/images/icon-rtl.png",
        revision: "a29eda8cd2b1ebcbd3379654acebfb85"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/magicline/images/icon.png",
        revision: "baf6974c98b636142c7b0b5ba19bd96c"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/pastefromword/filter/default.js",
        revision: "dda9ae05c22672476cfccc9012a4035a"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/scayt/dialogs/options.js",
        revision: "18a402960a425dc2af537a337e148ef0"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/scayt/dialogs/toolbar.css",
        revision: "abb7173bc76c982641101d81cc544ab0"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/scayt/LICENSE.md",
        revision: "e8f3afac5c765acbec1df8fc737eb48d"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/scayt/README.md",
        revision: "1318c10ce6d6fb1c902d3c7915f41940"
      },
      {
        url:
          "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/_translationstatus.txt",
        revision: "194d98388d302d35875d878e37eb83d2"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/af.js",
        revision: "1666a23eeb4a5c7db42a0a9a45fdda00"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ar.js",
        revision: "f5ad9545327ba666a071300c71a98fd1"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/bg.js",
        revision: "9e485bb3bc19949b20c4b30ed0191850"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ca.js",
        revision: "53ca3b43bc153ca7e83f30476c1a6bb1"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/cs.js",
        revision: "a405fef9de64f9046451e9b14270f158"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/cy.js",
        revision: "f42224db980e551c8dd36c648e2b39e7"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/da.js",
        revision: "801e666253f0345273c52eea1d41a428"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/de.js",
        revision: "3882c4dd68c40387c9919583141fa249"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/el.js",
        revision: "156089ea87e23918eba1a0fafa58502d"
      },
      {
        url:
          "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/en-gb.js",
        revision: "f402047321173d272729b7f626b1a3b6"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/en.js",
        revision: "c0d228fd5f64a608f327919226c7dde8"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/eo.js",
        revision: "cf9e9085f4c53e1b41a462c9f7cd3736"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/es.js",
        revision: "bb5973778c5b0e303d601299252ef38f"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/et.js",
        revision: "17243a32a7d062a7b83de287882fbf41"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/fa.js",
        revision: "1016e8862e38891fcddada6779e4cdcd"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/fi.js",
        revision: "17c1ab4b0a96dac9971d481546f41c9f"
      },
      {
        url:
          "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/fr-ca.js",
        revision: "7e2aef8cba00ee5e3ca22ebd6ca18152"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/fr.js",
        revision: "75cce46a858a36a0be36fbbcd36d39d2"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/gl.js",
        revision: "96f5dc5c5d4cf5a55aaaf25270cad7d1"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/he.js",
        revision: "3cebad0f06a7d40a5c2c5ec144763393"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/hr.js",
        revision: "d1db0d5003a2351c89daa088bd0f0095"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/hu.js",
        revision: "c4f09c06d93bb2daf303d9ec08ab0698"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/id.js",
        revision: "8ab5bd0f766c722a0b03844fb3d8c215"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/it.js",
        revision: "2deca5b892189aa0deaf972822a4bc9d"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ja.js",
        revision: "1e4005db555fe5326af5a3aeef7f72e0"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/km.js",
        revision: "f167b3bea9c304ecc2dde6687a67ce30"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ko.js",
        revision: "547cfc5fff4b4a97bb441d3c6238a3dd"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ku.js",
        revision: "ebb93ee2c8a689eb3374e299f7b602f0"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/lt.js",
        revision: "48c097cbbfdaf31524026da2c1d3b9a3"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/lv.js",
        revision: "09cc24d56e5dce10cf18bb5b632185a0"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/nb.js",
        revision: "1faef36572f440956e8f986483f8069c"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/nl.js",
        revision: "2ce403a014685241ca9242fad4c8b6ff"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/no.js",
        revision: "83017fc6a5316d2d9f721d40d334ca1f"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/pl.js",
        revision: "facdcd0eb8c08080ee1206c24d258eae"
      },
      {
        url:
          "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/pt-br.js",
        revision: "8738d54a0b75503832a310edf6b016e0"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/pt.js",
        revision: "da374418587cfd4f9b57738822c88f6e"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ru.js",
        revision: "26689aa82c4c6123b8ed4704edf7ddec"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/si.js",
        revision: "582f81276c16d77d4b0d2e94c7773f4d"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/sk.js",
        revision: "c60c29d22f73b1ca17f7ac2ac0fc8d7a"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/sl.js",
        revision: "a19477b47865dd6728f4b92fbcab4f0d"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/sq.js",
        revision: "f7a1abe904932ac0359bb75f664d23ba"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/sv.js",
        revision: "bf95f9f532e5c99c6ac5deac7b0847d3"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/th.js",
        revision: "dde66b3b8aab652de1c2914ab4767a7c"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/tr.js",
        revision: "df88bbbd74cb6ab533a271b8735b3fe6"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/tt.js",
        revision: "198a6f1592948b3ad80eb1cd8c1fed6b"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ug.js",
        revision: "4b87a5982419701ee101da7d26dd3a49"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/uk.js",
        revision: "06c3a7c5e6e917e840be87beda2e2cc4"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/vi.js",
        revision: "56c2c1b9edcbbe87cb61649d8be38b64"
      },
      {
        url:
          "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/zh-cn.js",
        revision: "1553fa8a047dfaa6a4bd3c0664c091e9"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/specialchar/dialogs/lang/zh.js",
        revision: "208345f66f010acbfdf31407735f10be"
      },
      {
        url:
          "Author/Scripts/ckeditor/plugins/specialchar/dialogs/specialchar.js",
        revision: "7df17f4a2a6b9da4061cc5f9e5d62dd2"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/table/dialogs/table.js",
        revision: "3db9c34228455d79e24377605b4d0356"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/tabletools/dialogs/tableCell.js",
        revision: "8bd7b96e931c2522c3e1f848b17402f7"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/wsc/dialogs/ciframe.html",
        revision: "e9ae171b5422f05c3090710ebc17ab89"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/wsc/dialogs/tmpFrameset.html",
        revision: "434bc63614cd525c4bba7396a672851d"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/wsc/dialogs/wsc_ie.js",
        revision: "d6bd3fb8585199cb7bb3ed86fef1a3c2"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/wsc/dialogs/wsc.css",
        revision: "9f63e9dd90b207fdf884bb6e8b5dfbaf"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/wsc/dialogs/wsc.js",
        revision: "b9f28e5c3dfbc51a6562f7e16e25bb44"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/wsc/LICENSE.md",
        revision: "6b7f5cf703f4c8a3e0b53175e356dc11"
      },
      {
        url: "Author/Scripts/ckeditor/plugins/wsc/README.md",
        revision: "07c5f45697e13e4f020fbf2d61765b99"
      },
      {
        url: "Author/Scripts/ckeditor/README.md",
        revision: "f09f4f33e80b4f91971ed70356a7f4ae"
      },
      {
        url: "Author/Scripts/ckeditor/samples/css/samples.css",
        revision: "22d1e3fddd57ab9f97653a497ef43dab"
      },
      {
        url: "Author/Scripts/ckeditor/samples/img/github-top.png",
        revision: "b22a7a41d8e3f3f6ad7fd0ed74fd165c"
      },
      {
        url: "Author/Scripts/ckeditor/samples/img/header-bg.png",
        revision: "d329c8537d5ec7b90943f66c97e16a35"
      },
      {
        url: "Author/Scripts/ckeditor/samples/img/header-separator.png",
        revision: "8b578c337e0ab69dc6f049985483f8a5"
      },
      {
        url: "Author/Scripts/ckeditor/samples/img/logo.png",
        revision: "b578ff8a84bb673413ea7959864448ce"
      },
      {
        url: "Author/Scripts/ckeditor/samples/img/navigation-tip.png",
        revision: "3453b1e41914b2be899303d76fef144b"
      },
      {
        url: "Author/Scripts/ckeditor/samples/index.html",
        revision: "d3121153febd8779c53e4fd33d26eb12"
      },
      {
        url: "Author/Scripts/ckeditor/samples/js/sample.js",
        revision: "be434e8e6fa329933111729f4ca1d71c"
      },
      {
        url: "Author/Scripts/ckeditor/samples/js/sf.js",
        revision: "342cd0d2fa56a0002148c06bf12e1b13"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/ajax.html",
        revision: "21e63b64f0acd03b7c365b2079833d5e"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/api.html",
        revision: "389c14e4d34ecd4cfa8221ebbae37982"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/appendto.html",
        revision: "45b0ceac7720b118d765386b95c7d44c"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/assets/inlineall/logo.png",
        revision: "24eff0ec56a9892334bb8f6041dcd562"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/old/assets/outputxhtml/outputxhtml.css",
        revision: "5a86ee8ed5c92ad7e93eb5f126709007"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/assets/posteddata.php",
        revision: "87bde163c8c49508cbf0966ecccd35f9"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/assets/sample.jpg",
        revision: "21d9ee7d983e172bf211e7724b39b383"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/old/assets/uilanguages/languages.js",
        revision: "1e929eb77c49528d2d850914db292223"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/datafiltering.html",
        revision: "2af38a30c646d7b02bd0f7be3b2e29d5"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/dialog/assets/my_dialog.js",
        revision: "bf09564e7683336e9fc0bdf4a38120f0"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/dialog/dialog.html",
        revision: "132dc7a13a48dc4fe3b175903ec4c831"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/divreplace.html",
        revision: "f8c1799966954b174ca24be7e550a239"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/enterkey/enterkey.html",
        revision: "7ff69ae8bb6385bbe23c0169379ca02c"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/old/htmlwriter/assets/outputforflash/outputforflash.fla",
        revision: "8fb373f8580dc2f95678ca861a1ba9af"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/old/htmlwriter/assets/outputforflash/outputforflash.swf",
        revision: "de5410f8539db860e90a0c437f592f39"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/old/htmlwriter/assets/outputforflash/swfobject.js",
        revision: "4edbdacf13ab7ffac362061c9af8fa2c"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/old/htmlwriter/outputforflash.html",
        revision: "45093cccdc75a791d59ee355f77167b4"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/htmlwriter/outputhtml.html",
        revision: "2d1e474e5cb612cbbd4d4000e40100a8"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/index.html",
        revision: "ce8adcee43f9143c68742d93665faf03"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/inlineall.html",
        revision: "0c8d72b3375ab52f2f6cdc5dd3236699"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/inlinebycode.html",
        revision: "358ec047afe7b62bd11036c3b2f2d80c"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/inlinetextarea.html",
        revision: "608ec0f0e7af65b00e1bf77616141339"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/jquery.html",
        revision: "c131fd8eabcfad1abf3e101f56e5a5af"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/magicline/magicline.html",
        revision: "9c232904563c7ecf1dc2cd9a2592805e"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/readonly.html",
        revision: "f52433daa675d48f784447c3f992979c"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/replacebyclass.html",
        revision: "25b6cb9f77ebb20acaa1371475756a85"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/replacebycode.html",
        revision: "057adf19624e2a042acdc6e173732909"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/sample_posteddata.php",
        revision: "cba787bedaffd8a646a7eed4622d7615"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/sample.css",
        revision: "829a560e48b51acc56c54c9be4599c3b"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/sample.js",
        revision: "aba680c8a4743d85b983e0f45b1dd2c5"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/tabindex.html",
        revision: "4a7070611976a787a33b2ef675bb3ec0"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/toolbar/toolbar.html",
        revision: "4849a70532fd0242769571155355ebef"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/uicolor.html",
        revision: "826284ea4adf7d4176fa09658fb8c223"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/uilanguages.html",
        revision: "efe0aac0eac3c133bc7579c92f9845b2"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/wysiwygarea/fullpage.html",
        revision: "bdf04dfd83df1c0e9a6752d17cbd990d"
      },
      {
        url: "Author/Scripts/ckeditor/samples/old/xhtmlstyle.html",
        revision: "6b95a8ba6e622e0975f31117836d4370"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/css/fontello.css",
        revision: "71823ace6380d701b498b0c12d4c1271"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/font/config.json",
        revision: "eece4fc70e64b215c17228e622592e3a"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/font/fontello.eot",
        revision: "5de3a2a020ca6f2661b05448d47bccd9"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/font/fontello.svg",
        revision: "a65207537dc3726ae724884412e5e008"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/font/fontello.ttf",
        revision: "1816c94e15be9db939f91cb4e88be055"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/font/fontello.woff",
        revision: "49788464b67f333bf748ea80f87956fb"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/font/LICENSE.txt",
        revision: "3f11bdb4cef2da5f7cf13219f1de36e3"
      },
      {
        url: "Author/Scripts/ckeditor/samples/toolbarconfigurator/index.html",
        revision: "3b982bde22882a8efc00a18db73e3120"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/js/abstracttoolbarmodifier.js",
        revision: "778f8e7ade48130e0ae419fddf5909ba"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/js/fulltoolbareditor.js",
        revision: "de63572546be590242d6adbf72572e9f"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/js/toolbarmodifier.js",
        revision: "d01f9b3069bd9b01a728219487c57a75"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/js/toolbartextmodifier.js",
        revision: "ef61446fe73db5086cce63128449cb3a"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/codemirror.css",
        revision: "cbe98224a17c8882f4a80ea966ce1d95"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/codemirror.js",
        revision: "21a60504a52cf98e6bc42b8e7482c7ce"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/javascript.js",
        revision: "03a02404c29534110edf5031d06b5810"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/neo.css",
        revision: "01ae574f634f83bfad9095f51a82a6fe"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/show-hint.css",
        revision: "c1318fca069d71f8c1917a41484c0833"
      },
      {
        url:
          "Author/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/show-hint.js",
        revision: "1e27fc8385bc197ae41ec51279c3f257"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/dialog_ie.css",
        revision: "d0ece397a5b9d7d5c6040209a6063a6f"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/dialog_ie7.css",
        revision: "275192a538f57d585ba20ee7b8df83fd"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/dialog_ie8.css",
        revision: "565c1666aabbd78a8c84f5d8475ffe8c"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/dialog_iequirks.css",
        revision: "7ff6fb32543d2228443b0da5c58c2a0f"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/dialog.css",
        revision: "a37dc0b89135979688162a6b18a4994c"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/editor_gecko.css",
        revision: "d593532745eea6f83885d1b36ca79e49"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/editor_ie.css",
        revision: "a4efaa23455c4f6af2aec3544ae1b682"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/editor_ie7.css",
        revision: "8b873e1918f2fad2e150a4fe5dde7aa9"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/editor_ie8.css",
        revision: "2d650e0626dfda1a4c18014342ef6d21"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/editor_iequirks.css",
        revision: "20a4dc467f8bdca96a27d22c2b35e773"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/editor.css",
        revision: "da1cd05a0e8cedbd53e1eb55b0c1d18d"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/icons_hidpi.png",
        revision: "1f57f384a8331a0cd3b8dfadfb61f0cd"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/icons.png",
        revision: "30df606419222c418c24d5cca47f66e5"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/images/arrow.png",
        revision: "5b9854a7f865788fff62fe32b0324ca0"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/images/close.png",
        revision: "9b497b65c0909aa80b21aa989363a0bb"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/images/hidpi/close.png",
        revision: "cd269135b1c31c9044974c3d17059b04"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/images/hidpi/lock-open.png",
        revision: "4f6b9606513757e04d4de3268a123eb7"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/images/hidpi/lock.png",
        revision: "f6cf4b23d39107db8aaf907f686a0052"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/images/hidpi/refresh.png",
        revision: "33ebeddcb7b69137ffbfca121b0f6213"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/images/lock-open.png",
        revision: "e9dff089035fee4ac979a340ef8d4fcf"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/images/lock.png",
        revision: "68f4c2f5309e4dbc0f98c4be79dc66c7"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/images/refresh.png",
        revision: "0f54df868f75482f99157807f6f68ee0"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/images/spinner.gif",
        revision: "7f32b6e67f42a0ef3e1ddb0b9401f6c5"
      },
      {
        url: "Author/Scripts/ckeditor/skins/moono/readme.md",
        revision: "f9889b7545d7ddf0dc8581c285b23ec0"
      },
      {
        url: "Author/Scripts/ckeditor/styles.js",
        revision: "b46e216e345799df805ac898af3910b9"
      },
      {
        url: "Author/Scripts/ckeditor5/ckeditor.js",
        revision: "4201b287d1bd8c175cff7285cb08c1b4"
      },
      {
        url: "Author/Scripts/ckeditor5/index.html",
        revision: "2e8e21dfbff5a9048f37facff4ffe846"
      },
      {
        url: "Author/Scripts/ckeditor5/LICENSE.md",
        revision: "9fc5681418028cc39fa10bf26ff3ccba"
      },
      {
        url: "Author/Scripts/ckeditor5/README.md",
        revision: "951ad73e41d6a9bfff4947ad18028dd0"
      },
      {
        url: "Author/Scripts/ckeditor5/sample/css/sample.css",
        revision: "ab7b31dd4344ae14a5fdd95fb94b209d"
      },
      {
        url: "Author/Scripts/ckeditor5/sample/img/bg.png",
        revision: "804f8918709610c90a3656f29567108d"
      },
      {
        url: "Author/Scripts/ckeditor5/sample/img/github.svg",
        revision: "b5244cdf2782d481757572c8b2466f17"
      },
      {
        url: "Author/Scripts/ckeditor5/sample/img/logo.svg",
        revision: "677ffa241367fa4db9a90caf42f827e8"
      },
      {
        url: "Author/Scripts/ckeditor5/sample/img/umbrellas.jpg",
        revision: "e935d5c582ff2d43b858681e885c2d95"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/ar.js",
        revision: "7f97bd83ac8c223a565f21a92b06f03d"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/ast.js",
        revision: "3af0412e188a0e729e820637ae2c4744"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/bg.js",
        revision: "fb1f47d4010cb4b0d208945d93e1c5bc"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/ca.js",
        revision: "d0fff21eb941353fc6203a627dce6651"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/cs.js",
        revision: "930a9caa13254ead0f11edee2c55d911"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/da.js",
        revision: "577e720bacf69041908fe17f343d584a"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/de-ch.js",
        revision: "6a8552eba79ac590fdeb3d1d72b7e543"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/de.js",
        revision: "24cf11d15123eee333b88df7009317db"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/el.js",
        revision: "4adaed8e5c0609db672bf38dde88ff6b"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/en-au.js",
        revision: "62896fc721fd39172131611112c0c28a"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/eo.js",
        revision: "6dde7a4980db58a678c99e67b7734d17"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/es.js",
        revision: "6e639c81c108793bd86f212ace835939"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/et.js",
        revision: "0a6507209d2aa5b591cf6aea83113442"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/eu.js",
        revision: "7e997f31ec6c918b43b49622a2cac0a4"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/fa.js",
        revision: "a6141ed9f0544265556da5cb04b23c84"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/fi.js",
        revision: "990f8deda0b13993d9e13911f173baa2"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/fr.js",
        revision: "1014df28899f18024710d7e4cb3cb249"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/gl.js",
        revision: "c8cb2985a21ed747931764835e83a420"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/gu.js",
        revision: "876688ba00f8acf367f9ca534325d62c"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/he.js",
        revision: "e9113f138d9c37caeea337d654c9536c"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/hr.js",
        revision: "1f20725d92e57392410020a873b217d2"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/hu.js",
        revision: "fca5168ea20b65f474d0374336bcb820"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/it.js",
        revision: "4438203354fdca59fe8be74a9fafc949"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/ja.js",
        revision: "c6e10625ee0d6d1d24adabd94cfad7a1"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/km.js",
        revision: "4f7dbfd0e2e67a7d4f224ea0ba069f4e"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/kn.js",
        revision: "92e2e69d24d1b2758531b3bc600b0bdf"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/ko.js",
        revision: "1932ddb92bee26c0024eecaa4ef3b0ca"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/ku.js",
        revision: "2c5eacb08cf4c4eb4c38ac54b30df589"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/lv.js",
        revision: "4622c84da882db8053570384fc3dd040"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/nb.js",
        revision: "b644fc1fcbdb0685b6c78fff61139740"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/ne.js",
        revision: "5ae9ac7ac49b9fa2faae44330832b682"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/nl.js",
        revision: "577ba6dc88052aa4832a9a39007adc4f"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/no.js",
        revision: "2632f53bc9a4229a10f8dc0c049860d0"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/oc.js",
        revision: "69ca335dc4ad079fda044bc9ff7fa07c"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/pl.js",
        revision: "00bb4583320d8d0f6d9f5bf22833537b"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/pt-br.js",
        revision: "9adbb53ac17ab6493683fff87655c23c"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/pt.js",
        revision: "cd64f0c0884bb059f8fbe6e87f900d07"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/ro.js",
        revision: "834f210622b48789da2df34865d231c1"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/ru.js",
        revision: "7057f603411cf4be21346dc30d288609"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/si.js",
        revision: "8c0b5eb0d3ec3157497aa51e0e3720e7"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/sk.js",
        revision: "811785ab34ce0b3639efd05706d6e8ec"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/sq.js",
        revision: "1fc49e0f1e0bdc20a53fac739cd0ad19"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/sv.js",
        revision: "b7b1e711df69ab752ab64d4fb6c47076"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/tr.js",
        revision: "72edd1d39dc32c86d18161fffc43b250"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/tt.js",
        revision: "d6fd097a7b1fc8e5978e3889c83879fd"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/ug.js",
        revision: "d13798d63513d87a1cbacf81d66e19ae"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/uk.js",
        revision: "fce75eb4d76b0b7218fe283cd8893570"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/vi.js",
        revision: "d3b9eeaf8e708584ac00cd98c957b7c2"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/zh-cn.js",
        revision: "d979380a6bb7e3fbac7920e79c5a8b02"
      },
      {
        url: "Author/Scripts/ckeditor5/translations/zh.js",
        revision: "de4c509717239b73c523b6cbbec3d168"
      },
      {
        url: "Author/Scripts/colorpicker.js",
        revision: "478f9934699954148bc3d7dcffa5c25a"
      },
      {
        url: "Author/Scripts/maingui.js",
        revision: "70f5a6e3f3485e6a2c87dc6303f5a823"
      },
      {
        url: "Author/Scripts/prefs.js",
        revision: "a9bbbdf29d13e9e0e7769cf7eba6224b"
      },
      {
        url: "Author/Scripts/style_editor.js",
        revision: "2a355b78ad72ca834b75b15ffe1b191c"
      },
      {
        url: "Author/Templates/image.html",
        revision: "8b2e544382002357466e77ee41516964"
      },
      {
        url: "Author/Templates/maingui.html",
        revision: "c5c0271544c76cc4f2c269c1a323050b"
      },
      {
        url: "Author/Templates/notice.html",
        revision: "2e85c91c02a6309761697f17264085b5"
      },
      {
        url: "Author/Templates/preferences.html",
        revision: "d18e51a22bda1c413b98e715269a9e51"
      },
      {
        url: "Author/Templates/style_editor.html",
        revision: "aaa5443ddc32f996606b586d3b118184"
      },
      {
        url: "Author/Templates/toolbar.html",
        revision: "beb8f8ca2eb3d4907b216efd8b0be51c"
      },
      {
        url: "BuildWebApps/Config.conf",
        revision: "99adfb8fbd275bfde78fa0672e223f0f"
      },
      {
        url: "BuildWebApps/icon.png",
        revision: "629f5609a146e0a51130072b3ade81f0"
      },
      {
        url: "BuildWebApps/Locale/en.lang",
        revision: "48e0f487fb836dda1c39afbcac22ee90"
      },
      {
        url: "BuildWebApps/Locale/fr.lang",
        revision: "79668aa1e797ec5b72aba66d4cfaf788"
      },
      {
        url: "BuildWebApps/Locale/no.lang",
        revision: "f17f3788789e608bf915d1af27dc302f"
      },
      {
        url: "BuildWebApps/Locale/pl.locale",
        revision: "3ad3dc9e95c3db152d730580e37f1ad2"
      },
      {
        url: "BuildWebApps/Resources/waIcon.png",
        revision: "c91be69ee583d8dd5667d6e35b350035"
      },
      {
        url: "BuildWebApps/Resources/waPreview.png",
        revision: "5c9d5ab631494e1a6ad011eb49fa246b"
      },
      {
        url: "BuildWebApps/Scripts/gui.js",
        revision: "91e8a53bd4e1e6b33c851c08b7e356b3"
      },
      {
        url: "BuildWebApps/Scripts/main.js",
        revision: "945bfc01c993d93fff2634d0f0d7fdde"
      },
      {
        url: "BuildWebApps/Scripts/template.js",
        revision: "ecc06fbd52b1f15ba2dbea3886c40bd5"
      },
      {
        url: "BuildWebApps/Templates/about.html",
        revision: "e347f54be2d7443869c7d5a92d2a8ca6"
      },
      {
        url: "BuildWebApps/Templates/index.html",
        revision: "fbbf310ad62d433348aeb658b4a04d13"
      },
      {
        url: "Calculator/calc_friend.js",
        revision: "9ee7f50abc99d27fc4fb84ce88951a6a"
      },
      {
        url: "Calculator/calculator.html",
        revision: "4efc61d356cd66e4bb5cf09d646eef70"
      },
      {
        url: "Calculator/calculator.js",
        revision: "f6f5aa368aec79380b2b67135a998c5e"
      },
      {
        url: "Calculator/calculator.min.js",
        revision: "9eca884ecd5b882929d1ee10a2d75fb4"
      },
      {
        url: "Calculator/Config.conf",
        revision: "796894b3f0d82b8adab322dfbdac8f72"
      },
      {
        url: "Calculator/Example/index.html",
        revision: "50d4c58ad0b86be551821d4ee335ef41"
      },
      {
        url: "Calculator/Example/page.css",
        revision: "7a2a6b5324c577e3769503730a193d02"
      },
      {
        url: "Calculator/friend.js",
        revision: "0409de630bada4ab91b00bc2208d2ffb"
      },
      {
        url: "Calculator/icon_dock.png",
        revision: "78811a795adfd00cce779d905bb81c24"
      },
      {
        url: "Calculator/icon.png",
        revision: "78811a795adfd00cce779d905bb81c24"
      },
      {
        url: "Calculator/knockout-2.1.0.js",
        revision: "235475c7c3dc43c7cb7f6125be536c32"
      },
      {
        url: "Calculator/Locale/en.lang",
        revision: "aaadbcc9d038b940369e63cad6b13211"
      },
      {
        url: "Calculator/Locale/fi.lang",
        revision: "fec1423f60837448c59619a5b9cee9e3"
      },
      {
        url: "Calculator/Locale/fr.lang",
        revision: "62ce414eb11535d4e12afc6129472cb6"
      },
      {
        url: "Calculator/Locale/no.lang",
        revision: "e7577c54e7bc0bd5e2cb83f856d90930"
      },
      {
        url: "Calculator/Locale/pl.lang",
        revision: "3537830bbd31d072e34bacfe5518040e"
      },
      {
        url: "Calculator/README.md",
        revision: "fe439b4da0d1a72622c5dcc55fc86e32"
      },
      {
        url: "Calculator/style.css",
        revision: "00cea8879e131218e3393ae3fe11fd54"
      },
      {
        url: "DiskCatalog/Config.conf",
        revision: "5bd2ff2979fcf720504dcc9259de05e1"
      },
      {
        url: "DiskCatalog/Gfx/disk.png",
        revision: "331b60b468b4e1496ad4a4c6440df1a1"
      },
      {
        url: "DiskCatalog/icon_dock.png",
        revision: "fd92568e6dda3dd4b965a367dc9624cc"
      },
      {
        url: "DiskCatalog/icon.png",
        revision: "fd92568e6dda3dd4b965a367dc9624cc"
      },
      {
        url: "DiskCatalog/index.html",
        revision: "6bd1450dd82a6db01bd671a03b03c663"
      },
      {
        url: "DiskCatalog/Locale/en.lang",
        revision: "f643c7c862fe340078597efe695ebe17"
      },
      {
        url: "DiskCatalog/Locale/fi.lang",
        revision: "6bab1fe122792618e12ff9cb72211439"
      },
      {
        url: "DiskCatalog/Locale/fr.lang",
        revision: "2bd54c692d4505d9592ad7257118ebce"
      },
      {
        url: "DiskCatalog/Locale/no.lang",
        revision: "e8735dc122a49f17444a3f89948639a0"
      },
      {
        url: "DiskCatalog/Locale/pl.lang",
        revision: "c016f2a4fe097a4840bc623d37e5f20d"
      },
      {
        url: "DiskCatalog/Scripts/connection.js",
        revision: "ed4e36fa39c90a79375399faf8e0c43d"
      },
      {
        url: "DiskCatalog/Scripts/mainwindow.js",
        revision: "62b506c06a0909e88a68e19a3f3d9d5f"
      },
      {
        url: "DiskCatalog/Scripts/mountlist.js",
        revision: "3a3856cb0e78331828a1b6b93ad8dfac"
      },
      {
        url: "DiskCatalog/Stylesheets/main.css",
        revision: "ee4e234f0328bd85ce6527067d7ebf04"
      },
      {
        url: "DiskCatalog/Templates/connection_edit.html",
        revision: "7f09745558d86f2d552c95cb25e75d00"
      },
      {
        url: "DiskCatalog/Templates/connection.html",
        revision: "3a59cc97095dc630faeb1e8f3511d535"
      },
      {
        url: "DiskCatalog/Templates/main.html",
        revision: "d336108b006e56fecd325f05f7083622"
      },
      {
        url: "Dock/Config.conf",
        revision: "fb53398e062b0f58c0fd1fd76a14f469"
      },
      {
        url: "Dock/icon_dock.png",
        revision: "1e115fbbac05c728d15dee42b00b44cb"
      },
      { url: "Dock/icon.png", revision: "1e115fbbac05c728d15dee42b00b44cb" },
      {
        url: "Dock/Locale/en.lang",
        revision: "29064b9a17b824bfe27fbb5a346c20e0"
      },
      {
        url: "Dock/Locale/fi.lang",
        revision: "629b2bd28ce26050fe781f834d6b3da9"
      },
      {
        url: "Dock/Locale/fr.lang",
        revision: "6dbfb18f04dc8a7f28b4e121acbbfda2"
      },
      {
        url: "Dock/Locale/no.lang",
        revision: "0ff3414aa84fb185d4b884802f26ba00"
      },
      {
        url: "Dock/Locale/pl.lang",
        revision: "9110444d2b1bad72ae8b1467268bf384"
      },
      {
        url: "Dock/Scripts/dock.js",
        revision: "ed703d102297d65249ec29aabba9790a"
      },
      {
        url: "Dock/Scripts/gui.js",
        revision: "cece3bd02a3d4dec334fdc484a670ace"
      },
      {
        url: "Dock/Stylesheets/gui.css",
        revision: "b89b42e5340ca08edce9cbe4167086fb"
      },
      {
        url: "Dock/Templates/gui.html",
        revision: "50639ea5b9f80c861d4280060e84f1e6"
      },
      {
        url: "DoIt/Config.conf",
        revision: "af6071a44e7c253e9e7254d6803e63f5"
      },
      { url: "DoIt/doit.js", revision: "5ec7430fd723cf89e69f79d7f70b4b9d" },
      { url: "DoIt/icon.png", revision: "e4edb21455fb899aa279b825b28b5900" },
      {
        url: "DoIt/index.html",
        revision: "b70109acdc1803b768aa7325721c0595"
      },
      {
        url: "DoIt/Locale/en.lang",
        revision: "cb492b7df9b5c170d7c87527940eff3b"
      },
      {
        url: "DoIt/Scripts/item.js",
        revision: "492caae82346b9f29a643e2a7e7efcbb"
      },
      {
        url: "DoIt/Scripts/main.js",
        revision: "a3baf8004e9d077222a2720804aa3c28"
      },
      {
        url: "DoIt/Templates/item.html",
        revision: "ce24539d2270b7cd129f00b0e9e39e90"
      },
      {
        url: "DoIt/Templates/main.html",
        revision: "870f13fd9cb619c00977690141420a92"
      },
      {
        url: "DoIt/Templates/palette.html",
        revision: "e70602a57d8c21d048aba748997c7e0e"
      },
      {
        url: "DrillBunny/assets/atlas.json",
        revision: "9fcfad6f454b8b59ca399490e0ade26e"
      },
      {
        url: "DrillBunny/assets/atlas.png",
        revision: "0475c7771131ade75241a7fcb5a3ae72"
      },
      {
        url: "DrillBunny/assets/preloader.png",
        revision: "d0b8004b2e15ba438cb0c1089be7c73e"
      },
      {
        url: "DrillBunny/Config.conf",
        revision: "1fe703c4ee26851e7146c43bba0da944"
      },
      {
        url: "DrillBunny/icon.png",
        revision: "23c8084c32f4b9ace051733ab26f246c"
      },
      {
        url: "DrillBunny/index.html",
        revision: "d78f3a680a17cf7dd2ed7b05992eb7d5"
      },
      {
        url: "DrillBunny/js/game.js",
        revision: "deba6f9738da74c4580093482e3072dc"
      },
      {
        url: "DrillBunny/js/game.min.js",
        revision: "88a74074bab56cd6d0d9e64ec3d89cc5"
      },
      {
        url: "DrillBunny/js/phaser.min.js",
        revision: "1b82707c9f6f77ec51aaadef48b3dece"
      },
      {
        url: "DrillBunny/launch.js",
        revision: "5a778d5b01736fe0ad3b5353e8bf84d2"
      },
      {
        url: "FriendBrowser/Config.conf",
        revision: "54c7e3abfe5c53463aed2b098534bba8"
      },
      {
        url: "FriendBrowser/icon_dock.png",
        revision: "9d641da421c1340e4f56f2fbdc16299e"
      },
      {
        url: "FriendBrowser/icon.png",
        revision: "9d641da421c1340e4f56f2fbdc16299e"
      },
      {
        url: "FriendBrowser/icondoor.png",
        revision: "b6ab344e0d2e58adac4c426951f3e0e8"
      },
      {
        url: "FriendBrowser/Locale/en.lang",
        revision: "bceb6f8e804986903505107ae5ac8714"
      },
      {
        url: "FriendBrowser/Locale/fr.lang",
        revision: "8f32f035892687b0f4de6cdd4dec0c75"
      },
      {
        url: "FriendBrowser/Locale/no.lang",
        revision: "61a52b562447095f34d74f000f02da9f"
      },
      {
        url: "FriendBrowser/Scripts/logic.js",
        revision: "9f4a61918a87e8892e8759585d981e7d"
      },
      {
        url: "FriendBrowser/Scripts/wideweb.js",
        revision: "45bc8b772c39d30956b3504a53e220cd"
      },
      {
        url: "FriendBrowser/Templates/about_application.html",
        revision: "b06b93b27a5b60006392b52e36b2d197"
      },
      {
        url: "FriendBrowser/Templates/about.html",
        revision: "51ffeffda338d27ac726e8485257331a"
      },
      {
        url: "FriendBrowser/Templates/error.html",
        revision: "2613a7caa498b8d8a59355fd653bb3e6"
      },
      {
        url: "FriendBrowser/Templates/webinterface.html",
        revision: "b5fd40c529559deaf060be7d03f70c1a"
      },
      {
        url: "FriendCalendar/Config.conf",
        revision: "ab9b99f12337211a874d0fc0b54ca718"
      },
      {
        url: "FriendCalendar/Css/main.css",
        revision: "edc0ce4a35aed696d17d6798543595b4"
      },
      {
        url: "FriendCalendar/Gfx/arrow_left.png",
        revision: "c831933dafedc73c613ae3eaa4365472"
      },
      {
        url: "FriendCalendar/Gfx/arrow_right.png",
        revision: "12f7c38615fc4d72d7f6ba995844599b"
      },
      {
        url: "FriendCalendar/Gfx/meadow.jpg",
        revision: "80301088c5d445806c4d24da8d0fd777"
      },
      {
        url: "FriendCalendar/icon.png",
        revision: "935c4d07ecbfc65604d22e9e8c61e2be"
      },
      {
        url: "FriendCalendar/index.html",
        revision: "7e82aad359703b47074a46887d21f623"
      },
      {
        url: "FriendCalendar/Locale/en.lang",
        revision: "3db05a9a0cee48b52709a35fb2afe9c8"
      },
      {
        url: "FriendCalendar/Locale/fi.lang",
        revision: "1497178d7762a0002e76644443019cd1"
      },
      {
        url: "FriendCalendar/Locale/fr.lang",
        revision: "fdcc24497183f6ffc7d06450aa0b42d6"
      },
      {
        url: "FriendCalendar/Locale/no.lang",
        revision: "2e324b1dc51931da6a5ec36236766d3f"
      },
      {
        url: "FriendCalendar/preview.png",
        revision: "935c4d07ecbfc65604d22e9e8c61e2be"
      },
      {
        url: "FriendCalendar/Scripts/calendar.js",
        revision: "1a6ccb84d7065a3b1ca965de5664cc41"
      },
      {
        url: "FriendCalendar/Scripts/event.js",
        revision: "c0bb05099463be6515b432144832b0cd"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/component.js",
        revision: "5a6b604e131b9b1a5666c3b8e3169eed"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/deps/base64.js",
        revision: "362b01f3e9e9646e2ffb537321efe28c"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/deps/cryptojs/rollups/aes.js",
        revision: "11c5114e2a1face42de239b2b17943fb"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/deps/cryptojs/rollups/pbkdf2.js",
        revision: "75fb20feda623642a970b883e9978ba2"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/deps/hash.js",
        revision: "187caf84453a9663266d23e49f92d646"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/deps/jsbn.js",
        revision: "c56ae85c9428a58de61858acd2c98fb8"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/deps/jscrypto.js",
        revision: "69e388414ae88f2483c637127e1d7d2d"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/deps/jsencrypt.js",
        revision: "189c949e257e3851c351cb8fca4de050"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/deps/random.js",
        revision: "097258d38784dcaa34efb9fcb433107d"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/deps/rsa.js",
        revision: "cb62adf88b0797919e261d055d707ab4"
      },
      {
        url: "FriendCalendar/Scripts/fcrypto/fcrypto.js",
        revision: "2084d23b652ec5e81533fd588142c399"
      },
      {
        url: "FriendCalendar/Scripts/main.js",
        revision: "f42227bc83929408bf03e990ad3c8153"
      },
      {
        url: "FriendCalendar/Scripts/share.js",
        revision: "c90283c6afe3bad5e661a8d5b07d08fb"
      },
      {
        url: "FriendCalendar/Scripts/sharing.js",
        revision: "d5e8249e4b2c369672a7dcbdcef485ca"
      },
      {
        url: "FriendCalendar/Scripts/sources.js",
        revision: "05a933375644f9acea601322e8502ff7"
      },
      {
        url: "FriendCalendar/Templates/event.html",
        revision: "049f1e84e6db3c1bb7477d1d0bd99f34"
      },
      {
        url: "FriendCalendar/Templates/main.html",
        revision: "c6f96d690c3a1e18c78e345da7067a1e"
      },
      {
        url: "FriendCalendar/Templates/share.html",
        revision: "be233a98a435b88920751c09178816ce"
      },
      {
        url: "FriendCalendar/Templates/sharing.html",
        revision: "b67aa5f136f4fc5f0e233b4241a20e9a"
      },
      {
        url: "FriendCalendar/Templates/sources_gui.html",
        revision: "bc48bd25267085aa99dd862abd572482"
      },
      {
        url: "FriendCalendar/Templates/sources.html",
        revision: "4d0164ad76fac488c6afa9ee35933ef6"
      },
      {
        url: "FriendCommunity/community_logo.png",
        revision: "a37fae3972cfb471773f083c31fccbb6"
      },
      {
        url: "FriendCommunity/Config.conf",
        revision: "5278cfaab5cef12acce5fcb7a1deb217"
      },
      {
        url: "FriendCommunity/featured.jpg",
        revision: "5ab5e19a515a7632c1348134b555d028"
      },
      {
        url: "FriendCommunity/FriendCommunity.js",
        revision: "fbb4b5b725fb9773c23c248907f6a30a"
      },
      {
        url: "FriendCommunity/icon.png",
        revision: "75a0798fa975c905a9a176449af59e37"
      },
      {
        url: "FriendCommunity/index.html",
        revision: "bde7197cae38901dc97a168c0d990f69"
      },
      {
        url: "FriendCommunity/Locale/en.lang",
        revision: "8ed0e2d7e5ec5ef2c30b93d6993bf91b"
      },
      {
        url: "FriendCommunity/Locale/fi.lang",
        revision: "767549c2e291ae843b3abccafad73ffe"
      },
      {
        url: "FriendCommunity/Locale/fr.lang",
        revision: "db92a71865765d9eeec194c079a7942e"
      },
      {
        url: "FriendCommunity/Locale/no.lang",
        revision: "1e371396663d6bf7debcd08c8f7fb4f2"
      },
      {
        url: "FriendCommunity/Locale/pl.lang",
        revision: "f42afdc0012a7014b60906554e3b2d8e"
      },
      {
        url: "FriendCommunity/preview.png",
        revision: "75a0798fa975c905a9a176449af59e37"
      },
      {
        url: "FriendCommunity/Readme.md",
        revision: "8978c1c02592c7f71b9a8432d144c22c"
      },
      {
        url: "FriendCommunity/Resources.md",
        revision: "0c6e48acdceb965b90d62f3814b6cead"
      },
      {
        url: "FriendCommunity/screenshot.jpg",
        revision: "1e8b061f0562af85284e9deeda0aadc0"
      },
      {
        url: "FriendCommunity/Scripts/account.js",
        revision: "108b55087c6ab0423c8d2c4a161505f5"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/component.js",
        revision: "56e4b3242fe2db846ddbf4df58723661"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/deps/base64.js",
        revision: "362b01f3e9e9646e2ffb537321efe28c"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/deps/cryptojs/rollups/aes.js",
        revision: "11c5114e2a1face42de239b2b17943fb"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/deps/cryptojs/rollups/pbkdf2.js",
        revision: "75fb20feda623642a970b883e9978ba2"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/deps/hash.js",
        revision: "187caf84453a9663266d23e49f92d646"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/deps/jsbn.js",
        revision: "c56ae85c9428a58de61858acd2c98fb8"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/deps/jscrypto.js",
        revision: "69e388414ae88f2483c637127e1d7d2d"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/deps/jsencrypt.js",
        revision: "189c949e257e3851c351cb8fca4de050"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/deps/random.js",
        revision: "097258d38784dcaa34efb9fcb433107d"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/deps/rsa.js",
        revision: "cb62adf88b0797919e261d055d707ab4"
      },
      {
        url: "FriendCommunity/Scripts/fcrypto/fcrypto.js",
        revision: "9ffca311294c5e0ed4ef44dc6585a9eb"
      },
      {
        url: "FriendCommunity/Scripts/login.js",
        revision: "06a450c8d2d47ce867a2ad7d2d5a087b"
      },
      {
        url: "FriendCommunity/Scripts/mainView.js",
        revision: "093200a2991b8f26c2391f933008910b"
      },
      {
        url: "FriendCommunity/Scripts/views.js",
        revision: "75dcb8a16a4d27b9ca84f084fbc0046b"
      },
      {
        url: "FriendCommunity/Templates/login.html",
        revision: "f3f76e7dfaf15457047d3d965cdfc307"
      },
      {
        url: "FriendCommunity/Templates/main.html",
        revision: "f063af125502baeeff27e0208c6efb2a"
      },
      {
        url: "FriendCreate/Config.conf",
        revision: "ac728d40def66e11bfc62529ccb82dbf"
      },
      {
        url: "FriendCreate/friendcreate.js",
        revision: "56ab0a548fb16b9660f513983b7b04b9"
      },
      {
        url: "FriendCreate/icon_dock.png",
        revision: "56d37eabecfe7f99f024f55edcea51df"
      },
      {
        url: "FriendCreate/icon.png",
        revision: "56d37eabecfe7f99f024f55edcea51df"
      },
      {
        url: "FriendCreate/Libraries/Ace/ace.js",
        revision: "fefe446293074b94863dc3846911bf39"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-beautify.js",
        revision: "2be3b03d76266746a32ab998d1b5b746"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-chromevox.js",
        revision: "80f6fa7e8fa9e5f72dcd84aead0984d0"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-elastic_tabstops_lite.js",
        revision: "2e0239b167f304b72f3e51f57b756ec9"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-emmet.js",
        revision: "9d1eaf2f71377bd8e16dbb418557d5c7"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-error_marker.js",
        revision: "36af499d6d1204a1240d316fdb1b7e10"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-keybinding_menu.js",
        revision: "27ce105d1b369f22321692e7791ab33b"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-language_tools.js",
        revision: "c4c31bd44469b630202315e6cabeb92c"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-linking.js",
        revision: "8363ac262d18477964d46bd06daeac8e"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-modelist.js",
        revision: "6813aad236ee10494ef4fde6f342d64c"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-old_ie.js",
        revision: "2c16589b26b96493011c7a1aec2906bf"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-searchbox.js",
        revision: "a0ad63e82916672b646eefb5ab13b609"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-settings_menu.js",
        revision: "46d40a65f6d76dec0ac357b53ed9cb51"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-spellcheck.js",
        revision: "05fce5797c225fb02f50181dd36441bb"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-split.js",
        revision: "0d5caace4412d458584cc7e04e8f45d6"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-static_highlight.js",
        revision: "a252db184739ffee39f2e7f64fc6e283"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-statusbar.js",
        revision: "97980b7496fc60cf352222c136255f34"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-textarea.js",
        revision: "1d910af4fe6636cc77aacd92c0f731d5"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-themelist.js",
        revision: "965ce2fc67976240ca08846a73aad1af"
      },
      {
        url: "FriendCreate/Libraries/Ace/ext-whitespace.js",
        revision: "aff663236c2ca243646527b265bc39d0"
      },
      {
        url: "FriendCreate/Libraries/Ace/keybinding-emacs.js",
        revision: "8dce5188a74ff2a31201c5ce132367ca"
      },
      {
        url: "FriendCreate/Libraries/Ace/keybinding-vim.js",
        revision: "3e868041a14e2137c3cf7a47ba759459"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-abap.js",
        revision: "34e70c871a239d9891810e71229f46de"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-abc.js",
        revision: "389597422088bb063194f1caf6dc5227"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-actionscript.js",
        revision: "9930a99d26ab6cbe4f91fda82ce5625f"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-ada.js",
        revision: "4d295889dc2ed2b366cd137fa5efae68"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-apache_conf.js",
        revision: "f2187c29f1b61e7f1b772166d84f0d5a"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-applescript.js",
        revision: "ff398f61e672f4f60b71e84594ea8ac1"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-asciidoc.js",
        revision: "05f199c950d31e0f4d78939a5a2a3aa5"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-assembly_x86.js",
        revision: "8667c570d80205cb2e2ddea171465696"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-autohotkey.js",
        revision: "6c9cbaecf8725be08ebc61f2f790377f"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-batchfile.js",
        revision: "372e37d7a78c246afeada46e6a1687ec"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-bro.js",
        revision: "b6b25f72c61cee863c42ee41084d939b"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-c_cpp.js",
        revision: "dbe944cee62a6e2d37732008adb033f2"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-c9search.js",
        revision: "1f61358af01898ca985316fe32f9bb9a"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-cirru.js",
        revision: "ec227ddb759df085d7d6dc81dcf10a45"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-clojure.js",
        revision: "181512dfd5c8b3ed72b5c8ae2b0de6ac"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-cobol.js",
        revision: "02d7deb4077e3985c20ca48799fedd1f"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-coffee.js",
        revision: "c1e7780e45c9cb571b93878a0351fc68"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-coldfusion.js",
        revision: "e2bfa7a408a828a00f7588a2fbb52936"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-csharp.js",
        revision: "574f943897482c0c976422043b76db56"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-csound_document.js",
        revision: "5b64df672998dd6767f12cf3f18ae899"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-csound_orchestra.js",
        revision: "81427c71333f1ead29c733ad68fa3c63"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-csound_score.js",
        revision: "3672c62289c33165020dd89e41911461"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-css.js",
        revision: "36332bb5d9ccd738dd52e1dda30e36fc"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-curly.js",
        revision: "884d5822afd941454b31f147b4942b44"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-d.js",
        revision: "f49b40289fa0c28efcc6ec212885eec6"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-dart.js",
        revision: "ee7043055dc3e0a7ccc7170ddff56600"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-diff.js",
        revision: "6b8dcbabd950a45250a064d1ac0499b3"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-django.js",
        revision: "b288724fb6070fcf2a47d255cec6a185"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-dockerfile.js",
        revision: "d5c6fbd44d31f20a01b62c6f66c6b159"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-dot.js",
        revision: "c0382b9f92827a2017a1c552ff7b16a3"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-drools.js",
        revision: "b6c604af0fb312d0a7442de6e17ee93a"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-eiffel.js",
        revision: "2b4e4ec4da54af50203e4c72d18ee785"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-ejs.js",
        revision: "16ee312e08df7b2a20908d59ed2d3eaf"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-elixir.js",
        revision: "83227c2565e7f31054a505e090ca6a95"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-elm.js",
        revision: "165813ff5b1788e930cdf8b62fd430c1"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-erlang.js",
        revision: "d1d869f5980e9814bd2028d826ac3222"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-forth.js",
        revision: "d95d7ba0b1c8d1060ee3bc0ac0a2329c"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-fortran.js",
        revision: "ac6a911fdda80e6b5bbc497a2e46db63"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-ftl.js",
        revision: "f8990eb45bd455512286cb979c48acb7"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-gcode.js",
        revision: "7cd42e4d023f922502184dd30558b506"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-gherkin.js",
        revision: "c17a768c46218e5a0281b0fa91f8e602"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-gitignore.js",
        revision: "8f60c2816925740bfc22ad3befc15df3"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-glsl.js",
        revision: "c3f30b9842484282449618f030b49dc3"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-gobstones.js",
        revision: "cf55ffc57626eddeda6151ca8c90daff"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-golang.js",
        revision: "01d2e5e23c8d5dc63a67515841045852"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-graphqlschema.js",
        revision: "d46cd9399334377294c6e44fd38e377a"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-groovy.js",
        revision: "24dca35a4a165088cb3b7ca8d0339390"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-haml.js",
        revision: "e2f9a7778e5967cca8f3905e7ab414bd"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-handlebars.js",
        revision: "9381f022453c202f46206ff41584b394"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-haskell_cabal.js",
        revision: "10cbd2d4283179c9e3ff2ee38c15fe19"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-haskell.js",
        revision: "c58d750c2e8eb350724ae5a8540d2fa3"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-haxe.js",
        revision: "8066a97f3391c799a15868fc81b373bb"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-hjson.js",
        revision: "9c4bb81f7576ab817b3ed97a15cee602"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-html_elixir.js",
        revision: "da56b3189364bb2f5f7acd189a1e5e65"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-html_ruby.js",
        revision: "20d6b3843fb66bf8a2e6467597dcdec2"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-html.js",
        revision: "b6900c197879344a743138bbe974c8da"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-ini.js",
        revision: "c6d0bff7acbed3ae51a82f59ff82dced"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-io.js",
        revision: "b9a09761556f5289aca79cf78fd8cca1"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-jack.js",
        revision: "3a4d5a48892a779ffee77590c6bfd452"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-jade.js",
        revision: "87eca41699816b97d42e333f396a53d6"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-java.js",
        revision: "fff42b90b552353fbed6d1422c40d688"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-javascript.js",
        revision: "acc772d65e7a62c741c073d045bde98a"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-json.js",
        revision: "aeda7153306db12eb42f49ff2aeef6ac"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-jsoniq.js",
        revision: "60905e503fbd656922d29df47a378d22"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-jsp.js",
        revision: "5fd3a952c81d804c47941544a0816558"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-jssm.js",
        revision: "9a86a79ebe010f1a6cded72e47ee6afa"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-jsx.js",
        revision: "0dee4b36c5137054d195681fe6faf3a0"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-julia.js",
        revision: "b726adca0d22bff2adce70761a915a1d"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-kotlin.js",
        revision: "094759237b94837bfbcafc86653b3fd4"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-latex.js",
        revision: "7fcfbaea2a77bc51d5cb6edc1d676b87"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-lean.js",
        revision: "9556c6e575553d2acab0728b5fc57d57"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-less.js",
        revision: "2e778adcc358a62724e7593175e2cbb8"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-liquid.js",
        revision: "68252acdc7fcf49b811f69be946159c0"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-lisp.js",
        revision: "6239efbfe21387db328a497cf33c0d56"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-live_script.js",
        revision: "cd4c807d45a1b138911f74389c955075"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-livescript.js",
        revision: "bc3ee51497a5b06a62b2c3d249d75b5d"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-logiql.js",
        revision: "2e63b1e396bad2a505598c668bd40ad8"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-lsl.js",
        revision: "19d28b35da89e81110d13c38edb746ba"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-lua.js",
        revision: "807a10ffca9177a54b533ec1af6e56b1"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-luapage.js",
        revision: "c31d97981d42699d8d584d1474021b29"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-lucene.js",
        revision: "962c7af90999bb2f3f3802d80a2de8c4"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-makefile.js",
        revision: "6053c6d774c95b5b6e78ffadd32a48be"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-markdown.js",
        revision: "7d131de2d6e015c28ea352efad02c55a"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-mask.js",
        revision: "6e88fff101ba3e52a117d44d1b1c8594"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-matlab.js",
        revision: "80821cbfde8c22e7595eb072f9d430e9"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-maze.js",
        revision: "4d3bcf194c485a19095e74d6e5adc006"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-mel.js",
        revision: "907966b869c7dd3193daca9115f1be08"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-mips_assembler.js",
        revision: "048cc122518fe1fdc61568a330132838"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-mipsassembler.js",
        revision: "d9775fac1d921336390c9e6ae8cc2220"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-mushcode.js",
        revision: "b53073ec7414855305be0ac81cb1db8f"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-mysql.js",
        revision: "1d3a44927813118fe916ff8cb11c62bc"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-nix.js",
        revision: "b3978d3f2be9d635d307297ee2e14c93"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-nsis.js",
        revision: "3c0c7020647462fdc8ff93646d8c4b48"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-objectivec.js",
        revision: "80b582ad80c067a273e00677ab8beaf2"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-ocaml.js",
        revision: "2a242cf7bd34d66b1b7b41aedb8579e8"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-pascal.js",
        revision: "321ac6286e7e690b638718fa6b0a30c7"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-perl.js",
        revision: "7b559fabe4d094cbe7deb2dd45f263e5"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-pgsql.js",
        revision: "0b5d0f0b29b63c5b5a0e6a02807dda33"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-php.js",
        revision: "630dfb7dee9c203d2c343c544eaa9353"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-pig.js",
        revision: "ab20d801a3fc7e38482c697b02a774cc"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-plain_text.js",
        revision: "307ea04645617d071a40ea68616727e3"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-powershell.js",
        revision: "17eb2ffd94b2eb38c9a3fb5a42362c8e"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-praat.js",
        revision: "6fe3bb807759dffea6b87d36c34faaa2"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-prolog.js",
        revision: "9e60906a10d3eb76fc4f1f31730f1332"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-properties.js",
        revision: "ecf352f6ca1cdec1e0f0083b73207024"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-protobuf.js",
        revision: "444cc602e9ad53363b19f807fd8a8bce"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-python.js",
        revision: "6d0abc9bd1607254de959d47ce9f412f"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-r.js",
        revision: "ec642155c770b29df0fbed53eeeddad4"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-razor.js",
        revision: "fc17dd7951534a9ee9168832928f745d"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-rdoc.js",
        revision: "80abb15e5c2ebbfdc3d7c0e44dafa3e7"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-red.js",
        revision: "aa3e6d8590df114a053c2cb92b4c0524"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-rhtml.js",
        revision: "88edcfe1b5c26876f4494d8b3c0cd937"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-rst.js",
        revision: "97412b5a2b9e2da139bbb6b21a964177"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-ruby.js",
        revision: "9e0fa14cc1d2a6e007271a85481c3c8a"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-rust.js",
        revision: "de1ef8d9e109f9eb9980341b6bc29905"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-sass.js",
        revision: "01309d1506764f484d54c0921e14ce0c"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-scad.js",
        revision: "9f88dfb4b7cbb308d61afb1eb27c0818"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-scala.js",
        revision: "4b886eceeaead7078f3230d4b0623787"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-scheme.js",
        revision: "ce4dc09800167b0138e0fe5a39aaf95d"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-scss.js",
        revision: "ab12ba8229afbd717f2e61c545903b7c"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-sh.js",
        revision: "5fa3362108aa83fd9cfd917f158a88e0"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-sjs.js",
        revision: "4c4bf21b1cdc1db58aafcc786c5c267e"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-smarty.js",
        revision: "c015b586c0a649412bd43106454937ab"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-snippets.js",
        revision: "09a6ca6e31abbae6b3278a7b6195cb0f"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-soy_template.js",
        revision: "7e1adc319b6c248bc195aee28c7a247e"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-space.js",
        revision: "fe8e9c4fca520a349d9b818819e6bdf3"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-sparql.js",
        revision: "2bcfcb3f05732208cc3880061de0c370"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-sql.js",
        revision: "c0bb4befe7326d40d4fc0245fb5ae424"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-sqlserver.js",
        revision: "0a7b76db2f382ec1edc7a3e58e18600c"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-stylus.js",
        revision: "f7b026edcadcef7f9a43dec1584c044c"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-svg.js",
        revision: "867b24d293947c6c48486adf1e8bbc82"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-swift.js",
        revision: "fafe58958ded525cfdc7a6bcf5db2b68"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-swig.js",
        revision: "5bcd04e884f8e0104ae76f0508f76c1b"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-tcl.js",
        revision: "46468d323aa50185b1ed5de13375e9db"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-tex.js",
        revision: "f38f1d89f681c5354b83c8a789407954"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-text.js",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-textile.js",
        revision: "ad6153ddd397622f925ee38d65784e65"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-toml.js",
        revision: "0b7f10020fc591ad32df169ad1b648e3"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-tsx.js",
        revision: "7b7109d08cf1b01b112f2229d376cd05"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-turtle.js",
        revision: "92cf1cb0bf7ac5e90083db0e18466e4f"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-twig.js",
        revision: "23895bd9a21a8975c894817006e75fac"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-typescript.js",
        revision: "6d5e40116b113c73963b4f462a004fe6"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-vala.js",
        revision: "bdc7e5b33476da9fd1a95789de79b204"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-vbscript.js",
        revision: "60c5d40fefa26a9b9c6ccdb131fae209"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-velocity.js",
        revision: "7513c24e5e5a3fcf5c61e633a0bf4490"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-verilog.js",
        revision: "0c90fbae4fe0ea5fec9c0fcd5e41f0aa"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-vhdl.js",
        revision: "96f009ba6d6e9ec7ac51d8182ff7cb38"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-wollok.js",
        revision: "fab322abd2dbd512fc582fdcd803fb1f"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-xml.js",
        revision: "71fd465d66b6bde8b594822612b9711b"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-xquery.js",
        revision: "6ecc7ff27ceb702853e6b03082b3e035"
      },
      {
        url: "FriendCreate/Libraries/Ace/mode-yaml.js",
        revision: "7379b1986102326a936fbe33117745f3"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/abap.js",
        revision: "784d4658b04d4ce5063f423c80e189a6"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/abc.js",
        revision: "812088105d7d4acd4333c810a5f61062"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/actionscript.js",
        revision: "e6133076fc939842ae78fb8a27186d8e"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/ada.js",
        revision: "55cff79cdbbf4c5219e98ed9abc5466f"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/apache_conf.js",
        revision: "bd55154c863daf4d2e53145196e26f3f"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/applescript.js",
        revision: "9c2c4c556461fc5610c7951576e127d9"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/asciidoc.js",
        revision: "b908e50bfc18f9aa35a8f7a9425e6c38"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/assembly_x86.js",
        revision: "8204209d916bba4cf76004c5a304362a"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/autohotkey.js",
        revision: "887e0caa5d012cd050381ab6f41010a2"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/batchfile.js",
        revision: "3f141ddfe4e91e7cb5b902cfaacd2ad0"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/bro.js",
        revision: "4dcdeda7e7b6fa0e0a82745114057934"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/c_cpp.js",
        revision: "0483b000dfd0316eb66c4e6bdd156578"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/c9search.js",
        revision: "6c66896ca6a979466bfc391b8e10ab49"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/cirru.js",
        revision: "dac50f02d016dd649dbac0d0b653cf36"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/clojure.js",
        revision: "a56df82e7873b30655537dcca6227365"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/cobol.js",
        revision: "49c6304e1ae27edf2b00ebf7b1b79406"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/coffee.js",
        revision: "51b2dc791586399c50e08eb456a1395e"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/coldfusion.js",
        revision: "dc2b4d49b05a871caf3fa3fb7f475beb"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/csharp.js",
        revision: "80d44d0b71b140710a74cf7eae842e85"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/csound_document.js",
        revision: "d9e44572528df237b74246a73dd7ce52"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/csound_orchestra.js",
        revision: "51126e529e786dae479a29a4711370d5"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/csound_score.js",
        revision: "b941242fd789d88c9e05b9e10920eee2"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/css.js",
        revision: "306c6c8778a3c41b1ad33a246aa038a8"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/curly.js",
        revision: "5ed972cad145343c209a43625677ddd0"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/d.js",
        revision: "ba75718d846b950b27f8a644ef81bc1a"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/dart.js",
        revision: "1b381e2f068e61f400c5eb07fbb921df"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/diff.js",
        revision: "ceec15768a89a640ec8b09e28d2215a7"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/django.js",
        revision: "41544860d451e4ffe70471a8c67676be"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/dockerfile.js",
        revision: "1a2dedafae46cdf2dde7084d96080ed6"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/dot.js",
        revision: "7fa680a5efc009597e9804fc2baf19ab"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/drools.js",
        revision: "f1cab38157c4f6aaf73ba38394ffec48"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/eiffel.js",
        revision: "282c63776bba664eeaeb7039c198e4cb"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/ejs.js",
        revision: "304f757816259c7f47dd0247c2c3c82e"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/elixir.js",
        revision: "f4c3cb38670c8dc5b28be3cccc12f49b"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/elm.js",
        revision: "1a3431e6f808522c808314e235c85edb"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/erlang.js",
        revision: "76a4bcefb18db0f6ec31f1c4e6726f33"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/forth.js",
        revision: "f59030955b710c47683d3b3fc61aebea"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/fortran.js",
        revision: "59d76c3e6e7e0ee7d332f22ecf1684d0"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/ftl.js",
        revision: "0c0aa230dc3486af3d17bd7bfb605edb"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/gcode.js",
        revision: "199b33f0fde4fefe12fbf619e3125bc9"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/gherkin.js",
        revision: "286947a9740db2e1f2949789e660640b"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/gitignore.js",
        revision: "6005e0482bf79a666dea7982c72a4499"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/glsl.js",
        revision: "5487e3c96b5f3afb9e7ba06882dfa7a4"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/gobstones.js",
        revision: "8cc542699b6eddd913992f84c4bead77"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/golang.js",
        revision: "bf72cf5f74ae084a046049d799a6d873"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/graphqlschema.js",
        revision: "8f3e57079c17ba7c90256a914aa43de3"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/groovy.js",
        revision: "0c5cc78d625930c2345d30fc001a453a"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/haml.js",
        revision: "fbd1ed8d8d4236990cd38c3a67112a32"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/handlebars.js",
        revision: "363062c3ce37a7b9fd6012c150d89f81"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/haskell_cabal.js",
        revision: "ec6fa9bf8edbe504b77b18893955a84c"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/haskell.js",
        revision: "c55ef9dbed57dabf8c2b03411282abb1"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/haxe.js",
        revision: "227cc1e609bc9788021ecacd3edd23e5"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/hjson.js",
        revision: "37238f9647dcaab2a927fd40909cb8ab"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/html_elixir.js",
        revision: "45e78c44e2e9c8f9fabd964320d601c0"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/html_ruby.js",
        revision: "99bafbd9d39ef8ab222ec2781a78cac5"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/html.js",
        revision: "1925ec2f65c3685fea098cee7560779c"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/ini.js",
        revision: "8ac56ca1ee4b174a3cd8ac98b91759f9"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/io.js",
        revision: "83ffcc0c68edf65b31b066db5f2b7cd6"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/jack.js",
        revision: "aa880c9ba0b2438105a891c46840264b"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/jade.js",
        revision: "50105ce6f3dee8b5caee3a35c4cf849f"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/java.js",
        revision: "a4906347033fda7ee8a2a8dac0d7bff0"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/javascript.js",
        revision: "053b6ad124731f8887c252fa9e2c7dfb"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/json.js",
        revision: "f282812f4bcf545fd18afe9a27a53548"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/jsoniq.js",
        revision: "da83446c7648c7834d83d4aae0d613bd"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/jsp.js",
        revision: "37eda3aa8b75fa0d4f7f0472fd2ef5a3"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/jssm.js",
        revision: "bb74812c27344996fa0aa1f803d3c702"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/jsx.js",
        revision: "c37db5a5d8769b2219925d8c1f58f638"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/julia.js",
        revision: "ceb8e1f510d2743614b9e80212a82bc4"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/kotlin.js",
        revision: "519c347fe9a1500fa87eee703f291a57"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/latex.js",
        revision: "0ae7253f541408873856b8e0bd0bf8ab"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/lean.js",
        revision: "8363efd8be52941fd70cdc9f89017607"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/less.js",
        revision: "857bebd6903f99849b60bd91420254de"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/liquid.js",
        revision: "d584a682af667856922d0e63b4d13ce4"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/lisp.js",
        revision: "a849a4e4a3331d4660be24306dcf8715"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/live_script.js",
        revision: "c418cd260d58c744274a27183218a2f6"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/livescript.js",
        revision: "65da6167cfecbb426fe75b087e3350a9"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/logiql.js",
        revision: "b0671780685a71c8b111845b32b68fc9"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/lsl.js",
        revision: "c1be1464d08134538a93fa85e01fe382"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/lua.js",
        revision: "da21a820e1b79e1656df819f1adf1ecb"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/luapage.js",
        revision: "d07f9a1a75e6e06712d4bf13d070e119"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/lucene.js",
        revision: "92fbdd59c8a34d95d9871b20f0a9edfa"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/makefile.js",
        revision: "0c76c3585cdacf295258e3b6eb460b0f"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/markdown.js",
        revision: "13893fa37d7dc093db7946a8742544e6"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/mask.js",
        revision: "c310a0917d06a971bd1a6f22b8563e2d"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/matlab.js",
        revision: "b1cdcda8d28f43bbf0f45c793992dcbb"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/maze.js",
        revision: "ecd412a85818020843221095e5f912e5"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/mel.js",
        revision: "6e8e9dfb043ea9c4e1012cf2b7c52a93"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/mips_assembler.js",
        revision: "155173e536e835b41be66356f0344ac7"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/mipsassembler.js",
        revision: "aa663a1fda4253e8d23cd9af2f5fba88"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/mushcode.js",
        revision: "dd465b5b7ed8c0ce7f7028155aa95b2a"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/mysql.js",
        revision: "2a17764743409ba938aef3badbf617c8"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/nix.js",
        revision: "a568509292dfba3f307079e2397078ba"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/nsis.js",
        revision: "7dc51e41683a5359e713a413b71b4501"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/objectivec.js",
        revision: "8890a8c10b0c273fdc16697669a2322e"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/ocaml.js",
        revision: "9c990786647cbf6608774aa71282cace"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/pascal.js",
        revision: "adc8e186b157d349b166c37e0d88ab57"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/perl.js",
        revision: "918bca54ca8062e9c55f429f52427848"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/pgsql.js",
        revision: "9eac0ad7187363253f7ed53f7f70f21a"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/php.js",
        revision: "0fa3ee5a71295f1b4405a28d63fa2dba"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/pig.js",
        revision: "d7af22539d82a3ceab44b9fc7136e049"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/plain_text.js",
        revision: "0df87b08c38746d64a15793109f55b84"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/powershell.js",
        revision: "a89d0e30c18ecc38a8d6f3382939ed48"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/praat.js",
        revision: "1bda450b3978557555a4b4aed969aa52"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/prolog.js",
        revision: "957e15bb7531acd1afafeeecd7844064"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/properties.js",
        revision: "99ba24f19416ffdff483bfa15c13e456"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/protobuf.js",
        revision: "3cee079704fd20bec037100331e85302"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/python.js",
        revision: "99ea6bc1e2069b1c0cc4b1cea5a668ab"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/r.js",
        revision: "83b71d504ef2201693d50556e232a2eb"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/razor.js",
        revision: "7c06faf4a8bab55e98042adfd23cffda"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/rdoc.js",
        revision: "c33ecbf45a5ab34e1c47f1b04b2574a0"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/red.js",
        revision: "fb6ca8a968980b9759d9c4944eb146c3"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/rhtml.js",
        revision: "1575fc062cdf09f1874df8c9b0bb3a2f"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/rst.js",
        revision: "b988b8ad4936c9d4da4297e21c1f2467"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/ruby.js",
        revision: "133a59c01cc787b3315dbc1094623242"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/rust.js",
        revision: "a684b65a9f2ab2deac204071a2219d7e"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/sass.js",
        revision: "25c61ca4750566daa9a0e4d80080c6e4"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/scad.js",
        revision: "daccba19a383afe01b4c3570582b88d7"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/scala.js",
        revision: "d2bc07b20995ea3186e1f8725fb6eab6"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/scheme.js",
        revision: "338dbf30fbc56a480b26de3c3910ffab"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/scss.js",
        revision: "e94502c00ab892915eb3248c1a3e518a"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/sh.js",
        revision: "8416feb5ef24909fd28fa9269660a425"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/sjs.js",
        revision: "3787a976a24ef8d4e90a8b31ceaf547f"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/smarty.js",
        revision: "fc26d80aa2203be77246ff569cf716fd"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/snippets.js",
        revision: "6fa908b1c608672425734aba72251b34"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/soy_template.js",
        revision: "d686d1cce3180748290f610b1ea2280c"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/space.js",
        revision: "68a6c0124a02f32a11b34d5070b27846"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/sparql.js",
        revision: "86cf3edf3e3f1f14329789e6f0536899"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/sql.js",
        revision: "e7808496091045a2583c347aa7af0c9c"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/sqlserver.js",
        revision: "325b26823c2d994bfab1f1e3f819e6fd"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/stylus.js",
        revision: "23d9f26d77116ee4fcf16af0be13d285"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/svg.js",
        revision: "f022c569e7de02ba52511fdb3eac6aa2"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/swift.js",
        revision: "ff82f694f431d0e137751c59f40f0c86"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/swig.js",
        revision: "e579ca69129e973cefd5eb6d59d17515"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/tcl.js",
        revision: "d632f4312ae3ef5e47e02aeaea337748"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/tex.js",
        revision: "c8cb68d16c97da40187d41ce9b6d9bc5"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/text.js",
        revision: "c16d866c5258def1770d687cb91b7b32"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/textile.js",
        revision: "949fc5705c8adc2e6092ece37e37c1e3"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/toml.js",
        revision: "23881bd0269699cae8706f6272500932"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/tsx.js",
        revision: "c9a49192a083e8f053762057bc321022"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/turtle.js",
        revision: "d02f9a2b4a79d0106d4a711e84f6464a"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/twig.js",
        revision: "89c4e06b2839358d1b7c9aab41d54db6"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/typescript.js",
        revision: "8d8c98424d26c90172ef042d464d875f"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/vala.js",
        revision: "d7bd707368fd8847853e8e21909673a8"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/vbscript.js",
        revision: "b98f6310cb3f0a4e9fdc7a2f49803dee"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/velocity.js",
        revision: "af96e8cd34e76f0fd3f0d14d13e389b6"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/verilog.js",
        revision: "38555d4343c7d5810ffff7e3f678fcc2"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/vhdl.js",
        revision: "a5fb086ff399ea976759cdfffb3d1479"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/wollok.js",
        revision: "628ddead502a8b2225a8bcde7615180f"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/xml.js",
        revision: "7a8b1cc45a44d495721bce4e38617206"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/xquery.js",
        revision: "25de11e0cd7f84af2d226df431ec3586"
      },
      {
        url: "FriendCreate/Libraries/Ace/snippets/yaml.js",
        revision: "109add5f1a36872e44e9130e6ca75b6b"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-ambiance.js",
        revision: "b42d366b8dd4dccd42a003fac6454bbd"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-chaos.js",
        revision: "df478f58d69a1781045832ea8527969a"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-chrome.js",
        revision: "e28d16cb55d12000ff675beae3b58d97"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-clouds_midnight.js",
        revision: "3d9ecbd175d80795b53607db1f3c4129"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-clouds.js",
        revision: "6fc9e0c19536deb3e86c8072ade03d93"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-cobalt.js",
        revision: "4e6e87b56e7a538c44e3b496629cf592"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-crimson_editor.js",
        revision: "6fcf7f36adc7dd0772f6a78b7a1cfb1b"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-dawn.js",
        revision: "e521068f4f85552ac8b24d90d6fb336c"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-dracula.js",
        revision: "2af32c5fa411a66d00f5c1228c5f0805"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-dreamweaver.js",
        revision: "0d94a5f1425a71bb9309acbb85243499"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-eclipse.js",
        revision: "49a60b5fa240facbd0e67be2f3c31ec7"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-github.js",
        revision: "9d7d9e2a3daa52aedc7c350f29547275"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-gob.js",
        revision: "749bf787fed28539ae7f716993896052"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-gruvbox.js",
        revision: "4a5e8694ca2baf700667f444100d3f7f"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-idle_fingers.js",
        revision: "a337b5857d7ff35f0ccd5f2997e24ea7"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-iplastic.js",
        revision: "adcb695b8078e82367523972d5a9c241"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-katzenmilch.js",
        revision: "71fce2d0450d55cddc44106fbbb955ac"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-kr_theme.js",
        revision: "e5f7e1d9db94f7ce28c98eec79fe102f"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-kuroir.js",
        revision: "0a5f0ed628a4b89330372f59a3b125cb"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-merbivore_soft.js",
        revision: "7c74b35e4ee13a484fe93be7733aa64f"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-merbivore.js",
        revision: "0ae1435d59d675cf849a3c9631f4f88f"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-mono_industrial.js",
        revision: "85672021dbee0b25fab2214bcc589bd2"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-monokai.js",
        revision: "8e1b96da8454a4cdc6a39e337803c8ff"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-pastel_on_dark.js",
        revision: "b6ab5c9acf3063cb8603b3f96c0f82dd"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-solarized_dark.js",
        revision: "92ed89bdeb2bacb4e4d4361b6b00391c"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-solarized_light.js",
        revision: "6fd062c5d37153e8c05d52033a645d79"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-sqlserver.js",
        revision: "71224f570bdf12ef5163c902e8777134"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-terminal.js",
        revision: "7eb929ad8d07cb6e1982a03e95f7d298"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-textmate.js",
        revision: "c5a9170af64a12790e214e32c4e297c3"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-tomorrow_night_blue.js",
        revision: "fbd09e4ad26a278db885732c58517b2b"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-tomorrow_night_bright.js",
        revision: "24cbc00756ae9255475de65f42af92aa"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-tomorrow_night_eighties.js",
        revision: "47944f6e4bb3de48f87194d6fc80526f"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-tomorrow_night.js",
        revision: "c354abbcb2e4f72a277a0043ae8b4e13"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-tomorrow.js",
        revision: "5dda02a39d2c3faa43c42511fd4d4cd9"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-twilight.js",
        revision: "ddabc68ad149fe85bdf1c9a64e2119db"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-vibrant_ink.js",
        revision: "ab84f7653133a3277410390f10aa43c0"
      },
      {
        url: "FriendCreate/Libraries/Ace/theme-xcode.js",
        revision: "c407a13e5800d97dce86708f1a940234"
      },
      {
        url: "FriendCreate/Libraries/Ace/worker-coffee.js",
        revision: "fe046fd0e4633f58e457aa5859bb154c"
      },
      {
        url: "FriendCreate/Libraries/Ace/worker-css.js",
        revision: "43b36b90423a6b9dc80fb78cb3a9929e"
      },
      {
        url: "FriendCreate/Libraries/Ace/worker-html.js",
        revision: "b868766e5865fd963d725fa1d5ad7d92"
      },
      {
        url: "FriendCreate/Libraries/Ace/worker-javascript.js",
        revision: "b527fa836e5ea6860c1fe91b90ed14a0"
      },
      {
        url: "FriendCreate/Libraries/Ace/worker-json.js",
        revision: "3912f58f8bccdb118f5d12814e9c2a56"
      },
      {
        url: "FriendCreate/Libraries/Ace/worker-lua.js",
        revision: "cb927af8ec8e8485131a7adec3ac6593"
      },
      {
        url: "FriendCreate/Libraries/Ace/worker-php.js",
        revision: "0baa03a9fed4defc930bbfa3e978de25"
      },
      {
        url: "FriendCreate/Libraries/Ace/worker-xml.js",
        revision: "50365c345e9456f094ae94ec316afb36"
      },
      {
        url: "FriendCreate/Libraries/Ace/worker-xquery.js",
        revision: "5523a893abce5d4d99ca4fe1189eafb4"
      },
      {
        url: "FriendCreate/Locale/en.lang",
        revision: "fc3cb4b3b27a4cb5ea781bb24fd879a9"
      },
      {
        url: "FriendCreate/Locale/no.lang",
        revision: "aac579a5e7f923242cf0186387324524"
      },
      {
        url: "FriendCreate/preview.png",
        revision: "56d37eabecfe7f99f024f55edcea51df"
      },
      {
        url: "FriendCreate/Scripts/main.js",
        revision: "37140c6ce940e1f9dcaa774d9c6e9b84"
      },
      {
        url: "FriendCreate/Scripts/project_editor.js",
        revision: "72ceca4370c0aa4abbc6cdb17e3610dd"
      },
      {
        url: "FriendCreate/Templates/about_en.html",
        revision: "3544e567e176086e034ca123d92ca6cd"
      },
      {
        url: "FriendCreate/Templates/about_no.html",
        revision: "31b47e3db5128df70325b887b079a2a0"
      },
      {
        url: "FriendCreate/Templates/about.html",
        revision: "e2c90e995ca3e2cf1dfa5bca665abcfb"
      },
      {
        url: "FriendCreate/Templates/main.css",
        revision: "69d0ed470808d39434b2c58af7c49313"
      },
      {
        url: "FriendCreate/Templates/main.html",
        revision: "e74656eca2c24fcba19d9d29e087a95f"
      },
      {
        url: "FriendCreate/Templates/manual_en.html",
        revision: "9599abaa8046285325eb358c3a91347a"
      },
      {
        url: "FriendCreate/Templates/manual_no.html",
        revision: "e57f53e491784d33701d38df34239716"
      },
      {
        url: "FriendCreate/Templates/project_editor.html",
        revision: "d3a04e80570ba967e954649200df2535"
      },
      {
        url: "FriendDevelopers/Config.conf",
        revision: "e6ac2c8b1cc4c1275a8ae89f7223f7ca"
      },
      {
        url: "FriendDevelopers/Css/inside.css",
        revision: "a101a65918eccf2ffe510df3b9f40daa"
      },
      {
        url: "FriendDevelopers/Locale/en.lang",
        revision: "cb492b7df9b5c170d7c87527940eff3b"
      },
      {
        url: "FriendDevelopers/Locale/no.lang",
        revision: "cb492b7df9b5c170d7c87527940eff3b"
      },
      {
        url: "FriendDevelopers/Locale/pl.lang",
        revision: "81051bcc2cf1bedf378224b0a93e2877"
      },
      {
        url: "FriendDevelopers/Scripts/developers.js",
        revision: "40542ac4782ed16a256381e1225be738"
      },
      {
        url: "FriendDevelopers/Scripts/inside.js",
        revision: "2fca0f2e85bd7dcedbccc07d6e73e425"
      },
      {
        url: "FriendDevelopers/Templates/developers.html",
        revision: "2ee27e6642f6810164f2a1eb7777b127"
      },
      {
        url: "FriendJukebox/Config.conf",
        revision: "6cb3f3c271c35cb783c8e82886a0aa84"
      },
      {
        url: "FriendJukebox/Css/main.css",
        revision: "3af71033d321a733398de73ce040ede8"
      },
      {
        url: "FriendJukebox/icon.png",
        revision: "ead895ddd74c26ec1d999e389e750a37"
      },
      {
        url: "FriendJukebox/index.html",
        revision: "e4f5b31df74ee1bd8b0057523b633ef9"
      },
      {
        url: "FriendJukebox/Locale/en.lang",
        revision: "d511a9159bea21f4c64e4bf9fd95b6fb"
      },
      {
        url: "FriendJukebox/Locale/fi.lang",
        revision: "aebd176d11b70b99d89e9b11db6ea40c"
      },
      {
        url: "FriendJukebox/Locale/fr.lang",
        revision: "45098532325455a74ff219dc1d08ee74"
      },
      {
        url: "FriendJukebox/Locale/no.lang",
        revision: "66bba10fe753eb246316df01782ea4f6"
      },
      {
        url: "FriendJukebox/Locale/pl.lang",
        revision: "7df5a01151f9b4a2786314a956a21968"
      },
      {
        url: "FriendJukebox/preview.png",
        revision: "ead895ddd74c26ec1d999e389e750a37"
      },
      {
        url: "FriendJukebox/Readme.md",
        revision: "d9c3d6459b2d0c01bc22721c50442248"
      },
      {
        url: "FriendJukebox/Scripts/exotica.js",
        revision: "e731023d2a5491d28b4cf75516b9e5c0"
      },
      {
        url: "FriendJukebox/Scripts/player.js",
        revision: "b49f370c51abba3373508b1760bcfbdd"
      },
      {
        url: "FriendJukebox/Scripts/playlisteditor.js",
        revision: "2cee2b35f89bdebf55f04141f1a85bc6"
      },
      {
        url: "FriendJukebox/Templates/about.html",
        revision: "aac9b201fd1b3fb2b878f90c4797b9bc"
      },
      {
        url: "FriendJukebox/Templates/main.html",
        revision: "dc6d5fc912d60cc8a7492ff594b8c43d"
      },
      {
        url: "FriendJukebox/Templates/playlisteditor.html",
        revision: "97f3e31d36e94ab006a1016f31613985"
      },
      {
        url: "FriendJukebox/Templates/source.html",
        revision: "1affa9e1dc36ed02f1596bec725d4a89"
      },
      {
        url: "FriendShell/Config.conf",
        revision: "1680bc1c6fef02c49030eca951cf7f2c"
      },
      {
        url: "FriendShell/Documentation/index.html",
        revision: "ffa2dd2341fee019be28c81531d8ab91"
      },
      {
        url: "FriendShell/icon_dock.png",
        revision: "acf660396f3fcfd3157049a0412aaffd"
      },
      {
        url: "FriendShell/icon.png",
        revision: "acf660396f3fcfd3157049a0412aaffd"
      },
      {
        url: "FriendShell/Locale/en.lang",
        revision: "6b75617958787f0d924173a8da689e12"
      },
      {
        url: "FriendShell/Locale/fi.lang",
        revision: "5bbb7f222db8b09d3c44930616ce419c"
      },
      {
        url: "FriendShell/Locale/fr.lang",
        revision: "b8fff11d3cb9c11e92719bb09bc56a8e"
      },
      {
        url: "FriendShell/Locale/no.lang",
        revision: "4e736d9564b2852790073d1496e37db2"
      },
      {
        url: "FriendShell/preview.png",
        revision: "acf660396f3fcfd3157049a0412aaffd"
      },
      {
        url: "FriendShell/Scripts/shell.js",
        revision: "88d801833a211319042d1486ffa78ee2"
      },
      {
        url: "FriendShell/Scripts/terminal.js",
        revision: "2c65669a92116f9193399495be190261"
      },
      {
        url: "FriendShell/Stylesheets/terminal.css",
        revision: "4a8ddebbb8c5f4488e025ee264f1df5a"
      },
      {
        url: "FriendShell/Templates/terminal.html",
        revision: "56aaa32781c09acd9a29c1ade46a5886"
      },
      {
        url: "Looknfeel/Config.conf",
        revision: "ce7019788c5b5d2f5e0554f3f3c06b82"
      },
      {
        url: "Looknfeel/CSS/gui.css",
        revision: "a8abfefd80cb5228eb4989d41d866326"
      },
      {
        url: "Looknfeel/icon_dock.png",
        revision: "fb067060ae38d46178986551cc4eb0a1"
      },
      {
        url: "Looknfeel/icon.png",
        revision: "fb067060ae38d46178986551cc4eb0a1"
      },
      {
        url: "Looknfeel/Locale/en.lang",
        revision: "01cdb149c982f7155fd56e3570ebbdf1"
      },
      {
        url: "Looknfeel/Locale/fr.lang",
        revision: "f9219c96de9460d853689d79617e5976"
      },
      {
        url: "Looknfeel/Locale/no.lang",
        revision: "1e716e184b9bcce728c73ab01c0201d2"
      },
      {
        url: "Looknfeel/Scripts/gui.js",
        revision: "6b35b9d762d3cea53b73f596ee99482f"
      },
      {
        url: "Looknfeel/Scripts/looknfeel.js",
        revision: "97f347c2a829ee107753802dd008e90c"
      },
      {
        url: "Looknfeel/Templates/gui.html",
        revision: "e6fee5964dff8b3515d814b3fe240eec"
      },
      {
        url: "Mimetypes/Config.conf",
        revision: "d3640b2e560a6dd1940c21ef5cf7c7ba"
      },
      {
        url: "Mimetypes/Css/main.css",
        revision: "7a1553cff51f3f6ebf4c40b5c7fff065"
      },
      {
        url: "Mimetypes/icon_dock.png",
        revision: "dcfbf8b1dc93cc014204cb7c915fb86a"
      },
      {
        url: "Mimetypes/icon.png",
        revision: "dcfbf8b1dc93cc014204cb7c915fb86a"
      },
      {
        url: "Mimetypes/Locale/en.lang",
        revision: "d5b64b1f45dd3587518474083c2f81f4"
      },
      {
        url: "Mimetypes/Locale/fr.lang",
        revision: "d4f748d404a81ad1a91981bfe7268b89"
      },
      {
        url: "Mimetypes/Locale/no.lang",
        revision: "c63fa9e6f049b21378b80071964ff558"
      },
      {
        url: "Mimetypes/Scripts/main.js",
        revision: "2e390236db2abafed549bb9e1358f8d8"
      },
      {
        url: "Mimetypes/Scripts/mimetypes.js",
        revision: "0fce516660d588483ca80a08d712e1ac"
      },
      {
        url: "Mimetypes/Templates/main.html",
        revision: "d4600a1d37e57c90c336414b781585a5"
      },
      {
        url: "Notes/Config.conf",
        revision: "7860d6493b90c7a7e4aa7ececa98fbaa"
      },
      {
        url: "Notes/Css/design_atmospheric.css",
        revision: "79f7554fd61c2aa4a3f96d75d02ae539"
      },
      {
        url: "Notes/Css/design_dark.css",
        revision: "9acb9a53fe7cd2481ce355ee016354e6"
      },
      {
        url: "Notes/Css/design_default.css",
        revision: "b85b8af61f1aa9c2d227c692cd0ee9a5"
      },
      {
        url: "Notes/Css/editor_inside.css",
        revision: "be647fb82d399dc7fb79f84033f2cddc"
      },
      {
        url: "Notes/Css/editor.css",
        revision: "836783eb1a373002721793cdf02bb922"
      },
      {
        url: "Notes/Css/prefs.css",
        revision: "e89eb6eb398c1b18393e90495884961f"
      },
      {
        url: "Notes/Documentation/index.html",
        revision: "394ff6885b24bd5823d3664a5107a256"
      },
      {
        url: "Notes/Gfx/bagebreak.png",
        revision: "5a3d1a67aab6222d81af632e27fcb79f"
      },
      {
        url: "Notes/Gfx/page.png",
        revision: "2ef6d783abf578fe21703cd43ca8b911"
      },
      {
        url: "Notes/Gfx/pagebreak.png",
        revision: "2196aa04f3ac9b9c5280ca0bd9b2478f"
      },
      {
        url: "Notes/Gfx/pagebreaklast.png",
        revision: "bae007064b8f0a81ab65113bba3c0a51"
      },
      {
        url: "Notes/Gfx/pagebreaks.xcf",
        revision: "cc17b1257942f1b359a0d2134676873e"
      },
      {
        url: "Notes/icon_dock.png",
        revision: "2d027a37067a487a360629fdab6af9c8"
      },
      { url: "Notes/icon.png", revision: "2d027a37067a487a360629fdab6af9c8" },
      {
        url: "Notes/index.html",
        revision: "a5b6087de8abb71ca03a4795ad5549e5"
      },
      {
        url: "Notes/Locale/en.lang",
        revision: "a8580bc473caa3854b13831a7c6dea91"
      },
      {
        url: "Notes/Locale/fi.lang",
        revision: "d1ab15f2a893dcbfc6d17db007ee03d8"
      },
      {
        url: "Notes/Locale/fr.lang",
        revision: "abc62e64d4b76387ceb784aca7714bcd"
      },
      {
        url: "Notes/Locale/no.lang",
        revision: "a045196f4777d059a59cff39121ed6dc"
      },
      {
        url: "Notes/preview.png",
        revision: "2d027a37067a487a360629fdab6af9c8"
      },
      {
        url: "Notes/Scripts/author.js",
        revision: "5edecb2e43059db4ca3cc4044ffd62f2"
      },
      {
        url: "Notes/Scripts/ckeditor/adapters/jquery.js",
        revision: "eca72ded5e930c658e7a0b7c0284342d"
      },
      {
        url: "Notes/Scripts/ckeditor/build-config.js",
        revision: "0d574007db05885c26e450d70a8d32ad"
      },
      {
        url: "Notes/Scripts/ckeditor/CHANGES.md",
        revision: "3b6868ce7adf9aec138bd25c13dc2b3e"
      },
      {
        url: "Notes/Scripts/ckeditor/ckeditor.js",
        revision: "2d0c4dc04aff7277fce663f17814d668"
      },
      {
        url: "Notes/Scripts/ckeditor/config.js",
        revision: "7fd6d3c17c97f1a2f8f8726367ba441e"
      },
      {
        url: "Notes/Scripts/ckeditor/contents.css",
        revision: "b16b7140e24e38fbf62337ae3d3ae29a"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/af.js",
        revision: "12556d71b1ee4a345809a37d2cc34cd3"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/ar.js",
        revision: "658df7d95af25484f1e989dc46874bdb"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/bg.js",
        revision: "7bbb34bbdb9e5f14fe3f74a198d26868"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/bn.js",
        revision: "46a0ef5312c51e735543754b44c197d8"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/bs.js",
        revision: "4f8d762a5efa48cb19d685ed1494f1bc"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/ca.js",
        revision: "97ca8cf5a0a592432ef81558bc849462"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/cs.js",
        revision: "97e118d4d8e33b7ec8c8ca11d8834e41"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/cy.js",
        revision: "c18d4c5beeda7491c2dccfd320931935"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/da.js",
        revision: "f0a4b27f5d2a4cdad5a9155e80b352e0"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/de.js",
        revision: "aee6ad394c6b56438a6f798ae4a761e7"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/el.js",
        revision: "1ccc6896b14f2cd8c23a94e52c08ef9e"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/en-au.js",
        revision: "44d018f3ee305e0268a32603254c0b38"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/en-ca.js",
        revision: "537d4bd23ca9c932873eea6f8bde013c"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/en-gb.js",
        revision: "3f62dc3a5c5dc0e40a9204b234958fa0"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/en.js",
        revision: "46f72563886018d8bc8a9a02c5a049e1"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/eo.js",
        revision: "9cfce9c6b15c6ceb753f56429ef1fb20"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/es.js",
        revision: "dd7392605c1cdaea08424b23a8c33c90"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/et.js",
        revision: "6e15a269be47fbebcb3e3017e3e5bbad"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/eu.js",
        revision: "6850047d06893d0c5372b888ffab48b8"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/fa.js",
        revision: "b12393b6492349f67a6b984eeb1dd660"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/fi.js",
        revision: "155082de6c3a8e84145a3a549c6e4a36"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/fo.js",
        revision: "c9e84b4a36e3a8e2d0f0ddcec8e6be4c"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/fr-ca.js",
        revision: "64933416d6b7d797c0891e794090eaa1"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/fr.js",
        revision: "46c2ac884343f52e3805d050e8f22ba1"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/gl.js",
        revision: "291ac014b90531d16045639a6e789c6a"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/gu.js",
        revision: "1a1dedbfd755e104a632e392ffdf983e"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/he.js",
        revision: "1a04c8dd60993d0a983c153160f2d8c3"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/hi.js",
        revision: "4364c98c48d35bacb988ee2bc3d881d2"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/hr.js",
        revision: "05963bc74668c0f7ecf9d64bbe0b73e6"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/hu.js",
        revision: "801039c758b483390017bc1cde6db55b"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/id.js",
        revision: "62ab3d0ef3579dcc0b5699c160c83bf2"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/is.js",
        revision: "4c7345a9cafb240bbe81b57512c1a8a2"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/it.js",
        revision: "ec1495748b8ac42ad468f5799ba06598"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/ja.js",
        revision: "cc8b2797d24876d29f9319a6c836717e"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/ka.js",
        revision: "399662c4bc45aef937a5401113acef68"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/km.js",
        revision: "56f0b39ad9227bf8b6e8fc4346ce9e9b"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/ko.js",
        revision: "413d63a86e0f26d7253747b6f48f99c6"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/ku.js",
        revision: "c1808583b398ec8424ca689f27a7985a"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/lt.js",
        revision: "23b1e34c77de0860f45b8e3766970e0b"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/lv.js",
        revision: "5e2abfab15c7db0030874c2e7470974c"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/mk.js",
        revision: "697b1d2933d695072885c228afd3133c"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/mn.js",
        revision: "c37ead9bf63d318a3c0f93050cfbbe27"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/ms.js",
        revision: "7352928ff0cb7e66fa21b308333f62cc"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/nb.js",
        revision: "e4e06aa2fa70e5c1d1dd0a7024f1594c"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/nl.js",
        revision: "429e98607fe9e427ccba87ff9e73ca7e"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/no.js",
        revision: "fc6837195372e1b3da1f8d5ae01717d5"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/pl.js",
        revision: "19d342f5e939c32c16ba6da16d03dad8"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/pt-br.js",
        revision: "84391a9104920b3e8c5bc197d4841037"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/pt.js",
        revision: "2745e5f068508b35165c9212be6848eb"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/ro.js",
        revision: "3cc8f8246d1a81626f3fae82520458d5"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/ru.js",
        revision: "b224c27b0ab15cdc28adfb5eb1789a70"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/si.js",
        revision: "7d866c111960a7fd7d764960d8dcf14a"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/sk.js",
        revision: "74096a24e298c6fb03297c7e8000cd5c"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/sl.js",
        revision: "293d1ff87593a58d91ea8db8166f01e2"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/sq.js",
        revision: "685eff2740b8c5d45d592afe61c329d6"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/sr-latn.js",
        revision: "81955560b244c2e0ea887d3766324c7d"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/sr.js",
        revision: "9f456c9a8193c88378242306d979d59a"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/sv.js",
        revision: "c3cf1dd04554bbbd276f4258715e6cdf"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/th.js",
        revision: "a396eb425809cb0ae855046cc1702cac"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/tr.js",
        revision: "25ae3d383a78bf54f122ec9cb0fd8abb"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/tt.js",
        revision: "9d28a69952765f4545716cfea365c2e8"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/ug.js",
        revision: "19a84cc3fb5b19a7a6d4a2d6e7251517"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/uk.js",
        revision: "cc6a34d7d8bdd593ea26ea52172302f9"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/vi.js",
        revision: "4a6014920a81cb836d68c265602534cd"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/zh-cn.js",
        revision: "59e66988eaf007d72e3554c8c76d359b"
      },
      {
        url: "Notes/Scripts/ckeditor/lang/zh.js",
        revision: "a76fa68fe9da5f6e430d9d6b597c1a4b"
      },
      {
        url: "Notes/Scripts/ckeditor/LICENSE.md",
        revision: "fa477151686981ba14684f8cda0ac352"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/a11yhelp.js",
        revision: "2b2a1e86ada84921ff2d5fec2c62e5cf"
      },
      {
        url:
          "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/_translationstatus.txt",
        revision: "9d2f1b77aa8589aad32d2e72c4a48c1c"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/af.js",
        revision: "77610eb458651a84ea6d9816a48e2465"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ar.js",
        revision: "5298f260e9dbdfed7f668ad4b716efff"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/bg.js",
        revision: "19519bc82b1da9d8766bf66b02d0ea86"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ca.js",
        revision: "68dd8f9b75d9021c8012f41d75bcae2e"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/cs.js",
        revision: "1341eaada39a7bbdfc02e01b0f943114"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/cy.js",
        revision: "a37116c7f656d23986f7ee12013e9931"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/da.js",
        revision: "1117ea5bd66ee2413bf3e6588bdfbe3f"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/de.js",
        revision: "84736adbace6b2d18a1519df58df9984"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/el.js",
        revision: "2745cc14fa5ca729389a71a39fcbc68c"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/en-gb.js",
        revision: "89521eceb85233a81fabb51da258b7a7"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/en.js",
        revision: "e1029f1f34f02309446e47f24c4a228b"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/eo.js",
        revision: "ef98d102aae2bde0ce1cf168d885ea24"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/es.js",
        revision: "4b09630f06aeb20c90562aad9b103e2b"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/et.js",
        revision: "a5f44dbe1a4387dab0fa5fd5f85adaa9"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/fa.js",
        revision: "8e3b2cddf8a75f9dbc3e86a8b848fdc8"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/fi.js",
        revision: "92f430b3b19bab5b7f66a7ba0936f1eb"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/fo.js",
        revision: "a0f94ef1e0367ff2d76a1f8994c9e83b"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/fr-ca.js",
        revision: "b2e2a582ef5afd92f3f4befb056ad048"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/fr.js",
        revision: "1048134331d92947735983cb211c810b"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/gl.js",
        revision: "e5fb7f32608bd881e49eddaad3ae2831"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/gu.js",
        revision: "92179fa4b45fe3b8f1232813dc13c7a0"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/he.js",
        revision: "e10bf870d07f28ac77259df7c567d888"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/hi.js",
        revision: "a9f1cbf7bf73e7d89bbae3110a60bf4d"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/hr.js",
        revision: "b10a04fa6669949dd1320db1926a513a"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/hu.js",
        revision: "ebdb6d297819eeeb39356729bb6fec16"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/id.js",
        revision: "b93a1f0bc1c9f348d3a6453201d3625d"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/it.js",
        revision: "b1ff65b9f67039884a5ccd0ff4c962cf"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ja.js",
        revision: "5b1a52753aa05e3050098ca2ab659720"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/km.js",
        revision: "dc280f545f6c804f5dc74fe9958e38af"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ko.js",
        revision: "9c336d8507b9e9a0b1ec25d4824da955"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ku.js",
        revision: "5627d70c2cb29c0b8a8859475f14b03c"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/lt.js",
        revision: "9efc5a52d2a61c867e6c3a8ab1a46872"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/lv.js",
        revision: "f3516185b33d6057866fa8583e6535a9"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/mk.js",
        revision: "bc2643e6980f452c5f1b2e11e3e99356"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/mn.js",
        revision: "fefd4a353473e72b7e2b2fbaf49eee70"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/nb.js",
        revision: "1f65c4a6cac889ee8ca3b94ab947e6ed"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/nl.js",
        revision: "84f19169119e8596c4f46d16816f2574"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/no.js",
        revision: "23e4843573feffc12f9426bad9cc179a"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/pl.js",
        revision: "563a08846e6e508cf8acaf6ab6df84ad"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/pt-br.js",
        revision: "83c646ae16e2884b792653fc00583411"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/pt.js",
        revision: "17438750dcfdee4c4ce019f02b1f35c7"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ro.js",
        revision: "8111f2045c0917fef7fe543eda1ecf8f"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ru.js",
        revision: "2bf63c01825e49b88df885f81b8b18a1"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/si.js",
        revision: "fcbece7992db8baaa70a6c6bd905dd71"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sk.js",
        revision: "46dc4c6c82b4619544cea3a711fe9180"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sl.js",
        revision: "d09deb43939f4a05533caf739fad3f9b"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sq.js",
        revision: "72144bea3ffdd02943120f2b53b6d168"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sr-latn.js",
        revision: "d6ce66a03a23203755313099c73bbc5b"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sr.js",
        revision: "5acbd14158d9be935d41ff787bbc2d42"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/sv.js",
        revision: "dbb3e291a2ac8be732f99871f9416092"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/th.js",
        revision: "544a3c7d8ec92f86a435340baa626f49"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/tr.js",
        revision: "1bc1e21f0d82f8befa53ad9756abc460"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/tt.js",
        revision: "4392a5773db42dc27239394ec928891e"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/ug.js",
        revision: "a035042cac07450623d2535bdc26c103"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/uk.js",
        revision: "1ab1651d0ce0ce2c2f817b0178749d16"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/vi.js",
        revision: "68623c4e31e0b281cb798088c30e6612"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/zh-cn.js",
        revision: "ef606137846fc04a14073346878f3388"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/a11yhelp/dialogs/lang/zh.js",
        revision: "75be02e7a3ab97e56b74304fdc22bed8"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/about/dialogs/about.js",
        revision: "caae736d9b47df33924af67f49af7a76"
      },
      {
        url:
          "Notes/Scripts/ckeditor/plugins/about/dialogs/hidpi/logo_ckeditor.png",
        revision: "6318d2b6f7fc79b4ed0404ffbc2dac1e"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/about/dialogs/logo_ckeditor.png",
        revision: "70dd831c761a20467a6ba9e5ae736f91"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/clipboard/dialogs/paste.js",
        revision: "1ef599eede007bc73616734f24895ab8"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/dialog/dialogDefinition.js",
        revision: "8eaa88b59fa1235f9cd660926ba96de2"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/icons_hidpi.png",
        revision: "1f57f384a8331a0cd3b8dfadfb61f0cd"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/icons.png",
        revision: "30df606419222c418c24d5cca47f66e5"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/image/dialogs/image.js",
        revision: "a2d3c431adfc4ad6481205059fba6905"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/image/images/noimage.png",
        revision: "77404b5590596de508a542979f3cda84"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/link/dialogs/anchor.js",
        revision: "da98eee7c83fffd4fc1c4bffdb733fa4"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/link/dialogs/link.js",
        revision: "43746a26b1aa8fdbca9e714af38a5ad1"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/link/images/anchor.png",
        revision: "c23e1c6b52f6ca6678b77f38fef61789"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/link/images/hidpi/anchor.png",
        revision: "9df1a4e40cabf35907a16ea59f3f9df1"
      },
      {
        url:
          "Notes/Scripts/ckeditor/plugins/magicline/images/hidpi/icon-rtl.png",
        revision: "b37d0404583c0ac273a27873451c3234"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/magicline/images/hidpi/icon.png",
        revision: "5ba2e7b6aa50c7843ae9ca01ce08b606"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/magicline/images/icon-rtl.png",
        revision: "a29eda8cd2b1ebcbd3379654acebfb85"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/magicline/images/icon.png",
        revision: "baf6974c98b636142c7b0b5ba19bd96c"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/pastefromword/filter/default.js",
        revision: "dda9ae05c22672476cfccc9012a4035a"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/scayt/dialogs/options.js",
        revision: "18a402960a425dc2af537a337e148ef0"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/scayt/dialogs/toolbar.css",
        revision: "abb7173bc76c982641101d81cc544ab0"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/scayt/LICENSE.md",
        revision: "e8f3afac5c765acbec1df8fc737eb48d"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/scayt/README.md",
        revision: "1318c10ce6d6fb1c902d3c7915f41940"
      },
      {
        url:
          "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/_translationstatus.txt",
        revision: "194d98388d302d35875d878e37eb83d2"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/af.js",
        revision: "1666a23eeb4a5c7db42a0a9a45fdda00"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ar.js",
        revision: "f5ad9545327ba666a071300c71a98fd1"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/bg.js",
        revision: "9e485bb3bc19949b20c4b30ed0191850"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ca.js",
        revision: "53ca3b43bc153ca7e83f30476c1a6bb1"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/cs.js",
        revision: "a405fef9de64f9046451e9b14270f158"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/cy.js",
        revision: "f42224db980e551c8dd36c648e2b39e7"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/da.js",
        revision: "801e666253f0345273c52eea1d41a428"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/de.js",
        revision: "3882c4dd68c40387c9919583141fa249"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/el.js",
        revision: "156089ea87e23918eba1a0fafa58502d"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/en-gb.js",
        revision: "f402047321173d272729b7f626b1a3b6"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/en.js",
        revision: "c0d228fd5f64a608f327919226c7dde8"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/eo.js",
        revision: "cf9e9085f4c53e1b41a462c9f7cd3736"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/es.js",
        revision: "bb5973778c5b0e303d601299252ef38f"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/et.js",
        revision: "17243a32a7d062a7b83de287882fbf41"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/fa.js",
        revision: "1016e8862e38891fcddada6779e4cdcd"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/fi.js",
        revision: "17c1ab4b0a96dac9971d481546f41c9f"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/fr-ca.js",
        revision: "7e2aef8cba00ee5e3ca22ebd6ca18152"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/fr.js",
        revision: "75cce46a858a36a0be36fbbcd36d39d2"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/gl.js",
        revision: "96f5dc5c5d4cf5a55aaaf25270cad7d1"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/he.js",
        revision: "3cebad0f06a7d40a5c2c5ec144763393"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/hr.js",
        revision: "d1db0d5003a2351c89daa088bd0f0095"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/hu.js",
        revision: "c4f09c06d93bb2daf303d9ec08ab0698"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/id.js",
        revision: "8ab5bd0f766c722a0b03844fb3d8c215"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/it.js",
        revision: "2deca5b892189aa0deaf972822a4bc9d"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ja.js",
        revision: "1e4005db555fe5326af5a3aeef7f72e0"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/km.js",
        revision: "f167b3bea9c304ecc2dde6687a67ce30"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ko.js",
        revision: "547cfc5fff4b4a97bb441d3c6238a3dd"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ku.js",
        revision: "ebb93ee2c8a689eb3374e299f7b602f0"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/lt.js",
        revision: "48c097cbbfdaf31524026da2c1d3b9a3"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/lv.js",
        revision: "09cc24d56e5dce10cf18bb5b632185a0"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/nb.js",
        revision: "1faef36572f440956e8f986483f8069c"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/nl.js",
        revision: "2ce403a014685241ca9242fad4c8b6ff"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/no.js",
        revision: "83017fc6a5316d2d9f721d40d334ca1f"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/pl.js",
        revision: "facdcd0eb8c08080ee1206c24d258eae"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/pt-br.js",
        revision: "8738d54a0b75503832a310edf6b016e0"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/pt.js",
        revision: "da374418587cfd4f9b57738822c88f6e"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ru.js",
        revision: "26689aa82c4c6123b8ed4704edf7ddec"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/si.js",
        revision: "582f81276c16d77d4b0d2e94c7773f4d"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/sk.js",
        revision: "c60c29d22f73b1ca17f7ac2ac0fc8d7a"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/sl.js",
        revision: "a19477b47865dd6728f4b92fbcab4f0d"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/sq.js",
        revision: "f7a1abe904932ac0359bb75f664d23ba"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/sv.js",
        revision: "bf95f9f532e5c99c6ac5deac7b0847d3"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/th.js",
        revision: "dde66b3b8aab652de1c2914ab4767a7c"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/tr.js",
        revision: "df88bbbd74cb6ab533a271b8735b3fe6"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/tt.js",
        revision: "198a6f1592948b3ad80eb1cd8c1fed6b"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/ug.js",
        revision: "4b87a5982419701ee101da7d26dd3a49"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/uk.js",
        revision: "06c3a7c5e6e917e840be87beda2e2cc4"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/vi.js",
        revision: "56c2c1b9edcbbe87cb61649d8be38b64"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/zh-cn.js",
        revision: "1553fa8a047dfaa6a4bd3c0664c091e9"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/lang/zh.js",
        revision: "208345f66f010acbfdf31407735f10be"
      },
      {
        url:
          "Notes/Scripts/ckeditor/plugins/specialchar/dialogs/specialchar.js",
        revision: "7df17f4a2a6b9da4061cc5f9e5d62dd2"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/table/dialogs/table.js",
        revision: "3db9c34228455d79e24377605b4d0356"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/tabletools/dialogs/tableCell.js",
        revision: "8bd7b96e931c2522c3e1f848b17402f7"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/wsc/dialogs/ciframe.html",
        revision: "e9ae171b5422f05c3090710ebc17ab89"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/wsc/dialogs/tmpFrameset.html",
        revision: "434bc63614cd525c4bba7396a672851d"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/wsc/dialogs/wsc_ie.js",
        revision: "d6bd3fb8585199cb7bb3ed86fef1a3c2"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/wsc/dialogs/wsc.css",
        revision: "9f63e9dd90b207fdf884bb6e8b5dfbaf"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/wsc/dialogs/wsc.js",
        revision: "b9f28e5c3dfbc51a6562f7e16e25bb44"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/wsc/LICENSE.md",
        revision: "6b7f5cf703f4c8a3e0b53175e356dc11"
      },
      {
        url: "Notes/Scripts/ckeditor/plugins/wsc/README.md",
        revision: "07c5f45697e13e4f020fbf2d61765b99"
      },
      {
        url: "Notes/Scripts/ckeditor/README.md",
        revision: "f09f4f33e80b4f91971ed70356a7f4ae"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/css/samples.css",
        revision: "22d1e3fddd57ab9f97653a497ef43dab"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/img/github-top.png",
        revision: "b22a7a41d8e3f3f6ad7fd0ed74fd165c"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/img/header-bg.png",
        revision: "d329c8537d5ec7b90943f66c97e16a35"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/img/header-separator.png",
        revision: "8b578c337e0ab69dc6f049985483f8a5"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/img/logo.png",
        revision: "b578ff8a84bb673413ea7959864448ce"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/img/navigation-tip.png",
        revision: "3453b1e41914b2be899303d76fef144b"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/index.html",
        revision: "d3121153febd8779c53e4fd33d26eb12"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/js/sample.js",
        revision: "be434e8e6fa329933111729f4ca1d71c"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/js/sf.js",
        revision: "342cd0d2fa56a0002148c06bf12e1b13"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/ajax.html",
        revision: "21e63b64f0acd03b7c365b2079833d5e"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/api.html",
        revision: "389c14e4d34ecd4cfa8221ebbae37982"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/appendto.html",
        revision: "45b0ceac7720b118d765386b95c7d44c"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/assets/inlineall/logo.png",
        revision: "24eff0ec56a9892334bb8f6041dcd562"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/old/assets/outputxhtml/outputxhtml.css",
        revision: "5a86ee8ed5c92ad7e93eb5f126709007"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/assets/posteddata.php",
        revision: "87bde163c8c49508cbf0966ecccd35f9"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/assets/sample.jpg",
        revision: "21d9ee7d983e172bf211e7724b39b383"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/old/assets/uilanguages/languages.js",
        revision: "1e929eb77c49528d2d850914db292223"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/datafiltering.html",
        revision: "2af38a30c646d7b02bd0f7be3b2e29d5"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/dialog/assets/my_dialog.js",
        revision: "bf09564e7683336e9fc0bdf4a38120f0"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/dialog/dialog.html",
        revision: "132dc7a13a48dc4fe3b175903ec4c831"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/divreplace.html",
        revision: "f8c1799966954b174ca24be7e550a239"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/enterkey/enterkey.html",
        revision: "7ff69ae8bb6385bbe23c0169379ca02c"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/old/htmlwriter/assets/outputforflash/outputforflash.fla",
        revision: "8fb373f8580dc2f95678ca861a1ba9af"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/old/htmlwriter/assets/outputforflash/outputforflash.swf",
        revision: "de5410f8539db860e90a0c437f592f39"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/old/htmlwriter/assets/outputforflash/swfobject.js",
        revision: "4edbdacf13ab7ffac362061c9af8fa2c"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/old/htmlwriter/outputforflash.html",
        revision: "45093cccdc75a791d59ee355f77167b4"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/htmlwriter/outputhtml.html",
        revision: "2d1e474e5cb612cbbd4d4000e40100a8"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/index.html",
        revision: "ce8adcee43f9143c68742d93665faf03"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/inlineall.html",
        revision: "0c8d72b3375ab52f2f6cdc5dd3236699"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/inlinebycode.html",
        revision: "358ec047afe7b62bd11036c3b2f2d80c"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/inlinetextarea.html",
        revision: "608ec0f0e7af65b00e1bf77616141339"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/jquery.html",
        revision: "c131fd8eabcfad1abf3e101f56e5a5af"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/magicline/magicline.html",
        revision: "9c232904563c7ecf1dc2cd9a2592805e"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/readonly.html",
        revision: "f52433daa675d48f784447c3f992979c"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/replacebyclass.html",
        revision: "25b6cb9f77ebb20acaa1371475756a85"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/replacebycode.html",
        revision: "057adf19624e2a042acdc6e173732909"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/sample_posteddata.php",
        revision: "cba787bedaffd8a646a7eed4622d7615"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/sample.css",
        revision: "829a560e48b51acc56c54c9be4599c3b"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/sample.js",
        revision: "aba680c8a4743d85b983e0f45b1dd2c5"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/tabindex.html",
        revision: "4a7070611976a787a33b2ef675bb3ec0"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/toolbar/toolbar.html",
        revision: "4849a70532fd0242769571155355ebef"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/uicolor.html",
        revision: "826284ea4adf7d4176fa09658fb8c223"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/uilanguages.html",
        revision: "efe0aac0eac3c133bc7579c92f9845b2"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/wysiwygarea/fullpage.html",
        revision: "bdf04dfd83df1c0e9a6752d17cbd990d"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/old/xhtmlstyle.html",
        revision: "6b95a8ba6e622e0975f31117836d4370"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/css/fontello.css",
        revision: "71823ace6380d701b498b0c12d4c1271"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/font/config.json",
        revision: "eece4fc70e64b215c17228e622592e3a"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/font/fontello.eot",
        revision: "5de3a2a020ca6f2661b05448d47bccd9"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/font/fontello.svg",
        revision: "a65207537dc3726ae724884412e5e008"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/font/fontello.ttf",
        revision: "1816c94e15be9db939f91cb4e88be055"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/font/fontello.woff",
        revision: "49788464b67f333bf748ea80f87956fb"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/font/LICENSE.txt",
        revision: "3f11bdb4cef2da5f7cf13219f1de36e3"
      },
      {
        url: "Notes/Scripts/ckeditor/samples/toolbarconfigurator/index.html",
        revision: "3b982bde22882a8efc00a18db73e3120"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/js/abstracttoolbarmodifier.js",
        revision: "778f8e7ade48130e0ae419fddf5909ba"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/js/fulltoolbareditor.js",
        revision: "de63572546be590242d6adbf72572e9f"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/js/toolbarmodifier.js",
        revision: "d01f9b3069bd9b01a728219487c57a75"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/js/toolbartextmodifier.js",
        revision: "ef61446fe73db5086cce63128449cb3a"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/codemirror.css",
        revision: "cbe98224a17c8882f4a80ea966ce1d95"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/codemirror.js",
        revision: "21a60504a52cf98e6bc42b8e7482c7ce"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/javascript.js",
        revision: "03a02404c29534110edf5031d06b5810"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/neo.css",
        revision: "01ae574f634f83bfad9095f51a82a6fe"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/show-hint.css",
        revision: "c1318fca069d71f8c1917a41484c0833"
      },
      {
        url:
          "Notes/Scripts/ckeditor/samples/toolbarconfigurator/lib/codemirror/show-hint.js",
        revision: "1e27fc8385bc197ae41ec51279c3f257"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/dialog_ie.css",
        revision: "d0ece397a5b9d7d5c6040209a6063a6f"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/dialog_ie7.css",
        revision: "275192a538f57d585ba20ee7b8df83fd"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/dialog_ie8.css",
        revision: "565c1666aabbd78a8c84f5d8475ffe8c"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/dialog_iequirks.css",
        revision: "7ff6fb32543d2228443b0da5c58c2a0f"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/dialog.css",
        revision: "a37dc0b89135979688162a6b18a4994c"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/editor_gecko.css",
        revision: "d593532745eea6f83885d1b36ca79e49"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/editor_ie.css",
        revision: "a4efaa23455c4f6af2aec3544ae1b682"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/editor_ie7.css",
        revision: "8b873e1918f2fad2e150a4fe5dde7aa9"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/editor_ie8.css",
        revision: "2d650e0626dfda1a4c18014342ef6d21"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/editor_iequirks.css",
        revision: "20a4dc467f8bdca96a27d22c2b35e773"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/editor.css",
        revision: "da1cd05a0e8cedbd53e1eb55b0c1d18d"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/icons_hidpi.png",
        revision: "1f57f384a8331a0cd3b8dfadfb61f0cd"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/icons.png",
        revision: "30df606419222c418c24d5cca47f66e5"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/images/arrow.png",
        revision: "5b9854a7f865788fff62fe32b0324ca0"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/images/close.png",
        revision: "9b497b65c0909aa80b21aa989363a0bb"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/images/hidpi/close.png",
        revision: "cd269135b1c31c9044974c3d17059b04"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/images/hidpi/lock-open.png",
        revision: "4f6b9606513757e04d4de3268a123eb7"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/images/hidpi/lock.png",
        revision: "f6cf4b23d39107db8aaf907f686a0052"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/images/hidpi/refresh.png",
        revision: "33ebeddcb7b69137ffbfca121b0f6213"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/images/lock-open.png",
        revision: "e9dff089035fee4ac979a340ef8d4fcf"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/images/lock.png",
        revision: "68f4c2f5309e4dbc0f98c4be79dc66c7"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/images/refresh.png",
        revision: "0f54df868f75482f99157807f6f68ee0"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/images/spinner.gif",
        revision: "7f32b6e67f42a0ef3e1ddb0b9401f6c5"
      },
      {
        url: "Notes/Scripts/ckeditor/skins/moono/readme.md",
        revision: "f9889b7545d7ddf0dc8581c285b23ec0"
      },
      {
        url: "Notes/Scripts/ckeditor/styles.js",
        revision: "b46e216e345799df805ac898af3910b9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/CHANGELOG.md",
        revision: "a0da97b667d35ae89147744779bb7ff9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/contexts.json",
        revision: "70b8df7aaab8580ea00ed2034b8a19d4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/ar.po",
        revision: "f6cf56936102911cca8be03197a004d2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/ca.po",
        revision: "f6ecb221b70002d04ea0f6414e254c8b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/cs.po",
        revision: "678143534ba5f4fc635f4b2b1ac56b67"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/de.po",
        revision: "08c98adef054625e51a00ce0f5e03a63"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/en-au.po",
        revision: "f3e0528d9672a7f44f4d881c6faf7ea8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/en.po",
        revision: "53d5b1045aa326b5c5d1b1ce3bde3e3d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/es.po",
        revision: "195b71bd26b810eba4488e71d732d945"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/et.po",
        revision: "3afc6ba1e40667c32459a9a9f90b1612"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/fa.po",
        revision: "bd52f728fb33660fab3aae9eb27d5580"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/fi.po",
        revision: "a1f0980c97747aa90cd19b0c2cc4f5e1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/fr.po",
        revision: "5d783e373df1dc62a308997120321aac"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/gl.po",
        revision: "fcab987fbff960cdc5acfe641e8f2480"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/hr.po",
        revision: "2737885d29873197369db410d9c07fd7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/hu.po",
        revision: "c14605e556289483290d6169c73961cf"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/it.po",
        revision: "c2d641cc92c64d0a12904e8157578215"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/ja.po",
        revision: "f3e0f96be0615c20a22650ad9ac81cb4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/ku.po",
        revision: "e13ea620c2bcae43f7dc1a1866af68a3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/nb.po",
        revision: "8115a8e4181eda21c83e3a51016ca118"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/ne.po",
        revision: "7771594e64f266060394abf1bced61b2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/nl.po",
        revision: "74ca029a462658f634296fb7291a29a2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/no.po",
        revision: "9289eac9f4ebd104b15bc6b525e43e72"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/pl.po",
        revision: "212b3ac7bbd0b64ce3487a4a2c4be2bf"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/pt-br.po",
        revision: "d0810ec0a6810040a535cd9163385b15"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/ru.po",
        revision: "61f1ac145f6cd7f43187964cf78abe93"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/sk.po",
        revision: "186394f440656812097be5d6c1b66704"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/sq.po",
        revision: "807a3f6cf379f6253fa1c50368870664"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/sv.po",
        revision: "139311674c1b9e620194a9118af48109"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/tr.po",
        revision: "affca32087a398b28866a521adafb45f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/uk.po",
        revision: "a1feb8f39fd5ba69c77b104aeffeb70c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/vi.po",
        revision: "05d4ff49da9a07bbc11ba54ca27d803b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/lang/translations/zh-cn.po",
        revision: "09a41bf8dcef846af9ec2d3898cb0159"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/LICENSE.md",
        revision: "9189712569f5255a9d50569ca983aeda"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/package.json",
        revision: "6cd22d9261c60f1e231d482013f9c438"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/README.md",
        revision: "8a003136f78638333fbf150ebe025680"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/src/alignment.js",
        revision: "640bd0d3a880235f64f094d354985be5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/src/alignmentcommand.js",
        revision: "276ad516fe2008588bec7a503a2b11b4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/src/alignmentediting.js",
        revision: "ccd5a67f75d7db0c1ac3efe9b351916d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/src/alignmentui.js",
        revision: "daf7c5dde24ba338e982c41c950c13f9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/src/utils.js",
        revision: "0f2de4d6240acb77da7d5a99d74d6098"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/theme/icons/align-center.svg",
        revision: "4f780fd7dd6b79b68ea79f514a534913"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/theme/icons/align-justify.svg",
        revision: "c402cf6794ddc40ffb664dec0b0d4f42"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/theme/icons/align-left.svg",
        revision: "fe59fd17f2a78ed316fdb6c466a676c4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-alignment/theme/icons/align-right.svg",
        revision: "2f5b0a1274f94362e5ee9a5db5acc396"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/ckeditor.js",
        revision: "8a64e02387ef29e20dabf21c034ab365"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/ar.js",
        revision: "865c5a57944f8550eecbebd5c34af187"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/ast.js",
        revision: "69209dec0c6299305e43bac893dc866f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/bg.js",
        revision: "f630a89c1fd617b18f2808f6ad484e33"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/ca.js",
        revision: "3db824f0b6bbbdc6bb8655d52430285c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/cs.js",
        revision: "72fbaf2539bfe863f96004521ec847e5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/da.js",
        revision: "3fc6e3cb2f64c987513456241ef36041"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/de-ch.js",
        revision: "3a5ffca945f9704dfe1dd76bbccb7e66"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/de.js",
        revision: "bcbaeb93a7553d7148e17fd901eeb9b1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/el.js",
        revision: "c18d12d05460e881bde872a3ec4f70b8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/en-au.js",
        revision: "3bc2495cc730e38ea438fd508a7b959b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/eo.js",
        revision: "4a7f1e60626ad619a083fa99b247d407"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/es.js",
        revision: "71d06026e2bd1499c482d57228c74ac5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/et.js",
        revision: "06d400d77049c545e163e146651be31a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/eu.js",
        revision: "02d914f795cb3130d193285713c314e8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/fa.js",
        revision: "450e372f794af0b2511bb12afd9647d3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/fi.js",
        revision: "50e6bda758124d97c373f03ffedc3de3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/fr.js",
        revision: "f664b07a6c5a3ac9f7174a93826bd093"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/gl.js",
        revision: "3c9791c8ff3eef70251f75dc71eb529c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/gu.js",
        revision: "0ec255e03be22e5e0391963525cc1780"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/he.js",
        revision: "47d4dbdaed66394aca8e95d008abd5b0"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/hr.js",
        revision: "18c64aee9f5a01cdcbfb567eb0a78613"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/hu.js",
        revision: "8aafc5fef8f9f4c060000da58ba46db4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/it.js",
        revision: "0855907560fbadfe9636afaf99eb94ab"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/ja.js",
        revision: "12131329e78331e7a64da9295c5270c8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/km.js",
        revision: "7be343e450cc2360d9f7effb32e059c3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/kn.js",
        revision: "188fd5c4d7b1c507cc6d7f2dd588ef71"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/ko.js",
        revision: "e78586fc69a55130b5a91526e1af1055"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/ku.js",
        revision: "98fd8a6e3d33d857f921e8593d9322ac"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/lv.js",
        revision: "9ff75b4f53573ccb1616ebe362e55e5d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/nb.js",
        revision: "4365dc2e87be74502e037db9e489141f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/ne.js",
        revision: "c4d3e0501df311c37392708c2b0bac45"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/nl.js",
        revision: "f7e60a01fe234095f841f87411007f9c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/no.js",
        revision: "e59df9519c0d6a67346c5ae499863920"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/oc.js",
        revision: "9d216d95a724925b19b1392ab025371a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/pl.js",
        revision: "5609366e34b1debe7849b2842399feea"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/pt-br.js",
        revision: "b04a81a804553c3a0913e581f95e3062"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/pt.js",
        revision: "53b0c9b222705a7c2f89b0f9b838b5a2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/ro.js",
        revision: "82a9b4f4b73b905c5937c6e6f1a76a9a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/ru.js",
        revision: "9282c277102fef06d2ff4e3f17a52d6d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/si.js",
        revision: "0577fd7e61121370697b81efd6e1fd03"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/sk.js",
        revision: "5344e4f7b6500cb8fec5a81ef94100e1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/sq.js",
        revision: "2f099c2ae777ab7deefe0e403a5020a4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/sv.js",
        revision: "345d666a4d97079cc4e4800fdec1382d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/tr.js",
        revision: "cd483b22c5c823cc323bc69ea3f74777"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/tt.js",
        revision: "de1eb0b74c760a02f83b88fb8b98023b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/ug.js",
        revision: "16ce183515026e63d8eabe9086768462"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/uk.js",
        revision: "50f95d46e88b8b49627d3c07f6339cd3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/vi.js",
        revision: "a186e0a399297256bdfce43fe3146adb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/zh-cn.js",
        revision: "70aeee7f3ee8dc66f9e4f1f77729ff79"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/build/translations/zh.js",
        revision: "8d093fb72a143a57cfde049faa1c3747"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/CHANGELOG.md",
        revision: "cf100bd898904d53f45e8bdd2406d401"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/LICENSE.md",
        revision: "9fc5681418028cc39fa10bf26ff3ccba"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/package.json",
        revision: "c3455e7ce8fd07ce1a4377614909b80b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-build-classic/README.md",
        revision: "fce0c3a4b218c964cbcc2c5fa1cbd357"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/CHANGELOG.md",
        revision: "761d0894abd63c688b710264ccaab277"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/contexts.json",
        revision: "f5050005d7cb8483a2facbd0cb08e590"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/ar.po",
        revision: "5cac488f90c556172075b1b30f46a1be"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/ast.po",
        revision: "efd38707c5b690c7421b909aa19239d5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/bg.po",
        revision: "916d19e391137096aeb241f4225c038e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/ca.po",
        revision: "690378abb1413751356b66a3b47dc422"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/cs.po",
        revision: "6269fbd2a61425f74cdab47db4e85f6a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/da.po",
        revision: "9940a7ea363e0934eeeae4f76dfd4af8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/de.po",
        revision: "aed4958ea89601184d6ee2281ee00ca5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/el.po",
        revision: "391325d196028a0cea5a1c24e32992a8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/en-au.po",
        revision: "55f02aaafae632cefdd6fdaa190c0ad8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/en.po",
        revision: "4817bb2c4bbf0c4a1f28825eb18b1bde"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/eo.po",
        revision: "6ae4d72950c36aef43b11801e237763a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/es.po",
        revision: "2ebc3907c633c78e4c2443860c91b012"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/et.po",
        revision: "633242113aa36a13e8037c7714068405"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/eu.po",
        revision: "7076e7d98248ebdaa4e20cd49b8fd875"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/fa.po",
        revision: "f66534e51ae786479f11a111d86a485c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/fi.po",
        revision: "b48f7a0a3d7ce5eeac8dfdf6f6fa8f2c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/fr.po",
        revision: "546f1770b50fe3f42827295a2c02fe79"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/gl.po",
        revision: "7d0d7846a1601b77f5aa9fa3c9534f39"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/he.po",
        revision: "5e1086faaea0f7972adcb6efa6df28a7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/hr.po",
        revision: "2e1b090dfdf741ae2c10cbfe41fa1a58"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/hu.po",
        revision: "e523d197466b65248f8ac922bbae481e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/it.po",
        revision: "da995a7b495857d76fa93d381e3baf86"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/ja.po",
        revision: "99ac612000b9bee87cbf13e57a922f4e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/km.po",
        revision: "06614afa31107a83353a7d19e458ef6e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/kn.po",
        revision: "6a3831fceadca9e4e433e6eafbbae04d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/ko.po",
        revision: "63cee671687354fc50e3caa3153bb257"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/ku.po",
        revision: "8c0296726a887084bd8636ee3fd1f8ab"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/nb.po",
        revision: "b79f793f0e848e17fc45af4d818a9c36"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/ne.po",
        revision: "bf280a7f1310fadf846e1dc6ff6874a4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/nl.po",
        revision: "2c84551d846ede89cb571ae61c2d92eb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/no.po",
        revision: "6bf3723ca9f62c328970dc377c3993de"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/oc.po",
        revision: "71b224e5869c701d20e4705b77da004f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/pl.po",
        revision: "f0ea75aa3498ce8d818332d1e82d27e7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/pt-br.po",
        revision: "b0e0bbf3b5e05a74efd09d7f31962773"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/pt.po",
        revision: "0d26b8fea7915394c60096d4143e8c51"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/ro.po",
        revision: "ca3d76ed69881e9e2fae2c85adfed8a8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/ru.po",
        revision: "1b1e7e7c3a260c62057864fafa240926"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/sk.po",
        revision: "ac878012e78b2ad3909f3e8e9da365c1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/sq.po",
        revision: "45a23d2d3773133cbff8eb03fccbf7a1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/sv.po",
        revision: "5ecc217a0bb6a22ab18a2a8378e8e693"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/tr.po",
        revision: "4ea0d0bc4500ef0a25f7b61f42560363"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/tt.po",
        revision: "d325e64d6d881cfe7c2f2b4853bc0893"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/ug.po",
        revision: "e0e1ff6259645a564b13c6b09c7a3fa3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/uk.po",
        revision: "6fb9f0258c44b89b84a36cde8943904c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/zh-cn.po",
        revision: "3de3a818e07f667d6e51b357bfb91a8f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/lang/translations/zh.po",
        revision: "f7b2418de7ce28e4e45649a5e27bdc28"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/LICENSE.md",
        revision: "affcafacdb0a11c778e63c45a0fffa2a"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/package.json",
        revision: "8dcbfbf5741fc10df409a5c4ac371a1a"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/README.md",
        revision: "a0f876ae26a24256e303d961ef8f6b83"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/command.js",
        revision: "5ae1ece79dd53a5380fcc91b0f78e56f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/commandcollection.js",
        revision: "8094e4fdfd814b317cd892b196d176c2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/editingkeystrokehandler.js",
        revision: "386f18b24cf95fbaf26758b56040a317"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/editor/editor.js",
        revision: "7958e6cb9282386c71ca0cbf845ed708"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/editor/editorconfig.jsdoc",
        revision: "466ff546c2ccfad58302bd4cb9fca768"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/editor/editorui.js",
        revision: "2a8694c039aae808c25ae03cc1e24fbd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/editor/editorwithui.jsdoc",
        revision: "6f4e5d742b4c1dbfac874c735f537f69"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/editor/utils/attachtoform.js",
        revision: "e85d6f1cf303d7866fd87277fd401ce6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin.js",
        revision: "3541cf6937bcffb0890b2d4b595e43d6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/editor/utils/elementapimixin.js",
        revision: "1f949992d3b3cee0ea7cf4b9aa35cef2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/pendingactions.js",
        revision: "fa107a49df462b7a62f66c26ab21b391"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/plugin.js",
        revision: "d24ad5bd283199578021ee886bc08b9a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/src/plugincollection.js",
        revision: "8c1978c7c89d1218307c7b2378a6d1d9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/cancel.svg",
        revision: "606c2d55ea009ded7f16dab6c384a177"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/check.svg",
        revision: "155ba9a765d86972632e240470f2e413"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/image.svg",
        revision: "8f16e84c1ccc5dca87846d431b4b0459"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/low-vision.svg",
        revision: "ea3e358939ef919dada8799801affc47"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/object-center.svg",
        revision: "1713d51d0bf5daad346988645579ce5b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/object-full-width.svg",
        revision: "d147943419d3ff39878cc4d39f3819bd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/object-left.svg",
        revision: "e6c64057dcb9e48f976d9a564231bb82"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/object-right.svg",
        revision: "03409e7abda7de5586834196c2fada10"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/pencil.svg",
        revision: "46ff118a18bbb2da8bbae8d7a5b27a91"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/pilcrow.svg",
        revision: "60c54edb3d555afc493f68438560e38a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-core/theme/icons/quote.svg",
        revision: "d69e17f4baa2be02a0c59d548cd2ce48"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-editor-classic/CHANGELOG.md",
        revision: "67539b1f9af25954e0daafd378a5fe97"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-editor-classic/LICENSE.md",
        revision: "cae9f86d0cd183ce5cce577e48106847"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-editor-classic/package.json",
        revision: "e2937282ef389c8f41802318be83b377"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-editor-classic/README.md",
        revision: "a788c4b11af9b7553c082be3261cc87f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-editor-classic/src/classiceditor.js",
        revision: "2346f54590670d1bfcad3208db6d87ad"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-editor-classic/src/classiceditorui.js",
        revision: "7c4a069b11680a84e5f69e8d957dcf80"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-editor-classic/src/classiceditoruiview.js",
        revision: "6aae00ffce3b51f413dd523506f6762f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-editor-classic/theme/classiceditor.css",
        revision: "c6586947f1ff5824c186e25843a2b629"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/CHANGELOG.md",
        revision: "8df1bf64b02e79536fe30a123a8621ac"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/LICENSE.md",
        revision: "47ca186b7503c53c4e9ec66c085f8097"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/package.json",
        revision: "0623994dd9ca3ac177f27a26f07a8e1e"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/README.md",
        revision: "b2be93e6b8e65658618d28c03691ecf8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/controller/datacontroller.js",
        revision: "d5c99b10d913048e730e7e03291f0f3e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/controller/editingcontroller.js",
        revision: "c47d58597e7f6dc10b120c5409bed6e9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/conversion/conversion.js",
        revision: "2729ac3d03da832496a4da2b488f4ccb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/conversion/downcast-converters.js",
        revision: "7f9a4513a23aa7a1566827780d2a87d6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/conversion/downcast-selection-converters.js",
        revision: "5bbfce3754da07ad5f93cd31d4304ff1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher.js",
        revision: "5ae3f176af14cacea27928294acf17c5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/conversion/mapper.js",
        revision: "c92ae598f2da0195eeed02871b789565"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/conversion/modelconsumable.js",
        revision: "dbd35bdaa8cda11d84a52c5c5d53071a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/conversion/upcast-converters.js",
        revision: "8d80ed2921107b4339ecf8360081ce89"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/conversion/upcast-selection-converters.js",
        revision: "e19f6a9feba6a7fce4a151dac684bd32"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher.js",
        revision: "965236cb85aee0b67b1e4eb157f11790"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/conversion/viewconsumable.js",
        revision: "34ef10a3f698739c03bfe7555bcf2b8d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/dataprocessor/basichtmlwriter.js",
        revision: "3e54ca075e77385a1bd430ce31903284"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/dataprocessor/dataprocessor.jsdoc",
        revision: "954008109a1f04a4b2469d9bceb98585"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/dataprocessor/htmldataprocessor.js",
        revision: "f2371f1aba31e2ce7699f62444483f63"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/dataprocessor/htmlwriter.js",
        revision: "74db88978b7fdacf7400c98354b05088"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/dataprocessor/xmldataprocessor.js",
        revision: "4ffb5322a625db0e0dae1aebeb74e337"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/dev-utils/enableenginedebug.js",
        revision: "7f073938100c271ca9275050474efd39"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/dev-utils/model.js",
        revision: "4ed52ed604ace61462a09627f87ea9a9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/dev-utils/operationreplayer.js",
        revision: "a65f01d2221e291d672b072ef68a40e1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/dev-utils/view.js",
        revision: "c8369294b5ac8533b770979ea2e7f687"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/batch.js",
        revision: "75abb9be40e2003628bcc71530e96740"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/differ.js",
        revision: "20fd6dc41a8a32a3d0fca7ccd2601d53"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/document.js",
        revision: "ea8b54f1aa52e6cd3c021ec654dcebc8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/documentfragment.js",
        revision: "6d8ecdcdfc3d0c813d026ac85d77fcfb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/documentselection.js",
        revision: "2e08462e1a5b610b0f346b0d5969927e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/element.js",
        revision: "36eac303cb43aa8dbf9912447053e9d9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/history.js",
        revision: "0aacc73f1755be14676aea1b3a201032"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/item.jsdoc",
        revision: "39e45d0634afb9bab6fa8c39f9cf2321"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/liveposition.js",
        revision: "d5a626f537af3edab13ff797e0503afb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/liverange.js",
        revision: "57794b21e5961f7d1712e2829b287fec"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/markercollection.js",
        revision: "aa8fb2a1acd994adea85f4f3784998d8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/model.js",
        revision: "afea46a6d20ed21e8df7d42e013e8aa7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/node.js",
        revision: "2dda0fe03cd61631f03bd980cb835845"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/nodelist.js",
        revision: "d11dd067006171c88e196340d5b34a7a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/attributeoperation.js",
        revision: "83ac5b521027d8ef994b1fdd41b80ba7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/detachoperation.js",
        revision: "a97530af4baf862088c4377018a81c91"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/insertoperation.js",
        revision: "f70d7a946116b5978a194a481abbb821"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/markeroperation.js",
        revision: "1c6b24761c9f4ff8b5317ec8981d1dc8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/mergeoperation.js",
        revision: "e575c77be7350bb55c977af8eefc4523"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/moveoperation.js",
        revision: "795ded45118440aa3f99e94317fd2b15"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/nooperation.js",
        revision: "379edc4be2b6c42e65ff771d7f713c04"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/operation.js",
        revision: "1429329f88f73b53004949fd4bb2d0e2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/operationfactory.js",
        revision: "6f2c0a08bef4fcdc93540b582d8d2dd3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/renameoperation.js",
        revision: "a94c53c215fbc092f9eb117692cb0902"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/rootattributeoperation.js",
        revision: "6119ad23f9ad4cf2ce176f492aefed44"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/splitoperation.js",
        revision: "2bb4fa0af1d3beca26f0a68760e088ba"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/transform.js",
        revision: "41a023edffca458bd6224f96c6c93d75"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/operation/utils.js",
        revision: "1822811f25e3bf814b466f356a0445c2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/position.js",
        revision: "b471d793729b91e36f3a75c513562bd1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/range.js",
        revision: "97237e1cfcc7150652a2d5e800c01507"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/rootelement.js",
        revision: "d42981d7e3d8df18b0c4cfd26935c2f2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/schema.js",
        revision: "7791667bf1f702b5b9530f7d6990ae37"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/selection.js",
        revision: "11b0e7de89ad102cd314cae94d69d19d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/text.js",
        revision: "d0cef73f33e1a14dfa50919929c5e1d1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/textproxy.js",
        revision: "318dc6abcd55b5e6840d2c68fe66ce5c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/treewalker.js",
        revision: "dbf59487bfafe30650522cfab65838af"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/utils/deletecontent.js",
        revision: "4d1c8bd5813201fd79b2315b663c4a6a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/utils/getselectedcontent.js",
        revision: "38f5c3c43c18e6b659b72aa18c08ff7f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/utils/insertcontent.js",
        revision: "f1d218b6a78d88b6f89aa825bf672fc3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/utils/modifyselection.js",
        revision: "f2282bae9f1631ad09077eb909d70201"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/utils/selection-post-fixer.js",
        revision: "1f3f8de45b6ca29a765753deb64d79a8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/model/writer.js",
        revision: "0cb03b4748bda1c3bd64860df595122c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/utils/bindtwostepcarettoattribute.js",
        revision: "7bb5061990f1123f972f8f5047e77e7f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/attributeelement.js",
        revision: "78e9b905c0094b8e52b725a42f25c600"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/containerelement.js",
        revision: "e8b74b0f666128fbbd087f515761d109"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/document.js",
        revision: "97559defe526283585efdc9d7f50820d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/documentfragment.js",
        revision: "507d8a7d8f30ba5a39ddce0c99cf1593"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/documentselection.js",
        revision: "79f85d91ff7a6de64d69f36516d9182a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/domconverter.js",
        revision: "456348ed687102b2fcf4dd8bc5924efa"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/downcastwriter.js",
        revision: "5d5dc106e3980d8eb7dd75250d7cab3f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/editableelement.js",
        revision: "c40339edadff57933a75bcc7351cd8cd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/element.js",
        revision: "533547e046204790fdf8bc12c3d89afd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/elementdefinition.jsdoc",
        revision: "cc7fc76de0a8bdce0add46ac6f5128b2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/emptyelement.js",
        revision: "3beb74963ad8db50287f3acb8263e7c6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/filler.js",
        revision: "6c4c3c30f8a6d6ca75466170637feb03"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/item.jsdoc",
        revision: "676c86b31abd929d8e5ce4daa07cc1bd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/matcher.js",
        revision: "4850305279878641cb48a0cc895e36fe"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/node.js",
        revision: "b9480a3d1f718d95cc901c36b824b9af"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/clickobserver.js",
        revision: "0eca90c009fdbda1bb6f3bb504c19c79"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/compositionobserver.js",
        revision: "0be0f4d8951138a525542816c3e099f6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/domeventdata.js",
        revision: "b469ae4c7950a25f3927cf3cc33bc5ce"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/domeventobserver.js",
        revision: "d401f9f34ba718e68fadbd8f16678a72"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/fakeselectionobserver.js",
        revision: "a8146e6e799d4840d9d7308939bbfef9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/focusobserver.js",
        revision: "1ce438005bf670f8dda1db628f3eda09"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/keyobserver.js",
        revision: "12d26ce4316ea05cfe442622407a639a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/mouseobserver.js",
        revision: "a0f22f743b80d38982d44c7360fd07cb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/mutationobserver.js",
        revision: "f3f0d17d0dd4ae9c38889b34b041207b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/observer.js",
        revision: "dea8f27b0f989955a8e840d8a4032630"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/observer/selectionobserver.js",
        revision: "ef72122060d1718b96a59e97dabd23c5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/placeholder.js",
        revision: "de58938198018e38113db66d772b4d1d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/position.js",
        revision: "750d64999b9e0aaa0571028fd06bb906"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/range.js",
        revision: "438d3ee71683ee1ffc0e402abf04eaa0"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/renderer.js",
        revision: "c951a1d736f92d856fade82fe1ab0b9e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/rooteditableelement.js",
        revision: "d854c3819449dacbadcc7e32e1816b99"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/selection.js",
        revision: "0af34db13a9982409c734cb55fba0da8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/text.js",
        revision: "11a993595bbca88f500fe4d4172c382b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/textproxy.js",
        revision: "3344e767d814345f48ac533561b61251"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/treewalker.js",
        revision: "d89c38271186098e8f8241f85c353b74"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/uielement.js",
        revision: "910af5f0af1ad580a120c0b278383011"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/upcastwriter.js",
        revision: "b51576eb4663ed82148a9f7e75cd0436"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/src/view/view.js",
        revision: "ac22ac874b7468acb9fda00dd5140186"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-engine/theme/placeholder.css",
        revision: "039d234b577d2e95d4f8bc1f81639264"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/CHANGELOG.md",
        revision: "e9a4f4960a8afc155899bf06fd9dfdf1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/contexts.json",
        revision: "4a60946941a12ad68d724fd21f0035cf"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/ar.po",
        revision: "2874c97f6a572073e6fc110b186f09dd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/ca.po",
        revision: "ba53fde21fa4574f34af5c409524e566"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/cs.po",
        revision: "f915f5ac85c9a6587b37112c5a7837f2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/de.po",
        revision: "10b67f14228572aacc956d09447f08f4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/en-au.po",
        revision: "42ec52f0de71c7b524ad57801f01d944"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/en.po",
        revision: "40ec29b7fd58edf4e0691969bfc199cb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/es.po",
        revision: "3fbc06b0da7a668b42f3e3651fb54cab"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/et.po",
        revision: "dd0c798874faa9d35b63626ebdc88903"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/fa.po",
        revision: "bd1e48cb3d2fadbde39a693c84ab54f3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/fr.po",
        revision: "1e7d9acd220e3e4bb5f40a13ab1695dc"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/gl.po",
        revision: "0eb704c43d3048c12c4666c690f69099"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/he.po",
        revision: "6853621942e5dfd2237ff4630ac68f93"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/hr.po",
        revision: "8df05949bc52ca5ab677d0714f5af262"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/hu.po",
        revision: "f973af14be0ece4796c54bfd111198f6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/it.po",
        revision: "96067b2b57879168407ba8b9c4728fbc"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/ku.po",
        revision: "1b92f8cfac04e3c927bba60442e55c53"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/nb.po",
        revision: "5c7fef2cddc0efbe741759d31a4bd299"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/ne.po",
        revision: "73759fe68e50f13c0d6b0d126c4ba9c3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/nl.po",
        revision: "7539f4226c39fe099630a707f3e04f45"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/no.po",
        revision: "6d942ec2e5d9ba4099d34bedde04e5c5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/pl.po",
        revision: "59264c2f37e9d0bd20e1261742e90345"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/pt-br.po",
        revision: "2e44162f30cdb3ae9802e591c9d065e3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/pt.po",
        revision: "dd9f86da787ad7363171c2076084dabf"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/ru.po",
        revision: "00540df7c7515a3076eb0b07601fde65"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/sk.po",
        revision: "2a889133130cd0b62c1d1d06213d140b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/sq.po",
        revision: "604d3a381aa548c88dcf09fc20f995b0"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/sv.po",
        revision: "910f89dfbb3b69f7f4aea8d3807192a9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/tr.po",
        revision: "de0d4e294706a8b32db7f605c535ca45"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/uk.po",
        revision: "d634b7bab08e525fcedf5a15682e0f81"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/lang/translations/zh-cn.po",
        revision: "7280bf5eceb7cf4078b4cb1f0ad84ff3"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/LICENSE.md",
        revision: "3f019ca86138a0124f5fa3212b839efd"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/package.json",
        revision: "7a2f91adb7f091114326104d217015d2"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/README.md",
        revision: "92bb0fda0e9cf5d28a857218756b4402"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/font.js",
        revision: "ce652bae37feb59de7226fdb728051a6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontcommand.js",
        revision: "d8e7bf935520ce0cc08466321c369c15"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontfamily.js",
        revision: "e33bca6c615e5d588b108bf5705f08ed"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontfamily/fontfamilycommand.js",
        revision: "446273f73f2ff070fb063ac76f7b69fe"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontfamily/fontfamilyediting.js",
        revision: "ede7b203b9d685f1b479b4b9e9628882"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontfamily/fontfamilyui.js",
        revision: "dc41745c3dae96f371fc17c02563d729"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontfamily/utils.js",
        revision: "e5b65f31fd96586d50e00d8b9655b352"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontsize.js",
        revision: "b6e4316363c58b9d5b17950254900cc0"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontsize/fontsizecommand.js",
        revision: "9fa615dc6940deae2290ec3e79f63213"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontsize/fontsizeediting.js",
        revision: "7f4ed7cf97833c245b0263faae6b3106"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontsize/fontsizeui.js",
        revision: "fb878d3e8e6513dffe85df5d5ebf0f6c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/fontsize/utils.js",
        revision: "03481f4c4681c859a7dbdd4a0f93f025"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/src/utils.js",
        revision: "3bb6ca1d205b8f57920fa9e22b3678f7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/theme/fontsize.css",
        revision: "bc9f2b8c70086653fb1c38279fbbf67f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/theme/icons/font-family.svg",
        revision: "fb18b08c626f07f7bcb7b7ecc15f5a9c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-font/theme/icons/font-size.svg",
        revision: "7d4d216ceca3c5cf269f752a535b5ce1"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/CHANGELOG.md",
        revision: "2eb02c18ff1b9a32fad443e55c7b7a08"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/contexts.json",
        revision: "2ed67670d9aead026c80b61b3211596a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/ar.po",
        revision: "9f89ababb27e87beb7059eb6da7b370e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/bg.po",
        revision: "b182106f820111555e899284365a6266"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/ca.po",
        revision: "504623bae7c2406d4a33e20368a42c0e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/cs.po",
        revision: "1cd525e2a2fad0fd6b9e19fbb62e2794"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/da.po",
        revision: "e4410e811d7c8bc64459525116975fc6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/de.po",
        revision: "e524b4ed27ae79ad7a620ae9699ed6ad"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/el.po",
        revision: "9bca29d1878f6849f5ddb9ef89d7d66f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/en-au.po",
        revision: "60c991e0d9f61996fff15986bee21600"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/en.po",
        revision: "12030e0f9a5c297eb546914d16d438f7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/eo.po",
        revision: "6eb2ed4a639881fd62a60800b44a84ef"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/es.po",
        revision: "67f470241c4de004ce61c59b3fb9a090"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/et.po",
        revision: "afc5445dfcf61bac1a8333db02db2bb5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/eu.po",
        revision: "07ac97dd9724e5e35e9bee793b604d8e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/fa.po",
        revision: "a386d9e3bb2b6e46c610778db926c45d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/fi.po",
        revision: "ccbf455995ef6517f86580604916dd22"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/fr.po",
        revision: "337f791d91be6af1a847dea918c7eabb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/gl.po",
        revision: "98de2c179a49fb2f88e217bdfb688164"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/he.po",
        revision: "7379666df4dbe16ca1bcabf01d6dfaf3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/hr.po",
        revision: "8712d9de7aa8cc69294006f7f21008cc"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/hu.po",
        revision: "dfec8113702ef53b5bd6509595cc7c0d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/it.po",
        revision: "ccbc84200365a0faec6b83ed7293f596"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/ja.po",
        revision: "78735c3af883ddd60c6c6daf53441078"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/km.po",
        revision: "a65aae3bf1de78315008ac8ab449ca5e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/kn.po",
        revision: "5d7efd1e96846dd60e7dbafc3922f60f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/ko.po",
        revision: "4f7aa675ba2497d08080c5aed4c7bdf4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/ku.po",
        revision: "c894735453d251f518692e578926bdf2"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/nb.po",
        revision: "fa031168600abe911e600a7ab4c2782d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/ne.po",
        revision: "57f07e262e4325d9910bd47fc2480352"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/nl.po",
        revision: "136a65d3af01b9ac582181185353a28a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/no.po",
        revision: "4251e00018952f39117a54779ff50bb8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/pl.po",
        revision: "b5489843a0c127fd6278b49f02339336"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/pt-br.po",
        revision: "9b629321927bdef78964ba3fd6337dc6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/pt.po",
        revision: "26de1413785eb5f6a94e90eaac6ae8cd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/ro.po",
        revision: "5084386873bf57da3696fc3b9059dc93"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/ru.po",
        revision: "5eaa030596ec6f2ba12093f0e1efb751"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/sk.po",
        revision: "cbfa7bea72b2754c9cca7da9de570ef4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/sq.po",
        revision: "93667fce57476df2ef28ee44872eeee5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/sv.po",
        revision: "39ae7c74b69a4d4aed19acf5098086a1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/tr.po",
        revision: "7d322185f43a42b5059d600fa86db990"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/ug.po",
        revision: "cd01ac395e62cc4c626f257c2b440d41"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/uk.po",
        revision: "16d6e51bb8a313de989f836798497f2f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/zh-cn.po",
        revision: "4aaef403ebea16e0e90e43bf68abd8b6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/lang/translations/zh.po",
        revision: "f548724d69df9bdd227b4f45b70fa5c5"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/LICENSE.md",
        revision: "8808bc9e719979544357bb079b21a387"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/package.json",
        revision: "e63469f6af365a1eb02e1e03050d8b80"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/README.md",
        revision: "a03eaa96503ecf05f2e43af19e325029"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/src/heading.js",
        revision: "e7b5140917915d6902b323eb35f24e40"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/src/headingbuttonsui.js",
        revision: "8c8dd32f60ee180f5d07c47155f9bfd0"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/src/headingcommand.js",
        revision: "a41df542a0586910f781a676fb5d9173"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/src/headingediting.js",
        revision: "99fac0cf364384602dfcba2c24eb393a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/src/headingui.js",
        revision: "b41e9564e59047460f40eb184e2a961b"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/src/utils.js",
        revision: "d81672ba35eb4e9a04d9f7ce3481a7a3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/theme/heading.css",
        revision: "be74a08acb05e3d5dbdfcce2c92e569f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/theme/icons/heading1.svg",
        revision: "2e4a2ef50eda82470d1ab9de08a0cfbb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/theme/icons/heading2.svg",
        revision: "8bed50777b5ed307251dcce4f923a274"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/theme/icons/heading3.svg",
        revision: "34ca447de13caba9174b6255250b5636"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/theme/icons/heading4.svg",
        revision: "3ae4213994af12a05303c508ba4e4534"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/theme/icons/heading5.svg",
        revision: "96f4dbf9802347293f34b251a4d4e46a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-heading/theme/icons/heading6.svg",
        revision: "c3662e656187816367173f5c006df74d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-paragraph/CHANGELOG.md",
        revision: "2b8b1b367d42f1d9af2cb8e8a796efd5"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-paragraph/LICENSE.md",
        revision: "1b7e2a40bf410202f1f7d958eed296b6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-paragraph/package.json",
        revision: "5f18edbe3e85910a3c9436389fe8694b"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-paragraph/README.md",
        revision: "eed934ef9056b59425b3faab7ea54266"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-paragraph/src/paragraph.js",
        revision: "e409977719feb54da00b66dd28da0b29"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui.js",
        revision: "6030a5feeff87ee0eb796616fdd3609a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-paragraph/src/paragraphcommand.js",
        revision: "4f51a020a4128aed77cbe91bc513cf28"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-paragraph/theme/icons/paragraph.svg",
        revision: "14d18ed7c3f3efba369bc5969a500da9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/CHANGELOG.md",
        revision: "cc2d22785f65f3117af1630ed7f80145"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/LICENSE.md",
        revision: "e844564cd5d19e1ccf8c2587ffba3b05"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/package.json",
        revision: "92f88c64f72509dbe894c841b9a55573"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/README.md",
        revision: "c60c74d4f3f56fb6266c4f0496ea1e9d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css",
        revision: "2e15fadd40b7a88f65872f0057cfffee"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css",
        revision: "94d9e1edd92d745c9869b98606b9975b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css",
        revision: "0c685293ca21c548dbd7b5a5041c2ffc"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css",
        revision: "83d177acb61a334575ba302e06304361"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css",
        revision: "a40812214945e975b6a66b81cb0fb44f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css",
        revision: "e47b7a77e81e99f8fb86efb479f4a5f4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/textalternativeform.css",
        revision: "027f5688e4d476fc9edebf46a3e449c3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/link.css",
        revision: "c0ecbc2734ef99e8534b5076526573b6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css",
        revision: "b3946ed3227e5d554521ab2865354ff4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css",
        revision: "51ad6e650427f27671cb66020d26b047"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css",
        revision: "25b9f78dc1ebef32860805ac9a782479"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaform.css",
        revision: "7eebdaaa5a46d241de4a27edaef069a0"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css",
        revision: "1d58f9d2be472a23d2e14a006563890f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css",
        revision: "52bfd301517e247db0c58aec50c24035"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css",
        revision: "8895349864fb35b8b022d2fcbf467093"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css",
        revision: "f03dff89c39584e8246697c749d81ab5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css",
        revision: "920d6fd5f173399c1008e811f8f5116a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css",
        revision: "568835152ff4934285358b31a89fc531"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css",
        revision: "98cb339815521f3c873b04406eb59598"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css",
        revision: "7ecb8334c6fb7b1797a3301e55ba18df"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css",
        revision: "76c591cb1a5d968b3998db2d36988efb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/inputtext/inputtext.css",
        revision: "262843f5bbf8ea1668db74b0be23794c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css",
        revision: "f8b930ab6fda0777e2a6be38361d7a88"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledinput/labeledinput.css",
        revision: "11719ba301cf458c0bc9a93ea9ef52fd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css",
        revision: "85ae4394916f90cb1a9c5ec40764cad9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css",
        revision: "134421525d4a8a05033d29e10bbce2a3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css",
        revision: "21007d3fbc28f9caa74345f7c549d306"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css",
        revision: "b0c3b8b39b8017c957896f49b48e12ea"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css",
        revision: "5642f94fb7ec7d04d899304464f727a0"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css",
        revision: "a9efcde9d4a4540302af744471b0d368"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css",
        revision: "13bfbc3e08f24fb9e037d973d96dc6cc"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css",
        revision: "802ac52a5cb8b0de217d239c19644f4b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css",
        revision: "b4982b0e34a06875f01e547801d30fbd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css",
        revision: "4b528075447f4994420f7b463f243243"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css",
        revision: "61aa83a7cf476a339a443e0ce027506f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css",
        revision: "89d8d6ceb65fc390d0cc93180e00e16d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css",
        revision: "5e714f78a7068dfffa2f137440eb38fe"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css",
        revision: "f9d83d62aa387fac6486f0a910e28e23"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/globals.css",
        revision: "4788b4859e37d3603fc334c4283e4c56"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css",
        revision: "194730b9735e9c436dfffd167f3634af"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css",
        revision: "0db3d771c6ab84d6e2a48d959aee23dc"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css",
        revision: "51c0c1009f08dd55250e92362fa475e5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css",
        revision: "e164b0961e2f5e45033c18deaef4d579"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css",
        revision: "eb5db2ac15bcfd07fd557c625b54848f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rwd.css",
        revision: "96978cb3acde9d9d24e7c73308c0f693"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css",
        revision: "fce195c3648ef15691bd0b6a5546a54b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-theme-lark/theme/theme.css",
        revision: "88bb2c6f79a92dbc26fcf1d93ba02ec6"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/CHANGELOG.md",
        revision: "94d4cdf000c6935b5d7edf432004ee6e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/contexts.json",
        revision: "392bc5c673cb0d24c8e8734f7b77e47b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/ar.po",
        revision: "a5a8c28390ca937d6b0b9e6839512bcf"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/ast.po",
        revision: "6ec617e2d6a01fa2278af6d6e4c9623b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/cs.po",
        revision: "7e08a2e11b64aca69af17702fcef0f27"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/da.po",
        revision: "b07a5625889039e111f0305631c8a69f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/de-ch.po",
        revision: "98b0381335e37b67e6855250b76e5ddc"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/de.po",
        revision: "30bc47adfd588bda605cebfd70c788cd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/el.po",
        revision: "c36fc7b960a0084c30c2d0995f780b86"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/en-au.po",
        revision: "7755c447c04604acbe08b995d058d7ed"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/en.po",
        revision: "c944912fc1d5641f91202e3b1733e8cd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/eo.po",
        revision: "70aa1da02010666be3f2f0848918013d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/es.po",
        revision: "d60d0141f76bd08d8e68fafa7b81ee72"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/et.po",
        revision: "f7fb81404cfea3410704e73cc0cf24e5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/eu.po",
        revision: "cbd9c4c592d1392ee1f9d536b8907d8a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/fa.po",
        revision: "77d9f9af2ddc3524cf3b45eb973f854d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/fi.po",
        revision: "e061e3552ba902f2a637322804a06f99"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/fr.po",
        revision: "446f8a14ed4bf3ddbaae9c9bc32484e6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/gl.po",
        revision: "3f16330e959d51537ad26460bc54e56a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/he.po",
        revision: "a8df94ad23fe60071c9bab221ae9edc4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/hr.po",
        revision: "1db6f19a96af2a1828cc4a74dd257f95"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/hu.po",
        revision: "889ce1bd337b19b7703c355e0efd8ff8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/it.po",
        revision: "c31a12e54dbf430d47102ab2575a69e1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/ja.po",
        revision: "b7c9e4eceb9a12558430ba80dd50c6b3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/km.po",
        revision: "b749ae5ead7c857c20a8457a7733368f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/kn.po",
        revision: "b83f5990fac1c21e54027b5090e0d074"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/ku.po",
        revision: "b2d0bf6e2facc1f292f874644b6d7da1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/nb.po",
        revision: "207d9354a35e0ac4f29beac3229b6c08"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/ne.po",
        revision: "9ae3266df55c1236ada78604dc7f781a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/nl.po",
        revision: "5cbacc5c84ef3af54f3a52958e2e9837"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/no.po",
        revision: "37beffa2cbd658f0a4b008770c6eb345"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/pl.po",
        revision: "00b951f0f44dc45651f13a7e9fc17ad1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/pt-br.po",
        revision: "0c3ec5755b611174ab7629ffd02f0238"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/pt.po",
        revision: "d22371440dfad0bfdb33c3f8f0618601"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/ro.po",
        revision: "3fb87d075327bd2cdcbfa414d8604376"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/ru.po",
        revision: "ca1d30130d03702e1bced5b99a83ff67"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/sk.po",
        revision: "7738df00c26c5d062598d6a2469dc7b3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/sq.po",
        revision: "5490b41790017eb805da1e80b87bbed5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/sv.po",
        revision: "f02d3ae6212ccce7c353a9ca447c7398"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/tr.po",
        revision: "c7e9cb64a7762938aacc29a818add05e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/ug.po",
        revision: "6a12cfaf7cad0cf5ef4bca5cacbef6d1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/uk.po",
        revision: "ffbc207ece88ca1888290e48eb5f8541"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/zh-cn.po",
        revision: "8c88d913032b52d2cf79ddee445be758"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/lang/translations/zh.po",
        revision: "27792db6a69ffa1df4f34844c4b23afc"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/LICENSE.md",
        revision: "9c0c05d3d455fc0b8db9c106adac97eb"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/package.json",
        revision: "0dbe8ff5ae1ae519c35702dd7f47f4f0"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/README.md",
        revision: "7fa98a91f250589a8b48563f254aaa6e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler.js",
        revision: "6591b7b40b2bd20f4e00c7fc9fba9dfa"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/bindings/preventdefault.js",
        revision: "f6057c971786be7baee93846b4b62c41"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/bindings/submithandler.js",
        revision: "ce2430eb2a8a6ebc1af61e76dec73c16"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/button/button.jsdoc",
        revision: "9538498d0515c6a94415eacd1e3fc0b3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/button/buttonview.js",
        revision: "b47d5d9ce3f6b959569388e2a1a2b79d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/button/switchbuttonview.js",
        revision: "51d70c73f9f5dbe4f3e729ad3153bf3d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/componentfactory.js",
        revision: "ef740c7b3e5099d90e21d2a94d8abda3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/dropdown/button/dropdownbutton.jsdoc",
        revision: "e190cef22224b3f30d01b0d13135558b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/dropdown/button/dropdownbuttonview.js",
        revision: "d55884781ec4fa315ef1eebc298d821c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/dropdown/button/splitbuttonview.js",
        revision: "45b0e35c775d6f6deaf772e044439183"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/dropdown/dropdownpanelfocusable.jsdoc",
        revision: "71160afa5f58902808630558faac91eb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/dropdown/dropdownpanelview.js",
        revision: "df64ae2e2aedceb459c0f1d86ac74d7f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/dropdown/dropdownview.js",
        revision: "8e7e4f299bd139c3d5db2bda66faba71"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/dropdown/utils.js",
        revision: "7317f10d6ee3cc5528450b5cd976787d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/editableui/editableuiview.js",
        revision: "7d9e88c3eece77f901ee2f3e4a323048"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/editableui/inline/inlineeditableuiview.js",
        revision: "dca83f926974f782a5e9cf507909c52c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/editorui/boxed/boxededitoruiview.js",
        revision: "1774afd0acbf24cc301d5b8a510e22e3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/editorui/editoruiview.js",
        revision: "fab8cd807674a9de193e474e7e69ceaf"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/focuscycler.js",
        revision: "4a3e7d4b887c65079965aa4bcdb77d2b"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/icon/iconview.js",
        revision: "d0a48a6d0cbd213e8ef302fb6872b05e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/iframe/iframeview.js",
        revision: "4f8dac8fad2908b0012f7c8fbcb29dd4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/inputtext/inputtextview.js",
        revision: "cfe10e1f143331f68c358a69ffadb315"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/label/labelview.js",
        revision: "540f0d05c6bea85cf09629fac23a5f02"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/labeledinput/labeledinputview.js",
        revision: "b1bed332b6a83e2236960dc79562dc4e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/list/listitemview.js",
        revision: "cfcbe57e330df0548aa6f880100b4501"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/list/listseparatorview.js",
        revision: "eb8a385820c36cd00f20ceefd92b9765"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/list/listview.js",
        revision: "1ae6bb97eb124ae832a4b5e9fd4d32fd"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/model.js",
        revision: "d404765598df189f71b0a8eabe178851"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/notification/notification.js",
        revision: "807573402ea9eddbef2537f7a05d08e9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/panel/balloon/balloonpanelview.js",
        revision: "81f48624ab04361d20a4da9dc42599c7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/panel/balloon/contextualballoon.js",
        revision: "bcff61b5a96d28c70138d0abd0c011d4"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/panel/sticky/stickypanelview.js",
        revision: "f80aefea365e6eef884d46511dd7d9b8"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/template.js",
        revision: "1c24808d451b6e7632200cfcf90a0142"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/toolbar/balloon/balloontoolbar.js",
        revision: "888bc0535819d3bdee9c29c8ac507f65"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/toolbar/block/blockbuttonview.js",
        revision: "d8ab6724e7d1b71ca712328a08051ae7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar.js",
        revision: "528579e92afc63bdde5be60a1cceeab1"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/toolbar/enabletoolbarkeyboardfocus.js",
        revision: "17e56d73a509b2c8de5988bfae1dd299"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/toolbar/normalizetoolbarconfig.js",
        revision: "13adbb255cb6c87527cbf86db74a7fb9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/toolbar/toolbarseparatorview.js",
        revision: "25ae4f7eaad715e91913df32434bdd88"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/toolbar/toolbarview.js",
        revision: "7e0064d23bd5ad47aadb0cb9d9d8d841"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/tooltip/tooltipview.js",
        revision: "943f54c877bdaf6d43d350b9127cc450"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/view.js",
        revision: "9642579b72c97eb47929a2cd15dd7390"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/src/viewcollection.js",
        revision: "5a590a7e94bcd01bedcf0bd56672cd7c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/button/button.css",
        revision: "51d5c9c8937c92b9b4724ef3a84e4770"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/button/switchbutton.css",
        revision: "c888bd92c01efad9630f5c23bb301a17"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/dropdown/dropdown.css",
        revision: "ffa56541f8e4f1db3abf87bc7f71ff62"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/dropdown/listdropdown.css",
        revision: "9b963175ed0fc6b9c1c7e8c8a0d09432"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/dropdown/splitbutton.css",
        revision: "c87761086044c6a732fbd206a83a13ad"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/dropdown/toolbardropdown.css",
        revision: "495c8509650a8bae304456bbffab18a3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/editorui/editorui.css",
        revision: "9b963175ed0fc6b9c1c7e8c8a0d09432"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css",
        revision: "3ef494936b881f5c138db3e190a42599"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/inputtext/inputtext.css",
        revision: "9b963175ed0fc6b9c1c7e8c8a0d09432"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/label/label.css",
        revision: "e31c18e9d8106fce101a4240819a2664"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/labeledinput/labeledinput.css",
        revision: "9b963175ed0fc6b9c1c7e8c8a0d09432"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/list/list.css",
        revision: "4d1cb621460469623706f98eaa5037c7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/panel/balloonpanel.css",
        revision: "0a89f34ea3e3bc0ea4c84735d3fb187c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/panel/stickypanel.css",
        revision: "f63639530728d912649e71f7d5dc61f7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/toolbar/blocktoolbar.css",
        revision: "90c6d0d6a41bb1112464d03f163fa413"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/toolbar/toolbar.css",
        revision: "53048b91039cc4fecd5c0ecdc462b32f"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css",
        revision: "5fa976b39f18f32df5eb71a21e51b574"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css",
        revision: "4c1fe596ebbf183500b7b1d83a75504c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css",
        revision: "ca43de951eabce48249912791d3374f6"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/globals/_reset.css",
        revision: "57dcb60b8feb344985a413ca07fa32c7"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css",
        revision: "2d4efecbf9bb34705d23a902f7d04689"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/globals/globals.css",
        revision: "24bb6fb4654d1a1f5c87dfed33d00257"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/icons/dropdown-arrow.svg",
        revision: "7ace8973befd689351de9d8d35273df5"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css",
        revision: "0268ab6efbff8e526e582862048e6507"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/CHANGELOG.md",
        revision: "4f875e36064621fd13b753c28faaa05a"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/LICENSE.md",
        revision: "a76f9ca54727e568fc4999838c4def03"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/package.json",
        revision: "c0c2f3e919136a112fff0302ae41a0e8"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/README.md",
        revision: "9a04024b2b8eccbd41c625641079f2d3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/ckeditorerror.js",
        revision: "394a42ccc9bb9498020442bd95ffa9af"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/collection.js",
        revision: "96af93a9f84f47373898f6be6d45c517"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/comparearrays.js",
        revision: "d6fce47f4cc2d86372dd073e12fc5a4c"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/config.js",
        revision: "54ed0ca497025962cfa0c969f951c332"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/count.js",
        revision: "623751fdffb290bc81c4a73a9be3c461"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/diff.js",
        revision: "db0f98b110b0265b9191b975bcd38e6d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/difftochanges.js",
        revision: "edde5f6e162aca291f1b25b825371e3a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/createelement.js",
        revision: "997c7947ad2443cfdc43bd7ef986ab90"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/emittermixin.js",
        revision: "0902816ffdd4136be3535bce0b6a8550"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/getancestors.js",
        revision: "68f2e142f65b4ca6830d982f145c6294"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/getborderwidths.js",
        revision: "f0d298374a5920ecc2f504bc1e12a009"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/getcommonancestor.js",
        revision: "02b993fe59d1222acf6665ea1db88683"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/getdatafromelement.js",
        revision: "131a932c6fcbfff87e3e11cf7f113d02"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/getpositionedancestor.js",
        revision: "f5c70c8cbea5cf7dedd0dd59e320b1d8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/global.js",
        revision: "89981e31e7733e72b9d1ea898469f4db"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/indexof.js",
        revision: "c3f006138318c57290d9e9697dd15efb"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/insertat.js",
        revision: "9c0c4c02c1a06ae0d49e4a861d7e1a8c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/isnode.js",
        revision: "07775eedab78cc0dbd2debece3983327"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/isrange.js",
        revision: "bc45f25995eba5e9acdd48bd9545b694"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/istext.js",
        revision: "51132d5efc639631715962143af57667"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/iswindow.js",
        revision: "24c6ff0973b1c40843c2755f6e3fc929"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/position.js",
        revision: "ba02b9ec7820173a08e1b99337e86d7d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/rect.js",
        revision: "fba157e308cd738662c05e8d3df559e8"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/remove.js",
        revision: "0b97d631a2f07498f77c0a9a9d5c5bb0"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/scroll.js",
        revision: "1396702f3a62cc96befb2991f3674e92"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/setdatainelement.js",
        revision: "9991672c7eefbf31a505c0dd01d7771d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/dom/tounit.js",
        revision: "c058840be657a67f277f393542e882c9"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/elementreplacer.js",
        revision: "65a1803d38d8687236d6a5cbb400e53e"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/emittermixin.js",
        revision: "c6fdb1825f0603bd690bfa66342d6f06"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/env.js",
        revision: "a4357d07805f2af3c07af7ed7576025d"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/eventinfo.js",
        revision: "37c14b03d2c8938a30c9497ee361e3cd"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/fastdiff.js",
        revision: "7395167674f065f8fa0cbfd70c6d81c3"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/first.js",
        revision: "2fb72468090355e24beff9d5f62cabb3"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/focustracker.js",
        revision: "66044a2116cb3209e085235cf95cca88"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/isiterable.js",
        revision: "c8c41b6dfc7cd4d535e7fe9771700289"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/keyboard.js",
        revision: "4eb2315dbb3daeead8dbff5d314298ba"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/keystrokehandler.js",
        revision: "9407209d8d61646a448fec76d1f85817"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/locale.js",
        revision: "53bfaca5ff1832d1af18225aa8a1a91f"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/log.js",
        revision: "72e6295fd1b40a8544dc6dcec2c0fe72"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/mapsequal.js",
        revision: "d48a9e85af2bfb8d5133c1689d9a0dff"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/mix.js",
        revision: "b27a7e5c99e5193f56711877aecab5b8"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/nth.js",
        revision: "5180af84a278dcad2ad53e19da670f2c"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/objecttomap.js",
        revision: "9f14625715bf5b2b4c07403b2c1f1e3a"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/observablemixin.js",
        revision: "855210821eb679e22f15351a8933f696"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/priorities.js",
        revision: "2a1f46e6a2d62a98d534ed40d7e7091d"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/spy.js",
        revision: "390e2662c528762f333399f84995b636"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/tomap.js",
        revision: "5edc94dbafc2b685b9ae33d6e289c3de"
      },
      {
        url:
          "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/translation-service.js",
        revision: "8f0b7a0d2ffff3f6bf34fe466a99b744"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/uid.js",
        revision: "19b1bf988750786a1b62afc09e2d96aa"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/unicode.js",
        revision: "276a7759d19e647c221289e216e8b206"
      },
      {
        url: "Notes/Scripts/ckeditor5/@ckeditor/ckeditor5-utils/src/version.js",
        revision: "b9bf325db10e32b97eb4a08d46167bf9"
      },
      {
        url: "Notes/Scripts/ckeditor5/ckeditor.js",
        revision: "4201b287d1bd8c175cff7285cb08c1b4"
      },
      {
        url: "Notes/Scripts/ckeditor5/index.html",
        revision: "2e8e21dfbff5a9048f37facff4ffe846"
      },
      {
        url: "Notes/Scripts/ckeditor5/LICENSE.md",
        revision: "9fc5681418028cc39fa10bf26ff3ccba"
      },
      {
        url: "Notes/Scripts/ckeditor5/README.md",
        revision: "951ad73e41d6a9bfff4947ad18028dd0"
      },
      {
        url: "Notes/Scripts/ckeditor5/sample/css/sample.css",
        revision: "ab7b31dd4344ae14a5fdd95fb94b209d"
      },
      {
        url: "Notes/Scripts/ckeditor5/sample/img/bg.png",
        revision: "804f8918709610c90a3656f29567108d"
      },
      {
        url: "Notes/Scripts/ckeditor5/sample/img/github.svg",
        revision: "b5244cdf2782d481757572c8b2466f17"
      },
      {
        url: "Notes/Scripts/ckeditor5/sample/img/logo.svg",
        revision: "677ffa241367fa4db9a90caf42f827e8"
      },
      {
        url: "Notes/Scripts/ckeditor5/sample/img/umbrellas.jpg",
        revision: "e935d5c582ff2d43b858681e885c2d95"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/ar.js",
        revision: "7f97bd83ac8c223a565f21a92b06f03d"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/ast.js",
        revision: "3af0412e188a0e729e820637ae2c4744"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/bg.js",
        revision: "fb1f47d4010cb4b0d208945d93e1c5bc"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/ca.js",
        revision: "d0fff21eb941353fc6203a627dce6651"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/cs.js",
        revision: "930a9caa13254ead0f11edee2c55d911"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/da.js",
        revision: "577e720bacf69041908fe17f343d584a"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/de-ch.js",
        revision: "6a8552eba79ac590fdeb3d1d72b7e543"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/de.js",
        revision: "24cf11d15123eee333b88df7009317db"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/el.js",
        revision: "4adaed8e5c0609db672bf38dde88ff6b"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/en-au.js",
        revision: "62896fc721fd39172131611112c0c28a"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/eo.js",
        revision: "6dde7a4980db58a678c99e67b7734d17"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/es.js",
        revision: "6e639c81c108793bd86f212ace835939"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/et.js",
        revision: "0a6507209d2aa5b591cf6aea83113442"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/eu.js",
        revision: "7e997f31ec6c918b43b49622a2cac0a4"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/fa.js",
        revision: "a6141ed9f0544265556da5cb04b23c84"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/fi.js",
        revision: "990f8deda0b13993d9e13911f173baa2"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/fr.js",
        revision: "1014df28899f18024710d7e4cb3cb249"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/gl.js",
        revision: "c8cb2985a21ed747931764835e83a420"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/gu.js",
        revision: "876688ba00f8acf367f9ca534325d62c"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/he.js",
        revision: "e9113f138d9c37caeea337d654c9536c"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/hr.js",
        revision: "1f20725d92e57392410020a873b217d2"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/hu.js",
        revision: "fca5168ea20b65f474d0374336bcb820"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/it.js",
        revision: "4438203354fdca59fe8be74a9fafc949"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/ja.js",
        revision: "c6e10625ee0d6d1d24adabd94cfad7a1"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/km.js",
        revision: "4f7dbfd0e2e67a7d4f224ea0ba069f4e"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/kn.js",
        revision: "92e2e69d24d1b2758531b3bc600b0bdf"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/ko.js",
        revision: "1932ddb92bee26c0024eecaa4ef3b0ca"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/ku.js",
        revision: "2c5eacb08cf4c4eb4c38ac54b30df589"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/lv.js",
        revision: "4622c84da882db8053570384fc3dd040"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/nb.js",
        revision: "b644fc1fcbdb0685b6c78fff61139740"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/ne.js",
        revision: "5ae9ac7ac49b9fa2faae44330832b682"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/nl.js",
        revision: "577ba6dc88052aa4832a9a39007adc4f"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/no.js",
        revision: "2632f53bc9a4229a10f8dc0c049860d0"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/oc.js",
        revision: "69ca335dc4ad079fda044bc9ff7fa07c"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/pl.js",
        revision: "00bb4583320d8d0f6d9f5bf22833537b"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/pt-br.js",
        revision: "9adbb53ac17ab6493683fff87655c23c"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/pt.js",
        revision: "cd64f0c0884bb059f8fbe6e87f900d07"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/ro.js",
        revision: "834f210622b48789da2df34865d231c1"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/ru.js",
        revision: "7057f603411cf4be21346dc30d288609"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/si.js",
        revision: "8c0b5eb0d3ec3157497aa51e0e3720e7"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/sk.js",
        revision: "811785ab34ce0b3639efd05706d6e8ec"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/sq.js",
        revision: "1fc49e0f1e0bdc20a53fac739cd0ad19"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/sv.js",
        revision: "b7b1e711df69ab752ab64d4fb6c47076"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/tr.js",
        revision: "72edd1d39dc32c86d18161fffc43b250"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/tt.js",
        revision: "d6fd097a7b1fc8e5978e3889c83879fd"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/ug.js",
        revision: "d13798d63513d87a1cbacf81d66e19ae"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/uk.js",
        revision: "fce75eb4d76b0b7218fe283cd8893570"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/vi.js",
        revision: "d3b9eeaf8e708584ac00cd98c957b7c2"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/zh-cn.js",
        revision: "d979380a6bb7e3fbac7920e79c5a8b02"
      },
      {
        url: "Notes/Scripts/ckeditor5/translations/zh.js",
        revision: "de4c509717239b73c523b6cbbec3d168"
      },
      {
        url: "Notes/Scripts/colorpicker.js",
        revision: "478f9934699954148bc3d7dcffa5c25a"
      },
      {
        url: "Notes/Scripts/maingui.js",
        revision: "97470bdcabdfe04d76a8c81444136d26"
      },
      {
        url: "Notes/Scripts/prefs.js",
        revision: "a9bbbdf29d13e9e0e7769cf7eba6224b"
      },
      {
        url: "Notes/Scripts/style_editor.js",
        revision: "2a355b78ad72ca834b75b15ffe1b191c"
      },
      {
        url: "Notes/Scripts/widget.js",
        revision: "998fdb8a4411ed45853b9718a16f5d24"
      },
      {
        url: "Notes/Templates/image.html",
        revision: "8b2e544382002357466e77ee41516964"
      },
      {
        url: "Notes/Templates/maingui.html",
        revision: "753ff240eaced1ad2d8c1c04db4054ca"
      },
      {
        url: "Notes/Templates/notice.html",
        revision: "2e85c91c02a6309761697f17264085b5"
      },
      {
        url: "Notes/Templates/preferences.html",
        revision: "d18e51a22bda1c413b98e715269a9e51"
      },
      {
        url: "Notes/Templates/style_editor.html",
        revision: "aaa5443ddc32f996606b586d3b118184"
      },
      {
        url: "Notes/Templates/toolbar.html",
        revision: "36ea56ecd323eb848ffdc87755cd05ae"
      },
      {
        url: "Notes/Templates/widget.html",
        revision: "6b86b8a52e4c3bd8c737b30702a644b0"
      },
      {
        url: "Security/Config.conf",
        revision: "b5080ce93f8f29bdc029144bed910313"
      },
      {
        url: "Security/Css/security.css",
        revision: "d5b2742a4bb3cb6c6df3ee8979dc890c"
      },
      {
        url: "Security/icon_dock.png",
        revision: "ee404326b7651d59df550a3f1ddaac52"
      },
      {
        url: "Security/icon.png",
        revision: "ee404326b7651d59df550a3f1ddaac52"
      },
      {
        url: "Security/Locale/en.lang",
        revision: "0723b7790c6e20ec3b5512916cee1074"
      },
      {
        url: "Security/Locale/fr.lang",
        revision: "9d7f2b8860a10efafa49308617afb4e3"
      },
      {
        url: "Security/Locale/no.lang",
        revision: "ff6cad34c2ed31e7d22417982229f5c3"
      },
      {
        url: "Security/preview.png",
        revision: "ee404326b7651d59df550a3f1ddaac52"
      },
      {
        url: "Security/Scripts/security.js",
        revision: "88003b012bfa429259641d61c6d71363"
      },
      {
        url: "Security/Scripts/securitywindow.js",
        revision: "ecbbb79559a4c8ffe2116e5db7a6ffb4"
      },
      {
        url: "Security/Scripts/setpermissions.js",
        revision: "6db04f8eedd981de0f442a20ba9e1475"
      },
      {
        url: "Security/Templates/security.html",
        revision: "04457fc14cf2ff7c2941a94478ff41e5"
      },
      {
        url: "Security/Templates/setpermission.html",
        revision: "8dcc9c9031b61d40c1b8532fba4ffb15"
      },
      {
        url: "Server/Config.conf",
        revision: "4350a320e003b3f0327fbd637fc6673b"
      },
      {
        url: "Server/Css/server_fui.css",
        revision: "7d1d358d10fc42d59d8f9d49a3f925e4"
      },
      {
        url: "Server/Css/server.css",
        revision: "6469f4448c516b5b00f719469d38a0ca"
      },
      {
        url: "Server/FUI/server_item.json",
        revision: "0a8403de2662e2768eb701c56b123d7c"
      },
      {
        url: "Server/FUI/server.json",
        revision: "91c65a6c2e1b48e3dbc072d140842258"
      },
      {
        url: "Server/icon.png",
        revision: "bb03f7944de642c5e46066aa23bd2cd5"
      },
      {
        url: "Server/Locale/en.lang",
        revision: "8b2299434a8e4bbab86ba80d09b4d99c"
      },
      {
        url: "Server/Locale/fr.lang",
        revision: "c6c3a6f75db823fc4d57cd89ba9198e1"
      },
      {
        url: "Server/Locale/no.lang",
        revision: "9a25d49fd80ba9fbda1a9b8804f6f105"
      },
      {
        url: "Server/Scripts/server_fui.js",
        revision: "b157b40fe0f55c6b61f81802680fb90c"
      },
      {
        url: "Server/Scripts/server_item_fui.js",
        revision: "d89a806e002f30cf6d581f66e7fa0a79"
      },
      {
        url: "Server/Scripts/server_item_property_fui.js",
        revision: "27cd51676470d9ac190eac7d9f2048e7"
      },
      {
        url: "Server/Scripts/server_item.js",
        revision: "d793b7dc27d57910308334b3a20801a7"
      },
      {
        url: "Server/Scripts/server.js",
        revision: "6b7754a6a8b8c8faf5649cb998bb6459"
      },
      {
        url: "Server/Scripts/serverwindow.js",
        revision: "a413fb484fdbd8417d565444be97cf28"
      },
      {
        url: "Server/Scripts/setsettings.js",
        revision: "b666677c34b983769d4dec794de457b1"
      },
      {
        url: "Server/Templates/globals.html",
        revision: "f9769ecfc8589c212174865c078bb48e"
      },
      {
        url: "Server/Templates/server_item_property_fui.html",
        revision: "b8abc5d6a67d9a86a130e2e644e1caf8"
      },
      {
        url: "Server/Templates/server_item.html",
        revision: "b81005e3cd423ede26c5d9c10fb0d2ec"
      },
      {
        url: "Server/Templates/server.html",
        revision: "80de88fa6997d9d416e1c3e055d225a1"
      },
      {
        url: "Server/Templates/setsettings.html",
        revision: "0628609ecc39450bd80467dcb440a9e8"
      },
      {
        url: "Services/Config.conf",
        revision: "5a7b714bb6736160dfa64a5a85885397"
      },
      {
        url: "Services/Config.conf~",
        revision: "d839d73032624861d90b38da111c2a03"
      },
      {
        url: "Services/CSS/flex.css",
        revision: "80b2c94ade1deab67ac82a9d190263e6"
      },
      {
        url: "Services/CSS/main.css",
        revision: "068fb93b9cb5e569679cb69a0ad9c6ac"
      },
      {
        url: "Services/icon.png",
        revision: "4790370b6475f7e8f59e342a703c6729"
      },
      {
        url: "Services/index.html",
        revision: "079b4d6a352e54db8061ecfcaa950c94"
      },
      {
        url: "Services/Locale/en.lang",
        revision: "708304245e571d725a886e142c4c0ee3"
      },
      {
        url: "Services/Scripts/main.js",
        revision: "2867b794210447b4ff6f73ef0b5ba3d6"
      },
      {
        url: "Services/Scripts/main.js~",
        revision: "7009734b721a4a469bc415adcb174485"
      },
      {
        url: "Services/Scripts/mainView.js",
        revision: "05508de6c812aaacab1a1f304fd6c8df"
      },
      {
        url: "Services/Templates/entry.html",
        revision: "eafb6451fcdd629f4ea0667e45e994f7"
      },
      {
        url: "Services/Templates/main.html",
        revision: "600751583eaa0f72678070c9aead6b49"
      },
      {
        url: "Settings/Config.conf",
        revision: "f5dc0dbe4e217403fba38bc05cfb85ff"
      },
      {
        url: "Settings/Css/main.css",
        revision: "868590f66509a3028cabc8033061fa46"
      },
      {
        url: "Settings/Locale/en.lang",
        revision: "f5ac8cc0d5deaabe52c34757ca6e3273"
      },
      {
        url: "Settings/Scripts/main.js",
        revision: "f4bc404c8497b6cda094643688ae2f92"
      },
      {
        url: "Settings/settings.js",
        revision: "87ad53e71713c32ce0ce3f0bea30b685"
      },
      {
        url: "Settings/Templates/main.html",
        revision: "af9b2cb31562115cb63d9e8997767226"
      },
      {
        url: "SpaceAge/Config.conf",
        revision: "4532e8b60405dda1a61bcd33d13ae7fd"
      },
      {
        url: "SpaceAge/Css/game.css",
        revision: "6a407e90528a1b33bab200adfa5eec3d"
      },
      {
        url: "SpaceAge/game.js",
        revision: "e0341f104936cf5e8c896bbb9a8915fb"
      },
      {
        url: "SpaceAge/Scripts/game.js",
        revision: "9f0391e80cc74e84f1cc4e2f23aa96bb"
      },
      {
        url: "SpaceAge/Scripts/gui.js",
        revision: "ee48339a7d9d84825bab3495c933659c"
      },
      {
        url: "SpaceAge/Scripts/player.js",
        revision: "48ed4394dd4dda8f55c1714d3806fbfc"
      },
      {
        url: "SpaceAge/Scripts/screen_status.js",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "SpaceAge/Templates/game.html",
        revision: "66dc508e676c67d35fe1988c5f8df13f"
      },
      {
        url: "Startup/Config.conf",
        revision: "200004527e2702f6d3a84a1ac64c680f"
      },
      {
        url: "Startup/icon_dock.png",
        revision: "8b719f5d008188c62f9f1dca1469fa0b"
      },
      {
        url: "Startup/icon.png",
        revision: "8b719f5d008188c62f9f1dca1469fa0b"
      },
      {
        url: "Startup/Locale/en.lang",
        revision: "8c19d0c0411403f4cb24ba3ac30f990d"
      },
      {
        url: "Startup/Locale/fr.lang",
        revision: "5b5ab3305077ed129927ac52c09baf18"
      },
      {
        url: "Startup/Locale/no.lang",
        revision: "dccf894feae8d31922c70e87d58532d8"
      },
      {
        url: "Startup/Scripts/item.js",
        revision: "5324e769861e3be1b5e648218856b9a4"
      },
      {
        url: "Startup/Scripts/startup_gui.js",
        revision: "dbcd359c918a0d253ea4615e078d6963"
      },
      {
        url: "Startup/Scripts/startup.js",
        revision: "ad3cb624cd65567f852c066c25449d3f"
      },
      {
        url: "Startup/Templates/item.html",
        revision: "9099c7af2a52e4f2b4c9c999a34c3148"
      },
      {
        url: "Startup/Templates/startup.html",
        revision: "90dce6918774d9b77d11db63525ab759"
      },
      {
        url: "SysDiag/Config.conf",
        revision: "328363da463208bd80d86264d3f47063"
      },
      {
        url: "SysDiag/icon.png",
        revision: "5f6d78466d07012c32a3be4f2be8ae74"
      },
      {
        url: "SysDiag/Locale/en.lang",
        revision: "134588c724a360be434c4353f21770cc"
      },
      {
        url: "SysDiag/Locale/fr.lang",
        revision: "e16c1ee0d487f3e0b6ec4e902971e27b"
      },
      {
        url: "SysDiag/preview.png",
        revision: "720bd3676eb39be2cf7fb99244d6eba9"
      },
      {
        url: "SysDiag/Scripts/sys.js",
        revision: "40210da7cae07e8bb11c8de6894ba8fc"
      },
      {
        url: "SysDiag/Scripts/sysdiag.js",
        revision: "dfc087831d30a974ce22d8e21c6a9be1"
      },
      {
        url: "SysDiag/Scripts/View/main.js",
        revision: "b9ee7474bce5a122ae913c57d84b0556"
      },
      {
        url: "SysDiag/Templates/main.html",
        revision: "d862145fa79e5422521cc20d6990e148"
      },
      {
        url: "System/Config.conf",
        revision: "420489a8b01bafc4709c8718aeb96451"
      },
      {
        url: "System/Css/main.css",
        revision: "7c37279106ef2ffb3f0a5149c6d604b7"
      },
      {
        url: "System/icon.png",
        revision: "d134729e061bbcd596477899b8d46dbe"
      },
      {
        url: "System/Locale/en.lang",
        revision: "6a7d9fb0943a9c65651e881b6400af78"
      },
      {
        url: "System/Locale/no.lang",
        revision: "105baeb0c2197eb6cd65e5493c9a20c1"
      },
      {
        url: "System/Locale/pl.lang",
        revision: "c30bb61733b5e28703b63901d1af0b67"
      },
      {
        url: "System/preview.png",
        revision: "d134729e061bbcd596477899b8d46dbe"
      },
      {
        url: "System/Scripts/jsdate.js",
        revision: "8c8511153f90ad147462151859824347"
      },
      {
        url: "System/Scripts/main_account_roles.js",
        revision: "5fb2f72b7514841498b7016d4666134d"
      },
      {
        url: "System/Scripts/main_account_templates.js",
        revision: "d979e74a35e3d4052d5ccf6c7dc45bb5"
      },
      {
        url: "System/Scripts/main_account_users.js",
        revision: "aa8388659978fe4c938aff90f4388cde"
      },
      {
        url: "System/Scripts/main_account_workgroups.js",
        revision: "0c447664743245353468107a34b6dd6f"
      },
      {
        url: "System/Scripts/main_application_liberator.js",
        revision: "0055431bc9a084e897866a5cb660a6d4"
      },
      {
        url: "System/Scripts/main_applications.js",
        revision: "5492b6b6ba75383cf0c101aaa10ce8fc"
      },
      {
        url: "System/Scripts/main_server_logs.js",
        revision: "5a11815db335ea68d4223dd0057b0697"
      },
      {
        url: "System/Scripts/main_server_printers.js",
        revision: "04e03eb9105967627c46ba5f4d90a41b"
      },
      {
        url: "System/Scripts/main.js",
        revision: "4bc209d73bb455d4bf437d1add0afac1"
      },
      {
        url: "System/Scripts/role_functions.js",
        revision: "b5bc37f9a740555b4578c3fd8fd111b9"
      },
      {
        url: "System/Scripts/system.js",
        revision: "0639fbd1a09b364677a66953e0598fa6"
      },
      {
        url: "System/Templates/about.html",
        revision: "5b445c2c79bc034a4b557a2a1138ee05"
      },
      {
        url: "System/Templates/account_role_details.html",
        revision: "bfa2aec7c8db0a1a8553c46c51524491"
      },
      {
        url: "System/Templates/account_template_details.html",
        revision: "f67c315a661a9aebad632fbfbc710215"
      },
      {
        url: "System/Templates/account_users_details.html",
        revision: "bf291bb1e3e8bbe4cd616ff5a4e89839"
      },
      {
        url: "System/Templates/account_workgroup_details.html",
        revision: "0e3a68543f458e4cdf15990359a1ffd9"
      },
      {
        url: "System/Templates/accounts_roles.html",
        revision: "72d49b2395cac4f237e2354159e3d45e"
      },
      {
        url: "System/Templates/accounts_templates.html",
        revision: "5ed540a80a70603486b615db9946ca0b"
      },
      {
        url: "System/Templates/accounts_users.html",
        revision: "4d3cdaddba437b66d143e674f498bc66"
      },
      {
        url: "System/Templates/accounts_workgroups.html",
        revision: "7fd7e174ccd3cb29147348a1703691fd"
      },
      {
        url: "System/Templates/application_liberator_details.html",
        revision: "146b15180fc72562bee3f87a9241d6b1"
      },
      {
        url: "System/Templates/applications_applications.html",
        revision: "33791da2edfeb811876981e259a6c9e5"
      },
      {
        url: "System/Templates/applications_details.html",
        revision: "17a7773c9218d73e232b283c9fdc7025"
      },
      {
        url: "System/Templates/applications_liberator.html",
        revision: "f0288b374b9182cf020fec1d72dcf3ba"
      },
      {
        url: "System/Templates/main.html",
        revision: "6152437820e6b2fdae009b74209a6e8d"
      },
      {
        url: "System/Templates/server_configuration.html",
        revision: "af85440a400cf722ecfd8b8b5f377165"
      },
      {
        url: "System/Templates/server_logs.html",
        revision: "f0d1798ed8c28cd62cf946a41b3ce947"
      },
      {
        url: "System/Templates/server_printers_details.html",
        revision: "2c6d394fee2d430143c8367c20c8831a"
      },
      {
        url: "System/Templates/server_printers.html",
        revision: "646b2c49ec65db062730e3d27abf02af"
      },
      {
        url: "System/Templates/server_status.html",
        revision: "3da9d03122c6dadfac459cd2c8e6f715"
      },
      {
        url: "Updates/Config.conf",
        revision: "4177f55409c49fe543d5a3a0844e0af7"
      },
      {
        url: "Updates/icon.png",
        revision: "c523b14c3169778ba76973156fd80a39"
      },
      {
        url: "Updates/Locale/en.lang",
        revision: "e3db1826873224b7a94f98e9dae9878f"
      },
      {
        url: "Updates/Locale/fr.lang",
        revision: "bb9f47d229ca98b1466b5ed2d533d618"
      },
      {
        url: "Updates/Scripts/main.js",
        revision: "7b07fd46276506d4a2eff6f1ff213908"
      },
      {
        url: "Updates/Scripts/updates.js",
        revision: "a0109857e91346231fb29aad3604864b"
      },
      {
        url: "Updates/Templates/list.html",
        revision: "af90e4b6bbd4c12a209fc875f492664e"
      },
      {
        url: "Updates/Templates/main.html",
        revision: "e97dad102b56c4c93daa394d28834820"
      },
      {
        url: "Users/Config.conf",
        revision: "4019bac18097c2ef180e641003795412"
      },
      {
        url: "Users/icon_dock.png",
        revision: "bc4addc36510e664c355de6e44712b84"
      },
      { url: "Users/icon.png", revision: "3aba851aa412356fb58f56814de90d2d" },
      {
        url: "Users/iconAvatar.png",
        revision: "854e6b34513b1c2b65c6b689c38caa88"
      },
      {
        url: "Users/index.html",
        revision: "af47273eb2a1a72ff816baecbd248bcf"
      },
      {
        url: "Users/Locale/en.lang",
        revision: "c02f9f522faea4358e60527a9139dbde"
      },
      {
        url: "Users/Locale/fr.lang",
        revision: "95e205e5a2eaeb026c0a2d91c0bccf3d"
      },
      {
        url: "Users/Locale/no.lang",
        revision: "7bd87fe0d19d2f2a972f8f5ad7ab571a"
      },
      {
        url: "Users/preview.png",
        revision: "d5b36973263e5c54e023651cfab1a7bc"
      },
      {
        url: "Users/Scripts/apps.js",
        revision: "36de4d1daa1ea53b6601f3c81d9ba3ca"
      },
      {
        url: "Users/Scripts/main.js",
        revision: "2a9f5e91d8ddd550d1258b9527a1b3c8"
      },
      {
        url: "Users/Scripts/startup.js",
        revision: "750ff251fb20134f3d5fb8b262164f25"
      },
      {
        url: "Users/Scripts/userlogin.js",
        revision: "6bfcfee8a4fab4aa3d8c9817f80b6496"
      },
      {
        url: "Users/Scripts/users.js",
        revision: "179563dabef773cee43a4bc856d2739c"
      },
      {
        url: "Users/Scripts/workgroup_members.js",
        revision: "f1a93c3b0c342d1f0f2f523d5fd13394"
      },
      {
        url: "Users/Scripts/workgroup.js",
        revision: "78166e7c01c00a5172879b4d3a45b0ed"
      },
      {
        url: "Users/Templates/apps.html",
        revision: "75172a19fe4dc0e286c70bab26c37fab"
      },
      {
        url: "Users/Templates/main.html",
        revision: "83e0ef64f629a388610d893fd2dedf85"
      },
      {
        url: "Users/Templates/setup.html",
        revision: "4b2729651c556dd9045a49f7818884ff"
      },
      {
        url: "Users/Templates/startup.html",
        revision: "1c6274660d82600b2c1d210c1a87e20d"
      },
      {
        url: "Users/Templates/user_login.html",
        revision: "dd2b655fed5199ed12b2984709268229"
      },
      {
        url: "Users/Templates/user.html",
        revision: "37d7e2de21ad449b586c1fa6beff9516"
      },
      {
        url: "Users/Templates/workgroup_members.html",
        revision: "51ccca44da6962ee8328c0a5a2053e4e"
      },
      {
        url: "Users/Templates/workgroup.html",
        revision: "74bcbed9e460ae2858efd892319f2b38"
      },
      {
        url: "VRWorkspace/Config.conf",
        revision: "b23e59ec7d56b73cbbd935ac44a90589"
      },
      {
        url: "VRWorkspace/Gfx/choser.jpg",
        revision: "52057edd2609f8508f6bf5c3f905a703"
      },
      {
        url: "VRWorkspace/Gfx/quit.jpg",
        revision: "3d2e54f1e8b6fc33a2fd39700ebb579f"
      },
      {
        url: "VRWorkspace/Locale/en.lang",
        revision: "cb492b7df9b5c170d7c87527940eff3b"
      },
      {
        url: "VRWorkspace/Locale/no.lang",
        revision: "cb492b7df9b5c170d7c87527940eff3b"
      },
      {
        url: "VRWorkspace/Objects/sofa.glb",
        revision: "869518b47e98d6737952eb042c81ea7b"
      },
      {
        url: "VRWorkspace/Scripts/vrworkspace.js",
        revision: "f85f6ad0d04d98d8ee772938be49aa2d"
      },
      {
        url: "Wallpaper/Config.conf",
        revision: "016764bd5e7cf770540ee852b310d9b1"
      },
      {
        url: "Wallpaper/icon_dock.png",
        revision: "628f1e89aeeafaf6c65b32a4f6cf927f"
      },
      {
        url: "Wallpaper/icon.png",
        revision: "628f1e89aeeafaf6c65b32a4f6cf927f"
      },
      {
        url: "Wallpaper/index.html",
        revision: "56b926cbebc9fab0180b03454b588fac"
      },
      {
        url: "Wallpaper/Locale/en.lang",
        revision: "14130dae6539369ded7fef0c74a89037"
      },
      {
        url: "Wallpaper/Locale/fr.lang",
        revision: "c52894da8c1e51954cc7afb9b876d010"
      },
      {
        url: "Wallpaper/Locale/no.lang",
        revision: "3bf01c82d4da7262cedef6ebb4491b2a"
      },
      {
        url: "Wallpaper/preview.png",
        revision: "11a5f311464745dfe8a256319f0b6345"
      },
      {
        url: "Wallpaper/Scripts/innerlogic.js",
        revision: "684a4a79620b48380590c051e5534b37"
      },
      {
        url: "Wallpaper/Scripts/wallpaper.js",
        revision: "7639129332c0829534af2c061992c75c"
      },
      {
        url: "Wallpaper/Templates/main.html",
        revision: "6b9bc2a4cd88e6177264404353d18652"
      },
      {
        url: "Welcome/christmas.jpg",
        revision: "3d8a62da5eecbfe71716cbd0862df006"
      },
      {
        url: "Welcome/Config.conf",
        revision: "1a2883e80d67c1efacbf6f320165f637"
      },
      {
        url: "Welcome/Css/main.css",
        revision: "52397a128c9f7c6da54e33be45ed9c31"
      },
      {
        url: "Welcome/Gfx/author.jpg",
        revision: "d122ac23ac0df894d7ef59b0b9264a43"
      },
      {
        url: "Welcome/Gfx/business.jpg",
        revision: "08456f59f3c5a6d26a1ebf2835dfa9ff"
      },
      {
        url: "Welcome/Gfx/community.jpg",
        revision: "3b2d12179506df23a9d0b13c423f6888"
      },
      {
        url: "Welcome/Gfx/community.png",
        revision: "f2e0c17ff977fce188ded30e76968a32"
      },
      {
        url: "Welcome/Gfx/cross.jpg",
        revision: "ae2d693ec6a2afc3f3e9341e2b982a77"
      },
      {
        url: "Welcome/Gfx/developers.jpg",
        revision: "96956b332fe688069ab378dbcfbf9385"
      },
      {
        url: "Welcome/Gfx/facebook.png",
        revision: "1cb861f9a4775c87e727b739c6938a92"
      },
      {
        url: "Welcome/Gfx/friendchat_mini.jpg",
        revision: "3bfef80b7c99e37413eefd8b8dff7fa1"
      },
      {
        url: "Welcome/Gfx/friendchat.jpg",
        revision: "27afca4808295b76f8c35ab126b854ac"
      },
      {
        url: "Welcome/Gfx/friendchat.png",
        revision: "9f53774ee3c80719b57d7652bc545d3a"
      },
      {
        url: "Welcome/Gfx/linkedin.png",
        revision: "c0809cee0ba393b29c91d74ebe65d92c"
      },
      {
        url: "Welcome/Gfx/thunder.jpg",
        revision: "53a2a0c195e625948bb9a6d0a855556b"
      },
      {
        url: "Welcome/Gfx/twitter.png",
        revision: "595e5d53c52ae65bc102f6d936de8bae"
      },
      {
        url: "Welcome/Gfx/youtube.png",
        revision: "0af9e22da09510c88cad8508409dc5f0"
      },
      {
        url: "Welcome/icon.png",
        revision: "ee89a7417546a84b045de1cc330b8118"
      },
      {
        url: "Welcome/Locale/en.lang",
        revision: "2305a85c4e0f67b964271587af208990"
      },
      {
        url: "Welcome/Locale/no.lang",
        revision: "1cf9e182c346f21728a1731189110f8c"
      },
      {
        url: "Welcome/Scripts/startup.js",
        revision: "0e4458e9c5118ca49b5b6bf2d9cf1dff"
      },
      {
        url: "Welcome/Scripts/welcome.js",
        revision: "ed804e35d41e5589380b53d5c5ef6bf7"
      },
      {
        url: "Welcome/Templates/welcome.html",
        revision: "fd418f2d28cd143cd50cf926616c01d3"
      },
      {
        url: "Welcome/welcome.jpg",
        revision: "81e50c445819d83410e275f6d0f0ff88"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/_version.js",
        revision: "b70622a4f5d09a329bfd70791462ec7d"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/_version.mjs",
        revision: "18bb9c3a5d1772711acf1d1a95a50937"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-background-sync/BackgroundSyncPlugin.d.ts",
        revision: "d1919dbbf120cbf295c62d58e6c24543"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-background-sync/BackgroundSyncPlugin.js",
        revision: "32747a5357c873887c4c158c453a2302"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-background-sync/BackgroundSyncPlugin.mjs",
        revision: "4f1f732ba27fce5c95e6d2ed4034a17b"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-background-sync/build/workbox-background-sync.dev.js",
        revision: "66765a6a672aef6607211a25e2e730de"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-background-sync/build/workbox-background-sync.prod.js",
        revision: "219236948903dc166c94a3b49bb2bb4c"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/index.d.ts",
        revision: "93a0970225e125eae7c31a6aa21b5d51"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/index.js",
        revision: "080880be8282f33924a8f19658415fc1"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/lib/QueueStore.d.ts",
        revision: "74b8171b13c521e14143c53958f76abc"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/lib/QueueStore.js",
        revision: "f09f1063253110d9c01e663d788aefb4"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/lib/QueueStore.mjs",
        revision: "6c8363096f8a234262b69cf98ff65085"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-background-sync/lib/StorableRequest.d.ts",
        revision: "3851a7ed717cdd3e5c8503a4274af5d8"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/lib/StorableRequest.js",
        revision: "311be55e8fbd1037ca2109f588ec1d10"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-background-sync/lib/StorableRequest.mjs",
        revision: "7022e5314ce083b6fe8699fbdb2cd3fe"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/package.json",
        revision: "3d2de13329250e4bd2819bf00dac111a"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/Queue.d.ts",
        revision: "7135e031d2f6859bdf09c4208e845e69"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/Queue.js",
        revision: "f69e6eea965fdbff627a150378f9f8d0"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/Queue.mjs",
        revision: "6dab48b09bdfea21fd71b72d017352dd"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/README.md",
        revision: "250d18a7c2f2a07fb1b81b8486d22912"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/src/_version.ts",
        revision: "9f7d78f11c1279db7284ba2fa1e81b5f"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-background-sync/src/BackgroundSyncPlugin.ts",
        revision: "92398f538b436ed5f238ccbeceb41f72"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/src/index.ts",
        revision: "167f1e9726379cbe7fa44a7118a90f86"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/src/lib/QueueStore.ts",
        revision: "265598a89f9f9ad2c3ba707dc99e5ce8"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-background-sync/src/lib/StorableRequest.ts",
        revision: "fe254903421e5cd2a3cbb9f9e8be568f"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/src/Queue.ts",
        revision: "49b9240ac6ebde683a8549eec5d47c74"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/tsconfig.json",
        revision: "67ac5bab77ac0f1ee75c10f4b62e6e0c"
      },
      {
        url: "apps/sworkbox-cli/workbox-background-sync/tsconfig.tsbuildinfo",
        revision: "dd9a2d64c3d8984db3af63c77704dbae"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/_version.js",
        revision: "d8df4e00e6cad58e785de1808f86fbb6"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/_version.mjs",
        revision: "a5dcf59a66338a17f1a9234577e3d9eb"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/BroadcastCacheUpdate.d.ts",
        revision: "1ee95e981e27754639be6637dcc7bda6"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/BroadcastCacheUpdate.js",
        revision: "a423ebe58f5ddf58fe3705581f253b84"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/BroadcastCacheUpdate.mjs",
        revision: "e020ec201fcfd4de4524c03a8e6a4abd"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/BroadcastUpdatePlugin.d.ts",
        revision: "d41cbca8f1f4c2d35a912bfbe335fa93"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/BroadcastUpdatePlugin.js",
        revision: "8c34fdf5cf60b53e12880dc6d8c0750e"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/BroadcastUpdatePlugin.mjs",
        revision: "f23336e7bedc070f8816e4e70cc7c6de"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/build/workbox-broadcast-update.dev.js",
        revision: "11f446fcedf496aeaa3706cd51206a8f"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/build/workbox-broadcast-update.prod.js",
        revision: "3d8d3303b687cf408e4608c09535eb1c"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/index.d.ts",
        revision: "6ec9c3fecc5138bf1b1c151d2cb394b6"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/index.js",
        revision: "cae6acf96847be4b13c2dd5c388ec437"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/package.json",
        revision: "57bcef2d1d02a3e44bd29abb90baff64"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/README.md",
        revision: "db789b257a341b673b720f6a0e63d28d"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/responsesAreSame.d.ts",
        revision: "31a01ceaf71de047fc90c068dcf14377"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/responsesAreSame.js",
        revision: "6f10bc1f3af5a7b10028d76101797bc4"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/responsesAreSame.mjs",
        revision: "3c4b1e66910a832c85646713e7b9df50"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/src/_version.ts",
        revision: "674071e78ba892d34a5d6199af0a766f"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/src/BroadcastCacheUpdate.ts",
        revision: "f2a132661eb5d86eee9a3db0e9a0d528"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/src/BroadcastUpdatePlugin.ts",
        revision: "a7d850efd1fc04d925fac7dd8614f346"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/src/index.ts",
        revision: "9a55f37bded8148af0e9294014cec35f"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/src/responsesAreSame.ts",
        revision: "5d129be347fb4ac9bb87d45b85de5868"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-broadcast-update/src/utils/constants.ts",
        revision: "2235a06d01369b0a4ba1350c3af98a9b"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/tsconfig.json",
        revision: "67ac5bab77ac0f1ee75c10f4b62e6e0c"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/tsconfig.tsbuildinfo",
        revision: "df88db5a3bc2be2750d46c0ba7416b82"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/utils/constants.d.ts",
        revision: "b57549f5fe0cf964dd3c9a7db89f334c"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/utils/constants.js",
        revision: "688993e57072bcace7df14730a76c907"
      },
      {
        url: "apps/sworkbox-cli/workbox-broadcast-update/utils/constants.mjs",
        revision: "5d6adc8ed5c9df252a1409e59a1b7ba6"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/_version.js",
        revision: "5183294a3f3f340e9980f499249246f5"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/_version.mjs",
        revision: "6b7a37a2f6368519b86ac472defede62"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/build/workbox-cacheable-response.dev.js",
        revision: "c7f7feffa29764d2fc90ff9b8ffc5f21"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/build/workbox-cacheable-response.prod.js",
        revision: "0c3436bae93691d5e33bc4d5da3a63f2"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/CacheableResponse.d.ts",
        revision: "c4a383e299a36ad4771773e4d69cff39"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/CacheableResponse.js",
        revision: "097471af298ef7cebbb1cf3be39fbe09"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/CacheableResponse.mjs",
        revision: "3356f549d22e10c1919136f81144443b"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/CacheableResponsePlugin.d.ts",
        revision: "8c0a761c2c063651a1b96f8978b8ae61"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/CacheableResponsePlugin.js",
        revision: "9fffd5cc225b1a7c2bc12c7902d7e948"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/CacheableResponsePlugin.mjs",
        revision: "a0a216340a40302dbd4f0ba160b773be"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/index.d.ts",
        revision: "3b9467e6a2ad61807e2b860de45342c8"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/index.js",
        revision: "f3a9db8d420e6666bed1a7c9fff704a9"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/package.json",
        revision: "9d29c2abffc912da57beb179e12984b5"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/README.md",
        revision: "4a08c708bb176678db0f824de33fda9f"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/src/_version.ts",
        revision: "957e66587efadd81cb64df663c11b58d"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/src/CacheableResponse.ts",
        revision: "921cf68b17c56e2a05a7c1ff3798e223"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/src/CacheableResponsePlugin.ts",
        revision: "a6b36957b99b7b266784e3606f3f3564"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/src/index.ts",
        revision: "6f6c84dc2b2d71d65f5c3880bc4e1f50"
      },
      {
        url: "apps/sworkbox-cli/workbox-cacheable-response/tsconfig.json",
        revision: "67ac5bab77ac0f1ee75c10f4b62e6e0c"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-cacheable-response/tsconfig.tsbuildinfo",
        revision: "25bf4ad8563e23fba93a844180c05ba3"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private.d.ts",
        revision: "ed0b4f528043ecfcf202855df3ddcc33"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private.js",
        revision: "e260777ffdb881deff09fa77b0dd5777"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private.mjs",
        revision: "1357ce1ab5ab3acb31e3e24aa43449b3"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/assert.d.ts",
        revision: "f338cdf25533d95e8d41b37d133bea82"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/assert.js",
        revision: "2350ac1f0ec3eb98267d6a3a32d02dca"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/assert.mjs",
        revision: "93babda1c30b628e1e06285479ee20b0"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/cacheMatchIgnoreParams.d.ts",
        revision: "00a7f5ec1ab8afdc5f52807421cb21ef"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/cacheMatchIgnoreParams.js",
        revision: "9a4b359deb0c6f8f7fdf1ec2fe62bbba"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/cacheMatchIgnoreParams.mjs",
        revision: "91f581bfe8aae8189950dc53a2ba2074"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/cacheNames.d.ts",
        revision: "d0d5ea468f0b9886a640b9acd3a87f2b"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/cacheNames.js",
        revision: "d85669902965ee90c6a45e5fdf738046"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/cacheNames.mjs",
        revision: "4486e3794c59ed843cfb40b8a240abbd"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/canConstructReadableStream.d.ts",
        revision: "45145f8895282c1582969402a1cc9327"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/canConstructReadableStream.js",
        revision: "6d64aa9081fe72a1ac034cfe2cb05841"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/canConstructReadableStream.mjs",
        revision: "3c910e5c6f4700f0d268e41dc6b70587"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/canConstructResponseFromBodyStream.d.ts",
        revision: "b90891c08b73a7ab7dbeb8ac50835611"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/canConstructResponseFromBodyStream.js",
        revision: "8fe770c025d7825845fc929569353248"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/canConstructResponseFromBodyStream.mjs",
        revision: "540a7dcb396eafc52e42d509e39b600f"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/DBWrapper.d.ts",
        revision: "8e9364ecf2f276c6c427c47df6ff067c"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/DBWrapper.js",
        revision: "ceace452471ce790573612e7f75e2760"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/DBWrapper.mjs",
        revision: "0c209bb8e37fbe34c3c3b25ff12de298"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/Deferred.d.ts",
        revision: "1794f952a2e5348334f20fb12b2080b7"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/Deferred.js",
        revision: "23d78f995c8dfb1d539267a4d13dff0a"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/Deferred.mjs",
        revision: "683900aae35fba4dd97a6d131da8319e"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/deleteDatabase.d.ts",
        revision: "b4d3939f2d78cad0c5acd78f396d9317"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/deleteDatabase.js",
        revision: "12adc315a007e7c562ad709048173774"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/deleteDatabase.mjs",
        revision: "5ddf514a89670db7341f31d17e52bf91"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/dontWaitFor.d.ts",
        revision: "741c7d348ebdeebde5c23795f3e4e02a"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/dontWaitFor.js",
        revision: "23de58bdaae717638f8693609fd9237d"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/dontWaitFor.mjs",
        revision: "04391f9848ee8067b5fe8b2e68678692"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/executeQuotaErrorCallbacks.d.ts",
        revision: "30fdd74266ebd513d037d41cd63af30b"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/executeQuotaErrorCallbacks.js",
        revision: "7f9c38f8c7fff038200f2918b7f5b192"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/executeQuotaErrorCallbacks.mjs",
        revision: "c2517f768c41381c5b789a4a0d9dc436"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/getFriendlyURL.d.ts",
        revision: "adebae99369a3ab4f22fad9cbe83d39a"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/getFriendlyURL.js",
        revision: "038634fc39e23de8baa899202f8ed345"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/getFriendlyURL.mjs",
        revision: "f2868e2650fee9bff0b1f40b0f490f81"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/logger.d.ts",
        revision: "965ee4bafd40e45f7ad7cb16bc8f8da7"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/logger.js",
        revision: "de29681f31d00bb7ba1b5eab77f9329b"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/logger.mjs",
        revision: "c2600d94e153d14c06423dbdccc29d20"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/resultingClientExists.d.ts",
        revision: "17d68a1c6710bfd6bbe1497612c42a50"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/resultingClientExists.js",
        revision: "25fa8789cb90e00512d95ce57342f3ad"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/_private/resultingClientExists.mjs",
        revision: "33872384d6f35c19aa64ffe5a7cb783d"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/timeout.d.ts",
        revision: "7030d77e9e97b7c06aca087ea3794ee5"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/timeout.js",
        revision: "d2063cc707e15c250ef1eb920c885bf9"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/timeout.mjs",
        revision: "e9d54c2e8d6547e4c7956401eb95916b"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/waitUntil.d.ts",
        revision: "7e3579534c6924b8c606fc3fab79f699"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/waitUntil.js",
        revision: "e220e26709ad20039a4a89ed439ca66a"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/waitUntil.mjs",
        revision: "fe012f61a4990ed3e0e628479091b3ed"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/WorkboxError.d.ts",
        revision: "30c5922bdf3c3af46680e0598ce178d0"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/WorkboxError.js",
        revision: "9c80050278a3eb34031b784428879045"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_private/WorkboxError.mjs",
        revision: "1e09599ba0f51fcc7ae416c1b7939bbb"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_version.js",
        revision: "078ceb998fba11bb123f8342bf2b3f21"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/_version.mjs",
        revision: "317dc57a3124d25a5bcb4e01d2e5d786"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/build/workbox-core.dev.js",
        revision: "3a3296624a8d71e80219a053f90476ca"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/build/workbox-core.prod.js",
        revision: "547df9a84d432900067de90097eccdb2"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/cacheNames.d.ts",
        revision: "6146c168116fc462e0e33050084d9e88"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/cacheNames.js",
        revision: "6cb951ba47022d52386f1e2f387bef6b"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/cacheNames.mjs",
        revision: "4486e3794c59ed843cfb40b8a240abbd"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/clientsClaim.d.ts",
        revision: "1d4a6ee8420940ae866b0fa84b5ec27c"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/clientsClaim.js",
        revision: "455df54e3afd6f392356c12ec5f01ef5"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/clientsClaim.mjs",
        revision: "d6bb346a6b256375ab2ef43bf9921c1e"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/copyResponse.d.ts",
        revision: "92330c84a9527c9d32c356a962a1b56e"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/copyResponse.js",
        revision: "a0e6dae0945dcb7608fcee28108d1109"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/copyResponse.mjs",
        revision: "4d7f1003737e988d3b146d137833afce"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/index.d.ts",
        revision: "33aa560b47134c7a30a8a5102958239c"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/index.js",
        revision: "81b97c3cb218261f2dfcecf7733afb07"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/models/messages/messageGenerator.d.ts",
        revision: "a4494c79a9763f3204be0eb6ec90acd5"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/models/messages/messageGenerator.js",
        revision: "7de043b89290f28a807b8ad55e9b5680"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/models/messages/messageGenerator.mjs",
        revision: "1d386fd1c2624bfd938891de0cf16c0a"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/models/messages/messages.d.ts",
        revision: "ca2d2d528c4e8100156129deab1a7159"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/models/messages/messages.js",
        revision: "5110248834b3c90cd75598c2cfb7250a"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/models/messages/messages.mjs",
        revision: "f824986c91724e12d3c5ac37c7865be7"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/models/pluginEvents.d.ts",
        revision: "e030f1f9c35aeda6deb5c55d779d4e76"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/models/pluginEvents.js",
        revision: "db2048bdfac6bad09367e70826c8e1f6"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/models/pluginEvents.mjs",
        revision: "a5d979240c5062f571126f6c23ada3e5"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/models/quotaErrorCallbacks.d.ts",
        revision: "ed14218ad4e50d8aba1b241d796a5493"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/models/quotaErrorCallbacks.js",
        revision: "2a3dc5a52cabb0c6fcefe5240a66c086"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/models/quotaErrorCallbacks.mjs",
        revision: "7674c561845cd56751508d9391eba85e"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/package.json",
        revision: "8712488da588fe57f9c2933c3b08e8ae"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/README.md",
        revision: "9ab7da8ffbcfbd38b8ad96a172c974b2"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/registerQuotaErrorCallback.d.ts",
        revision: "b06b5fc3266e8fd554a05b812614a3da"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/registerQuotaErrorCallback.js",
        revision: "8669b5ce5e81dc12f44e765c1d67860c"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/registerQuotaErrorCallback.mjs",
        revision: "dbc4066d18feb5df7062a686742ec6a8"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/setCacheNameDetails.d.ts",
        revision: "2efd510cb2604cd617faf8fbbc783f4d"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/setCacheNameDetails.js",
        revision: "3d4850c88eb418690c4a6f6c5e9f4dcf"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/setCacheNameDetails.mjs",
        revision: "07b8c5390fbffe6c2aa2b2c2f501b956"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/skipWaiting.d.ts",
        revision: "587fe529202de6c2ae227b57238f1c75"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/skipWaiting.js",
        revision: "fa333f66f59641f5af55f43ed285dd71"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/skipWaiting.mjs",
        revision: "e13775d95266b2f6d0a6796f0d1fd704"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private.ts",
        revision: "82a82e59c5581eca1f7763fe6cd8aaeb"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/assert.ts",
        revision: "3b8e353418b38702b9e3bd59bf0fe7e8"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/src/_private/cacheMatchIgnoreParams.ts",
        revision: "857a8194de3e6d23397e44e5a9ce24e3"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/cacheNames.ts",
        revision: "0b53d178988d02badd856f9b0794186e"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/src/_private/canConstructReadableStream.ts",
        revision: "0b5d0f7377289d08624234d13009e98e"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/src/_private/canConstructResponseFromBodyStream.ts",
        revision: "ebf1e0a63663a397fdb4242763ff06c1"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/DBWrapper.ts",
        revision: "56138b4306772490eb4927f454aa5bcc"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/Deferred.ts",
        revision: "9d6f1a112c37d06d73f7585da9c77e6d"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/deleteDatabase.ts",
        revision: "8aa5100f3f4972020d3fc9f281046469"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/dontWaitFor.ts",
        revision: "29f5f6ee8a21c19c38fb62b7c5a95c72"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/src/_private/executeQuotaErrorCallbacks.ts",
        revision: "c917cd66f5ab8788465bf265cfc051d7"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/getFriendlyURL.ts",
        revision: "6fe06c979871605e6bcb9e1159d33542"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/logger.ts",
        revision: "7d0a109143f8d8c2675b277bcba2a16f"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/src/_private/resultingClientExists.ts",
        revision: "bb652418edce59b31d21175de5fea1a0"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/timeout.ts",
        revision: "777808d1113a8bafd389c983e979c9f2"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/waitUntil.ts",
        revision: "749576d60f1b346666679ca216279232"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_private/WorkboxError.ts",
        revision: "5a3893023d753bc636e168c07d014020"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/_version.ts",
        revision: "fc9a31bf52c7d4e38ff5d56848711619"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/cacheNames.ts",
        revision: "d5beaca93fcb72613d04a096ad60c942"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/clientsClaim.ts",
        revision: "cc39cdf1569d47e899c2883c9a5f4c36"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/copyResponse.ts",
        revision: "bc4c33c5d1665b0838f2c0f22ef3934c"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/index.ts",
        revision: "cf9353470b95f5a70d09a9679b6ad16f"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-core/src/models/messages/messageGenerator.ts",
        revision: "ed7c28cea02432f48219a2ddc9ff3cfe"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/models/messages/messages.ts",
        revision: "bba610674ea807292eef84651db6c387"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/models/pluginEvents.ts",
        revision: "87a1d0fa057a2e4f247d7ae321c548ff"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/models/quotaErrorCallbacks.ts",
        revision: "8ef2499f8c32a5963bb917905f12c1a1"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/registerQuotaErrorCallback.ts",
        revision: "9f58793de022119e1a4cc58bd1d7f882"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/setCacheNameDetails.ts",
        revision: "6250b532c299a88897fff4c6b98f58ca"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/skipWaiting.ts",
        revision: "27cc36045f584455a5fcac40d7651b48"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/types.ts",
        revision: "534f98beacd0024dec6be57426194a3c"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/utils/pluginUtils.ts",
        revision: "f655c2628a4d8ee6f9df75b37334e9a6"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/src/utils/welcome.ts",
        revision: "726ef3e615fc75b6e4c19d25964fb28b"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/tsconfig.json",
        revision: "bd171594c14434327060002e27e585da"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/tsconfig.tsbuildinfo",
        revision: "c27fc47975acdf5cce51604eaf23a1b9"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/types.d.ts",
        revision: "aeac53062ff746795a6b5984e5b3a03c"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/types.js",
        revision: "c311aaa00bd00cb0b6c99d48c983d6a0"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/types.mjs",
        revision: "65ca45e905c424de8a87938b298e8b91"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/utils/pluginUtils.d.ts",
        revision: "c894ad86b726480d0acdbd5415414138"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/utils/pluginUtils.js",
        revision: "d1cd853e3c6e2789c44586a0e2c591d7"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/utils/pluginUtils.mjs",
        revision: "d1e2245a03104fa425908364c5c6fe60"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/utils/welcome.d.ts",
        revision: "0cf2eedad143d31b310dd730c874553e"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/utils/welcome.js",
        revision: "d5083a582745f54647f734038db111a8"
      },
      {
        url: "apps/sworkbox-cli/workbox-core/utils/welcome.mjs",
        revision: "4ef67bcf1dc2c3337e9ae0b5840b741f"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/_version.js",
        revision: "c1e19c89b2266c692cbc93ea10e000b8"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/_version.mjs",
        revision: "f96be60588caa6a007ff69b8a50f2bce"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-expiration/build/workbox-expiration.dev.js",
        revision: "1fd6f424029e728125fcb0f440fc77bb"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-expiration/build/workbox-expiration.prod.js",
        revision: "7d116541e3ca5fc90eafc330e026687f"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/CacheExpiration.d.ts",
        revision: "10535d7005f07d0362aeef156c0f3e07"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/CacheExpiration.js",
        revision: "4263a48a9812e2b5b99f75d8d8a2eb9d"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/CacheExpiration.mjs",
        revision: "50be3781556a91670212bdac19fd2b1d"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/ExpirationPlugin.d.ts",
        revision: "e792cefc7d9f54c3178f16d1ff771118"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/ExpirationPlugin.js",
        revision: "a391ef585e8d04d3d710cc37ad26c83e"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/ExpirationPlugin.mjs",
        revision: "d4199ffe9a29c88f740716a4b798b840"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/index.d.ts",
        revision: "39ce6f3f4a91cbfaa88dcdc7f1958a58"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/index.js",
        revision: "773eaf26fefccc13233c2d03389ebc1b"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-expiration/models/CacheTimestampsModel.d.ts",
        revision: "e87d7d5c0b8894b89720eb05b46dc791"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-expiration/models/CacheTimestampsModel.js",
        revision: "ce4c8dd088ededd19e6e28f7b3bde3ad"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-expiration/models/CacheTimestampsModel.mjs",
        revision: "931b279e1b0063790953d4442e19edeb"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/package.json",
        revision: "7093833490834a0762a8add73a6b5e69"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/README.md",
        revision: "a3249fe199376a802e816ade04376f8d"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/src/_version.ts",
        revision: "a65406487b09bf24339409b7b74b7a83"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/src/CacheExpiration.ts",
        revision: "299a8dddc7928f02fa5fa052fc5e3196"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/src/ExpirationPlugin.ts",
        revision: "9826868a3a78ca9d0990a461515fd13b"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/src/index.ts",
        revision: "d7ec5d97e81d53bc70122b06b3af18e9"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-expiration/src/models/CacheTimestampsModel.ts",
        revision: "8274afcacbe8f49e861006da17ca441b"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/tsconfig.json",
        revision: "67ac5bab77ac0f1ee75c10f4b62e6e0c"
      },
      {
        url: "apps/sworkbox-cli/workbox-expiration/tsconfig.tsbuildinfo",
        revision: "7edfa0c0efa84ce48cbe53bb2a64c06c"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/_version.js",
        revision: "504ab1341538f8a777d7255f87e43fc4"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/_version.mjs",
        revision: "f60291d5cbb73ac61f263b702189d044"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-google-analytics/build/workbox-offline-ga.dev.js",
        revision: "7f6b01f04a466303633951a21e634abe"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-google-analytics/build/workbox-offline-ga.prod.js",
        revision: "2cd852c48423892655b1af0785f61d21"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/index.d.ts",
        revision: "341356cf7b3d4208f10898c06cf790e2"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/index.js",
        revision: "97b458c59d3f89e54fdf8ee44ca3d6e7"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/initialize.d.ts",
        revision: "4a5210c40ca62fcea4ac25783ca74bd5"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/initialize.js",
        revision: "eb9ca2dec188595514e66efdf3b5bd3e"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/initialize.mjs",
        revision: "5081d2db13a9e0cc086691498211c937"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/package.json",
        revision: "6d57f89e0acc2f9254cbae86a6a67229"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/README.md",
        revision: "dd46331acc6f880fe458bebe0edf223b"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/src/_version.ts",
        revision: "31e5e44c2361523f519fa9c06ce86be5"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/src/index.ts",
        revision: "340ffa16ba0644935289489d635b5188"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/src/initialize.ts",
        revision: "0f34e133614db6255b8aa8d772269ff6"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-google-analytics/src/utils/constants.ts",
        revision: "6de407d993c75e334e72e121093a2edd"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/tsconfig.json",
        revision: "3485e9af53f3033b619f836fcc7f1f24"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/tsconfig.tsbuildinfo",
        revision: "1c4fce8433dafc98a1a57cdd205caf38"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/utils/constants.d.ts",
        revision: "63ed0ea3311e53d50e7ef3565b5998cf"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/utils/constants.js",
        revision: "133f0570590ee273ed60e8d35e4f7883"
      },
      {
        url: "apps/sworkbox-cli/workbox-google-analytics/utils/constants.mjs",
        revision: "5d6adc8ed5c9df252a1409e59a1b7ba6"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/_version.js",
        revision: "a007a3901d674e16fa358059197bf946"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/_version.mjs",
        revision: "8ba7740e07b52e0cee72ab8036119063"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-navigation-preload/build/workbox-navigation-preload.dev.js",
        revision: "b4b6a74ad9c7b2bc854d20f96ecc16a5"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-navigation-preload/build/workbox-navigation-preload.prod.js",
        revision: "8d4820aeffb5c61ae3bc2ef3011f6eed"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/disable.d.ts",
        revision: "33d19f9f1c83ebe2a673aa665e30b803"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/disable.js",
        revision: "56c4b9f58e9197e05b69cb2920015727"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/disable.mjs",
        revision: "dabd16aa10f134dc955cc73d8213fed5"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/enable.d.ts",
        revision: "9433f436cd6717d65014e56f6aac293b"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/enable.js",
        revision: "bbd7c5fff71ef88fe5428737fc94e2e9"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/enable.mjs",
        revision: "581eab6a4c5be5058a25aa35a9d1076f"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/index.d.ts",
        revision: "d388bc8037727e3c8c75573e8f3123bf"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/index.js",
        revision: "51f4f07c195b9553f828b452141ca5c9"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/isSupported.d.ts",
        revision: "e331635fb689fd961e3e05cc58eb7c7e"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/isSupported.js",
        revision: "7468cd7d611ef69d80c86ede0adac76e"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/isSupported.mjs",
        revision: "9a55f1baabfb95ebe020a14332b9dfb7"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/package.json",
        revision: "73642b1a1f68050ec8f22973f847a00d"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/README.md",
        revision: "a5ee1bc065046e47f881f6fc221106e0"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/src/_version.ts",
        revision: "5f6c2124c8794a7ec04d46b43ca240df"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/src/disable.ts",
        revision: "4c460aa970a9e9e4fe579b3331ec513f"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/src/enable.ts",
        revision: "81690a822866c80301b0024306f79c26"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/src/index.ts",
        revision: "76ddc2056ece3967802635d0af62ed36"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/src/isSupported.ts",
        revision: "0fc7e162aad650bf698b5f9a177524eb"
      },
      {
        url: "apps/sworkbox-cli/workbox-navigation-preload/tsconfig.json",
        revision: "67ac5bab77ac0f1ee75c10f4b62e6e0c"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-navigation-preload/tsconfig.tsbuildinfo",
        revision: "9f3384307fdcaa6d3d82aff720fad695"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/_types.d.ts",
        revision: "a4d5110206b62f10f6ffcdeb5bb88fa1"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/_types.js",
        revision: "10c8fe0e89809967882de49564f3e5e1"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/_types.mjs",
        revision: "8fa96f053e23bb1d9ab4a672848c982e"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/_version.js",
        revision: "b2aa308e0c64b986c184f18c0e56d670"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/_version.mjs",
        revision: "0dc33f6d24ec253d76f170e8ad41d252"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/addPlugins.d.ts",
        revision: "bb0bed732e76e0671102282497b0b729"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/addPlugins.js",
        revision: "ec9e8bc895950278fbc60c17e129501d"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/addPlugins.mjs",
        revision: "675642dd7f533f0fe27746d7b273f497"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/addRoute.d.ts",
        revision: "5de18c24375048ed40e366358e59f7b5"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/addRoute.js",
        revision: "4e80d5b4f6d1b1c86906aed32d90901f"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/addRoute.mjs",
        revision: "82f4035cb6ecc16615ab3c262b3fce96"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/build/workbox-precaching.dev.js",
        revision: "d548d958f52ef5d453a821e8702c4039"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/build/workbox-precaching.prod.js",
        revision: "c441f2534d155153a6da21ca0d3529a7"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/cleanupOutdatedCaches.d.ts",
        revision: "94a3552dd369f8021fdea99e3524633e"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/cleanupOutdatedCaches.js",
        revision: "f3e5b8b12271465a685bbb42401d3bc4"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/cleanupOutdatedCaches.mjs",
        revision: "686c3cc827fea7e030c4342a8f7a48b4"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/createHandlerBoundToURL.d.ts",
        revision: "5844945757c5f03106daca492e9b7eba"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/createHandlerBoundToURL.js",
        revision: "cd6745c7d8809d8aeb4f546ce5ef03b7"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/createHandlerBoundToURL.mjs",
        revision: "9963f7055e23261d883b94340b436cb2"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/getCacheKeyForURL.d.ts",
        revision: "1ef51081dd0cc4eee66087243ba2a242"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/getCacheKeyForURL.js",
        revision: "cccc474bd7889fad03a4c21f305fae24"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/getCacheKeyForURL.mjs",
        revision: "2c9ff25fc1c4c95130cc2627e8926ee2"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/index.d.ts",
        revision: "a84ff4d868fdbcb2e3f2665cf6ef68b1"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/index.js",
        revision: "76a96868d61876f3015bb548f15ea977"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/matchPrecache.d.ts",
        revision: "bf874b68e0bcecc0a7b914ba210a2cca"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/matchPrecache.js",
        revision: "6e72a0ad99ee97bd7fb5b5ab22ba6d80"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/matchPrecache.mjs",
        revision: "3867afcb5794539d91e557da4789b702"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/package.json",
        revision: "ead5538761cff39930ece9b1d2f848dc"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/precache.d.ts",
        revision: "c9a4787e8203e97e7be72953b76f32bb"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/precache.js",
        revision: "2e914f0e2479efc3f32ed42ecee18dea"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/precache.mjs",
        revision: "017f257f954f21e7a36a662f0ce6c365"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/precacheAndRoute.d.ts",
        revision: "bd70333ccc5b01cf0b9f699ff3e73d0a"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/precacheAndRoute.js",
        revision: "3cbec45fdef018234e5f8a9f3abc72c0"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/precacheAndRoute.mjs",
        revision: "c63624d864b53c86ed724497d804461c"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheController.d.ts",
        revision: "a4bcd1c88d44895d577bed7dd883ce98"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheController.js",
        revision: "e4d17622b0825e64d64c740f90a8e5b5"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheController.mjs",
        revision: "34ba02607fa27f408067b58c7958dd25"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheFallbackPlugin.d.ts",
        revision: "384791d1d188a99bd9c4d6ec9e5e8c51"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheFallbackPlugin.js",
        revision: "c7c43dd6afe31cdde50c6fd94a3923ec"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheFallbackPlugin.mjs",
        revision: "bfe6e91caead53b918cccb4145a80074"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheRoute.d.ts",
        revision: "413ab049f2746e950038d632185a8c3c"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheRoute.js",
        revision: "da3b1fc63fcc3d9bbd3bbf0e0c0846db"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheRoute.mjs",
        revision: "c7a779447cdce6783a586602bcc545e7"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheStrategy.d.ts",
        revision: "177cf5967a073484cba58db6c45ad565"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheStrategy.js",
        revision: "e824652cbe020452aa485b325163bdbe"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/PrecacheStrategy.mjs",
        revision: "f439b1c9612485609a1e85dbaecad300"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/README.md",
        revision: "8d54865847914a6704576bfa3bbf6f31"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/_types.ts",
        revision: "27326d8e0e83a0504f999f479dc5a64f"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/_version.ts",
        revision: "17f576c710d9d8fdc1f0d1017a0cd9fa"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/addPlugins.ts",
        revision: "961a78189edc514d50608dec79f068cc"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/addRoute.ts",
        revision: "02c6ba8499989c4794ddcc08b73e1be5"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/cleanupOutdatedCaches.ts",
        revision: "b9b186ab4a34fb538ce0fcf7d07203d9"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/createHandlerBoundToURL.ts",
        revision: "6baedaad169d59dcb7b17eb39de87386"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/getCacheKeyForURL.ts",
        revision: "d929261b6055f35eeaf88d2adc0f49cd"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/index.ts",
        revision: "10a9781c29fa6259500cbb70bc9f3240"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/matchPrecache.ts",
        revision: "768cc1ae585ed678bfe770ea5c329bb8"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/precache.ts",
        revision: "01ee7cf18382bd193805f0248bc862a6"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/precacheAndRoute.ts",
        revision: "209fd942174528c85d9d6b0085304e20"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/PrecacheController.ts",
        revision: "0817cdf8fca8b47971df07e34c0bf9a6"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/PrecacheFallbackPlugin.ts",
        revision: "810473a47516a7c75fed8a94d0141b0e"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/PrecacheRoute.ts",
        revision: "f5da99221daf39c9a474a1703a76a569"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/PrecacheStrategy.ts",
        revision: "ac9939523b86d578c14880ae7c1d201b"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/src/utils/createCacheKey.ts",
        revision: "3636e65ba78e01b94249ebd34cfb7ec9"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/utils/deleteOutdatedCaches.ts",
        revision: "262730cdb8b59ff38d8d44d51de59006"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/utils/generateURLVariations.ts",
        revision: "56486b915b82ff809d17868f9a682b52"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/utils/getCacheKeyForURL.ts",
        revision: "37a973f21a7c7926152c9d99d67afea0"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/utils/getOrCreatePrecacheController.ts",
        revision: "07b6621f6229f34abde59feaf74db7c6"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/utils/PrecacheCacheKeyPlugin.ts",
        revision: "1bffe12a950815e97c625f22f20cd564"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/utils/PrecacheInstallReportPlugin.ts",
        revision: "9e6d5216b676e6ff82d7abdbc2c27b27"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/utils/printCleanupDetails.ts",
        revision: "730a5d03a0b98e0524e9688735052f57"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/utils/printInstallDetails.ts",
        revision: "5ca130070341db7ba71103aa466d1dfd"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/src/utils/removeIgnoredSearchParams.ts",
        revision: "5c3e666d206ed0132065e6812619eca9"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/tsconfig.json",
        revision: "601f00c4e239ff066840a6e69923e471"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/tsconfig.tsbuildinfo",
        revision: "f02715f8ba6b7f63bb974aac22b1eaca"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/utils/createCacheKey.d.ts",
        revision: "da7ae8cfb81bc62df37352280357c74c"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/utils/createCacheKey.js",
        revision: "b50738c92f348d78ff24d382be736396"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/utils/createCacheKey.mjs",
        revision: "2adf0726e9dbb44d90ae39b1225c1c7f"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/deleteOutdatedCaches.d.ts",
        revision: "b76a4245795bf38952e59db2122e7c63"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/deleteOutdatedCaches.js",
        revision: "527e01581a70f6a20f875e39b81c4142"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/deleteOutdatedCaches.mjs",
        revision: "3ce731d3baafccc29783a0356a54baaa"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/generateURLVariations.d.ts",
        revision: "4009979310a84a3be2d248cd6bd8c858"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/generateURLVariations.js",
        revision: "988509665f499894834da1ea6681f0f4"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/generateURLVariations.mjs",
        revision: "00e85bfda95b9ad0d45bbed333a4f284"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/getCacheKeyForURL.d.ts",
        revision: "315c535c0d65badd59edf9d67cdda49e"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/utils/getCacheKeyForURL.js",
        revision: "216305b8545cd51ae68db6480ef2f966"
      },
      {
        url: "apps/sworkbox-cli/workbox-precaching/utils/getCacheKeyForURL.mjs",
        revision: "2c9ff25fc1c4c95130cc2627e8926ee2"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/getOrCreatePrecacheController.d.ts",
        revision: "ddc3eff86ab049aa5284557cce92da74"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/getOrCreatePrecacheController.js",
        revision: "ae05f5380aa9437156d1e804ced7c334"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/getOrCreatePrecacheController.mjs",
        revision: "fffb44d88ea67dce6bf8fc4c028efd0d"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/PrecacheCacheKeyPlugin.d.ts",
        revision: "d6b2dbf0223b6f7d8edd1d9c723de892"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/PrecacheCacheKeyPlugin.js",
        revision: "2ad8943982194e1264e44e549c7d3357"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/PrecacheCacheKeyPlugin.mjs",
        revision: "1df31ec2b6c216c63c49343212c6372b"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/PrecacheInstallReportPlugin.d.ts",
        revision: "7fcea3b5be6c88687a9f4849f0b166ab"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/PrecacheInstallReportPlugin.js",
        revision: "31fd705f33ae8af5f1d9c66c8da212ce"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/PrecacheInstallReportPlugin.mjs",
        revision: "485315c96ce73379bff15b4f753c39d7"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/printCleanupDetails.d.ts",
        revision: "ed26cfa944845e45fb23d3626857e871"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/printCleanupDetails.js",
        revision: "b90812cb0e952b32bf71118be7e7e33a"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/printCleanupDetails.mjs",
        revision: "6ef0462e4520feab0f41673217c7ffb0"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/printInstallDetails.d.ts",
        revision: "3263b50cedba74239be835a59a99a518"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/printInstallDetails.js",
        revision: "5bf22183d66be7d44536bb4d33cc4b53"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/printInstallDetails.mjs",
        revision: "334998a8ba63ca44cacf689bf5b5d1fa"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/removeIgnoredSearchParams.d.ts",
        revision: "4dfc554d4a5b6dd5b008eb4ce01ea4f2"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/removeIgnoredSearchParams.js",
        revision: "b3e2f6b4464964e431ddc0495a7e1b86"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-precaching/utils/removeIgnoredSearchParams.mjs",
        revision: "28bf15a76ec467d695ed6b4118f2b343"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/_version.js",
        revision: "997bd7dbe6eebf8686352834ddf5f065"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/_version.mjs",
        revision: "2282b36e1de10fdc67b8cc82bc1b3a45"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/build/workbox-range-requests.dev.js",
        revision: "e1a36e11e595c733a66e90a27f033afa"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/build/workbox-range-requests.prod.js",
        revision: "cb0f0bc81a60d00a290fe1402241ec74"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/createPartialResponse.d.ts",
        revision: "1f419c03b56e478144ddc1e19799ff12"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/createPartialResponse.js",
        revision: "8c28768a7170598f27710243823e1e60"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/createPartialResponse.mjs",
        revision: "da4725a3929f5ed849b6df9b388ecec4"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/index.d.ts",
        revision: "705c0f3d3a9762edc25dddf4ec79c305"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/index.js",
        revision: "4d20693aabf2c03eba16e836f15e145e"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/package.json",
        revision: "5c7973a7948ae8a330e1d075acdc28e7"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/RangeRequestsPlugin.d.ts",
        revision: "96c221997bb39ada574ec031fdb9df67"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/RangeRequestsPlugin.js",
        revision: "dc58531a62cfe6d6aba08d6d02c5a854"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/RangeRequestsPlugin.mjs",
        revision: "b009574cae62abc18b964cd94f4494de"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/README.md",
        revision: "fa50b9e2d541f65ef62e8210ee5ee9db"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/src/_version.ts",
        revision: "b9adb2def0bcc9d503e74f9d9ff38d9f"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/src/createPartialResponse.ts",
        revision: "f6126a830d3d467f69f4846790e0d2a7"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/src/index.ts",
        revision: "15107bddcaae27295e709b958ac7c284"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/src/RangeRequestsPlugin.ts",
        revision: "7a15a46c444b4f49ccd7abb4ee8db39f"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/src/utils/calculateEffectiveBoundaries.ts",
        revision: "8db87c4ca570449e9bd2156b7695eb90"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/src/utils/parseRangeHeader.ts",
        revision: "12f669b119fe5e7fc4e8b7a998bfa2f3"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/tsconfig.json",
        revision: "67ac5bab77ac0f1ee75c10f4b62e6e0c"
      },
      {
        url: "apps/sworkbox-cli/workbox-range-requests/tsconfig.tsbuildinfo",
        revision: "207934aa1ddf8266fcb60560744ff293"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/utils/calculateEffectiveBoundaries.d.ts",
        revision: "6a865d295dd89195e034814fb67880d2"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/utils/calculateEffectiveBoundaries.js",
        revision: "9b1e073e6a815e9bcee7657267bdbf31"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/utils/calculateEffectiveBoundaries.mjs",
        revision: "42e09a6a9df17096e129285409925fd2"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/utils/parseRangeHeader.d.ts",
        revision: "d64f5809a43e742c76d6b0867e1947a8"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/utils/parseRangeHeader.js",
        revision: "8177562f071c2c07d69c72a39ffd3535"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-range-requests/utils/parseRangeHeader.mjs",
        revision: "93cfdc829c0d5d2054785b8001a79734"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/_version.js",
        revision: "19bc1bc4796db04754a7a54484f4ac59"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/_version.mjs",
        revision: "159663ec9da2b8748cc3d6bcd873d2cf"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/build/workbox-recipes.dev.js",
        revision: "ccdf1f2727c0dc5e745a206d3b838f9b"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/build/workbox-recipes.prod.js",
        revision: "22e1566bb61c21b2d36de60e2e1edb83"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/googleFontsCache.d.ts",
        revision: "9a37fdd05cd6a4c3632b353db1b7210b"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/googleFontsCache.js",
        revision: "a4a0f5ded48f6410e78b5cf53ca3a2a5"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/googleFontsCache.mjs",
        revision: "2148cdede4c93fb923c1453c56d45858"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/imageCache.d.ts",
        revision: "4c369b67d6bdfcac3682ef6e69b0c942"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/imageCache.js",
        revision: "00cccf1b0e37c75f15bdf8ed59e74736"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/imageCache.mjs",
        revision: "c9f2e12643f3683986481f1bb0f0b7f1"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/index.d.ts",
        revision: "e475e383d8f13eda8c3dc004b1791faa"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/index.js",
        revision: "0488206b8a29bb44689a910488ac868e"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/offlineFallback.d.ts",
        revision: "285be251478e0a482c0884361e45fc62"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/offlineFallback.js",
        revision: "0254dfc72726c33aa6fc8ebbdd64ea38"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/offlineFallback.mjs",
        revision: "713c9704ab98f8be293302822059f885"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/package.json",
        revision: "a6c883338f17af314d3a1dda28ee80ee"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/pageCache.d.ts",
        revision: "aae6ec237aff18b82b5fb271af7c2d0d"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/pageCache.js",
        revision: "049a4f1bb61467747b8ad6aed24a0337"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/pageCache.mjs",
        revision: "2cb777295565f0b409e61492b66ff796"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/README.md",
        revision: "b3045df9531a8b13fbe163e2ae0abb73"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/src/_version.ts",
        revision: "10be4f967115c69cbdfb137bc311f328"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/src/googleFontsCache.ts",
        revision: "07d4cbea241c43c0185824e62df4ef9e"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/src/imageCache.ts",
        revision: "bf99ec3a7b1b4756dd876de90893bffa"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/src/index.ts",
        revision: "e5ff182c620b4e35572f9635a8bcb488"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/src/offlineFallback.ts",
        revision: "0a20db9a9120a4aad42fa52dfd0e857a"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/src/pageCache.ts",
        revision: "83e093094a5bc3128e6a5c889a82b139"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/src/staticResourceCache.ts",
        revision: "a3da326e9fe7bd988652d7e4a6a25c6f"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/src/warmStrategyCache.ts",
        revision: "e83b0dc2e6a3998751d7b9ef405a98d1"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/staticResourceCache.d.ts",
        revision: "2b56c28087af83e06ba4e7d91d39280e"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/staticResourceCache.js",
        revision: "66043f4e397695e87c0a89ba056baeca"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/staticResourceCache.mjs",
        revision: "c0b44f5120e5a388c37424aadae85dbe"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/tsconfig.json",
        revision: "279f8f3a68cef9e7e5d4a6bab2abb3c1"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/tsconfig.tsbuildinfo",
        revision: "700904eced9634c263f39bb1a2fadb6f"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/warmStrategyCache.d.ts",
        revision: "40dbb8949017cfc9d665bffb4326af1a"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/warmStrategyCache.js",
        revision: "39eae129d780da2fb87424e2e20f4a23"
      },
      {
        url: "apps/sworkbox-cli/workbox-recipes/warmStrategyCache.mjs",
        revision: "3741efc0b7bc3c17a922b09e2f498c4a"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/_types.d.ts",
        revision: "98aad7b7d6556b50048839ee70170c57"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/_types.js",
        revision: "1159831d4d38a5c4f2300c47aae341bd"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/_types.mjs",
        revision: "8fa96f053e23bb1d9ab4a672848c982e"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/_version.js",
        revision: "1d1a14d74f0620d8c7e368c8f5738b3f"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/_version.mjs",
        revision: "634387ae478dfade99f2c4862d5a9f48"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/build/workbox-routing.dev.js",
        revision: "7df80406237d4e9e5245d785f6a18533"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/build/workbox-routing.prod.js",
        revision: "ee1c4a6f574edb5cf15bdf5a7e8cbbef"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/index.d.ts",
        revision: "20ec3227789289ee4bb4c229e0c045e8"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/index.js",
        revision: "eb6c6c07e3263a4903be2a424dd6ed9c"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/NavigationRoute.d.ts",
        revision: "08c87a0429f49a89aa94f0875877609d"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/NavigationRoute.js",
        revision: "491728543ac3e45f125624523474a3a4"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/NavigationRoute.mjs",
        revision: "7b14fa6bc355ce94bc9b0cfc0f05cdde"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/package.json",
        revision: "15f8e69e5953bef5a747cc2bb8372dfb"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/README.md",
        revision: "5de02bac09c689aa599831912a5e3f2c"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/RegExpRoute.d.ts",
        revision: "8c9322fd724e895ef2afaca8233d1ec8"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/RegExpRoute.js",
        revision: "f9c2138835cfc4fa08662494d7174d1a"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/RegExpRoute.mjs",
        revision: "938708e4d1d67bc85c5f998e40a2e184"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/registerRoute.d.ts",
        revision: "fd06caba8d295a2b7cea803b17164568"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/registerRoute.js",
        revision: "d84d82a8eb5a74ef8ca588b46581367a"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/registerRoute.mjs",
        revision: "8b194403e3102032aa331ea8ab4d64a5"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/Route.d.ts",
        revision: "63b2e125a86b55442368eed6ee0b1e24"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/Route.js",
        revision: "aff0ba18aa5e8b88e48812422019bdaa"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/Route.mjs",
        revision: "618815a3b4b8ae7f5a163cc6a320802a"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/Router.d.ts",
        revision: "059d753905bcac6e71e01fea01d5f874"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/Router.js",
        revision: "630d1af228e53b8592c6caa5d44d1f6b"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/Router.mjs",
        revision: "3a9788b621d12c70da0d8b0845bfa83b"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/setCatchHandler.d.ts",
        revision: "cff6f2e98ebadf8cde3f3b931392b371"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/setCatchHandler.js",
        revision: "9153b3faa6ec3cc784e02d8f234b685a"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/setCatchHandler.mjs",
        revision: "3f8957022895842b5b5f3f8b605429a8"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/setDefaultHandler.d.ts",
        revision: "c2f734fd476bf9fa10d8b4cf9448b291"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/setDefaultHandler.js",
        revision: "8292b9006f72d1a205fa0152e0da9c73"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/setDefaultHandler.mjs",
        revision: "772ae5c492b2de87113e6e4f33a125c6"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/_types.ts",
        revision: "b3cd5cf5c68c0c29d6b8e8dc3a129613"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/_version.ts",
        revision: "e09daac2fdfaf7a41a987442db78c443"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/index.ts",
        revision: "d706b8a1506ef3a4d10701e3afefe24a"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/NavigationRoute.ts",
        revision: "2b8eb51a45ad9e2b0bb6c9bebb70abbd"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/RegExpRoute.ts",
        revision: "ce77eb7ce242fb193bc217160e1eb4d3"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/registerRoute.ts",
        revision: "e150c5ce60d81f3f6ec56acbfeb4a6e0"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/Route.ts",
        revision: "7ce04d281b04a01881ae9048a1ad8622"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/Router.ts",
        revision: "95e85ea654134c9b8011b385170423d6"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/setCatchHandler.ts",
        revision: "570b993c42dcf27c255fd9617db20220"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/setDefaultHandler.ts",
        revision: "4f42926e527ecd6591a14a950770a5e0"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/utils/constants.ts",
        revision: "e09876dec00799476b032aebed3c2831"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-routing/src/utils/getOrCreateDefaultRouter.ts",
        revision: "c90d6048386606328429fbc3f45a3e5d"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/src/utils/normalizeHandler.ts",
        revision: "9ca439ffb7e659ea7a6e0c3bde5422c9"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/tsconfig.json",
        revision: "67ac5bab77ac0f1ee75c10f4b62e6e0c"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/tsconfig.tsbuildinfo",
        revision: "446a6e0e0cbf62e93d15f88a59ef8b6f"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/utils/constants.d.ts",
        revision: "2d0b9d591b0d0df03afcd7a2afd9cecd"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/utils/constants.js",
        revision: "6a81ef4bb935472a394e1ec60af4e140"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/utils/constants.mjs",
        revision: "5d6adc8ed5c9df252a1409e59a1b7ba6"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-routing/utils/getOrCreateDefaultRouter.d.ts",
        revision: "b3b2263fd508910f60b0e6e79eafec2a"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-routing/utils/getOrCreateDefaultRouter.js",
        revision: "03a8689b860a96c42e299a5a718493dd"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-routing/utils/getOrCreateDefaultRouter.mjs",
        revision: "1d98c5bb95ae1cec995ee646e5388eab"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/utils/normalizeHandler.d.ts",
        revision: "5529b3a18204e7795a265a07cffeda12"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/utils/normalizeHandler.js",
        revision: "38acb6728ad0a3ca3c382df2f3bed303"
      },
      {
        url: "apps/sworkbox-cli/workbox-routing/utils/normalizeHandler.mjs",
        revision: "ac2a12bf79c089c2b5aa688a1762a821"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/_version.js",
        revision: "8e67f8bc364ab627385b5a0b1bcc7b9f"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/_version.mjs",
        revision: "01a08bf132ccd21493838f080c171ed5"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-strategies/build/workbox-strategies.dev.js",
        revision: "d0eb9d0a0b9ed8a0cc35348f9e5d26b3"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-strategies/build/workbox-strategies.prod.js",
        revision: "62192822b287e742c6271c8f079c9fb8"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/CacheFirst.d.ts",
        revision: "8668f1326c2f5e33c94d3aa23f1a19b7"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/CacheFirst.js",
        revision: "99204b3332cddaf6a78c4512ffacb122"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/CacheFirst.mjs",
        revision: "0d9e2629642cc94425a3f77848f63050"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/CacheOnly.d.ts",
        revision: "98a51fff1089c2891ccd6be17ce5540e"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/CacheOnly.js",
        revision: "014dcfb98f221575cfa503ab7d4e7342"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/CacheOnly.mjs",
        revision: "7d8afcf7b651b506170501cfb8818a72"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/index.d.ts",
        revision: "2bde9f96f04f581f59ea16d37f008e4a"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/index.js",
        revision: "477b15f8759672b7cc2ecb17b0bb3e4c"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/NetworkFirst.d.ts",
        revision: "ac76c962149fd4ed03fa0b47fb30948d"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/NetworkFirst.js",
        revision: "1e42928d1e7a5f3c7a8fff3f6cd358a6"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/NetworkFirst.mjs",
        revision: "c7843f24e9307188a8459102329a5f0b"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/NetworkOnly.d.ts",
        revision: "6b5bc76d5efce1b4e191648513e67a8c"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/NetworkOnly.js",
        revision: "733c6fde2bdf5143fd157070acfcd330"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/NetworkOnly.mjs",
        revision: "31c453c0d9b21ff6d119c5f87f5bdd83"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/package.json",
        revision: "e3b502c0c81ff438807dd31fa5883335"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-strategies/plugins/cacheOkAndOpaquePlugin.d.ts",
        revision: "2394d36b72926dd808852312108474c7"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js",
        revision: "57f88ac8c2350bd0901f637fa9f72df2"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-strategies/plugins/cacheOkAndOpaquePlugin.mjs",
        revision: "ce33bdfd7819a45192931f4dc2647136"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/README.md",
        revision: "c059525b7aa9c580ebd17d9d5a5b3a1c"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/src/_version.ts",
        revision: "deb367cdc98ce8acac01e6bda16c6bcb"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/src/CacheFirst.ts",
        revision: "5fed65812e83eccedc6d8f751adc6615"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/src/CacheOnly.ts",
        revision: "45e0cf4f9c80a6503bc0bbf4c672c255"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/src/index.ts",
        revision: "2ea0002be1867ac6f632b9e9775f1ac1"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/src/NetworkFirst.ts",
        revision: "6374c8fdf7ee034e656cf88226c9d435"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/src/NetworkOnly.ts",
        revision: "e203c3bb2da5b8c950d108897797589b"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-strategies/src/plugins/cacheOkAndOpaquePlugin.ts",
        revision: "ac556b787e04bf907e48ad4094858dea"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/src/StaleWhileRevalidate.ts",
        revision: "e88c24618266be9658b46a5d93f51e80"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/src/Strategy.ts",
        revision: "e5ff619a9015255a13adef4da3a93c83"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/src/StrategyHandler.ts",
        revision: "e078a534222dce607c87ae998616a5c6"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/src/utils/messages.ts",
        revision: "c3bb16d081711c4ae860e67fd0e12afd"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/StaleWhileRevalidate.d.ts",
        revision: "644a2b285dd54fc542a3d6b9f99eb88e"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/StaleWhileRevalidate.js",
        revision: "30f41c64d4a4210f08cdd5a7e057a50b"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/StaleWhileRevalidate.mjs",
        revision: "757b950a0694985acd895c973cf745d8"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/Strategy.d.ts",
        revision: "9e97157f2f40ddd63b25004268f80353"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/Strategy.js",
        revision: "e01df50f5d2a37ee4748238102360ffd"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/Strategy.mjs",
        revision: "fde91384ad8eca8afddbf5ee93a9261d"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/StrategyHandler.d.ts",
        revision: "1ed0e2c30a1519bfcffc36cb35763367"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/StrategyHandler.js",
        revision: "0aefe03ab74d970840b0fe9e4ed4770d"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/StrategyHandler.mjs",
        revision: "24b8a4e86ac2ce3720367edacb9f4ec6"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/tsconfig.json",
        revision: "67ac5bab77ac0f1ee75c10f4b62e6e0c"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/tsconfig.tsbuildinfo",
        revision: "eaef0054c95a3e412d81acf89af430a6"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/utils/messages.d.ts",
        revision: "18472a439e11d9cb1da421e211ca7558"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/utils/messages.js",
        revision: "e88f1205c3d60414e22b191739b49f68"
      },
      {
        url: "apps/sworkbox-cli/workbox-strategies/utils/messages.mjs",
        revision: "f824986c91724e12d3c5ac37c7865be7"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/_types.d.ts",
        revision: "05f1af3f1c9e9c7e3e7b5c0e447c78ad"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/_types.js",
        revision: "3e803260f736fca88c3663234d802616"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/_types.mjs",
        revision: "8fa96f053e23bb1d9ab4a672848c982e"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/_version.js",
        revision: "524153b68fe805c55944609019d15f5a"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/_version.mjs",
        revision: "d114fb76e448b613d0cda3087c92a00c"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/build/workbox-streams.dev.js",
        revision: "05c54a6ac916215fad9676a9d4758d01"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/build/workbox-streams.prod.js",
        revision: "e40855d45185369eb115fe2270c55e1b"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/concatenate.d.ts",
        revision: "b65aa9b8d7706efc67acad7d8a06efde"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/concatenate.js",
        revision: "44970f016eb22ed5fb9d417de97979d1"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/concatenate.mjs",
        revision: "dc2ef25df92931ca42e564f39c4b5c94"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/concatenateToResponse.d.ts",
        revision: "ed81ed299631fd60af49f080ff8ef2bb"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/concatenateToResponse.js",
        revision: "868acf3bbb5226ea1c103d112a802daa"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/concatenateToResponse.mjs",
        revision: "220605d0dd64479965e79cf52cc06209"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/index.d.ts",
        revision: "8c1c71e1e50f9a4d933a7d789718411a"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/index.js",
        revision: "78db5b5b70c29e547325d457f162d02a"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/isSupported.d.ts",
        revision: "a0ec1f4e3bc35636d4803771596a2f3d"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/isSupported.js",
        revision: "9fef30fc63e3db98c70ec9426311532e"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/isSupported.mjs",
        revision: "9a55f1baabfb95ebe020a14332b9dfb7"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/package.json",
        revision: "a8e9034858b00225a48d77085de89adb"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/README.md",
        revision: "b28792b5b8a85043f9c57129cb07c9d9"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/src/_types.ts",
        revision: "5f239f8c3b7b461f855291e2d6824958"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/src/_version.ts",
        revision: "65053d08dce0997cc117adc3b1b39386"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/src/concatenate.ts",
        revision: "2a07117defffd2cf048cd56e3f8d9f98"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/src/concatenateToResponse.ts",
        revision: "002c89b867e52575f7ee13c99d31a2e3"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/src/index.ts",
        revision: "dd6538bdb77aa102e60a11070abd9559"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/src/isSupported.ts",
        revision: "cd2da93b967c6816c7d625ce5acfaddb"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/src/strategy.ts",
        revision: "d9b398ee72be6dcd5dc56e43a03b2081"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/src/utils/createHeaders.ts",
        revision: "d8f556027684a9d048a2107cb690a133"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/strategy.d.ts",
        revision: "8f9a521795a4de3a1bdb789585f6429e"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/strategy.js",
        revision: "e705731ce7c6f6e243606c84df1b2c00"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/strategy.mjs",
        revision: "37b28a2a9f06816f2678c9b5a1473a39"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/tsconfig.json",
        revision: "67ac5bab77ac0f1ee75c10f4b62e6e0c"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/tsconfig.tsbuildinfo",
        revision: "d32c70b27afc6201994f9c87b18e3237"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/utils/createHeaders.d.ts",
        revision: "a128faf608806bb133147a168400b47a"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/utils/createHeaders.js",
        revision: "af9b315b92b61cc83f9fda50a1cd1331"
      },
      {
        url: "apps/sworkbox-cli/workbox-streams/utils/createHeaders.mjs",
        revision: "460172325dfc73368ccb094e6ccc5df2"
      },
      {
        url: "apps/sworkbox-cli/workbox-sw/_types.mjs",
        revision: "0b039d80c03d3650cdd5fb35e529e541"
      },
      {
        url: "apps/sworkbox-cli/workbox-sw/_version.mjs",
        revision: "0f8f612eb3e45124fce9d7ff77154d57"
      },
      {
        url: "apps/sworkbox-cli/workbox-sw/build/workbox-sw.js",
        revision: "1357b47798ccf4b55e87b5f57dfe76f1"
      },
      {
        url: "apps/sworkbox-cli/workbox-sw/controllers/WorkboxSW.mjs",
        revision: "f9264a4e3f614824854419b723032037"
      },
      {
        url: "apps/sworkbox-cli/workbox-sw/index.mjs",
        revision: "c3483ca69af201c057c9bd140c9c437e"
      },
      {
        url: "apps/sworkbox-cli/workbox-sw/package.json",
        revision: "a6fa632f54b1226d4e1987434430a2b3"
      },
      {
        url: "apps/sworkbox-cli/workbox-sw/README.md",
        revision: "102aa2a64ecfe6eff2da97754641b3ae"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/_version.d.ts",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/_version.js",
        revision: "21a424ce4471fd1b10c22b236856e878"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/_version.mjs",
        revision: "2f27db9b5c25f69b0aa068ed02c245ad"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-window/build/workbox-window.dev.es5.mjs",
        revision: "02aa71a184403ace07f4dd21e2da3b29"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/build/workbox-window.dev.mjs",
        revision: "87849ca8798f4cb0abc2f6d6339368ca"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/build/workbox-window.dev.umd.js",
        revision: "fef58de471309f92a30aee4ff75ca74b"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-window/build/workbox-window.prod.es5.mjs",
        revision: "1f992a28b9c09e414cfaf1b4e551d35e"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/build/workbox-window.prod.mjs",
        revision: "3c76591da5d584411830fe3c75b192e0"
      },
      {
        url:
          "apps/sworkbox-cli/workbox-window/build/workbox-window.prod.umd.js",
        revision: "0d89bd8faea7ecc6455b5d1c867d9f6b"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/index.d.ts",
        revision: "1b54df89e1781ac30535c7e18d7c876e"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/index.js",
        revision: "a40ab265ef85256bf70cfd1bc751ce34"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/index.mjs",
        revision: "580790679dbf8682b0b9fcf65de1c749"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/messageSW.d.ts",
        revision: "7f0978540b93632f4a97bd2ce4049680"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/messageSW.js",
        revision: "71819ff369df0599846c8962e0784800"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/messageSW.mjs",
        revision: "35348c9b130ab1739f89e8e04e0a8344"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/package.json",
        revision: "1e8bc1db0c397d79de69f3c0cc891db6"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/README.md",
        revision: "7f8dd5a65e5eed22de1791fd4b850af6"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/src/_version.ts",
        revision: "6313ec663b57804f0ea839bc207dc598"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/src/index.ts",
        revision: "38806605aed31e2fa862274dd95657d5"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/src/messageSW.ts",
        revision: "4587f0778b71ed46110349efa261110e"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/src/utils/urlsMatch.ts",
        revision: "4aff51d2491db37e6c3832d7715ec9f5"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/src/utils/WorkboxEvent.ts",
        revision: "3a718ad6dc03f5b87bc036c02f46a0fc"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/src/utils/WorkboxEventTarget.ts",
        revision: "703102eaeb901724c84b1403149b5e85"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/src/Workbox.ts",
        revision: "773236227d9faa3fe157d65599a5dfe1"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/tsconfig.json",
        revision: "2a8b10d0e4b5d415fb079a84282ea20e"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/tsconfig.tsbuildinfo",
        revision: "c6512948ff833bb28d5393155870976c"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/utils/urlsMatch.d.ts",
        revision: "6e09ef3cf3953f0f43b2532ce51ee86f"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/utils/urlsMatch.js",
        revision: "b80ff9865308bcc3107cebae57d0c9d2"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/utils/urlsMatch.mjs",
        revision: "ed8b9404fedd1d113c9107be028e7a11"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/utils/WorkboxEvent.d.ts",
        revision: "3083bc164fcc5a734b7a3d63cbacaa41"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/utils/WorkboxEvent.js",
        revision: "421038cb3071d3d742e91889b11d615c"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/utils/WorkboxEvent.mjs",
        revision: "809e2aeddcea2af3ae22fe68f4dfe938"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/utils/WorkboxEventTarget.d.ts",
        revision: "1ce3e05c30779096725bb25f4e972d4c"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/utils/WorkboxEventTarget.js",
        revision: "f4f65791085724d454df0a96a004a46d"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/utils/WorkboxEventTarget.mjs",
        revision: "f07200e0b3922c9bfac35636c3805377"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/Workbox.d.ts",
        revision: "997bb075e9bf85ab820ddf80d0789f45"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/Workbox.js",
        revision: "cbc9fd31d924e43ea4b44d0df1b64176"
      },
      {
        url: "apps/sworkbox-cli/workbox-window/Workbox.mjs",
        revision: "cb2ffacee606db6e81f1eff79c860fbb"
      },
      {
        url: "Workflows/Config.conf",
        revision: "21e63cb5891f0e8a081ffede474ea18f"
      },
      {
        url: "Workflows/Scripts/main.js",
        revision: "7e19cd19fda544a70510949e8ac6b5e2"
      },
      {
        url: "Workflows/Scripts/workflows.js",
        revision: "8650001fd9f15bede0e8defe63ecee1a"
      },
      {
        url: "Workflows/Templates/main.html",
        revision: "2e4e86f4852fa26a9a02e91bfce564c1"
      }
    ],
    {}
  );
});
//# sourceMappingURL=sw.js.map
