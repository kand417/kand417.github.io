# あんでぃのポートフォリオ

https://kand417.com/

個人開発したアプリを紹介するポートフォリオサイトです。[Astro](https://astro.build/) で作り、GitHub Pages で公開しています。

## 開発

パッケージ管理には [pnpm](https://pnpm.io/) を使います。

```sh
pnpm install     # 依存のインストール
pnpm dev         # 開発サーバーの起動
pnpm run build   # ビルド（astro check を含む）
pnpm preview     # ビルド結果の確認
```

main ブランチに push すると、GitHub Actions でビルドして GitHub Pages にデプロイします。

## ライセンス

このリポジトリはオープンソースではありません。ブログ記事・プロフィール・画像などのコンテンツと、このリポジトリで加えた変更の著作権はあんでぃ（kand417）にあり、無断での転載や再利用は許可していません。

サイトは、MIT License で公開されている Astro のテーマ [Astro Micro](https://github.com/trevortylerlee/astro-micro)（[Astro Nano](https://github.com/markhorn-dev/astro-nano) のフォーク）をもとにしています。Astro Micro と Astro Nano から引き継いだ部分は、それぞれの MIT License に従います。ライセンス文は [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) にあります。
