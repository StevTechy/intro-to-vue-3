const app = Vue.createApp({
    data() {
        return {
            product: 'Weed',
            description: 'This is a description',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.bbc.co.uk/news',
            inventory: 5,
            onSale: true
        }
    }
})