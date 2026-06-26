# Enoca Frontend Challenge — Mini Landing + Bileşen Kütüphanesi

Tek sayfalık ürün tanıtım landing sayfası ve yeniden kullanılabilir UI bileşen kütüphanesi.

## Canlı Demo

[enoca-challenge.vercel.app](https://enoca-challenge.vercel.app)

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusu başlat (http://localhost:5173)
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

## Mimari

```
src/
├── components/          # Yeniden kullanılabilir UI bileşenleri
│   ├── Accordion/       # SSS accordion (aria-expanded, keyboard nav)
│   ├── Button/          # Variant/size/loading destekli buton
│   ├── Card/            # Tıklanabilir/statik kart
│   ├── Input/           # Label + validasyon + hata mesajlı input
│   ├── Modal/           # Focus trap, ESC kapat, scroll lock
│   └── Navbar/          # Sticky header, hamburger menü, scroll shadow
├── sections/            # Landing page bölümleri
│   ├── Hero/            # Ana başlık, CTA, istatistikler
│   ├── Features/        # Özellik kartları grid
│   ├── Pricing/         # Aylık/Yıllık fiyat kartları
│   ├── FAQ/             # Accordion ile SSS
│   └── Contact/         # İletişim formu + Modal
├── hooks/
│   └── useTheme.ts      # Light/Dark tema, localStorage, prefers-color-scheme
└── styles/
    ├── _variables.scss  # CSS custom properties (tema token'ları)
    ├── _mixins.scss     # Breakpoint, flex, focus-ring mixin'leri
    └── global.scss      # Reset + base stiller
```

## Teknik Kararlar

Detaylar için bkz. [`/docs/`](./docs/) klasörü (ADR dosyaları).

| Karar | Seçim | Neden |
|---|---|---|
| Framework | React + TypeScript | Bileşen yapısı için ideal, TS props güvenliği sağlıyor |
| Build tool | Vite | Webpack'ten 10x hızlı HMR |
| Stil | SCSS + CSS Modules | Global çakışma yok, tema için CSS custom properties |
| Tema | CSS variables + data-theme | JS olmadan tema geçişi, animasyon desteği |
| Font | Inter (Google Fonts) | Yüksek okunurluk, Türkçe karakter desteği |

## Responsive Breakpoint'ler

| Breakpoint | Genişlik | Davranış |
|---|---|---|
| Mobile | ≤ 640px | Tek sütun, hamburger menü, basitleştirilmiş hero |
| Tablet | 641px – 1024px | 2 sütun grid, hamburger menü |
| Desktop | ≥ 1025px | 3 sütun grid, tam navigasyon |

## Erişilebilirlik

- Semantik HTML: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`
- Skip link: klavye kullanıcıları için "Ana içeriğe geç"
- `aria-expanded`, `aria-controls`, `aria-labelledby`, `aria-describedby` kullanımı
- `role="alert"` ile form hata mesajları ekran okuyucuya bildirilir
- Modal: focus trap, ESC kapatma, scroll kilidi
- Tüm interaktif elemanlar `focus-visible` ile görünür odak göstergesi

## Bileşen API'si

### Button
```tsx
<Button variant="primary" size="md" isLoading={false} fullWidth={false}>
  Tıkla
</Button>
```
`variant`: `primary | secondary | ghost | danger`  
`size`: `sm | md | lg`

### Input
```tsx
<Input
  label="E-posta"
  type="email"
  value={email}
  onChange={(v) => setEmail(v)}
  error="Geçersiz format"
  required
/>
```

### Modal
```tsx
<Modal isOpen={open} onClose={() => setOpen(false)} title="Başlık" size="md">
  <p>İçerik</p>
</Modal>
```

### Accordion
```tsx
<Accordion items={[{ id: '1', question: 'Soru?', answer: 'Cevap.' }]} allowMultiple={false} />
```

## Kod Standartları

- **Linting**: ESLint + Oxlint
- **Formatting**: Prettier (`singleQuote`, `semi`, `tabWidth: 2`)
- **Commits**: [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `style:`)
- **Branches**: `main` (production) → `dev` → `feat/*` / `fix/*`

## Lighthouse Hedefi

| Metrik | Hedef |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| SEO | ≥ 90 |

*(Ekran görüntüsü deploy sonrası eklenecek)*
