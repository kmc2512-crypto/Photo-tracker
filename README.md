# Photo-tracker

## iPhoneで無料運用する現実ルート

無料でPCとiPhoneの両方から使う場合は、App Store配布ではなくPWAとして使います。

1. GitHub Pagesで `https://kmc2512-crypto.github.io/Photo-tracker/` を開く
2. iPhoneの共有ボタンから「ホーム画面に追加」
3. ホーム画面のPhoto Trackerから開く
4. 設定タブで通知を許可
5. 設定タブでPCとiPhoneに同じ同期キーを入れる

## 同期キー方式

Google Cloud Consoleを使えない場合は、同期キー方式でPCとiPhoneのデータをそろえます。

1. メイン端末で設定タブを開く
2. 自分だけが分かる同期キーを入力して「設定」
3. 現在のTodo・クリップ・設定・写真ログ文字情報が、その同期キー用に保存される
4. 別端末で同じ同期キーを入力して「復元」

同期キーは他人に見せないでください。キーを知っている端末は同じ保存先を使えます。
写真本体はSupabase Storage、Todo・クリップ・設定・写真ログ文字情報はSupabase settingsに保存します。
