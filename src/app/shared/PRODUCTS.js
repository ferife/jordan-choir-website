import reactLakeImg from '../assets/img/react-lake.jpg';
import chromeRiverImg from '../assets/img/chrome-river.jpg';
import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
import reduxWoodsImg from '../assets/img/redux-woods.jpg';

// TODO: Make it so the properties that have multiple options (EX: size, color, tier, etc) can be understood by the cart and addToCartForm programmatically, so there can be as many as the site owner wants and they can have custom names and stuff. Maybe by turning those into objects instead of arrays.

export const PRODUCTS = [
    {   // sizes, colors
        id: 0,
        name: 'React Lake T-Shirt',
        image: reactLakeImg,
        sizes: [
            { id: 0, name: 'XS' },
            { id: 1, name: 'Small' },
            { id: 2, name: 'Medium' },
            { id: 3, name: 'Large' },
            { id: 4, name: 'XL' },
        ],
        colors: [
            { id: 0, name: 'Black' },
            { id: 1, name: 'White' },
            { id: 2, name: 'Gold' },
        ],
        price: 12.33,
        description:
            'Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.'
    },
    // {
    //     id: 0,
    //     name: 'React Lake T-Shirt',
    //     image: reactLakeImg,
    //     modifiers: [
    //         {   // Sizes
    //             id: 0,
    //             name: 'Sizes',
    //             options: [
    //                 { id: 0, name: 'XS' },
    //                 { id: 1, name: 'Small' },
    //                 { id: 2, name: 'Medium' },
    //                 { id: 3, name: 'Large' },
    //                 { id: 4, name: 'XL' },
    //             ]
    //         },
    //         {   // Colors
    //             id: 1,
    //             name: 'Colors',
    //             options: [
    //                 { id: 0, name: 'Black' },
    //                 { id: 1, name: 'White' },
    //                 { id: 2, name: 'Gold' }
    //             ]
    //         }
    //     ],
    //     price: 12.33,
    //     description: 'Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.'
    // },
    {
        id: 1,
        name: 'Chrome River Mug',
        image: chromeRiverImg,
        price: 8.77,
        description:
            'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.'
    },
    {
        id: 2,
        name: 'Breadcrumb Trail Sponsorships',
        image: breadCrumbImg,
        tiers: [
            { id: 0, name: 'Bronze', price: 100.0 },
            { id: 1, name: 'Silver', price: 300.0 },
            { id: 2, name: 'Gold', price: 500.0 },
            { id: 3, name: 'Platinum', price: 1000.0 },
        ],
        price: 100.0,   // DELETE
        description:
            'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.'
    },
    {
        id: 3,
        name: 'Redux Woods Pants',
        image: reduxWoodsImg,
        sizes: [
            { id: 0, name: 'XS' },
            { id: 1, name: 'Small' },
            { id: 2, name: 'Medium' },
            { id: 3, name: 'Large' },
            { id: 4, name: 'XL' },
        ],
        price: 0.42,
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    },
    // {
    //     id: 3,
    //     name: 'Redux Woods Pants',
    //     image: reduxWoodsImg,
    //     modifiers: [
    //         {   // Sizes
    //             id: 0,
    //             name: 'Sizes',
    //             options: [
    //                 { id: 0, name: 'XS' },
    //                 { id: 1, name: 'Small' },
    //                 { id: 2, name: 'Medium' },
    //                 { id: 3, name: 'Large' },
    //                 { id: 4, name: 'XL' },
    //             ]
    //         }
    //     ],
    //     price: 0.42,
    //     description: 'You'll never want to leave this hidden gem, deep within the lush Redux Woods.'
    // },
];