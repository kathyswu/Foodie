require("../config/db.connection");

const Review = require("../models/Review");

Review.deleteMany({}, function(error, deletedReviews){
  if (error) {
    return console.log(error);
  }
  
  Review.insertMany([
    {
      restaurant: 'Marufuku Ramen',
      rating: 5,
      content: 'Very great-tasting ramen, good portion for the price. Restaurant is usually busy so you must reserve early through yelp.',
      image: 'https://i.imgur.com/PYGjKNj.jpeg',
      date: Date(2021, 9, 9, 8, 30),
      location: '1581 Webster St, San Francisco, California',
      tags: ["japanese","ramen"],
    },
    {
      restaurant: 'Paina',
      rating: 3,
      content: 'Has special daily themes like Tuesday tacos, Wednesday half-price wings, Thursdays oysters, for cheap prices. Meanwhile the service and food is very mediocre.',
      image: 'https://i.imgur.com/MgPXWqg.jpeg',
      date: Date(2021, 10, 5, 6, 0),
      location: '1865 Post St, San Francisco, California',
      tags: ["american","asian","fusion","daily specials"],
    },
    {
      restaurant: 'Daeho Kalbijim & Beef Soup',
      rating: 5,
      content: 'Really delicious korean-style cheese ribs and ox-bone soup. Large portions however it is expensive and long wait times so you must reserve well ahead of time.',
      image: 'https://i.imgur.com/CqWRl4R.jpeg',
      date: Date(2021, 9, 19, 6, 0),
      location: '1620 Post St, San Francisco, California',
      tags: ["korean","cheese ribs", "beef soup"],
    },
    {
      restaurant: 'Beque BBQ Grill',
      rating: 2,
      content: 'Lots of options to choose from in their all you can eat menu however the meat and vegetables are not fresh and the service is mediocre.',
      image: 'https://i.imgur.com/HuoxArI.jpeg',
      date: Date(2021, 10, 7, 8, 0),
      location: '1825 Post St, San Francisco, California',
      tags: ["korean","bbq","meat","grill"],
    },
    {
      restaurant: 'Pier Market Seafood Restaurant',
      rating: 4,
      content: 'Great seafood by the pier, grilled fresh and on the spot however very expensive.',
      image: 'https://i.imgur.com/12tlr7o.jpeg',
      date: Date(2021, 10, 3, 4, 0),
      location: '39 Pier 39, San Francisco, California',
      tags: ["seafood","western","american","pier"],
    },
    {
      restaurant: 'Hoshinoya',
      rating: 4,
      content: 'Good tasting food for ramen and bentos, really yummy Yuzu Peach Carbonated Drink.',
      image: 'https://i.imgur.com/cCdI6mo.jpeg',
      date: Date(2021, 10, 8, 9, 0),
      location: '1740 Buchanan St, San Francisco, California',
      tags: ["japanese","ramen","bento","yuzu"],
    },
    {
      restaurant: 'On the Bridge',
      rating: 4,
      content: 'Delicious curry stewed for over 24 hours, large selection of drinks and a very friendly owner.',
      image: 'https://i.imgur.com/I7gIH1F.jpeg',
      date: Date(2021, 9, 27, 6, 30),
      location: '1581 Webster St, San Francisco, California',
      tags: ["japanese","sake","bar","curry"],
    },
    {
      restaurant: 'Doobu',
      rating: 5,
      content: 'Korean restaurant with classic dishes, known for their soft tofu stew (soondubu). Delicious galbi and good combo deals.',
      image: 'https://i.imgur.com/pHtBpGn.jpeg',
      date: Date(2021, 10, 10, 7, 30),
      location: '1723 Buchanan St, San Francisco, California',
      tags: ["korean","classic","soondubu","soft tofu stew","tteokbokki", "beef short ribs"],
    },
    {
      restaurant: 'Sasa',
      rating: 5,
      content: 'Excellent service for their omakase menu, extremely expensive.',
      image: 'https://i.imgur.com/COAZrOm.jpeg',
      date: Date(2021, 9, 7, 6, 30),
      location: '22 Peace Plaza, San Francisco, California',
      tags: ["japanese","omakase","sushi","sashimi","wagyu"],
    },

  ], 
  function (error, insertedReviews){
    if (error) {
      return console.log(error);
    }
    console.log("=== Seed File Finished ===");
    console.log(insertedReviews);
    process.exit();
  }
  );
});