class JokeApi {
  constructor() {
    this.baseURL = "https://api.chucknorris.io";
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }
  async getRandomJoke() {
    try {
      const jokeResponse = await this.axiosInstance.get("/jokes/random");
      console.log(jokeResponse.data.value);
      return jokeResponse.data.value;
    } catch (error) {
      console.log(error.response);
    }
  }
}
