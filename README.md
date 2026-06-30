# Photo-tracker

## iPhoneで無料運用する現実ルート

無料でPCとiPhoneの両方から使う場合は、App Store配布ではなくPWAとして使います。

1. GitHub Pagesで `https://kmc2512-crypto.github.io/Photo-tracker/` を開く
2. iPhoneの共有ボタンから「ホーム画面に追加」
3. ホーム画面のPhoto Trackerから開く
4. 設定タブで通知を許可
5. Googleログインを使う場合は、Supabase側でGoogle Providerを有効化する

## Googleログインの管理画面設定

コード側にはSupabase AuthのGoogleログイン導線を入れています。
実際にログインするには、Supabase管理画面で次を設定します。

- Authentication > Providers > Google を有効化
- Google Cloud ConsoleでOAuth Clientを作成
- SupabaseのCallback URLをGoogle側のAuthorized redirect URIsに登録
- Site URLにGitHub PagesのURLを設定
- Redirect URLsに `https://kmc2512-crypto.github.io/Photo-tracker/` を追加

既存データはすぐに上書きせず、設定タブの「既存データを紐づけ」からバックアップ付きで移行準備を保存します。
