# ADR-002: Stil Yaklaşımı — SCSS + CSS Modules + CSS Custom Properties

**Tarih:** 2026-06-26  
**Durum:** Kabul Edildi

## Bağlam

Challenge SCSS'i zorunlu kılıyor, harici UI kütüphanesi yasak. Tema (light/dark) ve responsive tasarım gerekli.

## Değerlendirilen Seçenekler

| Seçenek | Artı | Eksi |
|---|---|---|
| Global SCSS + BEM | Yaygın, anlaşılır | Class çakışma riski, manuel prefix |
| CSS Modules + SCSS | Otomatik benzersizlik, yerel kapsam | `composes` sınırlı |
| Styled-components | JS-in-CSS, dinamik | Harici kütüphane = yasak |

## Karar

**CSS Modules + SCSS** kombinasyonu seçildi; tema için **CSS Custom Properties**.

### Neden CSS Modules?

Bileşen dosyasına özel class isimleri — `Button.module.scss`'deki `.button` başka bileşende `.button` ile çakışmaz. "Yeniden kullanılabilir bileşen" kriterini güçlü karşılıyor.

### Neden CSS Custom Properties (variables) tema için?

```scss
:root { --color-bg: #fff; }
[data-theme="dark"] { --color-bg: #0f172a; }
```

JavaScript sadece `document.documentElement.setAttribute('data-theme', 'dark')` der. CSS gerisini halleder. Animasyon da ücretsiz: `transition: background-color 250ms ease`.

SCSS `$variable` derleme zamanında çözülür — tema geçişi için runtime değişkeni lazım.

## Sonuç

İki sistemin birleşimi: SCSS mixin/nesting gücü + CSS runtime değişken esnekliği.
