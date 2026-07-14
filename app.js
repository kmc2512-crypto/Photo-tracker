const CURRICULUM = [
  {week:1,shooting:{theme:"光を読む",goal:"朝・夕の光の違いを体で覚える",theory:`光には「質」と「方向」がある。同じ場所でも朝6時と昼12時では全く別の写真になる。\n\n・マジックアワー（日の出後30分・日没前30分）→ 光が柔らかくオレンジ\n・昼間の光 → 硬くて影が強い、色が平坦\n\nα6400の設定：f2.8、SS1/500〜1/1000、ISO Auto(上限3200)、RAW必須`,youtube:[{title:"光の方向と質を理解する（逆光・順光・斜光）",url:"https://www.youtube.com/results?search_query=%E5%85%89%E3%81%AE%E6%96%B9%E5%90%91+%E5%86%99%E7%9C%9F+%E9%80%86%E5%85%89+%E9%A0%86%E5%85%89+%E8%A7%A3%E8%AA%AC"}],practice:"同じ場所を朝・昼・夕の3回撮り比べる。設定を変えずに時間帯だけ変える。3枚をログに貼って「一番好きな光はどれか・なぜか」を書く。",checklist:["朝（6〜8時）に撮影した","夕方（16〜18時）に撮影した","同じ場所・同じ被写体で撮り比べた","ログに気づきを書いた"]},editing:{theme:"Lightroomの基礎パネルを完全理解",goal:"露光量・コントラスト・ハイライト・シャドウの役割を体で覚える",theory:`Lightroomの基本4スライダーの意味：\n\n・露光量 → 写真全体の明るさ。+1で約2倍明るく\n・コントラスト → 明暗の差。上げると立体感が出るが不自然になりやすい\n・ハイライト → 明るい部分だけ調整。白飛びを抑えたいときは下げる\n・シャドウ → 暗い部分だけ調整。見えなくなった部分を復元したいときは上げる\n\nコツ：まずハイライトを-70〜-100、シャドウを+30〜+50にしてから露光量で全体を整える`,youtube:[{title:"Lightroom 基礎 ライトパネル 解説",url:"https://www.youtube.com/results?search_query=Lightroom+%E5%9F%BA%E7%A4%8E+%E3%83%A9%E3%82%A4%E3%83%88%E3%83%91%E3%83%8D%E3%83%AB+%E8%A7%A3%E8%AA%AC"}],practice:"昨日撮った写真1枚を使い、①露光量だけ変えた版、②ハイライト-100・シャドウ+50版、③自分のベスト版の3パターンを書き出してログに貼る。違いをコメントに書く。",checklist:["露光量スライダーを±1で試した","ハイライト・シャドウの違いを確認した","3パターン書き出した","ベスト版の理由をコメントに書いた"]}},
  {week:2,shooting:{theme:"ストーリーを作る",goal:"1つのテーマで5枚連続で語れる写真を撮る",theory:`1枚の写真ではなく「流れ」で見せる技術。\n\n・引き（全体）→ 寄り（主役）→ 超寄り（ディテール）の3点セット\n・場所の「始まり→中間→終わり」を意識する\n・5枚で小さな物語を作る\n\n先輩カメラマンとの差はここ。1枚だけ上手い人は多い。5枚で語れる人は少ない。`,youtube:[{title:"写真 ストーリーテリング 組写真 作り方",url:"https://www.youtube.com/results?search_query=%E5%86%99%E7%9C%9F+%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AA%E3%83%BC%E3%83%86%E3%83%AA%E3%83%B3%E3%82%B0+%E7%B5%84%E5%86%99%E7%9C%9F"}],practice:"1つの場所かテーマで5枚撮る。「なぜこの順番で並べるか」をログに書く。",checklist:["テーマを1つ決めた","5枚撮った","順番と理由をログに書いた","引き・寄り・超寄りを意識した"]},editing:{theme:"色を操る",goal:"色温度・HSLパネルで自分好みの色調を作る",theory:`色の調整は2段階ある。\n\n【第1段階：ホワイトバランス】\n・色温度 → 上げると暖色（オレンジ）、下げると寒色（青）\n・色かぶり補正 → 緑↔マゼンタの調整\n\n【第2段階：HSLパネル】\n・H（色相）→ 色の種類を変える（青空を水色に、緑を黄緑に）\n・S（彩度）→ 色の濃さ\n・L（輝度）→ その色だけ明暗調整\n\nコツ：オレンジ（肌・土）とティールブルー（空・影）を意識するとプロっぽくなる`,youtube:[{title:"Lightroom HSL カラーグレーディング 解説",url:"https://www.youtube.com/results?search_query=Lightroom+HSL+%E3%82%AB%E3%83%A9%E3%83%BC%E3%82%B0%E3%83%AC%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0"}],practice:"同じ写真をオレンジ・ティール系とフィルム風モノクロの2パターンで現像してログに貼る。どちらが自分らしいかコメントに書く。",checklist:["色温度を±500で試した","HSLパネルのオレンジを操作した","2パターン現像した","好みの色調をコメントに書いた"]}},
  {week:3,shooting:{theme:"引き算",goal:"主役1つだけのフレームを作る",theory:`上手い写真と下手な写真の最大の差は「情報量の整理」。\n\n・主役以外は全部「ノイズ」\n・ノイズを消す方法：①近づく ②絞りを開ける（f2.8） ③アングルを変える ④ズームで圧縮\n\nチェックリスト：\n「この写真で一番見てほしいものは何か？」\n「それ以外で目立っているものはあるか？」\n→ あれば撮り直すか編集でトリミング`,youtube:[{title:"写真 構図 引き算 シンプル プロ解説",url:"https://www.youtube.com/results?search_query=%E5%86%99%E7%9C%9F+%E6%A7%8B%E5%9B%B3+%E5%BC%95%E3%81%8D%E7%AE%97+%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB"}],practice:"1枚撮ったら「主役以外で目立っているものリスト」をコメントに書く。それを消すための撮り直しか編集をして比較をログに貼る。",checklist:["ノイズリストを書いた","撮り直しかトリミングで対処した","before/afterをログに貼った","主役が明確になったか確認した"]},editing:{theme:"トーンカーブとテクスチャ",goal:"カーブでコントラストを自在に操る",theory:`トーンカーブはスライダーより細かく明暗をコントロールできる。\n\n・S字カーブ → コントラスト強め（ドラマチック）\n・逆S字カーブ → マットな仕上がり（フィルム風）\n・中間トーンだけ持ち上げ → 自然なコントラスト\n\nテクスチャ・明瞭度・かすみの除去の違い：\n・テクスチャ +15〜25 → 葉や肌などの中程度のディテール\n・明瞭度 +10〜20 → 全体的なエッジ強調\n・かすみの除去 → 霧がかった写真専用（使いすぎ厳禁）`,youtube:[{title:"Lightroom トーンカーブ 使い方 初心者",url:"https://www.youtube.com/results?search_query=Lightroom+%E3%83%88%E3%83%BC%E3%83%B3%E3%82%AB%E3%83%BC%E3%83%96+%E4%BD%BF%E3%81%84%E6%96%B9+%E5%88%9D%E5%BF%83%E8%80%85"}],practice:"S字カーブ版・逆S字カーブ版・フラットカーブ版の3パターンを同じ写真で作ってログに貼る。",checklist:["S字カーブを作った","逆S字カーブを作った","テクスチャを±20で試した","3パターン比較をログに記録した"]}},
  {week:4,shooting:{theme:"光を狙って撮る",goal:"光の種類を意図的に選んで撮影する",theory:`これまで「光を読む」を練習した。今週は「光を選んで狙う」フェーズ。\n\n・逆光 → 被写体の輪郭が光る。フレアが出る。「希望・詩的」な印象\n・斜光 → 立体感が出る。テクスチャが強調される。「力強い」印象\n・曇り光 → 均一で柔らかい。ポートレートに最適。「穏やか」な印象\n\n今週のミッション：3種類全部を意図的に選んで1枚ずつ撮る`,youtube:[{title:"撮影 光の種類 逆光 斜光 活用法",url:"https://www.youtube.com/results?search_query=%E6%92%AE%E5%BD%B1+%E5%85%89%E3%81%AE%E7%A8%AE%E9%A1%9E+%E9%80%86%E5%85%89+%E6%96%9C%E5%85%89+%E6%B4%BB%E7%94%A8%E6%B3%95"}],practice:"逆光・斜光・曇り光の3枚を撮ってログに貼る。それぞれ「どんな印象を出したかったか」をコメントに書く。",checklist:["逆光で1枚撮った","斜光で1枚撮った","曇り光（または室内光）で1枚撮った","意図した印象をコメントに書いた"]},editing:{theme:"カラーグレーディング",goal:"カラーミキサーとカラーグレーディングで世界観を作る",theory:`ここまでの編集は「補正」。今週からは「表現」。\n\n【カラーグレーディング（旧分割トーン）】\n・シャドウに色を入れる → 影に青を入れるとシネマ風\n・ハイライトに色を入れる → 光にオレンジを入れると映画的\n・ミッドトーン → 全体の色の印象を決める\n\n先輩カメラマンが「なんかプロっぽい」色調を出せるのはここ。\n同じ写真でも色調の方向性で全く別物になる。`,youtube:[{title:"Lightroom カラーグレーディング 映画風 シネマルック",url:"https://www.youtube.com/results?search_query=Lightroom+%E3%82%AB%E3%83%A9%E3%83%BC%E3%82%B0%E3%83%AC%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0+%E6%98%A0%E7%94%BB%E9%A2%A8"}],practice:"1枚の写真をシネマ風（シャドウ：青、ハイライト：オレンジ）とナチュラル風の2パターンで現像してログに貼る。",checklist:["カラーグレーディングパネルを開いた","シャドウに青を入れた","ハイライトにオレンジを入れた","2パターン比較をログに記録した"]}},
  {week:5,shooting:{theme:"先輩・プロを解剖する",goal:"好きな1枚を選んで完全模倣する",theory:`模倣は盗みではなく最高の学習法。\n\n分析する4点：\n1. 光の方向（どこから光が来ているか）\n2. 焦点距離の推測（広角・標準・望遠）\n3. 絞り（ボケ量から推測）\n4. 色調の方向性（暖色・寒色・モノクロ）\n\n完全に再現できなくていい。「なぜ自分の写真と違うか」を言語化できることが目的。`,youtube:[{title:"プロの写真を分析 模倣 上達法",url:"https://www.youtube.com/results?search_query=%E3%83%97%E3%83%AD%E3%81%AE%E5%86%99%E7%9C%9F+%E5%88%86%E6%9E%90+%E6%A8%A1%E5%80%A3+%E4%B8%8A%E9%81%94%E6%B3%95"}],practice:"先輩かプロカメラマンの写真を1枚選んで模倣する。元写真と自分の写真を並べてログに貼り「3つの違い」をコメントに書く。",checklist:["模倣したい1枚を選んだ","光の方向・焦点距離・絞りを推測した","実際に撮影した","元写真と比較して3つの違いを書いた"]},editing:{theme:"先輩の色調を再現する",goal:"好きな色調を分析してLightroomで再現する",theory:`色調の「盗み方」：\n\n1. 好きな写真を見てシャドウの色（影が青いか茶色いか）を確認\n2. ハイライトの色（光が白いかオレンジかを確認）\n3. 全体の彩度（鮮やかか落ち着いているか）\n4. コントラスト（眠い感じかシャープか）\n\nこれをLightroomで再現していく。完璧じゃなくていい。\n「なぜ違うか」を言語化できれば次に活きる。`,youtube:[{title:"好きな写真の色調 Lightroom 再現 方法",url:"https://www.youtube.com/results?search_query=%E5%A5%BD%E3%81%8D%E3%81%AA%E5%86%99%E7%9C%9F+%E8%89%B2%E8%AA%BF+Lightroom+%E5%86%8D%E7%8F%BE"}],practice:"先輩かプロの写真を1枚選んで色調を分析し、自分の写真で再現を試みる。ログに元写真・自分の現像版・差分メモを貼る。",checklist:["参考写真の色調を分析した","シャドウ・ハイライトの色を特定した","Lightroomで再現を試みた","差分を言語化してコメントに書いた"]}},
  {week:6,shooting:{theme:"自分のスタイルを固める",goal:"「自分はこういう写真が撮りたい」を1文で言えるようにする",theory:`5週間分のログを全部振り返る。\n\n確認する3点：\n1. 自分が一番楽しかった撮影はどれか\n2. 一番気に入っている写真はどれか\n3. 繰り返し撮っている被写体・光・構図は何か\n\nこれが「自分のスタイル」の原型。まだ決まらなくていい。でも今週で言語化する。\n言語化できた人が次のステップ（稼ぐ）に進める。`,youtube:[{title:"写真家 スタイル 確立 自分らしさ 見つけ方",url:"https://www.youtube.com/results?search_query=%E5%86%99%E7%9C%9F%E5%AE%B6+%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB+%E7%A2%BA%E7%AB%8B+%E8%87%AA%E5%88%86%E3%82%89%E3%81%97%E3%81%95"}],practice:"全ログを見返して「好きな被写体ベスト3」「好きな光ベスト1」「好きな色調の傾向」をコメントに書く。SNSに5枚投稿する。",checklist:["全ログを見返した","好きな被写体ベスト3を書いた","好きな光を書いた","SNSに5枚投稿した"]},editing:{theme:"自分のプリセットを作る",goal:"自分の色調をLightroomのプリセットとして保存する",theory:`プリセット = 自分の編集設定を1クリックで適用できるように保存したもの。\n\nプロカメラマンは必ず自分のプリセットを持っている。\nこれがあると編集速度が10倍になり、写真に一貫性が出る。\n\n作り方：\n1. 自分のベスト現像を1枚仕上げる\n2. 現像パネル右クリック→「プリセットを作成」\n3. 全項目にチェック→名前をつけて保存\n4. 別の写真に適用してみる→微調整する\n\nこれが「自分のスタイル」の編集版。`,youtube:[{title:"Lightroom プリセット 作成 保存 方法",url:"https://www.youtube.com/results?search_query=Lightroom+%E3%83%97%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88+%E4%BD%9C%E6%88%90+%E4%BF%9D%E5%AD%98+%E6%96%B9%E6%B3%95"}],practice:"自分のベスト現像設定でプリセットを作る。別の5枚に適用してみて、調整が必要な箇所をコメントに書く。",checklist:["ベスト現像設定を1枚仕上げた","プリセットを作成・保存した","5枚に適用した","微調整が必要な点をコメントに書いた"]}}
];

const WEEKS = [
  {id:1,dates:'5/28〜6/3',theme:'構図を体に叩き込む',constraint:'55mm f2.8のみ。ズーム禁止。足で動く。',weekday:'同じ被写体を三分割・日の丸・対角線の3構図で撮り比べる。学校の行き帰りでOK。',weekend:'1シーンにつき低・中・高の3アングル必須。同じ場所で30枚以上。',check:'3構図の撮り比べを見て「どれが一番伝わるか」を言えるか'},
  {id:2,dates:'6/4〜6/10',theme:'光だけを追いかける',constraint:'撮影は朝7時前か夕方17時以降のみ。昼間は撮らない。',weekday:'登下校中に「今日一番いい光」を1枚だけ撮る。',weekend:'日の出撮影。同じ場所を6時・7時・8時の3回撮り比べる。',check:'「今日の光は何時が一番良かったか」を理由付きで言えるか'},
  {id:3,dates:'6/11〜6/17',theme:'引き算を覚える',constraint:'1枚に写る「主役」は必ず1つだけ。2つあったら撮り直す。',weekday:'撮った写真を見て「主役以外で目立っているもの」を書き出す。',weekend:'Week1・Week2の写真100枚を見直してベスト10を選ぶ。',check:'ベスト10の選定理由が「光・構図・意図」の3軸で語れるか'},
  {id:4,dates:'6/18〜6/24',theme:'プロを完全模倣する',constraint:'1人の写真家を決めて、その人の写真を完璧に模倣した1枚を撮る。',weekday:'選んだ写真家の作品を1枚分析。焦点距離・絞り・光の方向・距離を推測。',weekend:'分析した1枚を完全再現しに行く。場所・時間帯・構図を全部合わせる。',check:'元の写真と並べて「なぜ違うか」を3点言えるか'},
  {id:5,dates:'6/25〜7/1',theme:'テーマで20枚撮る',constraint:'週の最初にテーマを1つ決める。それ以外は撮らない。',weekday:'テーマに沿った被写体だけを撮る。毎日最低3枚。',weekend:'20枚をLightroomで1フォルダに並べる。色調・明るさのトーンを統一。',check:'20枚を見知らぬ人に見せてテーマが伝わるか'},
  {id:6,dates:'7/2〜7/8',theme:'外部の目にさらす',constraint:'自分で良いと思う写真を5枚、家族以外の人に見せて感想をもらう。',weekday:'SNS（Instagram・500px）にベスト写真を投稿。反応を記録する。',weekend:'Week1とWeek5の写真を並べて変化を言語化。6週間の総括を書く。',check:'「自分の写真はこういう写真だ」を1文で言えるか'},
];

// ── IndexedDB ──────────────────────────────
const IDB = (() => {
  let db = null;
  function open() {
    if (db) return Promise.resolve(db);
    return new Promise((res, rej) => {
      const req = indexedDB.open('photo_tracker_v1', 1);
      req.onupgradeneeded = e => e.target.result.createObjectStore('photos');
      req.onsuccess = e => { db = e.target.result; res(db); };
      req.onerror = () => rej(req.error);
    });
  }
  return {
    async set(key, blob) {
      const d = await open();
      return new Promise((res, rej) => {
        const tx = d.transaction('photos', 'readwrite');
        tx.objectStore('photos').put(blob, key);
        tx.oncomplete = () => res(true);
        tx.onerror = () => rej(tx.error);
      });
    },
    async get(key) {
      const d = await open();
      return new Promise((res, rej) => {
        const req = d.transaction('photos').objectStore('photos').get(key);
        req.onsuccess = () => res(req.result || null);
        req.onerror = () => rej(req.error);
      });
    },
    async del(key) {
      const d = await open();
      return new Promise(res => {
        const tx = d.transaction('photos', 'readwrite');
        tx.objectStore('photos').delete(key);
        tx.oncomplete = () => res(true);
      });
    },
    async listKeys() {
      const d = await open();
      return new Promise((res, rej) => {
        const req = d.transaction('photos').objectStore('photos').getAllKeys();
        req.onsuccess = () => res(req.result || []);
        req.onerror = () => rej(req.error);
      });
    }
  };
})();

const LS = {
  get: k => { try { const v = localStorage.getItem('ptr_' + k); return v ? JSON.parse(v) : null; } catch { return null; } },
  set: (k, v) => {
    try {
      localStorage.setItem('ptr_' + k, JSON.stringify(v));
      if (window.PTR_BACKUP_KEYS?.has(k) && typeof scheduleFullBackup === 'function') scheduleFullBackup('local-' + k);
    } catch {}
  }
};

window.PTR_BACKUP_KEYS = new Set([
  'meta','checks','tasks_done','manual_tasks','manual_tasks_deleted','task_overrides','external_tasks_completed','script_url',
  'clips','clips_deleted','timer_log_today','todo_done_log','inbox_items','notif','notif_leads','auth_session'
]);

function setSyncHealth(patch) {
  const current = LS.get('sync_health') || {};
  LS.set('sync_health', { ...current, ...patch, updatedAt: new Date().toISOString() });
  updateSyncHealth();
}

function updateSyncHealth() {
  const health = LS.get('sync_health') || {};
  const origin = location.protocol === 'file:' ? 'FILE' : (location.hostname.includes('github.io') ? 'GITHUB PAGES' : 'LOCALHOST');
  const hasWarning = health.lastSaveOk === false || health.lastLogBackupOk === false || health.lastCloudCheckOk === false || health.lastTodoSyncOk === false;
  const hasPending = health.pending === true;
  const save = health.lastSaveAt
    ? `${health.lastSaveOk === false ? '要確認' : 'OK'} / ${new Date(health.lastSaveAt).toLocaleString('ja-JP', {month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit'})}`
    : '未保存';
  const log = health.lastLogBackupAt
    ? `${health.lastLogBackupOk === false ? '要確認' : 'OK'} / ${new Date(health.lastLogBackupAt).toLocaleString('ja-JP', {month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit'})}`
    : '未同期';
  const originText = origin === 'FILE' ? 'FILE / 通知はlocalhost推奨' : `${origin} / 通知・PWA対応`;
  const saveEl = qs('#sync-health-save');
  const logEl = qs('#sync-health-log');
  const originEl = qs('#sync-health-origin');
  if (saveEl) saveEl.textContent = save;
  if (logEl) logEl.textContent = log;
  if (originEl) originEl.textContent = originText;
  const pill = qs('#sync-pill');
  if (pill) {
    pill.classList.remove('ok', 'pending', 'warn');
    pill.classList.add(hasWarning ? 'warn' : hasPending ? 'pending' : 'ok');
    pill.textContent = hasWarning ? '要確認' : hasPending ? '保存中' : '同期済み';
  }
}

// NOTE: anon keyのフロント直書きはSupabaseでは一般的だが、テーブル側のRLS（Row Level Security）設定を必ず確認すること
const SB_URL = 'https://eskeovyymgferdbqotti.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVza2Vvdnl5bWdmZXJkYnFvdHRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyODE1MzksImV4cCI6MjA5NTg1NzUzOX0.y22KuSGf7nKzYlGxDU-K4ryoB7xLAXGoJALHji_t0Eg';
const SB_HEADERS = {'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json'};
const AUTH_STORAGE_KEY = 'auth_session';
const SYNC_KEY_STORAGE_KEY = 'sync_key';

function normalizeSyncKey(value) {
  return String(value || '').trim().replace(/\s+/g, '-').slice(0, 80);
}

function hashSyncKey(value) {
  const text = normalizeSyncKey(value);
  let h1 = 0xdeadbeef ^ text.length;
  let h2 = 0x41c6ce57 ^ text.length;
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return ((h2 >>> 0).toString(36) + (h1 >>> 0).toString(36)).slice(0, 14);
}

function getSyncKeyInfo() {
  return LS.get(SYNC_KEY_STORAGE_KEY) || null;
}

function getSyncScopeId() {
  return getSyncKeyInfo()?.id || '';
}

function getAuthScopeId() {
  const session = getAuthSession();
  const id = session?.user?.id || '';
  return id ? hashSyncKey(id) : '';
}

function scopedSettingKey(key) {
  const authScope = getAuthScopeId();
  if (authScope) return `auth_${authScope}_${key}`;
  const syncScope = getSyncScopeId();
  return syncScope ? `sync_${syncScope}_${key}` : key;
}

function getAuthSession() {
  return LS.get(AUTH_STORAGE_KEY);
}

function setAuthSession(session) {
  if (session) LS.set(AUTH_STORAGE_KEY, session);
  else localStorage.removeItem('ptr_' + AUTH_STORAGE_KEY);
}

function setAccountMessage(message, isError = false) {
  const wrap = qs('#account-msg');
  const text = wrap?.querySelector('p');
  if (!wrap || !text) return;
  if (!message) {
    wrap.classList.add('hidden');
    text.textContent = '';
    return;
  }
  text.textContent = message;
  wrap.classList.remove('hidden');
  wrap.classList.toggle('warn', isError);
}

function buildAuthSessionFromResponse(data) {
  if (!data) return null;
  const accessToken = data.access_token || data.accessToken || '';
  const user = data.user || null;
  if (!accessToken || !user) return null;
  return {
    accessToken,
    refreshToken: data.refresh_token || '',
    expiresAt: Date.now() + Number(data.expires_in || 3600) * 1000,
    user,
    signedInAt: new Date().toISOString(),
    method: 'email',
  };
}

async function authRequest(path, body) {
  const res = await fetch(SB_URL + path, {
    method: 'POST',
    headers: SB_HEADERS,
    body: JSON.stringify(body)
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.msg || data.error_description || data.error || `認証に失敗しました (${res.status})`);
  }
  return data;
}

function getEmailLoginValues() {
  const email = (qs('#email-login-input')?.value || '').trim();
  const password = qs('#email-password-input')?.value || '';
  return { email, password };
}

function clearEmailPasswordField() {
  const pass = qs('#email-password-input');
  if (pass) pass.value = '';
}

async function signInWithEmail() {
  const { email, password } = getEmailLoginValues();
  if (!email || !password) {
    setAccountMessage('メールアドレスとパスワードを入力してください。', true);
    return;
  }
  setAccountMessage('メールアカウントでログインしています...');
  try {
    const data = await authRequest('/auth/v1/token?grant_type=password', { email, password });
    const session = buildAuthSessionFromResponse(data);
    if (!session) throw new Error('ログイン応答を保存できませんでした');
    setAuthSession(session);
    clearEmailPasswordField();
    updateAccountStatus();
    setAccountMessage('ログインしました。現在のデータをこのアカウントへ保存する場合は「保存」を押してください。');
  } catch(err) {
    setAccountMessage('ログインエラー: ' + err.message, true);
  }
}

async function signUpWithEmail() {
  const { email, password } = getEmailLoginValues();
  if (!email || password.length < 6) {
    setAccountMessage('登録にはメールアドレスと6文字以上のパスワードが必要です。', true);
    return;
  }
  setAccountMessage('メールアカウントを登録しています...');
  try {
    const data = await authRequest('/auth/v1/signup', { email, password });
    const session = buildAuthSessionFromResponse(data);
    if (session) {
      setAuthSession(session);
      clearEmailPasswordField();
      updateAccountStatus();
      setAccountMessage('登録してログインしました。現在のデータをこのアカウントへ保存する場合は「保存」を押してください。');
    } else {
      clearEmailPasswordField();
      setAccountMessage('登録しました。確認メールが必要な設定の場合は、メール確認後にログインしてください。');
    }
  } catch(err) {
    setAccountMessage('登録エラー: ' + err.message, true);
  }
}

async function saveCurrentDataToEmailAccount() {
  if (!getAuthScopeId()) {
    setAccountMessage('先にメールアカウントでログインしてください。', true);
    return;
  }
  setAccountMessage('現在のデータをメールアカウントへ保存しています...');
  const ok = await writeFullBackupToCloud('email-account-save');
  setAccountMessage(ok ? 'メールアカウントへ保存しました。別端末では同じメールでログインして「復元」を押してください。' : 'メールアカウントへの保存に失敗しました。', !ok);
}

async function restoreFromEmailAccount() {
  if (!getAuthScopeId()) {
    setAccountMessage('復元するには、先にメールアカウントでログインしてください。', true);
    return;
  }
  setAccountMessage('メールアカウントのバックアップを確認しています...');
  const data = await SB.getSetting('full_backup');
  try {
    if (!data) throw new Error('このメールアカウントのバックアップがまだありません');
    applyFullBackupPayload(data);
    setAccountMessage('メールアカウントから復元しました。ページを再読み込みします...');
    setTimeout(() => location.reload(), 1200);
  } catch(err) {
    setAccountMessage('エラー: ' + err.message, true);
  }
}

async function logoutEmailAccount() {
  const session = getAuthSession();
  if (session?.accessToken) {
    fetch(SB_URL + '/auth/v1/logout', {
      method: 'POST',
      headers: {...SB_HEADERS, Authorization: 'Bearer ' + session.accessToken}
    }).catch(() => {});
  }
  setAuthSession(null);
  updateAccountStatus();
  setAccountMessage('ログアウトしました。同期キー方式は引き続き使えます。');
}

function getAuthUserLabel(session = getAuthSession()) {
  const user = session?.user;
  return user?.email || user?.user_metadata?.email || user?.user_metadata?.full_name || user?.id || '';
}

function updateAccountStatus() {
  const status = qs('#account-status');
  if (!status) return;
  const session = getAuthSession();
  const sync = getSyncKeyInfo();
  const input = qs('#sync-key-input');
  const clearBtn = qs('#sync-key-clear-btn');
  const authActions = {
    login: qs('#email-login-btn'),
    signup: qs('#email-signup-btn'),
    save: qs('#email-account-save-btn'),
    restore: qs('#email-account-restore-btn'),
    logout: qs('#email-logout-btn')
  };
  if (session?.user?.id) {
    const label = getAuthUserLabel(session) || 'メールアカウント';
    status.innerHTML = `<strong>${label}</strong><br>メールログイン中。保存先はこのメールアカウントです。同期キーはログアウト後も使えます。`;
    authActions.login?.classList.add('hidden');
    authActions.signup?.classList.add('hidden');
    authActions.save?.classList.remove('hidden');
    authActions.restore?.classList.remove('hidden');
    authActions.logout?.classList.remove('hidden');
    clearBtn?.classList.toggle('hidden', !sync?.id);
  } else if (sync?.id) {
    status.innerHTML = `<strong>同期キー設定済み</strong><br>保存先ID: ${sync.id} / PCとiPhoneで同じキーを入れると同じデータを使えます。`;
    if (input && !input.value) input.placeholder = '設定済み';
    clearBtn?.classList.remove('hidden');
    authActions.login?.classList.remove('hidden');
    authActions.signup?.classList.remove('hidden');
    authActions.save?.classList.add('hidden');
    authActions.restore?.classList.add('hidden');
    authActions.logout?.classList.add('hidden');
  } else {
    status.textContent = '同期キー未設定。この端末だけのデータとして保存しています。';
    if (input && !input.value) input.placeholder = '同期キー';
    clearBtn?.classList.add('hidden');
    authActions.login?.classList.remove('hidden');
    authActions.signup?.classList.remove('hidden');
    authActions.save?.classList.add('hidden');
    authActions.restore?.classList.add('hidden');
    authActions.logout?.classList.add('hidden');
  }
}

async function saveSyncKeyFromInput() {
  const input = qs('#sync-key-input');
  const raw = normalizeSyncKey(input?.value || '');
  if (raw.length < 4) {
    setAccountMessage('同期キーは4文字以上で入力してください。短すぎるキーは他人に推測されやすいです。', true);
    input?.focus();
    return;
  }
  const info = {
    id: hashSyncKey(raw),
    savedAt: new Date().toISOString()
  };
  LS.set(SYNC_KEY_STORAGE_KEY, info);
  if (input) input.value = '';
  updateAccountStatus();
  setAccountMessage('同期キーを設定しました。現在の端末データをこのキーに保存しています...');
  const ok = await writeFullBackupToCloud('sync-key-save');
  setAccountMessage(ok ? '同期キーに現在のデータを保存しました。別端末では同じキーを入れて「復元」を押してください。' : '同期キーは設定しましたが、クラウド保存に失敗しました。ネットワークやSupabase設定を確認してください。', !ok);
}

async function restoreFromSyncKey() {
  const input = qs('#sync-key-input');
  const raw = normalizeSyncKey(input?.value || '');
  if (raw) {
    LS.set(SYNC_KEY_STORAGE_KEY, { id: hashSyncKey(raw), savedAt: new Date().toISOString() });
    if (input) input.value = '';
  }
  const sync = getSyncKeyInfo();
  if (!sync?.id) {
    setAccountMessage('復元するには、先に同期キーを入力してください。', true);
    input?.focus();
    return;
  }
  updateAccountStatus();
  setAccountMessage('同期キーのバックアップを確認しています...');
  const data = await SB.getSetting('full_backup');
  try {
    if (!data) throw new Error('この同期キーのバックアップがまだありません');
    applyFullBackupPayload(data);
    setAccountMessage('同期キーから復元しました。ページを再読み込みします...');
    setTimeout(() => location.reload(), 1200);
  } catch(err) {
    setAccountMessage('エラー: ' + err.message, true);
  }
}

function clearSyncKey() {
  localStorage.removeItem('ptr_' + SYNC_KEY_STORAGE_KEY);
  updateAccountStatus();
  setAccountMessage('同期キーをこの端末から解除しました。端末内のデータは消していません。');
}

const SB = {
  // メタデータをupsert（SAVE時）
  async upsert(date, data) {
    try {
      const res = await fetch(SB_URL + '/rest/v1/logs?on_conflict=date', {
        method: 'POST',
        headers: {...SB_HEADERS, 'Prefer':'resolution=merge-duplicates'},
        body: JSON.stringify({
          date,
          comment: data.comment || '',
          lens: data.lens || '',
        pro_memos: data.proMemos || [],
        has_photo: data.hasPhoto || false,
        updated_at: new Date().toISOString()
        })
      });
      return res.ok;
    } catch(e) { return false; }
  },

  // 全ログのメタデータを取得（起動時・同期時）
  async fetchAll() {
    try {
      const res = await fetch(SB_URL + '/rest/v1/logs?select=*&order=date.desc', {
        headers: SB_HEADERS
      });
      if (!res.ok) return null;
      return await res.json();
    } catch(e) { return null; }
  },

  // 写真をSupabase Storageにアップロード（バイナリ直送、base64変換なし）
  // 旧実装はphotosテーブルにbase64で保存していたが、行サイズ・転送量の観点から
  // Storageバケット（バイナリ保存）に移行。バケット名: 'photos'
  async uploadPhoto(date, slot, blob, mimeType) {
    try {
      const key = slot === 'main' ? `main_${date}` : `pro${slot}_${date}`;
      const path = `${key}.bin`; // 拡張子は問わずバイナリとして保存
      const res = await fetch(SB_URL + `/storage/v1/object/photos/${encodeURIComponent(path)}`, {
        method: 'POST',
        headers: {
          'apikey': SB_KEY,
          'Authorization': 'Bearer ' + SB_KEY,
          'Content-Type': mimeType || 'application/octet-stream',
          'x-upsert': 'true' // 同名パスがあれば上書き
        },
        body: blob
      });
      if (!res.ok) {
        const errText = await res.text().catch(() => '');
        console.error('[uploadPhoto] failed', path, res.status, errText);
      }
      return res.ok;
    } catch(e) {
      console.error('[uploadPhoto] exception', date, slot, e);
      return false;
    }
  },

  async uploadLogMeta(date, data) {
    try {
      const path = `meta_${date}.json`;
      const payload = {
        version: 2,
        date,
        comment: data.comment || '',
        lens: data.lens || '',
        device: data.device || '',
        proMemos: data.proMemos || [],
        hasPhoto: data.hasPhoto || false,
        slots: {
          main: data.mainPhoto === true || data.hasPhoto === true,
          pro0: !!data.proPhotos?.[0],
          pro1: !!data.proPhotos?.[1],
          pro2: !!data.proPhotos?.[2],
        },
        backupKind: 'photo-log-meta',
        updatedAt: new Date().toISOString()
      };
      const res = await fetch(SB_URL + `/storage/v1/object/photos/${encodeURIComponent(path)}`, {
        method: 'POST',
        headers: {
          'apikey': SB_KEY,
          'Authorization': 'Bearer ' + SB_KEY,
          'Content-Type': 'application/json',
          'x-upsert': 'true'
        },
        body: JSON.stringify(payload)
      });
      return res.ok;
    } catch(e) { return false; }
  },

  async fetchLogMeta(date) {
    try {
      const path = `meta_${date}.json`;
      const res = await fetch(SB_URL + `/storage/v1/object/photos/${encodeURIComponent(path)}`, {
        headers: { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY }
      });
      if (!res.ok) return null;
      const data = await res.json();
      return {
        comment: data.comment || '',
        lens: data.lens || '',
        device: data.device || '',
        proMemos: data.proMemos || [],
        hasPhoto: data.hasPhoto === true,
        mainPhoto: data.slots?.main === true,
        proPhotos: [data.slots?.pro0 === true, data.slots?.pro1 === true, data.slots?.pro2 === true],
      };
    } catch(e) { return null; }
  },

  // 写真をSupabase Storageから取得（Blobで直接返す）
  async fetchPhotoBlob(date, slot) {
    try {
      const key = slot === 'main' ? `main_${date}` : `pro${slot}_${date}`;
      const path = `${key}.bin`;
      const res = await fetch(SB_URL + `/storage/v1/object/photos/${encodeURIComponent(path)}`, {
        headers: { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY }
      });
      if (!res.ok) return null; // 404等は素直に「存在しない」扱い
      const blob = await res.blob();
      if (!blob || blob.size === 0) return null;
      // Storageが404やエラーをJSON/HTMLで返した場合、ステータスは200でも
      // Content-Typeがapplication/jsonやtext/htmlになっていることがあるため弾く
      const ct = (blob.type || '').toLowerCase();
      if (ct.includes('application/json') || ct.includes('text/html') || ct.includes('text/plain')) {
        console.warn('[fetchPhotoBlob] unexpected content-type, treating as not-found', path, ct);
        return null;
      }
      return blob;
    } catch(e) { return null; }
  },

  // 旧base64テーブル（photos）からの取得 — Storage未移行データの読み出し用フォールバック
  async fetchPhotoLegacyBase64(date, slot) {
    try {
      const key = slot === 'main' ? `main_${date}` : `pro${slot}_${date}`;
      const res = await fetch(SB_URL + `/rest/v1/photos?key=eq.${encodeURIComponent(key)}&select=data,mime_type`, {
        headers: SB_HEADERS
      });
      if (!res.ok) return null;
      const rows = await res.json();
      if (!rows || rows.length === 0 || !rows[0].data) return null;
      return { data: rows[0].data, mimeType: rows[0].mime_type || 'image/jpeg' };
    } catch(e) { return null; }
  },

  // 写真取得の統合エントリポイント: Storage優先、無ければ旧base64テーブルにフォールバック
  async fetchPhoto(date, slot) {
    const blob = await this.fetchPhotoBlob(date, slot);
    if (blob) return { blob, mimeType: blob.type || 'image/jpeg' };
    // フォールバック: 旧base64データを取得し、見つかれば自動でStorageに移行（書き戻し）
    const legacy = await this.fetchPhotoLegacyBase64(date, slot);
    if (legacy) {
      const legacyBlob = base64ToBlob(legacy.data, legacy.mimeType);
      // バックグラウンドでStorageに書き戻す（失敗しても致命的ではないのでawaitしない）
      this.uploadPhoto(date, slot, legacyBlob, legacy.mimeType);
      return { blob: legacyBlob, mimeType: legacy.mimeType };
    }
    return null;
  },

  async listPhotoKeys() {
    try {
      const res = await fetch(SB_URL + '/storage/v1/object/list/photos', {
        method: 'POST',
        headers: SB_HEADERS,
        body: JSON.stringify({
          prefix: '',
          limit: 1000,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' }
        })
      });
      if (!res.ok) return [];
      const rows = await res.json();
      return (rows || []).map(item => item.name).filter(Boolean);
    } catch(e) { return []; }
  },

  // 設定値（GAS URL・手動タスクなど）をkey-valueで保存
  async setSetting(key, value) {
    try {
      const cloudKey = scopedSettingKey(key);
      const res = await fetch(SB_URL + '/rest/v1/settings?on_conflict=key', {
        method: 'POST',
        headers: {...SB_HEADERS, 'Prefer':'resolution=merge-duplicates'},
        body: JSON.stringify({ key: cloudKey, value, updated_at: new Date().toISOString() })
      });
      return res.ok;
    } catch(e) { return false; }
  },

  // 設定値を取得
  async getSetting(key) {
    try {
      const cloudKey = scopedSettingKey(key);
      const res = await fetch(SB_URL + `/rest/v1/settings?key=eq.${encodeURIComponent(cloudKey)}&select=value`, {
        headers: SB_HEADERS
      });
      if (!res.ok) return null;
      const rows = await res.json();
      if (!rows || rows.length === 0) return null;
      return rows[0].value;
    } catch(e) { return null; }
  }
};

// base64 → Blob 変換
function base64ToBlob(base64, mimeType) {
  const bin = atob(base64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], {type: mimeType});
}

// IDBになければSupabaseから取得してキャッシュするフォトゲッター
async function getPhotoBlob(key) {
  let blob = await IDB.get(key);
  if (blob) return blob;
  // key: 'main_YYYY-MM-DD' or 'pro{N}_YYYY-MM-DD'
  const m = key.match(/^(main|pro\d)_(.+)$/);
  if (!m) return null;
  const slot = m[1] === 'main' ? 'main' : parseInt(m[1].slice(3));
  const date = m[2];
  const remote = await SB.fetchPhoto(date, slot);
  if (!remote) return null;
  blob = remote.blob;
  await IDB.set(key, blob);
  return blob;
}

const LENSES = ['55mm f2.8', 'Sigma 28-70', '16-50', '55-210', 'スマホ'];

// ローカルタイムゾーンでのYYYY-MM-DD文字列を返す
// （toISOString()はUTC基準のため、JST等のUTC+時間帯では深夜0-9時台に
//   前日の日付が返ってしまい「今日」のキーがずれるバグを防ぐ）
function getLocalDateStr(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

const state = {
  today: getLocalDateStr(),
  tab: 'today',
  lens: LENSES[0],
  tasks: [],
  tasksDone: LS.get('tasks_done') || {},
  doneTimers: {}, // key → タイマーID（完了から5分後に自動削除）
  taskNotificationTimers: [],
  checks: LS.get('checks') || {},
  scriptUrl: LS.get('script_url') || '',
  activeWeek: 1,
  photoObjUrl: null,
  proObjUrls: [null, null, null],
  device: '',
  logView: 'list',
  logSyncPromise: null,
  lastLogSyncAt: 0,
  logRenderId: 0,
  logQuery: '',
  logDateFilter: '',
  logMonthFilter: '',
  logLensFilter: 'all',
  logDeviceFilter: 'all',
  logCommentOnly: false,
  widgetView: LS.get('widget_view') || 'list',
  toastTimer: null,
  titleTimer: null,
  fullBackupTimer: null,
  lastFullBackupAt: 0,
  swRegistration: null,
  swReadyPromise: null,
  lastNotificationError: '',
  lastNotificationMethod: '',
  defaultTitle: document.title,
  calYear: new Date().getFullYear(),
  calMonth: new Date().getMonth(),
  todoTaskType: 'simple',
};

function fmtFull(s) {
  try { const d = new Date(s + 'T00:00:00'); return `${d.getMonth()+1}月${d.getDate()}日`; } catch { return s; }
}
function isOverdue(due) { return due && new Date(due + 'T23:59:59') < new Date(); }
function qs(sel) { return document.querySelector(sel); }
function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }

function initRuntimeGuard() {
  const guard = qs('#runtime-guard');
  if (!guard) return;
  guard.classList.toggle('show', location.protocol === 'file:');
  updateSyncHealth();
}
initRuntimeGuard();

// ── ライトモード切り替え ────────────────────────
(function initTheme() {
  const saved = LS.get('theme') || 'dark';
  if (saved === 'light') document.documentElement.classList.add('light');
  qs('#theme-btn').textContent = saved === 'light' ? '☽' : '☀';
})();

qs('#theme-btn').addEventListener('click', () => {
  const isLight = document.documentElement.classList.toggle('light');
  LS.set('theme', isLight ? 'light' : 'dark');
  qs('#theme-btn').textContent = isLight ? '☽' : '☀';
  qs('#theme-btn').setAttribute('aria-label', isLight ? 'ダークモードに切り替え' : 'ライトモードに切り替え');
});

// ── タブ切り替え ──────────────────────────────
function updateMainLayoutMode() {
  const main = qs('#main-content');
  if (!main) return;
  main.classList.toggle('todo-gantt-main', state.tab === 'todo');
}

function switchTab(tab) {
  if (!tab) return;
  state.tab = tab;
  updateMainLayoutMode();
  document.querySelectorAll('.tab-btn[data-tab],.utility-tab-btn[data-tab]').forEach(b => {
    const isActive = b.dataset.tab === tab;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
  const utilityTabs = new Set(['timer','clip','settings','data','widget']);
  qs('#nav-more-btn')?.classList.toggle('active', utilityTabs.has(tab));
  qs('#nav-more-menu')?.classList.add('hidden');
  qs('#nav-more-btn')?.setAttribute('aria-expanded', 'false');
  document.querySelectorAll('#tab-today,#tab-learn,#tab-plan,#tab-log,#tab-todo,#tab-widget,#tab-timer,#tab-clip,#tab-settings,#tab-data').forEach(d => d.classList.add('hidden'));
  const panel = document.getElementById('tab-' + tab);
  if (!panel) return;
  panel.classList.remove('hidden');
  if (tab === 'log') {
    renderLog();
  }
  if (tab === 'today') {
    renderCommandCenter();
  }
  if (tab === 'learn') renderLearn();
  if (tab === 'todo') {
    renderTodo();
    // Todoタブを開くたびに他端末で追加されたタスクを取り込む
    if (typeof syncSettingsFromSupabase === 'function') syncSettingsFromSupabase();
  }
  if (tab === 'widget') {
    renderTodoWidget();
    if (typeof syncSettingsFromSupabase === 'function') syncSettingsFromSupabase();
  }
  if (tab === 'clip') {
    renderClip();
    if (typeof syncClipsFromSupabase === 'function') syncClipsFromSupabase();
  }
  if (tab === 'settings') {
    if (typeof updateNotificationStatus === 'function') updateNotificationStatus();
    if (typeof updateSyncHealth === 'function') updateSyncHealth();
    if (typeof updateAccountStatus === 'function') updateAccountStatus();
    if (typeof syncSettingsFromSupabase === 'function') syncSettingsFromSupabase();
  }
  if (tab === 'data') {
    if (typeof updateSyncHealth === 'function') updateSyncHealth();
    if (typeof renderAutoBackupStatus === 'function') renderAutoBackupStatus();
  }
}
document.querySelectorAll('.tab-btn[data-tab],.utility-tab-btn[data-tab]').forEach(b => b.addEventListener('click', () => switchTab(b.dataset.tab)));
qs('#nav-more-btn')?.addEventListener('click', e => {
  e.stopPropagation();
  const menu = qs('#nav-more-menu');
  const open = menu?.classList.toggle('hidden') === false;
  qs('#nav-more-btn')?.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.addEventListener('click', e => {
  if (e.target?.closest?.('.nav-more-wrap')) return;
  qs('#nav-more-menu')?.classList.add('hidden');
  qs('#nav-more-btn')?.setAttribute('aria-expanded', 'false');
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  qs('#nav-more-menu')?.classList.add('hidden');
  qs('#nav-more-btn')?.setAttribute('aria-expanded', 'false');
});
qs('#sync-pill')?.addEventListener('click', () => switchTab('settings'));
qs('#sync-key-save-btn')?.addEventListener('click', saveSyncKeyFromInput);
qs('#sync-key-restore-btn')?.addEventListener('click', restoreFromSyncKey);
qs('#sync-key-clear-btn')?.addEventListener('click', clearSyncKey);
qs('#sync-key-input')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') saveSyncKeyFromInput();
});
qs('#email-login-btn')?.addEventListener('click', signInWithEmail);
qs('#email-signup-btn')?.addEventListener('click', signUpWithEmail);
qs('#email-account-save-btn')?.addEventListener('click', saveCurrentDataToEmailAccount);
qs('#email-account-restore-btn')?.addEventListener('click', restoreFromEmailAccount);
qs('#email-logout-btn')?.addEventListener('click', logoutEmailAccount);
qs('#email-password-input')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') signInWithEmail();
});
qs('#widget-list-btn')?.addEventListener('click', () => {
  state.widgetView = 'list';
  LS.set('widget_view', 'list');
  renderTodoWidget();
});
qs('#widget-gantt-btn')?.addEventListener('click', () => {
  state.widgetView = 'gantt';
  LS.set('widget_view', 'gantt');
  renderTodoWidget();
});
function getInitialTabFromUrl() {
  const allowed = ['today','learn','plan','log','todo','widget','timer','clip','settings','data'];
  const params = new URLSearchParams(location.search);
  const fromQuery = params.get('tab');
  const fromHash = location.hash ? location.hash.replace('#', '') : '';
  if (allowed.includes(fromQuery)) return fromQuery;
  if (allowed.includes(fromHash)) return fromHash;
  return '';
}

const initialTab = getInitialTabFromUrl();
if (initialTab && initialTab !== 'today') switchTab(initialTab);
updateAccountStatus();

// ── 日付表示＋ストリーク ──────────────────────
(function() {
  const d = new Date();
  qs('#day-date').textContent = d.toLocaleDateString('ja-JP', {month:'long', day:'numeric'});
  qs('#day-weekday').textContent = d.toLocaleDateString('ja-JP', {weekday:'long'}).toUpperCase();
  const meta = LS.get('meta') || {};
  let s = 0;
  for (let i = 0; i < 60; i++) {
    const dd = new Date(); dd.setDate(dd.getDate() - i);
    const k = getLocalDateStr(dd);
    if (meta[k]?.comment || meta[k]?.proMemos?.some(x=>x)) s++;
    else if (i > 0) break;
  }
  if (s > 1) qs('#streak').textContent = s + '日連続';
})();

// ── 進捗バナー ────────────────────────────────
function renderProgressBanner() {
  const meta = LS.get('meta') || {};
  const logCount = Object.keys(meta).filter(d => meta[d]?.comment).length;
  const weekNum = Math.min(Math.floor(logCount / 5) + 1, 6);
  const logInWeek = logCount - (weekNum - 1) * 5;
  const cur = CURRICULUM.find(c => c.week === weekNum);
  if (!cur) return;
  qs('#pb-week').textContent = `WEEK ${weekNum} / 6  ·  ${WEEKS[weekNum-1]?.theme || ''}`;
  qs('#pb-theme').textContent = cur.shooting.theme + ' / ' + cur.editing.theme;
  const pct = Math.min(100, Math.round((logInWeek / 5) * 100));
  qs('#pb-fill').style.width = pct + '%';
  qs('#pb-label').textContent = `今週 ${logInWeek}/5 ログ達成`;
}
// クリックイベントは一度だけ登録（renderProgressBanner()が複数回呼ばれても重複登録しない）
qs('#progress-banner').addEventListener('click', () => switchTab('learn'));
renderProgressBanner();
renderCommandCenter();

function daysFromToday(dateStr) {
  if (!dateStr) return null;
  const today = new Date(getLocalDateStr() + 'T00:00:00');
  const date = new Date(dateStr + 'T00:00:00');
  if (Number.isNaN(date.getTime())) return null;
  return Math.round((date - today) / 86400000);
}

function commandDeadlineLabel(days) {
  if (days === null) return '日時なし';
  if (days < 0) return `${Math.abs(days)}日超過`;
  if (days === 0) return '今日';
  if (days === 1) return '明日';
  return `あと${days}日`;
}

function commandTone(days) {
  if (days === null) return '';
  if (days < 0 || days <= 3) return 'hot';
  if (days <= 7) return 'warn';
  return '';
}

function commandTaskSortValue(item) {
  if (item.days === null) return 2000 - priorityRank(item.task.priority);
  if (item.days < 0) return -1000 + item.days - priorityRank(item.task.priority);
  return item.days * 10 - priorityRank(item.task.priority);
}

function addCommandTaskButton(parent, item, options = {}) {
  const task = item.task || item;
  const days = item.days ?? daysFromToday(task.due);
  const tone = item.tone || commandTone(days);
  const btn = el('button', options.large ? 'command-action-card' + (tone ? ' ' + tone : '') : 'command-row');
  btn.type = 'button';
  btn.addEventListener('click', () => openTodoDetail(task));
  if (options.large) {
    const kicker = el('div', 'command-action-kicker');
    kicker.textContent = item.kicker || 'CHECK';
    const title = el('div', 'command-action-title');
    title.textContent = task.title || 'Untitled';
    const meta = el('div', 'command-action-meta');
    [commandDeadlineLabel(days), task.subject, priorityLabel(task.priority), getSubtaskProgress(task).text]
      .filter(Boolean)
      .forEach(text => {
        const chip = el('span');
        chip.textContent = text;
        meta.appendChild(chip);
      });
    btn.appendChild(kicker);
    btn.appendChild(title);
    btn.appendChild(meta);
  } else {
    const left = el('div');
    const title = el('div', 'command-row-title');
    title.textContent = item.title || task.title || 'Untitled';
    const meta = el('div', 'command-row-meta');
    meta.textContent = item.meta || [task.subject, priorityLabel(task.priority), getTaskDateLabel(task)].filter(Boolean).join(' / ');
    const badge = el('div', 'command-row-badge' + (tone ? ' ' + tone : ''));
    badge.textContent = item.badge || commandDeadlineLabel(days);
    left.appendChild(title);
    left.appendChild(meta);
    btn.appendChild(left);
    btn.appendChild(badge);
  }
  parent.appendChild(btn);
}

function addCommandLink(parent, label, onClick, className = 'ghost-btn') {
  const btn = el('button', className);
  btn.type = 'button';
  btn.textContent = label;
  btn.addEventListener('click', onClick);
  parent.appendChild(btn);
}

function normalizeInboxItems(items) {
  return Array.isArray(items) ? items.map(item => ({
    id: item.id || 'inbox_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    text: String(item.text || '').trim(),
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || item.createdAt || new Date().toISOString(),
    typeHint: item.typeHint || inferInboxType(item.text || ''),
    archived: !!item.archived,
    convertedToTaskId: item.convertedToTaskId || '',
    source: item.source || 'quick-capture',
    dueCandidate: item.dueCandidate || '',
    dueTimeCandidate: item.dueTimeCandidate || '',
  })).filter(item => item.text) : [];
}

function getInboxItems() {
  return normalizeInboxItems(LS.get('inbox_items'));
}

function saveInboxItems(items, sync = true) {
  const normalized = normalizeInboxItems(items).slice(-200);
  LS.set('inbox_items', normalized);
  if (sync && typeof SB !== 'undefined' && typeof SB.setSetting === 'function') {
    SB.setSetting('inbox_items', normalized);
  }
  return normalized;
}

function inferInboxType(text) {
  const value = String(text || '').trim();
  if (!value) return 'note';
  if (/写真|photo|ログ|撮影/i.test(value)) return 'photo';
  if (/サブタスク|作業ステップ|字幕|編集|確認|準備/.test(value)) return 'subtask';
  if (/課題|締切|やる|提出|予約|勉強|todo|タスク/i.test(value)) return 'task';
  return 'note';
}

function inferInboxDue(text) {
  const value = String(text || '');
  const today = new Date(); today.setHours(0,0,0,0);
  const due = new Date(today);
  if (/明日/.test(value)) due.setDate(today.getDate() + 1);
  else if (/今日|本日/.test(value)) due.setDate(today.getDate());
  else {
    const md = value.match(/(\d{1,2})[\/月](\d{1,2})日?/);
    if (!md) return { dueCandidate: '', dueTimeCandidate: '' };
    due.setMonth(Number(md[1]) - 1, Number(md[2]));
    if (due < today) due.setFullYear(due.getFullYear() + 1);
  }
  const time = value.match(/(\d{1,2})[:時](\d{2})?/);
  return {
    dueCandidate: getLocalDateStr(due),
    dueTimeCandidate: time ? `${String(Math.min(23, Number(time[1]))).padStart(2,'0')}:${String(Number(time[2] || 0)).padStart(2,'0')}` : '',
  };
}

function formatInboxCreatedAt(item) {
  const d = new Date(item.createdAt);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleString('ja-JP', {month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit'});
}

function inboxTypeLabel(type) {
  if (type === 'task') return 'TASK';
  if (type === 'photo') return 'PHOTO';
  if (type === 'subtask') return 'STEP';
  return 'NOTE';
}

function addInboxItemFromText(rawText, source = 'quick-capture') {
  const text = String(rawText || '').trim();
  if (!text) return null;
  const now = new Date().toISOString();
  const due = inferInboxDue(text);
  const item = {
    id: 'inbox_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    text,
    createdAt: now,
    updatedAt: now,
    typeHint: inferInboxType(text),
    archived: false,
    source,
    ...due,
  };
  saveInboxItems([...getInboxItems(), item]);
  return item;
}

function archiveInboxItem(id) {
  const items = getInboxItems().map(item => item.id === id ? {...item, archived: true, updatedAt: new Date().toISOString()} : item);
  saveInboxItems(items);
  renderCommandCenter();
}

function deleteInboxItem(id) {
  saveInboxItems(getInboxItems().filter(item => item.id !== id));
  renderCommandCenter();
}

async function convertInboxItemToTodo(id) {
  const items = getInboxItems();
  const item = items.find(x => x.id === id);
  if (!item) return;
  const taskId = 'manual_' + Date.now();
  const task = normalizeTask({
    id: taskId,
    title: item.text,
    subject: '',
    category: '',
    priority: 'normal',
    repeat: 'none',
    description: item.text,
    milestones: [],
    subtasks: [],
    _manual: true,
    dateType: item.dueCandidate ? 'deadline' : 'none',
    due: item.dueCandidate || '',
    dueDate: item.dueCandidate || '',
    dueTime: item.dueTimeCandidate || '',
    updatedAt: now,
  });
  const manual = normalizeManualTasks(LS.get('manual_tasks'));
  await saveManualTasks([...manual, task]);
  const now = new Date().toISOString();
  saveInboxItems(items.map(x => x.id === id ? {...x, archived: true, convertedToTaskId: taskId, updatedAt: now} : x));
  renderCommandCenter();
  if (state.tab === 'todo') renderTodo();
}

function renderQuickCapture(parent) {
  const box = el('div', 'quick-capture');
  const head = el('div', 'quick-capture-head');
  const title = el('div', 'quick-capture-title');
  title.textContent = 'Quick Capture';
  const count = el('div', 'quick-capture-count');
  const activeCount = getInboxItems().filter(item => !item.archived && !item.convertedToTaskId).length;
  count.textContent = activeCount ? `${activeCount} INBOX` : 'INBOX CLEAR';
  head.appendChild(title);
  head.appendChild(count);
  const form = el('div', 'quick-capture-form');
  const input = el('textarea', 'quick-capture-input');
  input.rows = 1;
  input.placeholder = '思いついたことをそのまま入力';
  input.setAttribute('aria-label', 'Quick Captureに追加する内容');
  bindImeCompositionGuard(input);
  const btn = el('button', 'quick-capture-btn');
  btn.type = 'button';
  btn.textContent = '追加';
  const msg = el('div', 'quick-capture-msg');
  msg.setAttribute('aria-live', 'polite');
  const submit = () => {
    const item = addInboxItemFromText(input.value);
    if (!item) {
      msg.textContent = '内容を入力してください';
      input.focus();
      return;
    }
    input.value = '';
    msg.textContent = `Inboxに保存しました: ${inboxTypeLabel(item.typeHint)}`;
    renderCommandCenter();
  };
  btn.addEventListener('click', submit);
  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter' || e.shiftKey) return;
    if (isImeComposingEvent(e)) return;
    e.preventDefault();
    submit();
  });
  form.appendChild(input);
  form.appendChild(btn);
  box.appendChild(head);
  box.appendChild(form);
  box.appendChild(msg);
  parent.appendChild(box);
}

function renderInboxPanel(parent) {
  const items = getInboxItems()
    .filter(item => !item.archived && !item.convertedToTaskId)
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  const title = el('div', 'command-panel-title');
  title.style.marginTop = '18px';
  title.textContent = 'Inbox / 未整理';
  parent.appendChild(title);
  const list = el('div', 'inbox-list');
  if (!items.length) {
    const empty = el('div', 'command-empty');
    empty.textContent = '未整理のメモはありません。思いついた課題や制作メモはQuick Captureに置いておけます。';
    list.appendChild(empty);
  } else {
    items.slice(0, 6).forEach(item => {
      const row = el('div', 'inbox-row');
      const main = el('div', 'inbox-main');
      const text = el('div', 'inbox-text');
      text.textContent = item.text;
      const meta = el('div', 'inbox-meta');
      const due = item.dueCandidate ? ` / 候補 ${fmtFull(item.dueCandidate)}${item.dueTimeCandidate ? ' ' + item.dueTimeCandidate : ''}` : '';
      meta.textContent = `${inboxTypeLabel(item.typeHint)} / ${formatInboxCreatedAt(item)}${due}`;
      main.appendChild(text);
      main.appendChild(meta);
      const actions = el('div', 'inbox-actions');
      const todo = el('button', 'inbox-action primary');
      todo.type = 'button';
      todo.textContent = 'TODO';
      todo.addEventListener('click', () => convertInboxItemToTodo(item.id));
      const archive = el('button', 'inbox-action');
      archive.type = 'button';
      archive.textContent = '保管';
      archive.addEventListener('click', () => archiveInboxItem(item.id));
      const del = el('button', 'inbox-action danger');
      del.type = 'button';
      del.textContent = '削除';
      del.addEventListener('click', () => deleteInboxItem(item.id));
      actions.appendChild(todo);
      actions.appendChild(archive);
      actions.appendChild(del);
      row.appendChild(main);
      row.appendChild(actions);
      list.appendChild(row);
    });
    if (items.length > 6) {
      const more = el('div', 'inbox-more');
      more.textContent = `ほか ${items.length - 6} 件`;
      list.appendChild(more);
    }
  }
  parent.appendChild(list);
}

function getRecentLogItems(limit = 2) {
  const meta = LS.get('meta') || {};
  return Object.entries(meta)
    .filter(([, data]) => hasLogContent(data))
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, limit)
    .map(([date, data]) => ({ date, data }));
}

function renderCommandCenter() {
  const wrap = qs('#command-center');
  if (!wrap) return;
  const tasks = getAllTasks();
  const active = tasks.filter(t => !isTaskDone(getTaskKey(t)));
  const dueItems = active
    .map(task => ({ task, days: daysFromToday(task.due) }))
    .filter(item => item.days !== null);
  const overdue = dueItems.filter(item => item.days < 0);
  const today = dueItems.filter(item => item.days === 0);
  const within3 = dueItems.filter(item => item.days >= 0 && item.days <= 3);
  const within7 = dueItems.filter(item => item.days >= 0 && item.days <= 7);
  const noDue = active.filter(t => !t.due);
  const subtaskItems = active.flatMap(task => getSubtasks(task)
    .filter(ms => !ms.completed)
    .map(ms => {
      const subDays = daysFromToday(ms.dueDate);
      const parentDays = daysFromToday(task.due);
      return {
        task,
        ms,
        days: subDays ?? parentDays,
        title: `${task.title || 'Untitled'}: ${ms.title || 'サブタスク'}`,
        meta: ms.dueDate ? `サブタスク期限 ${fmtFull(ms.dueDate)}${ms.dueTime ? ' ' + ms.dueTime : ''}` : `親タスク ${getTaskDateLabel(task)}`,
        badge: ms.dueDate ? commandDeadlineLabel(subDays) : commandDeadlineLabel(parentDays),
        tone: commandTone(subDays ?? parentDays),
      };
    }));
  subtaskItems.sort((a, b) => commandTaskSortValue(a) - commandTaskSortValue(b));
  const subtaskTotal = active.reduce((sum, task) => sum + getSubtasks(task).length, 0);
  const subtaskDone = active.reduce((sum, task) => sum + getSubtasks(task).filter(ms => ms.completed).length, 0);
  const priorityItems = [
    ...overdue.map(item => ({ ...item, kicker: 'OVERDUE' })),
    ...today.map(item => ({ ...item, kicker: 'TODAY' })),
    ...within3.filter(item => item.days > 0).map(item => ({ ...item, kicker: 'NEXT 3 DAYS' })),
    ...dueItems.filter(item => item.task.priority === 'high').map(item => ({ ...item, kicker: 'HIGH PRIORITY' })),
  ]
    .filter((item, index, arr) => arr.findIndex(x => getTaskKey(x.task) === getTaskKey(item.task)) === index)
    .sort((a, b) => commandTaskSortValue(a) - commandTaskSortValue(b))
    .slice(0, 3);
  const recentLogs = getRecentLogItems(2);

  wrap.innerHTML = '';
  const captureSlot = qs('#quick-capture-slot');
  if (captureSlot) {
    captureSlot.innerHTML = '';
    renderQuickCapture(captureSlot);
  }
  const head = el('div', 'command-center-head');
  const headText = el('div');
  const title = el('div', 'command-center-title');
  title.textContent = 'Today Command Center';
  const sub = el('div', 'command-center-sub');
  sub.textContent = '今すぐ見るべき3件、次の作業ステップ、締め切りと未整理メモをまとめます。写真の記録は上の入力欄から残せます。';
  const date = el('div', 'command-center-date');
  date.textContent = new Date().toLocaleDateString('ja-JP', {year:'numeric', month:'numeric', day:'numeric', weekday:'short'});
  headText.appendChild(title);
  headText.appendChild(sub);
  head.appendChild(headText);
  head.appendChild(date);
  wrap.appendChild(head);

  const metrics = el('div', 'command-metrics');
  [
    ['未完了', active.length, 'ACTIVE', active.length ? '' : ''],
    ['期限切れ', overdue.length, 'OVERDUE', overdue.length ? 'hot' : ''],
    ['7日以内', within7.length, 'DEADLINES', within3.length ? 'warn' : ''],
    ['サブタスク', subtaskTotal ? `${subtaskDone}/${subtaskTotal}` : '0', 'STEPS', subtaskTotal && subtaskDone === subtaskTotal ? '' : ''],
  ].forEach(([label, value, note, tone]) => {
    const cell = el('div', 'command-metric' + (tone ? ' ' + tone : ''));
    const num = el('div', 'command-metric-num');
    num.textContent = String(value);
    const lab = el('div', 'command-metric-label');
    lab.textContent = `${label} / ${note}`;
    cell.appendChild(num);
    cell.appendChild(lab);
    metrics.appendChild(cell);
  });

  const grid = el('div', 'command-grid');
  const left = el('div', 'command-panel command-main-card');
  const leftTitle = el('div', 'command-panel-title');
  leftTitle.textContent = '今すぐ見るべきこと';
  left.appendChild(leftTitle);
  if (priorityItems.length) {
    priorityItems.forEach(item => addCommandTaskButton(left, item, { large: true }));
    const extraImportant = Math.max(0, overdue.length + today.length + within3.filter(item => item.days > 0).length - priorityItems.length);
    if (extraImportant > 0) {
      const more = el('div', 'inbox-more');
      more.textContent = `残り ${extraImportant} 件は締め切り欄で確認`;
      left.appendChild(more);
    }
  } else {
    const empty = el('div', 'command-empty');
    empty.textContent = active.length ? '今すぐ危ない締め切りはありません。次の作業ステップを確認しましょう。' : '未完了タスクはありません。写真や制作メモを残して、次の計画を追加できます。';
    left.appendChild(empty);
  }
  const quickLinks = el('div', 'command-links');
  addCommandLink(quickLinks, 'TODOを開く', () => {
    state.todoView = 'list';
    qs('#todo-view-list-btn')?.classList.add('active');
    qs('#todo-view-gantt-btn')?.classList.remove('active');
    switchTab('todo');
  });
  addCommandLink(quickLinks, 'ガントを見る', () => {
    state.todoView = 'gantt';
    qs('#todo-view-gantt-btn')?.classList.add('active');
    qs('#todo-view-list-btn')?.classList.remove('active');
    switchTab('todo');
  });
  addCommandLink(quickLinks, '記録を書く', () => qs('#photo-comment')?.focus());
  left.appendChild(quickLinks);

  const right = el('div', 'command-panel');
  const stepTitle = el('div', 'command-panel-title');
  stepTitle.textContent = '次の作業ステップ';
  right.appendChild(stepTitle);
  const stepList = el('div', 'command-section-list');
  const shownStepTaskKeys = new Set();
  if (subtaskItems.length) {
    subtaskItems.slice(0, 3).forEach(item => {
      shownStepTaskKeys.add(getTaskKey(item.task));
      addCommandTaskButton(stepList, item);
    });
    if (subtaskItems.length > 3) {
      const more = el('div', 'inbox-more');
      more.textContent = `残り ${subtaskItems.length - 3} 件`;
      stepList.appendChild(more);
    }
  } else {
    const empty = el('div', 'command-empty');
    empty.textContent = '未完了のサブタスクはありません。タスク詳細から作業ステップを追加すると、ここに次の一手が出ます。';
    stepList.appendChild(empty);
  }
  right.appendChild(stepList);

  const deadlineTitle = el('div', 'command-panel-title');
  deadlineTitle.style.marginTop = '18px';
  deadlineTitle.textContent = '直近の締め切り';
  right.appendChild(deadlineTitle);
  const deadlineList = el('div', 'command-section-list');
  const deadlineItems = dueItems
    .filter(item => item.days <= 7)
    .filter(item => !shownStepTaskKeys.has(getTaskKey(item.task)))
    .sort((a, b) => commandTaskSortValue(a) - commandTaskSortValue(b))
    .slice(0, 3);
  if (deadlineItems.length) {
    deadlineItems.forEach(item => addCommandTaskButton(deadlineList, item));
    const deadlineRemainder = dueItems.filter(item => item.days <= 7 && !shownStepTaskKeys.has(getTaskKey(item.task))).length - deadlineItems.length;
    if (deadlineRemainder > 0) {
      const more = el('div', 'inbox-more');
      more.textContent = `残り ${deadlineRemainder} 件`;
      deadlineList.appendChild(more);
    }
  } else {
    const empty = el('div', 'command-empty');
    empty.textContent = noDue.length ? `日時なしタスクが${noDue.length}件あります。必要なら期限を追加してください。` : '7日以内の締め切りはありません。';
    deadlineList.appendChild(empty);
  }
  right.appendChild(deadlineList);

  const logTitle = el('div', 'command-panel-title');
  logTitle.style.marginTop = '18px';
  logTitle.textContent = '記録への入口';
  right.appendChild(logTitle);
  const logList = el('div', 'command-section-list');
  if (recentLogs.length) {
    recentLogs.forEach(item => {
      const row = el('button', 'command-row');
      row.type = 'button';
      row.addEventListener('click', () => {
        switchTab('log');
        setTimeout(() => showLogDetail(item.date), 0);
      });
      const leftLog = el('div');
      const rowTitle = el('div', 'command-row-title');
      rowTitle.textContent = item.data.comment || item.data.proMemos?.find(Boolean) || '制作ログ';
      const rowMeta = el('div', 'command-row-meta');
      rowMeta.textContent = [fmtFull(item.date), item.data.lens, item.data.device].filter(Boolean).join(' / ');
      const badge = el('div', 'command-row-badge');
      badge.textContent = item.data.hasPhoto ? 'PHOTO' : 'TEXT';
      leftLog.appendChild(rowTitle);
      leftLog.appendChild(rowMeta);
      row.appendChild(leftLog);
      row.appendChild(badge);
      logList.appendChild(row);
    });
  } else {
    const empty = el('div', 'command-empty');
    empty.textContent = 'まだ記録がありません。写真や制作メモを追加して、作業の流れを残しましょう。';
    logList.appendChild(empty);
  }
  const logLinks = el('div', 'command-links');
  addCommandLink(logLinks, 'ログ一覧', () => switchTab('log'));
  addCommandLink(logLinks, '今日の写真記録', () => qs('#photo-drop')?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  right.appendChild(logList);
  right.appendChild(logLinks);
  renderInboxPanel(right);

  grid.appendChild(left);
  grid.appendChild(right);
  wrap.appendChild(metrics);
  wrap.appendChild(grid);
}

// ── 通知 ────────────────────────────────────
const LOCALHOST_RE = /^(localhost|127\.0\.0\.1|\[::1\])$/;
const LOCAL_APP_URL = 'http://127.0.0.1:8766/index.html';
const GH_PAGES_URL = 'https://kmc2512-crypto.github.io/Photo-tracker/';

function isNotificationSecureOrigin() {
  return window.isSecureContext || location.protocol === 'https:' || (location.protocol === 'http:' && LOCALHOST_RE.test(location.hostname));
}

function notificationStatus() {
  if (location.protocol === 'file:') return 'file';
  if (!('Notification' in window)) return 'unsupported';
  if (!isNotificationSecureOrigin()) return 'insecure';
  return Notification.permission;
}

function notificationStatusMessage() {
  const status = notificationStatus();
  if (status === 'file') return '通知の本番運用はlocalhostまたはGitHub Pagesで開いてください。file表示ではOS通知・Service Workerが安定しません。';
  if (status === 'unsupported') return 'このブラウザではOS通知機能が使えません。ページ内通知で代替します。ChromeやSafariで開くとOS通知を使える可能性があります。';
  if (status === 'insecure') return '通知許可を出すにはlocalhostまたはhttpsで開いてください。今はページ内通知で代替します。';
  if (status === 'denied') return '通知がブロックされています。ブラウザまたはmacOS設定でこのページの通知を許可してください。';
  if (status === 'granted') return 'OS通知は許可されています。テスト通知を送信できます。';
  return '課題の締め切り通知を受け取りますか？';
}

function sentBodyForStatus(status) {
  if (status === 'granted') return 'Photo Tracker のOS通知が有効です。';
  if (status === 'file') return 'file表示ではOS通知が安定しないため、ページ内通知で表示しています。';
  if (status === 'unsupported') return 'このブラウザではOS通知が使えないため、ページ内通知で表示しています。';
  if (status === 'denied') return 'OS通知がブロックされているため、ページ内通知で表示しています。';
  if (status === 'insecure') return 'このURLではOS通知許可を出せないため、ページ内通知で表示しています。';
  return 'OS通知の許可がまだないため、ページ内通知で表示しています。';
}

function canNotify() {
  return notificationStatus() === 'granted';
}

function canUseServiceWorkerNotifications() {
  return 'serviceWorker' in navigator && isNotificationSecureOrigin();
}

function ensureNotificationWorker() {
  if (!canUseServiceWorkerNotifications()) return Promise.resolve(null);
  if (state.swRegistration) return Promise.resolve(state.swRegistration);
  if (state.swReadyPromise) return state.swReadyPromise;
  const swUrl = new URL('sw.js', location.href).href;
  state.swReadyPromise = navigator.serviceWorker.register(swUrl)
    .then(() => navigator.serviceWorker.ready)
    .then(reg => {
      state.swRegistration = reg;
      return reg;
    })
    .catch(e => {
      state.lastNotificationError = 'Service Worker登録失敗: ' + e.message;
      return null;
    });
  return state.swReadyPromise;
}

function flashDocumentTitle(title) {
  clearTimeout(state.titleTimer);
  document.title = `● ${title}`;
  state.titleTimer = setTimeout(() => {
    document.title = state.defaultTitle;
  }, 5000);
}

function showAppToast(title, body = '') {
  const toast = qs('#app-toast');
  qs('#app-toast-title').textContent = title;
  qs('#app-toast-body').textContent = body;
  toast.classList.add('show');
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove('show'), 8000);
  flashDocumentTitle(title);
}

function confirmAction({ title = '確認', body = '', okText = '実行' }) {
  return new Promise(resolve => {
    const modal = qs('#confirm-modal');
    const ok = qs('#confirm-ok-btn');
    const cancel = qs('#confirm-cancel-btn');
    const previousFocus = document.activeElement;
    qs('#confirm-title').textContent = title;
    qs('#confirm-body').textContent = body;
    ok.textContent = okText;
    modal.classList.remove('hidden');
    const close = result => {
      modal.classList.add('hidden');
      ok.removeEventListener('click', onOk);
      cancel.removeEventListener('click', onCancel);
      modal.removeEventListener('click', onBackdrop);
      document.removeEventListener('keydown', onKeydown);
      if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
      resolve(result);
    };
    const onOk = () => close(true);
    const onCancel = () => close(false);
    const onBackdrop = e => { if (e.target === modal) close(false); };
    const onKeydown = e => {
      if (e.key === 'Escape') close(false);
    };
    ok.addEventListener('click', onOk);
    cancel.addEventListener('click', onCancel);
    modal.addEventListener('click', onBackdrop);
    document.addEventListener('keydown', onKeydown);
    setTimeout(() => cancel.focus(), 0);
  });
}

function updateNotificationStatus() {
  const statusEl = qs('#notif-status');
  if (!statusEl) return;
  const status = notificationStatus();
  const leads = getNotifLeads();
  const activeLeads = [
    leads.dayBefore !== false ? '前日' : '',
    leads.hourBefore !== false ? '1時間前' : '',
    leads.dueTime !== false ? '締切時刻' : '',
    leads.dayOf !== false ? '当日' : '',
  ].filter(Boolean).join(' / ') || 'なし';
  const origin = location.protocol === 'file:' ? 'FILE' : (location.hostname.includes('github.io') ? 'GITHUB PAGES' : 'LOCALHOST');
  statusEl.textContent = `${origin} · ${notificationStatusMessage()} · ${activeLeads}`;
  const banner = qs('#notif-banner');
  if (banner && status !== 'default') banner.classList.add('hidden');
}

function playNotificationChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.28);
    gain.connect(ctx.destination);
    [880, 1174].forEach((freq, index) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.connect(gain);
      osc.start(ctx.currentTime + index * 0.08);
      osc.stop(ctx.currentTime + 0.32 + index * 0.08);
    });
    setTimeout(() => ctx.close(), 700);
  } catch(e) {}
}

function showNotification(title, options = {}, fallback = true) {
  showNotificationAsync(title, options, fallback);
  return canNotify();
}

function buildNotificationOptions(options = {}) {
  const out = {
    body: options.body,
    data: options.data || { url: location.href },
    requireInteraction: options.requireInteraction,
    silent: options.silent,
    timestamp: options.timestamp || Date.now(),
  };
  if (options.badge) out.badge = options.badge;
  if (options.icon) out.icon = options.icon;
  if (options.tag) out.tag = options.tag;
  if (options.renotify && options.tag) out.renotify = true;
  return out;
}

async function showNotificationAsync(title, options = {}, fallback = true) {
  let osSent = false;
  try {
    if (canNotify()) {
      const reg = await ensureNotificationWorker();
      if (reg?.showNotification) {
        await reg.showNotification(title, buildNotificationOptions(options));
        osSent = true;
        state.lastNotificationMethod = 'serviceWorker.showNotification';
      } else {
        new Notification(title, buildNotificationOptions(options));
        osSent = true;
        state.lastNotificationMethod = 'new Notification';
      }
    }
  } catch(e) {
    osSent = false;
    state.lastNotificationError = e.message || String(e);
  }

  if (fallback) {
    const body = options.body || (osSent ? 'OS通知も呼び出しました' : '通知を画面内で表示しました');
    showAppToast(osSent ? `${title} / OS通知呼び出し済み` : title, body);
    if (!osSent) playNotificationChime();
  }
  return osSent;
}

async function diagnoseNotifications() {
  let reg = null;
  if (canUseServiceWorkerNotifications()) reg = await ensureNotificationWorker();
  const lines = [
    '通知診断',
    `URL: ${location.href}`,
    `recommended local URL: ${LOCAL_APP_URL}`,
    `GitHub Pages URL: ${GH_PAGES_URL}`,
    `secureContext: ${window.isSecureContext ? 'yes' : 'no'}`,
    `Notification API: ${'Notification' in window ? 'yes' : 'no'}`,
    `Notification.permission: ${'Notification' in window ? Notification.permission : 'missing'}`,
    `Service Worker API: ${'serviceWorker' in navigator ? 'yes' : 'no'}`,
    `Service Worker登録: ${reg ? 'yes' : 'no'}`,
    `Service Worker scope: ${reg?.scope || '-'}`,
    `Service Worker controller: ${navigator.serviceWorker?.controller ? 'yes' : 'no'}`,
    `local notif setting: ${LS.get('notif') || '-'}`,
    `last method: ${state.lastNotificationMethod || '-'}`,
    `last error: ${state.lastNotificationError || '-'}`,
  ];
  if ('Notification' in window && Notification.permission === 'denied') {
    lines.push('');
    lines.push('原因: ブラウザがこのURLの通知を denied と返しています。コードからはOS通知を出せません。');
    lines.push('対処: ブラウザ/アプリ側のサイト設定で 127.0.0.1:8766 の通知許可をリセットしてから再許可してください。');
  } else if (!('Notification' in window)) {
    lines.push('');
    lines.push('原因: このブラウザ環境にNotification APIがありません。OS通知は出せません。');
    lines.push('対処: Chrome/Safariなど通常ブラウザで http://127.0.0.1:8766/index.html を開いてください。');
  } else if (!reg) {
    lines.push('');
    lines.push('原因: Service Workerを登録できていません。OS通知の強化経路が使えません。');
  }
  qs('#notif-diag').textContent = lines.join('\n');
  qs('#notif-diag').classList.remove('hidden');
  setNotifBanner(notificationStatusMessage());
  updateNotificationStatus();
}

function requestBrowserPermission() {
  const request = Notification.requestPermission();
  if (request && typeof request.then === 'function') return request;
  return new Promise(resolve => Notification.requestPermission(resolve));
}

function getNotifLeads() {
  return LS.get('notif_leads') || { dayBefore: true, hourBefore: true, dueTime: true, dayOf: true };
}

function saveNotifLeads(leads) {
  LS.set('notif_leads', leads);
  scheduleTaskNotifications();
  updateNotificationStatus();
}

function initNotifLeadControls() {
  const leads = getNotifLeads();
  document.querySelectorAll('[data-notif-lead]').forEach(input => {
    input.checked = leads[input.dataset.notifLead] !== false;
    input.addEventListener('change', () => {
      const next = getNotifLeads();
      next[input.dataset.notifLead] = input.checked;
      saveNotifLeads(next);
    });
  });
}

function setNotifBanner(message, visible = true) {
  qs('#notif-banner-text').textContent = message;
  qs('#notif-banner').classList.toggle('hidden', !visible);
}

function hideNotifBannerSoon(delay = 2400) {
  setTimeout(() => qs('#notif-banner').classList.add('hidden'), delay);
}

function setNotifButtonBusy(isBusy) {
  const btn = qs('#notif-allow-btn');
  btn.disabled = isBusy;
  btn.textContent = isBusy ? '確認中' : '許可する';
}

async function requestNotifPermission() {
  if (location.protocol === 'file:') {
    LS.set('notif', 'file');
    setNotifBanner(notificationStatusMessage());
    updateNotificationStatus();
    showNotification('通知テスト', { body: '通知の本番運用はlocalhostまたはGitHub Pagesで開いてください。' });
    return;
  }

  if (!('Notification' in window)) {
    LS.set('notif', 'unsupported');
    setNotifBanner(notificationStatusMessage());
    updateNotificationStatus();
    showNotification('通知テスト', { body: 'このブラウザではOS通知が使えないため、ページ内通知で代替表示しています。' });
    return;
  }

  if (!isNotificationSecureOrigin()) {
    LS.set('notif', 'needs_secure_origin');
    setNotifBanner(notificationStatusMessage());
    updateNotificationStatus();
    showNotification('通知テスト', { body: 'OS通知は安全なURLで開くと使えます。今はページ内通知で代替表示しています。' });
    return;
  }

  if (Notification.permission === 'granted') {
    LS.set('notif', 'granted');
    await ensureNotificationWorker();
    scheduleTaskNotifications();
    const nowLabel = new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const sent = await showNotificationAsync('通知テスト', {
      body: `Photo Tracker の通知が有効です\n${nowLabel}`,
      requireInteraction: true,
      tag: 'photo-tracker-notification-test-' + Date.now(),
    });
    qs('#notif-banner').classList.add('hidden');
    updateNotificationStatus();
    return;
  }

  if (Notification.permission === 'denied') {
    LS.set('notif', 'denied');
    setNotifBanner('通知がブロックされています。ブラウザまたはOS設定でこのページの通知を許可してください。');
    updateNotificationStatus();
    return;
  }

  setNotifButtonBusy(true);
  setNotifBanner('ブラウザの通知許可を確認しています。表示された確認で「許可」を選んでください。');
  let result = 'default';
  try {
    result = await requestBrowserPermission();
  } catch(e) {
    result = Notification.permission || 'default';
  } finally {
    setNotifButtonBusy(false);
  }

  if (result === 'granted') {
    LS.set('notif', 'granted');
    await ensureNotificationWorker();
    scheduleTaskNotifications();
    const nowLabel = new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const sent = await showNotificationAsync('通知テスト', {
      body: `Photo Tracker の通知が有効です\n${nowLabel}`,
      requireInteraction: true,
      tag: 'photo-tracker-notification-test-' + Date.now(),
    });
    qs('#notif-banner').classList.add('hidden');
    updateNotificationStatus();
  } else if (result === 'denied') {
    LS.set('notif', 'denied');
    setNotifBanner('通知がブロックされました。ブラウザまたはOS設定でこのページの通知を許可してください。');
    updateNotificationStatus();
  } else {
    LS.set('notif', 'later');
    setNotifBanner('通知許可がまだ完了していません。必要な時にもう一度「許可する」を押してください。');
    updateNotificationStatus();
  }
}

function scheduleTaskNotifications() {
  state.taskNotificationTimers.forEach(id => clearTimeout(id));
  state.taskNotificationTimers = [];
  const tasks = getAllTasks().filter(t => t.due && !isTaskDone(t.id||t.title+t.due));
  const todayKey = getLocalDateStr();
  const leads = getNotifLeads();
  const addTimer = (when, t, title, body, suffix, leadWindow = 14 * 86400000, onFire = null) => {
    const msUntil = when - new Date();
    if (msUntil <= 0 || msUntil > leadWindow) return;
    const timerId = setTimeout(() => {
      showNotification(title, {
        body,
        tag: 'task-' + suffix + '-' + (t.id || t.title + t.due),
        renotify: true,
      });
      if (onFire) onFire();
    }, msUntil);
    state.taskNotificationTimers.push(timerId);
  };
  tasks.forEach(t => {
    const notifyTime = t.dueTime || '09:00';
    const due = new Date(t.due + 'T' + notifyTime + ':00');
    const now = new Date();
    const isDueToday = t.due === todayKey;
    if (leads.dayBefore) {
      const before = new Date(t.due + 'T20:00:00');
      before.setDate(before.getDate() - 1);
      addTimer(before, t, '明日が締め切りの課題があります', `${t.title}\n明日 ${notifyTime} 締切です`, 'day-before');
    }
    if (leads.hourBefore) {
      const beforeHour = new Date(due);
      beforeHour.setHours(beforeHour.getHours() - 1);
      addTimer(beforeHour, t, '締め切り1時間前', `${t.title}\n${notifyTime} 締切です`, 'hour-before');
    }
    if (leads.dueTime) {
      addTimer(due, t, '課題の締め切り', `${t.title}\n本日 ${notifyTime} 締切です`, 'due-time');
    }
    if (leads.dayOf) {
      const notifyKey = 'notified_task_' + (t.id || t.title + t.due) + '_' + todayKey;
      const dayOf = new Date(t.due + 'T09:00:00');
      if (isDueToday && now >= dayOf && now < due && !LS.get(notifyKey)) {
        showNotification('今日が締め切りの課題があります', {
          body: `${t.title}\n本日 ${notifyTime} 締切です`,
          tag: 'task-due-today-' + (t.id || t.title + t.due),
        });
        LS.set(notifyKey, true);
      } else if (!LS.get(notifyKey)) {
        addTimer(dayOf, t, '今日が締め切りの課題があります', `${t.title}\n本日 ${notifyTime} 締切です`, 'day-of', 14 * 86400000, () => LS.set(notifyKey, true));
      }
    }
  });
  updateNotificationStatus();
}

(function initNotif() {
  const perm = LS.get('notif');
  const status = notificationStatus();
  if (canNotify()) ensureNotificationWorker();
  updateNotificationStatus();
  if (status === 'file' || status === 'unsupported' || status === 'insecure' || status === 'denied') {
    setTimeout(() => setNotifBanner(notificationStatusMessage()), 800);
  } else if (perm === 'granted' || status === 'granted') {
    // 既に許可済み → 通知スケジューリングは課題ロード後に実行
    qs('#notif-banner').classList.add('hidden');
  } else if (!perm && status === 'default') {
    // まだ未確認 → バナー表示
    setTimeout(() => setNotifBanner(notificationStatusMessage()), 1500);
  }
})();

initNotifLeadControls();
setInterval(scheduleTaskNotifications, 60000);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) scheduleTaskNotifications();
});
qs('#notif-allow-btn').addEventListener('click', requestNotifPermission);
qs('#notif-test-btn').addEventListener('click', async () => {
  const status = notificationStatus();
  if (canNotify()) await ensureNotificationWorker();
  const nowLabel = new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const sent = await showNotificationAsync('通知テスト', {
    body: `${sentBodyForStatus(status)}\n${nowLabel}`,
    requireInteraction: true,
    tag: 'photo-tracker-manual-notification-test-' + Date.now(),
  });
  setNotifBanner(sent ? 'OSテスト通知を送信しました。macOSの通知センターも確認してください。' : notificationStatusMessage() + ' テストはページ内通知で表示しました。');
  updateNotificationStatus();
  if (sent) hideNotifBannerSoon();
});
qs('#notif-diagnose-btn').addEventListener('click', diagnoseNotifications);
qs('#notif-deny-btn').addEventListener('click', () => {
  qs('#notif-banner').classList.add('hidden');
  LS.set('notif', 'later');
});

// ══════════════════════════════════════════════
// ── カスタム日付・時刻ピッカー ─────────────────
// ══════════════════════════════════════════════
const Picker = (() => {
  let activePopover = null;
  let activeTarget = null;

  function close() {
    if (activePopover) { activePopover.remove(); activePopover = null; }
    if (activeTarget) { activeTarget.classList.remove('active'); activeTarget = null; }
  }
  document.addEventListener('mousedown', e => {
    if (activePopover && !activePopover.contains(e.target) && !activeTarget?.contains(e.target)) close();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  function positionPopover(pop, trigger) {
    document.body.appendChild(pop);
    const tr = trigger.getBoundingClientRect();
    const pw = pop.offsetWidth, ph = pop.offsetHeight;
    const vw = window.innerWidth, vh = window.innerHeight;
    let top = tr.bottom + 4, left = tr.left;
    if (top + ph > vh - 8) top = tr.top - ph - 4;
    if (left + pw > vw - 8) left = vw - pw - 8;
    pop.style.top = Math.max(8, top) + 'px';
    pop.style.left = Math.max(8, left) + 'px';
  }

  // ── カレンダーピッカー ──
  function openDate(triggerEl, hiddenId, onSelect) {
    if (activeTarget === triggerEl) { close(); return; }
    close();
    activeTarget = triggerEl;
    triggerEl.classList.add('active');

    const hidden = qs('#' + hiddenId);
    let cur = hidden.value ? new Date(hidden.value + 'T00:00:00') : new Date();
    let viewY = cur.getFullYear(), viewM = cur.getMonth();

    const pop = el('div', 'picker-popover cal-picker');
    const today = new Date(); today.setHours(0,0,0,0);

    function render() {
      pop.innerHTML = '';
      // ヘッダー
      const hdr = el('div', 'cal-picker-header');
      const monthLbl = el('div', 'cal-picker-month');
      monthLbl.textContent = viewY + '年' + (viewM+1) + '月';
      const nav = el('div', 'cal-picker-nav');
      const prev = el('button'); prev.textContent = '←'; prev.setAttribute('aria-label', '前の月');
      prev.addEventListener('click', () => { viewM--; if (viewM<0){viewM=11;viewY--;} render(); });
      const next = el('button'); next.textContent = '→'; next.setAttribute('aria-label', '次の月');
      next.addEventListener('click', () => { viewM++; if (viewM>11){viewM=0;viewY++;} render(); });
      nav.appendChild(prev); nav.appendChild(next);
      hdr.appendChild(monthLbl); hdr.appendChild(nav);
      pop.appendChild(hdr);

      // 日付グリッド
      const body = el('div', 'cal-picker-body');
      const dowRow = el('div', 'cal-picker-dow');
      ['日','月','火','水','木','金','土'].forEach(d => {
        const s = el('span'); s.textContent = d; dowRow.appendChild(s);
      });
      body.appendChild(dowRow);

      const days = el('div', 'cal-picker-days');
      const first = new Date(viewY, viewM, 1).getDay();
      const last = new Date(viewY, viewM+1, 0).getDate();
      const prevLast = new Date(viewY, viewM, 0).getDate();

      // 前月の日
      for (let i = 0; i < first; i++) {
        const b = el('button', 'cal-day-btn other-month');
        b.textContent = prevLast - first + 1 + i;
        b.disabled = true;
        days.appendChild(b);
      }
      // 当月の日
      const selVal = hidden.value;
      for (let d = 1; d <= last; d++) {
        const dateStr = viewY + '-' + String(viewM+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
        const isToday = new Date(viewY, viewM, d).getTime() === today.getTime();
        const isSel = dateStr === selVal;
        const b = el('button', 'cal-day-btn' + (isToday?' today':'') + (isSel?' selected':''));
        b.textContent = d;
        b.addEventListener('click', () => {
          hidden.value = dateStr;
          const textEl = triggerEl.querySelector('.cdi-text');
          textEl.textContent = `${viewY}/${viewM+1}/${d}`;
          textEl.classList.remove('placeholder');
          if (onSelect) onSelect(dateStr);
          close();
        });
        days.appendChild(b);
      }
      // 翌月の日（6行埋める）
      const total = first + last;
      const nextDays = total % 7 === 0 ? 0 : 7 - (total % 7);
      for (let i = 1; i <= nextDays; i++) {
        const b = el('button', 'cal-day-btn other-month');
        b.textContent = i; b.disabled = true;
        days.appendChild(b);
      }
      body.appendChild(days);
      pop.appendChild(body);

      // フッター
      const footer = el('div', 'cal-picker-footer');
      const clearBtn = el('button', 'cal-picker-clear'); clearBtn.textContent = 'クリア';
      clearBtn.addEventListener('click', () => {
        hidden.value = '';
        const textEl = triggerEl.querySelector('.cdi-text');
        textEl.textContent = '日付を選択';
        textEl.classList.add('placeholder');
        if (onSelect) onSelect('');
        close();
      });
      const todayBtn = el('button', 'cal-picker-today-btn'); todayBtn.textContent = '今日';
      todayBtn.addEventListener('click', () => {
        const d = new Date();
        const dateStr = getLocalDateStr(d);
        hidden.value = dateStr;
        const textEl = triggerEl.querySelector('.cdi-text');
        textEl.textContent = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`;
        textEl.classList.remove('placeholder');
        if (onSelect) onSelect(dateStr);
        close();
      });
      footer.appendChild(clearBtn); footer.appendChild(todayBtn);
      pop.appendChild(footer);
    }

    render();
    activePopover = pop;
    positionPopover(pop, triggerEl);
    // 選択値があれば表示月を合わせる
    if (hidden.value) {
      const d = new Date(hidden.value + 'T00:00:00');
      viewY = d.getFullYear(); viewM = d.getMonth();
    }
  }

  // ── 時刻ピッカー ──
  function openTime(triggerEl, hiddenId) {
    if (activeTarget === triggerEl) { close(); return; }
    close();
    activeTarget = triggerEl;
    triggerEl.classList.add('active');

    const hidden = qs('#' + hiddenId);
    const [curH, curM] = (hidden.value || '').split(':').map(Number);

    const pop = el('div', 'picker-popover time-picker');
    const cols = el('div', 'time-picker-cols');

    // 時列
    const hCol = el('div', 'time-col');
    const hLbl = el('div', 'time-col-label'); hLbl.textContent = '時';
    const hScroll = el('div', 'time-col-scroll');
    for (let h = 0; h < 24; h++) {
      const b = el('button', 'time-btn' + (h === curH ? ' selected' : ''));
      b.textContent = String(h).padStart(2,'0');
      b.addEventListener('click', () => {
        hScroll.querySelectorAll('.time-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        updateTime();
      });
      hScroll.appendChild(b);
    }
    hCol.appendChild(hLbl); hCol.appendChild(hScroll);

    // セパレータ
    const sep = el('div', 'time-picker-sep'); sep.textContent = ':';

    // 分列（5分刻み）
    const mCol = el('div', 'time-col');
    const mLbl = el('div', 'time-col-label'); mLbl.textContent = '分';
    const mScroll = el('div', 'time-col-scroll');
    for (let m = 0; m < 60; m += 5) {
      const b = el('button', 'time-btn' + (m === curM ? ' selected' : ''));
      b.textContent = String(m).padStart(2,'0');
      b.addEventListener('click', () => {
        mScroll.querySelectorAll('.time-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        updateTime();
      });
      mScroll.appendChild(b);
    }
    mCol.appendChild(mLbl); mCol.appendChild(mScroll);

    cols.appendChild(hCol); cols.appendChild(sep); cols.appendChild(mCol);
    pop.appendChild(cols);

    const clearBtn = el('button', 'time-picker-clear'); clearBtn.textContent = 'クリア';
    clearBtn.addEventListener('click', () => {
      hidden.value = '';
      const textEl = triggerEl.querySelector('.cti-text');
      textEl.textContent = '--:--';
      textEl.classList.add('placeholder');
      close();
    });
    pop.appendChild(clearBtn);

    function updateTime() {
      const hSel = hScroll.querySelector('.selected');
      const mSel = mScroll.querySelector('.selected');
      if (hSel && mSel) {
        const val = hSel.textContent + ':' + mSel.textContent;
        hidden.value = val;
        const textEl = triggerEl.querySelector('.cti-text');
        textEl.textContent = val;
        textEl.classList.remove('placeholder');
      }
    }

    activePopover = pop;
    positionPopover(pop, triggerEl);

    // 選択済みアイテムにスクロール
    setTimeout(() => {
      const hSel = hScroll.querySelector('.selected');
      const mSel = mScroll.querySelector('.selected');
      if (hSel) hScroll.scrollTop = hSel.offsetTop - hScroll.offsetHeight/2 + hSel.offsetHeight/2;
      if (mSel) mScroll.scrollTop = mSel.offsetTop - mScroll.offsetHeight/2 + mSel.offsetHeight/2;
    }, 10);
  }

  return { openDate, openTime };
})();

// カスタムピッカーの初期化（Todoフォームの入力欄に紐付け）
function initPickers() {
  const datePickers = [
    { trigger: 'pick-due-date',   hidden: 'todo-due-input' },
    { trigger: 'pick-start-date', hidden: 'todo-start-input' },
    { trigger: 'pick-end-date',   hidden: 'todo-end-input' },
  ];
  const timePickers = [
    { trigger: 'pick-due-time',   hidden: 'todo-due-time-input' },
    { trigger: 'pick-start-time', hidden: 'todo-start-time-input' },
    { trigger: 'pick-end-time',   hidden: 'todo-end-time-input' },
  ];

  datePickers.forEach(({ trigger, hidden }) => {
    const el2 = qs('#' + trigger);
    if (!el2) return;
    // placeholder初期化
    el2.querySelector('.cdi-text').classList.add('placeholder');
    const open = () => Picker.openDate(el2, hidden, () => {
      el2.removeAttribute('aria-invalid');
      qs('#todo-form-msg')?.classList.contains('warn') && setTodoFormMessage('');
    });
    el2.addEventListener('click', open);
    el2.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });
  timePickers.forEach(({ trigger, hidden }) => {
    const el2 = qs('#' + trigger);
    if (!el2) return;
    el2.querySelector('.cti-text').classList.add('placeholder');
    const open = () => Picker.openTime(el2, hidden);
    el2.addEventListener('click', open);
    el2.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });
}

// 追加ボタン後にピッカーのテキストをリセットする関数
function resetPickers() {
  [
    ['pick-due-date','日付を選択','cdi-text'],
    ['pick-start-date','日付を選択','cdi-text'],
    ['pick-end-date','日付を選択','cdi-text'],
    ['pick-due-time','--:--','cti-text'],
    ['pick-start-time','--:--','cti-text'],
    ['pick-end-time','--:--','cti-text'],
  ].forEach(([id, text, cls]) => {
    const el2 = qs('#' + id);
    if (!el2) return;
    const span = el2.querySelector('.' + cls);
    span.textContent = text;
    span.classList.add('placeholder');
  });
}
function addDaysToDateStr(dateStr, days) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return getLocalDateStr(d);
}

function addMonthsClamped(date, months) {
  const d = new Date(date);
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, lastDay));
  return d;
}

function repeatLabel(repeat) {
  if (repeat === 'daily') return '毎日';
  if (repeat === 'weekly') return '毎週';
  if (repeat === 'biweekly') return '隔週';
  if (repeat === 'monthly') return '毎月';
  return '';
}

function getTaskKey(t) {
  if (!t) return '';
  return t.id || `${t.title || ''}${t.due || t.dueDate || ''}`;
}

function getExternalCompletedTaskIds() {
  return LS.get('external_tasks_completed') || [];
}

function setExternalCompletedTaskIds(ids) {
  const unique = [...new Set((ids || []).filter(Boolean))].slice(-500);
  LS.set('external_tasks_completed', unique);
  SB.setSetting('external_tasks_completed', unique);
}

function recordExternalCompletedTaskId(id) {
  if (!id) return;
  const completed = getExternalCompletedTaskIds();
  if (!completed.includes(id)) setExternalCompletedTaskIds([...completed, id]);
}

function removeExternalCompletedTaskId(id) {
  if (!id) return;
  const completed = getExternalCompletedTaskIds();
  if (completed.includes(id)) setExternalCompletedTaskIds(completed.filter(x => x !== id));
}

function sourceMarksTaskDone(t) {
  const values = [
    t?.completed,
    t?.done,
    t?.isDone,
    t?.isCompleted,
    t?.turnedIn,
    t?.submitted,
    t?.status,
    t?.state,
    t?.courseWorkState,
    t?.submissionState,
    t?.assignmentState,
  ].map(v => String(v ?? '').toLowerCase());
  return values.some(v =>
    v === 'true'
    || v === 'done'
    || v === 'completed'
    || v === 'complete'
    || v === 'turned_in'
    || v === 'turnedin'
    || v === 'submitted'
    || v === 'returned'
  );
}

function filterVisibleExternalTasks(tasks) {
  const completedIds = getExternalCompletedTaskIds();
  return (Array.isArray(tasks) ? tasks : []).filter(t => {
    const key = getTaskKey(t);
    return !completedIds.includes(key) && !sourceMarksTaskDone(t);
  });
}

function expandRecurringTask(t) {
  if (!t.repeat || t.repeat === 'none' || !t.due) return [t];
  const deletedIds = LS.get('manual_tasks_deleted') || [];
  const today = new Date(); today.setHours(0,0,0,0);
  const firstDue = new Date(t.due + 'T00:00:00');
  const count = t.repeat === 'daily' ? 21 : t.repeat === 'monthly' ? 6 : 8;
  const stepDays = t.repeat === 'daily' ? 1 : t.repeat === 'weekly' ? 7 : t.repeat === 'biweekly' ? 14 : 0;
  const items = [];
  let index = 0;
  let guard = 0;
  while (items.length < count && guard < 120) {
    let due;
    if (t.repeat === 'monthly') {
      due = addMonthsClamped(firstDue, index);
    } else {
      due = new Date(firstDue);
      due.setDate(firstDue.getDate() + index * stepDays);
    }
    index++;
    guard++;
    if (due < today) continue;
    const offset = Math.round((due - firstDue) / 86400000);
    const dueStr = getLocalDateStr(due);
    const id = `${t.id}_${t.repeat}_${dueStr}`;
    if (deletedIds.includes(id)) continue;
    items.push({
      ...t,
      id,
      due: dueStr,
      start: t.start ? addDaysToDateStr(t.start, offset) : '',
      _repeatInstance: true,
      _sourceId: t.id,
      _sourceTask: t,
    });
  }
  return items;
}

// GASからのタスクはstate.tasks、手動タスクはLS('manual_tasks')に分離
function createMilestoneId() {
  return 'ms_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
}

function normalizeMilestone(m, index = 0) {
  const rawTitle = String(m?.title || '').trim();
  const startDate = String(m?.startDate || m?.start || '').trim();
  const dueDate = String(m?.dueDate || m?.due || '').trim();
  const title = rawTitle || (dueDate ? 'サブタスク' : '');
  return {
    id: m?.id || `ms_existing_${index}`,
    title,
    startDate,
    start: startDate,
    dueDate,
    dueTime: String(m?.dueTime || '').trim(),
    note: String(m?.note || '').trim(),
    completed: !!m?.completed,
  };
}

function getDatePart(value) {
  const raw = String(value || '').trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  const parsed = Date.parse(raw);
  if (!Number.isFinite(parsed)) return '';
  return getLocalDateStr(new Date(parsed));
}

function normalizeTaskType(task, milestones = []) {
  const explicit = String(task?.taskType || '').trim().toLowerCase();
  if (explicit === 'main') return 'main';
  if (explicit === 'simple' || explicit === 'quick') return 'simple';
  return 'simple';
}

function normalizeTask(t) {
  const task = t && typeof t === 'object' ? t : {};
  const due = String(task.due || task.dueDate || '').trim();
  const start = String(task.start || task.startDate || '').trim();
  const subject = String(task.subject || task.category || '').trim();
  const dateType = task.dateType || (start && due ? 'range' : due ? 'deadline' : 'none');
  const rawMilestones = Array.isArray(task.milestones) ? task.milestones : (Array.isArray(task.subtasks) ? task.subtasks : []);
  const milestones = rawMilestones
    .map(normalizeMilestone)
    .filter(m => m.title);
  const taskType = normalizeTaskType(task, milestones);
  const createdAt = Number.isFinite(Date.parse(task.createdAt))
    ? task.createdAt
    : (Number.isFinite(Date.parse(task.updatedAt)) ? task.updatedAt : '');
  return {
    ...task,
    taskType,
    createdAt,
    due,
    dueDate: due,
    dueTime: String(task.dueTime || '').trim(),
    start,
    startDate: start,
    startTime: String(task.startTime || '').trim(),
    subject,
    category: subject,
    priority: ['high', 'normal', 'low'].includes(task.priority) ? task.priority : 'normal',
    dateType,
    completed: sourceMarksTaskDone(task),
    completedAt: task.completedAt || '',
    description: String(task.description || ''),
    milestones,
    subtasks: milestones,
  };
}

function normalizeManualTasks(tasks) {
  return Array.isArray(tasks) ? tasks.map(normalizeTask) : [];
}

function taskUpdatedAt(task) {
  const ts = Date.parse(task?.updatedAt);
  return Number.isFinite(ts) ? ts : 0;
}

function mergeTaskRecords(base, next) {
  const a = normalizeTask(base);
  const b = normalizeTask(next);
  const preferNext = taskUpdatedAt(b) >= taskUpdatedAt(a);
  const newest = preferNext ? b : a;
  const older = preferNext ? a : b;
  const milestones = mergeMilestoneLists(older.milestones, newest.milestones);
  return normalizeTask({
    ...older,
    ...newest,
    title: newest.title || older.title,
    due: newest.due || older.due,
    dueDate: newest.due || older.due,
    dueTime: newest.dueTime || older.dueTime,
    start: newest.start || older.start,
    startDate: newest.start || older.start,
    startTime: newest.startTime || older.startTime,
    taskType: newest.taskType || older.taskType,
    createdAt: newest.createdAt || older.createdAt,
    subject: newest.subject || older.subject,
    category: newest.category || older.category,
    priority: newest.priority || older.priority,
    description: newest.description || older.description,
    completed: sourceMarksTaskDone(older) || sourceMarksTaskDone(newest),
    completedAt: newest.completedAt || older.completedAt,
    milestones,
    subtasks: milestones,
    updatedAt: newest.updatedAt || older.updatedAt,
  });
}

function mergeTaskListsById(remoteTasks = [], localTasks = [], deletedIds = []) {
  const deleted = new Set(deletedIds || []);
  const merged = new Map();
  [...remoteTasks, ...localTasks].forEach(task => {
    const normalized = normalizeTask(task);
    const key = getTaskKey(normalized);
    if (!key || deleted.has(key) || deleted.has(normalized.id)) return;
    merged.set(key, merged.has(key) ? mergeTaskRecords(merged.get(key), normalized) : normalized);
  });
  return [...merged.values()];
}

function getExternalTaskIdentityKeys(task) {
  const t = task && typeof task === 'object' ? task : {};
  if (t._manual) return [];
  const due = String(t.due || t.dueDate || '').trim();
  const title = String(t.title || '').trim();
  const candidates = [
    t.sourceId,
    t.classroomId,
    t.classroomTaskId,
    t.courseWorkId,
    t.assignmentId,
    t.alternateLink,
    t.htmlLink,
    t.url,
    t.link,
    t.id,
    title && due ? `title:${title}|due:${due}` : '',
  ];
  return [...new Set(candidates.map(v => String(v || '').trim()).filter(Boolean))];
}

function mergeMilestoneLists(...lists) {
  const merged = new Map();
  lists.flat().forEach((item, index) => {
    const ms = normalizeMilestone(item, index);
    if (!ms.title) return;
    const key = ms.id || `${ms.title}_${ms.dueDate}_${ms.dueTime}`;
    const prev = merged.get(key) || {};
    merged.set(key, { ...prev, ...ms, completed: !!(prev.completed || ms.completed) });
  });
  return [...merged.values()];
}

function normalizeTaskOverride(value = {}) {
  const source = value && typeof value === 'object' ? value : {};
  const milestones = mergeMilestoneLists(source.milestones || [], source.subtasks || []);
  const completedAt = Number.isFinite(Date.parse(source.completedAt)) ? source.completedAt : '';
  const rawTaskType = String(source.taskType || '').trim().toLowerCase();
  const taskType = rawTaskType === 'main'
    ? 'main'
    : (rawTaskType === 'simple' || rawTaskType === 'quick' ? 'simple' : '');
  return {
    taskType,
    description: String(source.description || '').trim(),
    start: String(source.start || source.startDate || '').trim(),
    startDate: String(source.startDate || source.start || '').trim(),
    due: String(source.due || source.dueDate || '').trim(),
    dueDate: String(source.dueDate || source.due || '').trim(),
    milestones,
    subtasks: milestones,
    priority: ['high', 'normal', 'low'].includes(source.priority) ? source.priority : '',
    subject: String(source.subject || source.category || '').trim(),
    category: String(source.category || source.subject || '').trim(),
    dueTime: String(source.dueTime || '').trim(),
    completed: !!source.completed,
    completedAt,
    updatedAt: Number.isFinite(Date.parse(source.updatedAt)) ? source.updatedAt : '1970-01-01T00:00:00.000Z',
  };
}

function normalizeTaskOverrideMap(map) {
  const source = map && typeof map === 'object' && !Array.isArray(map) ? map : {};
  return Object.entries(source).reduce((acc, [key, value]) => {
    if (!key || !value) return acc;
    const normalized = normalizeTaskOverride(value);
    if (
      normalized.description
      || normalized.taskType
      || normalized.startDate
      || normalized.dueDate
      || normalized.milestones.length
      || normalized.priority
      || normalized.subject
      || normalized.dueTime
      || normalized.completed
      || normalized.completedAt
    ) acc[key] = normalized;
    return acc;
  }, {});
}

function mergeTaskOverrideEntries(base = {}, next = {}) {
  const a = normalizeTaskOverride(base);
  const b = normalizeTaskOverride(next);
  const preferNext = String(b.updatedAt || '') >= String(a.updatedAt || '');
  const newest = preferNext ? b : a;
  const older = preferNext ? a : b;
  const milestones = mergeMilestoneLists(older.milestones, newest.milestones);
  return normalizeTaskOverride({
    ...older,
    ...newest,
    description: newest.description || older.description,
    taskType: newest.taskType || older.taskType,
    start: newest.start || older.start,
    startDate: newest.startDate || older.startDate,
    due: newest.due || older.due,
    dueDate: newest.dueDate || older.dueDate,
    subject: newest.subject || older.subject,
    category: newest.category || older.category,
    priority: newest.priority || older.priority,
    dueTime: newest.dueTime || older.dueTime,
    completed: older.completed || newest.completed,
    completedAt: newest.completedAt || older.completedAt,
    milestones,
    subtasks: milestones,
    updatedAt: newest.updatedAt || older.updatedAt,
  });
}

function mergeTaskOverrideMaps(...maps) {
  const merged = {};
  maps.forEach(map => {
    Object.entries(normalizeTaskOverrideMap(map)).forEach(([key, value]) => {
      merged[key] = merged[key] ? mergeTaskOverrideEntries(merged[key], value) : value;
    });
  });
  return merged;
}

function getTaskOverrides() {
  return normalizeTaskOverrideMap(LS.get('task_overrides'));
}

function saveTaskOverrides(overrides, sync = true) {
  const normalized = normalizeTaskOverrideMap(overrides);
  LS.set('task_overrides', normalized);
  if (sync && typeof SB !== 'undefined' && typeof SB.setSetting === 'function') {
    SB.setSetting('task_overrides', normalized);
  }
  return normalized;
}

function getTaskOverrideKey(t) {
  if (!t || t._manual) return '';
  if (t._overrideKey) return String(t._overrideKey);
  return getExternalTaskIdentityKeys(t)[0] || getTaskKey(t);
}

function findTaskOverrideForTask(task, overrides = getTaskOverrides()) {
  const keys = getExternalTaskIdentityKeys(task);
  for (const key of keys) {
    if (overrides[key]) return { key, value: overrides[key] };
  }
  const fallback = getTaskKey(task);
  return fallback && overrides[fallback] ? { key: fallback, value: overrides[fallback] } : null;
}

function applyTaskUserOverride(task) {
  const normalized = normalizeTask(task);
  const key = getTaskOverrideKey(normalized);
  if (!key) return normalized;
  const found = findTaskOverrideForTask(normalized);
  const override = found?.value;
  if (!override) return { ...normalized, _overrideKey: key };
  const milestones = mergeMilestoneLists(normalized.milestones, override.milestones);
  return normalizeTask({
    ...normalized,
    taskType: override.taskType || normalized.taskType,
    description: override.description || normalized.description,
    start: override.startDate || override.start || normalized.start,
    startDate: override.startDate || override.start || normalized.startDate,
    due: override.dueDate || override.due || normalized.due,
    dueDate: override.dueDate || override.due || normalized.dueDate,
    milestones,
    subtasks: milestones,
    priority: override.priority || normalized.priority,
    subject: override.subject || normalized.subject,
    category: override.category || normalized.category,
    dueTime: override.dueTime || normalized.dueTime,
    completed: normalized.completed || override.completed,
    completedAt: override.completedAt || normalized.completedAt,
    _overrideKey: found.key || key,
  });
}

function getAllTasks() {
  const manual = normalizeManualTasks(LS.get('manual_tasks'));
  const expandedManual = manual.flatMap(t => expandRecurringTask(t));
  const tasks = [
    ...filterVisibleExternalTasks(state.tasks).map(applyTaskUserOverride),
    ...expandedManual.map(normalizeTask)
  ];
  tasks.forEach(hydrateTaskDoneRecordFromTask);
  return tasks;
}

// 削除済み手動タスクのIDを記録（同期時にリモートから復活しないようにするため）
function recordDeletedTaskId(id) {
  const deleted = LS.get('manual_tasks_deleted') || [];
  if (!deleted.includes(id)) {
    deleted.push(id);
    // 直近200件だけ保持（無限に増えないように）
    LS.set('manual_tasks_deleted', deleted.slice(-200));
  }
}

// 手動タスクを保存（ローカル＋Supabase両方に反映）
async function saveManualTasks(manual) {
  const normalized = normalizeManualTasks(manual);
  LS.set('manual_tasks', normalized);
  scheduleTaskNotifications();
  const ok = await SB.setSetting('manual_tasks', normalized);
  if (!ok) {
    console.warn('Supabaseへのタスク同期に失敗しました（ローカルには保存済み）');
  }
  return ok;
}

// GAS連携URLを保存（ローカル＋Supabase両方に反映）
async function saveScriptUrl(url) {
  state.scriptUrl = url;
  LS.set('script_url', url);
  return await SB.setSetting('script_url', url);
}

// タスク完了トグル（完了にしたら5分後に自動削除、未完了に戻したらキャンセル）
const DONE_DELAY_MS = 5 * 60 * 1000; // 5分

function persistTasksDone() {
  state.tasksDone = normalizeTaskDoneMap(state.tasksDone);
  LS.set('tasks_done', state.tasksDone);
  if (typeof SB !== 'undefined' && typeof SB.setSetting === 'function') {
    SB.setSetting('tasks_done', state.tasksDone);
  }
}

function normalizeTaskDoneMap(map) {
  const source = map && typeof map === 'object' ? map : {};
  const normalized = {};
  const nowIso = new Date().toISOString();
  Object.entries(source).forEach(([key, value]) => {
    if (!key || !value) return;
    if (value === true) {
      normalized[key] = { completed: true, completedAt: nowIso };
      return;
    }
    if (typeof value !== 'object' || value.completed === false) return;
    const completedAt = Number.isFinite(Date.parse(value.completedAt)) ? value.completedAt : nowIso;
    normalized[key] = { ...value, completed: true, completedAt };
  });
  return normalized;
}

function mergeTaskDoneMaps(...maps) {
  const merged = {};
  maps.forEach(map => {
    const normalized = normalizeTaskDoneMap(map);
    Object.entries(normalized).forEach(([key, value]) => {
      const prev = merged[key];
      if (!prev || String(value.completedAt || '') > String(prev.completedAt || '')) {
        merged[key] = value;
      }
    });
  });
  return merged;
}

function getTaskDoneRecord(k) {
  const value = state.tasksDone[k];
  if (!value) return null;
  const nowIso = new Date().toISOString();
  if (value === true) {
    state.tasksDone[k] = { completed: true, completedAt: nowIso };
    persistTasksDone();
    return state.tasksDone[k];
  }
  if (typeof value === 'object') {
    const completedAt = Number.isFinite(Date.parse(value.completedAt)) ? value.completedAt : nowIso;
    if (value.completed === false) return null;
    if (completedAt !== value.completedAt || value.completed !== true) {
      state.tasksDone[k] = { ...value, completed: true, completedAt };
      persistTasksDone();
    }
    return state.tasksDone[k];
  }
  delete state.tasksDone[k];
  persistTasksDone();
  return null;
}

function isTaskDone(k) {
  return !!getTaskDoneRecord(k);
}

function setTaskDoneRecord(k, completedAt = new Date().toISOString()) {
  state.tasksDone[k] = { completed: true, completedAt };
  persistTasksDone();
}

function hydrateTaskDoneRecordFromTask(task) {
  const key = getTaskKey(task);
  if (!key || !sourceMarksTaskDone(task) || getTaskDoneRecord(key)) return;
  const completedAt = Number.isFinite(Date.parse(task.completedAt)) ? task.completedAt : new Date().toISOString();
  state.tasksDone[key] = { completed: true, completedAt };
  persistTasksDone();
}

async function updateManualTaskCompletion(k, completed, completedAt = '') {
  const manual = LS.get('manual_tasks') || [];
  let changed = false;
  const next = manual.map(task => {
    const normalized = normalizeTask(task);
    if (getTaskKey(normalized) !== k) return task;
    changed = true;
    const nextTask = { ...task, completed: !!completed };
    if (completed) nextTask.completedAt = completedAt || new Date().toISOString();
    else delete nextTask.completedAt;
    nextTask.updatedAt = new Date().toISOString();
    return nextTask;
  });
  if (changed) await saveManualTasks(next);
}

function clearTaskDoneRecord(k) {
  if (state.doneTimers[k]) {
    clearTimeout(state.doneTimers[k]);
    delete state.doneTimers[k];
  }
  delete state.tasksDone[k];
  persistTasksDone();
}

function getDoneRemainingMs(k) {
  const record = getTaskDoneRecord(k);
  if (!record) return 0;
  const completedAt = Date.parse(record.completedAt);
  if (!Number.isFinite(completedAt)) return DONE_DELAY_MS;
  return Math.max(0, DONE_DELAY_MS - (Date.now() - completedAt));
}

function scheduleDonePurgeForTask(k, t) {
  if (!getTaskDoneRecord(k)) return;
  if (state.doneTimers[k]) return;
  const remaining = getDoneRemainingMs(k);
  state.doneTimers[k] = setTimeout(() => {
    delete state.doneTimers[k];
    dismissTodoTask(k, t);
  }, remaining);
}

function scheduleDonePurgeForVisibleTasks(tasks = getAllTasks()) {
  (Array.isArray(tasks) ? tasks : []).forEach(t => {
    const key = getTaskKey(t);
    if (key) scheduleDonePurgeForTask(key, t);
  });
}

function toggleTaskDone(k, t) {
  const wasDone = isTaskDone(k);
  scheduleTaskNotifications();

  if (!wasDone) {
    const completedAt = new Date().toISOString();
    setTaskDoneRecord(k, completedAt);
    if (t?._manual && !t._repeatInstance) updateManualTaskCompletion(k, true, completedAt);
    recordCompletedTask(t || { id: k, title: k });
    scheduleDonePurgeForTask(k, t);
  } else {
    clearTaskDoneRecord(k);
    if (t?._manual && !t._repeatInstance) updateManualTaskCompletion(k, false);
    if (t && !t._manual) removeExternalCompletedTaskId(k);
  }
  if (state.tab === 'widget') renderTodoWidget();
  else renderTodo();
}

async function dismissTodoTask(k, t) {
  if (state.doneTimers[k]) {
    clearTimeout(state.doneTimers[k]);
    delete state.doneTimers[k];
  }

  if (t && t._manual) {
    recordDeletedTaskId(k);
    if (!t._repeatInstance) {
      const manual = LS.get('manual_tasks') || [];
      await saveManualTasks(manual.filter(x => getTaskKey(x) !== k));
    }
  } else {
    recordExternalCompletedTaskId(k);
    state.tasks = state.tasks.filter(x => getTaskKey(x) !== k);
    const cache = LS.get('tasks_cache');
    if (cache && Array.isArray(cache.tasks)) {
      const nextCache = {...cache, tasks: filterVisibleExternalTasks(cache.tasks), hiddenCompletedAt: new Date().toISOString()};
      LS.set('tasks_cache', nextCache);
      SB.setSetting('gas_tasks_cache', nextCache);
    }
  }

  clearTaskDoneRecord(k);
  scheduleTaskNotifications();
  if (state.tab === 'widget') renderTodoWidget();
  else renderTodo();
}

async function confirmDismissTodoTask(k, t) {
  const isExternal = t && !t._manual;
  const ok = await confirmAction({
    title: isExternal ? '同期タスクを非表示にしますか？' : 'タスクを削除しますか？',
    body: isExternal
      ? 'Classroom/GASから同期したタスクをこのアプリ上で非表示にします。再同期しても戻らないように記録します。'
      : 'このタスクを一覧から削除します。同期済みの場合も、あとで復活しないように削除済みとして記録します。',
    okText: isExternal ? '非表示にする' : '削除する'
  });
  if (!ok) return;
  await dismissTodoTask(k, t);
  setTodoFormMessage(isExternal ? '同期タスクを非表示にしました。' : 'タスクを削除しました。');
}

state.todoFilter = 'all';
state.todoView = 'list';
state.todoPeriod = 'all';
state.editingTaskId = null; // 編集中の手動タスクID（nullなら新規追加モード）
state.todoDetailKey = null;

function getDeadlineLimit(period) {
  const today = new Date(); today.setHours(0,0,0,0);
  if (period === 'today') return today;
  if (period === 'week') {
    const end = new Date(today); end.setDate(end.getDate() + 7); return end;
  }
  if (period === '2weeks') {
    const end = new Date(today); end.setDate(end.getDate() + 14); return end;
  }
  if (period === 'month') {
    const end = new Date(today); end.setDate(end.getDate() + 30); return end;
  }
  return null;
}

function renderTodoEmptyState(list, allTasks) {
  const isFirstTask = allTasks.length === 0;
  const box = el('div', 'todo-empty-state');
  const title = el('div', 'todo-empty-title');
  title.textContent = isFirstTask ? '最初のタスクを追加しましょう' : '条件に合うタスクがありません';
  const copy = el('div', 'todo-empty-copy');
  copy.textContent = isFirstTask
    ? 'タスク名と締め切り日を入れて「追加」を押すと、リストとDeadline Timelineに表示されます。時刻やカテゴリはあとからでも大丈夫です。'
    : 'フィルタや期間を変えると、隠れているタスクが表示される場合があります。新しい予定は上のフォームから追加できます。';
  const steps = el('div', 'todo-empty-steps');
  (isFirstTask ? ['タスク名', '締め切り日', '追加'] : ['すべて', '全期間', '未完了']).forEach(text => {
    const item = el('span', 'todo-empty-step');
    item.textContent = text;
    steps.appendChild(item);
  });
  box.appendChild(title);
  box.appendChild(copy);
  box.appendChild(steps);
  list.appendChild(box);
}

function renderTodoWorkSummary(allTasks) {
  const wrap = qs('#todo-work-summary');
  if (!wrap) return;
  const todayStr = getLocalDateStr();
  const today = new Date(todayStr + 'T00:00:00');
  const daysBetween = dateStr => {
    if (!dateStr) return null;
    const date = new Date(dateStr + 'T00:00:00');
    if (Number.isNaN(date.getTime())) return null;
    return Math.round((date - today) / 86400000);
  };
  const active = allTasks.filter(t => !isTaskDone(t.id || t.title + t.due));
  const dueTasks = active
    .map(t => ({ task: t, days: daysBetween(t.due) }))
    .filter(item => item.days !== null);
  const todayTasks = dueTasks.filter(item => item.days === 0);
  const overdueTasks = dueTasks.filter(item => item.days < 0);
  const soonTasks = dueTasks.filter(item => item.days >= 0 && item.days <= 3);
  const subtaskTotal = active.reduce((sum, t) => sum + getSubtasks(t).length, 0);
  const subtaskDone = active.reduce((sum, t) => sum + getSubtasks(t).filter(ms => ms.completed).length, 0);
  const next = dueTasks
    .slice()
    .sort((a, b) => {
      const aUrgency = a.days < 0 ? -1000 + a.days : a.days;
      const bUrgency = b.days < 0 ? -1000 + b.days : b.days;
      if (aUrgency !== bUrgency) return aUrgency - bUrgency;
      return priorityRank(b.task.priority) - priorityRank(a.task.priority);
    })[0];
  const doneTotal = allTasks.length - active.length;

  wrap.innerHTML = '';
  wrap.classList.toggle('is-empty', allTasks.length === 0);
  const focus = el('div', 'todo-focus-card' + (overdueTasks.length || todayTasks.length ? ' hot' : ''));
  const kicker = el('div', 'todo-focus-kicker');
  kicker.textContent = allTasks.length ? 'NEXT CHECK' : 'START';
  const title = el('div', 'todo-focus-title');
  const meta = el('div', 'todo-focus-meta');
  const copy = el('div', 'todo-focus-copy');

  if (!allTasks.length) {
    title.textContent = '最初の制作タスクを追加しましょう';
    copy.textContent = 'タスク名と締め切りを入れると、リスト・Deadline Timeline・スマホカードに同じ予定が反映されます。';
  } else if (next) {
    const { task, days } = next;
    title.textContent = task.title || 'Untitled';
    const due = el('span');
    due.textContent = days < 0 ? `${Math.abs(days)}日超過` : days === 0 ? '今日締切' : days === 1 ? '明日締切' : `あと${days}日`;
    meta.appendChild(due);
    [task.subject, priorityLabel(task.priority)].filter(Boolean).forEach(text => {
      const chip = el('span');
      chip.textContent = text;
      meta.appendChild(chip);
    });
    const progress = getSubtaskProgress(task);
    if (progress.total) {
      const chip = el('span');
      chip.textContent = `${progress.done}/${progress.total} サブタスク`;
      meta.appendChild(chip);
    }
    copy.textContent = overdueTasks.length
      ? '期限切れがあります。まず赤い状態のタスクから確認してください。'
      : todayTasks.length
        ? '今日締切のタスクがあります。詳細を開いてサブタスクまで確認できます。'
        : '直近の締切です。ガントでは今日から締切までの距離を確認できます。';
  } else {
    title.textContent = '日時なしタスクがあります';
    copy.textContent = '締め切りがないタスクはリストで確認できます。必要なら詳細から日付やサブタスクを追加してください。';
  }
  focus.appendChild(kicker);
  focus.appendChild(title);
  if (meta.childNodes.length) focus.appendChild(meta);
  focus.appendChild(copy);
  wrap.appendChild(focus);

  if (!allTasks.length) return;
  const metrics = [
    { label: '今日', value: todayTasks.length, note: '今日締切', tone: todayTasks.length ? 'hot' : '' },
    { label: '期限切れ', value: overdueTasks.length, note: '要確認', tone: overdueTasks.length ? 'hot' : '' },
    { label: '3日以内', value: soonTasks.length, note: '直近予定', tone: soonTasks.length ? 'warn' : '' },
    { label: 'サブタスク', value: subtaskTotal ? `${subtaskDone}/${subtaskTotal}` : '0', note: doneTotal ? `完了 ${doneTotal}` : '作業ステップ', tone: subtaskTotal && subtaskDone === subtaskTotal ? 'complete' : '' },
  ];
  const grid = el('div', 'todo-metric-grid');
  metrics.forEach(item => {
    const card = el('div', 'todo-metric' + (item.tone ? ' ' + item.tone : ''));
    const label = el('div', 'todo-metric-label');
    label.textContent = item.label;
    const value = el('div', 'todo-metric-value');
    value.textContent = String(item.value);
    const note = el('div', 'todo-metric-note');
    note.textContent = item.note;
    card.appendChild(label);
    card.appendChild(value);
    card.appendChild(note);
    grid.appendChild(card);
  });
  wrap.appendChild(grid);
}

function renderTodo() {
  updateMainLayoutMode();
  const allTasks = getAllTasks();
  scheduleDonePurgeForVisibleTasks(allTasks);
  renderTodoWorkSummary(allTasks);
  const filter = state.todoFilter;
  const limit = getDeadlineLimit(state.todoPeriod);
  const today = new Date(); today.setHours(0,0,0,0);

  const filtered = allTasks.filter(t => {
    const k = t.id || t.title + t.due;
    const done = isTaskDone(k);
    if (filter === 'active' && done) return false;
    if (filter === 'done' && !done) return false;
    // 期間フィルタ（締め切りなしは全期間のみ表示）
    if (state.todoPeriod === 'today') {
      if (t.due !== getLocalDateStr()) return false;
    } else if (limit && t.due) {
      const due = new Date(t.due + 'T00:00:00');
      if (due > limit) return false;
    } else if (limit && !t.due) {
      return false;
    }
    return true;
  });

  const pending = allTasks.filter(t => !isTaskDone(t.id||t.title+t.due));
  qs('#todo-count').textContent = pending.length + ' TASKS';

  if (state.todoView === 'list') {
    qs('#todo-list-view').classList.remove('hidden');
    qs('#todo-gantt-view').classList.add('hidden');
    const list = qs('#todo-list');
    list.innerHTML = '';
    if (filtered.length === 0) {
      renderTodoEmptyState(list, allTasks);
      renderTodoDoneLog();
      return;
    }
    filtered.sort((a,b) => {
      const pa = priorityRank(a.priority);
      const pb = priorityRank(b.priority);
      if (pa !== pb) return pb - pa;
      if (!a.due && !b.due) return 0;
      if (!a.due) return 1;
      if (!b.due) return -1;
      return a.due < b.due ? -1 : 1;
    }).forEach(t => {
      const k = t.id || t.title + t.due;
      const done = isTaskDone(k);
      const over = isOverdue(t.due) && !done;
      const row = el('div', 'task-row');
      bindTodoDetailOpen(row, t);
      const cb = el('div', 'cb' + (done ? ' done' : ''));
      cb.addEventListener('click', e => {
        e.stopPropagation();
        toggleTaskDone(k, t);
      });
      const info = el('div'); info.style.flex = '1';
      const title = el('div', 'task-title' + (done ? ' done' : over ? ' overdue' : ''));
      title.textContent = t.title;
      const metaRow = el('div', 'task-meta-row');
      const meta = el('div', 'task-meta');
      const actions = el('div', 'task-actions');
      const pr = el('span', 'priority-tag priority-' + (t.priority || 'normal'));
      pr.textContent = priorityLabel(t.priority);
      meta.appendChild(pr);
      const typeTag = el('span', 'tag');
      typeTag.textContent = isMainTask(t) ? 'MAIN' : 'SIMPLE';
      meta.appendChild(typeTag);
      const repeatText = repeatLabel(t.repeat);
      if (repeatText) { const tag = el('span', 'tag'); tag.textContent = repeatText; meta.appendChild(tag); }
      if (t.subject) { const tag = el('span', 'tag'); tag.textContent = t.subject; meta.appendChild(tag); }

      // 日付・期間の表示
      const dateLabel = el('span', 'task-due' + (over ? ' overdue' : ''));
      if (t.dateType === 'range' && t.start) {
        const startStr = fmtFull(t.start) + (t.startTime ? ' ' + t.startTime : '');
        const endStr = t.due ? fmtFull(t.due) + (t.dueTime ? ' ' + t.dueTime : '') : '';
        dateLabel.textContent = startStr + (endStr ? ' → ' + endStr : '');
        meta.appendChild(dateLabel);
      } else if (t.due) {
        const timeStr = t.dueTime ? ' ' + t.dueTime : '';
        dateLabel.textContent = fmtFull(t.due) + timeStr + (over ? ' · 期限切れ' : ' 締切');
        meta.appendChild(dateLabel);
      }
      appendSubtaskProgress(meta, t);

      // 完了済み → カウントダウン表示
      if (done) {
        const countdown = el('span');
        countdown.style.cssText = 'font-size:10px;color:var(--fg6);letter-spacing:.05em;margin-left:auto';
        countdown.textContent = '5分後に削除';
        const updateCountdown = () => {
          const remaining = getDoneRemainingMs(k);
          const mins = Math.floor(remaining / 60000);
          const secs = Math.floor((remaining % 60000) / 1000);
          countdown.textContent = remaining > 0
            ? `${mins}:${String(secs).padStart(2,'0')} 後に削除`
            : '削除中...';
        };
        updateCountdown();
        const intervalId = setInterval(() => {
          if (!document.body.contains(countdown)) { clearInterval(intervalId); return; }
          updateCountdown();
        }, 1000);
        meta.appendChild(countdown);
      }

      // 手動タスクは編集可能。削除は同期元を問わず常に表示。
      if (t._manual) {
        const edit = el('button', 'clip-del-btn'); edit.textContent = '編集';
        edit.addEventListener('click', e => {
          e.stopPropagation();
          startEditTask(t._sourceTask || t);
        });
        actions.appendChild(edit);
      }
      const del = el('button', 'clip-del-btn');
      del.textContent = done ? '消す' : t._manual ? '削除' : '非表示';
      if (!t._manual) del.title = 'Classroom/GAS同期後も戻らないように非表示にします';
      del.addEventListener('click', e => {
        e.stopPropagation();
        confirmDismissTodoTask(k, t);
      });
      actions.appendChild(del);
      metaRow.appendChild(meta);
      metaRow.appendChild(actions);
      info.appendChild(title); info.appendChild(metaRow);
      row.appendChild(cb); row.appendChild(info);
      list.appendChild(row);
    });
  } else {
    qs('#todo-list-view').classList.add('hidden');
    qs('#todo-gantt-view').classList.remove('hidden');
    renderGantt(filtered);
  }
  renderTodoDoneLog();
}

function priorityRank(priority) {
  return priority === 'high' ? 3 : priority === 'normal' || !priority ? 2 : 1;
}

function priorityLabel(priority) {
  if (priority === 'high') return 'HIGH';
  if (priority === 'low') return 'LOW';
  return 'NORMAL';
}

function setPriorityValue(priority) {
  const value = ['high', 'normal', 'low'].includes(priority) ? priority : 'normal';
  const input = qs('#todo-priority-input');
  if (input) input.value = value;
}

function setTodoFormMessage(message, isError = false) {
  const msg = qs('#todo-form-msg');
  if (!msg) return;
  if (!message) {
    msg.textContent = '';
    msg.classList.add('hidden');
    msg.classList.remove('warn');
    return;
  }
  msg.textContent = message;
  msg.classList.remove('hidden');
  msg.classList.toggle('warn', isError);
}

function recordCompletedTask(t) {
  const logs = LS.get('todo_done_log') || [];
  logs.unshift({
    id: t.id || t.title + t.due,
    title: t.title || '',
    subject: t.subject || '',
    priority: t.priority || 'normal',
    completedAt: new Date().toISOString(),
  });
  LS.set('todo_done_log', logs.slice(0, 50));
}

function renderTodoDoneLog() {
  const wrap = qs('#todo-done-log');
  if (!wrap) return;
  const logs = LS.get('todo_done_log') || [];
  if (logs.length === 0) {
    wrap.innerHTML = '<div class="log-empty" style="line-height:1.8">まだ完了ログがありません</div>';
    return;
  }
  wrap.innerHTML = '';
  logs.slice(0, 8).forEach(item => {
    const row = el('div', 'done-log-row');
    const left = el('div');
    left.textContent = item.title || 'Untitled';
    const right = el('div', 'done-log-time');
    right.textContent = new Date(item.completedAt).toLocaleString('ja-JP', {month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit'});
    row.appendChild(left);
    row.appendChild(right);
    wrap.appendChild(row);
  });
}

function getTaskDateLabel(t) {
  if (!t) return '日時なし';
  if (t.dateType === 'range' && t.start) {
    const start = fmtFull(t.start) + (t.startTime ? ' ' + t.startTime : '');
    const end = t.due ? fmtFull(t.due) + (t.dueTime ? ' ' + t.dueTime : '') : '';
    return end ? `${start} → ${end}` : start;
  }
  if (t.due) return fmtFull(t.due) + (t.dueTime ? ' ' + t.dueTime : '') + ' 締切';
  return '日時なし';
}

function getSubtasks(t) {
  return normalizeTask(t).milestones || [];
}

function isMainTask(t) {
  return normalizeTask(t).taskType === 'main';
}

function taskTypeLabel(t) {
  return isMainTask(t) ? 'MAIN TASK' : 'SIMPLE TASK';
}

function getSubtaskProgress(t) {
  const subtasks = getSubtasks(t);
  const total = subtasks.length;
  const done = subtasks.filter(s => s.completed).length;
  return { subtasks, total, done, text: total ? `サブタスク ${done}/${total}` : '' };
}

function appendSubtaskProgress(parent, task, cls = 'subtask-progress-chip') {
  const progress = getSubtaskProgress(task);
  if (!progress.total) return;
  const chip = el('span', cls + (progress.done === progress.total ? ' complete' : ''));
  chip.textContent = progress.done === progress.total ? `${progress.done}/${progress.total} 完了` : progress.text;
  parent.appendChild(chip);
}

function bindImeCompositionGuard(input) {
  if (!input) return input;
  input.dataset.imeComposing = 'false';
  input.dataset.imeEndedAt = '0';
  input.addEventListener('compositionstart', () => {
    input.dataset.imeComposing = 'true';
  });
  input.addEventListener('compositionend', () => {
    input.dataset.imeComposing = 'false';
    input.dataset.imeEndedAt = String(Date.now());
  });
  input.addEventListener('blur', () => {
    input.dataset.imeComposing = 'false';
  });
  return input;
}

function isImeComposingEvent(e) {
  const targetComposing = e?.currentTarget?.dataset?.imeComposing === 'true';
  const endedAt = Number(e?.currentTarget?.dataset?.imeEndedAt || 0);
  const justEnded = endedAt > 0 && Date.now() - endedAt < 80;
  return !!(targetComposing || justEnded || e.isComposing || e.keyCode === 229 || e.nativeEvent?.isComposing);
}

function compareTaskAndSubtaskDue(parentTask, subtask) {
  if (!parentTask?.due || !subtask?.dueDate) return 0;
  const parentTime = parentTask.dueTime || '23:59';
  const subtaskTime = subtask.dueTime || '23:59';
  const parentDue = new Date(`${parentTask.due}T${parentTime}:00`);
  const subtaskDue = new Date(`${subtask.dueDate}T${subtaskTime}:00`);
  if (Number.isNaN(parentDue.getTime()) || Number.isNaN(subtaskDue.getTime())) return 0;
  return subtaskDue.getTime() - parentDue.getTime();
}

function subtaskDueLabel(subtask) {
  if (!subtask?.dueDate) return '';
  const start = subtask.startDate ? fmtFull(subtask.startDate) + ' → ' : '';
  return start + fmtFull(subtask.dueDate) + (subtask.dueTime ? ` ${subtask.dueTime}` : '') + 'まで';
}

function subtaskDateObject(subtask) {
  if (!subtask?.dueDate) return null;
  const d = new Date(`${subtask.dueDate}T${subtask.dueTime || '12:00'}:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function subtaskStartDateObject(subtask) {
  if (!subtask?.startDate) return null;
  const d = new Date(`${subtask.startDate}T00:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function taskDateObject(value, fallbackTime = '00:00') {
  const date = getDatePart(value);
  if (!date) return null;
  const d = new Date(`${date}T${fallbackTime}:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function getTaskTimelineStartDate(task, today = new Date()) {
  const t = normalizeTask(task);
  const explicit = taskDateObject(t.startDate || t.start);
  if (explicit) return explicit;
  if (!isMainTask(t)) {
    const created = taskDateObject(t.createdAt);
    if (created) return created;
    const due = getTaskDueDateObject(t);
    const fallback = new Date(today);
    fallback.setHours(0, 0, 0, 0);
    if (due && due < fallback) return due;
    return fallback;
  }
  return taskDateObject(t.dueDate || t.due) || null;
}

function getTaskDueDateObject(task) {
  const t = normalizeTask(task);
  return taskDateObject(t.dueDate || t.due);
}

function getNextTaskStep(task) {
  const steps = getSubtasks(task)
    .filter(step => !step.completed)
    .map(step => ({ step, due: subtaskDateObject(step), start: subtaskStartDateObject(step) }))
    .sort((a, b) => {
      const ad = a.due || a.start || new Date(8640000000000000);
      const bd = b.due || b.start || new Date(8640000000000000);
      return ad - bd;
    });
  return steps[0] || null;
}

function createSubtaskField(labelText, control, options = {}) {
  const wrap = el('label', 'subtask-field' + (options.full ? ' full' : ''));
  const label = el('span', 'subtask-field-label');
  label.textContent = labelText;
  wrap.appendChild(label);
  wrap.appendChild(control);
  return wrap;
}

function createSubtaskDatePicker(value = '', label = 'サブタスクの期限日', options = {}) {
  const id = createMilestoneId();
  const showClear = options.showClear !== false;
  const wrap = el('div', 'subtask-picker-field');
  const fieldLabel = el('span', 'subtask-field-label');
  fieldLabel.textContent = options.fieldLabel || '期限日';
  const controlLine = el('div', 'subtask-picker-line' + (showClear ? '' : ' no-clear'));
  const trigger = el('div', 'custom-date-input subtask-date-picker');
  trigger.id = 'subtask-date-' + id;
  trigger.dataset.target = 'subtask-date-hidden-' + id;
  trigger.setAttribute('role', 'button');
  trigger.setAttribute('tabindex', '0');
  trigger.setAttribute('aria-label', label);
  const text = el('span', 'cdi-text' + (value ? '' : ' placeholder'));
  text.textContent = value ? fmtFull(value) : '日付を選択';
  const icon = el('span', 'cdi-icon');
  icon.textContent = '▼';
  trigger.appendChild(text);
  trigger.appendChild(icon);
  const hidden = el('input');
  hidden.type = 'hidden';
  hidden.id = trigger.dataset.target;
  hidden.value = value || '';
  let clear = null;
  if (showClear) {
    clear = el('button', 'subtask-picker-clear');
    clear.type = 'button';
    clear.textContent = 'クリア';
    clear.setAttribute('aria-label', `${label}をクリア`);
    clear.addEventListener('click', e => {
      e.stopPropagation();
      hidden.value = '';
      text.textContent = '日付を選択';
      text.classList.add('placeholder');
    });
  }
  const open = () => Picker.openDate(trigger, hidden.id);
  trigger.addEventListener('click', open);
  trigger.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    open();
  });
  wrap.appendChild(fieldLabel);
  controlLine.appendChild(trigger);
  if (clear) controlLine.appendChild(clear);
  wrap.appendChild(controlLine);
  wrap.appendChild(hidden);
  return { wrap, hidden };
}

function createSubtaskTimePicker(value = '', label = 'サブタスクの期限時刻', options = {}) {
  const id = createMilestoneId();
  const showClear = options.showClear !== false;
  const wrap = el('div', 'subtask-picker-field');
  const fieldLabel = el('span', 'subtask-field-label');
  fieldLabel.textContent = '期限時刻';
  const controlLine = el('div', 'subtask-picker-line' + (showClear ? '' : ' no-clear'));
  const trigger = el('div', 'custom-time-input subtask-time-picker');
  trigger.id = 'subtask-time-' + id;
  trigger.dataset.target = 'subtask-time-hidden-' + id;
  trigger.setAttribute('role', 'button');
  trigger.setAttribute('tabindex', '0');
  trigger.setAttribute('aria-label', label);
  const text = el('span', 'cti-text' + (value ? '' : ' placeholder'));
  text.textContent = value || '--:--';
  const icon = el('span', 'cdi-icon');
  icon.textContent = '▼';
  trigger.appendChild(text);
  trigger.appendChild(icon);
  const hidden = el('input');
  hidden.type = 'hidden';
  hidden.id = trigger.dataset.target;
  hidden.value = value || '';
  let clear = null;
  if (showClear) {
    clear = el('button', 'subtask-picker-clear');
    clear.type = 'button';
    clear.textContent = 'クリア';
    clear.setAttribute('aria-label', `${label}をクリア`);
    clear.addEventListener('click', e => {
      e.stopPropagation();
      hidden.value = '';
      text.textContent = '--:--';
      text.classList.add('placeholder');
    });
  }
  const open = () => Picker.openTime(trigger, hidden.id);
  trigger.addEventListener('click', open);
  trigger.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    open();
  });
  wrap.appendChild(fieldLabel);
  controlLine.appendChild(trigger);
  if (clear) controlLine.appendChild(clear);
  wrap.appendChild(controlLine);
  wrap.appendChild(hidden);
  return { wrap, hidden };
}

function findTaskByKey(key) {
  return getAllTasks().find(t => getTaskKey(t) === key) || null;
}

function getEditableManualTaskId(t) {
  if (!t || !t._manual) return '';
  return t._sourceId || t.id || '';
}

function getManualTaskById(id) {
  return normalizeManualTasks(LS.get('manual_tasks')).find(t => t.id === id) || null;
}

async function updateManualTaskById(id, updater) {
  const manual = normalizeManualTasks(LS.get('manual_tasks'));
  const idx = manual.findIndex(t => t.id === id);
  if (idx === -1) return null;
  const nextTask = normalizeTask(updater(manual[idx]));
  nextTask.updatedAt = new Date().toISOString();
  manual[idx] = nextTask;
  await saveManualTasks(manual);
  renderTodo();
  return nextTask;
}

async function updateTaskPlanningData(task, updater) {
  const baseTask = normalizeTask(task);
  const manualId = getEditableManualTaskId(baseTask);
  if (manualId) return await updateManualTaskById(manualId, updater);

  const overrideKey = getTaskOverrideKey(baseTask);
  if (!overrideKey) return null;
  const overrides = getTaskOverrides();
  const current = applyTaskUserOverride(baseTask);
  const nextTask = normalizeTask(updater(current));
  const milestones = mergeMilestoneLists(nextTask.milestones);
  overrides[overrideKey] = normalizeTaskOverride({
    ...(overrides[overrideKey] || {}),
    taskType: nextTask.taskType,
    description: nextTask.description,
    start: nextTask.start,
    startDate: nextTask.startDate,
    due: nextTask.due,
    dueDate: nextTask.dueDate,
    milestones,
    subtasks: milestones,
    priority: nextTask.priority,
    subject: nextTask.subject,
    category: nextTask.category || nextTask.subject,
    dueTime: nextTask.dueTime,
    completed: sourceMarksTaskDone(nextTask),
    completedAt: nextTask.completedAt,
    updatedAt: new Date().toISOString(),
  });
  saveTaskOverrides(overrides);
  renderTodo();
  return applyTaskUserOverride(baseTask);
}

function setTodoDetailMessage(message, isError = false) {
  const msg = qs('#todo-detail-action-msg');
  if (!msg) return;
  if (!message) {
    msg.textContent = '';
    msg.classList.add('hidden');
    msg.classList.remove('warn');
    return;
  }
  msg.textContent = message;
  msg.classList.remove('hidden');
  msg.classList.toggle('warn', isError);
}

function renderTodoDetail(taskArg) {
  const content = qs('#todo-detail-content');
  if (!content) return;
  const task = normalizeTask(taskArg || findTaskByKey(state.todoDetailKey));
  if (!task || !task.title) {
    content.innerHTML = '<div class="todo-detail-empty">タスクを確認できませんでした。一覧を再読み込みしてください。</div>';
    return;
  }

  const key = getTaskKey(task);
  const editableId = getEditableManualTaskId(task);
  const editableTask = editableId ? getManualTaskById(editableId) : null;
  const overrideKey = getTaskOverrideKey(task);
  const canEditPlanning = !!editableId || !!overrideKey;
  const detailTask = normalizeTask(editableTask || applyTaskUserOverride(task));
  const milestones = detailTask.milestones || [];
  const done = isTaskDone(key);

  content.innerHTML = '';
  const title = el('div', 'todo-detail-title');
  title.id = 'todo-detail-title';
  title.textContent = task.title || 'Untitled';
  const meta = el('div', 'todo-detail-meta');
  [
    taskTypeLabel(detailTask),
    getTaskDateLabel(task),
    task.subject || 'カテゴリなし',
    priorityLabel(task.priority),
    done ? '完了' : '未完了',
  ].forEach(text => {
    const chip = el('span', 'todo-detail-chip');
    chip.textContent = text;
    meta.appendChild(chip);
  });

  const descSection = el('section', 'todo-detail-section');
  const descLabel = el('div', 'todo-detail-label');
  descLabel.textContent = '説明 / メモ';
  const desc = el('div', detailTask.description ? 'todo-detail-copy' : 'todo-detail-empty');
  desc.textContent = detailTask.description || '説明なし';
  descSection.appendChild(descLabel);
  descSection.appendChild(desc);
  const descEditKey = getEditableManualTaskId(task) || getTaskOverrideKey(task);
  if (descEditKey) {
    const descForm = el('div', 'todo-detail-desc-form');
    const descInput = el('textarea');
    descInput.rows = 3;
    descInput.value = detailTask.description || '';
    descInput.placeholder = 'このタスクの進め方やメモを書く';
    descInput.setAttribute('aria-label', '説明またはメモを編集');
    const descSave = el('button', 'ghost-btn');
    descSave.type = 'button';
    descSave.textContent = 'メモ保存';
    descSave.addEventListener('click', async () => {
      const updated = await updateTaskPlanningData(detailTask, current => ({
        ...current,
        description: descInput.value.trim()
      }));
      renderTodoDetail(updated);
      setTodoDetailMessage('説明 / メモを保存しました');
    });
    descForm.appendChild(descInput);
    descForm.appendChild(descSave);
    descSection.appendChild(descForm);
  }

  const typeSection = el('section', 'todo-detail-section todo-detail-type-section');
  const typeLabel = el('div', 'todo-detail-label');
  typeLabel.textContent = isMainTask(detailTask) ? '作業計画' : 'タスク種別';
  const typeCopy = el('div', 'todo-detail-copy');
  typeCopy.textContent = isMainTask(detailTask)
    ? '開始日から最終締切までを制作・課題の作業期間として扱い、サブタスクを工程として表示します。'
    : 'これは軽いタスクとして扱われます。Ganttでは期限までの注意期間として細いバーで表示します。';
  typeSection.appendChild(typeLabel);
  typeSection.appendChild(typeCopy);
  if (canEditPlanning) {
    const switcher = el('div', 'todo-detail-type-switch');
    [
      { type: 'simple', label: '簡易タスク' },
      { type: 'main', label: 'メインタスク' },
    ].forEach(option => {
      const btn = el('button', isMainTask(detailTask) === (option.type === 'main') ? 'active' : '');
      btn.type = 'button';
      btn.textContent = option.label;
      btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
      btn.addEventListener('click', async () => {
        const nextType = option.type;
        if (normalizeTaskType({ taskType: nextType }) === detailTask.taskType) return;
        const start = detailTask.start || getDatePart(detailTask.createdAt) || getLocalDateStr();
        const updated = await updateTaskPlanningData(detailTask, current => ({
          ...current,
          taskType: nextType,
          start: nextType === 'main' ? (current.start || current.startDate || start) : current.start,
          startDate: nextType === 'main' ? (current.startDate || current.start || start) : current.startDate,
          dateType: nextType === 'main' && (current.due || current.dueDate) ? 'range' : current.dateType,
          milestones: current.milestones || detailTask.milestones || [],
          subtasks: current.subtasks || current.milestones || detailTask.milestones || [],
        }));
        renderTodoDetail(updated);
        setTodoDetailMessage(nextType === 'main'
          ? 'メインタスクに変更しました。工程を追加できます。'
          : '簡易タスクに変更しました。既存のサブタスクは消さずに保持しています。'
        );
      });
      switcher.appendChild(btn);
    });
    typeSection.appendChild(switcher);
  }

  const milestoneSection = el('section', 'todo-detail-section');
  const milestoneLabel = el('div', 'todo-detail-label');
  const progress = getSubtaskProgress(detailTask);
  milestoneLabel.textContent = 'サブタスク';
  milestoneSection.appendChild(milestoneLabel);
  const actionMsg = el('div', 'todo-detail-action-msg hidden');
  actionMsg.id = 'todo-detail-action-msg';
  actionMsg.setAttribute('role', 'status');
  actionMsg.setAttribute('aria-live', 'polite');
  milestoneSection.appendChild(actionMsg);
  if (progress.total) {
    const summary = el('div', 'subtask-summary');
    summary.textContent = `${progress.done} / ${progress.total} 完了`;
    if (progress.done === progress.total) summary.textContent += ' · すべて完了';
    milestoneSection.appendChild(summary);
  }

  const list = el('div', 'milestone-list');
  if (!milestones.length) {
    const empty = el('div', 'todo-detail-empty');
    empty.textContent = 'まだサブタスクはありません。作業を小さく分けると進めやすくなります。';
    list.appendChild(empty);
  } else {
    milestones.forEach(ms => {
      const row = el('div', 'milestone-row' + (ms.completed ? ' done' : ''));
      const check = el('button', 'milestone-check' + (ms.completed ? ' done' : ''));
      check.type = 'button';
      check.setAttribute('aria-label', ms.completed ? `${ms.title}を未完了に戻す` : `${ms.title}を完了にする`);
      check.disabled = !canEditPlanning;
      check.addEventListener('click', async () => {
        if (!canEditPlanning) return;
        const nextCompleted = !ms.completed;
        const updated = await updateTaskPlanningData(detailTask, current => ({
          ...current,
          milestones: (current.milestones || []).map(item => item.id === ms.id ? {...item, completed: !item.completed} : item)
        }));
        renderTodoDetail(updated);
        setTodoDetailMessage(nextCompleted
          ? `完了にしました: ${ms.title || 'サブタスク'}`
          : `未完了に戻しました: ${ms.title || 'サブタスク'}`
        );
      });
      const main = el('div', 'milestone-main');
      const msTitle = el('div', 'milestone-title');
      msTitle.textContent = ms.title || 'サブタスク';
      main.appendChild(msTitle);
      if (ms.dueDate) {
        const due = el('div', 'milestone-due' + (compareTaskAndSubtaskDue(detailTask, ms) > 0 ? ' warn' : ''));
        due.textContent = subtaskDueLabel(ms);
        if (compareTaskAndSubtaskDue(detailTask, ms) > 0) due.textContent += ' · 親タスクより後';
        main.appendChild(due);
      }
      if (ms.note) {
        const noteText = el('div', 'milestone-note-text');
        noteText.textContent = ms.note;
        main.appendChild(noteText);
      }
      const controls = el('div', 'milestone-controls');
      const edit = el('button', 'milestone-edit');
      edit.type = 'button';
      edit.textContent = '編集';
      edit.disabled = !canEditPlanning;
      const del = el('button', 'milestone-delete');
      del.type = 'button';
      del.textContent = '削除';
      del.disabled = !canEditPlanning;
      controls.appendChild(edit);
      controls.appendChild(del);
      del.addEventListener('click', async () => {
        if (!canEditPlanning) return;
        const ok = await confirmAction({
          title: 'サブタスクを削除しますか？',
          body: 'このサブタスクだけを削除します。親タスクは残ります。',
          okText: '削除する'
        });
        if (!ok) return;
        const deletedTitle = ms.title || 'サブタスク';
        const updated = await updateTaskPlanningData(detailTask, current => ({
          ...current,
          milestones: (current.milestones || []).filter(item => item.id !== ms.id)
        }));
        renderTodoDetail(updated);
        setTodoDetailMessage(`削除しました: ${deletedTitle}`);
      });
      row.appendChild(check);
      row.appendChild(main);
      row.appendChild(controls);
      list.appendChild(row);

      const editForm = el('div', 'subtask-edit-form hidden');
      const editHead = el('div', 'subtask-edit-head');
      const editHeadLabel = el('span');
      editHeadLabel.textContent = 'サブタスクを編集';
      const editTarget = el('span', 'subtask-edit-target');
      editTarget.textContent = ms.title || 'サブタスク';
      editHead.appendChild(editHeadLabel);
      editHead.appendChild(editTarget);
      const editTitle = el('input');
      editTitle.type = 'text';
      editTitle.value = ms.title || '';
      editTitle.setAttribute('aria-label', 'サブタスク名を編集');
      bindImeCompositionGuard(editTitle);
      const editStartDatePicker = createSubtaskDatePicker(ms.startDate || '', 'サブタスクの開始日を編集', { fieldLabel: '開始日' });
      const editDatePicker = createSubtaskDatePicker(ms.dueDate || '', 'サブタスクの期限日を編集', { fieldLabel: '終了日' });
      const editTimePicker = createSubtaskTimePicker(ms.dueTime || '', 'サブタスクの期限時刻を編集');
      const editNote = el('textarea');
      editNote.rows = 2;
      editNote.value = ms.note || '';
      editNote.placeholder = 'メモ（任意）';
      editNote.setAttribute('aria-label', 'サブタスクのメモを編集');
      const saveEdit = el('button', 'save-btn');
      saveEdit.type = 'button';
      saveEdit.textContent = '保存';
      saveEdit.addEventListener('click', async () => {
        const nextTitle = editTitle.value.trim();
        if (!nextTitle) {
          setTodoDetailMessage('サブタスク名を入力してください。', true);
          editTitle.focus();
          return;
        }
        const updated = await updateTaskPlanningData(detailTask, current => ({
          ...current,
          milestones: (current.milestones || []).map(item => item.id === ms.id ? {
            ...item,
            title: nextTitle,
            startDate: editStartDatePicker.hidden.value,
            start: editStartDatePicker.hidden.value,
            dueDate: editDatePicker.hidden.value,
            dueTime: editTimePicker.hidden.value,
            note: editNote.value.trim()
          } : item)
        }));
        renderTodoDetail(updated);
        setTodoDetailMessage(`保存しました: ${nextTitle}`);
      });
      edit.addEventListener('click', () => {
        editForm.classList.toggle('hidden');
        if (!editForm.classList.contains('hidden')) editTitle.focus();
      });
      editForm.appendChild(editHead);
      editForm.appendChild(createSubtaskField('サブタスク名', editTitle));
      editForm.appendChild(editStartDatePicker.wrap);
      editForm.appendChild(editDatePicker.wrap);
      editForm.appendChild(editTimePicker.wrap);
      editForm.appendChild(createSubtaskField('メモ', editNote, { full: true }));
      editForm.appendChild(saveEdit);
      list.appendChild(editForm);
    });
  }
  milestoneSection.appendChild(list);

  if (canEditPlanning) {
    const form = el('div', 'milestone-form subtask-quick-form');
    const titleInput = el('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'サブタスクを追加...';
    titleInput.setAttribute('aria-label', 'サブタスク名');
    bindImeCompositionGuard(titleInput);
    const startDatePicker = createSubtaskDatePicker('', 'サブタスクの開始日', { showClear: false, fieldLabel: '開始日' });
    const datePicker = createSubtaskDatePicker('', 'サブタスクの期限日', { showClear: false, fieldLabel: '終了日' });
    const timePicker = createSubtaskTimePicker('', 'サブタスクの期限時刻', { showClear: false });
    const noteInput = el('textarea');
    noteInput.rows = 2;
    noteInput.placeholder = 'メモ（任意）';
    noteInput.setAttribute('aria-label', 'サブタスクのメモ');
    const add = el('button', 'save-btn');
    add.type = 'button';
    add.textContent = '追加';
    const addSubtask = async () => {
      const titleValue = titleInput.value.trim();
      const startValue = startDatePicker.hidden.value;
      const dueValue = datePicker.hidden.value;
      const dueTimeValue = timePicker.hidden.value;
      const noteValue = noteInput.value.trim();
      if (!titleValue) {
        setTodoDetailMessage('サブタスク名を入力してください。', true);
        titleInput.focus();
        return;
      }
      const updated = await updateTaskPlanningData(detailTask, current => ({
        ...current,
        milestones: [
          ...(current.milestones || []),
          { id: createMilestoneId(), title: titleValue, startDate: startValue, start: startValue, dueDate: dueValue, dueTime: dueTimeValue, note: noteValue, completed: false }
        ]
      }));
      titleInput.value = '';
      startDatePicker.hidden.value = '';
      startDatePicker.wrap.querySelector('.cdi-text').textContent = '日付を選択';
      startDatePicker.wrap.querySelector('.cdi-text').classList.add('placeholder');
      datePicker.hidden.value = '';
      datePicker.wrap.querySelector('.cdi-text').textContent = '日付を選択';
      datePicker.wrap.querySelector('.cdi-text').classList.add('placeholder');
      timePicker.hidden.value = '';
      timePicker.wrap.querySelector('.cti-text').textContent = '--:--';
      timePicker.wrap.querySelector('.cti-text').classList.add('placeholder');
      noteInput.value = '';
      renderTodoDetail(updated);
      setTodoDetailMessage(`追加しました: ${titleValue}`);
    };
    add.addEventListener('click', addSubtask);
    titleInput.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      if (isImeComposingEvent(e)) return;
      e.preventDefault();
      addSubtask();
    });
    form.appendChild(createSubtaskField('サブタスク名', titleInput));
    form.appendChild(startDatePicker.wrap);
    form.appendChild(datePicker.wrap);
    form.appendChild(timePicker.wrap);
    form.appendChild(createSubtaskField('メモ', noteInput));
    form.appendChild(add);
    milestoneSection.appendChild(form);
  } else {
    const note = el('div', 'milestone-note');
    note.textContent = 'このタスクではサブタスクを編集できません。同期状態を確認してください。';
    milestoneSection.appendChild(note);
  }

  content.appendChild(title);
  content.appendChild(meta);
  content.appendChild(descSection);
  content.appendChild(typeSection);
  content.appendChild(milestoneSection);
}

function openTodoDetail(task) {
  if (!task) return;
  state.todoDetailKey = getTaskKey(task);
  renderTodoDetail(task);
  qs('#todo-detail-modal')?.classList.remove('hidden');
  qs('#todo-detail-close')?.focus();
}

function closeTodoDetail() {
  state.todoDetailKey = null;
  qs('#todo-detail-modal')?.classList.add('hidden');
}

function bindTodoDetailOpen(target, task) {
  target.setAttribute('role', 'button');
  target.setAttribute('tabindex', '0');
  target.setAttribute('aria-label', `${task.title || 'タスク'}の詳細を開く`);
  target.addEventListener('click', () => openTodoDetail(task));
  target.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    openTodoDetail(task);
  });
}

function getWidgetTasks() {
  return getAllTasks()
    .filter(t => t.due && !isTaskDone(t.id || t.title + t.due))
    .sort((a,b) => {
      const pa = priorityRank(a.priority);
      const pb = priorityRank(b.priority);
      if (pa !== pb) return pb - pa;
      return a.due < b.due ? -1 : a.due > b.due ? 1 : 0;
    })
    .slice(0, 6);
}

function bindWidgetTaskToggle(row, key, task) {
  row.setAttribute('role', 'button');
  row.setAttribute('tabindex', '0');
  row.setAttribute('aria-label', `${task.title || 'タスク'}を完了にする`);
  row.addEventListener('click', () => toggleTaskDone(key, task));
  row.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    toggleTaskDone(key, task);
  });
}

function renderTodoWidget() {
  const wrap = qs('#widget-content');
  const count = qs('#widget-count');
  if (!wrap) return;
  const tasks = getWidgetTasks();
  if (count) count.textContent = `${tasks.length} ACTIVE`;
  qs('#widget-list-btn')?.classList.toggle('active', state.widgetView !== 'gantt');
  qs('#widget-gantt-btn')?.classList.toggle('active', state.widgetView === 'gantt');
  wrap.innerHTML = '';
  if (!tasks.length) {
    wrap.innerHTML = '<div class="widget-empty">表示する締め切りタスクがありません</div>';
    return;
  }
  const today = new Date(); today.setHours(0,0,0,0);
  const daysBetween = (a, b) => Math.round((a - b) / 86400000);
  const toneForDays = days => days < 0 ? 'over' : days <= 2 ? 'hot' : days <= 7 ? 'warn' : '';
  const dueLabel = days => days < 0 ? `${Math.abs(days)}日超過` : days === 0 ? '今日' : days === 1 ? '明日' : `${days}日`;

  if (state.widgetView === 'gantt') {
    const maxDays = Math.max(1, ...tasks.map(t => Math.max(0, daysBetween(new Date(t.due + 'T00:00:00'), today))));
    const list = el('div', 'widget-gantt');
    tasks.forEach(t => {
      const k = t.id || t.title + t.due;
      const due = new Date(t.due + 'T00:00:00');
      const days = daysBetween(due, today);
      const tone = toneForDays(days);
      const row = el('div', 'widget-gantt-row');
      const title = el('div', 'widget-gantt-title');
      title.textContent = t.title || 'Untitled';
      const rail = el('div', 'widget-gantt-rail');
      const fill = el('div', 'widget-gantt-fill' + (tone ? ' ' + tone : ''));
      fill.style.width = days < 0 ? '100%' : `${Math.max(8, Math.round(((maxDays - days + 1) / (maxDays + 1)) * 100))}%`;
      rail.appendChild(fill);
      const badge = el('div', 'widget-due' + (tone ? ' ' + tone : ''));
      badge.textContent = dueLabel(days);
      bindWidgetTaskToggle(row, k, t);
      row.appendChild(title);
      row.appendChild(rail);
      row.appendChild(badge);
      list.appendChild(row);
    });
    wrap.appendChild(list);
    return;
  }

  const list = el('div', 'widget-list');
  tasks.forEach(t => {
    const k = t.id || t.title + t.due;
    const due = new Date(t.due + 'T00:00:00');
    const days = daysBetween(due, today);
    const tone = toneForDays(days);
    const row = el('div', 'widget-task');
    const cb = el('div', 'widget-check');
    const main = el('div', 'widget-task-main');
      const title = el('div', 'widget-task-title');
      title.textContent = t.title || 'Untitled';
      const meta = el('div', 'widget-task-meta');
      const widgetParts = [t.subject, priorityLabel(t.priority), fmtFull(t.due)].filter(Boolean);
      const widgetProgress = getSubtaskProgress(t);
      if (widgetProgress.total) widgetParts.push(`${widgetProgress.done}/${widgetProgress.total} 完了`);
      meta.textContent = widgetParts.join(' / ');
    const badge = el('div', 'widget-due' + (tone ? ' ' + tone : ''));
    badge.textContent = dueLabel(days);
    bindWidgetTaskToggle(row, k, t);
    main.appendChild(title);
    main.appendChild(meta);
    row.appendChild(cb);
    row.appendChild(main);
    row.appendChild(badge);
    list.appendChild(row);
  });
  wrap.appendChild(list);
}

function renderMobileDeadlineCards(wrap, tasks, today) {
  const daysBetween = (a, b) => Math.round((a - b) / 86400000);
  const fmtShort = d => d.toLocaleDateString('ja-JP', {month:'numeric', day:'numeric', weekday:'short'});
  const groups = [
    { key: 'today', title: '今日見る', test: item => !item.done && item.daysLeft === 0 },
    { key: 'overdue', title: '期限切れ', test: item => !item.done && item.daysLeft < 0 },
    { key: 'soon', title: '3日以内', test: item => !item.done && item.daysLeft > 0 && item.daysLeft <= 3 },
    { key: 'week', title: '7日以内', test: item => !item.done && item.daysLeft > 3 && item.daysLeft <= 7 },
    { key: 'later', title: 'それ以降', test: item => !item.done && item.daysLeft > 7 },
    { key: 'done', title: '完了済み', test: item => item.done },
  ];
  const items = tasks.map(t => {
    const k = t.id || t.title + t.due;
    const done = isTaskDone(k);
    const dueDate = getTaskDueDateObject(t) || new Date(t.due + 'T00:00:00');
    const daysLeft = daysBetween(dueDate, today);
    const startDate = getTaskTimelineStartDate(t, today);
    const isProject = isMainTask(t);
    const hasSpan = !!(startDate && t.due && getLocalDateStr(startDate) !== t.due);
    return { t, k, done, dueDate, daysLeft, isProject, hasSpan, startDate };
  });
  const activeCount = items.filter(item => !item.done).length;
  const urgentCount = items.filter(item => !item.done && item.daysLeft <= 3).length;
  const shell = el('div', 'mobile-deadline');
  const head = el('div', 'mobile-deadline-head');
  head.innerHTML = `<span>${activeCount} TASKS</span><strong>${urgentCount ? `要確認 ${urgentCount}` : '直近なし'}</strong>`;
  shell.appendChild(head);

  const markerLeft = days => Math.max(4, Math.min(96, ((days + 7) / 21) * 100));
  const rangeLeft = (start, due) => Math.min(markerLeft(daysBetween(start, today)), markerLeft(daysBetween(due, today)));
  const rangeWidth = (start, due) => Math.max(8, Math.abs(markerLeft(daysBetween(due, today)) - markerLeft(daysBetween(start, today))));
  const statusText = item => item.done ? '完了'
    : item.daysLeft < 0 ? `${Math.abs(item.daysLeft)}日超過`
    : item.daysLeft === 0 ? '今日締切'
    : item.daysLeft === 1 ? '明日締切'
    : `あと${item.daysLeft}日`;
  const toneClass = item => item.done ? 'done'
    : item.daysLeft < 0 ? 'over'
    : item.daysLeft <= 3 ? 'hot'
    : item.daysLeft <= 7 ? 'warn'
    : 'future';

  groups.forEach(group => {
    const groupItems = items.filter(group.test);
    if (!groupItems.length) return;
    const section = el('section', 'mobile-deadline-section mobile-deadline-' + group.key);
    const title = el('div', 'mobile-deadline-section-title');
    title.innerHTML = `<span>${group.title}</span><em>${groupItems.length}</em>`;
    section.appendChild(title);
    groupItems.forEach(item => {
      const { t, k, done, dueDate, daysLeft, isProject, hasSpan, startDate } = item;
      const tone = toneClass(item);
      const card = el('div', 'mobile-task-card ' + tone + (done ? ' done' : '') + (isProject ? ' is-main' : ' is-simple'));
      bindTodoDetailOpen(card, t);
      const top = el('div', 'mobile-task-top');
      const cb = el('button', 'mobile-task-check' + (done ? ' done' : ''));
      cb.type = 'button';
      cb.setAttribute('aria-label', done ? `${t.title} を未完了に戻す` : `${t.title} を完了にする`);
      cb.addEventListener('click', e => {
        e.stopPropagation();
        toggleTaskDone(k, t);
      });
      const main = el('div', 'mobile-task-main');
      const titleText = el('div', 'mobile-task-title');
      titleText.textContent = t.title || 'Untitled';
      const meta = el('div', 'mobile-task-meta');
      [t.subject, priorityLabel(t.priority)].filter(Boolean).forEach(text => {
        const chip = el('span');
        chip.textContent = text;
        meta.appendChild(chip);
      });
      const typeChip = el('span');
      typeChip.textContent = isProject ? 'MAIN' : 'SIMPLE';
      meta.appendChild(typeChip);
      const progress = getSubtaskProgress(t);
      if (progress.total) {
        const chip = el('span');
        chip.textContent = `${progress.done}/${progress.total} 完了`;
        meta.appendChild(chip);
      }
      main.appendChild(titleText);
      main.appendChild(meta);
      const status = el('div', 'mobile-task-status ' + tone);
      status.textContent = statusText(item);
      top.appendChild(cb);
      top.appendChild(main);
      top.appendChild(status);

      const due = el('div', 'mobile-task-due');
      due.textContent = hasSpan && startDate
        ? `${fmtShort(startDate)} から ${fmtShort(dueDate)}`
        : `${fmtShort(dueDate)} 締切`;
      const subtaskDueItems = isProject ? getSubtasks(t)
        .map(ms => ({ ms, date: subtaskDateObject(ms) }))
        .filter(item => item.date)
        .sort((a, b) => {
          if (!!a.ms.completed !== !!b.ms.completed) return a.ms.completed ? 1 : -1;
          return a.date - b.date;
        }) : [];
      const nextSubtaskDue = subtaskDueItems[0];
      const subtaskDue = nextSubtaskDue ? el('div', 'mobile-subtask-due' + (nextSubtaskDue.ms.completed ? ' done' : '')) : null;
      if (subtaskDue) {
        const rest = Math.max(0, subtaskDueItems.length - 1);
        subtaskDue.textContent = `次の工程: ${nextSubtaskDue.ms.title || '工程'} / ${subtaskDueLabel(nextSubtaskDue.ms)}${rest ? ` / +${rest}` : ''}`;
      }

      const timeline = el('div', 'mobile-mini-timeline');
      const todayMark = el('span', 'mobile-mini-today');
      timeline.appendChild(todayMark);
      if (hasSpan && startDate) {
        const span = el('span', 'mobile-mini-span ' + tone);
        span.style.left = `${rangeLeft(startDate, dueDate)}%`;
        span.style.width = `${rangeWidth(startDate, dueDate)}%`;
        span.classList.add(isProject ? 'project' : 'attention');
        timeline.appendChild(span);
      } else {
        const line = el('span', 'mobile-mini-line ' + tone);
        const left = Math.min(markerLeft(0), markerLeft(daysLeft));
        const width = Math.max(8, Math.abs(markerLeft(daysLeft) - markerLeft(0)));
        line.style.left = `${left}%`;
        line.style.width = `${width}%`;
        timeline.appendChild(line);
      }
      const marker = el('span', 'mobile-mini-marker ' + tone);
      marker.style.left = `${markerLeft(daysLeft)}%`;
      timeline.appendChild(marker);

      card.appendChild(top);
      card.appendChild(due);
      if (subtaskDue) card.appendChild(subtaskDue);
      if (isProject) {
        const nextSteps = getSubtasks(t).filter(step => !step.completed).slice(0, 3);
        if (nextSteps.length) {
          const stepList = el('div', 'mobile-step-list');
          nextSteps.forEach(step => {
            const stepRow = el('div', 'mobile-step-row');
            const name = el('span');
            name.textContent = step.title || '工程';
            const date = el('em');
            date.textContent = step.dueDate ? subtaskDueLabel(step).replace('まで', '') : '日付なし';
            stepRow.appendChild(name);
            stepRow.appendChild(date);
            stepList.appendChild(stepRow);
          });
          card.appendChild(stepList);
        }
      }
      card.appendChild(timeline);
      section.appendChild(card);
    });
    shell.appendChild(section);
  });
  wrap.appendChild(shell);
}

function renderGantt(tasks) {
  const wrap = qs('#gantt-inner');
  wrap.innerHTML = '';
  const withDue = tasks.filter(t => t.due).sort((a,b) => {
    const aDone = isTaskDone(a.id || a.title + a.due);
    const bDone = isTaskDone(b.id || b.title + b.due);
    if (aDone !== bDone) return aDone ? 1 : -1;
    if (a.due !== b.due) return a.due < b.due ? -1 : 1;
    return priorityRank(a.priority) - priorityRank(b.priority);
  });
  if (withDue.length === 0) {
    wrap.innerHTML = '<div class="log-empty" style="padding:20px">締め切りのあるタスクがありません</div>';
    return;
  }

  const today = new Date(); today.setHours(0,0,0,0);
  if (window.matchMedia('(max-width: 600px)').matches) {
    renderMobileDeadlineCards(wrap, withDue, today);
    return;
  }
  const activeCount = withDue.filter(t => !isTaskDone(t.id || t.title + t.due)).length;
  const urgentCount = withDue.filter(t => {
    const done = isTaskDone(t.id || t.title + t.due);
    const dueDate = new Date(t.due + 'T00:00:00');
    const daysLeft = Math.round((dueDate - today) / 86400000);
    return !done && daysLeft <= 3;
  }).length;

  const summary = el('div', 'gantt-summary');
  const left = el('div');
  left.textContent = `${withDue.length} DEADLINE TIMELINE`;
  const right = el('div');
  right.textContent = urgentCount ? `URGENT ${urgentCount}` : `ACTIVE ${activeCount}`;
  summary.appendChild(left);
  summary.appendChild(right);
  wrap.appendChild(summary);

  const legend = el('div', 'gantt-legend');
  legend.innerHTML = `
    <span class="gantt-legend-item"><span class="gantt-legend-bar gantt-legend-project"></span>タスク期間</span>
    <span class="gantt-legend-item"><span class="gantt-legend-subtask"><span></span></span>工程</span>
    <span class="gantt-legend-item"><span class="gantt-legend-line gantt-legend-hot"></span>3日以内</span>
    <span class="gantt-legend-item"><span class="gantt-legend-line gantt-legend-warn"></span>7日以内</span>
  `;
  wrap.appendChild(legend);

  const list = el('div', 'gantt-list');
  const daysBetween = (a, b) => Math.round((a - b) / 86400000);
  const addDays = (base, days) => {
    const d = new Date(base);
    d.setDate(base.getDate() + days);
    return d;
  };
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const fmtShort = d => d.toLocaleDateString('ja-JP', {month:'numeric', day:'numeric', weekday:'short'});
  const fmtTick = d => d.toLocaleDateString('ja-JP', {month:'numeric', day:'numeric'});
  const cellWidth = window.matchMedia('(max-width: 600px)').matches ? 48 : 56;
  const maxPastDays = Math.min(10, Math.max(2, ...withDue.map(t => {
    const done = isTaskDone(t.id || t.title + t.due);
    if (done) return 0;
    const dueDate = new Date(t.due + 'T00:00:00');
    return Math.max(0, -daysBetween(dueDate, today) + 1);
  })));
  const maxFutureDays = Math.max(14, ...withDue.map(t => {
    const dueDate = new Date(t.due + 'T00:00:00');
    return daysBetween(dueDate, today);
  }).filter(n => n > 0));
  const windowStart = addDays(today, -maxPastDays);
  const windowEnd = addDays(today, Math.min(30, Math.max(14, maxFutureDays + 2)));
  const windowTotal = Math.max(1, daysBetween(windowEnd, windowStart));
  list.style.setProperty('--gantt-timeline-width', `${(windowTotal + 1) * cellWidth}px`);
  const percentForDate = date => {
    const n = clamp(daysBetween(date, windowStart), 0, windowTotal);
    return (n / windowTotal) * 100;
  };
  const widthPercentForRange = (start, end) => {
    const startPct = percentForDate(start);
    const endPct = percentForDate(end);
    return {
      left: Math.min(startPct, endPct),
      width: Math.max(1.4, Math.abs(endPct - startPct))
    };
  };
  const todayLeft = percentForDate(today);
  const ticks = Array.from({length: windowTotal + 1}, (_, i) => {
    const date = addDays(windowStart, i);
    const isToday = getLocalDateStr(date) === getLocalDateStr(today);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isMonth = date.getDate() === 1;
    const percent = (i / windowTotal) * 100;
    return {date, left: percent, center: percent, today: isToday, weekend: isWeekend, month: isMonth};
  });

  const scale = el('div', 'gantt-scale');
  const scaleTitle = el('div', 'gantt-scale-title');
  scaleTitle.textContent = 'TASK / CATEGORY / PRIORITY';
  const tickRail = el('div', 'gantt-ticks');
  ticks.forEach(tick => {
    const line = el('div', 'gantt-tick' + (tick.today ? ' today' : '') + (tick.weekend ? ' weekend' : '') + (tick.month ? ' month' : ''));
    line.style.left = `${tick.left}%`;
    tickRail.appendChild(line);
    const showLabel = tick.today || tick.month || tick.date.getDay() === 1 || tick.date.getTime() === windowStart.getTime() || tick.date.getTime() === windowEnd.getTime();
    if (showLabel) {
      const label = el('div', 'gantt-tick-label' + (tick.today ? ' today' : ''));
      label.style.left = `${tick.center}%`;
      label.textContent = tick.today ? '今日' : fmtTick(tick.date);
      tickRail.appendChild(label);
    }
    if (tick.month) {
      const month = el('div', 'gantt-month-label');
      month.style.left = `${tick.left}%`;
      month.textContent = tick.date.toLocaleDateString('ja-JP', {year:'numeric', month:'numeric'});
      tickRail.appendChild(month);
    }
  });
  if (!ticks.some(tick => tick.today)) {
    const label = el('div', 'gantt-tick-label today');
    label.style.left = `${percentForDate(today)}%`;
    label.textContent = '今日';
    tickRail.appendChild(label);
  }
  const scaleEnd = el('div', 'gantt-scale-title');
  scaleEnd.textContent = 'DUE';
  scale.appendChild(scaleTitle);
  scale.appendChild(tickRail);
  scale.appendChild(scaleEnd);
  list.appendChild(scale);

  withDue.forEach(t => {
    const k = t.id || t.title + t.due;
    const done = isTaskDone(k);
    const dueDate = new Date(t.due + 'T00:00:00');
    const daysLeft = daysBetween(dueDate, today);
    const over = daysLeft < 0 && !done;
    const relation = done ? 'is-done' : over ? 'is-overdue' : daysLeft === 0 ? 'is-today' : 'is-future';
    const isProject = isMainTask(t);
    const startDate = getTaskTimelineStartDate(t, today);
    const range = startDate ? widthPercentForRange(startDate, dueDate) : null;
    const dueLeft = percentForDate(dueDate);

    const tone = done ? 'done' : daysLeft <= 3 ? 'hot' : daysLeft <= 7 ? 'warn' : '';
    const badgeText = done ? '完了'
      : over ? `${Math.abs(daysLeft)}日超過`
      : daysLeft === 0 ? '今日締切'
      : daysLeft === 1 ? '明日締切'
      : `あと${daysLeft}日`;

    const row = el('div', 'gantt-row2' + (done ? ' done' : '') + ' ' + relation + (isProject ? ' type-main' : ' type-simple'));
    bindTodoDetailOpen(row, t);

    const task = el('div', 'gantt-task');
    const cb = el('div', 'cb' + (done ? ' done' : ''));
    cb.addEventListener('click', e => {
      e.stopPropagation();
      toggleTaskDone(k, t);
    });
    const text = el('div');
    text.style.minWidth = '0';
    const titleLine = el('div', 'gantt-title-line');
    const nt = el('div', 'gantt-title' + (done ? ' done' : ''));
    nt.textContent = t.title;
    titleLine.appendChild(nt);
    const meta = el('div', 'gantt-meta');
    const metaParts = [];
    if (t.subject) metaParts.push(t.subject);
    metaParts.push(priorityLabel(t.priority));
    metaParts.push(isProject ? 'MAIN' : 'SIMPLE');
    metaParts.push(startDate ? `${fmtShort(startDate)} - ${fmtShort(dueDate)}` : fmtShort(dueDate));
    meta.textContent = metaParts.join(' / ');
    appendSubtaskProgress(meta, t, 'gantt-subtask-progress');
    text.appendChild(titleLine);
    text.appendChild(meta);
    task.appendChild(cb);
    task.appendChild(text);

    const rail = el('div', 'gantt-rail');
    rail.setAttribute('role', 'img');
    ticks.forEach(tick => {
      if (tick.weekend) {
        const weekend = el('div', 'gantt-grid-line weekend');
        weekend.style.left = `${tick.left}%`;
        rail.appendChild(weekend);
      }
      const grid = el('div', 'gantt-grid-line' + (tick.month ? ' month' : ''));
      grid.style.left = `${tick.left}%`;
      rail.appendChild(grid);
    });
    const todayBand = el('div', 'gantt-today-band');
    todayBand.style.left = `${todayLeft}%`;
    rail.appendChild(todayBand);

    const parentStartForSteps = startDate || dueDate;
    const subtaskCandidates = isProject ? getSubtasks(t)
      .map(ms => ({ ms, start: subtaskStartDateObject(ms), date: subtaskDateObject(ms) }))
      .filter(item => item.date)
      .sort((a, b) => a.date - b.date) : [];
    const isOutsideParentRange = item => {
      if (!parentStartForSteps || !item.date) return false;
      const stepStart = item.start || item.date;
      return stepStart < parentStartForSteps || item.date < parentStartForSteps || item.date > dueDate;
    };
    const outsideParentSegments = subtaskCandidates.filter(isOutsideParentRange);
    const subtaskSegments = subtaskCandidates
      .filter(item => !isOutsideParentRange(item) && item.date >= windowStart && item.date <= windowEnd);
    const activeStepIndex = subtaskSegments.findIndex(item =>
      !item.ms.completed
      && item.start
      && item.start <= today
      && item.date >= today
    );
    const nextStepIndex = activeStepIndex >= 0
      ? activeStepIndex
      : subtaskSegments.findIndex(item => !item.ms.completed && item.date >= today);
    const visibleStepIndexes = [];
    [activeStepIndex, nextStepIndex].forEach(index => {
      if (index >= 0 && !visibleStepIndexes.includes(index)) visibleStepIndexes.push(index);
    });
    subtaskSegments.forEach((_, index) => {
      if (visibleStepIndexes.length >= 5) return;
      if (!visibleStepIndexes.includes(index)) visibleStepIndexes.push(index);
    });
    visibleStepIndexes.sort((a, b) => a - b);
    const visibleStepIndexSet = new Set(visibleStepIndexes);
    const hiddenSubtaskMarkerCount = Math.max(0, subtaskSegments.length - visibleStepIndexes.length);
    const activeStep = activeStepIndex >= 0 ? subtaskSegments[activeStepIndex]?.ms : null;
    const nextStep = nextStepIndex >= 0 ? subtaskSegments[nextStepIndex]?.ms : null;
    const stepSummary = isProject
      ? activeStep
        ? `進行中工程 ${activeStep.title || '工程'}、${subtaskDueLabel(activeStep)}。`
        : nextStep
          ? `次の工程 ${nextStep.title || '工程'}、${subtaskDueLabel(nextStep)}。`
          : subtaskSegments.length
            ? `工程 ${subtaskSegments.length}件。`
            : outsideParentSegments.length
              ? `親期間外の工程 ${outsideParentSegments.length}件。`
            : '工程なし。'
      : '';
    rail.setAttribute('aria-label', isProject
      ? `${t.title} の作業期間。開始 ${startDate ? fmtShort(startDate) : '未設定'}、最終締切 ${fmtShort(dueDate)}。${badgeText}。${stepSummary}`
      : `${t.title} の注意期間。開始 ${startDate ? fmtShort(startDate) : '今日'}、締切 ${fmtShort(dueDate)}。${badgeText}。`
    );
    visibleStepIndexes.forEach((sourceIndex, visibleIndex) => {
      const item = subtaskSegments[sourceIndex];
      const { ms, start, date } = item;
      const lateParent = compareTaskAndSubtaskDue(t, ms) > 0;
      const isPast = date < today && !ms.completed;
      const isCurrentStep = sourceIndex === activeStepIndex;
      const isNextStep = !isCurrentStep && sourceIndex === nextStepIndex;
      const duePct = percentForDate(date);
      const nearParent = Math.abs(duePct - dueLeft) < 2.2;
      const nearToday = Math.abs(duePct - todayLeft) < 2.2;
      const hasStepRange = start && start <= date && getLocalDateStr(start) !== getLocalDateStr(date);
      const labelText = ms.title || '工程';
      const labelShort = labelText.length > 7 ? labelText.slice(0, 6) + '…' : labelText;
      const rightEdge = duePct > 82;
      if (hasStepRange) {
        const stepRange = widthPercentForRange(start, date);
        const segmentRightEdge = stepRange.left + stepRange.width > 88;
        const segment = el('div', 'gantt-step-segment'
          + ' range'
          + (ms.completed ? ' done' : '')
          + (lateParent ? ' late-parent' : '')
          + (isPast ? ' over' : '')
          + (isCurrentStep ? ' current-step' : '')
          + (isNextStep ? ' next-step' : '')
          + (segmentRightEdge ? ' right-edge' : '')
        );
        segment.style.left = `${stepRange.left}%`;
        segment.style.width = `${stepRange.width}%`;
        segment.title = `${isCurrentStep ? '進行中: ' : isNextStep ? '次の工程: ' : ''}${labelText} / ${subtaskDueLabel(ms)} / ${ms.completed ? '完了' : '未完了'}`;
        segment.setAttribute('aria-label', segment.title);
        if (stepRange.width >= 10 && labelText.length <= 7) {
          const stepLabel = el('span', 'gantt-step-label');
          stepLabel.textContent = labelShort;
          segment.appendChild(stepLabel);
        }
        rail.appendChild(segment);
      } else {
        const shortWidth = Math.max(2.8, Math.min(5.2, 86 / Math.max(320, (windowTotal + 1) * cellWidth) * 100));
        const shortLeft = clamp(duePct - (shortWidth / 2), 0, 100 - shortWidth);
        const segment = el('div', 'gantt-step-segment milestone'
          + (ms.completed ? ' done' : '')
          + (lateParent ? ' late-parent' : '')
          + (isPast ? ' over' : '')
          + (isCurrentStep ? ' current-step' : '')
          + (isNextStep ? ' next-step' : '')
          + (nearParent ? ' near-parent' : '')
          + (nearToday ? ' near-today' : '')
          + (rightEdge ? ' right-edge' : '')
        );
        segment.style.left = `${shortLeft}%`;
        segment.style.width = `${shortWidth}%`;
        const statusLabel = ms.completed ? '完了' : '未完了';
        segment.title = `${isCurrentStep ? '進行中: ' : isNextStep ? '次の工程: ' : ''}${labelText} / ${subtaskDueLabel(ms)} / ${statusLabel}`;
        segment.setAttribute('aria-label', segment.title);
        rail.appendChild(segment);
      }
    });
    if (outsideParentSegments.length > 0) {
      const warning = el('div', 'gantt-step-warning' + (tone ? ' ' + tone : ''));
      warning.style.left = `${clamp(dueLeft + 1.4, 2, 98)}%`;
      const warningTitles = outsideParentSegments
        .slice(0, 4)
        .map(item => `${item.ms.title || '工程'} / ${subtaskDueLabel(item.ms)}`)
        .join(' / ');
      warning.title = `親期間外の工程 ${outsideParentSegments.length}件: ${warningTitles}`;
      warning.setAttribute('aria-label', warning.title);
      rail.appendChild(warning);
    }
    if (hiddenSubtaskMarkerCount > 0) {
      const more = el('div', 'gantt-subtask-more');
      more.textContent = `+${hiddenSubtaskMarkerCount}`;
      const hiddenTitles = subtaskSegments
        .filter((_, index) => !visibleStepIndexSet.has(index))
        .slice(0, 4)
        .map(item => item.ms.title || '工程')
        .join(' / ');
      more.title = hiddenTitles ? `ほかの工程: ${hiddenTitles}` : 'ほかのサブタスク期限があります';
      rail.appendChild(more);
    }
    if (range) {
      const fill = el('div', 'gantt-fill' + (isProject ? ' project' : ' attention') + (tone ? ' ' + tone : ''));
      fill.style.left = `${range.left}%`;
      fill.style.width = `${range.width}%`;
      fill.title = isProject
        ? `作業期間: ${fmtShort(startDate)} から ${fmtShort(dueDate)}`
        : `注意期間: ${fmtShort(startDate)} から ${fmtShort(dueDate)}`;
      rail.appendChild(fill);
      if (isProject) {
        const startMark = el('div', 'gantt-range-start' + (tone ? ' ' + tone : ''));
        startMark.style.left = `${percentForDate(startDate)}%`;
        startMark.title = `開始: ${fmtShort(startDate)}`;
        rail.appendChild(startMark);
      }
      const dot = el('div', 'gantt-dot' + (tone ? ' ' + tone : '') + ' ' + relation);
      dot.classList.add(isProject ? 'project-deadline' : 'quick-deadline');
      dot.style.left = `${dueLeft}%`;
      dot.title = `終了/締切: ${fmtShort(dueDate)}`;
      rail.appendChild(dot);
    } else {
      const tick = el('div', 'gantt-deadline-tick' + (tone ? ' ' + tone : '') + ' ' + relation);
      tick.style.left = `${dueLeft}%`;
      tick.title = `締切: ${fmtShort(dueDate)}`;
      rail.appendChild(tick);
      const dot = el('div', 'gantt-dot' + (tone ? ' ' + tone : '') + ' ' + relation);
      dot.style.left = `${dueLeft}%`;
      dot.title = `締切: ${fmtShort(dueDate)}`;
      rail.appendChild(dot);
    }

    const badge = el('div', 'gantt-badge' + (tone ? ' ' + tone : ''));
    badge.textContent = badgeText;

    row.appendChild(task);
    row.appendChild(rail);
    row.appendChild(badge);
    list.appendChild(row);
  });

  wrap.appendChild(list);
}

// Todo フィルタ・ビュー切り替え
document.querySelectorAll('.todo-filter-btn[data-filter]').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.todo-filter-btn[data-filter]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    state.todoFilter = b.dataset.filter;
    renderTodo();
  });
});
document.querySelectorAll('.todo-filter-btn[data-period]').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.todo-filter-btn[data-period]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    state.todoPeriod = b.dataset.period;
    renderTodo();
  });
});
qs('#todo-view-list-btn').addEventListener('click', () => {
  state.todoView = 'list';
  qs('#todo-view-list-btn').classList.add('active');
  qs('#todo-view-gantt-btn').classList.remove('active');
  updateMainLayoutMode();
  renderTodo();
});
qs('#todo-view-gantt-btn').addEventListener('click', () => {
  state.todoView = 'gantt';
  qs('#todo-view-gantt-btn').classList.add('active');
  qs('#todo-view-list-btn').classList.remove('active');
  updateMainLayoutMode();
  renderTodo();
});

qs('#todo-detail-close')?.addEventListener('click', closeTodoDetail);
qs('#todo-detail-modal')?.addEventListener('click', e => {
  if (e.target === qs('#todo-detail-modal')) closeTodoDetail();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !qs('#todo-detail-modal')?.classList.contains('hidden')) closeTodoDetail();
});

setPriorityValue(qs('#todo-priority-input')?.value || 'normal');
qs('#todo-title-input')?.addEventListener('input', () => {
  qs('#todo-title-input').removeAttribute('aria-invalid');
  qs('#todo-form-msg')?.classList.contains('warn') && setTodoFormMessage('');
});

function setTodoDateType(type) {
  const nextType = ['deadline', 'range', 'none'].includes(type) ? type : 'deadline';
  state.todoDateType = nextType;
  document.querySelectorAll('[data-datetype]').forEach(b => b.classList.toggle('active', b.dataset.datetype === nextType));
  qs('#form-deadline-row')?.classList.toggle('hidden', nextType !== 'deadline');
  qs('#form-range-row')?.classList.toggle('hidden', nextType !== 'range');
  qs('#form-none-row')?.classList.toggle('hidden', nextType !== 'none');
}

function setTodoTaskType(type, options = {}) {
  const nextType = type === 'main' ? 'main' : 'simple';
  state.todoTaskType = nextType;
  document.querySelectorAll('[data-tasktype]').forEach(b => {
    const active = b.dataset.tasktype === nextType;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  const help = qs('#todo-task-type-help');
  if (help) {
    help.textContent = nextType === 'main'
      ? '開始日と最終締切を持つ制作・課題として追加します。作業ステップは作成後の詳細で追加できます。'
      : '軽い用事や単発の締切として追加します。必要になったら詳細からメインタスク化できます。';
  }
  if (nextType === 'main' && options.adjustDateType !== false && state.todoDateType !== 'range') {
    setTodoDateType('range');
  }
}

// タスク種別・日付タイプ切り替え
state.todoDateType = 'deadline';
setTodoTaskType('simple', { adjustDateType: false });
document.querySelectorAll('[data-tasktype]').forEach(b => {
  b.addEventListener('click', () => setTodoTaskType(b.dataset.tasktype));
});
document.querySelectorAll('[data-datetype]').forEach(b => {
  b.addEventListener('click', () => setTodoDateType(b.dataset.datetype));
});

// 手動タスク追加・編集（state.editingTaskIdがあれば編集モード）
qs('#todo-add-btn').addEventListener('click', () => {
  const title = qs('#todo-title-input').value.trim();
  if (!title) {
    const input = qs('#todo-title-input');
    input.setAttribute('aria-invalid', 'true');
    setTodoFormMessage('タスク名を入力してください。締め切りやカテゴリはあとからでも編集できます。', true);
    input.focus();
    return;
  }
  qs('#todo-title-input').removeAttribute('aria-invalid');

  if (state.todoDateType === 'deadline' && !qs('#todo-due-input').value) {
    const picker = qs('#pick-due-date');
    picker?.setAttribute('aria-invalid', 'true');
    setTodoFormMessage('締め切り日を選択してください。日付なしで追加する場合は「日時なし」を選んでください。', true);
    picker?.focus();
    return;
  }
  if (state.todoDateType === 'range') {
    const start = qs('#todo-start-input').value;
    const end = qs('#todo-end-input').value;
    if (!start) {
      const picker = qs('#pick-start-date');
      picker?.setAttribute('aria-invalid', 'true');
      setTodoFormMessage('期間タスクには開始日が必要です。', true);
      picker?.focus();
      return;
    }
    if (!end) {
      const picker = qs('#pick-end-date');
      picker?.setAttribute('aria-invalid', 'true');
      setTodoFormMessage('期間タスクには終了日が必要です。', true);
      picker?.focus();
      return;
    }
    if (end < start) {
      const picker = qs('#pick-end-date');
      picker?.setAttribute('aria-invalid', 'true');
      setTodoFormMessage('終了日は開始日以降にしてください。', true);
      picker?.focus();
      return;
    }
  }

  const manual = normalizeManualTasks(LS.get('manual_tasks'));
  const isEditing = !!state.editingTaskId;
  const existingTask = isEditing ? manual.find(x => x.id === state.editingTaskId) : null;
  const subject = qs('#todo-subject-input').value.trim();
  const preservedMilestones = existingTask?.milestones || existingTask?.subtasks || [];

  const task = {
    id: isEditing ? state.editingTaskId : 'manual_' + Date.now(),
    title,
    subject,
    category: subject,
    priority: qs('#todo-priority-input').value || 'normal',
    repeat: qs('#todo-repeat-input').value || 'none',
    description: qs('#todo-description-input')?.value.trim() || '',
    milestones: preservedMilestones,
    subtasks: preservedMilestones,
    _manual: true,
    dateType: state.todoDateType,
    taskType: state.todoTaskType === 'main' ? 'main' : 'simple',
    createdAt: existingTask?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (state.todoDateType === 'deadline') {
    task.due = qs('#todo-due-input').value || '';
    task.dueDate = task.due;
    const t = qs('#todo-due-time-input').value;
    if (t) task.dueTime = t;
  } else if (state.todoDateType === 'range') {
    task.start = qs('#todo-start-input').value || '';
    task.startDate = task.start;
    task.startTime = qs('#todo-start-time-input').value || '';
    task.due = qs('#todo-end-input').value || '';   // 終了日=締め切りとして扱う
    task.dueDate = task.due;
    task.dueTime = qs('#todo-end-time-input').value || '';
  }
  // dateType === 'none' は日付なし

  if (isEditing) {
    // 既存タスクを置き換え（完了状態は維持したいのでtasksDoneのキーも更新が必要な場合がある）
    const idx = manual.findIndex(x => x.id === state.editingTaskId);
    if (idx !== -1) {
      const oldKey = manual[idx].id || manual[idx].title + manual[idx].due;
      const newKey = task.id || task.title + task.due;
      // 完了状態・タイマーをキー変更に合わせて引き継ぐ
      if (oldKey !== newKey && state.tasksDone[oldKey] !== undefined) {
        state.tasksDone[newKey] = state.tasksDone[oldKey];
        delete state.tasksDone[oldKey];
        LS.set('tasks_done', state.tasksDone);
      }
      manual[idx] = task;
    } else {
      manual.push(task);
    }
  } else {
    manual.push(task);
  }
  saveManualTasks(manual);

  exitEditMode();
  renderTodo();
  setTodoFormMessage(isEditing ? `更新しました: ${task.title}` : `追加しました: ${task.title}`);
});

// 編集モード開始
function startEditTask(t) {
  state.editingTaskId = t.id;

  qs('#todo-title-input').value = t.title || '';
  qs('#todo-subject-input').value = t.subject || '';
  if (qs('#todo-description-input')) qs('#todo-description-input').value = t.description || '';
  setPriorityValue(t.priority || 'normal');
  qs('#todo-repeat-input').value = t.repeat || 'none';
  setTodoTaskType(normalizeTask(t).taskType, { adjustDateType: false });

  const dt = t.dateType || (t.due ? 'deadline' : 'none');
  setTodoDateType(dt);

  resetPickers();
  if (dt === 'deadline') {
    if (t.due) setPickerValue('pick-due-date', 'todo-due-input', t.due);
    if (t.dueTime) setPickerValue('pick-due-time', 'todo-due-time-input', t.dueTime);
  } else if (dt === 'range') {
    if (t.start) setPickerValue('pick-start-date', 'todo-start-input', t.start);
    if (t.startTime) setPickerValue('pick-start-time', 'todo-start-time-input', t.startTime);
    if (t.due) setPickerValue('pick-end-date', 'todo-end-input', t.due);
    if (t.dueTime) setPickerValue('pick-end-time', 'todo-end-time-input', t.dueTime);
  }

  qs('#todo-form-heading').textContent = 'タスクを編集';
  qs('#todo-add-btn').textContent = '保存';
  qs('#todo-cancel-edit-btn').classList.remove('hidden');
  qs('.todo-add-form').scrollIntoView({ behavior: 'smooth', block: 'start' });
  qs('#todo-title-input').focus();
}

// 編集ピッカー欄に値をセット（日付/時刻の表示テキストも更新）
function setPickerValue(triggerId, hiddenId, value) {
  const hidden = qs('#' + hiddenId);
  hidden.value = value;
  const trigger = qs('#' + triggerId);
  if (!trigger) return;
  const dateSpan = trigger.querySelector('.cdi-text');
  const timeSpan = trigger.querySelector('.cti-text');
  if (dateSpan) {
    const [y,m,d] = value.split('-').map(Number);
    dateSpan.textContent = `${y}/${m}/${d}`;
    dateSpan.classList.remove('placeholder');
  }
  if (timeSpan) {
    timeSpan.textContent = value;
    timeSpan.classList.remove('placeholder');
  }
}

// 編集モード終了（新規追加モードに戻す）
function exitEditMode() {
  state.editingTaskId = null;
  qs('#todo-title-input').value = '';
  qs('#todo-subject-input').value = '';
  if (qs('#todo-description-input')) qs('#todo-description-input').value = '';
  setPriorityValue('normal');
  qs('#todo-repeat-input').value = 'none';
  qs('#todo-due-input').value = '';
  qs('#todo-due-time-input').value = '';
  qs('#todo-start-input').value = '';
  qs('#todo-start-time-input').value = '';
  qs('#todo-end-input').value = '';
  qs('#todo-end-time-input').value = '';
  resetPickers();
  // デフォルト（締め切りモード）に戻す
  setTodoTaskType('simple', { adjustDateType: false });
  setTodoDateType('deadline');

  qs('#todo-form-heading').textContent = 'タスクを追加';
  qs('#todo-add-btn').textContent = '追加';
  qs('#todo-cancel-edit-btn').classList.add('hidden');
}

qs('#todo-cancel-edit-btn').addEventListener('click', () => {
  exitEditMode();
  renderTodo();
});

// GAS連携
qs('#todo-url-btn').addEventListener('click', () => {
  qs('#todo-url-panel').classList.toggle('hidden');
  if (!qs('#todo-url-panel').classList.contains('hidden')) qs('#todo-url-input').value = state.scriptUrl;
});
qs('#todo-url-cancel-btn').addEventListener('click', () => qs('#todo-url-panel').classList.add('hidden'));
qs('#todo-url-save-btn').addEventListener('click', () => {
  const url = qs('#todo-url-input').value.trim();
  saveScriptUrl(url);
  qs('#todo-url-panel').classList.add('hidden');
  syncTodoTasks(url);
});
qs('#todo-sync-btn').addEventListener('click', () => syncTodoTasks());

// クラウド同期ボタン: 手動タスクをSupabaseと明示的に同期し、結果を表示する
qs('#todo-cloud-sync-btn').addEventListener('click', async () => {
  const btn = qs('#todo-cloud-sync-btn');
  const msgWrap = qs('#todo-cloud-sync-msg-wrap');
  const msgEl = qs('#todo-cloud-sync-msg');
  btn.disabled = true;
  btn.textContent = '同期中...';
  msgWrap.classList.remove('hidden');
  msgEl.textContent = '確認しています...';

  try {
    // settingsテーブルへの書き込み・読み込みが動くかテスト
    const testKey = '_sync_test_' + Date.now();
    const writeOk = await SB.setSetting(testKey, { ping: true });
    if (!writeOk) {
      msgEl.textContent = 'クラウド保存を確認できませんでした。端末内のデータは残っています。Supabaseのsettings保存設定を確認してください。';
      setSyncHealth({ lastCloudCheckAt: new Date().toISOString(), lastCloudCheckOk: false });
      btn.disabled = false;
      btn.textContent = 'クラウド同期';
      return;
    }
    const readBack = await SB.getSetting(testKey);
    if (!readBack || !readBack.ping) {
      msgEl.textContent = 'クラウドへ送信できましたが、読み戻し確認ができませんでした。別端末同期の設定を確認してください。';
      setSyncHealth({ lastCloudCheckAt: new Date().toISOString(), lastCloudCheckOk: false });
      btn.disabled = false;
      btn.textContent = 'クラウド同期';
      return;
    }

    // 実際の同期を実行
    await syncSettingsFromSupabase();
    const manual = LS.get('manual_tasks') || [];
    const gasCount = state.tasks?.length || 0;
    msgEl.textContent = `同期できました。手動タスク: ${manual.length}件 / Googleタスク: ${gasCount}件`;
    setSyncHealth({ lastCloudCheckAt: new Date().toISOString(), lastCloudCheckOk: true });
    renderTodo();
  } catch(e) {
    msgEl.textContent = '同期確認に失敗しました。端末内のデータは残っています。時間を置いてもう一度試してください。';
    setSyncHealth({ lastCloudCheckAt: new Date().toISOString(), lastCloudCheckOk: false });
  }

  btn.disabled = false;
  btn.textContent = 'クラウド同期';
});

qs('#cloud-safety-btn')?.addEventListener('click', async () => {
  const btn = qs('#cloud-safety-btn');
  const msgWrap = qs('#todo-cloud-sync-msg-wrap');
  const msgEl = qs('#todo-cloud-sync-msg');
  msgWrap.classList.remove('hidden');
  btn.disabled = true;
  btn.textContent = '確認中';
  try {
    const key = '_safety_check_' + Date.now();
    const settingWrite = await SB.setSetting(key, { ok: true, checkedAt: new Date().toISOString() });
    const settingRead = settingWrite ? await SB.getSetting(key) : null;
    const logs = await SB.fetchAll();
    const storage = await SB.listPhotoKeys();
    const ok = settingWrite && settingRead?.ok === true && Array.isArray(logs) && Array.isArray(storage);
    setSyncHealth({ lastCloudCheckAt: new Date().toISOString(), lastCloudCheckOk: ok });
    msgEl.textContent = ok
      ? `クラウド確認OK。設定・ログ・写真置き場を確認できました。`
      : `クラウド確認で一部を確認できませんでした。保存は端末に残りますが、別端末同期は設定確認が必要です。`;
  } catch(e) {
    setSyncHealth({ lastCloudCheckAt: new Date().toISOString(), lastCloudCheckOk: false });
    msgEl.textContent = 'クラウド確認に失敗しました。ネットワークかクラウド設定を確認してください。';
  } finally {
    btn.disabled = false;
    btn.textContent = 'クラウド確認';
  }
});

async function syncTodoTasks(url) {
  const target = url || state.scriptUrl;
  if (!target) { qs('#todo-error-msg').textContent='GAS連携URLを設定してください'; qs('#todo-error').classList.remove('hidden'); return; }
  qs('#todo-sync-btn').textContent = '...';
  qs('#todo-sync-btn').disabled = true;
  qs('#todo-error').classList.add('hidden');
  try {
    const res = await fetch(target, {redirect:'follow'});
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { throw new Error('JSON応答ではありません'); }
    state.tasks = filterVisibleExternalTasks(Array.isArray(data) ? data : (data.tasks || [])).map(applyTaskUserOverride);
    const cachePayload = {tasks: state.tasks, fetchedAt: new Date().toISOString()};
    LS.set('tasks_cache', cachePayload);
    // ★ GAS由来のタスクもSupabaseにキャッシュ保存（他端末がSYNCしなくても見えるように）
    SB.setSetting('gas_tasks_cache', cachePayload);
    renderTodo();
    setSyncHealth({ lastTodoSyncAt: new Date().toISOString(), lastTodoSyncOk: true });
    if (LS.get('notif') === 'granted') scheduleTaskNotifications();
  } catch(e) {
    qs('#todo-error-msg').textContent = 'Googleタスクの取得に失敗しました。GAS URLと公開設定を確認してください。';
    setSyncHealth({ lastTodoSyncAt: new Date().toISOString(), lastTodoSyncOk: false });
    qs('#todo-error').classList.remove('hidden');
  }
  qs('#todo-sync-btn').textContent = 'SYNC';
  qs('#todo-sync-btn').disabled = false;
}

// ══════════════════════════════════════════════
// ── ポモドーロタイマー ─────────────────────────
// ══════════════════════════════════════════════
const TIMER_MODES = {
  pomodoro: { work: 25, break: 5, label: 'ポモドーロ' },
  short:    { work: 0,  break: 5, label: '短休憩' },
  long:     { work: 0,  break: 15, label: '長休憩' },
  custom:   { work: 25, break: 5, label: 'カスタム' },
};

const timerState = {
  mode: 'pomodoro',
  phase: 'work',   // 'work' | 'break'
  secondsLeft: 25 * 60,
  totalSeconds: 25 * 60,
  running: false,
  interval: null,
  set: 1,
  maxSets: 4,
  log: LS.get('timer_log_today') || [],
};

function timerWorkSecs() {
  if (timerState.mode === 'custom') return parseInt(qs('#custom-work-min').value || 25) * 60;
  return TIMER_MODES[timerState.mode].work * 60;
}
function timerBreakSecs() {
  if (timerState.mode === 'custom') return parseInt(qs('#custom-break-min').value || 5) * 60;
  return TIMER_MODES[timerState.mode].break * 60;
}

function updateTimerDisplay() {
  const m = String(Math.floor(timerState.secondsLeft / 60)).padStart(2, '0');
  const s = String(timerState.secondsLeft % 60).padStart(2, '0');
  qs('#timer-display').textContent = m + ':' + s;
  const pct = timerState.secondsLeft / timerState.totalSeconds * 100;
  qs('#timer-progress-fill').style.width = pct + '%';
  const isBreak = timerState.phase === 'break';
  qs('#timer-display').className = 'timer-display' + (timerState.running ? (isBreak ? ' break' : ' running') : '');
  qs('#timer-session-label').textContent = isBreak ? '休憩中' : '集中セッション';
  qs('#timer-sets').textContent = `セット ${timerState.set} / ${timerState.maxSets}`;
  qs('#timer-start-btn').textContent = timerState.running ? 'PAUSE' : 'START';
}

function timerTick() {
  timerState.secondsLeft--;
  if (timerState.secondsLeft <= 0) {
    clearInterval(timerState.interval);
    timerState.running = false;
    // 通知
    showNotification(timerState.phase === 'work' ? '集中完了' : '休憩終了', {
      body: timerState.phase === 'work' ? '休憩しよう' : '次のセッションへ',
      tag: 'photo-tracker-timer',
      renotify: true,
    });
    // ログ記録（集中フェーズ完了時）
    if (timerState.phase === 'work') {
      const entry = { time: new Date().toLocaleTimeString('ja-JP',{hour:'2-digit',minute:'2-digit'}), mins: Math.round(timerState.totalSeconds/60), set: timerState.set };
      timerState.log.push(entry);
      LS.set('timer_log_today', timerState.log);
      renderTimerLog();
      // 次フェーズへ
      timerState.phase = 'break';
      timerState.totalSeconds = timerBreakSecs();
      timerState.secondsLeft = timerState.totalSeconds;
    } else {
      timerState.set = timerState.set < timerState.maxSets ? timerState.set + 1 : 1;
      timerState.phase = 'work';
      timerState.totalSeconds = timerWorkSecs();
      timerState.secondsLeft = timerState.totalSeconds;
    }
    updateTimerDisplay();
    return;
  }
  updateTimerDisplay();
}

qs('#timer-start-btn').addEventListener('click', () => {
  if (timerState.running) {
    clearInterval(timerState.interval);
    timerState.running = false;
  } else {
    if ('Notification' in window && Notification.permission === 'default' && LS.get('notif') !== 'denied') {
      requestNotifPermission();
    } else if ('Notification' in window && Notification.permission !== 'granted') {
      qs('#notif-banner').classList.remove('hidden');
    }
    timerState.running = true;
    timerState.interval = setInterval(timerTick, 1000);
  }
  updateTimerDisplay();
});

qs('#timer-reset-btn').addEventListener('click', () => {
  clearInterval(timerState.interval);
  timerState.running = false;
  timerState.phase = 'work';
  timerState.set = 1;
  timerState.totalSeconds = timerWorkSecs();
  timerState.secondsLeft = timerState.totalSeconds;
  updateTimerDisplay();
});

document.querySelectorAll('.timer-mode-btn').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.timer-mode-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    clearInterval(timerState.interval);
    timerState.running = false;
    timerState.mode = b.dataset.mode;
    timerState.phase = 'work';
    timerState.set = 1;
    qs('#timer-custom-row').classList.toggle('hidden', timerState.mode !== 'custom');
    if (timerState.mode === 'short' || timerState.mode === 'long') {
      timerState.phase = 'break';
      timerState.totalSeconds = timerBreakSecs();
    } else {
      timerState.totalSeconds = timerWorkSecs();
    }
    timerState.secondsLeft = timerState.totalSeconds;
    updateTimerDisplay();
  });
});

['#custom-work-min','#custom-break-min'].forEach(id => {
  qs(id).addEventListener('change', () => {
    clearInterval(timerState.interval);
    timerState.running = false;
    timerState.totalSeconds = timerState.phase === 'work' ? timerWorkSecs() : timerBreakSecs();
    timerState.secondsLeft = timerState.totalSeconds;
    updateTimerDisplay();
  });
});

function renderTimerLog() {
  const list = qs('#timer-log-list');
  if (timerState.log.length === 0) { list.innerHTML = '<div class="timer-log-empty">まだ記録がありません</div>'; return; }
  list.innerHTML = '';
  [...timerState.log].reverse().slice(0, 10).forEach(e => {
    const row = el('div', 'timer-log-entry');
    row.innerHTML = `<span>${e.time}</span><span style="color:var(--fg3)">${e.mins}分 集中</span><span>セット${e.set}</span>`;
    list.appendChild(row);
  });
}
updateTimerDisplay();
renderTimerLog();

// ══════════════════════════════════════════════
// ── クリップボード ────────────────────────────
// ══════════════════════════════════════════════
state.clipTagFilter = 'all';

function getClips() { return LS.get('clips') || []; }
function getDeletedClipIds() { return LS.get('clips_deleted') || []; }
function normalizeClip(c) {
  return {
    id: c.id || 'clip_' + Date.now() + '_' + Math.random().toString(36).slice(2),
    note: c.note || '',
    url: c.url || '',
    tags: Array.isArray(c.tags) ? c.tags : [],
    createdAt: c.createdAt || Date.now(),
    updatedAt: c.updatedAt || c.createdAt || Date.now(),
  };
}
function saveClips(clips, syncRemote = true) {
  const normalized = clips.map(normalizeClip);
  LS.set('clips', normalized);
  if (syncRemote) mirrorClipsToSupabase(normalized);
}
async function mirrorClipsToSupabase(clips = getClips()) {
  await SB.setSetting('clips', clips.map(normalizeClip));
  await SB.setSetting('clips_deleted', getDeletedClipIds());
}
async function syncClipsFromSupabase() {
  const [remoteClips, remoteDeleted] = await Promise.all([
    SB.getSetting('clips'),
    SB.getSetting('clips_deleted')
  ]);
  const localClips = getClips().map(normalizeClip);
  const deletedIds = new Set([...(Array.isArray(remoteDeleted) ? remoteDeleted : []), ...getDeletedClipIds()]);
  const byId = new Map();

  const addClip = c => {
    const clip = normalizeClip(c);
    if (deletedIds.has(clip.id)) return;
    const existing = byId.get(clip.id);
    if (!existing || (clip.updatedAt || 0) > (existing.updatedAt || 0)) byId.set(clip.id, clip);
  };
  if (Array.isArray(remoteClips)) remoteClips.forEach(addClip);
  localClips.forEach(addClip);

  const merged = [...byId.values()].sort((a, b) => b.createdAt - a.createdAt);
  const deleted = [...deletedIds];
  const remoteNeedsUpdate = !Array.isArray(remoteClips)
    || JSON.stringify((remoteClips || []).map(normalizeClip).sort((a,b) => b.createdAt - a.createdAt)) !== JSON.stringify(merged)
    || JSON.stringify((Array.isArray(remoteDeleted) ? remoteDeleted : []).sort()) !== JSON.stringify([...deleted].sort());
  const changed = JSON.stringify(localClips) !== JSON.stringify(merged)
    || JSON.stringify(getDeletedClipIds().sort()) !== JSON.stringify([...deleted].sort());

  LS.set('clips_deleted', deleted);
  LS.set('clips', merged);
  if (changed || remoteNeedsUpdate) {
    await mirrorClipsToSupabase(merged);
  }
  if (changed && state.tab === 'clip') renderClip();
}

function getAllClipTags() {
  const clips = getClips();
  const tags = new Set(['all']);
  clips.forEach(c => (c.tags||[]).forEach(t => tags.add(t)));
  return [...tags];
}

function renderClip() {
  const clips = getClips();
  const q = (qs('#clip-search').value || '').toLowerCase();
  const tagF = state.clipTagFilter;
  const filtered = clips.filter(c => {
    const matchTag = tagF === 'all' || (c.tags||[]).includes(tagF);
    const matchQ = !q || c.note.toLowerCase().includes(q) || (c.url||'').toLowerCase().includes(q) || (c.tags||[]).join(' ').toLowerCase().includes(q);
    return matchTag && matchQ;
  }).sort((a,b) => b.createdAt - a.createdAt);

  qs('#clip-count').textContent = clips.length + ' ITEMS';

  // タグフィルタ
  const tagWrap = qs('#clip-tag-filter');
  tagWrap.innerHTML = '';
  getAllClipTags().forEach(tag => {
    const b = el('button', 'clip-tag-btn' + (state.clipTagFilter === tag ? ' active' : ''));
    b.textContent = tag === 'all' ? 'すべて' : tag;
    b.addEventListener('click', () => { state.clipTagFilter = tag; renderClip(); });
    tagWrap.appendChild(b);
  });

  const list = qs('#clip-list');
  list.innerHTML = '';
  if (filtered.length === 0) {
    list.innerHTML = '<div class="clip-empty">クリップがありません</div>';
    return;
  }
  filtered.forEach(c => {
    const item = el('div', 'clip-item');
    if (c.url) {
      const urlDiv = el('div', 'clip-item-url');
      const a = el('a'); a.href = c.url; a.target = '_blank'; a.rel = 'noopener'; a.textContent = c.url;
      urlDiv.appendChild(a); item.appendChild(urlDiv);
    }
    if (c.note) { const note = el('div', 'clip-item-note'); note.textContent = c.note; item.appendChild(note); }
    if (c.tags && c.tags.length > 0) {
      const tagsDiv = el('div', 'clip-item-tags');
      c.tags.forEach(t => { const tag = el('span', 'tag'); tag.textContent = t; tagsDiv.appendChild(tag); });
      item.appendChild(tagsDiv);
    }
    const meta = el('div', 'clip-item-meta');
    const date = el('div', 'clip-item-date');
    date.textContent = new Date(c.createdAt).toLocaleDateString('ja-JP',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'});
    const del = el('button', 'clip-del-btn'); del.textContent = '削除';
    del.addEventListener('click', () => {
      const deletedIds = getDeletedClipIds();
      if (!deletedIds.includes(c.id)) LS.set('clips_deleted', [...deletedIds, c.id]);
      const clips2 = getClips().filter(x => x.id !== c.id);
      saveClips(clips2); renderClip();
    });
    meta.appendChild(date); meta.appendChild(del);
    item.appendChild(meta);
    list.appendChild(item);
  });
}

qs('#clip-add-btn').addEventListener('click', () => {
  const note = qs('#clip-note-input').value.trim();
  if (!note) return;
  const rawTags = qs('#clip-tags-input').value.trim();
  const tags = rawTags ? rawTags.split(',').map(t=>t.trim()).filter(Boolean) : [];
  const clips = getClips();
  const now = Date.now();
  clips.push({ id: 'clip_' + now, note, url: qs('#clip-url-input').value.trim(), tags, createdAt: now, updatedAt: now });
  saveClips(clips);
  qs('#clip-note-input').value = '';
  qs('#clip-url-input').value = '';
  qs('#clip-tags-input').value = '';
  renderClip();
});

qs('#clip-search').addEventListener('input', renderClip);

// ── レンズ ─────────────────────────────────
function renderLenses() {
  const wrap = qs('#lens-wrap');
  wrap.innerHTML = '';
  LENSES.forEach(l => {
    const b = el('button', 'lens-btn' + (state.lens === l ? ' active' : ''));
    b.textContent = l;
    b.addEventListener('click', () => { state.lens = l; renderLenses(); persistTodayDraft(true); });
    wrap.appendChild(b);
  });
}
renderLenses();

// ── 写真アップロード ──────────────────────────
async function handlePhotoFile(file) {
  if (!file) return;
  const blob = new Blob([await file.arrayBuffer()], {type: file.type || 'image/jpeg'});
  await IDB.set('main_' + state.today, blob);
  if (state.photoObjUrl) URL.revokeObjectURL(state.photoObjUrl);
  state.photoObjUrl = URL.createObjectURL(blob);
  const info = await inferCaptureInfoFromBlob(blob);
  if (info?.lens && (!state.lens || state.lens === LENSES[0])) {
    state.lens = info.lens;
    renderLenses();
  }
  if (info?.device) state.device = info.device;
  renderPhotoZone();
  persistTodayDraft(true);
}

function renderPhotoZone() {
  const drop = qs('#photo-drop');
  if (state.photoObjUrl) {
    drop.innerHTML = '';
    drop.style.height = 'auto';
    const wrap = el('div', 'photo-wrap');
    const img = el('img'); img.src = state.photoObjUrl;
    const btn = el('button', 'del-btn'); btn.textContent = '削除';
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (state.photoObjUrl) URL.revokeObjectURL(state.photoObjUrl);
      state.photoObjUrl = null;
      drop.style.height = '160px';
      renderPhotoZone();
      persistTodayDraft(true);
    });
    wrap.appendChild(img); wrap.appendChild(btn);
    drop.appendChild(wrap);
    drop.onclick = null;
  } else {
    drop.innerHTML = '<span class="plus">+</span><span class="hint">写真をドロップ or クリック</span><span class="sub">原画質で保存</span>';
    drop.onclick = () => qs('#photo-input').click();
  }
}

qs('#photo-input').addEventListener('change', e => handlePhotoFile(e.target.files[0]));
qs('#photo-drop').addEventListener('dragover', e => e.preventDefault());
qs('#photo-drop').addEventListener('drop', e => { e.preventDefault(); handlePhotoFile(e.dataTransfer.files[0]); });
qs('#photo-drop').onclick = () => qs('#photo-input').click();

// ── プロ研究 ──────────────────────────────────
function getProMemosFromDOM() {
  return [0,1,2].map(i => { const e = document.getElementById('pro-memo-' + i); return e ? e.value : ''; });
}

function renderProGrid() {
  const domMemos = getProMemosFromDOM();
  const savedMemos = (LS.get('meta') || {})[state.today]?.proMemos || ['','',''];
  const proMemos = [0,1,2].map(i => domMemos[i] !== '' ? domMemos[i] : (savedMemos[i] || ''));
  const grid = qs('#pro-grid');
  grid.innerHTML = '';
  [0,1,2].forEach(i => {
    const slot = el('div', 'pro-slot');
    const drop = el('div', 'pro-drop');
    if (state.proObjUrls[i]) {
      const img = el('img'); img.src = state.proObjUrls[i];
      const btn = el('button', 'pro-del'); btn.textContent = '×';
      btn.addEventListener('click', async e => {
        e.stopPropagation();
        await IDB.del('pro' + i + '_' + state.today);
        if (state.proObjUrls[i]) URL.revokeObjectURL(state.proObjUrls[i]);
        state.proObjUrls[i] = null;
        renderProGrid();
        persistTodayDraft(true);
      });
      drop.appendChild(img); drop.appendChild(btn);
      drop.onclick = null;
    } else {
      drop.innerHTML = '<span style="font-size:14px;color:var(--border2)">+</span><span style="font-size:9px;color:var(--fg6);letter-spacing:.1em">' + (i+1) + '</span>';
      const inp = el('input'); inp.type='file'; inp.accept='image/*'; inp.style.display='none';
      inp.addEventListener('change', async e => {
        const file = e.target.files[0]; if (!file) return;
        const blob = new Blob([await file.arrayBuffer()], {type: file.type});
        await IDB.set('pro' + i + '_' + state.today, blob);
        if (state.proObjUrls[i]) URL.revokeObjectURL(state.proObjUrls[i]);
        state.proObjUrls[i] = URL.createObjectURL(blob);
        renderProGrid();
        persistTodayDraft(true);
      });
      drop.appendChild(inp);
      drop.addEventListener('dragover', e => e.preventDefault());
      drop.addEventListener('drop', async e => {
        e.preventDefault();
        const file = e.dataTransfer.files[0]; if (!file) return;
        const blob = new Blob([await file.arrayBuffer()], {type: file.type});
        await IDB.set('pro' + i + '_' + state.today, blob);
        if (state.proObjUrls[i]) URL.revokeObjectURL(state.proObjUrls[i]);
        state.proObjUrls[i] = URL.createObjectURL(blob);
        renderProGrid();
        persistTodayDraft(true);
      });
      drop.onclick = () => inp.click();
    }
    const memo = el('input');
    memo.placeholder = 'なぜ良いか ' + (i+1);
    memo.value = proMemos[i];
    memo.style.fontSize = '11px';
    memo.id = 'pro-memo-' + i;
    memo.addEventListener('input', () => persistTodayDraft(true));
    slot.appendChild(drop); slot.appendChild(memo);
    grid.appendChild(slot);
  });
}

// ── 今日データ初期化 ──────────────────────────
async function initTodayData() {
  const today = state.today;

  // ★ まず全部リセット（前日の残骸を消す）
  if (state.photoObjUrl) { URL.revokeObjectURL(state.photoObjUrl); state.photoObjUrl = null; }
  for (let i = 0; i < 3; i++) {
    if (state.proObjUrls[i]) { URL.revokeObjectURL(state.proObjUrls[i]); state.proObjUrls[i] = null; }
  }
  state.lens = LENSES[0];
  state.device = '';
  const commentEl = qs('#photo-comment');
  if (commentEl) commentEl.value = '';
  renderPhotoZone();   // 空の状態で描画
  renderProGrid();     // 空の状態で描画
  renderLenses();

  // ★ 今日のキーに対応するデータだけロード
  const photoBlob = await IDB.get('main_' + today);
  if (photoBlob) {
    state.photoObjUrl = URL.createObjectURL(photoBlob);
    renderPhotoZone();
  }
  for (let i = 0; i < 3; i++) {
    const blob = await IDB.get('pro' + i + '_' + today);
    if (blob) {
      state.proObjUrls[i] = URL.createObjectURL(blob);
    }
  }
  renderProGrid();

  // テキスト・レンズを今日分のlocalStorageからロード
  const meta = LS.get('meta') || {};
  const todayData = meta[today];
  if (todayData) {
    if (todayData.comment && commentEl) commentEl.value = todayData.comment;
    if (todayData.lens && LENSES.includes(todayData.lens)) {
      state.lens = todayData.lens;
      renderLenses();
    }
    if (todayData.device) state.device = todayData.device;
  }
}

// Blob → base64変換
function blobToBase64(blob) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(',')[1]);
    r.onerror = () => rej(r.error);
    r.readAsDataURL(blob);
  });
}

let draftBackupTimer = null;
function persistTodayDraft(scheduleRemote) {
  const commentEl = qs('#photo-comment');
  const proMemos = [0,1,2].map(i => (qs('#pro-memo-' + i)||{}).value || '');
  const mainPhoto = !!state.photoObjUrl;
  const proPhotos = state.proObjUrls.map(Boolean);
  const hasPhoto = mainPhoto || proPhotos.some(Boolean);
  const hasText = !!(commentEl?.value || proMemos.some(m => m));
  if (!hasPhoto && !hasText) return;

  const meta = LS.get('meta') || {};
  meta[state.today] = {
    ...(meta[state.today] || {}),
    comment: commentEl?.value || '',
    lens: state.lens,
    device: state.device || meta[state.today]?.device || '',
    hasPhoto,
    mainPhoto,
    proPhotos,
    proMemos,
  };
  LS.set('meta', meta);
  renderProgressBanner();

  if (!scheduleRemote) return;
  clearTimeout(draftBackupTimer);
  draftBackupTimer = setTimeout(async () => {
    const latest = (LS.get('meta') || {})[state.today];
    if (!latest || !hasLogContent(latest)) return;
    await SB.uploadLogMeta(state.today, latest);
    await mirrorAllLogMetaToSettings();
  }, 1200);
}

qs('#photo-comment').addEventListener('input', () => persistTodayDraft(true));

// ── 保存 ──────────────────────────────────────
qs('#save-btn').addEventListener('click', async () => {
  const saveBtn = qs('#save-btn');
  const commentEl = qs('#photo-comment');

  // ★ 保存ボタンを押した瞬間の値をスナップショットとして固定する
  // （非同期処理の途中で他の処理が入力欄を書き換えても、保存内容はこの時点の値を使う）
  const snapshotToday = state.today;
  const snapshotComment = commentEl.value;
  const snapshotLens = state.lens;
  const snapshotProMemos = [0,1,2].map(i => (qs('#pro-memo-' + i)||{}).value || '');
  const snapshotMainPhoto = !!state.photoObjUrl;
  const snapshotProPhotos = state.proObjUrls.map(Boolean);
  const snapshotHasPhoto = snapshotMainPhoto || snapshotProPhotos.some(Boolean);
  const snapshotHasText = !!snapshotComment.trim() || snapshotProMemos.some(m => m.trim());

  if (!snapshotHasPhoto && !snapshotHasText) {
    const msg = qs('#saved-msg');
    msg.textContent = '写真かコメントを入力してください';
    msg.classList.remove('hidden');
    setTimeout(() => { msg.classList.add('hidden'); msg.textContent = '保存済み'; }, 3000);
    return;
  }

  console.log('[SAVE] snapshot', { date: snapshotToday, comment: snapshotComment, lens: snapshotLens });

  const meta = LS.get('meta') || {};
  const dayData = {
    comment: snapshotComment,
    lens: snapshotLens,
    device: state.device || meta[snapshotToday]?.device || '',
    hasPhoto: snapshotHasPhoto,
    mainPhoto: snapshotMainPhoto,
    proPhotos: snapshotProPhotos,
    proMemos: snapshotProMemos,
  };
  meta[snapshotToday] = dayData;
  LS.set('meta', meta);

  saveBtn.disabled = true;
  saveBtn.textContent = '保存中...';
  const progressMsg = qs('#saved-msg');
  const setSaveProgress = text => {
    progressMsg.textContent = text;
    progressMsg.classList.remove('hidden');
    saveBtn.textContent = text;
    setSyncHealth({ pending: true });
  };
  setSaveProgress('文字保存中');

  // メタデータと写真のアップロードを両方待ってから完了表示
  let uploadFailed = false;
  try {
    const metaOk = await SB.upsert(snapshotToday, dayData);
    console.log('[SAVE] upsert result', metaOk);
    if (!metaOk) uploadFailed = true;
    setSaveProgress('バックアップ中');
    const metaBackupOk = await SB.uploadLogMeta(snapshotToday, dayData);
    if (!metaBackupOk) uploadFailed = true;
    const allMetaBackupOk = await mirrorAllLogMetaToSettings();
    if (!allMetaBackupOk) uploadFailed = true;

    const uploadJobs = [];
    const photoBlob = await IDB.get('main_' + snapshotToday);
    if (photoBlob) uploadJobs.push({ slot: 'main', blob: photoBlob });
    for (let i = 0; i < 3; i++) {
      const blob = await IDB.get('pro' + i + '_' + snapshotToday);
      if (blob) uploadJobs.push({ slot: i, blob });
    }
    for (let i = 0; i < uploadJobs.length; i++) {
      const job = uploadJobs[i];
      setSaveProgress(`写真送信中 ${i + 1}/${uploadJobs.length}`);
      const ok = await SB.uploadPhoto(snapshotToday, job.slot, job.blob, job.blob.type || 'image/jpeg');
      if (!ok) uploadFailed = true;
    }
  } catch(e) {
    console.error('[SAVE] error', e);
    uploadFailed = true;
  }
  setSyncHealth({
    lastSaveAt: new Date().toISOString(),
    lastSaveOk: !uploadFailed,
    lastLogBackupAt: new Date().toISOString(),
    lastLogBackupOk: !uploadFailed,
    pending: false,
  });

  saveBtn.disabled = false;
  saveBtn.textContent = '写真ログを保存';

  // ★ 保存後、もし state.today が変わっていなければ、入力欄をスナップショット値で再確認する
  //   （万一何かが入力欄を空にしていた場合の保険）
  if (state.today === snapshotToday && commentEl.value !== snapshotComment && snapshotComment) {
    console.warn('[SAVE] comment was cleared unexpectedly, restoring snapshot value');
    commentEl.value = snapshotComment;
  }

  const msg = qs('#saved-msg');
  if (uploadFailed) {
    msg.textContent = '端末には保存済み（同期は失敗・後で再試行されます）';
  } else {
    msg.textContent = '保存済み';
  }
  msg.classList.remove('hidden');
  setTimeout(() => { msg.classList.add('hidden'); msg.textContent = '保存済み'; }, 3000);
  renderProgressBanner();
  renderCommandCenter();
});

// ── 学習タブ ──────────────────────────────────
function getCurrentWeek() {
  const meta = LS.get('meta') || {};
  const logCount = Object.keys(meta).filter(d => meta[d]?.comment).length;
  return Math.min(Math.floor(logCount / 5) + 1, 6);
}

function renderLearn() {
  const container = qs('#learn-content');
  container.innerHTML = '';
  const weekNum = getCurrentWeek();
  const cur = CURRICULUM.find(c => c.week === weekNum);
  if (!cur) return;
  const header = el('div', 'learn-header');
  header.innerHTML = `<div class="learn-week-badge">WEEK ${weekNum} / 6</div><div class="learn-week-title">今週のカリキュラム</div><div class="learn-week-sub">次にやること: 目標を確認し、実践課題を撮影ログに残します。ログを5回記録するとWeek${weekNum<6?weekNum+1:''}に進みます</div>`;
  container.appendChild(header);
  const lessonKeys = ['shooting','editing'];
  const focusKey = lessonKeys.find(key => {
    const data = cur[key];
    const savedChecks = LS.get('learn_checks_w' + weekNum + '_' + key) || [];
    return data.checklist.some((_, i) => !savedChecks[i]);
  }) || 'shooting';
  [['shooting','撮影編'],['editing','編集編']].forEach(([key, label]) => {
    const badge = key;
    const data = cur[key];
    const savedChecks = LS.get('learn_checks_w' + weekNum + '_' + key) || [];
    const savedMemo = LS.get('learn_memo_w' + weekNum + '_' + key) || '';
    const storedOpen = LS.get('learn_open_' + key + '_w' + weekNum);
    const isOpen = typeof storedOpen === 'boolean' ? storedOpen : key === focusKey;
    const section = el('div', 'learn-section');
    const doneCount = data.checklist.filter((_, i) => savedChecks[i]).length;
    const secHeader = el('div', 'learn-section-header');
    secHeader.setAttribute('role', 'button');
    secHeader.setAttribute('tabindex', '0');
    secHeader.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    secHeader.setAttribute('aria-controls', 'learn-body-' + key + '-w' + weekNum);
    secHeader.innerHTML = `<div><div class="learn-section-title">${label}：${data.theme}</div><div style="font-size:10px;color:var(--fg5);margin-top:3px;letter-spacing:.04em">${data.goal}</div></div><div style="display:flex;align-items:center;gap:8px"><span style="font-size:10px;color:${doneCount===data.checklist.length?'var(--fg)':'var(--fg5)'}">${doneCount}/${data.checklist.length}</span><span class="learn-section-badge ${badge}">${label.slice(0,2)}</span></div>`;
    const body = el('div', 'learn-body');
    body.id = 'learn-body-' + key + '-w' + weekNum;
    if (!isOpen) body.style.display = 'none';
    const toggleSection = () => {
      const open = body.style.display !== 'none';
      body.style.display = open ? 'none' : 'block';
      secHeader.setAttribute('aria-expanded', open ? 'false' : 'true');
      LS.set('learn_open_' + key + '_w' + weekNum, !open);
    };
    secHeader.addEventListener('click', toggleSection);
    secHeader.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSection(); } });
    const goal = el('div', 'learn-goal'); goal.textContent = '目標：' + data.goal;
    body.appendChild(goal);
    const practiceWrap = el('div', 'learn-practice');
    const practiceLbl = el('div', 'lbl'); practiceLbl.style.marginBottom = '8px'; practiceLbl.textContent = '実践課題';
    const practiceText = el('div', 'learn-practice-text'); practiceText.textContent = data.practice;
    practiceWrap.appendChild(practiceLbl); practiceWrap.appendChild(practiceText);
    body.appendChild(practiceWrap);
    const checkWrap = el('div', 'learn-checklist');
    const checkLbl = el('div', 'lbl'); checkLbl.style.marginBottom = '8px'; checkLbl.textContent = '完了条件';
    checkWrap.appendChild(checkLbl);
    data.checklist.forEach((item, i) => {
      const row = el('div', 'learn-check-item');
      const checks = LS.get('learn_checks_w' + weekNum + '_' + key) || [];
      const isDone = !!checks[i];
      const cb = el('div', 'cb' + (isDone ? ' done' : ''));
      const txt = el('div', 'learn-check-text' + (isDone ? ' done' : '')); txt.textContent = item;
      row.appendChild(cb); row.appendChild(txt);
      row.addEventListener('click', () => {
        const cur2 = LS.get('learn_checks_w' + weekNum + '_' + key) || [];
        cur2[i] = !cur2[i];
        LS.set('learn_checks_w' + weekNum + '_' + key, cur2);
        renderLearn();
      });
      checkWrap.appendChild(row);
    });
    body.appendChild(checkWrap);
    const memoWrap = el('div', 'learn-memo');
    const memoLbl = el('div', 'lbl'); memoLbl.style.marginBottom = '8px'; memoLbl.textContent = '成果メモ';
    const memoTA = document.createElement('textarea');
    memoTA.rows = 3; memoTA.placeholder = '実践してみてどうだったか・気づいたこと・次に試したいことを書く';
    memoTA.value = savedMemo;
    memoTA.style.cssText = 'border:1px solid var(--bg5);border-bottom:1px solid var(--bg5);padding:10px 12px;font-size:11px;background:var(--input-bg);line-height:1.8';
    const memoBtn = el('button', 'learn-save-btn'); memoBtn.textContent = 'メモを保存';
    memoBtn.addEventListener('click', () => {
      LS.set('learn_memo_w' + weekNum + '_' + key, memoTA.value);
      memoBtn.textContent = '保存しました ✓';
      setTimeout(() => memoBtn.textContent = 'メモを保存', 2000);
    });
    memoWrap.appendChild(memoLbl); memoWrap.appendChild(memoTA); memoWrap.appendChild(memoBtn);
    body.appendChild(memoWrap);
    const extraToggle = el('button', 'learn-detail-toggle');
    extraToggle.type = 'button';
    extraToggle.textContent = '解説と参考動画を見る';
    extraToggle.setAttribute('aria-expanded', 'false');
    const extra = el('div', 'learn-extra');
    const theoryWrap = el('div');
    const theoryLbl = el('div', 'lbl'); theoryLbl.style.marginBottom = '8px'; theoryLbl.textContent = '解説';
    const theory = el('div', 'learn-theory'); theory.textContent = data.theory;
    theoryWrap.appendChild(theoryLbl); theoryWrap.appendChild(theory);
    extra.appendChild(theoryWrap);
    if (data.youtube && data.youtube.length > 0) {
      const ytWrap = el('div', 'learn-yt');
      const ytLbl = el('div', 'lbl'); ytLbl.style.marginBottom = '8px'; ytLbl.textContent = '参考動画';
      ytWrap.appendChild(ytLbl);
      data.youtube.forEach(yt => {
        const link = el('a', 'learn-yt-link');
        link.href = yt.url; link.target = '_blank'; link.rel = 'noopener';
        link.innerHTML = `<span class="learn-yt-icon">▶</span><span class="learn-yt-text">${yt.title}</span>`;
        ytWrap.appendChild(link);
      });
      extra.appendChild(ytWrap);
    }
    extraToggle.addEventListener('click', () => {
      const open = extra.classList.toggle('open');
      extraToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    body.appendChild(extraToggle);
    body.appendChild(extra);
    section.appendChild(secHeader); section.appendChild(body);
    container.appendChild(section);
  });
}

// ── プラン ─────────────────────────────────
function getWeekLogCount(weekId) {
  const meta = LS.get('meta') || {};
  const allDates = Object.keys(meta).filter(d => meta[d]?.comment).sort();
  const start = (weekId - 1) * 5;
  return Math.max(0, Math.min(allDates.length - start, 5));
}
function isWeekComplete(weekId) { return getWeekLogCount(weekId) >= 5; }

function renderPlan() {
  const container = qs('#week-content');
  container.innerHTML = '';
  const meta = LS.get('meta') || {};
  const totalLogs = Object.keys(meta).filter(d => meta[d]?.comment).length;
  const completedCount = WEEKS.filter(w => isWeekComplete(w.id)).length;
  const summary = el('div');
  summary.style.cssText = 'margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid var(--border)';
  summary.innerHTML = `<div style="display:flex;align-items:baseline;gap:12px;margin-bottom:8px"><span style="font-family:'Space Grotesk',sans-serif;font-size:32px;font-weight:700">${totalLogs}</span><span style="font-size:10px;color:var(--fg5);letter-spacing:.1em">LOGS TOTAL</span></div><div style="display:flex;gap:20px"><span style="font-size:10px;color:var(--fg5);letter-spacing:.08em">${completedCount}/6 WEEKS COMPLETE</span></div>`;
  container.appendChild(summary);
  WEEKS.forEach(w => {
    const logCount = getWeekLogCount(w.id);
    const complete = isWeekComplete(w.id);
    const isActive = state.activeWeek === w.id;
    const card = el('div', 'week-card' + (isActive ? ' active' : '') + (complete ? ' complete' : ''));
    const pct = Math.round((logCount / 5) * 100);
    card.innerHTML = `<div class="week-card-header"><div class="week-card-title">Week ${w.id} — ${w.theme}</div><div class="week-card-status${complete ? ' done' : ''}">${complete ? 'COMPLETE' : logCount + '/5'}</div></div><div class="week-card-sub">${w.dates}</div><div class="week-progress-wrap"><div class="week-progress-track"><div class="week-progress-fill" style="width:${pct}%"></div></div><div class="week-progress-label">${logCount}/5 ログ記録済み</div></div>`;
    if (isActive) {
      const detail = el('div', 'week-detail');
      detail.innerHTML = `<div class="constraint"><div class="lbl">縛り</div><p>${w.constraint}</p></div><div class="mission-grid"><div class="mission-box"><div class="lbl">平日ミッション</div><p>${w.weekday}</p></div><div class="mission-box"><div class="lbl">週末ミッション</div><p>${w.weekend}</p></div></div><div class="check-section"><div class="lbl">週末セルフチェック</div><div class="check-row"><div class="cb${(LS.get('checks')||{})[w.id] ? ' done' : ''}"></div><div class="check-text${(LS.get('checks')||{})[w.id] ? ' done' : ''}">${w.check}</div></div></div>`;
      detail.querySelector('.check-row').addEventListener('click', () => {
        const c = LS.get('checks') || {};
        c[w.id] = !c[w.id];
        LS.set('checks', c);
        state.checks = c;
        renderPlan();
      });
      card.appendChild(detail);
    }
    card.addEventListener('click', e => {
      if (e.target.closest('.check-row')) return;
      state.activeWeek = (state.activeWeek === w.id) ? null : w.id;
      renderPlan();
    });
    container.appendChild(card);
  });
}

// ── バックアップ・リストア ─────────────────────
function collectLearnData() {
  const learnData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('ptr_learn_')) learnData[k.replace('ptr_', '')] = LS.get(k.replace('ptr_', ''));
  }
  return learnData;
}

function createFullBackupPayload(reason = 'manual') {
  return {
    version: 2,
    reason,
    exportedAt: new Date().toISOString(),
    meta: LS.get('meta') || {},
    checks: LS.get('checks') || {},
    tasksDone: LS.get('tasks_done') || {},
    manualTasks: LS.get('manual_tasks') || [],
    manualTasksDeleted: LS.get('manual_tasks_deleted') || [],
    taskOverrides: LS.get('task_overrides') || {},
    externalTasksCompleted: LS.get('external_tasks_completed') || [],
    scriptUrl: LS.get('script_url') || '',
    clips: LS.get('clips') || [],
    clipsDeleted: LS.get('clips_deleted') || [],
    timerLogToday: LS.get('timer_log_today') || [],
    todoDoneLog: LS.get('todo_done_log') || [],
    inboxItems: LS.get('inbox_items') || [],
    notif: LS.get('notif') || '',
    notifLeads: LS.get('notif_leads') || getNotifLeads(),
    authSession: getAuthSession() ? {
      user: getAuthSession().user,
      signedInAt: getAuthSession().signedInAt,
      method: getAuthSession().method || 'unknown'
    } : null,
    syncKey: getSyncKeyInfo() ? { id: getSyncKeyInfo().id, savedAt: getSyncKeyInfo().savedAt } : null,
    syncHealth: LS.get('sync_health') || {},
    learnData: collectLearnData(),
  };
}

function applyFullBackupPayload(data) {
  if (!data || !data.meta) throw new Error('無効なバックアップファイルです');
  LS.set('meta', data.meta || {});
  if (data.checks) LS.set('checks', data.checks);
  if (data.tasksDone) LS.set('tasks_done', data.tasksDone);
  if (data.manualTasks) LS.set('manual_tasks', data.manualTasks);
  if (data.manualTasksDeleted) LS.set('manual_tasks_deleted', data.manualTasksDeleted);
  if (data.taskOverrides) LS.set('task_overrides', data.taskOverrides);
  if (data.externalTasksCompleted) LS.set('external_tasks_completed', data.externalTasksCompleted);
  if (data.scriptUrl !== undefined) LS.set('script_url', data.scriptUrl);
  if (data.clips) LS.set('clips', data.clips);
  if (data.clipsDeleted) LS.set('clips_deleted', data.clipsDeleted);
  if (data.timerLogToday) LS.set('timer_log_today', data.timerLogToday);
  if (data.todoDoneLog) LS.set('todo_done_log', data.todoDoneLog);
  if (data.inboxItems) LS.set('inbox_items', data.inboxItems);
  if (data.notif) LS.set('notif', data.notif);
  if (data.notifLeads) LS.set('notif_leads', data.notifLeads);
  if (data.syncKey?.id) LS.set(SYNC_KEY_STORAGE_KEY, data.syncKey);
  if (data.syncHealth) LS.set('sync_health', data.syncHealth);
  if (data.learnData) Object.entries(data.learnData).forEach(([k, v]) => LS.set(k, v));
}

async function writeFullBackupToCloud(reason = 'manual') {
  const payload = createFullBackupPayload(reason);
  const ok = await SB.setSetting('full_backup', payload);
  if (ok) state.lastFullBackupAt = Date.now();
  setSyncHealth({ lastBackupAt: new Date().toISOString(), lastBackupOk: ok });
  renderAutoBackupStatus(ok ? 'ok' : 'failed');
  return ok;
}

function scheduleFullBackup(reason = 'auto') {
  clearTimeout(state.fullBackupTimer);
  renderAutoBackupStatus('pending');
  state.fullBackupTimer = setTimeout(() => writeFullBackupToCloud(reason), 2200);
}

function renderAutoBackupStatus(mode = '') {
  const el2 = qs('#auto-backup-status');
  if (!el2) return;
  const time = state.lastFullBackupAt
    ? new Date(state.lastFullBackupAt).toLocaleTimeString('ja-JP', {hour:'2-digit', minute:'2-digit'})
    : '未実行';
  const suffix = mode === 'pending' ? '保存待ち'
    : mode === 'failed' ? '保存失敗'
    : mode === 'ok' ? '保存済み'
    : '待機中';
  const auth = getAuthSession();
  const sync = getSyncKeyInfo();
  const scope = auth?.user?.email ? `メール ${auth.user.email}` : sync?.id ? `同期キー ${sync.id}` : '共通保存先';
  el2.textContent = `自動バックアップ: ${suffix} / 最終保存 ${time} / 保存先 ${scope} + Storage`;
}

renderAutoBackupStatus();
setInterval(() => scheduleFullBackup('periodic'), 10 * 60 * 1000);

qs('#backup-export-btn').addEventListener('click', () => {
  const payload = createFullBackupPayload('export');
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'photo-tracker-backup-' + state.today + '.json';
  a.click();
  URL.revokeObjectURL(url);
  qs('#backup-msg').textContent = '書き出しました';
  setTimeout(() => qs('#backup-msg').textContent = '', 2000);
});

qs('#backup-import-btn').addEventListener('click', () => qs('#backup-file-input').click());
qs('#backup-file-input').addEventListener('change', async e => {
  const file = e.target.files[0]; if (!file) return;
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    const confirmed = await confirmAction({
      title: 'バックアップを読み込みますか？',
      body: `${file.name} の内容で、この端末のコメント・Todo・クリップ・通知設定などを復元します。現在の端末データは上書きされる可能性があります。`,
      okText: '読み込む'
    });
    if (!confirmed) {
      e.target.value = '';
      qs('#backup-msg').textContent = '読み込みをキャンセルしました';
      return;
    }
    applyFullBackupPayload(data);
    await writeFullBackupToCloud('import');
    qs('#backup-msg').textContent = '読み込み完了。ページを再読み込みします…';
    setTimeout(() => location.reload(), 1500);
  } catch(err) {
    qs('#backup-msg').textContent = 'エラー: ' + err.message;
  } finally {
    e.target.value = '';
  }
});

qs('#backup-cloud-btn').addEventListener('click', async () => {
  qs('#backup-msg').textContent = 'クラウドへ保存しています...';
  const ok = await writeFullBackupToCloud('manual');
  qs('#backup-msg').textContent = ok ? 'クラウド全体保存が完了しました' : 'クラウド保存に失敗しました';
});

qs('#backup-cloud-restore-btn').addEventListener('click', async () => {
  const confirmed = await confirmAction({
    title: '全体復元',
    body: 'クラウドに保存されたバックアップで、この端末の設定・Todo・クリップ・通知設定を復元します。現在の端末データは上書きされる可能性があります。',
    okText: '復元する'
  });
  if (!confirmed) return;
  qs('#backup-msg').textContent = 'クラウド全体バックアップを確認しています...';
  const data = await SB.getSetting('full_backup');
  try {
    if (!data) throw new Error('クラウド全体バックアップがまだありません');
    applyFullBackupPayload(data);
    qs('#backup-msg').textContent = 'クラウド全体復元完了。ページを再読み込みします…';
    setTimeout(() => location.reload(), 1500);
  } catch(err) {
    qs('#backup-msg').textContent = 'エラー: ' + err.message;
  }
});

// ── 写真の再同期（ローカルにあってクラウドに無いものを一括送信） ──
async function resyncPhotos(force) {
  const btn = force ? qs('#force-resync-photos-btn') : qs('#resync-photos-btn');
  const otherBtn = force ? qs('#resync-photos-btn') : qs('#force-resync-photos-btn');
  const msg = qs('#resync-msg');
  btn.disabled = true;
  otherBtn.disabled = true;
  const originalText = btn.textContent;
  msg.textContent = '';

  try {
    const allKeys = await IDB.listKeys();
    const photoKeys = allKeys.filter(k => /^(main|pro\d)_\d{4}-\d{2}-\d{2}$/.test(k));

    if (photoKeys.length === 0) {
      msg.innerHTML = 'この端末のIndexedDBに写真が1枚もありません。<br>別の端末で撮った写真は、その端末でこの「再送信」を実行する必要があります。';
      btn.disabled = false; otherBtn.disabled = false;
      btn.textContent = originalText;
      return;
    }

    const foundDates = [...new Set(photoKeys.map(k => k.match(/_(\d{4}-\d{2}-\d{2})$/)?.[1]).filter(Boolean))].sort();

    let sent = 0, skipped = 0, failed = 0, metaSent = 0, metaFailed = 0;
    const failedKeys = [];
    const localMeta = LS.get('meta') || {};
    for (const [date, data] of Object.entries(localMeta)) {
      if (!hasLogContent(data)) continue;
      const ok = await SB.uploadLogMeta(date, data);
      if (ok) metaSent++; else metaFailed++;
    }
    const allMetaOk = await mirrorAllLogMetaToSettings();
    if (!allMetaOk) metaFailed++;
    for (let idx = 0; idx < photoKeys.length; idx++) {
      const key = photoKeys[idx];
      btn.textContent = `送信中... (${idx+1}/${photoKeys.length})`;
      const m = key.match(/^(main|pro(\d))_(.+)$/);
      const slot = m[1] === 'main' ? 'main' : parseInt(m[2]);
      const date = m[3];

      if (!force) {
        // 既にクラウドにあるかチェック（強制モードではスキップして必ず上書き）
        const existing = await SB.fetchPhotoBlob(date, slot);
        if (existing) { skipped++; continue; }
      }

      const blob = await IDB.get(key);
      if (!blob) continue;
      const ok = await SB.uploadPhoto(date, slot, blob, blob.type || 'image/jpeg');
      if (ok) sent++; else { failed++; failedKeys.push(key); }
    }

    let result = `完了: 写真 ${sent}件送信 / ${skipped}件は既存(スキップ) / ${failed}件失敗 / 文字バックアップ ${metaSent}件送信`;
    if (metaFailed > 0) result += ` / 文字バックアップ ${metaFailed}件失敗`;
    if (failedKeys.length > 0) result += `<br>失敗: ${failedKeys.join(', ')}`;
    result += `<br>この端末で見つかった日付: ${foundDates.join(', ') || 'なし'}`;
    msg.innerHTML = result;
  } catch(e) {
    msg.textContent = 'エラーが発生しました: ' + e.message;
  }

  btn.disabled = false; otherBtn.disabled = false;
  btn.textContent = originalText;
}

qs('#resync-photos-btn').addEventListener('click', () => resyncPhotos(false));
qs('#force-resync-photos-btn').addEventListener('click', async () => {
  const confirmed = await confirmAction({
    title: '上書き送信',
    body: 'この端末に残っている写真と文字情報をクラウドへ上書き送信します。クラウド側の古い内容を置き換える操作です。',
    okText: '上書き送信'
  });
  if (confirmed) resyncPhotos(true);
});
qs('#restore-cloud-btn').addEventListener('click', async () => {
  const confirmed = await confirmAction({
    title: '写真ログを復元しますか？',
    body: 'クラウド側のバックアップから写真・コメント・レンズ・デバイスを復元します。現在この端末にある写真はできるだけ維持します。',
    okText: '復元する'
  });
  if (!confirmed) return;
  restoreFromSupabase({ forcePhotos: false, showMessage: true });
});

// ── ログ（リスト＋カレンダー） ──────────────────
let logObjUrls = {};
function cleanLogObjUrls() {
  Object.values(logObjUrls).forEach(u => { try { URL.revokeObjectURL(u); } catch {} });
  logObjUrls = {};
}

function logHasVisibleContent(data) {
  return data?.comment || data?.hasPhoto || data?.lens || data?.device || data?.proMemos?.some(Boolean);
}

function getAllLogDates(meta = LS.get('meta') || {}) {
  return Object.keys(meta).filter(d => logHasVisibleContent(meta[d])).sort().reverse();
}

function updateLogFilterOptions(meta) {
  const lensSel = qs('#log-lens-filter');
  const deviceSel = qs('#log-device-filter');
  const lenses = [...new Set(Object.values(meta).map(x => x?.lens).filter(Boolean))].sort();
  const devices = [...new Set(Object.values(meta).map(x => x?.device).filter(Boolean))].sort();
  const fill = (sel, label, values, current) => {
    const prev = current || sel.value || 'all';
    sel.innerHTML = `<option value="all">${label}</option>`;
    values.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v;
      opt.textContent = v;
      sel.appendChild(opt);
    });
    sel.value = values.includes(prev) ? prev : 'all';
  };
  fill(lensSel, 'レンズすべて', lenses, state.logLensFilter);
  fill(deviceSel, 'デバイスすべて', devices, state.logDeviceFilter);
}

function getFilteredLogDates(meta) {
  const q = state.logQuery.trim().toLowerCase();
  return getAllLogDates(meta).filter(date => {
    const data = meta[date] || {};
    if (state.logDateFilter && date !== state.logDateFilter) return false;
    if (state.logMonthFilter && !date.startsWith(state.logMonthFilter)) return false;
    if (state.logCommentOnly && !(data.comment || data.proMemos?.some(Boolean))) return false;
    if (state.logLensFilter !== 'all' && data.lens !== state.logLensFilter) return false;
    if (state.logDeviceFilter !== 'all' && data.device !== state.logDeviceFilter) return false;
    if (!q) return true;
    const haystack = [
      date, fmtFull(date), data.comment || '', data.lens || '', data.device || '',
      ...(data.proMemos || []),
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

function renderLogStats(meta, dates) {
  const total = dates.length;
  const withText = dates.filter(d => meta[d]?.comment || meta[d]?.proMemos?.some(Boolean)).length;
  const withPhoto = dates.filter(d => meta[d]?.hasPhoto).length;
  const monthKey = state.logMonthFilter || getLocalDateStr().slice(0, 7);
  const monthDates = getAllLogDates(meta).filter(d => d.startsWith(monthKey));
  const streak = longestLogStreak(monthDates);
  const cells = [
    ['LOGS', total],
    ['TEXT', withText],
    ['PHOTO', withPhoto],
    ['MONTH/STREAK', `${monthDates.length}/${streak}`],
  ];
  qs('#log-stats').innerHTML = cells.map(([label, value]) => (
    `<div class="stat-cell"><div class="stat-num">${value}</div><div class="stat-label">${label}</div></div>`
  )).join('');
}

function longestLogStreak(dates) {
  const set = new Set(dates);
  let best = 0;
  for (const date of dates) {
    const prev = new Date(date + 'T00:00:00');
    prev.setDate(prev.getDate() - 1);
    if (set.has(getLocalDateStr(prev))) continue;
    let cur = 0;
    const d = new Date(date + 'T00:00:00');
    while (set.has(getLocalDateStr(d))) {
      cur++;
      d.setDate(d.getDate() + 1);
    }
    best = Math.max(best, cur);
  }
  return best;
}

async function loadLogThumb(date, thumb, renderId) {
  try {
    const photoBlob = await getPhotoBlob('main_' + date);
    if (renderId !== state.logRenderId) return;
    thumb.innerHTML = '';
    if (photoBlob) {
      const url = URL.createObjectURL(photoBlob);
      logObjUrls['main_' + date] = url;
      const img = el('img'); img.src = url;
      thumb.appendChild(img);
    } else {
      thumb.innerHTML = '<div class="log-thumb-empty">NO PHOTO</div>';
    }
  } catch(e) {
    if (renderId !== state.logRenderId) return;
    thumb.innerHTML = '<div class="log-thumb-empty">NO PHOTO</div>';
  }
}

// ビュー切り替え
qs('#log-view-list-btn').addEventListener('click', () => {
  state.logView = 'list';
  qs('#log-view-list-btn').classList.add('active');
  qs('#log-view-cal-btn').classList.remove('active');
  qs('#log-list').classList.remove('hidden');
  qs('#log-cal').classList.add('hidden');
});
qs('#log-view-cal-btn').addEventListener('click', () => {
  state.logView = 'cal';
  qs('#log-view-cal-btn').classList.add('active');
  qs('#log-view-list-btn').classList.remove('active');
  qs('#log-list').classList.add('hidden');
  qs('#log-cal').classList.remove('hidden');
  renderCalendar();
});
qs('#log-search-input').addEventListener('input', e => {
  state.logQuery = e.target.value || '';
  renderLog();
});
qs('#log-date-filter').addEventListener('change', e => {
  state.logDateFilter = e.target.value || '';
  renderLog();
});
qs('#log-month-filter').addEventListener('change', e => {
  state.logMonthFilter = e.target.value || '';
  renderLog();
});
qs('#log-lens-filter').addEventListener('change', e => {
  state.logLensFilter = e.target.value || 'all';
  renderLog();
});
qs('#log-device-filter').addEventListener('change', e => {
  state.logDeviceFilter = e.target.value || 'all';
  renderLog();
});
qs('#log-comment-only-filter').addEventListener('change', e => {
  state.logCommentOnly = !!e.target.checked;
  renderLog();
});

function renderCalendar() {
  const cal = qs('#log-cal');
  const meta = LS.get('meta') || {};
  const logDates = new Set(getFilteredLogDates(meta));
  const year = state.calYear;
  const month = state.calMonth;
  const todayStr = state.today;

  cal.innerHTML = '';
  // ナビ
  const nav = el('div', 'cal-nav');
  const prevBtn = el('button', 'cal-arrow'); prevBtn.textContent = '←';
  prevBtn.addEventListener('click', () => {
    state.calMonth--;
    if (state.calMonth < 0) { state.calMonth = 11; state.calYear--; }
    renderCalendar();
  });
  const nextBtn = el('button', 'cal-arrow'); nextBtn.textContent = '→';
  nextBtn.addEventListener('click', () => {
    state.calMonth++;
    if (state.calMonth > 11) { state.calMonth = 0; state.calYear++; }
    renderCalendar();
  });
  const monthEl = el('div', 'cal-month');
  monthEl.textContent = year + '年' + (month + 1) + '月';
  nav.appendChild(prevBtn); nav.appendChild(monthEl); nav.appendChild(nextBtn);
  cal.appendChild(nav);

  // グリッド
  const grid = el('div', 'cal-grid');
  ['日','月','火','水','木','金','土'].forEach(d => {
    const dow = el('div', 'cal-dow'); dow.textContent = d; grid.appendChild(dow);
  });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < firstDay; i++) { grid.appendChild(el('div', 'cal-day')); }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    const hasLog = logDates.has(dateStr);
    const isToday = dateStr === todayStr;
    const dayEl = el('div', 'cal-day' + (hasLog ? ' has-log' : '') + (isToday ? ' today' : ''));
    dayEl.textContent = d;
    if (hasLog) {
      const dot = el('div', 'cal-dot'); dayEl.appendChild(dot);
      dayEl.addEventListener('click', () => showLogDetail(dateStr));
    }
    grid.appendChild(dayEl);
  }
  cal.appendChild(grid);
}

async function renderLog() {
  const renderId = ++state.logRenderId;
  cleanLogObjUrls();
  const listView = qs('#log-list-view');
  const detailView = qs('#log-detail-view');
  listView.classList.remove('hidden');
  detailView.classList.add('hidden');

  const list = qs('#log-list');
  if (!state.lastLogSyncAt) {
    list.innerHTML = '<div class="log-empty">クラウドと同期中...</div>';
    await ensureCloudLogsFresh(true);
    if (renderId !== state.logRenderId) return;
  }

  const meta = LS.get('meta') || {};
  updateLogFilterOptions(meta);
  const allDates = getAllLogDates(meta);
  const dates = getFilteredLogDates(meta);
  qs('#log-count').textContent = `${dates.length} / ${allDates.length} ENTRIES`;
  renderLogStats(meta, dates);
  list.innerHTML = '';

  if (dates.length === 0) {
    list.innerHTML = '<div class="log-empty">まだ記録がありません</div>';
    return;
  }
  for (const date of dates) {
    const data = meta[date];
    const entry = el('div', 'log-entry');
    const thumb = el('div', 'log-thumb');
    thumb.innerHTML = '<div class="log-thumb-empty">LOAD</div>';
    const info = el('div');
    const logMeta = el('div', 'log-meta');
    const dateEl = el('div', 'log-date'); dateEl.textContent = fmtFull(date);
    logMeta.appendChild(dateEl);
    if (data.lens) { const tag = el('span', 'tag'); tag.textContent = data.lens; logMeta.appendChild(tag); }
    if (data.device) { const tag = el('span', 'tag'); tag.textContent = data.device; logMeta.appendChild(tag); }
    const comment = el('div', 'log-comment'); comment.textContent = data.comment || '';
    const proMemos = data.proMemos || [];
    const proCount = proMemos.filter(m => m).length;
    const proInfo = el('div', 'log-pro');
    if (proCount > 0) proInfo.innerHTML = `<span class="log-pro-label">プロ研究 ${proCount}件</span>`;
    info.appendChild(logMeta); info.appendChild(comment);
    if (proCount > 0) info.appendChild(proInfo);
    entry.appendChild(thumb); entry.appendChild(info);
    entry.addEventListener('click', () => showLogDetail(date));
    list.appendChild(entry);
    loadLogThumb(date, thumb, renderId);
  }
  if (state.logView === 'cal') renderCalendar();
}

async function showLogDetail(date) {
  const meta = LS.get('meta') || {};
  const data = meta[date] || {};
  qs('#log-list-view').classList.add('hidden');
  qs('#log-detail-view').classList.remove('hidden');
  const content = qs('#detail-content');
  content.innerHTML = '';
  const dateEl = el('div', 'detail-date'); dateEl.textContent = fmtFull(date);
  content.appendChild(dateEl);
  if (data.lens) { const lensEl = el('div', 'detail-lens'); lensEl.textContent = data.lens; content.appendChild(lensEl); }
  if (data.device) { const deviceEl = el('div', 'detail-lens'); deviceEl.textContent = data.device; content.appendChild(deviceEl); }
  const photoSection = el('div', 'detail-photo');
  const photoBlob = await getPhotoBlob('main_' + date);
  if (photoBlob) {
    const url = URL.createObjectURL(photoBlob);
    logObjUrls['detail_main_' + date] = url;
    const img = el('img'); img.src = url;
    photoSection.appendChild(img);
  } else {
    photoSection.className = 'detail-no-photo'; photoSection.textContent = 'NO PHOTO';
  }
  content.appendChild(photoSection);
  if (data.comment) {
    const s = el('div', 'detail-section');
    const lbl = el('div', 'lbl'); lbl.textContent = '気づき';
    const c = el('div', 'detail-comment'); c.textContent = data.comment;
    s.appendChild(lbl); s.appendChild(c); content.appendChild(s);
  }
  const proMemos = data.proMemos || [];
  const proBlobs = await Promise.all([0,1,2].map(i => getPhotoBlob('pro' + i + '_' + date)));
  if (proMemos.some(m => m) || proBlobs.some(b => b)) {
    const proSection = el('div', 'detail-section');
    const lbl = el('div', 'lbl'); lbl.textContent = 'プロ研究'; proSection.appendChild(lbl);
    const proGrid = el('div', 'detail-pro-grid');
    for (let i = 0; i < 3; i++) {
      const slot = el('div');
      if (proBlobs[i]) {
        const url = URL.createObjectURL(proBlobs[i]);
        logObjUrls['detail_pro' + i + '_' + date] = url;
        const wrap = el('div', 'detail-pro-img-wrap');
        const img = el('img', 'detail-pro-img'); img.src = url;
        img.addEventListener('click', () => showLightbox(url));
        wrap.appendChild(img); slot.appendChild(wrap);
      } else {
        const empty = el('div', 'detail-pro-empty'); empty.textContent = i+1; slot.appendChild(empty);
      }
      if (proMemos[i]) { const m = el('div', 'detail-pro-memo'); m.textContent = proMemos[i]; slot.appendChild(m); }
      proGrid.appendChild(slot);
    }
    proSection.appendChild(proGrid); content.appendChild(proSection);
  }
}

function showLightbox(src) {
  const trigger = document.activeElement;
  const lb = el('div', 'lightbox');
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', '拡大画像');
  lb.innerHTML = '<button class="lightbox-close" aria-label="閉じる">✕ CLOSE</button>';
  const img = el('img'); img.src = src; img.alt = '拡大表示中の写真';
  lb.appendChild(img);
  const close = () => { lb.remove(); if (trigger) trigger.focus(); };
  lb.querySelector('.lightbox-close').addEventListener('click', e => { e.stopPropagation(); close(); });
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escHandler); }
  });
  document.body.appendChild(lb);
  lb.querySelector('.lightbox-close').focus();
}

qs('#detail-back-btn').addEventListener('click', () => renderLog());

function normalizeRemoteLog(row) {
  return {
    comment: row.comment || '',
    lens: row.lens || '',
    device: row.device || '',
    proMemos: row.pro_memos || [],
    hasPhoto: row.has_photo === true,
  };
}

function hasLogContent(data) {
  return !!(
    data &&
    (data.comment || data.lens || data.device || data.hasPhoto || data.proMemos?.some(m => m))
  );
}

function hasTextLogContent(data) {
  return !!(
    data &&
    (data.comment || data.lens || data.device || data.proMemos?.some(m => m))
  );
}

async function mirrorAllLogMetaToSettings() {
  const meta = LS.get('meta') || {};
  const textMeta = {};
  for (const [date, data] of Object.entries(meta)) {
    if (hasLogContent(data)) textMeta[date] = data;
  }
  return SB.setSetting('photo_log_meta_backup', {
    version: 1,
    updatedAt: new Date().toISOString(),
    meta: textMeta
  });
}

function mergeRemoteIntoLocalLog(local, remote) {
  if (!local) return { data: remote, changed: true };
  const merged = { ...local };
  let changed = false;
  if (!merged.comment && remote.comment) { merged.comment = remote.comment; changed = true; }
  if (!merged.lens && remote.lens) { merged.lens = remote.lens; changed = true; }
  if (!merged.device && remote.device) { merged.device = remote.device; changed = true; }
  if ((!merged.proMemos || merged.proMemos.every(m=>!m)) && remote.proMemos?.some(m=>m)) {
    merged.proMemos = remote.proMemos; changed = true;
  }
  if (!merged.hasPhoto && remote.hasPhoto) { merged.hasPhoto = true; changed = true; }
  return { data: merged, changed };
}

function photoKeyFor(date, slot) {
  return slot === 'main' ? `main_${date}` : `pro${slot}_${date}`;
}

function photoFileNameFor(date, slot) {
  return photoKeyFor(date, slot) + '.bin';
}

function photoDateFromFileName(name) {
  return name.match(/^(?:main|pro\d)_(\d{4}-\d{2}-\d{2})\.bin$/)?.[1] || null;
}

function metaDateFromFileName(name) {
  return name.match(/^meta_(\d{4}-\d{2}-\d{2})\.json$/)?.[1] || null;
}

function xmlUnescape(s) {
  return (s || '')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function bytesToAscii(bytes) {
  let out = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    out += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return out;
}

function normalizeLensLabel(rawLens, rawDevice) {
  const s = ((rawLens || '') + ' ' + (rawDevice || '')).toLowerCase();
  if (s.includes('28-70')) return 'Sigma 28-70';
  if (s.includes('55-210')) return '55-210';
  if (s.includes('16-50')) return '16-50';
  if (s.includes('55mm')) return '55mm f2.8';
  if (s.includes('iphone') || s.includes('back camera')) return 'スマホ';
  return '';
}

async function inferCaptureInfoFromBlob(blob) {
  try {
    if (!blob) return null;
    const text = bytesToAscii(new Uint8Array(await blob.arrayBuffer()));
    const attr = name => xmlUnescape(text.match(new RegExp(name + '="([^"]+)"'))?.[1] || '');
    const rawLens = attr('aux:Lens') || attr('exifEX:LensModel') || attr('crs:Lens') || '';
    const deviceMatch = text.match(/iPhone\s+\d+(?:\s+Pro)?|ILCE-6400|SONY/);
    let device = deviceMatch ? deviceMatch[0] : '';
    if (device === 'SONY' && text.includes('ILCE-6400')) device = 'Sony α6400';
    if (device === 'ILCE-6400') device = 'Sony α6400';
    const lens = normalizeLensLabel(rawLens, device);
    return { lens, device, rawLens };
  } catch(e) {
    return null;
  }
}

async function restoreCloudPhotosForDate(date, remote, force, availablePhotoFiles = null) {
  const stats = { restored: 0, skipped: 0, failed: 0, mainFound: false, lens: '', device: '' };
  const slots = [];
  const shouldTry = slot => {
    if (!availablePhotoFiles) return slot === 'main' || remote.hasPhoto;
    return availablePhotoFiles.has(photoFileNameFor(date, slot));
  };
  if (shouldTry('main') || remote.hasPhoto) slots.push({ key: photoKeyFor(date, 'main'), slot: 'main' });
  for (let i = 0; i < 3; i++) {
    if (shouldTry(i)) slots.push({ key: photoKeyFor(date, i), slot: i });
  }

  for (const item of slots) {
    if (!force) {
      const local = await IDB.get(item.key);
      if (local) {
        if (item.slot === 'main') {
          stats.mainFound = true;
          const info = await inferCaptureInfoFromBlob(local);
          if (info) { stats.lens = info.lens || stats.lens; stats.device = info.device || stats.device; }
        }
        stats.skipped++;
        continue;
      }
    }
    const remotePhoto = await SB.fetchPhoto(date, item.slot);
    if (!remotePhoto) {
      if (item.slot === 'main' && remote.hasPhoto) stats.failed++;
      continue;
    }
    await IDB.set(item.key, remotePhoto.blob);
    if (item.slot === 'main') {
      stats.mainFound = true;
      const info = await inferCaptureInfoFromBlob(remotePhoto.blob);
      if (info) { stats.lens = info.lens || stats.lens; stats.device = info.device || stats.device; }
    }
    stats.restored++;
  }
  return stats;
}

async function restoreFromSupabase(options = {}) {
  const { forcePhotos = false, showMessage = false, refreshLog = true } = options;
  const msg = qs('#resync-msg');
  const btn = qs('#restore-cloud-btn');
  const resyncBtn = qs('#resync-photos-btn');
  const forceBtn = qs('#force-resync-photos-btn');

  if (showMessage) {
    btn.disabled = true;
    resyncBtn.disabled = true;
    forceBtn.disabled = true;
    msg.textContent = 'クラウドから復元中...';
  }

  const rows = await SB.fetchAll() || [];

  const photoKeys = await SB.listPhotoKeys();
  const availablePhotoFiles = photoKeys.length > 0 ? new Set(photoKeys) : null;
  const remoteLogsByDate = new Map();
  for (const row of rows) {
    if (!row.date) continue;
    const remote = normalizeRemoteLog(row);
    const existing = remoteLogsByDate.get(row.date);
    if (existing) {
      remoteLogsByDate.set(row.date, mergeRemoteIntoLocalLog(existing, remote).data);
    } else {
      remoteLogsByDate.set(row.date, remote);
    }
  }
  for (const key of photoKeys) {
    const date = photoDateFromFileName(key) || metaDateFromFileName(key);
    if (!date || remoteLogsByDate.has(date)) continue;
    remoteLogsByDate.set(date, {
      comment: '',
      lens: '',
      proMemos: [],
      hasPhoto: true,
    });
  }
  const mirroredMeta = await SB.getSetting('photo_log_meta_backup');
  if (mirroredMeta && mirroredMeta.meta && typeof mirroredMeta.meta === 'object') {
    for (const [date, data] of Object.entries(mirroredMeta.meta)) {
      const normalized = {
        comment: data.comment || '',
        lens: data.lens || '',
        device: data.device || '',
        proMemos: data.proMemos || [],
        hasPhoto: data.hasPhoto === true,
      };
      const existing = remoteLogsByDate.get(date);
      remoteLogsByDate.set(date, existing ? mergeRemoteIntoLocalLog(existing, normalized).data : normalized);
    }
  }

  const localMeta = LS.get('meta') || {};
  let metaChanged = false;
  let todayRestored = false;
  let restored = 0, skipped = 0, failed = 0;
  let storageOnlyLogs = 0;

  for (const [date, baseRemote] of remoteLogsByDate.entries()) {
    const metaBackup = await SB.fetchLogMeta(date);
    const remote = metaBackup ? mergeRemoteIntoLocalLog(baseRemote, metaBackup).data : baseRemote;
    if (!metaBackup && hasTextLogContent(remote)) SB.uploadLogMeta(date, remote);
    const local = localMeta[date];
    if (!rows.some(row => row.date === date)) storageOnlyLogs++;

    // 今日の編集中データだけは上書きしない。ただし履歴削除後の空状態なら復元する。
    if (date === state.today && hasLogContent(local)) {
      const photoStats = await restoreCloudPhotosForDate(date, remote, forcePhotos, availablePhotoFiles);
      restored += photoStats.restored; skipped += photoStats.skipped; failed += photoStats.failed;
      if (photoStats.mainFound && !localMeta[date].hasPhoto) {
        localMeta[date].hasPhoto = true;
        metaChanged = true;
        todayRestored = true;
      }
      if (photoStats.lens && !localMeta[date].lens) {
        localMeta[date].lens = photoStats.lens;
        metaChanged = true;
        todayRestored = true;
      }
      if (photoStats.device && !localMeta[date].device) {
        localMeta[date].device = photoStats.device;
        metaChanged = true;
        todayRestored = true;
      }
      continue;
    }

    const result = mergeRemoteIntoLocalLog(local, remote);
    localMeta[date] = result.data;
    if (result.changed) metaChanged = true;
    if (date === state.today && result.changed) todayRestored = true;

    const photoStats = await restoreCloudPhotosForDate(date, remote, forcePhotos, availablePhotoFiles);
    restored += photoStats.restored; skipped += photoStats.skipped; failed += photoStats.failed;
    if (photoStats.mainFound && !localMeta[date].hasPhoto) {
      localMeta[date].hasPhoto = true;
      metaChanged = true;
      if (date === state.today) todayRestored = true;
    }
    if (photoStats.lens && !localMeta[date].lens) {
      localMeta[date].lens = photoStats.lens;
      metaChanged = true;
      if (date === state.today) todayRestored = true;
    }
    if (photoStats.device && !localMeta[date].device) {
      localMeta[date].device = photoStats.device;
      metaChanged = true;
      if (date === state.today) todayRestored = true;
    }
  }

  if (metaChanged) {
    LS.set('meta', localMeta);
    for (const [date, data] of Object.entries(localMeta)) {
      if (hasLogContent(data)) SB.uploadLogMeta(date, data);
    }
    mirrorAllLogMetaToSettings();
    if (todayRestored) await initTodayData();
    renderProgressBanner();
  }

  if (refreshLog && state.tab === 'log') renderLog();

  if (showMessage) {
    msg.innerHTML = `復元完了: ログ ${rows.length + storageOnlyLogs}件を確認 / 写真 ${restored}件を復元 / ${skipped}件はすでに端末にあります / ${failed}件は未取得`;
    btn.disabled = false; resyncBtn.disabled = false; forceBtn.disabled = false;
  }
  setSyncHealth({
    lastLogBackupAt: new Date().toISOString(),
    lastLogBackupOk: failed === 0,
  });

  return { metaChanged, restored, skipped, failed };
}

// ── Supabase同期（起動時） ──────────────────────
async function syncFromSupabase(options = {}) {
  const result = await restoreFromSupabase({
    forcePhotos: options.forcePhotos === true,
    showMessage: false,
    refreshLog: options.refreshLog !== false,
  });
  state.lastLogSyncAt = Date.now();
  return result;
}

async function ensureCloudLogsFresh(force) {
  if (!force && state.lastLogSyncAt) return;
  if (state.logSyncPromise) return state.logSyncPromise;
  state.logSyncPromise = syncFromSupabase({ refreshLog: false })
    .then(result => {
      state.lastLogSyncAt = Date.now();
      return result;
    })
    .finally(() => { state.logSyncPromise = null; });
  return state.logSyncPromise;
}

// ── 起動時に今日の写真をSupabaseから取得（ローカルにない場合） ──
async function syncTodayPhotosFromSupabase() {
  const today = state.today;

  // 今日の写真
  const localPhoto = await IDB.get('main_' + today);
  if (!localPhoto) {
    const remote = await SB.fetchPhoto(today, 'main');
    if (remote) {
      const blob = remote.blob;
      await IDB.set('main_' + today, blob);
      if (state.photoObjUrl) URL.revokeObjectURL(state.photoObjUrl);
      state.photoObjUrl = URL.createObjectURL(blob);
      renderPhotoZone();
    }
  }

  // プロ研究画像
  for (let i = 0; i < 3; i++) {
    const localBlob = await IDB.get('pro' + i + '_' + today);
    if (!localBlob) {
      const remote = await SB.fetchPhoto(today, i);
      if (remote) {
        const blob = remote.blob;
        await IDB.set('pro' + i + '_' + today, blob);
        if (state.proObjUrls[i]) URL.revokeObjectURL(state.proObjUrls[i]);
        state.proObjUrls[i] = URL.createObjectURL(blob);
      }
    }
  }
  renderProGrid();
}

// ── 起動時にGAS連携URL・手動タスクをSupabaseから同期 ──
async function syncSettingsFromSupabase() {
  await syncClipsFromSupabase();

  const remoteExternalCompleted = await SB.getSetting('external_tasks_completed');
  if (Array.isArray(remoteExternalCompleted)) {
    const mergedCompleted = [...new Set([...getExternalCompletedTaskIds(), ...remoteExternalCompleted])].slice(-500);
    LS.set('external_tasks_completed', mergedCompleted);
    if (JSON.stringify(remoteExternalCompleted) !== JSON.stringify(mergedCompleted)) {
      SB.setSetting('external_tasks_completed', mergedCompleted);
    }
  } else {
    const localCompleted = getExternalCompletedTaskIds();
    if (localCompleted.length) SB.setSetting('external_tasks_completed', localCompleted);
  }

  const remoteTasksDone = await SB.getSetting('tasks_done');
  const localTasksDone = normalizeTaskDoneMap(state.tasksDone || LS.get('tasks_done') || {});
  if (remoteTasksDone && typeof remoteTasksDone === 'object' && !Array.isArray(remoteTasksDone)) {
    const mergedTasksDone = mergeTaskDoneMaps(remoteTasksDone, localTasksDone);
    state.tasksDone = mergedTasksDone;
    LS.set('tasks_done', mergedTasksDone);
    if (JSON.stringify(normalizeTaskDoneMap(remoteTasksDone)) !== JSON.stringify(mergedTasksDone)) {
      SB.setSetting('tasks_done', mergedTasksDone);
    }
  } else if (Object.keys(localTasksDone).length) {
    state.tasksDone = localTasksDone;
    LS.set('tasks_done', localTasksDone);
    SB.setSetting('tasks_done', localTasksDone);
  }

  const remoteInbox = await SB.getSetting('inbox_items');
  const localInbox = getInboxItems();
  if (Array.isArray(remoteInbox)) {
    const inboxMap = new Map();
    [...remoteInbox, ...localInbox].forEach(item => {
      const normalized = normalizeInboxItems([item])[0];
      if (!normalized) return;
      const prev = inboxMap.get(normalized.id);
      if (!prev || String(normalized.updatedAt || '') > String(prev.updatedAt || '')) inboxMap.set(normalized.id, normalized);
    });
    const mergedInbox = [...inboxMap.values()].sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt))).slice(-200);
    if (JSON.stringify(localInbox) !== JSON.stringify(mergedInbox)) {
      LS.set('inbox_items', mergedInbox);
      if (state.tab === 'today') renderCommandCenter();
    }
    if (JSON.stringify(remoteInbox) !== JSON.stringify(mergedInbox)) {
      SB.setSetting('inbox_items', mergedInbox);
    }
  } else if (localInbox.length) {
    SB.setSetting('inbox_items', localInbox);
  }

  const remoteTaskOverrides = await SB.getSetting('task_overrides');
  const localTaskOverrides = getTaskOverrides();
  if (remoteTaskOverrides && typeof remoteTaskOverrides === 'object' && !Array.isArray(remoteTaskOverrides)) {
    const mergedTaskOverrides = mergeTaskOverrideMaps(remoteTaskOverrides, localTaskOverrides);
    if (JSON.stringify(localTaskOverrides) !== JSON.stringify(mergedTaskOverrides)) {
      LS.set('task_overrides', mergedTaskOverrides);
    }
    if (JSON.stringify(normalizeTaskOverrideMap(remoteTaskOverrides)) !== JSON.stringify(mergedTaskOverrides)) {
      SB.setSetting('task_overrides', mergedTaskOverrides);
    }
  } else if (Object.keys(localTaskOverrides).length) {
    SB.setSetting('task_overrides', localTaskOverrides);
  }

  // GAS連携URL: リモートにあればローカルより優先（リモートが正の場合のみ上書き）
  const remoteUrl = await SB.getSetting('script_url');
  if (typeof remoteUrl === 'string' && remoteUrl) {
    if (remoteUrl !== state.scriptUrl) {
      state.scriptUrl = remoteUrl;
      LS.set('script_url', remoteUrl);
      syncTodoTasks(remoteUrl);
    }
  } else if (state.scriptUrl) {
    // ローカルにあるがリモートにない → リモートへ反映
    SB.setSetting('script_url', state.scriptUrl);
  }

  // 手動タスク: tombstone（削除済みID一覧）を考慮した正しいマージ
  // 1. リモートのタスクから「ローカルで削除済み」のものを除外
  // 2. ローカルにしかないタスクをリモートにマージ
  // 3. 結果をローカル・リモート両方に反映
  const remoteTasks = await SB.getSetting('manual_tasks');
  const localTasks = LS.get('manual_tasks') || [];
  const deletedIds = LS.get('manual_tasks_deleted') || [];

  if (Array.isArray(remoteTasks)) {
    const merged = mergeTaskListsById(remoteTasks, localTasks, deletedIds);

    // 内容に変化があればローカル・リモート両方を更新
    const localStr = JSON.stringify(localTasks);
    const mergedStr = JSON.stringify(merged);
    if (localStr !== mergedStr) {
      LS.set('manual_tasks', merged);
      if (state.tab === 'todo') renderTodo();
      if (state.tab === 'widget') renderTodoWidget();
    }
    // リモート側の内容（削除済みタスクが残っている等）が古ければ書き戻す
    const remoteStr = JSON.stringify(remoteTasks);
    if (remoteStr !== mergedStr) {
      await SB.setSetting('manual_tasks', merged);
    }
  } else if (localTasks.length > 0) {
    // リモートに何もない → ローカルをアップロード
    await SB.setSetting('manual_tasks', localTasks);
  }

  // ★ GAS由来のタスクキャッシュをSupabaseから取得（自分でSYNCしなくても他端末の結果が見える）
  // 自分の手元のキャッシュより新しければ採用する
  const remoteGasCache = await SB.getSetting('gas_tasks_cache');
  if (remoteGasCache && Array.isArray(remoteGasCache.tasks)) {
    const localCache = LS.get('tasks_cache');
    const remoteIsNewer = !localCache || !localCache.fetchedAt
      || new Date(remoteGasCache.fetchedAt) > new Date(localCache.fetchedAt);
    if (remoteIsNewer) {
      state.tasks = filterVisibleExternalTasks(remoteGasCache.tasks).map(applyTaskUserOverride);
      LS.set('tasks_cache', {...remoteGasCache, tasks: state.tasks});
      if (state.tab === 'todo') renderTodo();
      if (state.tab === 'widget') renderTodoWidget();
    }
  }
  scheduleTaskNotifications();
  scheduleDonePurgeForVisibleTasks();
  if (state.tab === 'today') renderCommandCenter();
}

// ── 初期化 ────────────────────────────────────
(function() {
  const cache = LS.get('tasks_cache');
  if (cache && cache.tasks) { state.tasks = filterVisibleExternalTasks(cache.tasks).map(applyTaskUserOverride); }
  setTimeout(() => scheduleDonePurgeForVisibleTasks(), 0);
})();

// ★ 日付変更を1分ごとに監視して、日付が変わったら今日タブをリセット
setInterval(() => {
  const newDate = getLocalDateStr();
  if (newDate !== state.today) {
    state.today = newDate;
    // 日付表示を更新
    const d = new Date();
    qs('#day-date').textContent = d.toLocaleDateString('ja-JP', {month:'long', day:'numeric'});
    qs('#day-weekday').textContent = d.toLocaleDateString('ja-JP', {weekday:'long'}).toUpperCase();
    // 今日のデータをリセット＆ロード
    initTodayData();
    renderProgressBanner();
    renderCommandCenter();
  }
}, 60000);

renderPlan();
initPickers();
initTodayData().then(() => {
  ensureCloudLogsFresh(true);
  syncTodayPhotosFromSupabase();
  syncSettingsFromSupabase();
  renderCommandCenter();
});
