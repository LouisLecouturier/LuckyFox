import Head from "next/head";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";

import styles from "../styles/pages/Contact.module.scss";

const poles = [
  {
    name: "Le bureau",
    contacts: [
      {
        name: "Guy Liguili",
        role: "Président",
        email: "someEmail@domain.com",
      },
      {
        name: "Camille Onette",
        role: "Vice-Président",
        email: "someOtherEmail@domain.com",
      },
    ],
  },
  {
    name: "Pôles",
    contacts: [
      {
        name: "Agathe Zeblouse",
        role: "Responsable Sponsors",
        email: "someEmail@domain.com",
      },
      {
        name: "Marc Assin",
        role: "Responsable Communication",
        email: "someOtherEmail@domain.com",
      },
    ],
  },
];

const Contact = () => {
  return (
    <>
      <Head>
        <title>Lucky Fox | Contact</title>
      </Head>
      <Header />
      <section className="section dark">
        <div className={"sectionContent"}>
          <h2 className="sectionTitle">Contact</h2>
          <div className={styles.row}>
            {poles &&
              poles.map((pole) => (
                <div className={styles.contact} key={pole.name}>
                  <h2>{pole.name}</h2>
                  <div className={styles.members}>
                    {pole.contacts.map((contact) => (
                      <div key={contact.name}>
                        <h4>
                          {contact.name} | {contact.role}
                        </h4>
                        <span>{contact.email}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
