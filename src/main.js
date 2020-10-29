const app = Vue.createApp({
    data() {
        return {
            product: 'Weed',
            description: 'This is a description',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.bbc.co.uk/news',
            inventory: 5,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: '2234', colour: 'green' },
                { id: '2235', colour: 'blue' }
            ],
            sizes: [ 
                { id: '3001', name: 'XS' },
                { id: '3002', name: 'S' },
                { id: '3003', name: 'M' },
                { id: '3004', name: 'L' },
                { id: '3005', name: 'XL' }
            ]
        }
    }
})