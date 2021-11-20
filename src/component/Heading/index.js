import React, { useState } from "react";
import { useFreindList } from "../../context/FreindsContext";
import Modal from "../Modal";
import TextField from "../TextField";

import styles from "./Heading.module.css";

function Heading() {
  const { addNewFriend, isOpen, setIsOpenModal } = useFreindList();
  const [error, setError] = useState("");

  const handleAddFriend = (event) => {
    if (event.code === "Enter") {
      if (!event.target.value) {
        setError("please add friend");
        return;
      }
      addNewFriend(event.target.value);
      setError("");
    }
  };

  const showAddFriendModal = () => {
    setIsOpenModal(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={styles.heading}>
      <h1>Freinds list</h1>
      <button onClick={showAddFriendModal}>+ Add Friend</button>

      <Modal
        isOpen={isOpen}
        heading="Add New Friend"
        onClose={handleModalClose}
      >
        <TextField
          placeholder="Add friend"
          onKeyPress={handleAddFriend}
          isFocus={true}
        />
        {error && <p className={styles.error}>{error}</p>}
      </Modal>
    </div>
  );
}

export default Heading;
