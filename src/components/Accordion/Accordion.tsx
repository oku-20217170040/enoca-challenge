import React, { useState } from 'react';
import styles from './Accordion.module.scss';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;   // birden fazla item aynı anda açık olabilir mi?
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  // Hangi item'ların açık olduğunu tutan state
  // Set kullanıyoruz çünkü birden fazla ID saklayabiliriz
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);          // açıksa kapat
      } else {
        if (!allowMultiple) next.clear();   // tek açık modu: önce hepsini kapat
        next.add(id);
      }
      return next;
    });
  };

  return (
    // role="list" + role="listitem" — ekran okuyucu yapıyı anlar
    <div className={styles.accordion} role="list">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const panelId = `panel-${item.id}`;
        const btnId = `btn-${item.id}`;

        return (
          <div key={item.id} className={styles.item} role="listitem">
            <h3 className={styles.heading}>
              {/* aria-expanded — ekran okuyucu açık/kapalı durumu bildirir */}
              {/* aria-controls — hangi paneli kontrol ettiği */}
              <button
                id={btnId}
                className={styles.trigger}
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span>{item.question}</span>
                <span
                  className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
            </h3>

            {/* aria-labelledby — panel başlığını butona bağlar */}
            {/* hidden — kapalıysa ekran okuyucu da okumaz */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
              hidden={!isOpen}
            >
              <div className={styles.panelInner}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
