import { navPaths } from "../constants";
import styles from "./HistoryPage.module.css";
import Navbar from "./Navbar";

export default function HistoryPage({ navigation }) {
  const [url, setUrl] = navigation;

  return (
    <div className={styles.page}>
      <Navbar
        back={() => {
          setUrl(navPaths.HOME);
        }}
      >
        History
      </Navbar>
      <div className={styles.content}>
        <ol>
          {new Array(10).fill(1).map((el, ind) => {
            return (
              <li>
                <div className={styles.listItem}>
                  <div>{ind % 2 == 0 ? "Present" : "Absent"}</div>
                  <div>{30 - ind}/9/2023</div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
