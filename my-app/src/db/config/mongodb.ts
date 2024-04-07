const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// async function prdouctSeeder() {
//   try {
//     await client.connect();
//     console.log("connected to MongoDB");

//     const database = client.db("p3_gc2_next");
//     const collection = database.collection("products");

//     const datas = [
//       {
//         name: "Patta x Converse Rain or Shine Pant (Utility Green Heather)",
//         slug: "Patta x Converse Rain or Shine Pant (Utility Green Heather)",
//         description:
//           "The Patta x Converse Rain or Shine Pants are constructed in 100% Cotton Legacy French Terry fabric. The sweat pants features an elasticated waistband with drawstrings, two side pockets and a back pocket. A standout detail on the Utility Green Heater sweats are the contrast stitching in white. Other details are a Patta x Converse logo on the left side of the pants.",
//         excerpt: "",
//         price: 110,
//         tags: ["Pants", "Converse", "Rain or Shine"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-161-1_copy.jpg?v=1710428898&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-168-1_1copy.jpg?v=1710428898&width=1500",
//           "https://www.patta.nl/cdn/shop/files/10026930_316_F.jpg?v=1710851136&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta x Converse Rain or Shine T-Shirt (Patta Gradient)",
//         slug: "Patta x Converse Rain or Shine T-Shirt (Patta Gradient)",
//         description:
//           "The Patta x Converse Rain or Shine T-Shirt is constructed in 100% Cotton and has a boxy shape with its dropped shoulders. The tee features a gradient allover and is adorned with a silver Patta x Converse logo on the left chest and a bold back graphic.",
//         excerpt: "",
//         price: 60,
//         tags: ["T-Shirt", "Converse", "Rain or Shine"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-039copy.jpg?v=1710428928&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-060copy.jpg?v=1710428927&width=1500",
//           "https://www.patta.nl/cdn/shop/files/10026931_A01_220_B.jpg?v=1710428938&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta x Converse Rain or Shine Jacket (Black Gradient)",
//         slug: "Patta x Converse Rain or Shine Jacket (Black Gradient)",
//         description:
//           "The Patta x Converse Rain or Shine Jacket is a rain jacket featuring a water-repellent 100% polyester taffeta construction. The jacket features a packable hood, a full zip, two side pockets with zippers and is adjustable at the cuffs with velcro straps and at the hems with an elastic cord. The jacket is adorned with a gradient black all-over print, reflective Patta branding with a Patta x Converse logo on the left hand side of the chest and a bold back graphic.",
//         excerpt: "",
//         price: 200,
//         tags: ["Jacket", "Converse", "Rain or Shine"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-138-1-Recovered_2copy.jpg?v=1710851260&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/PATTAXCONVERSE_ECOM_21_02_24-128copy.jpg?v=1710851260&width=1500",
//           "https://www.patta.nl/cdn/shop/files/10026927_1_B2.jpg?v=1710851260&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Always On Top Hooded Sweater (Multi)",
//         slug: "Patta Always On Top Hooded Sweater (Multi)",
//         description:
//           "The Patta Always On Top Hooded Sweater is produced in 400gsm loopback sweat. The outer layer fabric is a 300gsm single jersey t-shirt in an all-over Camo print. The hoodie is equipped with a hood with drawstrings and 2x2 ribbings on the hems and collar. The front of the piece sees a screen printed Patta script logo over the left hand side of the chest.",
//         excerpt: "",
//         price: 145,
//         tags: ["Hoodie", "Original", "Top Hooded Sweater"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/PattaClassicWashedJoggingPantsFuchsiaRed.jpg?v=1706704445&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-2010-325-0237-084_F.jpg?v=1705917149&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-2010-325-0237-084_B.jpg?v=1706704444&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Classic Washed Hooded Sweater (Fuchsia Red)",
//         slug: "Patta Classic Washed Hooded Sweater (Fuchsia Red)",
//         description:
//           "The Patta Classic Washed Hooded Sweater is an premium level hoodie with an relaxed fit and dropped shoulders. Coming in 450gsm soft brushed back heavyweight sweat in a cotton and polyester blend. Here we've opted for an acid washed finish that gives it an irregular outlook to the dye. The hoodie features a drawstring hood with a kangaroo pouch pocket at the front with ribbed collar and sleeves. Branding is kept simple as always with a Patta script logo screen printed on the left hand side of the chest.",
//         excerpt: "",
//         price: 135,
//         tags: ["Hoodie", "Original", "Washed Hooded Sweater"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-2050-325-0201-098_F.jpg?v=1705918262&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/PattaClassicWashedHoodedSweaterFuchsiaRed.jpg?v=1706704770&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-2050-325-0201-098_D1.jpg?v=1706704768&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Insulated Quilted Hooded Jacket (Gray Dawn)",
//         slug: "Patta Insulated Quilted Hooded Jacket (Gray Dawn)",
//         description:
//           "The Patta Insulated Quilted Hooded Jacket is constructed in lightweight 100% Polyamide Nylon with resin coating for water-resistance capabilities. Lining is filled with fast drying and windproof 80gsm Primaloft Silver filling. The jacket is equipped with two side pockets, YKK main zipper and a hood with drawstrings. The back of the jacket sees a integrated Patta logo into the Diamond quilting. A small Patta script logo is placed on the left hand side of the chest.",
//         excerpt: "",
//         price: 220,
//         tags: ["Hoodie", "Original", "Quilted Hooded Jacket"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/PattaInsulatedQuiltedHoodedJacketGrayDawn2.jpg?v=1706704907&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-3100-355-0231-129_F.jpg?v=1705918852&width=1500",
//           "https://www.patta.nl/cdn/shop/files/PattaInsulatedQuiltedHoodedJacketGrayDawn.jpg?v=1706704907&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Belted Tactical Chino (Nine Iron)",
//         slug: "Patta Belted Tactical Chino (Nine Iron)",
//         description:
//           "We've revisited the oversized shape of our Belted Tactical Chino from our AW23 collection, this time in a Dark Grey colourway. The Patta Belted Tactical Chino is produced in a 73% Cotton and 27% Nylon blend and is garment dyed. The pants are water resistant and have a loose fit. Equipped with two side pockets with zippers, a back pocket with a zipper, an elasticated waist with belt detail and Woojin adjustable bottom hems.",
//         excerpt: "",
//         price: 145,
//         tags: ["Pants", "Original", "Tactical Chino"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-4310-334-0245-133_F.jpg?v=1705917595&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/PattaBeltedTacticalChinoNineIron.jpg?v=1706704541&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-4310-334-0245-133_D1.jpg?v=1706704540&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Whiskers Denim Pants (Vintage Blue)",
//         slug: "Patta Whiskers Denim Pants (Vintage Blue)",
//         description:
//           "The Patta Whiskers Denim Pants is a constructed in 100% Cotton Denim. The 15 oz mid-heavyweight Jeans have a loose fit and feature two side pockets, two back pockets, a buttoned fly, branded buttons and branded rivets. Adorned with contrasting Bronze stitches, Patta whisker branding on the back pocket, and a branded back patch made from pineapple leather.",
//         excerpt: "",
//         price: 160,
//         tags: ["Pants", "Original", "Denim Pants"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-4200-337-0199-076_B.jpg?v=1706801480&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/PattaWhiskersJeansVintageBlue.jpg?v=1706801480&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-4200-337-0199-076_D2.jpg?v=1706801478&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Chenille Knitted Sweater (Sage)",
//         slug: "Patta Chenille Knitted Sweater (Sage)",
//         description:
//           "The Patta Chenille Knitted Sweater is produced in 100% Polyester with a Chenille knit construction which offers a velvety handfeel. The sweater is equipped with ribbed cuffs, hems and collar. The garment is adorned with Jacquard Patta lettering scattered across the front.",
//         excerpt: "",
//         price: 145,
//         tags: ["Sweater", "Original", "Knitted Sweater"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-7030-324-0242-074_F.jpg?v=1705917918&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/PattaChenilleKnittedSweaterSage.jpg?v=1706704744&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-7030-324-0242-074_B.jpg?v=1706704744&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Some Like It Hot Boxy Hooded Sweater (Black)",
//         slug: "Patta Some Like It Hot Boxy Hooded Sweater (Black)",
//         description:
//           "The Patta Forever and Always Boxy Hooded Sweater is an premium level hoodie with a relaxed fit and dropped shoulders. Coming in 450gsm soft brushed back sweat in a cotton and polyester blend. Features a kangaroo pocket, ribbed bottom hem with cuffs and a drawstring hoodie. The front of the piece sees a screen printed Patta script logo over the left hand side of the chest. The back of the piece is decorated with an screen printed Some Like It Hot artwork.",
//         excerpt: "",
//         price: 130,
//         tags: ["Hoodie", "Original", "Hooded Sweater"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-2000-325-0220-001_B.jpg?v=1707494455&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-2000-325-0220-001_F.jpg?v=1707494537&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-2000-325-0220-001_model.jpg?v=1707740449&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Acid Washed Shorts (Blue Radiance)",
//         slug: "Patta Acid Washed Shorts (Blue Radiance)",
//         description:
//           "The Patta Acid Washed Swim Shorts are construced in 70% Cotton and 30% Nylon mix. Giving this swim shorts an update with a softer handfeel compared to previous Patta swim shorts. Coming in a summery Blue Radiance colourway with an Acid Wash effect for a more textured look to the colour. The shorts are equipped with two side pockets, elastic waistband with drawstrings and a back pocket with Velrco closure. An embroidered Patta script logo sits on the right hand side.",
//         excerpt: "",
//         price: 95,
//         tags: ["Shorts", "Original", "Washed Shorts"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-4310-333-0210-052_F.jpg?v=1707492223&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-4310-333-0210-052_model.jpg?v=1707492225&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-4310-333-0210-052_D1.jpg?v=1707492223&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Predator T-Shirt (White)",
//         slug: "Patta Predator T-Shirt (White)",
//         description:
//           "The Patta Predator T-Shirt comes in 230gsm 100% Cotton with a large premium silk screen Predator artwork on the back. A screen printed Patta Original Clothing logo sits on the left hand side of the chest. Available in three iterations.",
//         excerpt: "",
//         price: 60,
//         tags: ["T-Shirt", "Original", "White T-Shirt"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0234-002_B.jpg?v=1705919238&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0234-002_001.jpg?v=1706707631&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0234-002_D1.jpg?v=1706707631&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Family T-Shirt (Wax Yellow)",
//         slug: "Patta Family T-Shirt (Wax Yellow)",
//         description:
//           "The Patta Family T-Shirt is produced in 220gsm 100% cotton. The T-Shirt is adorned with a screen printed Patta Family artwork on the centre chest. Available in two iterations.",
//         excerpt: "",
//         price: 55,
//         tags: ["T-Shirt", "Original", "Yellow T-Shirt"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0224-077model2.jpg?v=1705918568&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0224-077model1.jpg?v=1705918568&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0224-077_F.jpg?v=1705918568&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Ancestors T-Shirt (Goat)",
//         slug: "Patta Ancestors T-Shirt (Goat)",
//         description:
//           "The Patta Ancestors T-Shirt comes in 230gsm 100% Cotton with a large premium silk screen Ancestors graphic on the back. A screen Patta script logo sits on the left hand side of the chest. Available in two iterations.",
//         excerpt: "",
//         price: 60,
//         tags: ["T-Shirt", "Original", "Goat T-Shirt"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-294-0236-061_B.jpg?v=1705917275&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-294-0236-061_model1.jpg?v=1705917322&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-294-0236-061_F.jpg?v=1705917322&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Healing Hands T-Shirt (Lotus)",
//         slug: "Patta Healing Hands T-Shirt (Lotus)",
//         description:
//           "The Patta Healing Hands T-Shirt comes in 220gsm 100% Cotton. The back is adorned with a silk screen printed Healing Hands graphic. The front sees a screen printed Patta script on the left hand side of the chest.",
//         excerpt: "",
//         price: 55,
//         tags: ["T-Shirt", "Original", "Lotus T-Shirt"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0222-085_model.jpg?v=1707739986&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0222-085_D1.jpg?v=1707494386&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0222-085_F.jpg?v=1707494386&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Glitch T-Shirt (Black)",
//         slug: "Patta Glitch T-Shirt (Black)",
//         description:
//           "The Patta Glitch T-Shirt comes in 220gsm 100% Cotton. The front is adorned with a large silk screen printed Glitch graphic.",
//         excerpt: "",
//         price: 55,
//         tags: ["T-Shirt", "Original", "Black T-Shirt"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0221-001_F_b6875991-6cbc-4202-b659-b4a0266f5163.jpg?v=1707739804&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/L3A8930.jpg?v=1707739939&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-SS24-1000-290-0221-001_model.jpg?v=1707739939&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Split Two Tone Knitted Beanie (Sea Salt/Begonia Pink)",
//         slug: "Patta Split Two Tone Knitted Beanie (Sea Salt/Begonia Pink)",
//         description:
//           "Made out of 100% wool the all-new Patta Split Two Tone Knitted Beanie comes in a Sea Salt and Begonia Pink colourway. The wool is keeping you warm and comfy all winter long and the front of the beanie gets hit with our iconic Patta 'P' logo. ",
//         excerpt: "",
//         price: 70,
//         tags: ["Beanie", "Original", "Two Tone Knitted Beanie"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/L3A2551.jpg?v=1698662819&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/L3A2555.jpg?v=1698662819&width=1500",
//           "https://www.patta.nl/cdn/shop/files/L3A2559.jpg?v=1698662819&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Woodland Camo Trucker Cap (Multi/Woodland Camo)",
//         slug: "Patta Woodland Camo Trucker Cap (Multi/Woodland Camo)",
//         description:
//           "For Autumn Winter 2023, we are back with another line of Patta headwear. The Patta Woodland Trucker Cap is constructed in 100% Polyester with 100% Cotton lining. Equipped with snap closure and enriched with a Cherub graphic patch on the front.",
//         excerpt: "",
//         price: 55,
//         tags: ["Cap", "Original", "Trucker Cap"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-AW23-CAMO-AOP-TC-001_001.jpg?v=1697458822&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/POC-AW23-CAMO-AOP-TC-001_003.jpg?v=1697458833&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-AW23-CAMO-AOP-TC-001_002.jpg?v=1697458833&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta Reversible Flap Cap (Black/Black)",
//         slug: "Patta Reversible Flap Cap (Black/Black)",
//         description:
//           "For Autumn Winter 2023, we are back with another line of Patta headwear. The Patta Reversible Hunting Flap Cap is constructed with an 100% Polyester Sherpa outer and a 100% Polyester Sherpa interior. The hat is reversible and has clip closure on the ear flaps. A Patta woven label sits on the front of the hat.",
//         excerpt: "",
//         price: 65,
//         tags: ["Cap", "Original", "Flap Cap"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/POC-AW23-RVRSBL-FC-001_001.jpg?v=1695047686&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/POC-AW23-RVRSBL-FC-001_004.jpg?v=1695047686&width=1500",
//           "https://www.patta.nl/cdn/shop/files/POC-AW23-RVRSBL-FC-001_003.jpg?v=1695047686&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//       {
//         name: "Patta x New Balance 991v2 (Sea Moss)",
//         slug: "Patta x New Balance 991v2 (Sea Moss)",
//         description:
//           "Patta and New Balance have come together to celebrate the evolution of an iconic shoe, infusing it with a blend of premium materials and vibrant colours that beautifully showcase the upgraded design of the MADE in UK 991v2. The Patta & New Balance MADE in UK 991v2 pays homage to the original silhouette while embracing the thrill of innovation.",
//         excerpt: "",
//         price: 250,
//         tags: ["Shoes", "New Balance", "Sea Moss"],
//         thumbnail:
//           "https://www.patta.nl/cdn/shop/files/L3A2680re-editkopie.jpg?v=1700473513&width=1500",
//         images: [
//           "https://www.patta.nl/cdn/shop/files/GREEN-NEW-BALANCE-X-PATTA-991-V2.jpg?v=1700471520&width=1500",
//           "https://www.patta.nl/cdn/shop/files/GREEN-NEW-BALANCE-X-PATTA-991-V2-9.jpg?v=1701430644&width=1500",
//         ],
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//       },
//     ];

//     await collection.insertMany(datas);
//   } catch {
//     console.error("Failed to connect MongoDB");
//   }
// }

// prdouctSeeder();

export const database = client.db("p3_gc2_next");
