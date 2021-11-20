import React from "react";
import { useFreindList } from "../../context/FreindsContext";

import TextField from "../TextField";
import styles from "./Search.module.css";

function Seearch() {
  const { setSearchFriend } = useFreindList();

  const handleChange = (event) => {
    setSearchFriend(event.target.value);
  };

  return (
    <div className={styles["search-panel"]}>
      <TextField placeholder="Search Freinds...." onChange={handleChange} />
    </div>
  );
}

export default Seearch;
