import styles from "./Collaborator.module.scss";

import useClickedOutside from "../../hooks/useClickOutside";
import { useEffect } from "react";
import Image from "next/image";
import Close from "../../assets/icons/close.svg";
import collaborator from "./Collaborator";

const Collaborator = ({
  name,
  logoURL,
  field,
  description,
  advantages,
  setCollaborator,
}) => {
  const { target, button, isShown, setIsShown } = useClickedOutside(true);



  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {document.body.style.overflow = "unset"};
  }, []);

  const handleClose = () => {
    document.body.style.overflow = "unset";
    setIsShown(false);
  };

  const handleAnimationEnd = () => {
    if (collaborator && !isShown) {
      setCollaborator(false);
    }
  };

  return (
    <div
      ref={target}
      className={`${styles.container} ${!isShown && styles.vanish}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles.closeContainer}>
        <div className={styles.headClose}>
          <Close className={styles.close} onClick={() => handleClose()} />
        </div>
        <article className={styles.popup}>
          <div ref={button}></div>
          <header className={styles.header}>
            <div className={styles.logo}>
              <Image fill src={logoURL} alt={name} />
            </div>

            <div className={styles.headerContent}>
              <h2>{name}</h2>
              <p>{field}</p>
            </div>
          </header>
          <p className={styles.description}>{description}</p>

          {advantages && (
            <div className={styles.advantages}>
              <h2>Tes avantages :</h2>
              <p>{advantages}</p>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default Collaborator;
