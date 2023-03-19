import Image from "next/image";
import useSound from "use-sound";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./Hero.module.scss";

import Mouse from "../../../assets/icons/mouse.svg";
import Sound from "../../../assets/icons/sound.svg";

import logo from "../../../public/images/logo/logoMin.webp";
import heroImg from "../../..//public/images/hero/hero.webp";
import cactus1 from "../../../public/images/hero/cactus1.webp";
import cactus2 from "../../../public/images/hero/cactus2.webp";

const handleMove = (e, background, cactus1, cactus2) => {
  const x = e.clientX;
  const y = e.clientY;

  if (background && cactus1 && cactus2) {
    window.requestAnimationFrame(() => {
      background.style.translate = `${-x / 32 + "px"} ${-y / 24 + "px"}`;
      cactus1.style.translate = `${x / 16 + "px"} ${
        y / 8 + "px"
      }`;
      cactus2.style.translate = `${x / 10 + "px"} ${
        y / 16 + "px"
      }`;
    });
  }
};

const Hero = ({ shadow, title, text, isIndex, isProgram }) => {
  const [playSound, { stop }] = useSound("/sounds/onloadSound.mp3", {
    volume: 0.25,
  });

  const [loaded, setLoaded] = useState(false);

  const isDesktop = useMediaQuery({ query: "(min-width:768px)" });

  const backgroundRef = useRef(null);
  const cactusOneRef = useRef(null);
  const cactusTwoRef = useRef(null);

  const play = () => {
    stop();
    playSound();
  };

  useEffect(() => {
    if (isDesktop) {
      document.addEventListener("mousemove", (e) =>
        handleMove(
          e,
          backgroundRef.current,
          cactusOneRef.current,
          cactusTwoRef.current
        )
      );
    }
    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, [isDesktop]);

  return (
    <section className={styles.hero}>
      <Image
        ref={backgroundRef}
        src={heroImg}
        unoptimized={true}
        priority
        className={styles.heroImg}
        onLoadingComplete={() => setLoaded(true)}
        alt={"Paysage Far-West"}
      />

      {isIndex && loaded && (
        <>
          <div
            ref={cactusOneRef}
            className={`${styles.cactusContainer} ${styles.a}`}
          >
            <Image className={styles.cactus} src={cactus1} alt={"cactus"} priority/>
          </div>
          <div
            ref={cactusTwoRef}
            className={`${styles.cactusContainer} ${styles.b}`}
          >
            <Image className={styles.cactus} src={cactus2} alt={"cactus"} priority/>
          </div>
        </>
      )}
      <div className={styles.heroContainer}>
        {shadow && <div className={styles.shadow}></div>}
        {loaded && (
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.textContainer}>
                <h1
                  className={`${styles.heroTitle} ${
                    isProgram && styles.program
                  }`}
                >
                  {title}
                </h1>
              </div>
              {text && (
                <div className={styles.textContainer}>
                  <h2 className={styles.heroSubTitle}>{text}</h2>
                </div>
              )}
            </div>
            {isIndex && (
              <div className={styles.logoContainer}>
                <Image
                  src={logo}
                  unoptimized={true}
                  priority
                  alt={"Logo Lucky-Fox"}
                  className={styles.logo}
                />
              </div>
            )}
          </div>
        )}
        <div className={styles.heroShadow}></div>
        {isIndex && loaded && (
          <Sound onClick={() => play()} className={styles.soundIcon} />
        )}
        {loaded && <Mouse className={styles.mouse} />}
      </div>
    </section>
  );
};

export default Hero;
