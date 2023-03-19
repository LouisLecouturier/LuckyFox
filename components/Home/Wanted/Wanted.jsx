import styles from "./Wanted.module.scss";

import Poster from "../../../assets/misc/poster.svg";

import useSound from "use-sound";
import { useState } from "react";
import Member from "../Member/Member";
import Image from "next/image";

const Wanted = ({ id, name, position, text }) => {
  const [isShown, setIsShown] = useState(null);

  const [first] = useSound("/sounds/first.mp3", {
    volume: 0.25,
  });
  const [second] = useSound("/sounds/second.mp3", {
    volume: 0.25,
  });
  const [third] = useSound("/sounds/third.mp3", {
    volume: 0.25,
  });
  const [fourth] = useSound("/sounds/fourth.mp3", {
    volume: 0.25,
  });
  const [fifth] = useSound("/sounds/fifth.mp3", {
    volume: 0.25,
  });

  const handleClick = () => {
    setIsShown(true);
    const array = [first, second, third, fourth, fifth];
    const sound = array[Math.floor(Math.random() * array.length)];

    sound();
  };


  const [animation, setAnimation] = useState(false);


  return (
    <>
      {isShown && (
        <Member
          name={name}
          img={`/${id}.webp`}
          position={position}
          text={text}
          setIsShown={setIsShown}
        />
      )}
      <div
        className={`${styles.thumbnailContainer} ${
          animation && styles.animate
        }`}
        onMouseEnter={() => setAnimation(true)}
        onAnimationEnd={() => setAnimation(false)}
        onClick={() => handleClick()}
      >
        <article className={styles.thumbnail}>
          <Poster className={styles.background} />
          <h2 className={styles.wanted}>WANTED</h2>
          <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={`/${id}.webp`}
                alt={name}
                fill
              />
          </div>
          <div className={styles.thumbnailContent}>
            <span className={styles.thumbnailName}>{name && name}</span>
            <span className={styles.thumbnailText}>{position && position}</span>
          </div>
        </article>
      </div>
    </>
  );
};

export default Wanted;
