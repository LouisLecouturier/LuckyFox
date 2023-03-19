import styles from "./Pole.module.scss";

import Wanted from "../Wanted/Wanted";

const Pole = ({ name, members }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>

      <div className={styles.listContainer}>
        <div className={styles.list}>
          {members.sort((a,b) => a.id < b.id).map((member) => {
            return (
              <Wanted
                key={member.id}
                id={member.id}
                name={member.name}
                position={member.role}
                text={member.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pole;
