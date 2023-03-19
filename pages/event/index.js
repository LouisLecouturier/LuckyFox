import Image from "next/image";
import Header from "../../components/shared/Header/Header";

import styles from "../../styles/pages/Event.module.scss";

import Footer from "../../components/shared/Footer/Footer";
import Head from "next/head";

const data = {
  name: "Gala 2022-2023",
  image: "/images/events/desktopImage.webp",
  startDate: "11 janvier 20:00",
  endDate: "12 janvier 02:00",
  location: "Lille Grand Palais",
  address: "1 Boulevard des Cités Unies, 59777 Euralille, France",
  price: "15€",
  guestPrice: "22,5€",
  dressCode: "Chic 😎",
  notes:
    "Des navettes 🚌 circuleront toutes les demis heures (de 20:00 à 02:00) entre la FGES et Lille Grand Palais, les horaires sont consultables sur notre Instagram 😉",
};

const Event = () => {
  return (
    <>
      <Head>
        <title>Lucky Fox | {data.name}</title>
      </Head>
      <Header />
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <div className={styles.mobileImageContainer}>
            <Image
              unoptimized={true}
              className={styles.image}
              fill
              src={data.image}
              alt={data.name}
            />
          </div>
          <div className={styles.desktopImageContainer}>
            <Image
              unoptimized={true}
              className={styles.image}
              fill
              src={data.image}
              alt={data.name}
            />
          </div>
        </div>
      </div>
      <main>
        <section className="section dark">
          <h1 className={`sectionTitle ${styles.name}`}>{data.name}</h1>
          <div className={styles.eventSection}>
            <h3 className={styles.date}>
              {`Du ${data.startDate} au ${data.endDate}`} - {data.location}
            </h3>
          </div>
          {data.address && (
            <div className={styles.eventSection}>
              <h3>Adresse</h3>
              <p>{data.address}</p>
            </div>
          )}

          <div className={styles.eventSection}>
            <h3>Description</h3>
            <p>
              Le Gala annuel de la FGES est l'un des événements les plus
              attendus de l'année universitaire, réunissant étudiants,
              professeurs, anciens élèves et invités pour une soirée de
              célébration et de divertissement.
            </p>
            <p>
              Cette année, la soirée aura lieu au prestigieux Lille Grand
              Palais, offrant un cadre élégant et luxueux pour l'occasion. Les
              invités pourront profiter d'une soirée remplie de musique
              entraînante, de jeux et de concours divertissants, ainsi que d'un
              délicieux apéritif dînatoire avec des mets raffinés et des
              boissons exquises. La décoration soigneusement choisie ajoutera
              une touche supplémentaire de glamour et de sophistication à
              l'événement.
            </p>
            <p>
              C'est donc un événement à ne pas manquer pour tous les étudiants
              désireux de célébrer leur année universitaire tout en élargissant
              leur réseau professionnel. En somme, le gala annuel de la FGES est
              un événement incontournable de l'année universitaire, offrant une
              soirée inoubliable dans un cadre luxueux et sophistiqué au Lille
              Grand Palais.{" "}
            </p>
            <p>
              Alors, sortez vos plus beaux habits et préparez-vous à passer une
              soirée mémorable !
            </p>
          </div>

          {data.price && (
            <div className={`row ${styles.eventSection}`}>
              {data.price && (
                <div>
                  <h3>Prix</h3>
                  <p>{data.price}</p>{" "}
                </div>
              )}
              {data.guestPrice && (
                <div>
                  <h3>Prix Non-FGES</h3>
                  <p>{data.guestPrice}</p>
                </div>
              )}
            </div>
          )}
          {data.dressCode && (
            <div className={styles.eventSection}>
              <h3>Dress code</h3>
              <p>{data.dressCode}</p>
            </div>
          )}
          {data.notes && (
            <div className={styles.eventSection}>
              <h3>Notes</h3>
              <p>{data.notes}</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Event;
