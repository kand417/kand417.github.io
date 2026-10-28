# AGENTS.md

- パッケージ管理には pnpm を使う（バージョンは `package.json` の `packageManager` で固定）。`npm install` などで `package-lock.json` を作らないこと。
- 依存の追加: `pnpm add <pkg>`、ビルド確認: `pnpm run build`（`astro check` を含む）。
- インストールスクリプトを実行する依存は `pnpm-workspace.yaml` の `allowBuilds` で許可する。

## デザイン

- ページの追加や、色・フォント・余白・アニメーションなど見た目に関わる変更は、`DESIGN.md` に従う。
- デザインの方針を変えたときは、`DESIGN.md` も合わせて更新する。

## 運用ルール

- ユーザーとの会話は日本語で行う。
- ブランチ名には対応する issue 番号を含める（例: `chore/3-update-dependencies`）。
- ユーザーの指示に出てくる「イシュー」は GitHub の issue を指す。AI の回答では「issue」と書いてよい。
