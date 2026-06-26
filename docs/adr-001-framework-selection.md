# ADR-001: Framework Seçimi — React + TypeScript

**Tarih:** 2026-06-26  
**Durum:** Kabul Edildi

## Bağlam

Challenge üç seçenek sunuyor: Vite + Vanilla TS, React veya Angular.

## Değerlendirilen Seçenekler

| Seçenek | Artı | Eksi |
|---|---|---|
| Vanilla TS | Sıfır overhead, tam kontrol | Bileşen yaşam döngüsü manuel, 4 günde yavaş |
| React | Bileşen ekosistemi, hooks, CSS Modules doğal | Küçük bundle overhead |
| Angular | Güçlü DI, full framework | 4 günde boilerplate yükü, overkill |

## Karar

**React + TypeScript** seçildi.

- Bileşen props'larını TypeScript interface ile tanımlamak, challange'ın "props ile yapılandırılabilir" kriterini doğrudan karşılıyor.
- `useId`, `useRef`, `useEffect` hook'ları Modal ve Input erişilebilirlik gereksinimlerini temiz çözüyor.
- CSS Modules React ile birinci sınıf destek — BEM alternatifine göre otomatik benzersiz class isimleri.

## Sonuç

4 iş günü içinde tam kapsamlı, okunabilir ve test edilebilir kod üretilebilir.
