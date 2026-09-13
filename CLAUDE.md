# CLAUDE.md

このファイルは、Claude Code がこのリポジトリで作業する際に従うべきガイドラインを記載したものです。

## プロジェクト概要

task-board プロジェクト。React 製のシンプルなタスク管理アプリ。

- テキスト入力でタスクを追加
- チェックボックスで完了・未完了を切り替え
- 各タスクに期限を設定
- タスクは期限が近い順に並び、完了タスクはグレー表示で未完了タスクより後ろに並ぶ

## 技術スタック

- **フレームワーク**: React 19（関数コンポーネント + Hooks のみ、クラスコンポーネントは使わない）
- **ビルドツール**: Vite
- **Lint**: oxlint（`npm run lint`）
- **スタイリング**: 素の CSS（`App.css` / `index.css`）。CSS-in-JS や Tailwind などのライブラリは導入していない
- **状態管理**: React の `useState` / `useEffect` のみ。外部の状態管理ライブラリ（Redux 等）は未導入
- **永続化**: ブラウザの `localStorage`（バックエンド API は無し）
- **デプロイ**: GitHub Actions（`.github/workflows/deploy.yml`）が `main` ブランチへの push をトリガーにビルドし、GitHub Pages へ自動デプロイ

## デプロイ先

https://ishi-2609.github.io/task-board/

`main` ブランチに push すると GitHub Actions が自動でビルド・デプロイを行う。手動でのデプロイ作業は不要。

## コンポーネントの命名規約

- コンポーネントは 1 ファイル 1 コンポーネントとし、ファイル名はコンポーネント名と一致させる（例: `TaskForm.jsx` → `TaskForm`）
- ファイル名・コンポーネント名は **PascalCase**、拡張子は `.jsx`
- コンポーネントは `src/components/` に配置する（`App.jsx` はルートのため `src/` 直下）
- 各コンポーネントは `function ComponentName(props) { ... }` の形で定義し、`export default` する
- props はできる限り分割代入で受け取る（例: `function TaskItem({ task, onToggle })`）
- イベントハンドラを親から渡す props は `onXxx`（例: `onAdd`, `onToggle`）、コンポーネント内のハンドラ関数は `handleXxx`（例: `handleSubmit`）と命名する
- スタイルは対応する CSS クラス名を **kebab-case** で付ける（例: `.task-item`, `.task-form`）。グローバルなトークン（色・フォント等）は `index.css` の CSS カスタムプロパティ（`--text` 等）を利用する

## Git運用ルール

- **コードを変更したら、その都度 GitHub にプッシュすること。** 変更を作業ツリーに残したまま次の作業に進まない。
- 変更内容ごとに意味のある単位でコミットを作成する（機能追加・修正・リファクタなどをまとめすぎない）。
- コミットメッセージは変更の「why（目的）」が分かるように書く。
- コミット後、`git push` を実行してリモート（GitHub）に反映する。まだリモートやブランチの追跡設定がない場合は `git push -u origin <branch>` で設定する。
- push前に `git status` で意図しないファイル（secrets、大きなバイナリなど）が含まれていないか確認する。
- force push（`--push --force` 等）や履行済みコミットの書き換えは、明示的な指示がない限り行わない。
- 作業前に `git pull` 等でリモートの最新状態を取り込み、コンフリクトが起きた場合は解消してからコミット・プッシュする。

## 開発時の心構え

- 既存のコードスタイル・命名規則に合わせる。
- タスクに必要な範囲を超えたリファクタや機能追加は行わない。
- 変更を加えたら、可能な範囲でビルド・テスト・型チェックを実行して確認する。
