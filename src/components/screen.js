class Screen {
  constructor() {
    this.getApiBtn = document.querySelector(".get-all-apis");
    this.getApiBtn.addEventListener("click", this.getJokeAndImage.bind(this));
  }

  async getJokeAndImage() {
    const randomImage = await new UnsplashApi().getRandomImage();

    const randomJoke = await new JokeApi().getRandomJoke();
    const apiResponse = {
      randomImage,
      randomJoke,
    };
    this.representUI(apiResponse);
  }

  representUI(apiResponse) {
    document.querySelector(".finall").innerHTML = ` <div class="card has-background-grey">
        <div class="card-image">
          <figure class="image is-16by9">
            <img
              src="${apiResponse.randomImage}"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 pb-4 has-text-white">
                ${apiResponse.randomJoke}
              </p>
            </div>
          </div>
        </div>
      </div>`;
  }
}
