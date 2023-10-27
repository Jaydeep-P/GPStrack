import { navPaths } from "../constants";
import styles from "./Schedule.module.css";
import Navbar from "./Navbar";

export default function Schedule({ navigation }) {
  const [url, setUrl] = navigation;

  return (
    <div className={styles.page}>
      <Navbar
        back={() => {
          setUrl(navPaths.HOME);
        }}
      >
        Schedule
      </Navbar>
      <div className={styles.content}>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto
          voluptas totam quam, quo odio atque, pariatur suscipit ullam quis
          molestiae officia aliquam ducimus numquam! Quam accusantium officiis,
          sint consectetur expedita pariatur corrupti itaque dolore unde totam
          vitae quasi alias minus optio veritatis sunt amet magnam libero neque
          repellendus molestiae? Modi quam veniam impedit similique quasi harum
          unde, odit ab! Nesciunt fugiat qui et pariatur harum facilis dicta.
          Eius mollitia voluptas molestiae, deleniti quidem illum beatae autem
          similique quia dicta numquam dignissimos repudiandae. Facere aliquid,
          ipsa minus cupidite voluptates? Suscipit beatae natus quaerat esse sed
          pariatur aliquid reiciendis expedita vero doloremque placeat velit
          error sit dolorum asperiores omnis dignissimos tempora voluptatibus
          officia minima, saepe dolores. Voluptate error porro repellendus fuga
          maiores, dolor id qui. Quisquam aspernatur repudiandae delectus
          consequatur nemo, eaque ratione voluptates rem dignissimos esse cum
          culpa veniam doloremque veritatis error beatae. Optio ut tenetur
          voluptatibus rem, laborum, labore perferendis modi voluptas, facere
          eos totam saepe! Impedit ullam reprehenderit laboriosam minus quasi
          mollitia tenetur? Tenetur minus officia laborum. Exercitationem
          aliquam quam incidunt nemo quae velit reiciendis optio culpa quidem
          blanditiis in, consequuntur, sed laborum? Quod, corrupti?
        </div>
      </div>
    </div>
  );
}
