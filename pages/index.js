import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "../components/shared/Header/Header";

import styles from "../styles/pages/Home.module.scss";

import BigArrow from "../assets/icons/bigArrow.svg";

import Hero from "../components/shared/Hero/Hero";
import Footer from "../components/shared/Footer/Footer";

import teamImage from "../public/images/home/team.webp";
import partnersImage from "../public/images/home/partners.webp";
import eventsImage from "../public/images/home/events.webp";

export default function Home() {
    return (<div>
        <Head>
            <title>Lucky Fox</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header/>

        <Hero
            title={"Lucky Fox"}
            text={"Liste BDE FGES 2022-2023"}
            isIndex={true}
        />

        <main className="main">
            <section className="section">
                <h2 className={`sectionTitle ${styles.mobileTitle}`}>Événements</h2>
                <div className="sectionRow">
                    <div className={"sectionContent"}>
                        <h2 className={`sectionTitle ${styles.desktopTitle}`}>
                            Événements
                        </h2>
                        <div className={"sectionText"}>
                            <p className={styles.paragraph}>
                                Notre équipe
                                de <strong>cowboys</strong> et <strong>cowgirls</strong> passionnés
                                a travaillé dur{" "}
                                pour créer une programmation variée qui reflète notre
                                esprit{" "}
                                d&apos;<strong>aventure</strong> et de{" "}
                                <strong>convivialité</strong>.
                            </p>
                            <p className={styles.paragraph}>
                                Que vous cherchiez à participer à un{" "}
                                <strong>Afterwork</strong>, à un{" "}
                                <strong>tournoi sportif</strong> ou à une journée de{" "}
                                <strong>bénévolat</strong>, nous avons quelque chose
                                pour{" "}

                                vous. Consultez notre <strong>calendrier
                                d&apos;événements</strong>{" "}
                                pour découvrir toutes les activités passionnantes que
                                nous{" "}
                                avons en réserve pour vous.
                            </p>
                            <p className={styles.paragraph}>
                                Alors, préparez votre chapeau de cowboy
                                et <strong>rejoignez-nous</strong> pour
                                une année remplie de souvenirs mémorables !
                            </p>
                        </div>
                        <Link href="/programme" className={styles.sectionLink}>
                            <span className="sectionLink">Voir les événements</span>
                            <BigArrow className={styles.arrow}/>
                        </Link>
                    </div>
                    <div className={styles.sectionImgContainer}>
                        <Image
                            className={styles.sectionImg}
                            src={eventsImage}
                            alt={"Événements"}
                        />
                    </div>
                </div>
            </section>
            <section className="section dark">
                <h2 className={`sectionTitle ${styles.mobileTitle}`}>Notre équipe</h2>
                <div className="sectionRow">
                    <div className={styles.sectionImgContainer}>
                        <Image
                            className={styles.sectionImg}
                            src={teamImage}
                            alt={"Équipe FGES"}
                        />
                    </div>
                    <div className={"sectionContent"}>
                        <h2 className={`sectionTitle ${styles.desktopTitle}`}>
                            Notre équipe
                        </h2>
                        <div className={"sectionText"}>
                            <p className={styles.paragraph}>
                                Nous sommes fiers de
                                travailler <strong>ensemble</strong> pour offrir à nos{" "}
                                étudiants des événements <strong>mémorables</strong> et une
                                expérience{" "}
                                étudiante <strong>inoubliable</strong>.
                            </p>
                            <p className={styles.paragraph}>
                                Vous pourrez en apprendre davantage sur chaque membre de
                                notre{" "}
                                équipe, leur rôle au sein de <strong>Lucky Fox</strong> et
                                leur passion pour le{" "}
                                Far West.
                            </p>{" "}
                            <p className={styles.paragraph}>
                                Rejoignez-nous pour une <strong>aventure</strong> sauvage
                                remplie de <strong>souvenirs</strong>{" "}
                                mémorables !
                            </p>
                        </div>
                        <Link href="/equipe" className={styles.sectionLink}>
                            <span className="sectionLink">Voir notre équipe</span>
                            <BigArrow className={styles.arrow}/>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="section">
                <h2 className={`sectionTitle ${styles.mobileTitle}`}>
                    Nos partenaires
                </h2>
                <div className="sectionRow">
                    <div className={"sectionContent"}>
                        <h2 className={`sectionTitle ${styles.desktopTitle}`}>
                            Nos partenaires
                        </h2>

                        <div className={"sectionText"}>
                            <p className={styles.paragraph}>
                                Découvrez nos <strong>sponsors</strong> ! Grâce à eux, nous
                                pouvons offrir des{" "}
                                <strong>avantages exclusifs</strong> aux étudiants comme
                                des <strong>réductions</strong> et des{" "}
                                <strong>événements</strong> incroyables.
                            </p>
                            <p className={styles.paragraph}>
                                Ces entreprises et organisations
                                nous <strong>soutiennent</strong> pour créer{" "}
                                une expérience étudiante inoubliable.
                            </p>
                            <p className={styles.paragraph}>

                                Jetez un coup d&apos;œil à nos sponsors et
                                leur <strong>contribution</strong> à la{" "}
                                vie étudiante de notre université.
                            </p>
                        </div>

                        <Link href="/partenaires" className={styles.sectionLink}>
                            <span className="sectionLink">Voir nos partenaires</span>
                            <BigArrow className={styles.arrow}/>
                        </Link>
                    </div>
                    <div className={styles.sectionImgContainer}>
                        <Image
                            className={styles.sectionImg}
                            src={partnersImage}
                            alt={"Partenaires"}
                        />
                    </div>
                </div>
            </section>
        </main>
        <Footer dark={true}/>
    </div>);
}
