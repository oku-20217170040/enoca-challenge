import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Card from '../../components/Card/Card';
import styles from './Contact.module.scss';

// Form state tipi
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Hata state tipi — her alan için opsiyonel hata
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // E-posta format kontrolü — challenge'ın istediği "basit e-posta format kontrolü"
  const validateEmail = (email: string): boolean => {
    // RFC 5322 basit versiyonu: bir şey @ bir şey . bir şey
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Ad alanı boş bırakılamaz.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'E-posta alanı boş bırakılamaz.';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi girin. Örnek: ad@domain.com';
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Konu alanı boş bırakılamaz.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Mesaj alanı boş bırakılamaz.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;   // hata yoksa true dön
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();   // sayfanın yenilenmesini engelle

    if (!validate()) return;

    setIsLoading(true);

    // Yalancı submit — gerçek API olmadığı için 1.5sn bekleyip başarı gösteriyoruz
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setShowSuccess(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.header}>
          <h2 id="contact-heading" className={styles.title}>İletişime Geçin</h2>
          <p className={styles.subtitle}>Sorularınız için buradayız. 24 saat içinde yanıt veriyoruz.</p>
        </div>

        <div className={styles.layout}>
          <Card variant="elevated" padding="lg" className={styles.formCard}>
            {/* noValidate — browser validasyonunu kapatıyoruz, kendi validasyonumuzu kullanıyoruz */}
            <form onSubmit={handleSubmit} noValidate aria-label="İletişim formu">
              <div className={styles.row}>
                <Input
                  label="Adınız"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                  required
                  placeholder="Ahmet Yılmaz"
                />
                <Input
                  label="E-posta"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  error={errors.email}
                  required
                  placeholder="ahmet@ornek.com"
                />
              </div>
              <Input
                label="Konu"
                value={form.subject}
                onChange={(v) => setForm({ ...form, subject: v })}
                error={errors.subject}
                required
                placeholder="Nasıl yardımcı olabiliriz?"
              />
              <Input
                label="Mesajınız"
                type="textarea"
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                error={errors.message}
                required
                rows={5}
                placeholder="Detayları paylaşın..."
              />
              <div className={styles.submitRow}>
                <Button type="submit" size="lg" isLoading={isLoading} fullWidth>
                  {isLoading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </Button>
              </div>
            </form>
          </Card>

          <div className={styles.info}>
            {[
              { icon: '📧', label: 'E-posta', value: 'info@enoca.com' },
              { icon: '📍', label: 'Adres', value: 'Şehit Fethi Sk. No:49/6, Acıbadem Üsküdar İstanbul' },
              { icon: '📞', label: 'Telefon', value: '+90 533 369 07 99' },
            ].map((item) => (
              <Card key={item.label} variant="outline" padding="md" className={styles.infoCard}>
                <span className={styles.infoIcon} aria-hidden="true">{item.icon}</span>
                <div>
                  <strong className={styles.infoLabel}>{item.label}</strong>
                  <p className={styles.infoValue}>{item.value}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Başarı modal'ı */}
      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Mesajınız Alındı!"
        size="sm"
      >
        <div className={styles.successContent}>
          <span className={styles.successIcon} aria-hidden="true">🎉</span>
          <p>Teşekkürler! En kısa sürede size dönüş yapacağız.</p>
          <Button onClick={() => setShowSuccess(false)}>Tamam</Button>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;
