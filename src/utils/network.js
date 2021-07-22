class Api {
    constructor() {
        this.base = "https://swapi.dev/api/";
        this.urls = {
            people: "people",
        };
        this.messages = { error: "Could not fetch." };
    }

    async getData() {
        try {
            const response = await fetch(this.base + this.urls.people);
            if (response.ok) {
                return await response.json();
            } else {
                console.error(this.messages.error);
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default new Api();
