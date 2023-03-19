import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

import Instagram from "../../../assets/icons/socials/instagram.svg";
import Facebook from "../../../assets/icons/socials/facebook.svg";
import Tiktok from "../../../assets/icons/socials/tiktok.svg";

import Logo from "../../../public/images/logo/logoMin.webp";

const Footer = ({ dark }) => {
  return (
    <footer
      className={`${styles.footer} ${dark && "dark"} ${dark && styles.dark}`}
    >
      <div className={styles.upperFooter}>
        <div className={styles.left}>
          <div>
              <Image src={Logo} alt={"logo Lucky-Fox"} className={styles.logo}/>
            <div className={styles.mobileSocials}>
              <a href="https://www.instagram.com/bdeluckyfox/">
                <Instagram className={styles.social} />
              </a>
              <a href="https://www.facebook.com/BDE-Luckyfox-105332795461345">
                <Facebook className={styles.social} />
              </a>

              <a href="/https://www.tiktok.com/@bdeluckyfox">
                <Tiktok className={styles.social} />
              </a>
            </div>
          </div>
          <div className={`${styles.section} ${styles.navigate}`}>
            <h2 className={styles.title}>Naviguer</h2>
            <nav className={styles.nav}>
              <Link href="/" className={styles.footerLink}>
               Accueil
              </Link>
              <Link href="/programme" className={styles.footerLink}>
                Programme
              </Link>

              <Link href="/equipe" className={styles.footerLink}>
                Équipes
              </Link>

              <Link href="/partenaires" className={styles.footerLink}>
                Partenaires
              </Link>
              <Link href="/contact" className={styles.footerLink}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className={`${styles.section} ${styles.follow}`}>
          <h2 className={styles.title}>Nous suivre</h2>
          <nav className={styles.socials}>
            <a href="https://www.instagram.com/bdeluckyfox/">
              <Instagram className={styles.social} />
            </a>
            <a href="https://www.facebook.com/BDE-Luckyfox-105332795461345">
              <Facebook className={styles.social} />
            </a>

            <a href="https://www.tiktok.com/@bdeluckyfox">
              <Tiktok className={styles.social} />
            </a>
          </nav>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>Lucky Fox™ - 2022 Tous droits réservés</span>
        <span>
          Site réalisé par&nbsp;
          <a
            className={styles.bottomLink}
            href="https://www.linkedin.com/in/louis-lecouturier-21b90b204/"
          >
            Louis Lecouturier
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
