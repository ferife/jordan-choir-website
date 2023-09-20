// TODO: Add back images for this
// const reactLakeImg = "http://localhost:5000/assets/img/react-lake.jpg";
// const chromeRiverImg = "http://localhost:5000/assets/img/chrome-river.jpg";
// const breadCrumbImg = "http://localhost:5000/assets/img/breadcrumb-trail.jpg";
// const reduxWoodsImg = "http://localhost:5000/assets/img/redux-woods.jpg";

const products = [
    {
        id: 0,
        name: "React Lake T-Shirt",
        // image: reactLakeImg,
        modifiers: [
            {   // Sizes
                id: 0,
                name: "size",
                options: [
                    { id: 0, name: "XS" },
                    { id: 1, name: "Small" },
                    { id: 2, name: "Medium" },
                    { id: 3, name: "Large" },
                    { id: 4, name: "XL" },
                ],
            },
            {   // Colors
                id: 1,
                name: "color",
                options: [
                    { id: 0, name: "Black" },
                    { id: 1, name: "White" },
                    { id: 2, name: "Gold" },
                ],
            },
        ],
        price: 12.33,
        description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.",
    },
    {
        id: 1,
        name: "Chrome River Mug",
        // image: chromeRiverImg,
        price: 8.0,
        description:
            "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.",
    },
    {
        id: 2,
        name: "Breadcrumb Trail Sponsorships",
        // image: breadCrumbImg,
        donation: true,
        tiers: [
            { id: 0, name: "Bronze", price: 100.0 },
            { id: 1, name: "Silver", price: 300.0 },
            { id: 2, name: "Gold", price: 500.0 },
            { id: 3, name: "Platinum", price: 1000.0 },
        ],
        description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.",
    },
    {
        id: 3,
        name: "Redux Woods Pants",
        // image: reduxWoodsImg,
        modifiers: [
            {   // Sizes
                id: 0,
                name: "size",
                options: [
                    { id: 0, name: "XS" },
                    { id: 1, name: "Small" },
                    { id: 2, name: "Medium" },
                    { id: 3, name: "Large" },
                    { id: 4, name: "XL" },
                ],
            }
        ],
        price: 0.42,
        description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    },
];

module.exports = products;