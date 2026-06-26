import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import styles from './FAQ.module.scss';

const faqItems = [
  {
    id: 'faq-1',
    question: 'Ücretsiz plan ne kadar süre geçerli?',
    answer: 'Ücretsiz plan süresiz geçerlidir. Temel özellikler her zaman ücretsiz kalacak. Daha fazla depolama ve öncelikli destek için Pro plana geçebilirsiniz.',
  },
  {
    id: 'faq-2',
    question: 'Kredi kartı bilgisi vermem gerekiyor mu?',
    answer: 'Hayır, ücretsiz plana başlamak için kredi kartı gerekmez. Sadece e-posta adresinizle kayıt olabilirsiniz.',
  },
  {
    id: 'faq-3',
    question: 'İstediğim zaman iptal edebilir miyim?',
    answer: 'Evet, aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İptal sonrasında mevcut dönem sonuna kadar hizmet almaya devam edersiniz.',
  },
  {
    id: 'faq-4',
    question: 'Verilerimi nasıl koruyorsunuz?',
    answer: 'Tüm veriler AES-256 şifreleme ile korunur. ISO 27001 sertifikalı veri merkezlerinde barındırılır. KVKK ve GDPR uyumludur.',
  },
  {
    id: 'faq-5',
    question: 'Teknik destek sağlıyor musunuz?',
    answer: 'Ücretsiz plan için topluluk forumu ve dokümantasyon. Pro plan için e-posta desteği (iş saatleri). Kurumsal plan için 7/24 telefon ve e-posta desteği.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="faq-heading" className={styles.title}>Sıkça Sorulan Sorular</h2>
          <p className={styles.subtitle}>Aklınızdaki soruların cevapları burada.</p>
        </div>
        <div className={styles.content}>
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
