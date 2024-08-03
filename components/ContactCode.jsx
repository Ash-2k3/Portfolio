import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'ash.me.cse@gmail.com',
    href: 'mailto:ash.me.cse@gmail.com',
  },
  {
    social: 'github',
    link: 'Ash-2k3',
    href: 'https://github.com/Ash-2k3',
  },
  {
    social: 'linkedin',
    link: 'Ashwath2k3',
    href: 'https://www.linkedin.com/in/AshwathKannan2k3/',
  },
  {
    social: 'instagram',
    link: 'ashwath__kannan',
    href: 'https://www.instagram.com/ashwath__kannan',
  },
  {
    social: 'polywork',
    link: 'ashwath_kannan',
    href: 'https://www.polywork.com/ashwath_kannan',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
