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
      page: "page",
      search: "search",
    };

    this.messages = { error: "Could not fetch." };
  }

  async getData(data) {
    const { endpoint, id, query, value } = data;

    let url;
    if (query) {
      url = `${this.urls.base}${endpoint}?${query}=${value}`;
    } else if (id) {
      url = `${this.urls.base}${endpoint}/${id}`;
    } else {
      url = `${this.urls.base}${endpoint}`;
    }

    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();

        return {
          ...result,
          previous: result.previous?.split("page=")[1] || null,
          next: result.next?.split("page=")[1] || null,
        };
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getPeople(value) {
    const fetchProps = {
      endpoint: this.endpoints.people,
      query: this.query.page,
      value,
    };

    const res = await this.getData(fetchProps);
    console.log(res);
    const { next, previous, results } = res;
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

  async getPeopleSearch(value) {
    const fetchProps = {
      endpoint: this.endpoints.people,
      query: this.query.search,
      value,
    };

    const data = await this.getData(fetchProps);

    const list = data.results.map((item) => {
      const { name, url } = item;

      const id = this._getIdFromUrl(url, this.endpoints.people);
      const image = this._getMedia({ endpoint: this.endpoints.characters, id });
      return { name, id, image };
    });

    return list;
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
