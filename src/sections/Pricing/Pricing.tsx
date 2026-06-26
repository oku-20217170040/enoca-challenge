import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './Pricing.module.scss';

const plans = [
  {
    name: 'Başlangıç',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Küçük projeler için ideal başlangıç noktası.',
    features: ['5 Proje', '1GB Depolama', 'Temel Destek', 'API Erişimi'],
    cta: 'Ücretsiz Başla',
    variant: 'default' as const,
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 299,
    yearlyPrice: 249,
    description: 'Büyüyen takımlar için tam özellikli paket.',
    features: ['Sınırsız Proje', '50GB Depolama', 'Öncelikli Destek', 'Gelişmiş API', 'Analitik'],
    cta: 'Pro\'ya Geç',
    variant: 'highlighted' as const,
    highlighted: true,
    badge: 'En Popüler',
  },
  {
    name: 'Kurumsal',
    monthlyPrice: 999,
    yearlyPrice: 799,
    description: 'Büyük organizasyonlar için özel çözümler.',
    features: ['Her Şey Dahil', '1TB Depolama', '7/24 Destek', 'SLA Garantisi', 'Özel Entegrasyon'],
    cta: 'Satış Ekibiyle İletişim',
    variant: 'default' as const,
    highlighted: false,
  },
];

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className={styles.section} aria-labelledby="pricing-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="pricing-heading" className={styles.title}>Şeffaf Fiyatlandırma</h2>
          <p className={styles.subtitle}>Gizli ücret yok. İstediğin zaman iptal et.</p>

          {/* Yıllık/Aylık toggle */}
          <div className={styles.toggle} role="group" aria-label="Faturalama periyodu">
            <button
              className={`${styles.toggleBtn} ${!isYearly ? styles.toggleActive : ''}`}
              onClick={() => setIsYearly(false)}
              aria-pressed={!isYearly}
            >
              Aylık
            </button>
            <button
              className={`${styles.toggleBtn} ${isYearly ? styles.toggleActive : ''}`}
              onClick={() => setIsYearly(true)}
              aria-pressed={isYearly}
            >
              Yıllık
              <span className={styles.discount}>%17 İndirim</span>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.variant}
              padding="lg"
              className={styles.card}
              // data-badge CSS'te ::before content ile kullanılıyor
              {...(plan.badge ? { 'data-badge': plan.badge } : {})}
            >
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>

              <div className={styles.price}>
                <span className={styles.currency}>₺</span>
                <span className={styles.amount}>
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className={styles.period}>/ay</span>
              </div>

              <ul className={styles.features} aria-label={`${plan.name} planı özellikleri`}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span aria-hidden="true" className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                fullWidth
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
