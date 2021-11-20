import React, { createContext, useContext, useState } from "react";

const FreindsContext = createContext(null);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomId() {
  return (
    getRandom(0, 50).toString(36).substring(2, 15) +
    getRandom(0, 50).toString(36).substring(2, 15)
  );
}

FreindsContext.displayName = "FreindsContext";

const initialState = [
  {
    id: getRandomId(),
    name: "Rahul Gupta",
    isFreind: true,
    isFavourite: false,
  },
  {
    id: getRandomId(),
    name: "Shivangi Sharma",
    isFreind: true,
    isFavourite: false,
  },
  {
    id: getRandomId(),
    name: "Akash Singh",
    isFreind: true,
    isFavourite: false,
  },
];

const friendsPerPage = 4;

const FreindsContextProvider = (props) => {
  const [friendsList, setFreindsList] = useState(initialState);
  const [searchFreind, setSearchFriend] = useState("");
  const [isOpen, setIsOpenModal] = useState(false);
  const [isDeleteOpen, setDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const addNewFriend = (friend) => {
    const newFriend = { id: getRandomId(), name: friend, isFreind: true,isFavourite: false, };
    setFreindsList((friend) => [...friend, newFriend]);
    setIsOpenModal(false);
  };

  const addFavorite = (id) => {
    friendsList.forEach((elem, index) => {
      if (elem.id === id) elem.isFavourite = !elem.isFavourite;
    });
    friendsList.sort((a, b) => b.isFavourite - a.isFavourite);
    setFreindsList([...friendsList]);
  };

  const deleteFriend = (id) => {
    const newFreind = friendsList.filter((friend) => friend.id !== id);
    setFreindsList([...newFreind]);
    setDeleteModal(false);
  };

  const indexOfLastItem = currentPage * friendsPerPage;
  const indexOfFirstItem = indexOfLastItem - friendsPerPage;
  const currentItem = friendsList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <FreindsContext.Provider
      value={{
        friendsList,
        setSearchFriend,
        searchFreind,
        addNewFriend,
        isOpen,
        setIsOpenModal,
        addFavorite,
        deleteFriend,
        setDeleteModal,
        isDeleteOpen,
        currentPage,
        currentItem,
        friendsPerPage,
        paginate
      }}
    >
      {props.children}
    </FreindsContext.Provider>
  );
};

function useFreindList() {
  const context = useContext(FreindsContext);

  if (!context) {
    throw new Error("Context must wrap in FreindsContextProvider");
  }

  return context;
}

export { FreindsContextProvider, FreindsContext, useFreindList };
