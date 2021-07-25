class Api {
  constructor() {
    this.protocol = {
      https: "https://",
      http: "http://",
    };
    this.urls = {
      base: `${this.protocol.https}swapi.dev/api/`,
      visualGuide: `${this.protocol.https}starwars-visualguide.com/`,
    };
    this.endpoints = {
      people: "people",
      characters: "characters",
    };

    this.messages = { error: "Could not fetch." };
  }

  async getData(url) {
    try {
      const response = await fetch(this.urls.base + url);
      if (response.ok) {
        return await response.json();
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getPeople() {
    const data = await this.getData(this.endpoints.people);
    const formattedData = data.results.map((item) => {
      const { name, url } = item;

      const id = this._getIdFromUrl(url, this.endpoints.people);
      const image = this._getMedia({ endpoint: this.endpoints.characters, id });

      return { name, url, id, image };
    });

    return formattedData;
  }

  _getIdFromUrl(url, endpoint) {
    const id = url.replace(this.urls.base + endpoint, "").replaceAll("/", "");
    return id;
  }

  _getMedia({ endpoint, id }) {
    return `${this.urls.visualGuide}assets/img/${endpoint}/${id}.jpg`;
  }
}

export default new Api();
