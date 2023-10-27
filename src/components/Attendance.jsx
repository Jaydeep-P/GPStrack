import { useEffect } from "react";
import { navPaths } from "../constants";
import styles from "./Attendance.module.css";
import Navbar from "./Navbar";
import GoogleMapReact from "google-map-react";

export default function Attendance({ navigation }) {
  const [url, setUrl] = navigation;

  const Dot = () => (
    <div
      style={{
        backgroundColor: "#f74444",
        width: "0.5rem",
        aspectRatio: "1/1",
        borderRadius: "100vh",
        border: "solid 1px #d03332",
        transform: "translate(-50%, -50%)",
      }}
    />
  );

  const Boundary = () => (
    <div
      style={{
        backgroundColor: "#1aa3e844",
        width: "10rem",
        aspectRatio: "1/1",
        borderRadius: "100vh",
        border: "solid 1px #1aa3e8",
        transform: "translate(-50%, -50%)",
      }}
    />
  );

  const defaultProps = {
    center: {
      lat: 13.033056,
      lng: 80.180272,
    },
    zoom: 18,
  };

  return (
    <div className={styles.page}>
      <Navbar
        back={() => {
          setUrl(navPaths.HOME);
        }}
      >
        Attendance
      </Navbar>
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.map}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <Boundary lat={13.033056} lng={80.180272} />
              <Dot lat={13.033056} lng={80.180272} />
            </GoogleMapReact>
          </div>
          <h1>Mark Your Attendance Here</h1>
          <button onClick={() => setUrl(navPaths.HOME)}>Mark Attendance</button>
        </div>
      </div>
    </div>
  );
}
