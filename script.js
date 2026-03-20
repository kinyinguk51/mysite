const app = document.getElementById('app');

// 建立頁面 HTML 結構
app.innerHTML = `
<div class="hero">
    <div class="petals"></div>
    <h1>🌸 倫敦賞櫻一日行程</h1>
    
</div>
<div class="nav-tabs"></div>
<div id="itinerary" class="section active"></div>
<div id="map" class="section"></div>
<div id="tips" class="section"></div>
`;

// 導航標籤（已移除相片按鈕）
const tabs = [
    {id:'itinerary', label:'📅 行程詳情'},
    {id:'map', label:'🗺️ 交通地圖'},
    {id:'tips', label:'✨ 賞花貼士'}
];

const nav = document.querySelector('.nav-tabs');
tabs.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'nav-tab' + (t.id === 'itinerary' ? ' active' : '');
    btn.textContent = t.label;
    btn.onclick = () => switchTab(t.id);
    nav.appendChild(btn);
});

// 標籤切換函數
function switchTab(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
}

// 行程部分
document.getElementById('itinerary').innerHTML = `
<h2 class="section-title">🌸 完整行程安排</h2>
<div class="timeline">
    <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-card">
            <div class="tl-time">10:00 - 11:15</div>
            <h3 class="tl-title">🌸 Ravenscourt Park 賞櫻</h3>
            <p class="tl-desc"><strong>地址：</strong>Ravenscourt Park, Hammersmith, W6 0UA<br><br>由主入口進入，前往<strong>籃球場附近</strong>欣賞那排著名的櫻花長廊。沿湖邊散步，感受靜謐的春日氛圍。光線在上午最柔和，是拍照的黃金時刻！<br><br><span class="badge badge-pink">盛開中</span><span class="badge badge-green">免費入場</span></p>
        </div>
    </div>
    <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-card">
            <div class="tl-time">11:15 - 11:45</div>
            <h3 class="tl-title">🚇 交通：District Line</h3>
            <p class="tl-desc">步行至 <strong>Ravenscourt Park 地鐵站</strong>（公園旁，2分鐘），乘搭 <strong>District Line 東行</strong>，在 <strong>Notting Hill Gate 站</strong>下車（約5站）。<br><br>從 Notting Hill Gate 站步行約8分鐘至 Stanley Crescent。</p>
            <div class="tl-transport">🎫 <strong>票價：</strong>約 £3.10（Oyster 卡）<br>⏰ <strong>時間：</strong>約29分鐘 | 每5分鐘一班</div>
        </div>
    </div>
    <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-card">
            <div class="tl-time">11:45 - 13:00</div>
            <h3 class="tl-title">🌸 Stanley Crescent 賞櫻</h3>
            <p class="tl-desc"><strong>地址：</strong>Stanley Crescent, Notting Hill, W11<br><br>這條私人住宅街道目前正以「全倫敦最上鏡的櫻花街」聞名。沿 Stanley Crescent 及附近的 Stanley Gardens 欣賞盛開的粉紅色櫻花。<br><br><strong>⚠️ 重要提醒：</strong>請尊重居民私隱，勿踏入私人土地，拍照後保持整潔。<br><br><span class="badge badge-pink">盛開中</span><span class="badge badge-yellow">熱門景點</span></p>
        </div>
    </div>
    <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-card">
            <div class="tl-time">13:00 - 14:15</div>
            <h3 class="tl-title">🍽️ 午餐時間</h3>
            <p class="tl-desc"><strong>推薦餐廳：</strong></p>
            <div class="restaurant-grid">
                <div class="restaurant-card"><h3>The Shed</h3><p>🌿 英式農場料理，距 Notting Hill Gate 站2分鐘，主打當季食材。</p></div>
                <div class="restaurant-card"><h3>Tavernaki</h3><p>🇬🇷 希臘菜，評分極高（4.7），價格適中。</p></div>
                <div class="restaurant-card"><h3>Honest Burgers</h3><p>🍔 美式漢堡，輕鬆隨意，Portobello Road 上。</p></div>
                <div class="restaurant-card"><h3>The Walmer Castle</h3><p>🍻 英式酒館餐館，氣氛輕鬆，評價4.7。</p></div>
            </div>
        </div>
    </div>
    <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-card">
            <div class="tl-time">14:15 - 14:35</div>
            <h3 class="tl-title">🚶 交通：步行</h3>
            <p class="tl-desc">從 Stanley Crescent 步行至 Kensington Gardens。<br><br><strong>路線：</strong>Stanley Crescent → Kensington Park Road → Notting Hill Gate → 進入 Kensington Gardens（Lancaster Gate 入口）</p>
            <div class="tl-transport">🚪 <strong>距離：</strong>0.8 英里<br>⏰ <strong>時間：</strong>17分鐘</div>
        </div>
    </div>
    <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-card">
            <div class="tl-time">14:35 - 16:00+</div>
            <h3 class="tl-title">🌸 Kensington Gardens 賞櫻</h3>
            <p class="tl-desc"><strong>地址：</strong>Kensington Gardens, London W2 3XA<br><br>由 <strong>Lancaster Gate 入口</strong>進入，即可欣賞入口處盛放的粉白色櫻花。沿園內小徑漫步至 <strong>Albert Memorial 南端</strong>——這裡有多棵「大型深粉紅色」櫻花樹，是全倫敦最壯觀的賞花點之一。<br><br>可在噴水池旁的長椅休息，欣賞宮殿景色。<br><br><span class="badge badge-pink">盛開中</span><span class="badge badge-green">免費入場</span></p>
        </div>
    </div>
</div>
`;

// 地圖部分
document.getElementById('map').innerHTML = `
<h2 class="section-title">🗺️ 交通地圖 & 路線</h2>
<div class="map-btns">
    <button class="map-btn active" onclick="changeMap(0)">🗺️ 完整路線</button>
    <button class="map-btn" onclick="changeMap(1)">🌸 Ravenscourt Park</button>
    <button class="map-btn" onclick="changeMap(2)">🌸 Stanley Crescent</button>
    <button class="map-btn" onclick="changeMap(3)">🌸 Kensington Gardens</button>
</div>
<div class="map-container">
    <iframe id="mapFrame" src="" allowfullscreen="" loading="lazy"></iframe>
</div>
<div class="tip-box">
    <h3>👉 快速提示</h3>
    <ul>
        >🚇 <strong>Oyster 卡</strong>或非接觸式付款最方便</li>
        >📱 下載 <strong>Citymapper</strong> app 查詢實時路線</li>
        >⏰ District Line 週末每 5 分鐘一班</li>
        >🚶 Stanley Cres → Kensington Gardens 步行僅17分鐘</li>
    </ul>
</div>
`;

// 貼士部分
document.getElementById('tips').innerHTML = `
<h2 class="section-title">✨ 賞櫻貼士 & 注意事項</h2>
<div class="tip-box">
    <h3>🌸 花況報告</h3>
    <ul>
        >截至3月18日，<strong>Ravenscourt Park</strong> 櫻花正值盛開</li>
        ><strong>Stanley Crescent</strong> 櫻花亦已全面綻放</li>
        ><strong>Kensington Gardens</strong> 入口處櫻花盛開中</li>
        >📅 3月21日應仍處於最佳觀賞期</li>
    </ul>
</div>
<div class="tip-box">
    <h3>📸 拍照貼士</h3>
    <ul>
        >上午光線較柔，Ravenscourt Park 早上效果最佳</li>
        >Stanley Crescent 在正午陽光下粉紅色最鮮艷</li>
        >帶備廣角鏡頭拍攝櫻花道</li>
        >使用人像模式拍攝背景模糊效果</li>
    </ul>
</div>
<div class="tip-box">
    <h3>⚠️ 重要提醒</h3>
    <ul>
        ><strong>Stanley Crescent</strong> 近日因遊客眾多引起居民投訴</li>
        >請保持禮貌，不要在私人範圍拍照</li>
        >勿堵塞行人道或車道</li>
        >不要折斷櫻花或踩踏草地</li>
    </ul>
</div>
<div class="tip-box">
    <h3>☀️ 天氣準備</h3>
    <ul>
        >3月倫敦天氣多變，建議帶備外套</li>
        >準備輕便雨具以防陣雨</li>
        >穿著舒適的步行鞋</li>
        >帶備水瓶和零食</li>
    </ul>
</div>
`;

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
    document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active
