# AGENTS.md

- パッケージ管理には pnpm を使う（バージョンは `package.json` の `packageManager` で固定）。`npm install` などで `package-lock.json` を作らないこと。
- 依存の追加: `pnpm add <pkg>`、ビルド確認: `pnpm run build`（`astro check` を含む）。
- インストールスクリプトを実行する依存は `pnpm-workspace.yaml` の `allowBuilds` で許可する。
