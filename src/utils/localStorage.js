class LS {
  constructor() {
    this.keys = {
      favorites: "favorites",
    };
  }

  setItems(data, key) {
    const dataString = JSON.stringify(data);
    console.log(dataString);
    localStorage.setItem(key, dataString);
  }

  getItems(key) {
    const dataJson = localStorage.getItem(key);

    return JSON.parse(dataJson);
  }

  setFavorites(data) {
    this.setItems(data, this.keys.favorites);
  }

  getFavorites() {
    this.getItems(this.keys.favorites);
  }
}

export default new LS();
