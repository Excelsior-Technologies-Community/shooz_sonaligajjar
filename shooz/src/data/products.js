

const products = [
    {
        id: 1,
        name: "Classic Leather Sneakers",
        price: 21,
        brand: "UrbanStep",
        category: "Athletic Footwear",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540"
    },

    {
        id: 2,
        name: "Cushioned Trail Running Shoes",
        price: 15,
        brand: "TrailGear",
        category: "Boots For Every Occasion",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=540"
    },

    {
        id: 3,
        name: "High-Top Canvas Sneakers",
        price: 25,
        brand: "TrendyFeet",
        category: "Luxury Leather Shoes",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540"
    },

    {
        id: 4,
        name: "Lightweight Running Shoes",
        price: 0,
        brand: "SprintMax",
        category: "Sandals & Slides",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-21_3ab22edc-32aa-4831-beb5-7ff416b17834.jpg?v=1731311666&width=540"
    },

    {
        id: 5,
        name: "Slip-Resistant Work Shoes",
        price: 20,
        brand: "ProSteps",
        category: "Sneakerhead's Haven",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22_8479de23-bf7c-4771-84c2-90291de8bdfa.jpg?v=1731314850&width=540"
    },

    {
        id: 6,
        name: "Soft Leather Moccasins",
        price: 25,
        brand: "ComfortCreek",
        category: "Athletic Footwear",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-24_8fe577f2-dcbd-47da-8b42-d1311be6070e.jpg?v=1731314917&width=540"
    },

    {
        id: 7,
        name: "Vegan Leather Combat Boots",
        price: 25,
        brand: "EcoStride",
        category: "Boots For Every Occasion",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=540"
    },

    {
        id: 8,
        name: "Vintage Suede Loafers",
        price: 25,
        brand: "RetroSole",
        category: "Luxury Leather Shoes",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-20_e8528337-5425-4244-a682-7632fa76a3a0.jpg?v=1731315325&width=540"
    },

     {
        id: 9,
        name: "Classic Leather Sneakers",
        price: 21,
        brand: "UrbanStep",
        category: "Sandals & Slides",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540"
    },

    {
        id: 10,
        name: "Cushioned Trail Running Shoes",
        price: 15,
        brand: "TrailGear",
        category: "Sneakerhead's Haven",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=540"
    },

    {
        id: 11,
        name: "High-Top Canvas Sneakers",
        price: 25,
        brand: "TrendyFeet",
        category: "Athletic Footwear",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540"
    },

    {
        id: 12,
        name: "Lightweight Running Shoes",
        price: 0,
        brand: "SprintMax",
        category: "Boots For Every Occasion",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-21_3ab22edc-32aa-4831-beb5-7ff416b17834.jpg?v=1731311666&width=540"
    },

    {
        id: 13,
        name: "Slip-Resistant Work Shoes",
        price: 20,
        brand: "ProSteps",
        category: "Sustainable Footwear",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22_8479de23-bf7c-4771-84c2-90291de8bdfa.jpg?v=1731314850&width=540"
    },

    {
        id: 14,
        name: "Soft Leather Moccasins",
        price: 25,
        brand: "ComfortCreek",
        category: "Sandals & Slides",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-24_8fe577f2-dcbd-47da-8b42-d1311be6070e.jpg?v=1731314917&width=540"
    },

    {
        id: 15,
        name: "Vegan Leather Combat Boots",
        price: 25,
        brand: "EcoStride",
        category: "Sneaker's Haven",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=540"
    },

    {
        id: 16,
        name: "Vintage Suede Loafers",
        price: 25,
        brand: "RetroSole",
        category: "Sustainable Footwear",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-20_e8528337-5425-4244-a682-7632fa76a3a0.jpg?v=1731315325&width=540"
    },

     {
        id: 17,
        name: "Classic Leather Sneakers",
        price: 21,
        brand: "UrbanStep",
        category: "Athletic Footwear",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540"
    },

    {
        id: 18,
        name: "Cushioned Trail Running Shoes",
        price: 15,
        brand: "TrailGear",
        category: "Boots For Every Occasion",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=540"
    },

    {
        id: 19,
        name: "High-Top Canvas Sneakers",
        price: 25,
        brand: "TrendyFeet",
        category: "Luxury Leather Shoes",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540"
    },

    {
        id: 20,
        name: "Lightweight Running Shoes",
        price: 0,
        brand: "SprintMax",
        category: "Sandals & Slides",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-21_3ab22edc-32aa-4831-beb5-7ff416b17834.jpg?v=1731311666&width=540"
    },

    {
        id: 21,
        name: "Slip-Resistant Work Shoes",
        price: 20,
        brand: "ProSteps",
        category: "Sneakerhead's Haven",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22_8479de23-bf7c-4771-84c2-90291de8bdfa.jpg?v=1731314850&width=540"
    },

    {
        id: 22,
        name: "Soft Leather Moccasins",
        price: 25,
        brand: "ComfortCreek",
        category: "Athletic Footwear",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-24_8fe577f2-dcbd-47da-8b42-d1311be6070e.jpg?v=1731314917&width=540"
    },

    {
        id: 23,
        name: "Vegan Leather Combat Boots",
        price: 25,
        brand: "EcoStride",
        category: "Boots For Every Occasion",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=540"
    },

    {
        id: 24,
        name: "Vintage Suede Loafers",
        price: 25,
        brand: "RetroSole",
        category: "Luxury Leather Shoes",
        inStock: true,
        image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-20_e8528337-5425-4244-a682-7632fa76a3a0.jpg?v=1731315325&width=540"
    }
];

export default products;
