/* ==========================================================
   WEBSITE TRI ÂN MẸ - XỬ LÝ HIỆU ỨNG VÀ TƯƠNG TÁC
   Chỉ cần sửa phần CONFIG bên dưới để thay đổi nội dung.
   ========================================================== */
(() => {
  'use strict';

  /* ========================================================
     1. CẤU HÌNH NỘI DUNG  (khu vực bạn sẽ chỉnh sửa nhiều nhất)
     --------------------------------------------------------
     - {me} sẽ được thay bằng momName (viết thường)
     - {Me} sẽ được thay bằng momName (viết hoa chữ đầu)
       Ví dụ muốn gọi là "má": đổi momName thành "má".
     ======================================================== */
  const CONFIG = {
    // Cách gọi mẹ: "mẹ", "má", "mạ", "mami"...
    momName: 'mẹ',

    // Tiêu đề chính và lời giới thiệu
    title: 'Gửi {me}, người chúng con yêu',
    intro: 'Có những lời yêu thương con vẫn chưa kịp nói. Hôm nay, con muốn dành riêng cho {me} một góc nhỏ này.',

    // Chữ trên nút mở thư
    buttonText: '{Me} ơi, hai chị em con có điều muốn nói...',

    // Các lời nhắn bay khắp màn hình (thêm, bớt hoặc sửa tùy ý)
    messages: [
      '{Me} là điều tuyệt vời nhất mà con có.',
      'Cảm ơn {me} vì đã luôn yêu thương con vô điều kiện.',
      'Con có thể lớn lên, nhưng vẫn luôn là đứa trẻ của {me}.',
      'Mong {me} luôn khỏe mạnh, bình an và thật nhiều niềm vui.',
      'Con không giỏi nói lời yêu thương, nhưng con yêu {me} rất nhiều.',
      'Cảm ơn {me} vì đã luôn là nhà, là nơi con muốn trở về.',
      'Nếu được lựa chọn, con vẫn muốn làm con của {me}.',
      'Con thương {me} nhiều hơn những gì con có thể nói thành lời.',
      'Cảm ơn {me} vì những bữa cơm giản dị mà ấm cả một đời.',
      'Cảm ơn {me} vì đã thức khuya dậy sớm vì con.',
      'Dù con đi đâu, lòng con vẫn nhớ đường về với {me}.',
      'Cảm ơn {me} vì đã tin con cả khi con không tin chính mình.',
      'Chỉ cần {me} cười, con thấy cả thế giới sáng lên.',
      'Bình yên của con là những lúc được ngồi cạnh {me}.',
      'Đến lượt con lo cho {me} rồi, {me} nghỉ ngơi một chút nhé.',
      'Con mong {me} ăn ngon, ngủ yên và luôn thật vui.'
    ],

    // Ảnh kỷ niệm. src: đường dẫn ảnh, ví dụ 'images/anh1.jpg'.
    // Để src là '' thì hiện khung minh họa hình trái tim (chưa có ảnh vẫn chạy bình thường).
    // Mỗi dòng là một ảnh. Thêm bao nhiêu dòng cũng được (càng nhiều ảnh, màn hình càng sinh động).
    // Nhiều ảnh cùng lúc trôi trên màn hình (điện thoại tối đa 4, máy tính tối đa 6),
    // nhưng không bao giờ nhiều hơn số ảnh bạn khai báo ở đây.
    // Ví dụ ảnh thật:  { src: 'images/hai-chi-em.jpg', caption: 'Hai chị em mình' },
    photos: [
      { src: 'images/anh1.jpg', caption: 'Hai chị em mình' },
      { src: 'images/anh2.jpg', caption: 'Ngày con còn bé' },
      { src: 'images/anh3.jpg', caption: 'Yêu {me}' },
      { src: 'images/anh4.jpg', caption: 'Mẹ mình đấyy' },
      { src: 'images/anh5.jpg', caption: 'Nụ cười của {me}' },
      { src: 'images/anh6.jpg', caption: 'Vẫn là {me} chúng mình' },
      { src: 'images/anh7.jpg', caption: 'Yêu {me}' },
      { src: 'images/anh8.jpg', caption: 'Yêu {me}' },
      { src: 'images/anh9.jpg', caption: 'Yêu {me}' },
      { src: 'images/anh10.jpg', caption: 'Thương {me} nhiều' },
      { src: 'images/anh11.jpg', caption: 'Thương {me} nhiều' },
      { src: 'images/anh12.jpg', caption: 'Thương {me} nhiều' },
      { src: 'images/anh13.jpg', caption: 'Thương {me} nhiều' },
      { src: 'images/anh14.jpg', caption: 'Thương {me} nhiều' }
    ],

    // Các bức thư: mỗi phần tử là MỘT khung thư riêng, có nút chuyển qua lại ở đầu thư.
    // Nhà có hai chị em nên mặc định có 2 thư. Muốn thêm hoặc bớt thư thì thêm/bớt một khối { ... }.
    //   tab        : chữ trên nút chuyển thư
    //   title      : dòng chào đầu thư
    //   paragraphs : các đoạn văn (mỗi phần tử là một đoạn)
    //   signature  : chữ ký cuối thư;  childName: tên người viết (để '' nếu không muốn hiện)
    letters: [
      {
        tab: 'Thư của chị',
        title: 'Gửi {me} yêu thương của con,',
        paragraphs: [
          '{Me} ơi, con không giỏi nói những lời ngọt ngào, nên hôm nay con viết ra đây để {me} có thể đọc đi đọc lại bất cứ lúc nào {me} muốn.',
          'Con biết những năm tháng qua {me} đã lặng lẽ hy sinh rất nhiều: những bữa cơm thịnh soạn {me} nấu cho chúng con, những đêm {me} thức muộn khi con mệt, những lần {me} giấu đi sự mệt mỏi để con thấy {me} vẫn mạnh mẽ. Hồi nhỏ con chưa hiểu hết, lớn lên rồi con mới thấy mình đã được yêu thương nhiều đến nhường nào.',
          'Là chị, con luôn cố gắng làm gương và chăm lo cho em. Nhưng con biết mọi điều con biết làm đều là con học từ {me}: cách yêu thương, cách nhường nhịn, cách âm thầm lo cho người khác. Cảm ơn {me} vì đã dạy con những điều ấy.',
          'Cảm ơn {me} vì đã dạy con biết sống tử tế, biết đứng dậy sau vấp ngã, và biết rằng dù thế giới ngoài kia có rộng lớn đến đâu, vẫn luôn có một nơi để con trở về. Nơi đó là {me}.',
          'Con xin lỗi vì những lần con cáu gắt, những lần con bận rộn mà quên hỏi han {me}. Con hứa sẽ gọi điện nhiều hơn, về thăm gia đình nhiều hơn. Điều con mong nhất chỉ giản dị thôi: mong {me} luôn khỏe mạnh, bình an, ăn ngon ngủ yên và có thật nhiều niềm vui mỗi ngày.',
          'Con thương {me} nhiều hơn những gì con có thể nói thành lời. Nếu được lựa chọn, con vẫn muốn làm con của {me}.'
        ],
        signature: 'Con của {me}',
        childName: 'Đỗ Thị Vân Anh'
      },
      {
        tab: 'Thư của em',
        title: 'Gửi {me} của con,',
        paragraphs: [
          '{Me} ơi, bình thường con hay nói đùa đùa nghịch nghịch, nhưng hôm nay con muốn nghiêm túc nói với {me} vài điều trong lòng.',
          'Con nhớ những lần con khóc, {me} luôn là người đến đầu tiên. Có {me} có ba có gia đình, con chưa bao giờ thấy mình đơn độc. Bây giờ con mới hiểu, phía sau sự vững vàng ấy là biết bao nhiêu lo lắng {me} đã giấu đi.',
          'Cảm ơn {me} vì đã thương hai chị em con theo cách riêng của từng người, và vì đã dạy chúng con biết nương tựa vào nhau. Có chị bên cạnh và có {me} và ba phía sau, con thấy mình may mắn lắm.',
          'Con hay quên nói lời cảm ơn, hay quên hỏi {me} những chuyện thường ngày, còn siêu lười làm việc nhà. Con xin lỗi, và con sẽ nhớ nhiều hơn.',
          'Con chỉ mong {me} thật khỏe, thật vui, và đừng lo cho con quá nhiều. Con đang cố gắng lớn lên từng ngày để một ngày nào đó có thể che chở lại cho {me}.',
          'Con yêu {me} nhiều lắm, nhiều hơn mọi lời con có thể nói.'
        ],
        signature: 'Con của {me}',
        childName: 'Đỗ Đoàn Việt Anh'
      }
    ],

    // Nhạc nền. Để '' sẽ dùng giai điệu nhẹ tự tạo bằng trình duyệt (không cần file).
    // Muốn dùng nhạc riêng: đặt file vào thư mục rồi ghi đường dẫn, ví dụ 'music/nhac.mp3'.
    musicUrl: '',

    // true = nhạc tự bật ngay lần chạm đầu tiên vào màn hình (mặc định là bật).
    // false = chỉ bật khi bấm nút "Bật nhạc".
    // Lưu ý: trình duyệt không cho phát tiếng trước khi người dùng chạm/bấm vào trang,
    // nên nhạc sẽ bắt đầu ở lần chạm đầu tiên chứ không thể tự kêu ngay khi vừa mở link.
    musicAutoStart: true
  };

  /* ========================================================
     2. HÀM TIỆN ÍCH
     ======================================================== */
  const $ = (id) => document.getElementById(id);
  const rand = (a, b) => Math.random() * (b - a) + a;
  const randInt = (a, b) => Math.floor(rand(a, b + 1));
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isReduced = () => reduceMQ.matches;
  const isSmall = () => window.innerWidth < 640;

  // Thay {me} / {Me} bằng cách gọi mẹ
  function fmt(text) {
    const name = CONFIG.momName;
    const cap = name.charAt(0).toUpperCase() + name.slice(1);
    return String(text).replace(/\{Me\}/g, cap).replace(/\{me\}/g, name);
  }

  // Túi xáo trộn: lấy lần lượt hết các phần tử rồi mới xáo lại (tránh lặp liên tục)
  function makeBag(items) {
    let bag = [];
    return () => {
      if (!bag.length) {
        bag = items.slice();
        for (let i = bag.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [bag[i], bag[j]] = [bag[j], bag[i]];
        }
      }
      return bag.pop();
    };
  }

  // Chạy một hiệu ứng; nếu trình duyệt quá cũ không hỗ trợ thì chỉ hiện rồi xóa
  function play(el, keyframes, options, done) {
    if (typeof el.animate !== 'function') {
      el.style.opacity = '0.85';
      setTimeout(done, options.duration);
      return;
    }
    const anim = el.animate(keyframes, options);
    anim.onfinish = done;
    anim.oncancel = done;
  }

  // Vòng lặp tạo hiệu ứng, tự dừng khi tab bị ẩn hoặc đang mở thư
  const state = { paused: false, words: 0, hearts: 0, photos: 0 };
  function loop(fn, getDelay) {
    const tick = () => {
      if (!document.hidden && !state.paused) fn();
      setTimeout(tick, getDelay());
    };
    setTimeout(tick, getDelay());
  }

  /* ========================================================
     3. ĐIỀN NỘI DUNG VÀO TRANG
     ======================================================== */
  const layerWords = $('layerWords');
  const layerHearts = $('layerHearts');
  const layerPhotos = $('layerPhotos');
  const heroInner = $('heroInner');

  document.title = fmt(CONFIG.title);
  $('title').textContent = fmt(CONFIG.title);
  $('intro').textContent = fmt(CONFIG.intro);
  $('openLetter').textContent = fmt(CONFIG.buttonText);

  /* ========================================================
     4. NỀN SAO LẤP LÁNH
     ======================================================== */
  (function buildStars() {
    const sky = $('sky');
    const count = isSmall() ? 55 : 100;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      const size = rand(1, 3);
      s.className = 'star';
      s.style.left = rand(0, 100).toFixed(2) + '%';
      s.style.top = rand(0, 100).toFixed(2) + '%';
      s.style.width = s.style.height = size.toFixed(1) + 'px';
      s.style.setProperty('--d', rand(2.5, 6).toFixed(1) + 's');
      s.style.setProperty('--delay', (-rand(0, 6)).toFixed(1) + 's');
      frag.appendChild(s);
    }
    sky.appendChild(frag);
  })();

  /* ========================================================
     5. CHỮ LỜI NHẮN BAY KHẮP MÀN HÌNH
     ======================================================== */
  const nextMessage = makeBag(CONFIG.messages.map(fmt));
  const maxWords = () => (isReduced() ? 3 : isSmall() ? 7 : 12);

  function spawnWord() {
    if (state.words >= maxWords()) return;

    const el = document.createElement('span');
    el.className = 'word w' + randInt(0, 3);
    el.textContent = nextMessage();
    el.style.fontSize = (isSmall() ? rand(15, 24) : rand(18, 34)).toFixed(1) + 'px';
    layerWords.appendChild(el);

    // Đo kích thước để đặt chữ nằm trọn trong màn hình
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const m = 10;
    const maxX = Math.max(m, vw - w - m);
    const minY = 56;                                   // chừa chỗ cho nút nhạc
    const maxY = Math.max(minY, vh - h - 16);
    const x = rand(m, maxX);
    const y = rand(minY, maxY);
    el.style.left = x.toFixed(1) + 'px';
    el.style.top = y.toFixed(1) + 'px';

    // Hướng và quãng đường trôi ngẫu nhiên (luôn giữ trong màn hình)
    const angle = rand(0, Math.PI * 2);
    const dist = rand(50, 160);
    const dx = clamp(Math.cos(angle) * dist, m - x, maxX - x);
    const dy = clamp(Math.sin(angle) * dist * 0.7, minY - y, maxY - y);
    const r0 = rand(-5, 5);
    const r1 = rand(-8, 8);
    const peak = rand(0.6, 1);
    const move = !isReduced();
    const duration = move ? rand(9000, 16000) : 7000;

    state.words++;
    play(el, [
      { opacity: 0, transform: 'translate(0px,0px) scale(.92) rotate(' + r0 + 'deg)' },
      { opacity: peak, offset: 0.18 },
      { opacity: peak, offset: 0.7 },
      {
        opacity: 0,
        transform: move
          ? 'translate(' + dx + 'px,' + dy + 'px) scale(1.04) rotate(' + r1 + 'deg)'
          : 'translate(0px,0px) scale(1) rotate(0deg)'
      }
    ], { duration, easing: 'ease-in-out', fill: 'forwards' }, () => {
      el.remove();
      state.words--;
    });
  }

  /* ========================================================
     6. TRÁI TIM BAY TỪ DƯỚI LÊN
     ======================================================== */
  const maxHearts = () => (isSmall() ? 14 : 24);

  function spawnHeart(force) {
    if (isReduced()) return;                           // người dùng muốn giảm chuyển động
    if (!force && state.hearts >= maxHearts()) return;

    const el = document.createElement('span');
    const size = rand(10, 30);
    el.className = 'heart';
    el.textContent = '\u2665';
    el.style.fontSize = size.toFixed(1) + 'px';
    el.style.left = rand(0, Math.max(0, window.innerWidth - size)).toFixed(1) + 'px';
    // Trộn vài sắc hồng và tím pastel cho dễ thương
    const HEART_COLORS = ['#ff6b9a', '#ff8fb1', '#ff4f87', '#ffa6c1', '#d6a4ff'];
    el.style.color = HEART_COLORS[randInt(0, HEART_COLORS.length - 1)];
    layerHearts.appendChild(el);

    const vh = window.innerHeight;
    const op = rand(0.35, 0.9);
    const sway = rand(-60, 60);

    state.hearts++;
    play(el, [
      { opacity: 0, transform: 'translate3d(0,' + (vh + 20) + 'px,0) scale(.8)' },
      { opacity: op, offset: 0.15 },
      { opacity: op, offset: 0.75 },
      { opacity: 0, transform: 'translate3d(' + sway + 'px,' + (-40 - size) + 'px,0) scale(1.1)' }
    ], { duration: rand(7000, 14000), easing: 'ease-in', fill: 'forwards' }, () => {
      el.remove();
      state.hearts--;
    });
  }

  // Một loạt trái tim bay lên (dùng khi đóng thư)
  function heartBurst() {
    for (let i = 0; i < 9; i++) setTimeout(() => spawnHeart(true), i * 90);
  }

  /* ========================================================
     7. KHUNG ẢNH KỶ NIỆM
     ======================================================== */
  const photoList = CONFIG.photos.length ? CONFIG.photos : [{ src: '', caption: 'Kỷ niệm' }];
  const nextPhoto = makeBag(photoList);
  // Số ảnh trôi cùng lúc (không vượt quá số ảnh đã khai báo, để không bị lặp ảnh)
  const maxPhotos = () => Math.min(photoList.length, isReduced() ? 2 : isSmall() ? 5 : 8);

  const HEART_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';

  // Khung minh họa khi chưa có ảnh (hoặc ảnh bị lỗi đường dẫn)
  function makePlaceholder() {
    const ph = document.createElement('span');
    ph.className = 'photo-ph';
    ph.innerHTML = HEART_SVG;
    return ph;
  }

  function buildPhoto(item, width) {
    const fig = document.createElement('figure');
    fig.className = 'photo';
    fig.style.width = width + 'px';

    const frame = document.createElement('div');
    frame.className = 'photo-frame';

    if (item.src) {
      const img = document.createElement('img');
      img.alt = fmt(item.caption || 'Ảnh kỷ niệm');
      img.decoding = 'async';
      // Nếu đường dẫn ảnh sai thì tự chuyển sang khung minh họa, không báo lỗi
      img.addEventListener('error', () => {
        img.remove();
        frame.appendChild(makePlaceholder());
      });
      img.src = item.src;
      frame.appendChild(img);
    } else {
      frame.appendChild(makePlaceholder());
    }
    fig.appendChild(frame);

    const cap = document.createElement('figcaption');
    cap.textContent = fmt(item.caption || '');
    fig.appendChild(cap);
    return fig;
  }

  // Diện tích giao nhau giữa hình chữ nhật (x, y, w, h) và một khung r
  function overlapArea(x, y, w, h, r) {
    const ox = Math.max(0, Math.min(x + w, r.right) - Math.max(x, r.left));
    const oy = Math.max(0, Math.min(y + h, r.bottom) - Math.max(y, r.top));
    return ox * oy;
  }

  // Chọn vị trí ít đè lên khối chữ chính và các ảnh đang hiển thị nhất
  function pickSpot(w, h, self) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const hr = heroInner.getBoundingClientRect();
    const others = Array.from(layerPhotos.children)
      .filter((c) => c !== self)
      .map((c) => c.getBoundingClientRect());
    let best = null;
    for (let i = 0; i < 16; i++) {
      const x = rand(8, Math.max(8, vw - w - 8));
      const y = rand(52, Math.max(52, vh - h - 8));
      // Đè lên khối chữ chính bị phạt nặng hơn đè lên ảnh khác
      let overlap = overlapArea(x, y, w, h, hr) * 3;
      others.forEach((r) => { overlap += overlapArea(x, y, w, h, r); });
      if (!best || overlap < best.overlap) best = { x, y, overlap };
      if (overlap === 0) break;
    }
    return best;
  }

  function spawnPhoto() {
    if (state.photos >= maxPhotos()) return;

    const width = Math.round(isSmall() ? rand(78, 118) : rand(110, 175));
    const el = buildPhoto(nextPhoto(), width);
    layerPhotos.appendChild(el);

    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const spot = pickSpot(w, h, el);
    el.style.left = spot.x.toFixed(1) + 'px';
    el.style.top = spot.y.toFixed(1) + 'px';

    const move = !isReduced();
    const dx = move ? rand(-50, 50) : 0;
    const dy = move ? rand(-50, 50) : 0;
    const r0 = rand(-10, 10);
    const r1 = move ? rand(-10, 10) : r0;

    state.photos++;
    play(el, [
      { opacity: 0, transform: 'translate(0px,0px) scale(.85) rotate(' + r0 + 'deg)' },
      { opacity: 0.95, offset: 0.1 },
      { opacity: 0.95, offset: 0.8 },
      { opacity: 0, transform: 'translate(' + dx + 'px,' + dy + 'px) scale(1.03) rotate(' + r1 + 'deg)' }
    ], { duration: move ? rand(10000, 14000) : 7000, easing: 'ease-in-out', fill: 'forwards' }, () => {
      el.remove();
      state.photos--;
    });
  }

  /* ========================================================
     8. KHỞI CHẠY CÁC VÒNG LẶP HIỆU ỨNG
     ======================================================== */
  loop(spawnWord, () => (isReduced() ? 3500 : isSmall() ? 1700 : 1200));
  loop(spawnHeart, () => rand(500, 900));
  // Tốc độ hiện ảnh: số càng nhỏ ảnh hiện càng nhanh (đơn vị mili giây, 1000 = 1 giây)
  loop(spawnPhoto, () => (isReduced() ? 3500 : rand(900, 1700)));

  // Vài hiệu ứng đầu tiên để màn hình không bị trống lúc mới mở
  [400, 1100, 1900].forEach((t) => setTimeout(spawnWord, t));
  [300, 900].forEach((t) => setTimeout(() => spawnHeart(false), t));
  [300, 800, 1300, 1900, 2500].forEach((t) => setTimeout(spawnPhoto, t));

  /* ========================================================
     9. BỨC THƯ
     ======================================================== */
  const overlay = $('letterOverlay');
  const letterEl = overlay.querySelector('.letter');
  const letterScroll = $('letterScroll');
  const closeBtns = [$('closeLetter'), $('closeLetterX')];
  let lastFocus = null;

  // Nhiều khung thư (mỗi người một thư), chuyển qua lại bằng các nút ở đầu thư
  const letters = CONFIG.letters;
  const tabsEl = $('letterTabs');

  // Hiển thị thư số i: tiêu đề, các đoạn văn, chữ ký, và đánh dấu nút đang chọn
  function showLetter(i) {
    const L = letters[i];
    $('letterTitle').textContent = fmt(L.title);

    const body = $('letterBody');
    body.textContent = '';
    L.paragraphs.forEach((text, k) => {
      const p = document.createElement('p');
      p.textContent = fmt(text);
      p.style.setProperty('--i', k);          // dùng để các đoạn hiện lần lượt
      body.appendChild(p);
    });

    $('letterSign').textContent = fmt(L.signature || '') + (L.childName ? '\n' + L.childName : '');

    Array.from(tabsEl.children).forEach((b, k) => {
      b.classList.toggle('active', k === i);
      b.setAttribute('aria-selected', k === i ? 'true' : 'false');
    });
    letterScroll.scrollTop = 0;
  }

  // Tạo các nút chuyển thư (chỉ hiện khi có từ 2 thư trở lên)
  if (letters.length > 1) {
    letters.forEach((L, k) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'letter-tab';
      b.setAttribute('role', 'tab');
      b.textContent = fmt(L.tab || 'Thư ' + (k + 1));
      b.addEventListener('click', () => showLetter(k));
      tabsEl.appendChild(b);
    });
  } else {
    tabsEl.hidden = true;
  }
  showLetter(0);

  function openLetter() {
    lastFocus = document.activeElement;
    state.paused = true;
    showLetter(0);                            // luôn mở từ thư đầu tiên
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    $('closeLetterX').focus({ preventScroll: true });
  }

  function closeLetter() {
    if (!overlay.classList.contains('open')) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    state.paused = false;
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus({ preventScroll: true });
    heartBurst();
  }

  $('openLetter').addEventListener('click', openLetter);
  closeBtns.forEach((b) => b.addEventListener('click', closeLetter));
  $('letterBackdrop').addEventListener('click', closeLetter);

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') {
      closeLetter();
    } else if (e.key === 'Tab') {
      // Giữ phím Tab xoay vòng trong bức thư
      e.preventDefault();
      const order = Array.from(letterEl.querySelectorAll('button'));
      const cur = order.indexOf(document.activeElement);
      let next = 0;
      if (cur !== -1) next = e.shiftKey ? (cur - 1 + order.length) % order.length : (cur + 1) % order.length;
      order[next].focus();
    }
  });

  /* ========================================================
     10. NHẠC NỀN (chỉ phát sau khi người dùng bấm nút)
     ======================================================== */
  const Music = (() => {
    const AC = window.AudioContext || window.webkitAudioContext;
    const btn = $('musicBtn');

    // Hợp âm C - Am - F - G, mỗi hợp âm 8 nốt rải
    const CHORDS = [
      { root: 130.81, notes: [261.63, 329.63, 392.00, 523.25] },
      { root: 110.00, notes: [220.00, 261.63, 329.63, 440.00] },
      { root: 174.61, notes: [261.63, 349.23, 440.00, 523.25] },
      { root: 98.00,  notes: [246.94, 293.66, 392.00, 493.88] }
    ];
    const PATTERN = [0, 1, 2, 3, 2, 1, 2, 1];
    const STEP = 0.5;                                  // giây giữa hai nốt

    let ctx = null, master = null, timer = null, stopTimer = null;
    let nextTime = 0, step = 0, on = false, audioEl = null;
    let pending = false;          // đang chờ lần chạm đầu tiên để tự bật nhạc
    let removeUnlock = null;      // hàm gỡ bộ lắng nghe lần chạm đầu tiên

    function tone(freq, t, dur, vol, type) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g);
      g.connect(master);
      o.start(t);
      o.stop(t + dur + 0.05);
    }

    function playStep(t, n) {
      const chord = CHORDS[Math.floor(n / 8) % CHORDS.length];
      const pos = n % 8;
      if (pos === 0) {
        // Nốt nền ngân dài
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = chord.root;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(0.09, t + 1);
        g.gain.linearRampToValueAtTime(0.0001, t + 4.2);
        o.connect(g);
        g.connect(master);
        o.start(t);
        o.stop(t + 4.3);
      }
      tone(chord.notes[PATTERN[pos]], t, 1.6, 0.11, 'sine');
      if (pos === 0 || pos === 4) tone(chord.notes[PATTERN[pos]] * 2, t, 1.2, 0.03, 'triangle');
    }

    function scheduler() {
      while (nextTime < ctx.currentTime + 0.6) {
        playStep(nextTime, step);
        nextTime += STEP;
        step++;
      }
    }

    function startSynth() {
      if (!AC) return false;
      if (!ctx) {
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = 0;
        master.connect(ctx.destination);
      }
      clearTimeout(stopTimer);
      if (ctx.state === 'suspended') ctx.resume();
      nextTime = ctx.currentTime + 0.1;
      clearInterval(timer);
      timer = setInterval(scheduler, 150);
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 1.5);
      return true;
    }

    function stopSynth() {
      if (!ctx) return;
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
      stopTimer = setTimeout(() => clearInterval(timer), 900);
    }

    function render() {
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.textContent = (!on && pending) ? '♪ Chạm để nghe nhạc' : on ? '\u266A Tắt nhạc' : '\u266A Bật nhạc';
    }

    function start() {
      pending = false;
      if (removeUnlock) removeUnlock();
      if (CONFIG.musicUrl) {
        if (!audioEl) {
          audioEl = new Audio(CONFIG.musicUrl);
          audioEl.loop = true;
          audioEl.volume = 0.6;
        }
        const p = audioEl.play();
        if (p && typeof p.catch === 'function') {
          // Nếu file nhạc lỗi thì dùng giai điệu tự tạo thay thế
          p.catch(() => {
            audioEl = null;
            CONFIG.musicUrl = '';
            if (on) startSynth();
          });
        }
      } else if (!startSynth()) {
        return;
      }
      on = true;
      render();
    }

    function stop() {
      pending = false;
      if (removeUnlock) removeUnlock();
      if (audioEl) audioEl.pause();
      stopSynth();
      on = false;
      render();
    }

    function init() {
      if (!AC && !CONFIG.musicUrl) { btn.hidden = true; return; }
      btn.addEventListener('click', () => (on ? stop() : start()));

      // Mặc định bật nhạc: chờ lần chạm / bấm phím đầu tiên ở bất kỳ đâu trên trang rồi tự phát
      if (CONFIG.musicAutoStart) {
        pending = true;
        const events = ['click', 'touchend', 'keydown'];
        const unlock = (e) => {
          // Nếu chính là nút nhạc thì để nút tự xử lý, tránh bật rồi tắt ngay
          if (e.target && e.target.closest && e.target.closest('#musicBtn')) return;
          if (pending && !on) start();
        };
        removeUnlock = () => {
          events.forEach((ev) => document.removeEventListener(ev, unlock, true));
          removeUnlock = null;
        };
        events.forEach((ev) => document.addEventListener(ev, unlock, true));
      }
      render();
    }

    return { init };
  })();

  Music.init();
})();