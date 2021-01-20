class UnsplashApi {
    constructor(){
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID tVigldV2CgHChRHZJLNf4J2o548nEF1CVoJQ8WYXDeY'
        this.axiosInstance = axios.create({
            baseURL : this.baseURL,
            headers : {
                Authorization : this.clientID
            },
            params : {
                query: 'animal'
            }
        });
    }

    async getRandomImage(){
        try {
            const imageResponse = await this.axiosInstance.get('/photos/random')
            console.log(imageResponse.data.urls.regular);
            return imageResponse.data.urls.regular;
        }catch(error){
            console.log(error.response);
            return 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.vectorstock.com%2Fi%2F1000x1000%2F87%2F77%2Fwebsite-error-403-forbidden-artwork-depicts-a-vector-23988777.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fwebsite-error-403-forbidden-artwork-depicts-a-vector-23988777&tbnid=moXKcSglkwjq2M&vet=12ahUKEwjqyNyl1aruAhWF7qQKHdPECaMQMygKegUIARDNAQ..i&docid=N9mHnbOqQ5pBdM&w=1000&h=780&q=403%20error&ved=2ahUKEwjqyNyl1aruAhWF7qQKHdPECaMQMygKegUIARDNAQ'
        }
    }
}