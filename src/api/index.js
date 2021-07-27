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

  async getData(data) {
    const { endpoint, page, id } = data;
    const concatUrl = page
      ? `${this.urls.base}${endpoint}${this.query.page}${page}`
      : id
      ? `${this.urls.base}${endpoint}/${id}`
      : `${this.urls.base}${endpoint}`;
    try {
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
    const fetchProps = {
      endpoint: this.endpoints.people,
      page,
    };

    const { next, previous, results } = await this.getData(fetchProps);
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

  async getPerson(id) {
    const fetchProps = {
      endpoint: this.endpoints.people,
      id,
    };
    try {
      const result = await this.getData(fetchProps);
      const image = this._getMedia({ endpoint: this.endpoints.characters, id });
      return { ...this._transformPersonData(result), image, id };
    } catch (error) {
      console.log(error);
    }
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

  async makeConcurrentRequest(urls) {
    const result = await Promise.all(urls.map((url) => fetch(url).then((response) => response.json())));

    return result.map(this._transformFilmData);
  }

  _getMedia({ endpoint, id }) {
    return `${this.urls.visualGuide}assets/img/${endpoint}/${id}.jpg`;
  }

  _transformFilmData(film) {
    const { episode_id: episode, title } = film;

    return { episode, title };
  }

  _transformPersonData(data) {
    const {
      height,
      mass,
      hair_color: hairColor,
      skin_color: skinColor,
      eye_color: eyeColor,
      birth_year: birthYear,
      gender,
      name,
      films,
    } = data;

    return {
      name,
      films,
      fields: [
        { label: "Height", data: height },
        { label: "Mass", data: mass },
        { label: "Hair Color", data: hairColor },
        { label: "Skin Color", data: skinColor },
        { label: "Eye Color", data: eyeColor },
        { label: "Birth Year", data: birthYear },
        { label: "Gender", data: gender },
      ],
    };
  }
}

export default new Api();
