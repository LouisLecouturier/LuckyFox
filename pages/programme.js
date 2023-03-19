import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import Hero from "../components/shared/Hero/Hero";

import Slideshow from "../components/Programmation/Slideshow";

import styles from "../styles/pages/Programmation.module.scss";
import Link from "next/link";
import Image from "next/image";

import BigArrow from "../assets/icons/bigArrow.svg";

import Head from "next/head";

const events = [
  {
    name: "Gala 2022-2023",
    image: "/images/events/desktopImage.webp",
    startDate: "11 janvier 20:00",
    endDate: "12 janvier 02:00",
    location: "Lille Grand Palais",
    address: "1 Boulevard des Cités Unies, 59777 Euralille, France",
    description:
      "Le gala annuel de la FGES est l'un des événements les plus attendus de l'année universitaire, réunissant étudiants, professeurs, anciens élèves et invités pour une soirée de célébration et de divertissement. Cette année, la soirée aura lieu au prestigieux Lille Grand Palais, offrant un cadre élégant et luxueux pour l'occasion.\n" +
      "Les invités pourront profiter d'une soirée remplie de musique entraînante, de jeux et de concours divertissants, ainsi que d'un délicieux apéritif dînatoire avec des mets raffinés et des boissons exquises. La décoration soigneusement choisie ajoutera une touche supplémentaire de glamour et de sophistication à l'événement.\n" +
      "Le gala est également l'occasion de rencontrer des professionnels de l'industrie, d'établir des contacts précieux pour votre future carrière et de réseauter avec des personnes partageant les mêmes intérêts. C'est donc un événement à ne pas manquer pour tous les étudiants désireux de célébrer leur année universitaire tout en élargissant leur réseau professionnel.\n" +
      "Le gala de la FGES est un événement incontournable de l'année universitaire, offrant une soirée inoubliable dans un cadre luxueux et sophistiqué au Lille Grand Palais. Alors, sortez vos plus beaux habits et préparez-vous à passer une soirée mémorable !",
    price: 15,
    guestPrice: 22.5,
    dressCode: "Chic 😎",
    notes:
      "Des navettes 🚌 circuleront toutes les demis heures (de 20:00 à 02:00) entre la FGES et Lille Grand Palais, les horaires sont consultables sur notre Instagram 😉",
  },
];

const Program = () => {
  return (
    <>
      <Head>
        <title>Lucky Fox | Programme</title>
      </Head>
      <Header />
      <Hero shadow={true} isProgram={true} title={"Programmation"} />
      <main>
        {events.length > 0 && <Slideshow events={events} />}

        <section className="dark section">
          <h2 className="sectionTitle">Événements à venir :</h2>
          <ul className={styles.eventList}>
            {events.length > 0 ? (
              events.map((event) => (
                <li className={styles.event} key={event.id}>
                  <Link href="/event" className={styles.eventImageContainer}>
                    <Image
                      alt={event.name}
                      unoptimized={true}
                      className={styles.eventImage}
                      src={event.image}
                      fill
                    />
                  </Link>
                  <div className={styles.eventContent}>
                    <Link href="/event" >
                      <h3 className={styles.eventName}>{event.name}</h3>
                    </Link>
                    <time
                      className={styles.eventDate}
                      dateTime={event.startDate}
                    >
                      {`Du ${event.startDate} au ${event.endDate}`}
                    </time>
                    <Link href="/event" className={styles.sectionLink}>
                      <span className="sectionLink">Voir les détails</span>
                      <BigArrow className={styles.arrow} />
                    </Link>
                  </div>
                </li>
              ))
            ) : (
              <li>
                <h3>
                  Pas d&apos;événements à venir pour le moment ! Revenez plus tard 😏
                </h3>
              </li>
            )}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Program;
