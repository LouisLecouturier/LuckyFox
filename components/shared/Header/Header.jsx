import styles from "./Header.module.scss";

import useClickedOutside from "../../../hooks/useClickOutside";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/logo/logoMin.webp";

const Header = () => {
  const { target, button, isShown, setIsShown } = useClickedOutside();
  return (
    <div
      className={`${styles.headerContainer} ${
        isShown && styles.mobileNavIsShown
      }`}
    >
      <div className={styles.headerShadow}></div>
      <header className={styles.header}>
        <div
          ref={button}
          onClick={() => setIsShown(!isShown)}
          className={`${styles.hamburger} ${isShown && styles.checked}`}
        >
          <div className={styles.firstDiagonal}></div>
          <div className={styles.lastDiagonal}></div>
          <div className={styles.firstLine}></div>
          <div className={styles.secondLine}></div>
          <div className={styles.thirdLine}></div>
        </div>

        <nav className={styles.desktopNav}>
          <ul>
            <li>
              <Link href="/" className={styles.headerLink}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/programme" className={styles.headerLink}>
                Programme
              </Link>
            </li>
            <li>
              <Link href="/equipe" className={styles.headerLink}>
                Équipes
              </Link>
            </li>
            <li>
              <Link href="/partenaires" className={styles.headerLink}>
                Partenaires
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.headerLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

          <Link href={"/"} className={styles.headerRight}>

          <Image
            className={styles.headerLogo}
            src={logo}
            alt={"Lucky-Fox Logo"}
            unoptimized
            priority
          />

          <h2 className={styles.headerLogoText} ref={target}>
            Lucky Fox
          </h2>
          </Link>
      </header>
      <div
        ref={target}
        className={`${styles.mobileNavContainer} ${
          isShown && styles.mobileNavIsShown
        }`}
      >
        <nav className={styles.mobileNav}>
          <Link href="/" className={styles.headerLink}>
            Accueil
          </Link>
          <Link href="/programme" className={styles.headerLink}>
            Programme
          </Link>

          <Link href="/equipe" className={styles.headerLink}>
            Équipes
          </Link>

          <Link href="/partenaires" className={styles.headerLink}>
            Partenaires
          </Link>
          <Link href="/contact" className={styles.headerLink}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
