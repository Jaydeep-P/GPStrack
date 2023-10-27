import styles from "./Intro.module.css";
export default function Intro({ userDetails }) {
  return (
    <div className={styles.intro}>
      <div className={styles.text}>
        <span className={styles.subtext}>Hello,</span>
        <span className={styles.name}>{userDetails?.name}</span>
        <span className={styles.subtext}>{userDetails?.id}</span>
        <span className={styles.subtext}>{userDetails?.group}</span>
      </div>
      <div className={styles.profilePicture}>
        <img
          src={userDetails?.profile}
          alt="profile picture"
          className={styles.profile}
        />
      </div>
    </div>
  );
}
