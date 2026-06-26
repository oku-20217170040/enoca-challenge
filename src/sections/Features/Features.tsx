import React from 'react';
import Card from '../../components/Card/Card';
import styles from './Features.module.scss';

const features = [
  {
    icon: '⚡',
    title: 'Yüksek Performans',
    description: 'Optimize edilmiş altyapı ile milisaniyeler içinde yanıt. Lighthouse skoru 90+.',
  },
  {
    icon: '🎨',
    title: 'Tam Özelleştirme',
    description: 'CSS değişkenleri ile temanızı istediğiniz gibi şekillendirin. Light/Dark hazır.',
  },
  {
    icon: '♿',
    title: 'Erişilebilir',
    description: 'WCAG 2.1 AA uyumlu. Klavye navigasyonu, ekran okuyucu desteği tam.',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: '320px\'den 1440px\'e kadar kusursuz görünüm. Responsive grid sistemi.',
  },
  {
    icon: '🔒',
    title: 'Güvenli',
    description: 'Form doğrulama, XSS koruması. Güvenli giriş noktaları varsayılan.',
  },
  {
    icon: '🧩',
    title: 'Modüler Yapı',
    description: 'Bileşen tabanlı mimari. Her parçayı bağımsız kullanın, test edin, dağıtın.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.section} aria-labelledby="features-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="features-heading" className={styles.title}>Neden Bizi Seçmelisiniz?</h2>
          <p className={styles.subtitle}>
            İhtiyacınız olan her şey, tek bir platformda.
          </p>
        </div>

        {/* CSS Grid — otomatik sütun sayısı: 3'e kadar, yoksa 2, sonra 1 */}
        <div className={styles.grid} role="list">
          {features.map((feature) => (
            <div key={feature.title} role="listitem">
              <Card variant="default" padding="lg" className={styles.card}>
                <span className={styles.icon} aria-hidden="true">{feature.icon}</span>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
