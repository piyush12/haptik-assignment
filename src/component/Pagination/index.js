import React from "react";
import { useFreindList } from "../../context/FreindsContext";

import styles from "./Pagination.module.css";

function Pagination() {
  const { friendsList, currentPage, paginate, friendsPerPage } =
    useFreindList();

  const totalFriends = friendsList.length;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFriends / friendsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (totalFriends <= friendsPerPage) return null;
  return (
    <div className={styles.paginationContainer}>
      {pageNumbers.map((num) => (
        <button
          className={[
            styles.pageNum,
            currentPage === num ? styles.active : "",
          ].join(" ")}
          onClick={() => paginate(num)}
          key={num}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
