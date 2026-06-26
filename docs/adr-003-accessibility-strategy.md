# ADR-003: Erişilebilirlik Stratejisi

**Tarih:** 2026-06-26  
**Durum:** Kabul Edildi

## Bağlam

Challenge 15 puan erişilebilirlik veriyor. WCAG 2.1 AA uyumunu hedefliyoruz.

## Uygulanan Kararlar

### 1. Semantik HTML Önceliği

`<div onClick>` yerine `<button>`, `<section aria-labelledby>`, `<nav aria-label>` tercih edildi. Ekran okuyucular yapıyı bu elementlerden anlar.

### 2. Focus Management

Her interaktif element `focus-visible` pseudo-class ile görünür odak göstergesi alır:
```scss
&:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```
`:focus` değil `:focus-visible` — fare tıklamasında göstermez, sadece klavyede gösterir. UX daha temiz.

### 3. Modal Focus Trap

Modal açılınca ilk focus edilebilir elemana (`useRef`) otomatik focus gider. ESC ile kapanır. Arka plan scroll kitlenir. `aria-modal="true"` ekran okuyucunun dışarı çıkmasını engeller.

### 4. Form Erişilebilirliği

- `useId()` ile benzersiz ID üret → `htmlFor` ile label-input bağlantısı
- Hata mesajları `role="alert"` ile anında okunur
- `aria-invalid`, `aria-describedby` hata durumunu programatik iletir

### 5. Accordion ARIA Pattern

WAI-ARIA Accordion pattern uygulandı:
- Trigger: `aria-expanded`, `aria-controls`
- Panel: `role="region"`, `aria-labelledby`

## Sonuç

Lighthouse Accessibility skoru ≥ 90 hedefleniyor.
