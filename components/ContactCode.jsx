import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "Email",
    link: "cyril.dettling10@gmail.com",
    href: "mailto:cyril.dettling10@gmail.com",
  },
  {
    social: "Discord",
    link: "ItzEmoji2",
    href: "https://discord.com/users/1123260870991020083",
  },
  {
    social: "GitHub",
    link: "ItzEmoji",
    href: "https://github.com/ItzEmoji",
  },
  {
    social: "Twitter",
    link: "ItzEmoji",
    href: "https://twitter.com/ItzEmojiHD",
  },
  {
    social: "LinkedIn",
    link: "Cyril Dettling",
    href: "https://www.linkedin.com/in/cyril-dettling-2544462b0/",
  },
  {
    social: "Website",
    link: "emoji.is-a-dev",
    href: "https://emoji.is-a.dev/",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        tag: <a>production</a>
      </p>
      <p className={styles.line}>
        <span>duckysolucky</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
