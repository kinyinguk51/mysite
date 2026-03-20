const app = document.getElementById('app');

// Inject full page styles
document.head.innerHTML += `
<meta charset="UTF-8">
<title>倫敦賞櫻一日行程 — 2026年3月21日</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Noto Sans TC',sans-serif;background:#fff5f8;color:#3d2c35;}
.hero{background:linear-gradient(135deg,#ffb7c5,#ff8fab,#c9184a);padding:60px 20px;text-align:center;position:relative;overflow:hidden;}
.hero h1{font-size:2.5rem;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,.2);margin-bottom:8px;}
.hero p{color:rgba(255,255,255,.9);font-size:1.1rem;}
.petals{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;}
.petal{position:absolute;font-size:1.5rem;animation:fall linear infinite;opacity:.7;}
@keyframes fall{0%{transform:translateY(-20px) rotate(0deg);opacity:.8;}100%{transform:translateY(100vh) rotate(360deg);opacity:0;}}
.nav-tabs{display:flex;justify-content:center;gap:8px;padding:20px;background:#fff;box-shadow:0 2px 12px rgba(201,24,74,.1);flex-wrap:wrap;}
.nav-tab{padding:10px 20px;border:2px solid #ffb7c5;border-radius:30px;cursor:pointer;font-size:.9rem;transition:all .3s;background:#fff;color:#c9184a;font-family:inherit;}
.nav-tab.active,.nav-tab:hover{background:#c9184a;color:#fff;border-color:#c9184a;}
.section{display:none;max-width:900px;margin:0 auto;padding:30px 20px;}
.section.active{display:block;}
.timeline{position:relative;padding-left:40px;}
.timeline::before{content:'';position:absolute;left:15px;top:0;bottom:0;width:3px;background:linear-gradient(#ffb7c5,#c9184a);border-radius:2px;}
.tl-item{position:relative;margin-bottom:32px;}
.tl-dot{position:absolute;left:-32px;top:8px;width:16px;height:16px;background:#c9184a;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 3px #ffb7c5;}
.tl-card{background:#fff;border-radius:16px;padding:20px;box-shadow:0 4px 20px rgba(201,24,74,.08);border-left:4px solid #ffb7c5;}
.tl-time{font-size:.85rem;color:#c9184a;font-weight:700;margin-bottom:4px;}
.tl-title{font-size:1.15rem;font-weight:700;margin-bottom:8px;}
.tl-desc{font-size:.95rem;line-height:1.7;color:#5a4050;}
.tl-transport{background:#fff5f8;border-radius:10px;padding:12px;margin-top:10px;font-size:.9rem;border:1px dashed #ffb7c5;}
.photo-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;}
.photo-card{border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.1);cursor:pointer;transition:transform .3s;}
.photo-card:hover{transform:scale(1.03);}
.photo-card img{width:100%;height:200px;object-fit:cover;display:block;}
.photo-card-info{padding:12px;background:#fff;}
.photo-card-info h3{font-size:1rem;color:#3d2c35;margin-bottom:4px;}
.photo-card-info p{font-size:.85rem;color:#888;}
.map-container{border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(201,24,74,.12);margin-bottom:24px;}
.map-container iframe{width:100%;height:420px;border:none;display:block;}
.map-btns{display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;}
.map-btn{padding:10px 20px;background:#fff;border:2px solid #ffb7c5;border-radius:30px;cursor:pointer;font-size:.9rem;color:#c9184a;transition:all .3s;font-family:inherit;}
.map-btn.active,.map-btn:hover{background:#c9184a;color:#fff;border-color:#c9184a;}
.tip-box{background:linear-gradient(135deg,#fff0f3,#ffe4e8);border-radius:16px;padding:20px;margin-bottom:20px;border-left:4px solid #c9184a;}
.tip-box h3{color:#c9184a;margin-bottom:10px;font-size:1.1rem;}
.tip-box ul{padding-left:20px;line-height:2;font-size:.95rem;color:#5a4050;}
.restaurant-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px;}
.restaurant-card{background:#fff;border-radius:16px;padding:20px;box-shadow:0 4px 20px rgba(201,24,74,.08);border-top:4px solid #ffb7c5;}
.restaurant-card h3{font-size:1rem;font-weight:700;margin-bottom:6px;color:#c9184a;}
.restaurant-card p{font-size:.88rem;color:#5a4050;line-height:1.6;}
.badge{display:inline-block;padding:3px 10px;border-radius:20px;font-size:.78rem;font-weight:700;margin-right:6px;margin-bottom:6px;}
.badge-green{background:#d1fae5;color:#065f46;}
.badge-yellow{background:#fef3c7;color:#92400e;}
.badge-pink{background:#ffe4e8;color:#c9184a;}
.modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:1000;align-items:center;justify-content:center;}
.modal.open{display:flex;}
.modal-inner{background:#fff;border-radius:20px;max-width:600px;width:90%;padding:24px;position:relative;}
.modal-close{position:absolute;top:12px;right:16px;font-size:1.5rem;cursor:pointer;background:none;border:none;color:#888;}
.modal-inner img{width:100%;border-radius:12px;margin-bottom:16px;}
.section-title{font-size:1.5rem;font-weight:700;color:#c9184a;margin-bottom:20px;border-bottom:2px solid #ffb7c5;padding-bottom:10px;}
.progress-bar{background:#ffe4e8;border-radius:10px;height:8px;margin:8px 0;overflow:hidden;}
.progress-fill{height:100%;background:linear-gradient(90deg,#ffb7c5,#c9184a);border-radius:10px;transition:width 1s ease;}
</style>
`;

// Build page HTML
app.innerHTML = `
<div class="hero">
<div class="petals"></div>
<h1>🌸 倫敦賞櫻一日行程</h1>
<p>2026年3月21日 星期六 | 春天最美的一天</p>
</div>
<div class="nav-tabs"></div>
<div id="itinerary" class="section active"></div>
<div id="photos" class="section"></div>
<div id="map" class="section"></div>
<div id="tips" class="section"></div>
<div class="modal" id="photoModal">
<div class="modal-inner">
<button class="modal-close" onclick="closeModal()">×</button>
<img id="modalImg" src="">
<h3 id="modalTitle"></h3>
<p id="modalDesc"></p>
</div>
</div>
`;

//Nav tabs
const tabs=[{id:'itinerary',label:'📅 行程詳情'},{id:'photos',label:'📸 相片廚建'},{id:'map',label:'🗺️ 交通地圖'},{id:'tips',label:'✨ 賞花貼士'}];
const nav=document.querySelector('.nav-tabs');
tabs.forEach(t=>{const btn=document.createElement('button');btn.className='nav-tab'+(t.id==='itinerary'?' active':'');btn.textContent=t.label;btn.onclick=()=>switchTab(t.id);nav.appendChild(btn);});

// Itinerary section
document.getElementById('itinerary').innerHTML=`
<h2 class="section-title">🌸 完整行程安排</h2>
<div class="timeline">
<div class="tl-item"><div class="tl-dot"></div><div class="tl-card"><div class="tl-time">10:00 - 11:15</div><h3 class="tl-title">🌸 Ravenscourt Park 賞櫻</h3><p class="tl-desc"><strong>地址：</strong>Ravenscourt Park, Hammersmith, W6 0UA<br><br>由主入口進入，前往<strong>籃球場附近</strong>欣賞那排著名的櫻花長廊。沿湖邊散步，感受靜謐的春日氛圍。光線在上午最柔和，是拍照的黃金時刻！<br><br><span class="badge badge-pink">盛開中</span><span class="badge badge-green">免費入場</span></p></div></div>
<div class="tl-item"><div class="tl-dot"></div><div class="tl-card"><div class="tl-time">11:15 - 11:45</div><h3 class="tl-title">🚇 交通：District Line</h3><p class="tl-desc">步行至 <strong>Ravenscourt Park 地鐵站</strong>（公園旁，2分鐘），乘搭 <strong>District Line 東行</strong>，在 <strong>Notting Hill Gate 站</strong>下車（約5站）。<br><br>從 Notting Hill Gate 站步行約8分鐘至 Stanley Crescent。</p><div class="tl-transport">🎫 <strong>票價：</strong>約 £3.10（Oyster 卡）<br>⏰ <strong>時間：</strong>約29分鐘 | 每5分鐘一班</div></div></div>
<div class="tl-item"><div class="tl-dot"></div><div class="tl-card"><div class="tl-time">11:45 - 13:00</div><h3 class="tl-title">🌸 Stanley Crescent 賞櫻</h3><p class="tl-desc"><strong>地址：</strong>Stanley Crescent, Notting Hill, W11<br><br>這條私人住宅街道目前正以「全倫敦最上鏡的櫻花街」聞名。沿 Stanley Crescent 及附近的 Stanley Gardens 欣賞盛開的粉紅色櫻花。<br><br><strong>⚠️ 重要提醒：</strong>請尊重居民私隱，勿踏入私人土地，拍照後保持整潔。<br><br><span class="badge badge-pink">盛開中</span><span class="badge badge-yellow">熱門景點</span></p></div></div>
<div class="tl-item"><div class="tl-dot"></div><div class="tl-card"><div class="tl-time">13:00 - 14:15</div><h3 class="tl-title">🍽️ 午餐時間</h3><p class="tl-desc"><strong>推薦餐廳：</strong></p><div class="restaurant-grid"><div class="restaurant-card"><h3>The Shed</h3><p>🌿 英式農場料理，距 Notting Hill Gate 站2分鐘，主打當季食材。</p></div><div class="restaurant-card"><h3>Tavernaki</h3><p>🇬🇷 希臘菜，評分極高（4.7），價格適中。</p></div><div class="restaurant-card"><h3>Honest Burgers</h3><p>🍔 美式漢堡，輕鬆隨意，Portobello Road 上。</p></div><div class="restaurant-card"><h3>The Walmer Castle</h3><p>🍻 英式酒館餐館，氣氛輕鬆，評價4.7。</p></div></div></div></div>
<div class="tl-item"><div class="tl-dot"></div><div class="tl-card"><div class="tl-time">14:15 - 14:35</div><h3 class="tl-title">🚶 交通：步行</h3><p class="tl-desc">從 Stanley Crescent 步行至 Kensington Gardens。<br><br>路線：Stanley Crescent → Kensington Park Road → Notting Hill Gate → 進入 Kensington Gardens（Lancaster Gate 入口）</p><div class="tl-transport">🚪 <strong>距離：</strong>0.8 英里<br>⏰ <strong>時間：</strong>17分鐘</div></div></div>
<div class="tl-item"><div class="tl-dot"></div><div class="tl-card"><div class="tl-time">14:35 - 16:00+</div><h3 class="tl-title">🌸 Kensington Gardens 賞櫻</h3><p class="tl-desc"><strong>地址：</strong>Kensington Gardens, London W2 3XA<br><br>由 <strong>Lancaster Gate 入口</strong>進入，即可欣賞入口處盛放的粉白色櫻花。沿園內小徑漫步至 <strong>Albert Memorial 南端</strong>——這裡有多栫「大型深粉紅色」櫻花樹，是全倫敦最壯觀的賞花點之一。<br><br>可在噴水池旁的長椅休息，欣賞宮殿景色。<br><br><span class="badge badge-pink">盛開中</span><span class="badge badge-green">免費入場</span></p></div></div>
</div>
`;

// Photos section
document.getElementById('photos').innerHTML=`
<h2 class="section-title">📸 櫻花景點圖廊</h2>
<div class="photo-grid">
<div class="photo-card" onclick="openPhoto(0)"><img src="https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=600&fit=crop" alt="Ravenscourt Park"><div class="photo-card-info"><h3>Ravenscourt Park</h3><p>籃球場旁的櫻花長廊</p></div></div>
<div class="photo-card" onclick="openPhoto(1)"><img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop" alt="Stanley Crescent"><div class="photo-card-info"><h3>Stanley Crescent</h3><p>Notting Hill 著名櫻花街</p></div></div>
<div class="photo-card" onclick="openPhoto(2)"><img src="https://images.unsplash.com/photo-1491929007750-dce8ba76e610?w=800&h=600&fit=crop" alt="Kensington Gardens"><div class="photo-card-info"><h3>Kensington Gardens</h3><p>Lancaster Gate 入口處</p></div></div>
<div class="photo-card" onclick="openPhoto(3)"><img src="https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=600&fit=crop&brightness=-10" alt="Albert Memorial"><div class="photo-card-info"><h3>Albert Memorial</h3><p>深粉紅櫻花與紀念碑</p></div></div>
<div class="photo-card" onclick="openPhoto(4)"><img src="https://images.unsplash.com/photo-1459479622427-b2f171c762e0?w=800&h=600&fit=crop" alt="District Line"><div class="photo-card-info"><h3>District Line</h3><p>倫敦地鐵 District 線</p></div></div>
<div class="photo-card" onclick="openPhoto(5)"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop" alt="Lunch"><div class="photo-card-info"><h3>Notting Hill 餐廳</h3><p>享受美食與春天</p></div></div>
</div>
`;

// Map section with interactive buttons
document.getElementById('map').innerHTML=`
<h2 class="section-title">🗺️ 交通地圖 & 路線</h2>
<div class="map-btns">
<button class="map-btn active" onclick="changeMap(0)">🗺️ 完整路線</button>
<button class="map-btn" onclick="changeMap(1)">🌸 Ravenscourt Park</button>
<button class="map-btn" onclick="changeMap(2)">🌸 Stanley Crescent</button>
<button class="map-btn" onclick="changeMap(3)">🌸 Kensington Gardens</button>
</div>
<div class="map-container">
<iframe id="mapFrame" src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d9935.157843732826!2d-0.22!3d51.505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e3!4m5!1s0x48760e35c3b1b555%3A0x3502d01802df36a!2sRavenscourt%20Park%2C%20London!3m2!1d51.4952681!2d-0.2397876!4m5!1s0x48760fe3cd23c573%3A0x43c173c87e7e9736!2sStanley%20Crescent%2C%20London!3m2!1d51.5121449!2d-0.204234!4m5!1s0x48760550e0a7a33d%3A0x62eea98228b6b77c!2sKensington%20Gardens%2C%20London!3m2!1d51.506987!2d-0.179165!5e0!3m2!1sen!2suk!4v1234567890" allowfullscreen="" loading="lazy"></iframe>
</div>
<div class="tip-box">
<h3>👉 快速提示</h3>
<ul>
<li>🚇 <strong>Oyster 卡</strong>或非接觸式付款最方便</li>
<li>📱 下載 <strong>Citymapper</strong> app 查詢實時路線</li>
<li>⏰ District Line 週末每 5 分鐘一班</li>
<li>🚶 Stanley Cres → Kensington Gardens 步行僅17分鐘</li>
</ul>
</div>
`;

// Tips section
document.getElementById('tips').innerHTML=`
<h2 class="section-title">✨ 賞櫻貼士 & 注意事項</h2>
<div class="tip-box">
<h3>🌸 花況報告</h3>
<ul>
<li>截至3月18日，<strong>Ravenscourt Park</strong> 櫻花正值盛開</li>
<li><strong>Stanley Crescent</strong> 櫻花亦已全面綻放</li>
<li><strong>Kensington Gardens</strong> 入口處櫻花盛開中</li>
<li>📅 3月21日應仍處於最佳觀賞期</li>
</ul>
</div>
<div class="tip-box">
<h3>📸 拍照貼士</h3>
<ul>
<li>上午光線較柔，Ravenscourt Park 早上效果最佳</li>
<li>Stanley Crescent 在正午陽光下粉紅色最鮮艷</li>
<li>帶備廣角鏡頭拍摄櫻花道</li>
<li>使用人像模式拍摄背景模糊效果</li>
</ul>
</div>
<div class="tip-box">
<h3>⚠️ 重要提醒</h3>
<ul>
<li><strong>Stanley Crescent</strong> 近日因遊客眾多引起居民投訴</li>
<li>請保持禮貌，不要在私人範圍拍照</li>
<li>勿堵塞行人道或車道</li>
<li>不要折斷櫻花或踩踏草地</li>
</ul>
</div>
<div class="tip-box">
<h3>☀️ 天氣準備</h3>
<ul>
<li>3月倫敦天氣多變，建議帶備外套</li>
<li>準備輕便雨具以防陣雨</li>
<li>穿著舒適的步行鞋</li>
<li>帶備水瓶和零食</li>
</ul>
</div>
`;

// Interactive functions
function switchTab(id){document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('.nav-tab').forEach(b=>b.classList.remove('active'));event.target.classList.add('active');}

const photoData=[{title:'Ravenscourt Park',desc:'籃球場附近的櫻花長廊，沾湖邊散步，感受靜謐的春日氛圍。',img:'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=600&fit=crop'},{title:'Stanley Crescent',desc:'倫敦最上鏡的櫻花街，粉紅色櫻花與白色房屋完美對比。',img:'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop'},{title:'Kensington Gardens',desc:'Lancaster Gate 入口處的櫻花，大片粉白色花海。',img:'https://images.unsplash.com/photo-1491929007750-dce8ba76e610?w=800&h=600&fit=crop'},{title:'Albert Memorial',desc:'深粉紅櫻花樹與紀念碑，倫敦最壯觀的賞花點。',img:'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=600&fit=crop&brightness=-10'},{title:'District Line',desc:'搭乘倫敦地鐵 District 線往返各景點。',img:'https://images.unsplash.com/photo-1459479622427-b2f171c762e0?w=800&h=600&fit=crop'},{title:'Notting Hill 美食',desc:'在 Notting Hill 享受美食，補充體力。',img:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'}];

function openPhoto(idx){const d=photoData[idx];document.getElementById('modalImg').src=d.img;document.getElementById('modalTitle').textContent=d.title;document.getElementById('modalDesc').textContent=d.desc;document.getElementById('photoModal').classList.add('open');}

function closeModal(){document.getElementById('photoModal').classList.remove('open');}

const mapUrls=['https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d9935.157843732826!2d-0.22!3d51.505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e3!4m5!1s0x48760e35c3b1b555%3A0x3502d01802df36a!2sRavenscourt%20Park%2C%20London!3m2!1d51.4952681!2d-0.2397876!4m5!1s0x48760fe3cd23c573%3A0x43c173c87e7e9736!2sStanley%20Crescent%2C%20London!3m2!1d51.5121449!2d-0.204234!4m5!1s0x48760550e0a7a33d%3A0x62eea98228b6b77c!2sKensington%20Gardens%2C%20London!3m2!1d51.506987!2d-0.179165!5e0!3m2!1sen!2suk!4v1234567890','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d-0.2397876!3d51.4952681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e35c3b1b555%3A0x3502d01802df36a!2sRavenscourt%20Park!5e0!3m2!1sen!2suk!4v1234567890','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9!2d-0.204234!3d51.5121449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fe3cd23c573%3A0x43c173c87e7e9736!2sStanley%20Crescent!5e0!3m2!1sen!2suk!4v1234567890','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8!2d-0.179165!3d51.506987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760550e0a7a33d%3A0x62eea98228b6b77c!2sKensington%20Gardens!5e0!3m2!1sen!2suk!4v1234567890'];

function changeMap(idx){document.getElementById('mapFrame').src=mapUrls[idx];document.querySelectorAll('.map-btn').forEach(b=>b.classList.remove('active'));event.target.classList.add('active');}

// Falling petals animation
function createPetals(){const petalsContainer=document.querySelector('.petals');for(let i=0;i<15;i++){const petal=document.createElement('div');petal.className='petal';petal.textContent='🌸';petal.style.left=Math.random()*100+'%';petal.style.animationDuration=(Math.random()*3+5)+'s';petal.style.animationDelay=Math.random()*3+'s';petalsContainer.appendChild(petal);}}
createPetals();

// Click outside modal to close
document.getElementById('photoModal').onclick=function(e){if(e.target.id==='photoModal')closeModal();};

console.log('🌸 倫敦賞櫻一日行程 — 歡迎！');


// 修正地圖 URL
const fixedMapUrls = [
  'https://www.google.com/maps?q=Ravenscourt+Park,London+to+Stanley+Crescent,London+to+Kensington+Gardens,London&output=embed',
  'https://www.google.com/maps?q=Ravenscourt+Park,London&output=embed',
  'https://www.google.com/maps?q=Stanley+Crescent,Notting+Hill,London&output=embed',
  'https://www.google.com/maps?q=Kensington+Gardens,London&output=embed'
];

// 更新 changeMap 函數
window.changeMap = function(idx) {
  document.getElementById('mapFrame').src = fixedMapUrls[idx];
  document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
};

// 預設加載第一個地圖
document.getElementById('mapFrame').src = fixedMapUrls[0];
