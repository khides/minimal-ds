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

## 注意事項

このライブラリは教育・学習目的で作成されました。商用利用は想定していません。

## ライセンス

MIT
