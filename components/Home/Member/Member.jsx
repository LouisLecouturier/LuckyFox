import styles from "./Member.module.scss";

import Close from "../../../assets/icons/close.svg";

import { useEffect, useState } from "react";
import Image from "next/image";

const Member = ({name, img, position, setIsShown}) => {
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handleClose = () => {
        document.body.style.overflow = "unset";
        setIsClosed(true);
        setTimeout(() => {
            setIsShown(false);
        }, 500);
    };

    return (
        <article className={`${styles.container} ${isClosed && styles.hidden}`}>
            <header className={styles.header}>
                <h1 className={styles.wanted}>WANTED</h1>
            </header>
            <div className={styles.imgContainer}>
                {img && (
                    <Image
                        src={img}
                        className={styles.image}
                        alt={name}
                        fill
                    />
                )}
            </div>
            <article className={styles.content}>
                <Close className={styles.close} onClick={handleClose}/>
                <header className={styles.contentHeader}>
                    <h2 className={styles.name}>{name}</h2>
                    <h3 className={styles.position}>{position}</h3>
                </header>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Mus
                    mauris vitae ultricies leo. Accumsan lacus vel facilisis volutpat est velit
                    egestas. Turpis egestas integer eget aliquet nibh praesent tristique magna.
                    Eget velit aliquet sagittis id consectetur purus ut. At ultrices mi tempus
                    imperdiet nulla. Varius morbi enim nunc faucibus a pellentesque sit amet.
                    Neque gravida in fermentum et sollicitudin ac orci phasellus egestas.
                    Phasellus egestas tellus rutrum tellus.
                    Sollicitudin nibh sit amet commodo nulla facilisi. Mattis molestie a iaculis
                    at. Tempor commodo ullamcorper a lacus vestibulum. Id donec ultrices
                    tincidunt arcu non sodales. Volutpat consequat mauris nunc congue nisi vitae
                    suscipit. Mauris commodo quis imperdiet massa tincidunt. Mauris vitae
                    ultricies leo integer malesuada nunc vel risus commodo. Ipsum consequat nisl
                    vel pretium lectus quam id leo. Eu turpis egestas pretium aenean pharetra
                    magna ac. Turpis tincidunt id aliquet risus feugiat in. Neque ornare aenean
                    euismod elementum nisi quis eleifend. Quis commodo odio aenean sed
                    adipiscing diam donec. At volutpat diam ut venenatis tellus in metus
                    vulputate eu. Ut sem viverra aliquet eget sit amet tellus.</p>
            </article>
        </article>
    );
};

export default Member;
