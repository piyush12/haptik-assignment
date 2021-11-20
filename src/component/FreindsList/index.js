import React, { useState } from "react";
import { useFreindList } from "../../context/FreindsContext";
import Modal from "../Modal";

import styles from "./FreindsList.module.css";
import List from "./List";

function FreindList() {
  const [deleteId, setDeleteId] = useState("");
  const {
    currentItem,
    searchFreind,
    addFavorite,
    deleteFriend,
    isDeleteOpen,
    setDeleteModal,
  } = useFreindList();
  const newFreindList = currentItem.filter((freind) =>
    freind.name.toLowerCase().includes(searchFreind.toLowerCase())
  );

  const handleDeleteFriend = (id) => {
    setDeleteModal(true);
    setDeleteId(id);
  };

  const handleModalClose = () => {
    setDeleteModal(false);
  };

  const handleConfirm = () => {
    deleteFriend(deleteId);
  };

  const handleCancel = () => {
    setDeleteModal(false);
    setDeleteId("");
  };

  if(newFreindList.length <=0) return  <h3>No Friend Found</h3>

  return (
    <>
      <ul className={styles.frindListHolder}>
        {newFreindList.map((freinds) => (
          <List
            key={freinds.id}
            {...freinds}
            addFavorite={addFavorite}
            deleteFriend={handleDeleteFriend}
          />
        ))}
      </ul>

      <Modal
        isOpen={isDeleteOpen}
        heading="Confirm Delete"
        onClose={handleModalClose}
      >
        <div className={styles.modalButton}>
          <button onClick={handleCancel} className={styles.cancel}>
            Cancel
          </button>
          <button onClick={handleConfirm} className={styles.delete}>
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default FreindList;
