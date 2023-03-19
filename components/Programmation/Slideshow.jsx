import { useEffect, useState } from "react";
import styles from "./Slideshow.module.scss";

import Image from "next/image";
import Link from "next/link";

import Arrow from "../../assets/icons/arrow.svg";

const Slideshow = ({ events }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const offset = {
    "--offset": selectedIndex * -100 + "%",
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      if (selectedIndex < events.slice(0, 3).length - 1) {
        setSelectedIndex(selectedIndex + 1);
      } else {
        setSelectedIndex(0);
      }
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [selectedIndex]);

  return (
    <>
      {events.length > 0 && (
        <div className={styles.container}>
          {events.length > 1 && (
            <>
              <Arrow
                onClick={() => {
                  if (selectedIndex !== 0) {
                    setSelectedIndex(selectedIndex - 1);
                  }
                }}
                className={`${styles.arrow} ${styles.leftArrow}`}
              />
              <Arrow
                onClick={() => {
                  if (selectedIndex < events.slice(0, 3).length - 1) {
                    setSelectedIndex(selectedIndex + 1);
                  } else {
                    setSelectedIndex(0);
                  }
                }}
                className={`${styles.arrow} ${styles.rightArrow}`}
              />
            </>
          )}
          {events.length > 1 && (
            <div className={styles.selectors}>
              {events.slice(0, 3).map((event, index) => {
                return (
                  <label
                    key={index}
                    htmlFor={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`${styles.radioControl} ${
                      selectedIndex === index && styles.checked
                    }`}
                  ></label>
                );
              })}
            </div>
          )}
          <div className={styles.slideshow}>
            {events.length > 1 && (
              <div className={styles.radios}>
                {events.slice(0, 3).map((event, index) => {
                  return (
                    <input
                      key={index}
                      type="radio"
                      name="slideshow"
                      id={index}
                      defaultChecked={index === 0}
                    />
                  );
                })}
              </div>
            )}

            {events.length > 0 &&
              events.map((event, index) => {
                return (
                  <Link
                    href="/event"
                    key={index}
                    className={`${styles.event}`}
                  >
                    <div className={styles.imageContainer}>
                      <div className={styles.desktopImgContainer}>
                        <Image
                          unoptimized={true}
                          className={styles.desktopImg}
                          alt={event.name}
                          fill
                          src={event.image}
                        />
                      </div>
                      <div className={styles.mobileImgContainer}>
                        <Image
                          unoptimized={true}
                          className={styles.mobileImg}
                          alt={event.name}
                          fill
                          src={event.image}
                        />
                      </div>
                    </div>
                    <div className={styles.content}>
                      <h3>{event.name}</h3>
                      <span>
                        {event.startDate === event.endDate
                          ? event.startDate
                          : `Du ${event.startDate} au ${event.endDate}`}{" "}
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Slideshow;
