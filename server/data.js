// DEMO / SAMPLE DATA ONLY. Not real availability, prices, reviews or accessibility certifications.
// Later: replace with MongoDB collections filled from official tourism data, OSM, Google Places, licensed APIs.
const A = (...k) => Object.fromEntries(k.map((x) => [x, true]));
const d = (o) => ({ demo: true, images: [], ...o });
export const destinations = [
 d({ id: "mysore-palace", name: "Mysore Palace", city: "Mysuru", state: "Karnataka", region: "South", category: "Heritage", description: "Historic royal palace and major Mysuru landmark.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_palace%2C_karnataka.jpg"], location:{ latitude:12.3052, longitude:76.6552 }, accessibility:A("wheelchair","ramps","accessibleToilet","accessibleParking","audioAssistance") }),

d({ id: "taj-mahal", name: "Taj Mahal", city: "Agra", state: "Uttar Pradesh", region: "North", category: "Historical", description: "Iconic white marble mausoleum and UNESCO World Heritage Site.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/The%20Taj%20Mahal%20.jpg"], location:{ latitude:27.1751, longitude:78.0421 }, accessibility:A("wheelchair","ramps","accessibleParking","assistanceStaff") }),

d({ id: "red-fort", name: "Red Fort", city: "Delhi", state: "Delhi", region: "North", category: "Heritage", description: "Historic Mughal-era fort complex in Old Delhi.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Red-Fort.jpg"], location:{ latitude:28.6562, longitude:77.2410 }, accessibility:A("wheelchair","ramps","accessibleParking","assistanceStaff") }),

d({ id: "qutub-minar", name: "Qutub Minar", city: "Delhi", state: "Delhi", region: "North", category: "Historical", description: "Historic minaret and UNESCO World Heritage Site.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/The%20Qutb%20Minar.jpg"], location:{ latitude:28.5245, longitude:77.1855 }, accessibility:A("wheelchair","accessibleParking","assistanceStaff") }),

d({ id: "india-gate", name: "India Gate", city: "Delhi", state: "Delhi", region: "North", category: "Landmark", description: "War memorial and prominent Delhi landmark.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/India%20Gate%20%28Delhi%29.jpg"], location:{ latitude:28.6129, longitude:77.2295 }, accessibility:A("wheelchair","stepFreeAccess","accessibleParking") }),

d({ id: "golden-temple", name: "Golden Temple", city: "Amritsar", state: "Punjab", region: "North", category: "Religious", description: "Famous Sikh gurdwara surrounded by the Amrit Sarovar.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Golden%20Temple.jpg"], location:{ latitude:31.6200, longitude:74.8765 }, accessibility:A("wheelchair","ramps","assistanceStaff","stepFreeAccess") }),

d({ id: "gateway-of-india", name: "Gateway of India", city: "Mumbai", state: "Maharashtra", region: "West", category: "Landmark", description: "Iconic waterfront monument overlooking Mumbai Harbour.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Gateway%20of%20India%2C%20Mumbai%2C%20India.jpg"], location:{ latitude:18.9220, longitude:72.8347 }, accessibility:A("wheelchair","stepFreeAccess","accessibleParking") }),

d({ id: "marine-drive", name: "Marine Drive", city: "Mumbai", state: "Maharashtra", region: "West", category: "Landmark", description: "Famous curved seaside boulevard along Mumbai's coast.", images:["https://hblimg.mmtcdn.com/content/hubble/img/mumbai/mmt/activities/m_Marine%20Drive_1_l_401_672.jpg"], location:{ latitude:18.9431, longitude:72.8235 }, accessibility:A("wheelchair","stepFreeAccess","accessibleParking") }),

d({ id: "csmt", name: "Chhatrapati Shivaji Maharaj Terminus", city: "Mumbai", state: "Maharashtra", region: "West", category: "Heritage", description: "Historic railway terminus and UNESCO World Heritage Site.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Chhatrapati%20Shivaji%20Terminus%2C%20Mumbai.jpg"], location:{ latitude:18.9402, longitude:72.8356 }, accessibility:A("wheelchair","ramps","accessibleToilet","assistanceStaff") }),

d({ id: "elephanta-caves", name: "Elephanta Caves", city: "Mumbai", state: "Maharashtra", region: "West", category: "Historical", description: "Rock-cut cave temples on Elephanta Island.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Elephanta%20Caves%20in%20Mumbai.jpg"], location:{ latitude:18.9633, longitude:72.9315 }, accessibility:A("assistanceStaff") }),

d({ id: "ajanta-caves", name: "Ajanta Caves", city: "Aurangabad", state: "Maharashtra", region: "West", category: "Historical", description: "Ancient rock-cut Buddhist caves famous for murals and sculptures.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Ajanta%20Caves.jpg"], location:{ latitude:20.5519, longitude:75.7033 }, accessibility:A("assistanceStaff") }),

d({ id: "ellora-caves", name: "Ellora Caves", city: "Aurangabad", state: "Maharashtra", region: "West", category: "Historical", description: "Rock-cut caves representing Buddhist, Hindu and Jain traditions.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Ellora%20Caves.jpg"], location:{ latitude:20.0268, longitude:75.1790 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "hampi", name: "Hampi", city: "Hampi", state: "Karnataka", region: "South", category: "Heritage", description: "Vast historic ruins of the Vijayanagara Empire.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Hampi%2C%20India.jpg"], location:{ latitude:15.3350, longitude:76.4600 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "virupaksha-temple", name: "Virupaksha Temple", city: "Hampi", state: "Karnataka", region: "South", category: "Religious", description: "Historic temple complex in the Hampi heritage area.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Hampi%2C%20India.jpg"], location:{ latitude:15.3350, longitude:76.4597 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "badami-caves", name: "Badami Caves", city: "Badami", state: "Karnataka", region: "South", category: "Historical", description: "Ancient rock-cut cave temples carved into sandstone cliffs.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Badami%20caves.jpg"], location:{ latitude:15.9186, longitude:75.6760 }, accessibility:A("assistanceStaff") }),

d({ id: "gol-gumbaz", name: "Gol Gumbaz", city: "Vijayapura", state: "Karnataka", region: "South", category: "Heritage", description: "Monumental mausoleum famous for its enormous dome and whispering gallery.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Gol%20Gumbaz.jpg"], location:{ latitude:16.8300, longitude:75.7358 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "lalbagh", name: "Lalbagh Botanical Garden", city: "Bengaluru", state: "Karnataka", region: "South", category: "Nature", description: "Historic botanical garden known for its diverse plant collections and glasshouse.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Lalbagh%20Bengaluru.jpg"], location:{ latitude:12.9507, longitude:77.5848 }, accessibility:A("wheelchair","ramps","accessibleToilet","accessibleParking") }),

d({ id: "nandi-hills", name: "Nandi Hills", city: "Chikkaballapur", state: "Karnataka", region: "South", category: "Nature", description: "Popular hill destination known for sunrise views and scenic landscapes.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Nandi%20Hills%2C%20Bengaluru.jpg"], location:{ latitude:13.3702, longitude:77.6835 }, accessibility:A("assistanceStaff") }),

d({ id: "charminar", name: "Charminar", city: "Hyderabad", state: "Telangana", region: "South", category: "Heritage", description: "Historic monument and iconic symbol of Hyderabad.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Charminar%20at%20Hyderabad%20Telangana%20India.jpg"], location:{ latitude:17.3616, longitude:78.4747 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "golconda-fort", name: "Golconda Fort", city: "Hyderabad", state: "Telangana", region: "South", category: "Heritage", description: "Historic fortified citadel associated with the Qutb Shahi dynasty.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Golconda%20Fort%20%2C%20Hyderabad.jpg"], location:{ latitude:17.3833, longitude:78.4011 }, accessibility:A("assistanceStaff") }),

d({ id: "ramoji-film-city", name: "Ramoji Film City", city: "Hyderabad", state: "Telangana", region: "South", category: "Entertainment", description: "Large film studio complex and entertainment destination.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Ramoji%20film%20city.jpg"], location:{ latitude:17.2543, longitude:78.6808 }, accessibility:A("wheelchair","ramps","accessibleToilet","assistanceStaff") }),

d({ id: "meenakshi-amman-temple", name: "Meenakshi Amman Temple", city: "Madurai", state: "Tamil Nadu", region: "South", category: "Religious", description: "Historic temple complex famous for its ornate towers and sculptures.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Meenakshi%20Temple.jpg"], location:{ latitude:9.9195, longitude:78.1193 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "marina-beach", name: "Marina Beach", city: "Chennai", state: "Tamil Nadu", region: "South", category: "Beaches", description: "Long urban beach along the Bay of Bengal.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Marina%20beach%2C%20Chennai.jpg"], location:{ latitude:13.0500, longitude:80.2824 }, accessibility:A("wheelchair","stepFreeAccess","accessibleParking") }),

d({ id: "shore-temple", name: "Shore Temple", city: "Mahabalipuram", state: "Tamil Nadu", region: "South", category: "Heritage", description: "Historic stone temple overlooking the Bay of Bengal.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Seashore%20Temple%20at%20Mahabalipuram.jpg"], location:{ latitude:12.6169, longitude:80.1920 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "kodaikanal", name: "Kodaikanal", city: "Kodaikanal", state: "Tamil Nadu", region: "South", category: "Hill Station", description: "Scenic hill station known for its lake, forests and cool climate.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Kodaikanal%20photos.jpg"], location:{ latitude:10.2381, longitude:77.4892 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "kanyakumari", name: "Kanyakumari", city: "Kanyakumari", state: "Tamil Nadu", region: "South", category: "Coastal", description: "Southern coastal destination famous for sunrise and sunset views.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Kanyakumari.jpg"], location:{ latitude:8.0883, longitude:77.5385 }, accessibility:A("wheelchair","stepFreeAccess","assistanceStaff") }),

d({ id: "ooty", name: "Ooty", city: "Ooty", state: "Tamil Nadu", region: "South", category: "Hill Station", description: "Popular hill station surrounded by tea plantations and mountains.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Ooty%20image.jpg"], location:{ latitude:11.4102, longitude:76.6950 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "munnar", name: "Munnar", city: "Munnar", state: "Kerala", region: "South", category: "Hill Station", description: "Hill destination surrounded by tea plantations and mountain scenery.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/MUNNAR.jpg"], location:{ latitude:10.0889, longitude:77.0595 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "alleppey-backwaters", name: "Alleppey Backwaters", city: "Alappuzha", state: "Kerala", region: "South", category: "Nature", description: "Scenic network of canals, lagoons and houseboat routes.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Alappuzha%20Houseboats.jpg"], location:{ latitude:9.4981, longitude:76.3388 }, accessibility:A("wheelchair","ramps","assistanceStaff","stepFreeAccess") }),

d({ id: "varkala-beach", name: "Varkala Beach", city: "Varkala", state: "Kerala", region: "South", category: "Beaches", description: "Coastal destination known for dramatic cliffs and Arabian Sea views.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Varkala%20Beach%2C%20Kerala.jpg"], location:{ latitude:8.7379, longitude:76.7163 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "kovalam-beach", name: "Kovalam Beach", city: "Thiruvananthapuram", state: "Kerala", region: "South", category: "Beaches", description: "Popular beach destination near Thiruvananthapuram.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Kovalam%20beach%20Kerala.jpg"], location:{ latitude:8.4004, longitude:76.9787 }, accessibility:A("wheelchair","stepFreeAccess","assistanceStaff") }),

d({ id: "periyar-national-park", name: "Periyar National Park", city: "Thekkady", state: "Kerala", region: "South", category: "Wildlife", description: "Wildlife reserve surrounding scenic Periyar Lake.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Periyar%20Thekkady.jpg"], location:{ latitude:9.4627, longitude:77.2367 }, accessibility:A("assistanceStaff") }),

d({ id: "baga-beach", name: "Baga Beach", city: "North Goa", state: "Goa", region: "West", category: "Beaches", description: "Popular beach destination in North Goa.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Baga%20Beach.jpg"], location:{ latitude:15.5557, longitude:73.7517 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "basilica-bom-jesus", name: "Basilica of Bom Jesus", city: "Old Goa", state: "Goa", region: "West", category: "Religious", description: "Historic basilica and major heritage landmark in Old Goa.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Basilica%20of%20Bom%20Jesus.jpg"], location:{ latitude:15.5009, longitude:73.9118 }, accessibility:A("wheelchair","stepFreeAccess","assistanceStaff") }),

d({ id: "fort-aguada", name: "Fort Aguada", city: "Candolim", state: "Goa", region: "West", category: "Heritage", description: "Historic Portuguese fort overlooking the Arabian Sea.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/FortAguada%28Goa%29.jpg"], location:{ latitude:15.4920, longitude:73.7730 }, accessibility:A("assistanceStaff") }),

d({ id: "dudhsagar-falls", name: "Dudhsagar Falls", city: "Mollem", state: "Goa", region: "West", category: "Nature", description: "Spectacular waterfall surrounded by forest in the Western Ghats.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/DudhSagar.jpg"], location:{ latitude:15.3144, longitude:74.3144 }, accessibility:A("assistanceStaff") }),

d({ id: "city-palace-udaipur", name: "City Palace", city: "Udaipur", state: "Rajasthan", region: "West", category: "Heritage", description: "Large historic palace complex overlooking Lake Pichola.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/City%20palace%20%28Udaipur%29.jpg"], location:{ latitude:24.5764, longitude:73.6835 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "amber-fort", name: "Amber Fort", city: "Jaipur", state: "Rajasthan", region: "West", category: "Heritage", description: "Historic hill fort known for Rajput architecture.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Amber%20Fort-Jaipur.jpg"], location:{ latitude:26.9855, longitude:75.8513 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "hawa-mahal", name: "Hawa Mahal", city: "Jaipur", state: "Rajasthan", region: "West", category: "Heritage", description: "Famous pink sandstone palace facade in Jaipur.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Jaipur-Hawa-Mahal.jpg"], location:{ latitude:26.9239, longitude:75.8267 }, accessibility:A("assistanceStaff") }),

d({ id: "mehrangarh-fort", name: "Mehrangarh Fort", city: "Jodhpur", state: "Rajasthan", region: "West", category: "Heritage", description: "Massive historic fort overlooking the teal City.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Mehrangarh.JPG"], location:{ latitude:26.2971, longitude:73.0189 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "jaisalmer-fort", name: "Jaisalmer Fort", city: "Jaisalmer", state: "Rajasthan", region: "West", category: "Heritage", description: "Historic living fort rising from the Thar Desert.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/JaisalmerFort.jpg"], location:{ latitude:26.9124, longitude:70.9126 }, accessibility:A("assistanceStaff") }),

d({ id: "lake-pichola", name: "Lake Pichola", city: "Udaipur", state: "Rajasthan", region: "West", category: "Nature", description: "Scenic lake surrounded by palaces, hills and historic buildings.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Pichola.jpg"], location:{ latitude:24.5726, longitude:73.6800 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "jantar-mantar-jaipur", name: "Jantar Mantar", city: "Jaipur", state: "Rajasthan", region: "West", category: "Historical", description: "Historic astronomical observation complex built in Jaipur.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Jantar%20Mantar%20%28Jaipur%29.jpg"], location:{ latitude:26.9247, longitude:75.8246 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "ranthambore", name: "Ranthambore National Park", city: "Sawai Madhopur", state: "Rajasthan", region: "West", category: "Wildlife", description: "Popular wildlife reserve known for its tigers and historic fort.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Ranthambore%20national%20park.jpg"], location:{ latitude:26.0173, longitude:76.5026 }, accessibility:A("assistanceStaff") }),

d({ id: "agra-fort", name: "Agra Fort", city: "Agra", state: "Uttar Pradesh", region: "North", category: "Heritage", description: "Historic Mughal fort built primarily from red sandstone.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Agra%20fort%20.jpg"], location:{ latitude:27.1795, longitude:78.0211 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "sarnath", name: "Sarnath", city: "Varanasi", state: "Uttar Pradesh", region: "North", category: "Historical", description: "Important Buddhist archaeological and pilgrimage site.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Sarnath%20stupa.jpg"], location:{ latitude:25.3810, longitude:83.0210 }, accessibility:A("wheelchair","stepFreeAccess","assistanceStaff") }),

d({ id: "varanasi-ghats", name: "Varanasi Ghats", city: "Varanasi", state: "Uttar Pradesh", region: "North", category: "Cultural", description: "Historic riverfront ghats along the Ganges.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Varanasi%20Ghats.jpg"], location:{ latitude:25.3060, longitude:83.0100 }, accessibility:A("assistanceStaff") }),

d({ id: "khajuraho", name: "Khajuraho Temples", city: "Khajuraho", state: "Madhya Pradesh", region: "Central", category: "Heritage", description: "Famous group of historic temples with detailed stone carvings.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Khajuraho%20Temple%2C%20Khajuraho.jpg"], location:{ latitude:24.8318, longitude:79.9199 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "sanchi-stupa", name: "Sanchi Stupa", city: "Sanchi", state: "Madhya Pradesh", region: "Central", category: "Historical", description: "Ancient Buddhist monument and UNESCO World Heritage Site.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Sanchi%20Stupa.jpg"], location:{ latitude:23.4793, longitude:77.7397 }, accessibility:A("wheelchair","assistanceStaff") }),

d({ id: "statue-of-unity", name: "Statue of Unity", city: "Kevadia", state: "Gujarat", region: "West", category: "Landmark", description: "Massive monument and major tourism destination near the Narmada River.", images:["https://commons.wikimedia.org/wiki/Special:FilePath/Statue%20of%20Unity.jpg"], location:{ latitude:21.8384, longitude:73.7230 }, accessibility:A("wheelchair","ramps","accessibleToilet","accessibleParking","assistanceStaff") }),
];

export const hotels = [
  d({
  id: "hotel-mysuru",
  name: "Lalitha Mahal Palace Hotel",
  city: "Mysuru",
  state: "Karnataka",
  category: "Hotel",
  price: 5000,
  unit: "/ night",
  description: "Heritage hotel near major attractions of Mysuru.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lalitha_Mahal_Palace_Hotel.jpg"
  ],
  location: { latitude: 12.2981, longitude: 76.6933 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-jaipur",
  name: "Royal Lakeview Hotel",
  city: "Jaipur",
  state: "Rajasthan",
  category: "Hotel",
  price: 4500,
  unit: "/ night",
  description: "Heritage-style accommodation in Jaipur.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/India_-_Jaipur_-_001_-_Rambarh_Palace_Hotel_(1027431008).jpg"
  ],
  location: { latitude: 26.9124, longitude: 75.7873 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-chennai",
  name: "The Leela Palace Chennai",
  city: "Chennai",
  state: "Tamil Nadu",
  category: "Hotel",
  price: 6500,
  unit: "/ night",
  description: "Luxury accommodation near the Chennai coastline.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_Leela_Palace_Chennai.jpg"
  ],
  location: { latitude: 13.0196, longitude: 80.2737 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-jodhpur",
  name: "Umaid Bhawan Palace",
  city: "Jodhpur",
  state: "Rajasthan",
  category: "Hotel",
  price: 8000,
  unit: "/ night",
  description: "Historic palace accommodation in Jodhpur.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Umaid_bhawan_palace_Jodhpur.jpg"
  ],
  location: { latitude: 26.2838, longitude: 73.0477 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-udaipur",
  name: "Lake Palace Hotel",
  city: "Udaipur",
  state: "Rajasthan",
  category: "Hotel",
  price: 9000,
  unit: "/ night",
  description: "Heritage accommodation overlooking Lake Pichola.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lake_Palace,Udaipur.jpg"
  ],
  location: { latitude: 24.5754, longitude: 73.6800 },
  accessibility: A("wheelchair", "ramps", "accessibleParking")
}),

d({
  id: "hotel-mumbai",
  name: "Taj Mahal Palace",
  city: "Mumbai",
  state: "Maharashtra",
  category: "Hotel",
  price: 10000,
  unit: "/ night",
  description: "Historic luxury hotel near major attractions of Mumbai.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Taj_Mahal_Palace,_Mumbai..jpg"
  ],
  location: { latitude: 18.9217, longitude: 72.8332 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-delhi",
  name: "The Imperial Hotel",
  city: "Delhi",
  state: "Delhi",
  category: "Hotel",
  price: 7500,
  unit: "/ night",
  description: "Historic luxury hotel in central Delhi.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Imperial_Hotel,_Delhi.jpg"
  ],
  location: { latitude: 28.6289, longitude: 77.2250 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-bengaluru",
  name: "Taj West End Bangalore",
  city: "Bengaluru",
  state: "Karnataka",
  category: "Hotel",
  price: 7000,
  unit: "/ night",
  description: "Luxury heritage-style hotel in Bengaluru.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Taj_West_End_Bangalore.jpg"
  ],
  location: { latitude: 12.9843, longitude: 77.5851 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-pune",
  name: "Aga Khan Palace Stay",
  city: "Pune",
  state: "Maharashtra",
  category: "Hotel",
  price: 4500,
  unit: "/ night",
  description: "Comfortable accommodation near historic attractions of Pune.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aga_Khan_Palace_Pune.jpg"
  ],
  location: { latitude: 18.5520, longitude: 73.9010 },
  accessibility: A("wheelchair", "ramps", "accessibleParking")
}),

d({
  id: "hotel-hampi",
  name: "Hampi Heritage Stay",
  city: "Hampi",
  state: "Karnataka",
  category: "Hotel",
  price: 3000,
  unit: "/ night",
  description: "Heritage accommodation near the historic monuments of Hampi.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vittala_Temple_Hampi.jpg"
  ],
  location: { latitude: 15.3350, longitude: 76.4600 },
  accessibility: A("wheelchair", "ramps", "accessibleParking")
}),

d({
  id: "hotel-jaisalmer",
  name: "Jaisalmer Fort Heritage Stay",
  city: "Jaisalmer",
  state: "Rajasthan",
  category: "Hotel",
  price: 3500,
  unit: "/ night",
  description: "Heritage accommodation close to Jaisalmer Fort.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/JaisalmerFort.jpg"
  ],
  location: { latitude: 26.9124, longitude: 70.9120 },
  accessibility: A("wheelchair", "ramps")
}),

d({
  id: "hotel-amritsar",
  name: "Golden Temple Heritage Stay",
  city: "Amritsar",
  state: "Punjab",
  category: "Hotel",
  price: 3000,
  unit: "/ night",
  description: "Accommodation close to the Golden Temple and central Amritsar.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Golden_Temple_(Amritsar).jpg"
  ],
  location: { latitude: 31.6200, longitude: 74.8765 },
  accessibility: A("wheelchair", "ramps", "accessibleParking")
}),

d({
  id: "hotel-varanasi",
  name: "Ganges View Heritage Hotel",
  city: "Varanasi",
  state: "Uttar Pradesh",
  category: "Hotel",
  price: 3500,
  unit: "/ night",
  description: "Hotel accommodation overlooking the Ganges Ghats.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tourist_hotel_on_Varanasi_Ghats..jpg"
  ],
  location: { latitude: 25.3176, longitude: 83.0100 },
  accessibility: A("wheelchair", "ramps")
}),

d({
  id: "hotel-hyderabad",
  name: "Hyderabad Heritage Hotel",
  city: "Hyderabad",
  state: "Telangana",
  category: "Hotel",
  price: 4500,
  unit: "/ night",
  description: "Comfortable accommodation near major Hyderabad attractions.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hotel_Hyatt_Hyderabad,_at_Gachibowli_in_2023_46.jpg"
  ],
  location: { latitude: 17.4401, longitude: 78.3489 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-kochi",
  name: "Kochi Backwater Hotel",
  city: "Kochi",
  state: "Kerala",
  category: "Hotel",
  price: 5000,
  unit: "/ night",
  description: "Hotel accommodation with views of Kochi's backwaters.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Crowne_Plaza_-_Hotel_Building_-_Kochi_2026-09-03_02467.jpg"
  ],
  location: { latitude: 9.9312, longitude: 76.2673 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-madurai",
  name: "Madurai Heritage Stay",
  city: "Madurai",
  state: "Tamil Nadu",
  category: "Hotel",
  price: 3000,
  unit: "/ night",
  description: "Heritage accommodation near the historic attractions of Madurai.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Meenakshi_Temple_at_Madurai_(37268735210).jpg"
  ],
  location: { latitude: 9.9252, longitude: 78.1198 },
  accessibility: A("wheelchair", "ramps", "accessibleParking")
}),

d({
  id: "hotel-hyderabad-charminar",
  name: "Charminar City Hotel",
  city: "Hyderabad",
  state: "Telangana",
  category: "Hotel",
  price: 3200,
  unit: "/ night",
  description: "City accommodation close to the historic Charminar area.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Charminar_in_Hyderabad,_India.jpg"
  ],
  location: { latitude: 17.3616, longitude: 78.4747 },
  accessibility: A("wheelchair", "ramps")
}),

d({
  id: "hotel-jaipur-rajmahal",
  name: "Rajmahal Palace Hotel",
  city: "Jaipur",
  state: "Rajasthan",
  category: "Hotel",
  price: 6500,
  unit: "/ night",
  description: "Historic palace-style hotel in Jaipur.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Raj_Mahal_Jaipur_2019_(1).jpg"
  ],
  location: { latitude: 26.9048, longitude: 75.7918 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-pune-amanora",
  name: "Amanora The Fern Hotel",
  city: "Pune",
  state: "Maharashtra",
  category: "Hotel",
  price: 4200,
  unit: "/ night",
  description: "Modern hotel accommodation in Pune.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Amanora_The_Fern_Hotels_%26_Club_(47731).jpg"
  ],
  location: { latitude: 18.5179, longitude: 73.9405 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
}),

d({
  id: "hotel-mumbai-gateway",
  name: "Gateway City Hotel",
  city: "Mumbai",
  state: "Maharashtra",
  category: "Hotel",
  price: 5500,
  unit: "/ night",
  description: "City accommodation near Mumbai's major tourist attractions.",
  images: [
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gateway_of_India,_Mumbai,_India.jpg"
  ],
  location: { latitude: 18.9219, longitude: 72.8347 },
  accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking")
})
 ];
export const vehicles = [
  
  d({
  id: "v1",
  name: "Wheelchair Van",
  city: "Mysuru",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Demo wheelchair-accessible van with ramp.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Wheelchair_loading_system_in_van.jpg"],
  location: { latitude: 12.30, longitude: 76.64 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v2",
  name: "Accessible Travel Van",
  city: "Jaipur",
  category: "Accessible van",
  price: 3200,
  unit: "/ day",
  description: "Wheelchair-accessible travel van for city transportation.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/MV-1_Access-A-Ride.jpg"],
  location: { latitude: 26.92, longitude: 75.80 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v3",
  name: "Wheelchair Transport Van",
  city: "Chennai",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible van equipped for wheelchair transportation.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Behindertentransporter_mit_Rollstuhlrampe.jpg"],
  location: { latitude: 13.05, longitude: 80.27 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v4",
  name: "Accessible Tourist Van",
  city: "Agra",
  category: "Accessible van",
  price: 2900,
  unit: "/ day",
  description: "Accessible tourist van with wheelchair ramp.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/1998-2000_Chrysler_T%26C_Limited,_BraunAbility_Entervan.jpg"],
  location: { latitude: 27.17, longitude: 78.04 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v5",
  name: "Wheelchair Taxi",
  city: "Amritsar",
  category: "Accessible taxi",
  price: 2800,
  unit: "/ day",
  description: "Wheelchair-friendly taxi for accessible city travel.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Taksio_por_malkapabluloj.jpg"],
  location: { latitude: 31.62, longitude: 74.87 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v6",
  name: "Capital Accessible Van",
  city: "Delhi",
  category: "Accessible van",
  price: 3200,
  unit: "/ day",
  description: "Wheelchair-accessible van for Delhi sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Wheelchair_loading_system_in_van.jpg"],
  location: { latitude: 28.61, longitude: 77.21 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v7",
  name: "Heritage Mobility Van",
  city: "Jodhpur",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible vehicle for heritage tourism.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/MV-1_Access-A-Ride.jpg"],
  location: { latitude: 26.29, longitude: 73.02 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v8",
  name: "Desert Accessible Van",
  city: "Jaisalmer",
  category: "Accessible van",
  price: 3500,
  unit: "/ day",
  description: "Wheelchair-accessible vehicle for desert tours.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Behindertentransporter_mit_Rollstuhlrampe.jpg"],
  location: { latitude: 26.91, longitude: 70.91 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v9",
  name: "Lake City Mobility Van",
  city: "Udaipur",
  category: "Accessible van",
  price: 3200,
  unit: "/ day",
  description: "Accessible vehicle for Udaipur sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/1998-2000_Chrysler_T%26C_Limited,_BraunAbility_Entervan.jpg"],
  location: { latitude: 24.58, longitude: 73.68 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v10",
  name: "Ganga Accessible Van",
  city: "Varanasi",
  category: "Accessible van",
  price: 2900,
  unit: "/ day",
  description: "Accessible vehicle for riverside sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Taksio_por_malkapabluloj.jpg"],
  location: { latitude: 25.31, longitude: 83.01 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v11",
  name: "Bhopal Accessible Van",
  city: "Bhopal",
  category: "Accessible van",
  price: 2800,
  unit: "/ day",
  description: "Wheelchair-accessible city travel van.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Wheelchair_loading_system_in_van.jpg"],
  location: { latitude: 23.26, longitude: 77.41 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v12",
  name: "Khajuraho Mobility Van",
  city: "Khajuraho",
  category: "Accessible van",
  price: 2800,
  unit: "/ day",
  description: "Accessible transport for heritage sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/MV-1_Access-A-Ride.jpg"],
  location: { latitude: 24.83, longitude: 79.92 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v13",
  name: "Mumbai Wheelchair Van",
  city: "Mumbai",
  category: "Accessible van",
  price: 3500,
  unit: "/ day",
  description: "Wheelchair-accessible vehicle for Mumbai travel.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Behindertentransporter_mit_Rollstuhlrampe.jpg"],
  location: { latitude: 18.92, longitude: 72.83 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v14",
  name: "Marine Drive Accessible Taxi",
  city: "Mumbai",
  category: "Accessible taxi",
  price: 2800,
  unit: "/ day",
  description: "Accessible taxi for Mumbai sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Taksio_por_malkapabluloj.jpg"],
  location: { latitude: 18.94, longitude: 72.82 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v15",
  name: "Pune Accessible Van",
  city: "Pune",
  category: "Accessible van",
  price: 2900,
  unit: "/ day",
  description: "Wheelchair-accessible vehicle for Pune.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/1998-2000_Chrysler_T%26C_Limited,_BraunAbility_Entervan.jpg"],
  location: { latitude: 18.52, longitude: 73.85 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v16",
  name: "Hampi Heritage Van",
  city: "Hampi",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible vehicle for heritage sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Wheelchair_loading_system_in_van.jpg"],
  location: { latitude: 15.33, longitude: 76.46 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v17",
  name: "Bengaluru Accessible Van",
  city: "Bengaluru",
  category: "Accessible van",
  price: 3200,
  unit: "/ day",
  description: "Wheelchair-accessible city travel van.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/MV-1_Access-A-Ride.jpg"],
  location: { latitude: 12.97, longitude: 77.59 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v18",
  name: "Coorg Mobility Van",
  city: "Madikeri",
  category: "Accessible van",
  price: 3100,
  unit: "/ day",
  description: "Accessible vehicle for hill and resort travel.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Behindertentransporter_mit_Rollstuhlrampe.jpg"],
  location: { latitude: 12.42, longitude: 75.74 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v19",
  name: "Gokarna Beach Van",
  city: "Gokarna",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible vehicle for coastal sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/1998-2000_Chrysler_T%26C_Limited,_BraunAbility_Entervan.jpg"],
  location: { latitude: 14.55, longitude: 74.32 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v20",
  name: "Charminar Accessible Van",
  city: "Hyderabad",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible sightseeing vehicle for Hyderabad.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Taksio_por_malkapabluloj.jpg"],
  location: { latitude: 17.36, longitude: 78.47 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v21",
  name: "Golconda Accessible Van",
  city: "Hyderabad",
  category: "Accessible van",
  price: 3100,
  unit: "/ day",
  description: "Wheelchair-accessible vehicle for heritage tours.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Wheelchair_loading_system_in_van.jpg"],
  location: { latitude: 17.38, longitude: 78.40 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v22",
  name: "Kochi Waterfront Van",
  city: "Kochi",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible vehicle for Kochi sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/MV-1_Access-A-Ride.jpg"],
  location: { latitude: 9.97, longitude: 76.28 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v23",
  name: "Munnar Hill Van",
  city: "Munnar",
  category: "Accessible van",
  price: 3200,
  unit: "/ day",
  description: "Accessible travel van for hill tourism.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Behindertentransporter_mit_Rollstuhlrampe.jpg"],
  location: { latitude: 10.09, longitude: 77.06 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v24",
  name: "Alleppey Backwater Van",
  city: "Alappuzha",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible vehicle for backwater sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/1998-2000_Chrysler_T%26C_Limited,_BraunAbility_Entervan.jpg"],
  location: { latitude: 9.50, longitude: 76.34 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v25",
  name: "Kovalam Accessible Van",
  city: "Thiruvananthapuram",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible coastal travel vehicle.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Taksio_por_malkapabluloj.jpg"],
  location: { latitude: 8.40, longitude: 76.98 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v26",
  name: "Goa Coastal Van",
  city: "Panaji",
  category: "Accessible van",
  price: 3500,
  unit: "/ day",
  description: "Wheelchair-accessible vehicle for Goa tours.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Wheelchair_loading_system_in_van.jpg"],
  location: { latitude: 15.49, longitude: 73.83 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v27",
  name: "Baga Beach Accessible Van",
  city: "Baga",
  category: "Accessible van",
  price: 3200,
  unit: "/ day",
  description: "Accessible vehicle for beach tourism.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/MV-1_Access-A-Ride.jpg"],
  location: { latitude: 15.56, longitude: 73.75 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v28",
  name: "Puri Beach Van",
  city: "Puri",
  category: "Accessible van",
  price: 2900,
  unit: "/ day",
  description: "Accessible vehicle for Puri sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Behindertentransporter_mit_Rollstuhlrampe.jpg"],
  location: { latitude: 19.80, longitude: 85.82 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v29",
  name: "Bhubaneswar Accessible Van",
  city: "Bhubaneswar",
  category: "Accessible van",
  price: 2900,
  unit: "/ day",
  description: "Accessible city sightseeing vehicle.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/1998-2000_Chrysler_T%26C_Limited,_BraunAbility_Entervan.jpg"],
  location: { latitude: 20.27, longitude: 85.84 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v30",
  name: "Kolkata Accessible Van",
  city: "Kolkata",
  category: "Accessible van",
  price: 3200,
  unit: "/ day",
  description: "Wheelchair-accessible city travel van.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Taksio_por_malkapabluloj.jpg"],
  location: { latitude: 22.57, longitude: 88.36 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v31",
  name: "Darjeeling Mountain Van",
  city: "Darjeeling",
  category: "Accessible van",
  price: 3300,
  unit: "/ day",
  description: "Accessible vehicle for mountain sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Wheelchair_loading_system_in_van.jpg"],
  location: { latitude: 27.04, longitude: 88.27 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v32",
  name: "Guwahati Riverside Van",
  city: "Guwahati",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible vehicle for city and riverside travel.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/MV-1_Access-A-Ride.jpg"],
  location: { latitude: 26.14, longitude: 91.74 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v33",
  name: "Kaziranga Safari Van",
  city: "Kaziranga",
  category: "Accessible safari van",
  price: 3800,
  unit: "/ day",
  description: "Accessible vehicle for nature and wildlife tourism.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Behindertentransporter_mit_Rollstuhlrampe.jpg"],
  location: { latitude: 26.58, longitude: 93.17 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v34",
  name: "Shillong Accessible Van",
  city: "Shillong",
  category: "Accessible van",
  price: 3200,
  unit: "/ day",
  description: "Wheelchair-accessible hill travel vehicle.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/1998-2000_Chrysler_T%26C_Limited,_BraunAbility_Entervan.jpg"],
  location: { latitude: 25.58, longitude: 91.89 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v35",
  name: "Gangtok Mountain Van",
  city: "Gangtok",
  category: "Accessible van",
  price: 3400,
  unit: "/ day",
  description: "Accessible vehicle for mountain tourism.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Taksio_por_malkapabluloj.jpg"],
  location: { latitude: 27.34, longitude: 88.61 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v36",
  name: "Pelling Valley Van",
  city: "Pelling",
  category: "Accessible van",
  price: 3300,
  unit: "/ day",
  description: "Accessible travel vehicle for valley tours.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Wheelchair_loading_system_in_van.jpg"],
  location: { latitude: 27.23, longitude: 88.26 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v37",
  name: "Srinagar Accessible Van",
  city: "Srinagar",
  category: "Accessible van",
  price: 3400,
  unit: "/ day",
  description: "Wheelchair-accessible vehicle for Srinagar tours.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/MV-1_Access-A-Ride.jpg"],
  location: { latitude: 34.08, longitude: 74.80 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v38",
  name: "Gulmarg Mobility Van",
  city: "Gulmarg",
  category: "Accessible van",
  price: 3600,
  unit: "/ day",
  description: "Accessible vehicle for mountain tourism.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Behindertentransporter_mit_Rollstuhlrampe.jpg"],
  location: { latitude: 34.05, longitude: 74.38 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v39",
  name: "Leh Accessible Van",
  city: "Leh",
  category: "Accessible van",
  price: 3800,
  unit: "/ day",
  description: "Accessible vehicle for Ladakh sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/1998-2000_Chrysler_T%26C_Limited,_BraunAbility_Entervan.jpg"],
  location: { latitude: 34.17, longitude: 77.58 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v40",
  name: "Pangong Accessible Vehicle",
  city: "Leh",
  category: "Accessible van",
  price: 4000,
  unit: "/ day",
  description: "Accessible tourism vehicle for Pangong Lake trips.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Taksio_por_malkapabluloj.jpg"],
  location: { latitude: 33.76, longitude: 78.67 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v41",
  name: "Manali Accessible Van",
  city: "Manali",
  category: "Accessible van",
  price: 3300,
  unit: "/ day",
  description: "Wheelchair-accessible mountain travel van.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Wheelchair_loading_system_in_van.jpg"],
  location: { latitude: 32.24, longitude: 77.19 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v42",
  name: "Shimla Accessible Van",
  city: "Shimla",
  category: "Accessible van",
  price: 3300,
  unit: "/ day",
  description: "Accessible vehicle for hill station travel.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/MV-1_Access-A-Ride.jpg"],
  location: { latitude: 31.10, longitude: 77.17 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v43",
  name: "Dharamshala Mobility Van",
  city: "Dharamshala",
  category: "Accessible van",
  price: 3200,
  unit: "/ day",
  description: "Accessible vehicle for mountain sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Behindertentransporter_mit_Rollstuhlrampe.jpg"],
  location: { latitude: 32.22, longitude: 76.32 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v44",
  name: "Rishikesh Riverside Van",
  city: "Rishikesh",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible vehicle for riverside tourism.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/1998-2000_Chrysler_T%26C_Limited,_BraunAbility_Entervan.jpg"],
  location: { latitude: 30.09, longitude: 78.27 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v45",
  name: "Haridwar Accessible Van",
  city: "Haridwar",
  category: "Accessible van",
  price: 2900,
  unit: "/ day",
  description: "Wheelchair-accessible vehicle for pilgrimage travel.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Taksio_por_malkapabluloj.jpg"],
  location: { latitude: 29.95, longitude: 78.16 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v46",
  name: "Bodh Gaya Accessible Van",
  city: "Bodh Gaya",
  category: "Accessible van",
  price: 2800,
  unit: "/ day",
  description: "Accessible vehicle for pilgrimage sightseeing.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Wheelchair_loading_system_in_van.jpg"],
  location: { latitude: 24.70, longitude: 84.99 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v47",
  name: "Patna Accessible Van",
  city: "Patna",
  category: "Accessible van",
  price: 2900,
  unit: "/ day",
  description: "Accessible city transportation van.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/MV-1_Access-A-Ride.jpg"],
  location: { latitude: 25.59, longitude: 85.14 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v48",
  name: "Ranchi Accessible Van",
  city: "Ranchi",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Wheelchair-accessible vehicle for Ranchi travel.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Behindertentransporter_mit_Rollstuhlrampe.jpg"],
  location: { latitude: 23.34, longitude: 85.31 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v49",
  name: "Kutch Desert Van",
  city: "Kutch",
  category: "Accessible van",
  price: 3500,
  unit: "/ day",
  description: "Accessible vehicle for desert tourism.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/1998-2000_Chrysler_T%26C_Limited,_BraunAbility_Entervan.jpg"],
  location: { latitude: 23.73, longitude: 69.86 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),

d({
  id: "v50",
  name: "Somnath Coastal Van",
  city: "Somnath",
  category: "Accessible van",
  price: 3000,
  unit: "/ day",
  description: "Accessible vehicle for coastal and pilgrimage travel.",
  images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Taksio_por_malkapabluloj.jpg"],
  location: { latitude: 20.89, longitude: 70.40 },
  accessibility: A("wheelchair", "ramps", "assistanceStaff")
}),
];
export const guides = [
  d({ id: "g1", name: "Asha R.", city: "Mysuru", category: "Kannada, English", price: 1500, unit: "/ day", description: "Demo guide profile with wheelchair traveller experience.", location: { latitude: 12.30, longitude: 76.65 }, accessibility: A("wheelchair", "assistanceStaff", "audioAssistance") }),
  d({ id: "g2", name: "Imran K.", city: "Agra", category: "Hindi, English", price: 1800, unit: "/ day", description: "Demo guide profile with sign language support.", location: { latitude: 27.17, longitude: 78.04 }, accessibility: A("hearingAssistance", "assistanceStaff") }),
  d({ id: "g3", name: "Rahul S.", city: "Delhi", category: "Hindi, English", price: 1600, unit: "/ day", description: "Demo accessible tourism guide.", location: { latitude: 28.61, longitude: 77.21 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g4", name: "Priya M.", city: "Jaipur", category: "Hindi, English", price: 1700, unit: "/ day", description: "Demo heritage tour guide.", location: { latitude: 26.92, longitude: 75.80 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g5", name: "Arjun N.", city: "Mumbai", category: "Hindi, English, Marathi", price: 1900, unit: "/ day", description: "Demo city guide.", location: { latitude: 18.94, longitude: 72.83 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g6", name: "Sneha P.", city: "Pune", category: "English, Marathi", price: 1500, unit: "/ day", description: "Demo accessible guide.", location: { latitude: 18.52, longitude: 73.85 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g7", name: "Kiran R.", city: "Bengaluru", category: "Kannada, English", price: 1600, unit: "/ day", description: "Demo accessible city guide.", location: { latitude: 12.97, longitude: 77.59 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g8", name: "Megha T.", city: "Hampi", category: "Kannada, English, Hindi", price: 1800, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 15.33, longitude: 76.46 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g9", name: "Vivek B.", city: "Hyderabad", category: "Telugu, Hindi, English", price: 1500, unit: "/ day", description: "Demo city guide.", location: { latitude: 17.38, longitude: 78.48 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g10", name: "Anjali P.", city: "Chennai", category: "Tamil, English", price: 1600, unit: "/ day", description: "Demo accessible tourism guide.", location: { latitude: 13.05, longitude: 80.27 }, accessibility: A("wheelchair", "hearingAssistance") }),

  d({ id: "g11", name: "Suresh K.", city: "Mysuru", category: "Kannada, Hindi, English", price: 1400, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 12.31, longitude: 76.65 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g12", name: "Divya S.", city: "Ooty", category: "Tamil, English", price: 1600, unit: "/ day", description: "Demo hill station guide.", location: { latitude: 11.41, longitude: 76.70 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g13", name: "Manoj V.", city: "Kochi", category: "Malayalam, English", price: 1700, unit: "/ day", description: "Demo accessible tourism guide.", location: { latitude: 9.97, longitude: 76.28 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "g14", name: "Neha A.", city: "Munnar", category: "Malayalam, English, Hindi", price: 1800, unit: "/ day", description: "Demo nature guide.", location: { latitude: 10.09, longitude: 77.06 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g15", name: "Faisal H.", city: "Srinagar", category: "Hindi, English, Urdu", price: 1900, unit: "/ day", description: "Demo accessible tourism guide.", location: { latitude: 34.08, longitude: 74.80 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g16", name: "Rohit G.", city: "Manali", category: "Hindi, English", price: 1800, unit: "/ day", description: "Demo mountain guide.", location: { latitude: 32.24, longitude: 77.19 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g17", name: "Kavya J.", city: "Shimla", category: "Hindi, English", price: 1700, unit: "/ day", description: "Demo hill station guide.", location: { latitude: 31.10, longitude: 77.17 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g18", name: "Aman D.", city: "Rishikesh", category: "Hindi, English", price: 1600, unit: "/ day", description: "Demo tourism guide.", location: { latitude: 30.09, longitude: 78.27 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g19", name: "Pooja N.", city: "Varanasi", category: "Hindi, English", price: 1500, unit: "/ day", description: "Demo cultural guide.", location: { latitude: 25.31, longitude: 83.01 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g20", name: "Aditya P.", city: "Amritsar", category: "Punjabi, Hindi, English", price: 1600, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 31.62, longitude: 74.87 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "g21", name: "Rakesh M.", city: "Jodhpur", category: "Hindi, English", price: 1700, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 26.29, longitude: 73.02 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g22", name: "Nisha R.", city: "Udaipur", category: "Hindi, English", price: 1700, unit: "/ day", description: "Demo city guide.", location: { latitude: 24.58, longitude: 73.68 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g23", name: "Vikas S.", city: "Jaisalmer", category: "Hindi, English", price: 1800, unit: "/ day", description: "Demo desert guide.", location: { latitude: 26.91, longitude: 70.91 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g24", name: "Isha K.", city: "Khajuraho", category: "Hindi, English", price: 1600, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 24.83, longitude: 79.92 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g25", name: "Ravi T.", city: "Bhopal", category: "Hindi, English", price: 1400, unit: "/ day", description: "Demo city guide.", location: { latitude: 23.26, longitude: 77.41 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g26", name: "Snehal P.", city: "Aurangabad", category: "Marathi, Hindi, English", price: 1600, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 19.88, longitude: 75.34 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g27", name: "Akshay J.", city: "Nashik", category: "Marathi, Hindi, English", price: 1500, unit: "/ day", description: "Demo tourism guide.", location: { latitude: 20.00, longitude: 73.79 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g28", name: "Farhan A.", city: "Hyderabad", category: "Telugu, Urdu, English", price: 1700, unit: "/ day", description: "Demo accessible city guide.", location: { latitude: 17.36, longitude: 78.47 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g29", name: "Lakshmi R.", city: "Tirupati", category: "Telugu, English", price: 1500, unit: "/ day", description: "Demo pilgrimage guide.", location: { latitude: 13.63, longitude: 79.42 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g30", name: "Sanjay K.", city: "Vijayawada", category: "Telugu, Hindi, English", price: 1400, unit: "/ day", description: "Demo city guide.", location: { latitude: 16.51, longitude: 80.65 }, accessibility: A("wheelchair", "audioAssistance") }),

  d({ id: "g31", name: "Anu M.", city: "Goa", category: "English, Hindi, Konkani", price: 1800, unit: "/ day", description: "Demo coastal guide.", location: { latitude: 15.49, longitude: 73.83 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g32", name: "Joel F.", city: "Goa", category: "English, Konkani", price: 1900, unit: "/ day", description: "Demo accessible guide.", location: { latitude: 15.56, longitude: 73.75 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g33", name: "Sanjana D.", city: "Puri", category: "Odia, Hindi, English", price: 1500, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 19.80, longitude: 85.82 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g34", name: "Debashish S.", city: "Bhubaneswar", category: "Odia, English", price: 1500, unit: "/ day", description: "Demo cultural guide.", location: { latitude: 20.27, longitude: 85.84 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g35", name: "Soham B.", city: "Kolkata", category: "Bengali, Hindi, English", price: 1700, unit: "/ day", description: "Demo city guide.", location: { latitude: 22.57, longitude: 88.36 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g36", name: "Riya C.", city: "Darjeeling", category: "Bengali, Hindi, English", price: 1800, unit: "/ day", description: "Demo mountain guide.", location: { latitude: 27.04, longitude: 88.27 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g37", name: "Arun B.", city: "Guwahati", category: "Assamese, Hindi, English", price: 1500, unit: "/ day", description: "Demo city guide.", location: { latitude: 26.14, longitude: 91.74 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g38", name: "Maya L.", city: "Shillong", category: "English, Khasi, Hindi", price: 1700, unit: "/ day", description: "Demo hill guide.", location: { latitude: 25.58, longitude: 91.89 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g39", name: "Tashi N.", city: "Gangtok", category: "English, Hindi, Nepali", price: 1800, unit: "/ day", description: "Demo mountain guide.", location: { latitude: 27.34, longitude: 88.61 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g40", name: "Sonam T.", city: "Leh", category: "English, Hindi, Ladakhi", price: 2000, unit: "/ day", description: "Demo Ladakh guide.", location: { latitude: 34.17, longitude: 77.58 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "g41", name: "Pema D.", city: "Tawang", category: "English, Hindi", price: 1800, unit: "/ day", description: "Demo mountain guide.", location: { latitude: 27.59, longitude: 91.86 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g42", name: "Nima T.", city: "Pelling", category: "English, Hindi, Nepali", price: 1700, unit: "/ day", description: "Demo valley guide.", location: { latitude: 27.23, longitude: 88.26 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g43", name: "Lalrem S.", city: "Aizawl", category: "English, Hindi, Mizo", price: 1500, unit: "/ day", description: "Demo city guide.", location: { latitude: 23.73, longitude: 92.72 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g44", name: "Temjen A.", city: "Kohima", category: "English, Hindi, Nagamese", price: 1600, unit: "/ day", description: "Demo cultural guide.", location: { latitude: 25.67, longitude: 94.11 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g45", name: "Rohan P.", city: "Agartala", category: "Bengali, Hindi, English", price: 1400, unit: "/ day", description: "Demo city guide.", location: { latitude: 23.83, longitude: 91.29 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g46", name: "Kabir S.", city: "Port Blair", category: "Hindi, English", price: 1800, unit: "/ day", description: "Demo island guide.", location: { latitude: 11.62, longitude: 92.73 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g47", name: "Amin K.", city: "Kavaratti", category: "English, Hindi, Malayalam", price: 1900, unit: "/ day", description: "Demo island guide.", location: { latitude: 10.57, longitude: 72.64 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g48", name: "Danish R.", city: "Daman", category: "Hindi, English, Gujarati", price: 1500, unit: "/ day", description: "Demo coastal guide.", location: { latitude: 20.42, longitude: 72.83 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g49", name: "Harsh P.", city: "Ahmedabad", category: "Gujarati, Hindi, English", price: 1600, unit: "/ day", description: "Demo city guide.", location: { latitude: 23.02, longitude: 72.57 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g50", name: "Mehul G.", city: "Kutch", category: "Gujarati, Hindi, English", price: 1700, unit: "/ day", description: "Demo desert guide.", location: { latitude: 23.73, longitude: 69.86 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "g51", name: "Ravi D.", city: "Somnath", category: "Gujarati, Hindi, English", price: 1500, unit: "/ day", description: "Demo pilgrimage guide.", location: { latitude: 20.89, longitude: 70.40 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g52", name: "Nitin J.", city: "Dwarka", category: "Gujarati, Hindi, English", price: 1500, unit: "/ day", description: "Demo pilgrimage guide.", location: { latitude: 22.24, longitude: 68.97 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g53", name: "Varun K.", city: "Ranchi", category: "Hindi, English", price: 1400, unit: "/ day", description: "Demo city guide.", location: { latitude: 23.34, longitude: 85.31 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g54", name: "Neeraj T.", city: "Bodh Gaya", category: "Hindi, English", price: 1600, unit: "/ day", description: "Demo Buddhist heritage guide.", location: { latitude: 24.70, longitude: 84.99 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g55", name: "Siddharth N.", city: "Nalanda", category: "Hindi, English", price: 1500, unit: "/ day", description: "Demo historical guide.", location: { latitude: 25.14, longitude: 85.44 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g56", name: "Pankaj R.", city: "Chandigarh", category: "Hindi, English", price: 1500, unit: "/ day", description: "Demo city guide.", location: { latitude: 30.74, longitude: 76.79 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g57", name: "Harpreet S.", city: "Amritsar", category: "Punjabi, Hindi, English", price: 1700, unit: "/ day", description: "Demo cultural guide.", location: { latitude: 31.62, longitude: 74.87 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g58", name: "Mohit V.", city: "Haridwar", category: "Hindi, English", price: 1500, unit: "/ day", description: "Demo pilgrimage guide.", location: { latitude: 29.95, longitude: 78.16 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g59", name: "Ankit S.", city: "Dehradun", category: "Hindi, English", price: 1400, unit: "/ day", description: "Demo city guide.", location: { latitude: 30.32, longitude: 78.03 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g60", name: "Karan B.", city: "Corbett", category: "Hindi, English", price: 1800, unit: "/ day", description: "Demo wildlife guide.", location: { latitude: 29.53, longitude: 78.77 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "g61", name: "Sagar M.", city: "Nashik", category: "Marathi, Hindi, English", price: 1500, unit: "/ day", description: "Demo tourism guide.", location: { latitude: 20.00, longitude: 73.79 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g62", name: "Aarti V.", city: "Lonavala", category: "Marathi, English", price: 1600, unit: "/ day", description: "Demo hill guide.", location: { latitude: 18.75, longitude: 73.41 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g63", name: "Ritesh P.", city: "Mahabaleshwar", category: "Marathi, Hindi, English", price: 1600, unit: "/ day", description: "Demo hill station guide.", location: { latitude: 17.93, longitude: 73.65 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g64", name: "Sameer K.", city: "Pune", category: "Marathi, Hindi, English", price: 1500, unit: "/ day", description: "Demo city guide.", location: { latitude: 18.52, longitude: 73.85 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g65", name: "Naveen H.", city: "Mysuru", category: "Kannada, English", price: 1500, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 12.30, longitude: 76.65 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g66", name: "Shreya N.", city: "Coorg", category: "Kannada, English", price: 1600, unit: "/ day", description: "Demo nature guide.", location: { latitude: 12.42, longitude: 75.74 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g67", name: "Manoj K.", city: "Udupi", category: "Kannada, Tulu, English", price: 1500, unit: "/ day", description: "Demo cultural guide.", location: { latitude: 13.34, longitude: 74.74 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g68", name: "Prakash R.", city: "Gokarna", category: "Kannada, English, Hindi", price: 1600, unit: "/ day", description: "Demo coastal guide.", location: { latitude: 14.55, longitude: 74.32 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g69", name: "Tejas S.", city: "Hampi", category: "Kannada, English, Hindi", price: 1800, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 15.33, longitude: 76.46 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g70", name: "Ramesh B.", city: "Badami", category: "Kannada, English", price: 1500, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 15.95, longitude: 75.68 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "g71", name: "Ganesh P.", city: "Vijayapura", category: "Kannada, English", price: 1500, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 16.83, longitude: 75.71 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g72", name: "Madhav K.", city: "Mangaluru", category: "Kannada, Tulu, English", price: 1600, unit: "/ day", description: "Demo coastal guide.", location: { latitude: 12.91, longitude: 74.86 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g73", name: "Rohan S.", city: "Alappuzha", category: "Malayalam, English", price: 1600, unit: "/ day", description: "Demo backwater guide.", location: { latitude: 9.50, longitude: 76.34 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g74", name: "Akhil M.", city: "Kovalam", category: "Malayalam, English", price: 1500, unit: "/ day", description: "Demo beach guide.", location: { latitude: 8.40, longitude: 76.98 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g75", name: "Joseph T.", city: "Kochi", category: "Malayalam, English", price: 1700, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 9.97, longitude: 76.28 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g76", name: "Nikhil P.", city: "Goa", category: "English, Hindi, Konkani", price: 1800, unit: "/ day", description: "Demo beach guide.", location: { latitude: 15.49, longitude: 73.83 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g77", name: "Rahul D.", city: "Puri", category: "Odia, English, Hindi", price: 1500, unit: "/ day", description: "Demo cultural guide.", location: { latitude: 19.80, longitude: 85.82 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g78", name: "Abhishek S.", city: "Kolkata", category: "Bengali, English, Hindi", price: 1700, unit: "/ day", description: "Demo cultural guide.", location: { latitude: 22.57, longitude: 88.36 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g79", name: "Ritu M.", city: "Guwahati", category: "Assamese, English, Hindi", price: 1500, unit: "/ day", description: "Demo city guide.", location: { latitude: 26.14, longitude: 91.74 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g80", name: "Bikash D.", city: "Kaziranga", category: "Assamese, Hindi, English", price: 1800, unit: "/ day", description: "Demo wildlife guide.", location: { latitude: 26.58, longitude: 93.17 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "g81", name: "Tenzin P.", city: "Leh", category: "English, Hindi, Ladakhi", price: 2000, unit: "/ day", description: "Demo mountain guide.", location: { latitude: 34.17, longitude: 77.58 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g82", name: "Sonam K.", city: "Gulmarg", category: "Hindi, English", price: 1900, unit: "/ day", description: "Demo mountain guide.", location: { latitude: 34.05, longitude: 74.38 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g83", name: "Faisal A.", city: "Srinagar", category: "Urdu, Hindi, English", price: 1800, unit: "/ day", description: "Demo cultural guide.", location: { latitude: 34.08, longitude: 74.80 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g84", name: "Vijay N.", city: "Jaisalmer", category: "Hindi, English", price: 1800, unit: "/ day", description: "Demo desert guide.", location: { latitude: 26.91, longitude: 70.91 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g85", name: "Kunal R.", city: "Jodhpur", category: "Hindi, English", price: 1700, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 26.29, longitude: 73.02 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g86", name: "Mohan S.", city: "Udaipur", category: "Hindi, English", price: 1700, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 24.58, longitude: 73.68 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g87", name: "Deepak T.", city: "Agra", category: "Hindi, English", price: 1600, unit: "/ day", description: "Demo historical guide.", location: { latitude: 27.17, longitude: 78.04 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g88", name: "Amit P.", city: "Delhi", category: "Hindi, English", price: 1600, unit: "/ day", description: "Demo city guide.", location: { latitude: 28.61, longitude: 77.21 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g89", name: "Ravi K.", city: "Jaipur", category: "Hindi, English", price: 1700, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 26.92, longitude: 75.80 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g90", name: "Mukul S.", city: "Bhopal", category: "Hindi, English", price: 1500, unit: "/ day", description: "Demo city guide.", location: { latitude: 23.26, longitude: 77.41 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "g91", name: "Sahil R.", city: "Mumbai", category: "Hindi, English, Marathi", price: 1900, unit: "/ day", description: "Demo city guide.", location: { latitude: 18.94, longitude: 72.83 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g92", name: "Pritam K.", city: "Pune", category: "Marathi, Hindi, English", price: 1600, unit: "/ day", description: "Demo city guide.", location: { latitude: 18.52, longitude: 73.85 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g93", name: "Rakesh P.", city: "Hyderabad", category: "Telugu, Hindi, English", price: 1600, unit: "/ day", description: "Demo city guide.", location: { latitude: 17.38, longitude: 78.48 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g94", name: "Mohan V.", city: "Chennai", category: "Tamil, English", price: 1600, unit: "/ day", description: "Demo city guide.", location: { latitude: 13.05, longitude: 80.27 }, accessibility: A("wheelchair", "hearingAssistance") }),
  d({ id: "g95", name: "Arun K.", city: "Madurai", category: "Tamil, English", price: 1500, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 9.92, longitude: 78.12 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g96", name: "Vishnu P.", city: "Thanjavur", category: "Tamil, English", price: 1500, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 10.78, longitude: 79.13 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g97", name: "Manu R.", city: "Kochi", category: "Malayalam, English", price: 1600, unit: "/ day", description: "Demo accessible guide.", location: { latitude: 9.97, longitude: 76.28 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "g98", name: "Sandeep N.", city: "Bengaluru", category: "Kannada, English, Hindi", price: 1700, unit: "/ day", description: "Demo accessible city guide.", location: { latitude: 12.97, longitude: 77.59 }, accessibility: A("wheelchair", "hearingAssistance", "assistanceStaff") }),
  d({ id: "g99", name: "Karthik S.", city: "Mysuru", category: "Kannada, English", price: 1500, unit: "/ day", description: "Demo heritage guide.", location: { latitude: 12.30, longitude: 76.65 }, accessibility: A("wheelchair", "audioAssistance") }),
  d({ id: "g100", name: "Varun M.", city: "Kanyakumari", category: "Tamil, English, Hindi", price: 1600, unit: "/ day", description: "Demo coastal guide.", location: { latitude: 8.09, longitude: 77.54 }, accessibility: A("wheelchair", "assistanceStaff") }),
];
export const transport = [
  d({ id: "t1", name: "Bengaluru → Mysuru", city: "Bengaluru", category: "Train", price: 450, unit: "/ person", description: "Sample timing 07:00–09:45.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t2", name: "Delhi → Agra", city: "Delhi", category: "Bus", price: 600, unit: "/ person", description: "Sample timing 06:00–10:30.", accessibility: A("ramps") }),
  d({ id: "t3", name: "Chennai → Kochi", city: "Chennai", category: "Flight", price: 4800, unit: "/ person", description: "Sample timing 09:00–10:15.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t4", name: "Mumbai → Pune", city: "Mumbai", category: "Train", price: 500, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t5", name: "Delhi → Jaipur", city: "Delhi", category: "Bus", price: 700, unit: "/ person", description: "Sample accessible bus service.", accessibility: A("ramps", "assistanceStaff") }),
  d({ id: "t6", name: "Jaipur → Jodhpur", city: "Jaipur", category: "Train", price: 650, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t7", name: "Jodhpur → Jaisalmer", city: "Jodhpur", category: "Train", price: 550, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t8", name: "Delhi → Amritsar", city: "Delhi", category: "Train", price: 900, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t9", name: "Delhi → Varanasi", city: "Delhi", category: "Train", price: 1100, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t10", name: "Agra → Jaipur", city: "Agra", category: "Bus", price: 550, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),

  d({ id: "t11", name: "Bengaluru → Chennai", city: "Bengaluru", category: "Train", price: 800, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t12", name: "Bengaluru → Hyderabad", city: "Bengaluru", category: "Flight", price: 3500, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t13", name: "Bengaluru → Goa", city: "Bengaluru", category: "Flight", price: 4200, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t14", name: "Bengaluru → Hampi", city: "Bengaluru", category: "Bus", price: 900, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),
  d({ id: "t15", name: "Bengaluru → Coorg", city: "Bengaluru", category: "Bus", price: 650, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t16", name: "Mysuru → Ooty", city: "Mysuru", category: "Bus", price: 500, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),
  d({ id: "t17", name: "Mysuru → Bengaluru", city: "Mysuru", category: "Train", price: 450, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t18", name: "Mangaluru → Bengaluru", city: "Mangaluru", category: "Train", price: 700, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t19", name: "Hyderabad → Chennai", city: "Hyderabad", category: "Flight", price: 4000, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t20", name: "Hyderabad → Bengaluru", city: "Hyderabad", category: "Bus", price: 800, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),

  d({ id: "t21", name: "Chennai → Madurai", city: "Chennai", category: "Train", price: 700, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t22", name: "Chennai → Madurai", city: "Chennai", category: "Bus", price: 600, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t23", name: "Chennai → Bengaluru", city: "Chennai", category: "Train", price: 800, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t24", name: "Chennai → Pondicherry", city: "Chennai", category: "Bus", price: 400, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t25", name: "Kochi → Munnar", city: "Kochi", category: "Bus", price: 500, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),
  d({ id: "t26", name: "Kochi → Bengaluru", city: "Kochi", category: "Flight", price: 3800, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t27", name: "Kochi → Goa", city: "Kochi", category: "Flight", price: 4200, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t28", name: "Alappuzha → Kochi", city: "Alappuzha", category: "Train", price: 250, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t29", name: "Goa → Mumbai", city: "Goa", category: "Flight", price: 3800, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t30", name: "Goa → Bengaluru", city: "Goa", category: "Bus", price: 1000, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),

  d({ id: "t31", name: "Mumbai → Goa", city: "Mumbai", category: "Flight", price: 3800, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t32", name: "Mumbai → Ahmedabad", city: "Mumbai", category: "Train", price: 700, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t33", name: "Mumbai → Nashik", city: "Mumbai", category: "Train", price: 450, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t34", name: "Pune → Mumbai", city: "Pune", category: "Train", price: 400, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t35", name: "Pune → Goa", city: "Pune", category: "Bus", price: 900, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t36", name: "Ahmedabad → Jaipur", city: "Ahmedabad", category: "Train", price: 850, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t37", name: "Ahmedabad → Mumbai", city: "Ahmedabad", category: "Flight", price: 3500, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t38", name: "Ahmedabad → Dwarka", city: "Ahmedabad", category: "Train", price: 700, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t39", name: "Delhi → Chandigarh", city: "Delhi", category: "Train", price: 500, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t40", name: "Delhi → Dehradun", city: "Delhi", category: "Train", price: 600, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "t41", name: "Delhi → Rishikesh", city: "Delhi", category: "Bus", price: 650, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),
  d({ id: "t42", name: "Delhi → Shimla", city: "Delhi", category: "Bus", price: 900, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),
  d({ id: "t43", name: "Delhi → Manali", city: "Delhi", category: "Bus", price: 1200, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),
  d({ id: "t44", name: "Delhi → Srinagar", city: "Delhi", category: "Flight", price: 5500, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t45", name: "Delhi → Leh", city: "Delhi", category: "Flight", price: 7000, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t46", name: "Srinagar → Jammu", city: "Srinagar", category: "Bus", price: 800, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),
  d({ id: "t47", name: "Jammu → Delhi", city: "Jammu", category: "Train", price: 900, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t48", name: "Leh → Delhi", city: "Leh", category: "Flight", price: 6500, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t49", name: "Jaipur → Udaipur", city: "Jaipur", category: "Train", price: 650, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t50", name: "Udaipur → Ahmedabad", city: "Udaipur", category: "Bus", price: 550, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),

  d({ id: "t51", name: "Agra → Delhi", city: "Agra", category: "Train", price: 500, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t52", name: "Agra → Varanasi", city: "Agra", category: "Train", price: 900, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t53", name: "Varanasi → Bodh Gaya", city: "Varanasi", category: "Bus", price: 500, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t54", name: "Varanasi → Delhi", city: "Varanasi", category: "Flight", price: 4500, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t55", name: "Amritsar → Delhi", city: "Amritsar", category: "Train", price: 700, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t56", name: "Amritsar → Chandigarh", city: "Amritsar", category: "Bus", price: 450, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t57", name: "Kolkata → Darjeeling", city: "Kolkata", category: "Train", price: 800, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t58", name: "Kolkata → Bhubaneswar", city: "Kolkata", category: "Train", price: 700, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t59", name: "Kolkata → Guwahati", city: "Kolkata", category: "Train", price: 1000, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t60", name: "Bhubaneswar → Puri", city: "Bhubaneswar", category: "Train", price: 250, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "t61", name: "Bhubaneswar → Kolkata", city: "Bhubaneswar", category: "Flight", price: 4000, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t62", name: "Guwahati → Shillong", city: "Guwahati", category: "Bus", price: 450, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),
  d({ id: "t63", name: "Guwahati → Delhi", city: "Guwahati", category: "Flight", price: 5000, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t64", name: "Guwahati → Kolkata", city: "Guwahati", category: "Train", price: 850, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t65", name: "Gangtok → Siliguri", city: "Gangtok", category: "Bus", price: 600, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t66", name: "Siliguri → Darjeeling", city: "Siliguri", category: "Train", price: 400, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t67", name: "Delhi → Lucknow", city: "Delhi", category: "Flight", price: 4200, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t68", name: "Lucknow → Varanasi", city: "Lucknow", category: "Train", price: 500, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t69", name: "Lucknow → Ayodhya", city: "Lucknow", category: "Bus", price: 400, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t70", name: "Ayodhya → Varanasi", city: "Ayodhya", category: "Bus", price: 450, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),

  d({ id: "t71", name: "Patna → Bodh Gaya", city: "Patna", category: "Bus", price: 450, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t72", name: "Patna → Delhi", city: "Patna", category: "Flight", price: 4500, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t73", name: "Ranchi → Kolkata", city: "Ranchi", category: "Train", price: 600, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t74", name: "Ranchi → Delhi", city: "Ranchi", category: "Flight", price: 4500, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t75", name: "Ahmedabad → Mumbai", city: "Ahmedabad", category: "Train", price: 650, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t76", name: "Ahmedabad → Jaipur", city: "Ahmedabad", category: "Bus", price: 700, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t77", name: "Ahmedabad → Somnath", city: "Ahmedabad", category: "Train", price: 600, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t78", name: "Mumbai → Nashik", city: "Mumbai", category: "Bus", price: 450, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t79", name: "Pune → Nashik", city: "Pune", category: "Bus", price: 500, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t80", name: "Aurangabad → Mumbai", city: "Aurangabad", category: "Flight", price: 4000, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "t81", name: "Bengaluru → Mangaluru", city: "Bengaluru", category: "Train", price: 650, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t82", name: "Mangaluru → Goa", city: "Mangaluru", category: "Bus", price: 700, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps", "assistanceStaff") }),
  d({ id: "t83", name: "Mysuru → Coorg", city: "Mysuru", category: "Bus", price: 400, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t84", name: "Chennai → Madurai", city: "Chennai", category: "Flight", price: 3500, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t85", name: "Madurai → Rameswaram", city: "Madurai", category: "Train", price: 300, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t86", name: "Madurai → Kanyakumari", city: "Madurai", category: "Train", price: 400, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t87", name: "Kochi → Alappuzha", city: "Kochi", category: "Train", price: 250, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t88", name: "Thiruvananthapuram → Kochi", city: "Thiruvananthapuram", category: "Train", price: 500, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t89", name: "Goa → Mumbai", city: "Goa", category: "Bus", price: 900, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t90", name: "Hyderabad → Vijayawada", city: "Hyderabad", category: "Train", price: 550, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "t91", name: "Vijayawada → Chennai", city: "Vijayawada", category: "Train", price: 650, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t92", name: "Tirupati → Chennai", city: "Tirupati", category: "Train", price: 400, unit: "/ person", description: "Sample train service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t93", name: "Tirupati → Bengaluru", city: "Tirupati", category: "Bus", price: 500, unit: "/ person", description: "Sample bus service.", accessibility: A("ramps") }),
  d({ id: "t94", name: "Port Blair → Chennai", city: "Port Blair", category: "Flight", price: 6500, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t95", name: "Port Blair → Kolkata", city: "Port Blair", category: "Flight", price: 6000, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "t96", name: "Delhi → Mumbai", city: "Delhi", category: "Flight", price: 5000, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t97", name: "Mumbai → Bengaluru", city: "Mumbai", category: "Flight", price: 4500, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t98", name: "Bengaluru → Delhi", city: "Bengaluru", category: "Flight", price: 5000, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t99", name: "Kolkata → Delhi", city: "Kolkata", category: "Flight", price: 4800, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
  d({ id: "t100", name: "Chennai → Delhi", city: "Chennai", category: "Flight", price: 5200, unit: "/ person", description: "Sample flight service.", accessibility: A("wheelchair", "assistanceStaff", "accessibleToilet") }),
];
