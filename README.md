# @khides/minimal-ds

ミニマルでクリーンなReact UIコンポーネントライブラリです。

## 特徴

- モダンでクリーンなデザイン
- Tailwind CSSベース
- TypeScript対応
- Storybook付属

## インストール

```bash
pnpm add @khides/minimal-ds
```

## 使用方法

```tsx
import { Button, HeroSection, ProductCard, NavHeader, Footer } from '@khides/minimal-ds'
import '@khides/minimal-ds/styles'

function App() {
  return (
    <>
      <NavHeader />
      <main>
        <HeroSection
          title="Welcome"
          tagline="Modern UI components"
          primaryAction={{ label: 'Learn more', href: '/docs' }}
        />
        <ProductCard
          title="Product"
          tagline="Description here"
          primaryAction={{ label: 'View', href: '/product' }}
        />
      </main>
      <Footer />
    </>
  )
}
```

## コンポーネント

| コンポーネント | 説明 |
|--------------|------|
| `Button` | CTAボタン（primary, secondary, link variants） |
| `NavHeader` | ナビゲーションバー |
| `HeroSection` | メインプロモーションセクション |
| `ProductCard` | 製品紹介カード |
| `Footer` | フッターセクション |

## 開発

```bash
# 依存関係のインストール
pnpm install

# Storybookを起動
pnpm dev

# ビルド
pnpm build:all

# 型チェック
pnpm typecheck

# リント
pnpm lint
```

## Storybook

```bash
pnpm dev
```

http://localhost:6006 でStorybookが起動します。

## リリース

このプロジェクトは[release-please](https://github.com/googleapis/release-please)を使用して自動リリースを行います。

### コミットメッセージ規約

[Conventional Commits](https://www.conventionalcommits.org/)形式に従ってください。コミットメッセージのprefixによってバージョンが自動決定されます。

| Prefix | バージョン変更 | 例 |
|--------|--------------|-----|
| `feat:` | Minor (0.1.0 → 0.2.0) | `feat: add Tooltip component` |
| `fix:` | Patch (0.1.0 → 0.1.1) | `fix: resolve button hover state` |
| `feat!:` | Major (0.1.0 → 1.0.0) | `feat!: redesign component API` |
| `docs:` | リリースなし | `docs: update README` |
| `chore:` | リリースなし | `chore: update dependencies` |
| `style:` | リリースなし | `style: format code` |
| `refactor:` | リリースなし | `refactor: simplify logic` |
| `test:` | リリースなし | `test: add unit tests` |

### リリースフロー

1. Conventional Commitsでコード変更をcommit & push
2. release-pleaseがRelease PRを自動作成
3. Release PRをマージ
4. 自動でタグ作成 & GitHub Packagesに公開

## 注意事項

このライブラリは教育・学習目的で作成されました。商用利用は想定していません。

## ライセンス

MIT
