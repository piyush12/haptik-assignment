import React from "react";

import styles from "./FreindsList.module.css";

export default function List({
  id,
  name,
  isFreind,
  addFavorite,
  isFavourite,
  deleteFriend,
}) {
  return (
    <li>
      <div className={styles.textContainer}>
        <div className={styles.name}>{name}</div>
        {isFreind && <div className={styles.description}>is your freind</div>}
      </div>

      <div className={styles.iconContainer}>
        <button className={styles.bookMark} onClick={() => addFavorite(id)}>
          {isFavourite ? (
            <img
              src="https://img.icons8.com/fluency/30/000000/filled-star.png"
              alt="BookMarked"
            />
          ) : (
            <img
              src="https://img.icons8.com/ios-filled/50/000000/star--v2.png"
              alt="Bookmark"
            />
          )}
        </button>
        <button className={styles.delete} onClick={() => deleteFriend(id)}>
          <img
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/fa314a/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  );
}
