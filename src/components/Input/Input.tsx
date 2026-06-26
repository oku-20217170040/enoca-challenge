import React, { useId } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'textarea';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;       // hata mesajı varsa kırmızı göster
  required?: boolean;
  disabled?: boolean;
  rows?: number;        // textarea için
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  rows = 4,
}) => {
  // useId — React 18'de eklendi, her render'da benzersiz ID üretir
  // label ile input'u bağlamak için (erişilebilirlik: label tıklayınca input focus olur)
  const id = useId();

  const commonProps = {
    id,
    value,
    placeholder,
    disabled,
    required,
    'aria-invalid': !!error,           // hata varsa ekran okuyucu bildirir
    'aria-describedby': error ? `${id}-error` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    className: `${styles.field} ${error ? styles.fieldError : ''}`,
  };

  return (
    <div className={styles.wrapper}>
      {/* htmlFor = label'ın hangi input'a ait olduğu — erişilebilirlik şart */}
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.required} aria-hidden="true"> *</span>}
      </label>

      {type === 'textarea' ? (
        <textarea {...commonProps} rows={rows} />
      ) : (
        <input {...commonProps} type={type} />
      )}

      {/* Hata mesajı — id ile aria-describedby bağlantısı kuruldu */}
      {error && (
        <p id={`${id}-error`} className={styles.errorMsg} role="alert">
          {/* role="alert" — ekran okuyucu hata çıkınca hemen okur */}
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
