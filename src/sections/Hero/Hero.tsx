import React from 'react';
import Button from '../../components/Button/Button';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    // <section> — semantik HTML, ekran okuyucu bölüm olarak tanır
    // aria-labelledby — bu section'ın başlığı h1
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="container">
        <div className={styles.content}>
          <span className={styles.badge} aria-label="Yeni özellik">
            ✦ Yeni Nesil Çözüm
          </span>

          <h1 id="hero-heading" className={styles.title}>
            Ürününüzü{' '}
            <span className={styles.highlight}>Dünyaya</span>{' '}
            Tanıtın
          </h1>

          <p className={styles.description}>
            Modern arayüz, güçlü altyapı. İşinizi bir üst seviyeye taşıyacak
            araçlar bir arada. Hızlı kur, kolayca özelleştir.
          </p>

          <div className={styles.actions}>
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Hemen Başla
            </Button>
            <Button size="lg" variant="secondary" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              Özellikleri Gör
            </Button>
          </div>

          <div className={styles.stats} role="list" aria-label="İstatistikler">
            {[
              { value: '10K+', label: 'Aktif Kullanıcı' },
              { value: '99.9%', label: 'Uptime' },
              { value: '4.9★', label: 'Ortalama Puan' },
            ].map((stat) => (
              <div key={stat.label} className={styles.stat} role="listitem">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          {/* Gerçek projede buraya ürün görseli/animasyon gelir */}
          <div className={styles.mockup}>
            <div className={styles.mockupBar}>
              <span /><span /><span />
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.mockupLine} style={{ width: '70%' }} />
              <div className={styles.mockupLine} style={{ width: '50%' }} />
              <div className={styles.mockupLine} style={{ width: '85%' }} />
              <div className={styles.mockupBlock} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
