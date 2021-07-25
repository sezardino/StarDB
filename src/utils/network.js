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
    this.query = {
      page: "?page=",
    };

    this.messages = { error: "Could not fetch." };
  }

  async getData(url, page) {
    try {
      const concatUrl = page ? this.urls.base + url + this.query.page + page : this.urls.base + url;
      const response = await fetch(concatUrl);
      if (response.ok) {
        return await response.json();
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getPeople(page) {
    const { next, previous, results } = await this.getData(this.endpoints.people, page);
    const list = results.map((item) => {
      const { name, url } = item;

      const id = this._getIdFromUrl(url, this.endpoints.people);
      const image = this._getMedia({ endpoint: this.endpoints.characters, id });
      return { name, url, id, image };
    });

    return {
      list,
      next: this._getQueryValueFromUrl(next, this.endpoints.people, this.query.page),
      previous: this._getQueryValueFromUrl(previous, this.endpoints.people, this.query.page),
    };
  }

  _getIdFromUrl(url, endpoint) {
    const id = url.replace(this.urls.base + endpoint, "").replaceAll("/", "");
    return id;
  }

  _getQueryValueFromUrl(url, endpoint, query) {
    if (!url) {
      return null;
    }

    const id = url.replace(this.urls.base + endpoint + "/" + query, "");
    return id;
  }

  _getMedia({ endpoint, id }) {
    return `${this.urls.visualGuide}assets/img/${endpoint}/${id}.jpg`;
  }
}

export default new Api();
