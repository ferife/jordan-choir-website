import choirProudTshirt from '../assets/img/product-tshirt.jpg';
import warriorChoirSweatshirt from '../assets/img/product-sweatshirt.jpg';
import choirProudHoodie from '../assets/img/product-hoodie.jpg';
import choirYardSign from '../assets/img/product-yard-sign.jpg';

export const PRODUCTS = [
    {   // TShirt
        id: 0,
        name: 'Choir Proud Black T-Shirt',
        image: choirProudTshirt,
        modifiers: [
            {   // Sizes
                id: 0,
                name: 'size',
                options: [
                    { id: 0, name: 'XS' },
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'XL' },
                    { id: 5, name: '2XL' },
                    { id: 6, name: '3XL' },
                ],
            },
        ],
        price: 20.0,
    },
    {   // Sweatshirt
        id: 1,
        name: 'Warrior Choir Sweatshirt',
        image: warriorChoirSweatshirt,
        modifiers: [
            {   // Sizes
                id: 0,
                name: 'size',
                options: [
                    { id: 0, name: 'XS' },
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'XL' },
                    { id: 5, name: '2XL' },
                    { id: 6, name: '3XL' },
                ],
            },
        ],
        price: 35.0,
    },
    {   // Hoodie
        id: 2,
        name: 'Choir Proud Black Hoodie',
        image: choirProudHoodie,
        modifiers: [
            {   // Sizes
                id: 0,
                name: 'size',
                options: [
                    { id: 0, name: 'XS' },
                    { id: 1, name: 'S' },
                    { id: 2, name: 'M' },
                    { id: 3, name: 'L' },
                    { id: 4, name: 'XL' },
                    { id: 5, name: '2XL' },
                    { id: 6, name: '3XL' },
                ],
            },
        ],
        price: 40.0,
    },
    {   // Yard Sign
        id: 3,
        name: 'Jordan Choir Yard Sign',
        image: choirYardSign,
        price: 30.0,
    },
    {
        id: 4,
        name: 'Breadcrumb Trail Sponsorships',
        image: choirProudHoodie,
        donation: true,
        tiers: [
            { id: 0, name: 'Bronze', price: 100.0 },
            { id: 1, name: 'Silver', price: 300.0 },
            { id: 2, name: 'Gold', price: 500.0 },
            { id: 3, name: 'Platinum', price: 1000.0 },
        ],
        description: 'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.',
    },
];