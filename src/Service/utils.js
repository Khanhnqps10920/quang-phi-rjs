export const CONFIG = {
  API_URL: "https://63573b7d2712d01e140435a9.mockapi.io/",
};

export const handleOpen = (sth, setSth) => {
  if (!sth) {
    setSth(true);
    return;
  }
  setSth(false);
};

export const handleActiveTab = (setActiveTab, id) => {
  setActiveTab(id);
};

export const handleActiveElement = (listActive, setListActive, id) => {
  const newListActive = [...listActive];
  const index = newListActive.findIndex((element) => {
    return element === id;
  });
  if (index !== -1) {
    newListActive.splice(index, 1);
    setListActive(newListActive);
    return;
  }
  newListActive.push(id);
  setListActive(newListActive);
};

export const checkElementActive = (listActive, id) => {
  const index = listActive.findIndex((element) => {
    return element === id;
  });
  if (index !== -1) return true;
};