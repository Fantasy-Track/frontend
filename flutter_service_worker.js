'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ced50175170d6f274de6934592c4cf1b",
".git/FETCH_HEAD": "212a424507fbda204cc22a4f4780b426",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/ORIG_HEAD": "e5ae4803368e78d5cfbf88852a2d06ed",
".git/config": "b63a121a28dd74dedf2a1eafab0ddffd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "53e26d384351ec70ee15c27d36499ca1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b5086b656292b590e12847c3370b0235",
".git/logs/refs/heads/master": "2672fbd494f7770180259e5ead40d4bd",
".git/logs/refs/remotes/origin/master": "ec128ffdb4241f09623b8c3c68363624",
".git/objects/0a/91c744dc0fd097439bab6932cc7446454772d1": "2217b95ab02f11c8fa0dcb5106ff627f",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/9cd25c958ffb03ada43739a45d631ee3b8d2d4": "69d9b3cf3f41496ed7435b2694c64391",
".git/objects/17/197201dc114939da2926f7441d203fb0f70e44": "11ebded0bbece0ad29e948ee005e3d8b",
".git/objects/19/25041cbd72471dd3f62d8000de05dd97f1757f": "46cbda7c49307d58b5107f6ac114e25f",
".git/objects/19/6104e173136f00389b3bc26b286e2c158e4719": "79eac3e7b1c534c71a3387d138cfce0b",
".git/objects/1a/7f3b0bba45b7470a4240c3ec67595eeeb02192": "ac15319d47a37f9c7a950395d0777c21",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/868fef9a6037db297db1594b89388d73f1746e": "2b13cdd566f129e8e691f285fb1df5a0",
".git/objects/24/d3e8e39e0c359cde785db8e5add051ba82a1b5": "bd49e2224a7276a732a9829d12d91a37",
".git/objects/26/239f54e330c04718c6ac7b3aa5a5d6f136345d": "39e101bc214a0c13c716b93248cc601b",
".git/objects/28/ec548af9fecb5bcec45b1cc188c4f0494a46f2": "1f53ec65a0f6c40ba6e7b600d27a7bcd",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2a/d563efff6677432f1ebacf26ea91ecc38cc96f": "f52b580c511031f08046a0ce6a3c4fc6",
".git/objects/2c/2bcfa07c189ff41fbec779ed5dd5d74b303b20": "f5546571b7d54a67bc765d2456d6874f",
".git/objects/2c/4410483d3f5322dc8d36587ffbae2e2c0e4b77": "f5beaff3a92bade60b89bf036e405f98",
".git/objects/2d/774a88b24b04d99edafe931fa6000a6d652ccc": "97b6196b17678bd9602d336febffe928",
".git/objects/2d/d76a800d0ed818cb165711da32c577263d9687": "61ce527ffd3cd149e7b38e119cf9bc0c",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/30/50bbbde5d60d0531cfcadb8dbd0025f2afc239": "8e282759f5cb97a8470d277be061a9d5",
".git/objects/31/e447004763a64048779fa128711d1e55933209": "86a24e81c5f9f0340b2579a7269cce49",
".git/objects/31/e6d8257d0f72a5e6daebb9cb696b279819ac61": "f5f9c883a19f100960eb6f486f6b75ca",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/35/b468f9a0c946779aa49ad058f9d94952475da4": "e11a1add3b063d5572f1ead058ca1ccd",
".git/objects/38/4196ede59e5ea942a57653f719daec536730be": "0e0a095712236a4a639f03796afb1f27",
".git/objects/39/478ed3c18e6f543980b8c49d9e01b383ac33cd": "d47fd9576930d3be298b85e22ed40dcd",
".git/objects/3a/5d9777a8eed922fa828003ced96c82de254e20": "20c8870f7fb05e0e1531d67158d0ee4c",
".git/objects/3d/a9da93c1a14fe7ec87d7242e38bf3fe27c3809": "073c684577d6f561b5501ac2260d5595",
".git/objects/3e/b22f5f6e522060a1608ce01eaa1ce084a94ef8": "79ee31d5bdbd9aafb95c8d890c2ad148",
".git/objects/47/4744da2c636603993c9ba2a1181ecfbe76612c": "38e91639a0212f4bf45835971cccba8f",
".git/objects/4b/88955ffc12fe4890a8a87cf3989e42478bbc85": "7d21754f274c67c183bb154036c4c5a9",
".git/objects/4d/40dd04cdefe7ac914070e010ae639759878574": "e4393f53f6bad1b8a8c91ec41a918647",
".git/objects/4d/4c828ca45adb4704a5df50c62b31a31ff46fe5": "b2d5b9fbf2e390719de5010e9285cd7a",
".git/objects/4d/f9e17140b1575d5b93ccdf77220b0241468d31": "480c4173889c55a98ccee31279ef272c",
".git/objects/4e/53b51a8750211ae487ca62fdab73f6276d4da1": "8aec1fe826893175e63dae3014e70d52",
".git/objects/4f/7494fbb7f1cea0be90add749126258c5d38d4e": "0ad446c83347b0f8e2f27d26efdba827",
".git/objects/4f/d530c9ced3a28be7bc1c24870c6b9a7529e60b": "bddcec5f6a11a8a34d740975d1c40595",
".git/objects/50/2719cef9cda5131b048b3dd0ca352a167213c9": "de31337ef68515fb4b5f934a861cce7c",
".git/objects/50/cc3f881f641f763b55bb2f6854f7029b666b36": "ee0875c7cba60bd94e486b95d7128fc9",
".git/objects/52/1aa8c79b6febfd990c582c55244aaa4bbb3291": "b63ce2562e2987d8a8be66608121c962",
".git/objects/53/2ee5e13ec05aebcb86371bf3c1c34a11849e2e": "3738219e88f14ed0d4f95fc11177c6bd",
".git/objects/55/1d6e7bfe323ae717c1c0ebff215f90604432a3": "e97b09b40e800a77ef00ca8ebd2299bd",
".git/objects/55/e8c3d6208b6368e9bdebab71037871558ac6ab": "e17de9aaaef4e8e30d607cd4717774e2",
".git/objects/56/09829b3a76151f349094162daca20dfbb03445": "22dcde7b2d4f67128411f07dbd59f038",
".git/objects/56/20918f3b6dc7fe93b08619fe577cd050d500fe": "b7a59acd7463975f9d4e3a0ce1a5d0be",
".git/objects/57/a179a96d645acb03d79b43de4e0c8cacf95903": "0f7ebd8a3b734b29487a3606f0e4e155",
".git/objects/57/e296cb6c993e317d07ed02c49f74463c0a620c": "5951084d230f3faea5538c9f577bced9",
".git/objects/5a/2b3117d94f0f7a7d824c63dd0da5516dec7576": "9ba65799173cd62ee98277e4da77140e",
".git/objects/5b/dfedcbb1c842d646c842f87476549fc3877495": "32ec24a8ac42b6cf2225b233e779d41d",
".git/objects/5c/3af81ac93ade950672e08185685b62319da07e": "45e73090978b565ab26bb17f4dede994",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/60/76d9b734cf842b1e25ba03ad1dbc16f75dcbdb": "49fff3f6e16a9ab3bc766cfa2c2e09d9",
".git/objects/64/8ffed95c52a239b89db5159ca5f728daa6ae52": "932822d652cc0f9c4e215891a5e21452",
".git/objects/66/d44519357292f7a066c82d4a31a5b89e27464b": "492ad978c5732b7fec7f2805340464eb",
".git/objects/67/6e181f3f4cc6cd66f500ac66239218edce18c9": "d0cba77ec30c983d389f5295e4a5cced",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/69/70c814ee0c066d83fef4fb6a2bcb63d6657036": "6cecbb2979ed0a1f189878a10211b488",
".git/objects/6b/af1964960b7946199fa0cec490d8f26bd27552": "d717a7ee5c60cd25e7748ed78b8090cd",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/85c1266b249452bf51953eb718606e980b0509": "5dc216416b175bde69da413f4220ae3b",
".git/objects/6d/9e74ed750a3721df9a332472474495719f7fe6": "40e3afe9ee9696d976d18f79ff82b519",
".git/objects/6e/4877dd7ca10a4b33d9944d95afa3a6ca8aa678": "8e237bc4f4eef4dabb0dd1eed59befff",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/74/67726db45c604ceb27199c4d0b1245e6aa0578": "8ca910e4d185c3bf6aab1c3ffc87eb2c",
".git/objects/74/7e679005c782680e439f2b5f39c38c651caaf6": "f1c06a99d06aa349dd8fb1e7fbbf1e50",
".git/objects/74/b51dc0b06a1d16d175fa9593efea771f84ebc4": "0b5ca8825ad1413cd6e5b10fb41c70b2",
".git/objects/76/3ab9968e3630e6bfe5caaa09f7b9f5cc51b2e7": "891cf24d55704fa074bae8004c5f5dfe",
".git/objects/77/bcaed94b1f0a56269d7e51e50c63a830c42881": "3a24a8d1bac9dacd6434cbeca3a2a2d8",
".git/objects/7c/4858c97f7042bce1906f01815c93d87df86dbe": "0838080703306621555360b33b759c51",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/7e/eb0a497e82e9f8e1d6ae7571e851fbd4df42a5": "759c18806fe2d3c59817ce66024b602c",
".git/objects/80/2d50e72a11da3595cf6c565c238255ebb31e4e": "7b5dd0556df5b35f13e0c09cdd5676e4",
".git/objects/80/ab94c0cb59f13d09d630791c6d80ccee7c2f1d": "09a46430e9f26b43fea5bb808e1a1950",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/82/86f4bfc037343653e49eae5a0f91c0c328a4cb": "7388b3884d6caf1d95f71b468684ca3a",
".git/objects/83/af9cd64646d49c1113ab42af51a7251c3450df": "d48fa312077cd98c249195e6965479da",
".git/objects/86/6e56ee9a05db2011d93f5bfb357c3fc5b281de": "b8c9db02b132165719243330fffb7616",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bfb0d4c8201e84f7f7c55e4e96ec17fb516254": "d88ce522b283b920ef20088c658598be",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/644ce617f36c4108da32a68a66cdad2d1ccc97": "b66f93af63be4a8ee77e8f46577a2705",
".git/objects/8f/0dff1170927b6f38dcb550aa4c1d2fd749e0aa": "a8b97ab2612b014c987b13f7e070de7f",
".git/objects/8f/bd375e032c25eed0d356ec3f56998dbe021f7e": "47bee3b702388123ff2a654c96670a0e",
".git/objects/90/cafd5dfe3303ce99ff3a8d8ddb9962b7f45dd4": "c29d347bfe6930327e75f4f5dbc22c79",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/97/7794a1002eb5ac95369bb730ac824a82c1c170": "4f9543af10a53bcaf24163ff3ff8f0bc",
".git/objects/97/bf8045697870ad02e588dc561108b388ee8b75": "51a9f9a2071ad51ad6a7bad494ae71b1",
".git/objects/99/0cea6427002655cb54b86d6a261ea6b8407a21": "056939b89bf92f6f622b147da3425416",
".git/objects/99/6b9c2946e86ac8a897c3b27b6705e7e947af3f": "b61c5f9bd3e0dc03e4cfb2b5c05978b3",
".git/objects/9a/235221d76331339018d3bc7b1ba9142eef53b5": "e14a85175434c68a739994b7898b5073",
".git/objects/9e/5e2bcb5529a157626f83a9222be3b8259c364c": "d26dae77ecd98f552612a386a5bb4a67",
".git/objects/9f/d5624a08fb6ec2939e2f4a333c39907bc16169": "bee0c9f29bddb0a01420a04a10cef543",
".git/objects/a0/35e3bb14fa30a924a2e3abc9abd159454061ac": "92dfe2c161bea7095a2a321c124be754",
".git/objects/a2/dec0ee60fad1dffdbb47046fb1fd76011b3b81": "73a33b38e19e1f2e4efff39fbe7aeb84",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a4/c42e12b4338ba3a2e17688bc36f8f76b352e25": "77d105596f1af56540813cae4d2ce0bb",
".git/objects/a7/4d5287275441d605fdd86a83d72140ea3257b6": "8a1c067a3ed1d2521d1030fb3dd8a912",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/e7ca7c4c158a35a41ce9b78103033c8ba2941e": "59eee79967494b1e40093cd4d5648fd4",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/fe0792df810e81b9516ecfec83297c0322ec14": "c857c9097011e0aab705606dbc25a768",
".git/objects/ab/a8c3a6d5b2a11f0d9e792a29305ac6901bb687": "eb282d5e37ad93c5f0f42fe11d3707e6",
".git/objects/ac/107c0da086227f67594cf5f447cc466732e1f7": "115406d122c4103e9227739a80160073",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/bb563df39172ed14f1a1e2ab076749d432b608": "ce67d76f949bf1fea8410900f9991c9e",
".git/objects/af/3e4ce9706679756d9e5396ab1bea1cdad0f7e1": "544e672539e2d6c76ff6d612c8d8bfae",
".git/objects/b2/a88a0ef60a298b397f44451b0412efcae011c0": "aa27ae8899c35b80fd2e3f6e9e3722fd",
".git/objects/b4/591a8413992f98cb92d810eeb2dca0c4bc7c5e": "585292393aa3a10cf400812ea0a8b698",
".git/objects/b5/eebc812d6bb83f2c60fc84548d4372d34e82a6": "a7398b689a96ae63526e79b1fd32affb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5ba8d0d61609b305186ac7a8db90ff694cf891": "ba503397f3a3f733c4648e69fe9911db",
".git/objects/ba/0db1fc95304c3e977e4f948acd97dc0ce26e11": "bf232799460ba88e440a321e51b6decc",
".git/objects/bb/4b1620932e8f3346c19ad8ec4ff19cc792a69f": "f656d401faff369133b3eb1fdf305dd7",
".git/objects/bc/6b33c35e3649934acd73d73de4939af5655f3b": "fc7048c0ecc7047bf89edf9e5a16d980",
".git/objects/bd/c077bcec1f12be6ff83cbca070b67111f9b238": "eb651b9208d3a134c035f10e5f70613a",
".git/objects/be/002df30724b2ea67272a23803d07574f1166ae": "1b3d78159b6d6fcb07081cdaf6f3a49a",
".git/objects/bf/d9fa6812cee6f7d8516a95324338673e1dfee4": "47e417cd2f0e97e8536b22bed11e1673",
".git/objects/c5/709521be7552aaeb2d00330863ae08c4c8ef84": "ccd8e9ba66fe9bcfb723ebeeb2a3713c",
".git/objects/c6/27e7672dd8967723bafe2506fb4409b21c5b1d": "672dc793aaf42c5d56cd4fb4b91efcb1",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/cb/e4a31c8883fafdaf0613641ce9f68f71c7f936": "692e51cdcf8a3aef782919bc457f7c7c",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/0b24e38577da02824496c29e251d20ca17c70b": "7691dd5cfd712bbbf6163ddb336ab896",
".git/objects/ce/4d527e50961a779531fd019e210f4f13576c67": "f821e277a5b9ee69aba159b1e07059b7",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d0/4bbe625b5a8d2f62002f45655c438c4eba79db": "c20949a8c8171bd9a19debd088d58b48",
".git/objects/d1/a8f7841eac0c4f931eed66aa3746fa6561dd10": "c1aaa434923126615919c96ca173658b",
".git/objects/d4/17117ab4a557332f6975d04ff7f175864e27ba": "ba2362c34b900fe49afcb994a8deb2ae",
".git/objects/d5/45508975b9e6d0cc34fbaf499a4d67ef1b010e": "a41acb3e7027457d88b99ea68f750fdb",
".git/objects/d5/76d517ab4cd71dd3c0aebb6623dac8bdf968ab": "8839bc0fc0c1f0dd74eb5f9814878ddb",
".git/objects/d7/1452b452be4e05aab61737b615fec50a04d29b": "e68f624c8325e1b7991b05fcfa2e5c96",
".git/objects/d7/cc7a0e7f1c603a843efccf03fc903c4243e86d": "0f395064188e272be680002a99427d89",
".git/objects/d8/f88dd165063dec44419a239d81c30502d812f3": "ad101632ca8a8eff4f48419c9c2aa655",
".git/objects/de/c1229c987176c0463527b632ca4e609f9e8a5a": "97ef7470c727c5edc7b0a4757262839e",
".git/objects/e1/05fb331df0330519e3a17ee1df2433e67d65dd": "109059b6b4b4fb701c107857f5e520e5",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/ed/4608e186de67421d4fc83aedcef04f1179804d": "afa5d1205c8b98f2dc9966cde40ca4c7",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f6/065cc774791089f6c8537818b8cb6d25f8fddf": "eb68a9bfb7d4bfae7b49517dbb6a367e",
".git/objects/f6/e2ca9195823823a3d78b31d70e46d657f8d742": "324f738d6622342737c65e5fb87cd1ac",
".git/objects/f8/c842c0413213f07ce53648ac2e71a0e80c0ffc": "8dcd85ddb54f80606874843afc145af5",
".git/objects/f9/ea3479d559eeba581ad7b0df06956fd36f7998": "6cbcd3c51e6e8ae9970008375f312944",
".git/objects/fb/3de73df6632ae8a09ee024e5aee0658ad52f24": "597430c78403bdb7f8a945d4aea5a9d5",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/fd/82cac5a21425b74a387b63ad99da9662e952e4": "38f4fb2bceb14cd11d23b582da3340e7",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "cb3e031da9fc97117def4f995458d75f",
".git/refs/remotes/origin/master": "cb3e031da9fc97117def4f995458d75f",
"CNAME": "7f3e65768ea11c22c8d34492efb6782d",
"assets/AssetManifest.json": "d5ada6aeb8655e35e44293c2f960a769",
"assets/FontManifest.json": "326422628f2a3d679950325f752ce65b",
"assets/NOTICES": "4017453d6853746a443a73ebc73f2a62",
"assets/assets/AthleticNet_Gradient.png": "bb92124b5d60d0ed4e0ebd14c09b54fc",
"assets/assets/athletic_net_icon.png": "99289a5f8cef09b77f0ddf7bad3fb130",
"assets/assets/background.png": "c4dd1d24870d3ded68903e81a84a8f91",
"assets/assets/fantasytrack.cer": "98d11920fe2e94499f6cbb2f1e5d4bdb",
"assets/assets/points-template.png": "cfe45b3f660374751e1dc199d99675f8",
"assets/assets/trophy.png": "33067037edd5eec6726e9254070a67d2",
"assets/assets/turn_notification.wav": "d9f97f6ad8181b8404ffeac6c8812b46",
"assets/fonts/AppIcons.ttf": "d965216330fefd30e974cbb4fc92c190",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Proxima-Nova-Bold.otf": "72b6f2c9990bd3d37b8013a59ed78902",
"assets/fonts/Proxima-Nova-Regular.ttf": "feface72008e6857da27f939e1eceffa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_auth_buttons/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/flutter_auth_buttons/fonts/SF-Pro-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"assets/packages/flutter_auth_buttons/graphics/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_black.png": "9beaf6539a3cff54ae8da57e86af4ad4",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_white.png": "37fd17b6b4006b45d337e5f875fd45f6",
"assets/packages/flutter_auth_buttons/graphics/flogo-HexRBG-Wht-100.png": "5037e86e017c472bb7f66d991a97d57a",
"assets/packages/flutter_auth_buttons/graphics/google-logo.png": "6937ba6a7d2de8aa07701225859ae402",
"assets/packages/flutter_auth_buttons/graphics/ms-symbollockup_mssymbol_19.png": "0c29638c7558632a1a5f053d344405ba",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "9d868ca85842f8aabe48f4ba4af1019b",
"firebase-messaging-sw.js": "dd711b29c7bc20a2f32e6964c2f69480",
"icons/Icon-192.png": "27d25ff57f9ed47be6cd9400d076c444",
"icons/Icon-512.png": "605181dc02d7fa0a97a9935a901d323e",
"index.html": "99f29da999d153ab1487bac3a6f0590a",
"/": "99f29da999d153ab1487bac3a6f0590a",
"index.html.tmpl": "67da89aab5e5ed57fb74ae91b0557dc1",
"main.dart.js": "0c8645482483d00bbbf4bc7bc4e669c3",
"manifest.json": "f730a5cf77d7a5e8e158451aa3d5322b",
"version.json": "2a54297ceb57f4ed4a1d02bcfcb6cf62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
