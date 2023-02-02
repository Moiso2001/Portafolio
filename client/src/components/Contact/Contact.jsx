import {React, forwardRef} from 'react';

import styles from "./Contact.module.css"

function Contact({reference}) {
  return (
    <div ref={reference} className={styles.divGlobal}>
      <div className={styles.divTitle}>
        <h2 className={styles.title}>Contact Me</h2>
      </div>
      <div className={styles.divBody}>
        <div className={styles.divSocial}>
          <a href='https://www.linkedin.com/in/moises-platadev/' target='_blank' rel="noreferrer">
            <div className={styles.divLogo}>
              <img className={styles.img} src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='LinkedIn logo'/>
              <span className={styles.span}>LinkedIn</span>
            </div>
          </a>
          <a href='https://github.com/Moiso2001' target='_blank' rel="noreferrer">
            <div className={styles.divLogo}>
              <img className={styles.img} src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub logo'/>
              <span className={styles.span}>GitHub</span>
            </div>
          </a>
          <a href='https://wa.me/573209260621' target='_blank' rel="noreferrer">
            <div className={styles.divLogo}>
              <img className={styles.img} src='https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png' alt='Whatsapp logo'/>
              <span className={styles.span}>Whatsapp</span>
            </div>
          </a>
          <a href='https://t.me/Moiso2001' target='_blank' rel="noreferrer">
            <div className={styles.divLogo}>  
              <img className={styles.img} src='https://cdn.cdnlogo.com/logos/t/23/telegram.png' alt='Telegram logo'/>  
              <span className={styles.span}>Telegram</span>
            </div>
          </a>
        </div>
        <div className={styles.divForm}>
          <form action="https://formsubmit.co/moises.platadev@gmail.com" method="POST">
            <input className={styles.inpTopic} type="text" name="topic" placeholder="Topic"  required/>
            <input className={styles.inpEmail} type="email" name="email" placeholder='Your email' required/>
            <textarea className={styles.inpMessage} type="text" name="message" placeholder='Send me a message...' required/>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Contact);
  