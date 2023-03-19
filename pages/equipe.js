import Head from "next/head";
import Header from "../components/shared/Header/Header";
import Hero from "../components/shared/Hero/Hero";

import Pole from "../components/Home/Pole/Pole";
import Footer from "../components/shared/Footer/Footer";

const poles = [
  {
    id: 1,
    name: "Bureau",
    members: [
      {
        id: 1,
        name: "Guy Liguili",
        role: "Président",
      },
      {
        id: 2,
        name: "Camille Onette",
        role: "Vice-Présidente",
      },
      {
        id: 3,
        name: "Alain Proviste",
        role: "Secrétaire",
      },
      {
        id: 4,
        name: "Sarah Croche",
        role: "Trésorière",
      },
    ],
  },
  {
    id: 2,
    name: "Pôle Communication",
    members: [
      {
        id: 1,
        name: "Marc Assin",
        role: "Responsable du pôle",
      },
      {
        id: 2,
        name: "Lucie Fer",
        role: "Responsable adjointe",
      },
      {
        id: 3,
        name: "Paul Hémique",
        role: "Membre",
      },
    ],
  },
  {
    id: 3,
    name: "Pôle Sponsors",
    members: [
      {
        id: 1,
        name: "Agathe Zeblouze",
        role: "Responsable du pôle",
      },
      {
        id: 2,
        name: "Guy Tare",
        role: "Responsable adjoint",
      },
    ],
  },
  {
    id: 3,
    name: "Pôle Event",
    members: [
      {
        id: 1,
        name: "Jean Bonbeur",
        role: "Responsable du pôle",
      },
      {
        id: 2,
        name: "Lili Coptère",
        role: "Responsable adjointe",
      },
    ],
  },
];

const Equipe = () => {
  return (
    <>
      <Head>
        <title>Lucky Fox | L&apos;équipe</title>
      </Head>
      <Header />

      <Hero title="L'équipe" />

      <main className="main">
        <section className="section dark">
          <h2 className="sectionTitle">Notre équipe</h2>
          <p>Découvrez notre équipe de cowboys et cowgirls prêts à vous organiser une année inoubliable !</p>
          {poles.map((pole) => {
            return (
              <Pole key={pole.id} name={pole.name} members={pole.members} />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Equipe;
