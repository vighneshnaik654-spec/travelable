// DEMO / SAMPLE DATA ONLY. Not real availability, prices, reviews or accessibility certifications.
// Later: replace with MongoDB collections filled from official tourism data, OSM, Google Places, licensed APIs.
const A = (...k) => Object.fromEntries(k.map((x) => [x, true]));
const d = (o) => ({ demo: true, images: [], ...o });
export const destinations = [
  d({ id: "mysore-palace", name: "Mysore Palace", city: "Mysuru", state: "Karnataka", region: "South", category: "Heritage", description: "Historic royal palace and major Mysuru landmark.", location: { latitude: 12.3052, longitude: 76.6552 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "accessibleParking", "audioAssistance") }),

d({ id: "taj-mahal", name: "Taj Mahal", city: "Agra", state: "Uttar Pradesh", region: "North", category: "Historical", description: "Iconic white marble mausoleum and UNESCO World Heritage Site.", location: { latitude: 27.1751, longitude: 78.0421 }, accessibility: A("wheelchair", "ramps", "accessibleParking", "assistanceStaff") }),

d({ id: "marina-beach", name: "Marina Beach", city: "Chennai", state: "Tamil Nadu", region: "South", category: "Beaches", description: "Long urban beach along the Bay of Bengal.", location: { latitude: 13.0500, longitude: 80.2824 }, accessibility: A("wheelchair", "stepFreeAccess", "accessibleParking") }),

d({ id: "hawa-mahal", name: "Hawa Mahal", city: "Jaipur", state: "Rajasthan", region: "West", category: "Heritage", description: "Famous pink sandstone palace facade.", location: { latitude: 26.9239, longitude: 75.8267 }, accessibility: A("accessibleToilet", "assistanceStaff") }),

d({ id: "alleppey-backwaters", name: "Alleppey Backwaters", city: "Alappuzha", state: "Kerala", region: "South", category: "Nature", description: "Scenic network of canals, lagoons and houseboat routes.", location: { latitude: 9.4981, longitude: 76.3388 }, accessibility: A("wheelchair", "ramps", "assistanceStaff", "stepFreeAccess") }),

d({ id: "red-fort", name: "Red Fort", city: "Delhi", state: "Delhi", region: "North", category: "Heritage", description: "Historic Mughal-era fort complex in Old Delhi.", location: { latitude: 28.6562, longitude: 77.2410 }, accessibility: A("wheelchair", "ramps", "accessibleParking", "assistanceStaff") }),

d({ id: "qutub-minar", name: "Qutub Minar", city: "Delhi", state: "Delhi", region: "North", category: "Historical", description: "Historic minaret and UNESCO World Heritage Site.", location: { latitude: 28.5245, longitude: 77.1855 }, accessibility: A("wheelchair", "accessibleParking", "assistanceStaff") }),

d({ id: "india-gate", name: "India Gate", city: "Delhi", state: "Delhi", region: "North", category: "Landmark", description: "War memorial and prominent Delhi landmark.", location: { latitude: 28.6129, longitude: 77.2295 }, accessibility: A("wheelchair", "stepFreeAccess", "accessibleParking") }),

d({ id: "golden-temple", name: "Golden Temple", city: "Amritsar", state: "Punjab", region: "North", category: "Religious", description: "Famous Sikh gurdwara surrounded by the Amrit Sarovar.", location: { latitude: 31.6200, longitude: 74.8765 }, accessibility: A("wheelchair", "ramps", "assistanceStaff", "stepFreeAccess") }),

d({ id: "jallianwala-bagh", name: "Jallianwala Bagh", city: "Amritsar", state: "Punjab", region: "North", category: "Historical", description: "Historic memorial and public garden in Amritsar.", location: { latitude: 31.6200, longitude: 74.8800 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

d({ id: "city-palace-udaipur", name: "City Palace", city: "Udaipur", state: "Rajasthan", region: "West", category: "Heritage", description: "Large palace complex overlooking Lake Pichola.", location: { latitude: 24.5764, longitude: 73.6835 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "amber-fort", name: "Amber Fort", city: "Jaipur", state: "Rajasthan", region: "West", category: "Heritage", description: "Historic hill fort known for Rajput architecture.", location: { latitude: 26.9855, longitude: 75.8513 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "mehrangarh-fort", name: "Mehrangarh Fort", city: "Jodhpur", state: "Rajasthan", region: "West", category: "Heritage", description: "Massive historic fort overlooking the Blue City.", location: { latitude: 26.2971, longitude: 73.0189 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "jaisalmer-fort", name: "Jaisalmer Fort", city: "Jaisalmer", state: "Rajasthan", region: "West", category: "Heritage", description: "Living fort rising from the Thar Desert.", location: { latitude: 26.9124, longitude: 70.9126 }, accessibility: A("assistanceStaff") }),

d({ id: "lake-pichola", name: "Lake Pichola", city: "Udaipur", state: "Rajasthan", region: "West", category: "Nature", description: "Scenic artificial lake surrounded by palaces and hills.", location: { latitude: 24.5726, longitude: 73.6800 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "ranthambore", name: "Ranthambore National Park", city: "Sawai Madhopur", state: "Rajasthan", region: "West", category: "Wildlife", description: "Popular wildlife reserve known for its tiger population.", location: { latitude: 26.0173, longitude: 76.5026 }, accessibility: A("assistanceStaff") }),

d({ id: "varanasi-ghats", name: "Varanasi Ghats", city: "Varanasi", state: "Uttar Pradesh", region: "North", category: "Cultural", description: "Historic riverfront ghats along the Ganges.", location: { latitude: 25.3060, longitude: 83.0100 }, accessibility: A("assistanceStaff") }),

d({ id: "sarnath", name: "Sarnath", city: "Varanasi", state: "Uttar Pradesh", region: "North", category: "Historical", description: "Important Buddhist archaeological and pilgrimage site.", location: { latitude: 25.3810, longitude: 83.0210 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

d({ id: "agra-fort", name: "Agra Fort", city: "Agra", state: "Uttar Pradesh", region: "North", category: "Heritage", description: "Historic red sandstone fort near the Taj Mahal.", location: { latitude: 27.1795, longitude: 78.0211 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "fatehpur-sikri", name: "Fatehpur Sikri", city: "Fatehpur Sikri", state: "Uttar Pradesh", region: "North", category: "Historical", description: "Historic Mughal city built during the reign of Akbar.", location: { latitude: 27.0945, longitude: 77.6679 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "khajuraho", name: "Khajuraho Temples", city: "Khajuraho", state: "Madhya Pradesh", region: "Central", category: "Heritage", description: "Famous group of historic temples with detailed stone carvings.", location: { latitude: 24.8318, longitude: 79.9199 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "sanchi-stupa", name: "Sanchi Stupa", city: "Sanchi", state: "Madhya Pradesh", region: "Central", category: "Historical", description: "Ancient Buddhist monument and UNESCO World Heritage Site.", location: { latitude: 23.4793, longitude: 77.7397 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "kanha-national-park", name: "Kanha National Park", city: "Mandla", state: "Madhya Pradesh", region: "Central", category: "Wildlife", description: "Large wildlife reserve known for forests and wildlife.", location: { latitude: 22.3345, longitude: 80.6115 }, accessibility: A("assistanceStaff") }),

d({ id: "bandhavgarh", name: "Bandhavgarh National Park", city: "Umaria", state: "Madhya Pradesh", region: "Central", category: "Wildlife", description: "Wildlife reserve with forests, hills and historic ruins.", location: { latitude: 23.7276, longitude: 81.0297 }, accessibility: A("assistanceStaff") }),

d({ id: "gateway-of-india", name: "Gateway of India", city: "Mumbai", state: "Maharashtra", region: "West", category: "Landmark", description: "Iconic waterfront monument overlooking Mumbai Harbour.", location: { latitude: 18.9220, longitude: 72.8347 }, accessibility: A("wheelchair", "stepFreeAccess", "accessibleParking") }),

d({ id: "csmt", name: "Chhatrapati Shivaji Maharaj Terminus", city: "Mumbai", state: "Maharashtra", region: "West", category: "Heritage", description: "Historic railway terminus and UNESCO World Heritage Site.", location: { latitude: 18.9402, longitude: 72.8356 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "assistanceStaff") }),

d({ id: "elephanta-caves", name: "Elephanta Caves", city: "Mumbai", state: "Maharashtra", region: "West", category: "Historical", description: "Rock-cut cave temples on Elephanta Island.", location: { latitude: 18.9633, longitude: 72.9315 }, accessibility: A("assistanceStaff") }),

d({ id: "marine-drive", name: "Marine Drive", city: "Mumbai", state: "Maharashtra", region: "West", category: "Landmark", description: "Famous curved seaside boulevard along Mumbai's coast.", location: { latitude: 18.9431, longitude: 72.8235 }, accessibility: A("wheelchair", "stepFreeAccess", "accessibleParking") }),

d({ id: "aga-khan-palace", name: "Aga Khan Palace", city: "Pune", state: "Maharashtra", region: "West", category: "Heritage", description: "Historic palace associated with India's independence movement.", location: { latitude: 18.5524, longitude: 73.9017 }, accessibility: A("wheelchair", "ramps", "accessibleParking", "assistanceStaff") }),

d({ id: "ajanta-caves", name: "Ajanta Caves", city: "Aurangabad", state: "Maharashtra", region: "West", category: "Historical", description: "Ancient rock-cut Buddhist caves with murals and sculptures.", location: { latitude: 20.5519, longitude: 75.7033 }, accessibility: A("assistanceStaff") }),

d({ id: "ellora-caves", name: "Ellora Caves", city: "Aurangabad", state: "Maharashtra", region: "West", category: "Historical", description: "Rock-cut caves representing Buddhist, Hindu and Jain traditions.", location: { latitude: 20.0268, longitude: 75.1790 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "hampi", name: "Hampi", city: "Hampi", state: "Karnataka", region: "South", category: "Heritage", description: "Vast historic ruins of the Vijayanagara Empire.", location: { latitude: 15.3350, longitude: 76.4600 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "virupaksha-temple", name: "Virupaksha Temple", city: "Hampi", state: "Karnataka", region: "South", category: "Religious", description: "Historic temple complex in the Hampi heritage area.", location: { latitude: 15.3350, longitude: 76.4597 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "gol-gumbaz", name: "Gol Gumbaz", city: "Vijayapura", state: "Karnataka", region: "South", category: "Heritage", description: "Famous monumental tomb with a large domed structure.", location: { latitude: 16.8302, longitude: 75.7100 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "badami-caves", name: "Badami Caves", city: "Badami", state: "Karnataka", region: "South", category: "Historical", description: "Ancient rock-cut cave temples overlooking Agastya Lake.", location: { latitude: 15.9487, longitude: 75.6820 }, accessibility: A("assistanceStaff") }),

d({ id: "gokarna-beach", name: "Gokarna Beach", city: "Gokarna", state: "Karnataka", region: "South", category: "Beaches", description: "Popular coastal destination with scenic beaches.", location: { latitude: 14.5500, longitude: 74.3167 }, accessibility: A("assistanceStaff") }),

d({ id: "lalbagh", name: "Lalbagh Botanical Garden", city: "Bengaluru", state: "Karnataka", region: "South", category: "Nature", description: "Large botanical garden with diverse plant collections.", location: { latitude: 12.9507, longitude: 77.5848 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "accessibleParking") }),

d({ id: "nandi-hills", name: "Nandi Hills", city: "Bengaluru", state: "Karnataka", region: "South", category: "Nature", description: "Hill destination known for sunrise views and scenic landscapes.", location: { latitude: 13.3702, longitude: 77.6835 }, accessibility: A("assistanceStaff") }),

d({ id: "charminar", name: "Charminar", city: "Hyderabad", state: "Telangana", region: "South", category: "Heritage", description: "Historic monument and iconic symbol of Hyderabad.", location: { latitude: 17.3616, longitude: 78.4747 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "golconda-fort", name: "Golconda Fort", city: "Hyderabad", state: "Telangana", region: "South", category: "Heritage", description: "Historic fort complex with impressive architecture and views.", location: { latitude: 17.3833, longitude: 78.4011 }, accessibility: A("assistanceStaff") }),

d({ id: "ramoji-film-city", name: "Ramoji Film City", city: "Hyderabad", state: "Telangana", region: "South", category: "Entertainment", description: "Large film studio complex and entertainment destination.", location: { latitude: 17.2543, longitude: 78.6808 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "assistanceStaff") }),

d({ id: "meenakshi-temple", name: "Meenakshi Amman Temple", city: "Madurai", state: "Tamil Nadu", region: "South", category: "Religious", description: "Historic temple complex famous for its ornate towers.", location: { latitude: 9.9195, longitude: 78.1193 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "shore-temple", name: "Shore Temple", city: "Mahabalipuram", state: "Tamil Nadu", region: "South", category: "Heritage", description: "Historic stone temple overlooking the Bay of Bengal.", location: { latitude: 12.6169, longitude: 80.1920 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "brihadeeswarar-temple", name: "Brihadeeswarar Temple", city: "Thanjavur", state: "Tamil Nadu", region: "South", category: "Religious", description: "Grand Chola-era temple and UNESCO World Heritage Site.", location: { latitude: 10.7828, longitude: 79.1318 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "ooty", name: "Ooty", city: "Ooty", state: "Tamil Nadu", region: "South", category: "Hill Station", description: "Popular hill station surrounded by tea plantations and hills.", location: { latitude: 11.4102, longitude: 76.6950 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "kodaikanal", name: "Kodaikanal", city: "Kodaikanal", state: "Tamil Nadu", region: "South", category: "Hill Station", description: "Scenic hill station known for its lake and forests.", location: { latitude: 10.2381, longitude: 77.4892 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "kanyakumari", name: "Kanyakumari", city: "Kanyakumari", state: "Tamil Nadu", region: "South", category: "Coastal", description: "Southern coastal destination famous for sunrise and sunset views.", location: { latitude: 8.0883, longitude: 77.5385 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

d({ id: "fort-kochi", name: "Fort Kochi", city: "Kochi", state: "Kerala", region: "South", category: "Heritage", description: "Historic coastal neighbourhood with colonial architecture.", location: { latitude: 9.9658, longitude: 76.2421 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

d({ id: "munnar", name: "Munnar", city: "Munnar", state: "Kerala", region: "South", category: "Hill Station", description: "Hill destination surrounded by tea plantations.", location: { latitude: 10.0889, longitude: 77.0595 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "varkala-beach", name: "Varkala Beach", city: "Varkala", state: "Kerala", region: "South", category: "Beaches", description: "Coastal destination known for cliffs and Arabian Sea views.", location: { latitude: 8.7379, longitude: 76.7163 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "kovalam-beach", name: "Kovalam Beach", city: "Thiruvananthapuram", state: "Kerala", region: "South", category: "Beaches", description: "Popular beach destination near Thiruvananthapuram.", location: { latitude: 8.4004, longitude: 76.9787 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

d({ id: "periyar-national-park", name: "Periyar National Park", city: "Thekkady", state: "Kerala", region: "South", category: "Wildlife", description: "Wildlife reserve around Periyar Lake.", location: { latitude: 9.4627, longitude: 77.2367 }, accessibility: A("assistanceStaff") }),

d({ id: "baga-beach", name: "Baga Beach", city: "North Goa", state: "Goa", region: "West", category: "Beaches", description: "Popular beach destination in North Goa.", location: { latitude: 15.5557, longitude: 73.7517 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "basilica-bom-jesus", name: "Basilica of Bom Jesus", city: "Old Goa", state: "Goa", region: "West", category: "Religious", description: "Historic basilica and major heritage landmark.", location: { latitude: 15.5009, longitude: 73.9118 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

d({ id: "fort-aguada", name: "Fort Aguada", city: "Candolim", state: "Goa", region: "West", category: "Heritage", description: "Historic Portuguese fort overlooking the Arabian Sea.", location: { latitude: 15.4920, longitude: 73.7730 }, accessibility: A("assistanceStaff") }),

d({ id: "dudhsagar-falls", name: "Dudhsagar Falls", city: "Mollem", state: "Goa", region: "West", category: "Nature", description: "Spectacular waterfall surrounded by forest.", location: { latitude: 15.3144, longitude: 74.3144 }, accessibility: A("assistanceStaff") }),

d({ id: "konark-sun-temple", name: "Konark Sun Temple", city: "Konark", state: "Odisha", region: "East", category: "Heritage", description: "Historic temple famous for its monumental stone chariot design.", location: { latitude: 19.8876, longitude: 86.0945 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "jagannath-temple", name: "Jagannath Temple", city: "Puri", state: "Odisha", region: "East", category: "Religious", description: "Major Hindu pilgrimage temple in Puri.", location: { latitude: 19.8049, longitude: 85.8179 }, accessibility: A("assistanceStaff") }),

d({ id: "chilika-lake", name: "Chilika Lake", city: "Puri", state: "Odisha", region: "East", category: "Nature", description: "Large coastal lagoon known for birds and boating.", location: { latitude: 19.7000, longitude: 85.3200 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "lingaraj-temple", name: "Lingaraj Temple", city: "Bhubaneswar", state: "Odisha", region: "East", category: "Religious", description: "Historic temple and major landmark of Bhubaneswar.", location: { latitude: 20.2380, longitude: 85.8330 }, accessibility: A("assistanceStaff") }),

d({ id: "victoria-memorial", name: "Victoria Memorial", city: "Kolkata", state: "West Bengal", region: "East", category: "Heritage", description: "Grand marble memorial and museum in Kolkata.", location: { latitude: 22.5448, longitude: 88.3426 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "accessibleParking") }),

d({ id: "howrah-bridge", name: "Howrah Bridge", city: "Kolkata", state: "West Bengal", region: "East", category: "Landmark", description: "Iconic cantilever bridge over the Hooghly River.", location: { latitude: 22.5958, longitude: 88.2636 }, accessibility: A("stepFreeAccess", "assistanceStaff") }),

d({ id: "darjeeling-railway", name: "Darjeeling Himalayan Railway", city: "Darjeeling", state: "West Bengal", region: "East", category: "Transport", description: "Historic mountain railway popularly known as the Toy Train.", location: { latitude: 27.0410, longitude: 88.2663 }, accessibility: A("assistanceStaff") }),

d({ id: "tiger-hill", name: "Tiger Hill", city: "Darjeeling", state: "West Bengal", region: "East", category: "Nature", description: "Popular viewpoint famous for sunrise over the Himalayas.", location: { latitude: 27.0000, longitude: 88.2800 }, accessibility: A("assistanceStaff") }),

d({ id: "sundarbans", name: "Sundarbans National Park", city: "South 24 Parganas", state: "West Bengal", region: "East", category: "Wildlife", description: "Mangrove forest and wildlife destination.", location: { latitude: 21.9497, longitude: 88.8953 }, accessibility: A("assistanceStaff") }),

d({ id: "kaziranga", name: "Kaziranga National Park", city: "Golaghat", state: "Assam", region: "Northeast", category: "Wildlife", description: "World-famous wildlife reserve known for one-horned rhinoceroses.", location: { latitude: 26.5775, longitude: 93.1711 }, accessibility: A("assistanceStaff") }),

d({ id: "kamakhya-temple", name: "Kamakhya Temple", city: "Guwahati", state: "Assam", region: "Northeast", category: "Religious", description: "Historic temple situated on Nilachal Hill.", location: { latitude: 26.1664, longitude: 91.7052 }, accessibility: A("assistanceStaff") }),

d({ id: "majuli", name: "Majuli Island", city: "Majuli", state: "Assam", region: "Northeast", category: "Cultural", description: "River island known for Assamese culture and traditions.", location: { latitude: 27.0000, longitude: 94.2200 }, accessibility: A("assistanceStaff") }),

d({ id: "shillong", name: "Shillong", city: "Shillong", state: "Meghalaya", region: "Northeast", category: "Hill Station", description: "Scenic hill city surrounded by green landscapes.", location: { latitude: 25.5788, longitude: 91.8933 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "cherrapunji", name: "Cherrapunji", city: "Sohra", state: "Meghalaya", region: "Northeast", category: "Nature", description: "Mountain destination famous for waterfalls and heavy rainfall.", location: { latitude: 25.2702, longitude: 91.7314 }, accessibility: A("assistanceStaff") }),

d({ id: "living-root-bridges", name: "Living Root Bridges", city: "Cherrapunji", state: "Meghalaya", region: "Northeast", category: "Nature", description: "Unique bridges formed from living tree roots.", location: { latitude: 25.2400, longitude: 91.7300 }, accessibility: A("assistanceStaff") }),

d({ id: "tawang-monastery", name: "Tawang Monastery", city: "Tawang", state: "Arunachal Pradesh", region: "Northeast", category: "Religious", description: "Historic Buddhist monastery in the Himalayan region.", location: { latitude: 27.5861, longitude: 91.8594 }, accessibility: A("assistanceStaff") }),

d({ id: "ziro-valley", name: "Ziro Valley", city: "Ziro", state: "Arunachal Pradesh", region: "Northeast", category: "Nature", description: "Scenic valley known for landscapes and local culture.", location: { latitude: 27.5448, longitude: 93.8195 }, accessibility: A("assistanceStaff") }),

d({ id: "tsomgo-lake", name: "Tsomgo Lake", city: "Gangtok", state: "Sikkim", region: "Northeast", category: "Nature", description: "High-altitude glacial lake near Gangtok.", location: { latitude: 27.3740, longitude: 88.8720 }, accessibility: A("assistanceStaff") }),

d({ id: "gangtok", name: "Gangtok", city: "Gangtok", state: "Sikkim", region: "Northeast", category: "Hill Station", description: "Capital city of Sikkim with mountain views and monasteries.", location: { latitude: 27.3389, longitude: 88.6065 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "nathula-pass", name: "Nathula Pass", city: "Gangtok", state: "Sikkim", region: "Northeast", category: "Nature", description: "High-altitude mountain pass on the India-China border.", location: { latitude: 27.3860, longitude: 88.8300 }, accessibility: A("assistanceStaff") }),

d({ id: "dal-lake", name: "Dal Lake", city: "Srinagar", state: "Jammu and Kashmir", region: "North", category: "Nature", description: "Famous lake surrounded by mountains and houseboats.", location: { latitude: 34.0837, longitude: 74.7973 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "gulmarg", name: "Gulmarg", city: "Gulmarg", state: "Jammu and Kashmir", region: "North", category: "Hill Station", description: "Mountain destination known for meadows and winter activities.", location: { latitude: 34.0484, longitude: 74.3805 }, accessibility: A("assistanceStaff") }),

d({ id: "vaishno-devi", name: "Vaishno Devi", city: "Katra", state: "Jammu and Kashmir", region: "North", category: "Religious", description: "Major pilgrimage destination in the Trikuta Mountains.", location: { latitude: 33.0308, longitude: 74.9490 }, accessibility: A("assistanceStaff") }),

d({ id: "leh-palace", name: "Leh Palace", city: "Leh", state: "Ladakh", region: "North", category: "Heritage", description: "Historic royal palace overlooking Leh.", location: { latitude: 34.1656, longitude: 77.5846 }, accessibility: A("assistanceStaff") }),

d({ id: "pangong-lake", name: "Pangong Lake", city: "Leh", state: "Ladakh", region: "North", category: "Nature", description: "High-altitude lake famous for its changing blue shades.", location: { latitude: 33.7595, longitude: 78.6670 }, accessibility: A("assistanceStaff") }),

d({ id: "nubra-valley", name: "Nubra Valley", city: "Leh", state: "Ladakh", region: "North", category: "Nature", description: "High-altitude valley surrounded by dramatic mountains.", location: { latitude: 35.4700, longitude: 77.5500 }, accessibility: A("assistanceStaff") }),

d({ id: "manali", name: "Manali", city: "Manali", state: "Himachal Pradesh", region: "North", category: "Hill Station", description: "Popular Himalayan hill station surrounded by mountains.", location: { latitude: 32.2396, longitude: 77.1887 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "shimla", name: "Shimla", city: "Shimla", state: "Himachal Pradesh", region: "North", category: "Hill Station", description: "Historic hill station and former summer capital of British India.", location: { latitude: 31.1048, longitude: 77.1734 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "rohtang-pass", name: "Rohtang Pass", city: "Manali", state: "Himachal Pradesh", region: "North", category: "Nature", description: "High mountain pass with spectacular Himalayan scenery.", location: { latitude: 32.3717, longitude: 77.2490 }, accessibility: A("assistanceStaff") }),

d({ id: "rishikesh", name: "Rishikesh", city: "Rishikesh", state: "Uttarakhand", region: "North", category: "Adventure", description: "Popular destination on the Ganges known for yoga and adventure activities.", location: { latitude: 30.0869, longitude: 78.2676 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

d({ id: "har-ki-pauri", name: "Har Ki Pauri", city: "Haridwar", state: "Uttarakhand", region: "North", category: "Religious", description: "Famous riverside ghat on the Ganges.", location: { latitude: 29.9457, longitude: 78.1642 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "valley-of-flowers", name: "Valley of Flowers", city: "Chamoli", state: "Uttarakhand", region: "North", category: "Nature", description: "Mountain valley known for alpine flowers and landscapes.", location: { latitude: 30.7280, longitude: 79.6050 }, accessibility: A("assistanceStaff") }),

d({ id: "jim-corbett", name: "Jim Corbett National Park", city: "Ramnagar", state: "Uttarakhand", region: "North", category: "Wildlife", description: "India's famous wildlife park with forests and diverse fauna.", location: { latitude: 29.5300, longitude: 78.7747 }, accessibility: A("assistanceStaff") }),

d({ id: "mahabodhi-temple", name: "Mahabodhi Temple", city: "Bodh Gaya", state: "Bihar", region: "East", category: "Religious", description: "Major Buddhist pilgrimage site associated with enlightenment.", location: { latitude: 24.6950, longitude: 84.9910 }, accessibility: A("wheelchair", "ramps", "stepFreeAccess", "assistanceStaff") }),

d({ id: "nalanda", name: "Nalanda Archaeological Site", city: "Nalanda", state: "Bihar", region: "East", category: "Historical", description: "Ancient university and archaeological site.", location: { latitude: 25.1367, longitude: 85.4437 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "hundru-falls", name: "Hundru Falls", city: "Ranchi", state: "Jharkhand", region: "East", category: "Nature", description: "Scenic waterfall near Ranchi.", location: { latitude: 23.4456, longitude: 85.6010 }, accessibility: A("assistanceStaff") }),

d({ id: "diu-fort", name: "Diu Fort", city: "Diu", state: "Daman and Diu", region: "West", category: "Heritage", description: "Historic fort overlooking the Arabian Sea.", location: { latitude: 20.7144, longitude: 70.9822 }, accessibility: A("assistanceStaff") }),

d({ id: "rann-of-kutch", name: "Rann of Kutch", city: "Kutch", state: "Gujarat", region: "West", category: "Nature", description: "Vast salt desert famous for its seasonal landscapes and cultural festival.", location: { latitude: 23.7337, longitude: 69.8597 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "somnath-temple", name: "Somnath Temple", city: "Somnath", state: "Gujarat", region: "West", category: "Religious", description: "Historic temple on the Arabian Sea coast.", location: { latitude: 20.8880, longitude: 70.4010 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "assistanceStaff") }),

d({ id: "statue-of-unity", name: "Statue of Unity", city: "Kevadia", state: "Gujarat", region: "West", category: "Landmark", description: "Major monument and tourism complex near the Narmada River.", location: { latitude: 21.8380, longitude: 73.7191 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "accessibleParking", "assistanceStaff") }),

d({ id: "dwarkadhish-temple", name: "Dwarkadhish Temple", city: "Dwarka", state: "Gujarat", region: "West", category: "Religious", description: "Historic Hindu temple and pilgrimage destination.", location: { latitude: 22.2376, longitude: 68.9674 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "cellular-jail", name: "Cellular Jail", city: "Port Blair", state: "Andaman and Nicobar Islands", region: "Islands", category: "Historical", description: "Historic colonial-era prison and national memorial.", location: { latitude: 11.6736, longitude: 92.7500 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "chidiya-tapu", name: "Chidiya Tapu", city: "Port Blair", state: "Andaman and Nicobar Islands", region: "Islands", category: "Nature", description: "Scenic coastal destination known for sunsets and wildlife.", location: { latitude: 11.5100, longitude: 92.6800 }, accessibility: A("assistanceStaff") }),

d({ id: "kavaratti", name: "Kavaratti", city: "Kavaratti", state: "Lakshadweep", region: "Islands", category: "Beaches", description: "Island destination known for lagoons and coral reefs.", location: { latitude: 10.5669, longitude: 72.6420 }, accessibility: A("assistanceStaff") }),

d({ id: "india-habitat-centre", name: "India Habitat Centre", city: "Delhi", state: "Delhi", region: "North", category: "Cultural", description: "Cultural and convention centre hosting exhibitions and events.", location: { latitude: 28.5895, longitude: 77.2253 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "accessibleParking") }),

d({ id: "national-museum", name: "National Museum", city: "Delhi", state: "Delhi", region: "North", category: "Museum", description: "Major museum displaying Indian art, history and archaeology.", location: { latitude: 28.6118, longitude: 77.2195 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "assistanceStaff") }),

d({ id: "akshardham-delhi", name: "Akshardham", city: "Delhi", state: "Delhi", region: "North", category: "Cultural", description: "Large cultural and spiritual complex in Delhi.", location: { latitude: 28.6127, longitude: 77.2773 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "assistanceStaff") }),

d({ id: "cubbon-park", name: "Cubbon Park", city: "Bengaluru", state: "Karnataka", region: "South", category: "Nature", description: "Large green park in the heart of Bengaluru.", location: { latitude: 12.9763, longitude: 77.5929 }, accessibility: A("wheelchair", "stepFreeAccess", "accessibleParking") }),

d({ id: "bengaluru-palace", name: "Bengaluru Palace", city: "Bengaluru", state: "Karnataka", region: "South", category: "Heritage", description: "Historic palace known for Tudor-style architecture.", location: { latitude: 13.0035, longitude: 77.5891 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "udupi-krishna-temple", name: "Udupi Sri Krishna Temple", city: "Udupi", state: "Karnataka", region: "South", category: "Religious", description: "Historic Krishna temple and pilgrimage destination.", location: { latitude: 13.3409, longitude: 74.7421 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "murudeshwar", name: "Murudeshwar Temple", city: "Murudeshwar", state: "Karnataka", region: "South", category: "Religious", description: "Coastal temple complex famous for its large Shiva statue.", location: { latitude: 14.0940, longitude: 74.4845 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),

d({ id: "jog-falls", name: "Jog Falls", city: "Shivamogga", state: "Karnataka", region: "South", category: "Nature", description: "One of India's famous waterfalls surrounded by forested hills.", location: { latitude: 14.2290, longitude: 74.8120 }, accessibility: A("assistanceStaff") }),

d({ id: "bekal-fort", name: "Bekal Fort", city: "Kasaragod", state: "Kerala", region: "South", category: "Heritage", description: "Large coastal fort overlooking the Arabian Sea.", location: { latitude: 12.3910, longitude: 75.0310 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "athirappilly-falls", name: "Athirappilly Falls", city: "Thrissur", state: "Kerala", region: "South", category: "Nature", description: "Large waterfall surrounded by lush forest.", location: { latitude: 10.2850, longitude: 76.5690 }, accessibility: A("assistanceStaff") }),

d({ id: "coorg", name: "Coorg", city: "Madikeri", state: "Karnataka", region: "South", category: "Hill Station", description: "Scenic hill region known for coffee plantations and forests.", location: { latitude: 12.4244, longitude: 75.7382 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "munnar-tea-gardens", name: "Munnar Tea Gardens", city: "Munnar", state: "Kerala", region: "South", category: "Nature", description: "Scenic tea plantations covering the hills around Munnar.", location: { latitude: 10.0889, longitude: 77.0595 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "marine-world-kochi", name: "Marine Drive Kochi", city: "Kochi", state: "Kerala", region: "South", category: "Landmark", description: "Popular waterfront promenade in central Kochi.", location: { latitude: 9.9740, longitude: 76.2760 }, accessibility: A("wheelchair", "stepFreeAccess", "accessibleParking") }),

d({ id: "dharamshala", name: "Dharamshala", city: "Dharamshala", state: "Himachal Pradesh", region: "North", category: "Hill Station", description: "Himalayan destination known for mountain scenery and Tibetan culture.", location: { latitude: 32.2190, longitude: 76.3234 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "amritsar-partition-museum", name: "Partition Museum", city: "Amritsar", state: "Punjab", region: "North", category: "Museum", description: "Museum documenting the history and stories surrounding Partition.", location: { latitude: 31.6339, longitude: 74.8723 }, accessibility: A("wheelchair", "ramps", "accessibleToilet", "assistanceStaff") }),

d({ id: "rock-garden-chandigarh", name: "Rock Garden", city: "Chandigarh", state: "Chandigarh", region: "North", category: "Cultural", description: "Unique sculpture garden created from industrial and household waste.", location: { latitude: 30.7525, longitude: 76.8050 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "sukhna-lake", name: "Sukhna Lake", city: "Chandigarh", state: "Chandigarh", region: "North", category: "Nature", description: "Popular man-made lake and recreational area.", location: { latitude: 30.7420, longitude: 76.8173 }, accessibility: A("wheelchair", "stepFreeAccess", "accessibleParking") }),

d({ id: "patwon-ki-haveli", name: "Patwon Ki Haveli", city: "Jaisalmer", state: "Rajasthan", region: "West", category: "Heritage", description: "Historic collection of richly decorated merchant havelis.", location: { latitude: 26.9157, longitude: 70.9160 }, accessibility: A("assistanceStaff") }),

d({ id: "pushkar-lake", name: "Pushkar Lake", city: "Pushkar", state: "Rajasthan", region: "West", category: "Religious", description: "Sacred lake surrounded by temples and ghats.", location: { latitude: 26.4897, longitude: 74.5511 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "sajjangarh-palace", name: "Sajjangarh Palace", city: "Udaipur", state: "Rajasthan", region: "West", category: "Heritage", description: "Hilltop palace offering views over Udaipur and its lakes.", location: { latitude: 24.5960, longitude: 73.6390 }, accessibility: A("assistanceStaff") }),

d({ id: "bibi-ka-maqbara", name: "Bibi Ka Maqbara", city: "Aurangabad", state: "Maharashtra", region: "West", category: "Heritage", description: "Historic marble mausoleum often associated with Mughal architecture.", location: { latitude: 19.8776, longitude: 75.3424 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "sri-venkateswara-temple", name: "Tirumala Venkateswara Temple", city: "Tirupati", state: "Andhra Pradesh", region: "South", category: "Religious", description: "Major Hindu pilgrimage destination in the Tirumala hills.", location: { latitude: 13.6833, longitude: 79.3470 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),

d({ id: "araku-valley", name: "Araku Valley", city: "Araku", state: "Andhra Pradesh", region: "South", category: "Hill Station", description: "Scenic valley surrounded by Eastern Ghats and coffee plantations.", location: { latitude: 18.3273, longitude: 82.8732 }, accessibility: A("assistanceStaff") }),

d({ id: "belum-caves", name: "Belum Caves", city: "Kurnool", state: "Andhra Pradesh", region: "South", category: "Nature", description: "Large underground cave system with natural rock formations.", location: { latitude: 15.1028, longitude: 78.1100 }, accessibility: A("assistanceStaff") }),

d({ id: "digha-beach", name: "Digha Beach", city: "Digha", state: "West Bengal", region: "East", category: "Beaches", description: "Popular seaside destination on the Bay of Bengal.", location: { latitude: 21.6270, longitude: 87.5070 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

d({ id: "pelling", name: "Pelling", city: "Pelling", state: "Sikkim", region: "Northeast", category: "Hill Station", description: "Mountain destination offering views of the Himalayas.", location: { latitude: 27.2310, longitude: 88.2570 }, accessibility: A("assistanceStaff") }),

d({ id: "rumtek-monastery", name: "Rumtek Monastery", city: "Gangtok", state: "Sikkim", region: "Northeast", category: "Religious", description: "Important Buddhist monastery near Gangtok.", location: { latitude: 27.2890, longitude: 88.5610 }, accessibility: A("assistanceStaff") }),

d({ id: "loktak-lake", name: "Loktak Lake", city: "Moirang", state: "Manipur", region: "Northeast", category: "Nature", description: "Large freshwater lake famous for floating islands.", location: { latitude: 24.5500, longitude: 93.7800 }, accessibility: A("assistanceStaff") }),

d({ id: "kohima", name: "Kohima", city: "Kohima", state: "Nagaland", region: "Northeast", category: "Cultural", description: "Hill city known for Naga culture and surrounding landscapes.", location: { latitude: 25.6751, longitude: 94.1086 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "aizawl", name: "Aizawl", city: "Aizawl", state: "Mizoram", region: "Northeast", category: "Hill Station", description: "Scenic hill city and capital of Mizoram.", location: { latitude: 23.7271, longitude: 92.7176 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "agartala-palace", name: "Ujjayanta Palace", city: "Agartala", state: "Tripura", region: "Northeast", category: "Heritage", description: "Historic palace and museum in Agartala.", location: { latitude: 23.8315, longitude: 91.2868 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),

d({ id: "pattadakal", name: "Pattadakal", city: "Pattadakal", state: "Karnataka", region: "South", category: "Heritage", description: "Historic temple complex and UNESCO World Heritage Site.", location: { latitude: 15.9486, longitude: 75.8167 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "aihole", name: "Aihole", city: "Aihole", state: "Karnataka", region: "South", category: "Heritage", description: "Historic temple town known for early Chalukyan architecture.", location: { latitude: 16.0200, longitude: 75.8800 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "badami-agastya-lake", name: "Agastya Lake", city: "Badami", state: "Karnataka", region: "South", category: "Nature", description: "Scenic lake surrounded by the historic Badami landscape.", location: { latitude: 15.9470, longitude: 75.6840 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

d({ id: "sri-ranganathaswamy", name: "Sri Ranganathaswamy Temple", city: "Srirangam", state: "Tamil Nadu", region: "South", category: "Religious", description: "Large historic temple complex dedicated to Lord Ranganatha.", location: { latitude: 10.8624, longitude: 78.6895 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "gingee-fort", name: "Gingee Fort", city: "Gingee", state: "Tamil Nadu", region: "South", category: "Heritage", description: "Historic hill fort complex with extensive fortifications.", location: { latitude: 12.2525, longitude: 79.4170 }, accessibility: A("assistanceStaff") }),

d({ id: "mahabalipuram", name: "Mahabalipuram", city: "Mahabalipuram", state: "Tamil Nadu", region: "South", category: "Heritage", description: "Historic coastal town known for Pallava monuments.", location: { latitude: 12.6208, longitude: 80.1945 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "vijayawada-kanaka-durga", name: "Kanaka Durga Temple", city: "Vijayawada", state: "Andhra Pradesh", region: "South", category: "Religious", description: "Major temple located on Indrakeeladri Hill.", location: { latitude: 16.5150, longitude: 80.6130 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "amaravati", name: "Amaravati Stupa", city: "Amaravati", state: "Andhra Pradesh", region: "South", category: "Historical", description: "Important Buddhist archaeological site.", location: { latitude: 16.5720, longitude: 80.3570 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

d({ id: "hussain-sagar", name: "Hussain Sagar Lake", city: "Hyderabad", state: "Telangana", region: "South", category: "Nature", description: "Large lake and recreational landmark in Hyderabad.", location: { latitude: 17.4239, longitude: 78.4738 }, accessibility: A("wheelchair", "stepFreeAccess", "accessibleParking") }),

d({ id: "warangal-fort", name: "Warangal Fort", city: "Warangal", state: "Telangana", region: "South", category: "Heritage", description: "Historic fort complex with impressive stone gateways.", location: { latitude: 17.9689, longitude: 79.5941 }, accessibility: A("wheelchair", "assistanceStaff") }),

d({ id: "kondapalli-fort", name: "Kondapalli Fort", city: "Vijayawada", state: "Andhra Pradesh", region: "South", category: "Heritage", description: "Historic hill fort near Vijayawada.", location: { latitude: 16.6190, longitude: 80.5420 }, accessibility: A("assistanceStaff") }),
];
export const hotels = [
  d({ id: "h1", name: "Heritage Palace Inn", city: "Mysuru", state: "Karnataka", category: "Hotel", price: 3500, unit: "/ night", description: "Demo accessible hotel listing.", location: { latitude: 12.31, longitude: 76.65 }, accessibility: A("wheelchair", "ramps", "elevator", "accessibleToilet", "stepFreeAccess", "accessibleParking") }),
  d({ id: "h2", name: "Royal Lakeview Hotel", city: "Jaipur", state: "Rajasthan", category: "Hotel", price: 4200, unit: "/ night", description: "Demo accessible hotel listing.", location: { latitude: 26.92, longitude: 75.80 }, accessibility: A("elevator", "accessibleParking") }),
  d({ id: "h3", name: "Marina Beach Resort", city: "Chennai", state: "Tamil Nadu", category: "Resort", price: 5200, unit: "/ night", description: "Demo accessible resort listing.", location: { latitude: 13.05, longitude: 80.27 }, accessibility: A("wheelchair", "ramps", "elevator", "accessibleToilet", "assistanceStaff") }),
  d({ id: "h4", name: "Taj View Stay", city: "Agra", state: "Uttar Pradesh", category: "Hotel", price: 3800, unit: "/ night", description: "Demo hotel near major attractions.", location: { latitude: 27.17, longitude: 78.04 }, accessibility: A("wheelchair", "ramps", "accessibleParking") }),
  d({ id: "h5", name: "Golden Temple Residency", city: "Amritsar", state: "Punjab", category: "Hotel", price: 3200, unit: "/ night", description: "Demo accessible hotel listing.", location: { latitude: 31.62, longitude: 74.87 }, accessibility: A("wheelchair", "elevator", "accessibleToilet") }),
  d({ id: "h6", name: "Capital Comfort Hotel", city: "Delhi", state: "Delhi", category: "Hotel", price: 4500, unit: "/ night", description: "Demo accessible city hotel.", location: { latitude: 28.61, longitude: 77.21 }, accessibility: A("wheelchair", "ramps", "elevator", "accessibleToilet", "accessibleParking") }),
  d({ id: "h7", name: "Blue City Heritage Hotel", city: "Jodhpur", state: "Rajasthan", category: "Heritage Hotel", price: 4100, unit: "/ night", description: "Demo heritage hotel.", location: { latitude: 26.29, longitude: 73.02 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h8", name: "Desert Palace Stay", city: "Jaisalmer", state: "Rajasthan", category: "Hotel", price: 3900, unit: "/ night", description: "Demo desert accommodation.", location: { latitude: 26.91, longitude: 70.91 }, accessibility: A("wheelchair", "accessibleParking", "assistanceStaff") }),
  d({ id: "h9", name: "Udaipur Lake Resort", city: "Udaipur", state: "Rajasthan", category: "Resort", price: 5600, unit: "/ night", description: "Demo lakeside resort.", location: { latitude: 24.58, longitude: 73.68 }, accessibility: A("wheelchair", "ramps", "elevator", "accessibleToilet") }),
  d({ id: "h10", name: "Varanasi Riverside Hotel", city: "Varanasi", state: "Uttar Pradesh", category: "Hotel", price: 3000, unit: "/ night", description: "Demo riverside hotel.", location: { latitude: 25.31, longitude: 83.01 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),

  d({ id: "h11", name: "Madhya Heritage Inn", city: "Bhopal", state: "Madhya Pradesh", category: "Hotel", price: 2800, unit: "/ night", description: "Demo accessible hotel.", location: { latitude: 23.26, longitude: 77.41 }, accessibility: A("wheelchair", "ramps", "elevator") }),
  d({ id: "h12", name: "Khajuraho Comfort Stay", city: "Khajuraho", state: "Madhya Pradesh", category: "Hotel", price: 2600, unit: "/ night", description: "Demo tourist accommodation.", location: { latitude: 24.83, longitude: 79.92 }, accessibility: A("wheelchair", "accessibleParking") }),
  d({ id: "h13", name: "Mumbai Gateway Hotel", city: "Mumbai", state: "Maharashtra", category: "Hotel", price: 6000, unit: "/ night", description: "Demo city hotel.", location: { latitude: 18.92, longitude: 72.83 }, accessibility: A("wheelchair", "elevator", "accessibleToilet", "accessibleParking") }),
  d({ id: "h14", name: "Marine Drive Residency", city: "Mumbai", state: "Maharashtra", category: "Hotel", price: 5500, unit: "/ night", description: "Demo hotel near Marine Drive.", location: { latitude: 18.94, longitude: 72.82 }, accessibility: A("wheelchair", "ramps", "elevator") }),
  d({ id: "h15", name: "Pune Garden Hotel", city: "Pune", state: "Maharashtra", category: "Hotel", price: 3300, unit: "/ night", description: "Demo accessible accommodation.", location: { latitude: 18.52, longitude: 73.85 }, accessibility: A("wheelchair", "elevator", "accessibleParking") }),
  d({ id: "h16", name: "Hampi Heritage Stay", city: "Hampi", state: "Karnataka", category: "Heritage Hotel", price: 2700, unit: "/ night", description: "Demo heritage accommodation.", location: { latitude: 15.33, longitude: 76.46 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h17", name: "Bengaluru City Hotel", city: "Bengaluru", state: "Karnataka", category: "Hotel", price: 3600, unit: "/ night", description: "Demo accessible city hotel.", location: { latitude: 12.97, longitude: 77.59 }, accessibility: A("wheelchair", "ramps", "elevator", "accessibleToilet") }),
  d({ id: "h18", name: "Coorg Hills Resort", city: "Madikeri", state: "Karnataka", category: "Resort", price: 4800, unit: "/ night", description: "Demo hill resort.", location: { latitude: 12.42, longitude: 75.74 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h19", name: "Gokarna Beach Hotel", city: "Gokarna", state: "Karnataka", category: "Resort", price: 3500, unit: "/ night", description: "Demo beach accommodation.", location: { latitude: 14.55, longitude: 74.32 }, accessibility: A("wheelchair", "stepFreeAccess") }),
  d({ id: "h20", name: "Hyderabad Charminar Hotel", city: "Hyderabad", state: "Telangana", category: "Hotel", price: 3100, unit: "/ night", description: "Demo accessible city hotel.", location: { latitude: 17.36, longitude: 78.47 }, accessibility: A("wheelchair", "elevator", "accessibleToilet") }),

  d({ id: "h21", name: "Golconda Residency", city: "Hyderabad", state: "Telangana", category: "Hotel", price: 3400, unit: "/ night", description: "Demo hotel listing.", location: { latitude: 17.38, longitude: 78.40 }, accessibility: A("wheelchair", "ramps", "accessibleParking") }),
  d({ id: "h22", name: "Kochi Waterfront Hotel", city: "Kochi", state: "Kerala", category: "Hotel", price: 4200, unit: "/ night", description: "Demo waterfront accommodation.", location: { latitude: 9.97, longitude: 76.28 }, accessibility: A("wheelchair", "ramps", "elevator", "accessibleToilet") }),
  d({ id: "h23", name: "Munnar Tea Resort", city: "Munnar", state: "Kerala", category: "Resort", price: 5000, unit: "/ night", description: "Demo hill resort.", location: { latitude: 10.09, longitude: 77.06 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h24", name: "Alleppey Backwater Resort", city: "Alappuzha", state: "Kerala", category: "Resort", price: 4700, unit: "/ night", description: "Demo backwater accommodation.", location: { latitude: 9.50, longitude: 76.34 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h25", name: "Kovalam Beach Resort", city: "Thiruvananthapuram", state: "Kerala", category: "Resort", price: 5200, unit: "/ night", description: "Demo beach resort.", location: { latitude: 8.40, longitude: 76.98 }, accessibility: A("wheelchair", "stepFreeAccess", "accessibleToilet") }),
  d({ id: "h26", name: "Goa Coastal Resort", city: "Panaji", state: "Goa", category: "Resort", price: 5800, unit: "/ night", description: "Demo accessible resort.", location: { latitude: 15.49, longitude: 73.83 }, accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking") }),
  d({ id: "h27", name: "Baga Beach Stay", city: "Baga", state: "Goa", category: "Hotel", price: 4300, unit: "/ night", description: "Demo beach hotel.", location: { latitude: 15.56, longitude: 73.75 }, accessibility: A("wheelchair", "stepFreeAccess") }),
  d({ id: "h28", name: "Puri Beach Hotel", city: "Puri", state: "Odisha", category: "Hotel", price: 3000, unit: "/ night", description: "Demo beach hotel.", location: { latitude: 19.80, longitude: 85.82 }, accessibility: A("wheelchair", "ramps", "accessibleParking") }),
  d({ id: "h29", name: "Bhubaneswar Heritage Hotel", city: "Bhubaneswar", state: "Odisha", category: "Hotel", price: 3200, unit: "/ night", description: "Demo city accommodation.", location: { latitude: 20.27, longitude: 85.84 }, accessibility: A("wheelchair", "elevator", "accessibleToilet") }),
  d({ id: "h30", name: "Kolkata Heritage Hotel", city: "Kolkata", state: "West Bengal", category: "Hotel", price: 3800, unit: "/ night", description: "Demo heritage hotel.", location: { latitude: 22.57, longitude: 88.36 }, accessibility: A("wheelchair", "ramps", "elevator") }),

  d({ id: "h31", name: "Darjeeling Mountain Resort", city: "Darjeeling", state: "West Bengal", category: "Resort", price: 4600, unit: "/ night", description: "Demo mountain accommodation.", location: { latitude: 27.04, longitude: 88.27 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h32", name: "Guwahati Riverside Hotel", city: "Guwahati", state: "Assam", category: "Hotel", price: 3000, unit: "/ night", description: "Demo accessible hotel.", location: { latitude: 26.14, longitude: 91.74 }, accessibility: A("wheelchair", "elevator", "accessibleParking") }),
  d({ id: "h33", name: "Kaziranga Nature Resort", city: "Kaziranga", state: "Assam", category: "Resort", price: 4400, unit: "/ night", description: "Demo nature resort.", location: { latitude: 26.58, longitude: 93.17 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h34", name: "Shillong Hills Hotel", city: "Shillong", state: "Meghalaya", category: "Hotel", price: 3500, unit: "/ night", description: "Demo hill hotel.", location: { latitude: 25.58, longitude: 91.89 }, accessibility: A("wheelchair", "ramps", "elevator") }),
  d({ id: "h35", name: "Gangtok Mountain Hotel", city: "Gangtok", state: "Sikkim", category: "Hotel", price: 3900, unit: "/ night", description: "Demo mountain hotel.", location: { latitude: 27.34, longitude: 88.61 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h36", name: "Pelling Valley Resort", city: "Pelling", state: "Sikkim", category: "Resort", price: 4200, unit: "/ night", description: "Demo valley resort.", location: { latitude: 27.23, longitude: 88.26 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "h37", name: "Srinagar Lake Hotel", city: "Srinagar", state: "Jammu and Kashmir", category: "Hotel", price: 4500, unit: "/ night", description: "Demo lakeside accommodation.", location: { latitude: 34.08, longitude: 74.80 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h38", name: "Gulmarg Mountain Resort", city: "Gulmarg", state: "Jammu and Kashmir", category: "Resort", price: 5500, unit: "/ night", description: "Demo mountain resort.", location: { latitude: 34.05, longitude: 74.38 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h39", name: "Leh Palace View Hotel", city: "Leh", state: "Ladakh", category: "Hotel", price: 4800, unit: "/ night", description: "Demo Ladakh hotel.", location: { latitude: 34.17, longitude: 77.58 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h40", name: "Pangong Lake Camp", city: "Leh", state: "Ladakh", category: "Camp", price: 3500, unit: "/ night", description: "Demo accessible tourism camp.", location: { latitude: 33.76, longitude: 78.67 }, accessibility: A("assistanceStaff") }),

  d({ id: "h41", name: "Manali Valley Hotel", city: "Manali", state: "Himachal Pradesh", category: "Hotel", price: 4000, unit: "/ night", description: "Demo mountain hotel.", location: { latitude: 32.24, longitude: 77.19 }, accessibility: A("wheelchair", "ramps", "elevator") }),
  d({ id: "h42", name: "Shimla Mall Hotel", city: "Shimla", state: "Himachal Pradesh", category: "Hotel", price: 4200, unit: "/ night", description: "Demo hill station hotel.", location: { latitude: 31.10, longitude: 77.17 }, accessibility: A("wheelchair", "elevator", "assistanceStaff") }),
  d({ id: "h43", name: "Dharamshala Hills Resort", city: "Dharamshala", state: "Himachal Pradesh", category: "Resort", price: 3900, unit: "/ night", description: "Demo accessible resort.", location: { latitude: 32.22, longitude: 76.32 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h44", name: "Rishikesh Riverside Hotel", city: "Rishikesh", state: "Uttarakhand", category: "Hotel", price: 3300, unit: "/ night", description: "Demo riverside hotel.", location: { latitude: 30.09, longitude: 78.27 }, accessibility: A("wheelchair", "stepFreeAccess", "accessibleParking") }),
  d({ id: "h45", name: "Haridwar Ganga Hotel", city: "Haridwar", state: "Uttarakhand", category: "Hotel", price: 2800, unit: "/ night", description: "Demo hotel near the Ganges.", location: { latitude: 29.95, longitude: 78.16 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h46", name: "Bodh Gaya Heritage Hotel", city: "Bodh Gaya", state: "Bihar", category: "Hotel", price: 2600, unit: "/ night", description: "Demo heritage accommodation.", location: { latitude: 24.70, longitude: 84.99 }, accessibility: A("wheelchair", "ramps", "accessibleToilet") }),
  d({ id: "h47", name: "Patna City Hotel", city: "Patna", state: "Bihar", category: "Hotel", price: 2800, unit: "/ night", description: "Demo accessible hotel.", location: { latitude: 25.59, longitude: 85.14 }, accessibility: A("wheelchair", "elevator", "accessibleParking") }),
  d({ id: "h48", name: "Ranchi Green Resort", city: "Ranchi", state: "Jharkhand", category: "Resort", price: 3200, unit: "/ night", description: "Demo resort listing.", location: { latitude: 23.34, longitude: 85.31 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "h49", name: "Kutch Desert Resort", city: "Kutch", state: "Gujarat", category: "Resort", price: 5000, unit: "/ night", description: "Demo desert resort.", location: { latitude: 23.73, longitude: 69.86 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h50", name: "Somnath Coast Hotel", city: "Somnath", state: "Gujarat", category: "Hotel", price: 3000, unit: "/ night", description: "Demo coastal hotel.", location: { latitude: 20.89, longitude: 70.40 }, accessibility: A("wheelchair", "ramps", "accessibleParking") }),

  d({ id: "h51", name: "Dwarka Pilgrim Hotel", city: "Dwarka", state: "Gujarat", category: "Hotel", price: 2800, unit: "/ night", description: "Demo accommodation.", location: { latitude: 22.24, longitude: 68.97 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h52", name: "Statue View Resort", city: "Kevadia", state: "Gujarat", category: "Resort", price: 5200, unit: "/ night", description: "Demo resort near major attractions.", location: { latitude: 21.84, longitude: 73.72 }, accessibility: A("wheelchair", "elevator", "accessibleToilet", "accessibleParking") }),
  d({ id: "h53", name: "Tirupati Comfort Hotel", city: "Tirupati", state: "Andhra Pradesh", category: "Hotel", price: 2900, unit: "/ night", description: "Demo pilgrimage hotel.", location: { latitude: 13.63, longitude: 79.42 }, accessibility: A("wheelchair", "ramps", "elevator") }),
  d({ id: "h54", name: "Vijayawada Riverside Hotel", city: "Vijayawada", state: "Andhra Pradesh", category: "Hotel", price: 3000, unit: "/ night", description: "Demo city hotel.", location: { latitude: 16.51, longitude: 80.65 }, accessibility: A("wheelchair", "elevator", "accessibleToilet") }),
  d({ id: "h55", name: "Araku Valley Resort", city: "Araku", state: "Andhra Pradesh", category: "Resort", price: 3600, unit: "/ night", description: "Demo hill resort.", location: { latitude: 18.33, longitude: 82.87 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h56", name: "Kanyakumari Sea View Hotel", city: "Kanyakumari", state: "Tamil Nadu", category: "Hotel", price: 3400, unit: "/ night", description: "Demo coastal hotel.", location: { latitude: 8.09, longitude: 77.54 }, accessibility: A("wheelchair", "stepFreeAccess", "elevator") }),
  d({ id: "h57", name: "Madurai Temple Hotel", city: "Madurai", state: "Tamil Nadu", category: "Hotel", price: 3000, unit: "/ night", description: "Demo city hotel.", location: { latitude: 9.92, longitude: 78.12 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h58", name: "Ooty Hill Resort", city: "Ooty", state: "Tamil Nadu", category: "Resort", price: 4500, unit: "/ night", description: "Demo hill resort.", location: { latitude: 11.41, longitude: 76.70 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h59", name: "Kodaikanal Lake Hotel", city: "Kodaikanal", state: "Tamil Nadu", category: "Hotel", price: 3900, unit: "/ night", description: "Demo hill hotel.", location: { latitude: 10.24, longitude: 77.49 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h60", name: "Thanjavur Heritage Stay", city: "Thanjavur", state: "Tamil Nadu", category: "Heritage Hotel", price: 3100, unit: "/ night", description: "Demo heritage stay.", location: { latitude: 10.78, longitude: 79.13 }, accessibility: A("wheelchair", "ramps", "accessibleParking") }),

  d({ id: "h61", name: "Puducherry French Quarter Hotel", city: "Puducherry", state: "Puducherry", category: "Hotel", price: 4200, unit: "/ night", description: "Demo accessible hotel.", location: { latitude: 11.94, longitude: 79.83 }, accessibility: A("wheelchair", "elevator", "accessibleToilet") }),
  d({ id: "h62", name: "Mahabalipuram Coastal Resort", city: "Mahabalipuram", state: "Tamil Nadu", category: "Resort", price: 4800, unit: "/ night", description: "Demo coastal resort.", location: { latitude: 12.62, longitude: 80.19 }, accessibility: A("wheelchair", "ramps", "stepFreeAccess") }),
  d({ id: "h63", name: "Udupi Temple Hotel", city: "Udupi", state: "Karnataka", category: "Hotel", price: 2700, unit: "/ night", description: "Demo pilgrimage accommodation.", location: { latitude: 13.34, longitude: 74.74 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h64", name: "Murudeshwar Coast Resort", city: "Murudeshwar", state: "Karnataka", category: "Resort", price: 3600, unit: "/ night", description: "Demo coastal resort.", location: { latitude: 14.09, longitude: 74.48 }, accessibility: A("wheelchair", "stepFreeAccess") }),
  d({ id: "h65", name: "Shivamogga Green Hotel", city: "Shivamogga", state: "Karnataka", category: "Hotel", price: 2500, unit: "/ night", description: "Demo city hotel.", location: { latitude: 13.93, longitude: 75.57 }, accessibility: A("wheelchair", "elevator", "accessibleParking") }),
  d({ id: "h66", name: "Mangalore Coastal Hotel", city: "Mangaluru", state: "Karnataka", category: "Hotel", price: 3300, unit: "/ night", description: "Demo coastal hotel.", location: { latitude: 12.91, longitude: 74.86 }, accessibility: A("wheelchair", "ramps", "elevator") }),
  d({ id: "h67", name: "Nashik Riverside Hotel", city: "Nashik", state: "Maharashtra", category: "Hotel", price: 3000, unit: "/ night", description: "Demo city hotel.", location: { latitude: 20.00, longitude: 73.79 }, accessibility: A("wheelchair", "accessibleParking") }),
  d({ id: "h68", name: "Aurangabad Heritage Hotel", city: "Aurangabad", state: "Maharashtra", category: "Hotel", price: 3400, unit: "/ night", description: "Demo heritage accommodation.", location: { latitude: 19.88, longitude: 75.34 }, accessibility: A("wheelchair", "ramps", "elevator") }),
  d({ id: "h69", name: "Lonavala Hills Resort", city: "Lonavala", state: "Maharashtra", category: "Resort", price: 4500, unit: "/ night", description: "Demo hill resort.", location: { latitude: 18.75, longitude: 73.41 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h70", name: "Mahabaleshwar Valley Resort", city: "Mahabaleshwar", state: "Maharashtra", category: "Resort", price: 4300, unit: "/ night", description: "Demo hill resort.", location: { latitude: 17.93, longitude: 73.65 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "h71", name: "Panchgani Hill Hotel", city: "Panchgani", state: "Maharashtra", category: "Hotel", price: 3700, unit: "/ night", description: "Demo hill hotel.", location: { latitude: 17.92, longitude: 73.80 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "h72", name: "Digha Sea View Hotel", city: "Digha", state: "West Bengal", category: "Hotel", price: 2600, unit: "/ night", description: "Demo beach hotel.", location: { latitude: 21.63, longitude: 87.51 }, accessibility: A("wheelchair", "stepFreeAccess") }),
  d({ id: "h73", name: "Siliguri City Hotel", city: "Siliguri", state: "West Bengal", category: "Hotel", price: 2800, unit: "/ night", description: "Demo city accommodation.", location: { latitude: 26.73, longitude: 88.40 }, accessibility: A("wheelchair", "elevator") }),
  d({ id: "h74", name: "Agartala Palace Hotel", city: "Agartala", state: "Tripura", category: "Hotel", price: 2500, unit: "/ night", description: "Demo accessible hotel.", location: { latitude: 23.83, longitude: 91.29 }, accessibility: A("wheelchair", "ramps", "accessibleToilet") }),
  d({ id: "h75", name: "Kohima Hills Hotel", city: "Kohima", state: "Nagaland", category: "Hotel", price: 2900, unit: "/ night", description: "Demo hill hotel.", location: { latitude: 25.67, longitude: 94.11 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h76", name: "Aizawl Valley Hotel", city: "Aizawl", state: "Mizoram", category: "Hotel", price: 2800, unit: "/ night", description: "Demo city hotel.", location: { latitude: 23.73, longitude: 92.72 }, accessibility: A("wheelchair", "elevator") }),
  d({ id: "h77", name: "Imphal Heritage Hotel", city: "Imphal", state: "Manipur", category: "Hotel", price: 2700, unit: "/ night", description: "Demo hotel listing.", location: { latitude: 24.82, longitude: 93.94 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "h78", name: "Port Blair Island Hotel", city: "Port Blair", state: "Andaman and Nicobar Islands", category: "Hotel", price: 4200, unit: "/ night", description: "Demo island hotel.", location: { latitude: 11.62, longitude: 92.73 }, accessibility: A("wheelchair", "ramps", "elevator", "accessibleParking") }),
  d({ id: "h79", name: "Kavaratti Island Resort", city: "Kavaratti", state: "Lakshadweep", category: "Resort", price: 5500, unit: "/ night", description: "Demo island resort.", location: { latitude: 10.57, longitude: 72.64 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h80", name: "Daman Coastal Hotel", city: "Daman", state: "Daman and Diu", category: "Hotel", price: 3200, unit: "/ night", description: "Demo coastal accommodation.", location: { latitude: 20.42, longitude: 72.83 }, accessibility: A("wheelchair", "ramps", "accessibleParking") }),

  d({ id: "h81", name: "Amaravati City Hotel", city: "Amaravati", state: "Andhra Pradesh", category: "Hotel", price: 2700, unit: "/ night", description: "Demo city hotel.", location: { latitude: 16.57, longitude: 80.36 }, accessibility: A("wheelchair", "elevator") }),
  d({ id: "h82", name: "Warangal Heritage Hotel", city: "Warangal", state: "Telangana", category: "Hotel", price: 2600, unit: "/ night", description: "Demo heritage accommodation.", location: { latitude: 17.97, longitude: 79.59 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "h83", name: "Vijayapura Heritage Stay", city: "Vijayapura", state: "Karnataka", category: "Hotel", price: 2500, unit: "/ night", description: "Demo heritage hotel.", location: { latitude: 16.83, longitude: 75.71 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h84", name: "Badami Heritage Inn", city: "Badami", state: "Karnataka", category: "Hotel", price: 2400, unit: "/ night", description: "Demo heritage stay.", location: { latitude: 15.95, longitude: 75.68 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h85", name: "Pattadakal Heritage Stay", city: "Pattadakal", state: "Karnataka", category: "Hotel", price: 2300, unit: "/ night", description: "Demo accommodation.", location: { latitude: 15.95, longitude: 75.82 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h86", name: "Rameswaram Temple Hotel", city: "Rameswaram", state: "Tamil Nadu", category: "Hotel", price: 2800, unit: "/ night", description: "Demo pilgrimage hotel.", location: { latitude: 9.29, longitude: 79.31 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "h87", name: "Pondicherry Heritage Inn", city: "Puducherry", state: "Puducherry", category: "Heritage Hotel", price: 4000, unit: "/ night", description: "Demo heritage hotel.", location: { latitude: 11.94, longitude: 79.83 }, accessibility: A("wheelchair", "elevator", "accessibleToilet") }),
  d({ id: "h88", name: "Varkala Cliff Resort", city: "Varkala", state: "Kerala", category: "Resort", price: 4600, unit: "/ night", description: "Demo coastal resort.", location: { latitude: 8.74, longitude: 76.72 }, accessibility: A("wheelchair", "stepFreeAccess", "assistanceStaff") }),
  d({ id: "h89", name: "Thekkady Wildlife Resort", city: "Thekkady", state: "Kerala", category: "Resort", price: 4400, unit: "/ night", description: "Demo nature resort.", location: { latitude: 9.46, longitude: 77.24 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h90", name: "Bekal Coast Resort", city: "Kasaragod", state: "Kerala", category: "Resort", price: 4700, unit: "/ night", description: "Demo coastal resort.", location: { latitude: 12.39, longitude: 75.03 }, accessibility: A("wheelchair", "ramps") }),

  d({ id: "h91", name: "Mount Abu Hill Hotel", city: "Mount Abu", state: "Rajasthan", category: "Hotel", price: 3600, unit: "/ night", description: "Demo hill station hotel.", location: { latitude: 24.59, longitude: 72.71 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h92", name: "Pushkar Lake Hotel", city: "Pushkar", state: "Rajasthan", category: "Hotel", price: 3000, unit: "/ night", description: "Demo pilgrimage hotel.", location: { latitude: 26.49, longitude: 74.55 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "h93", name: "Ranthambore Safari Resort", city: "Sawai Madhopur", state: "Rajasthan", category: "Resort", price: 5200, unit: "/ night", description: "Demo wildlife resort.", location: { latitude: 26.02, longitude: 76.50 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h94", name: "Nashik Vineyard Resort", city: "Nashik", state: "Maharashtra", category: "Resort", price: 4300, unit: "/ night", description: "Demo resort accommodation.", location: { latitude: 20.00, longitude: 73.79 }, accessibility: A("wheelchair", "ramps", "accessibleParking") }),
  d({ id: "h95", name: "Rishikesh Ganga Resort", city: "Rishikesh", state: "Uttarakhand", category: "Resort", price: 4100, unit: "/ night", description: "Demo riverside resort.", location: { latitude: 30.09, longitude: 78.27 }, accessibility: A("wheelchair", "stepFreeAccess", "ramps") }),
  d({ id: "h96", name: "Corbett Forest Resort", city: "Ramnagar", state: "Uttarakhand", category: "Resort", price: 4900, unit: "/ night", description: "Demo wildlife resort.", location: { latitude: 29.53, longitude: 78.77 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h97", name: "Tawang Mountain Stay", city: "Tawang", state: "Arunachal Pradesh", category: "Hotel", price: 3200, unit: "/ night", description: "Demo mountain accommodation.", location: { latitude: 27.59, longitude: 91.86 }, accessibility: A("assistanceStaff") }),
  d({ id: "h98", name: "Ziro Valley Resort", city: "Ziro", state: "Arunachal Pradesh", category: "Resort", price: 3500, unit: "/ night", description: "Demo valley resort.", location: { latitude: 27.54, longitude: 93.82 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h99", name: "Cherrapunji Nature Resort", city: "Cherrapunji", state: "Meghalaya", category: "Resort", price: 4000, unit: "/ night", description: "Demo nature resort.", location: { latitude: 25.27, longitude: 91.73 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "h100", name: "Majuli Island Stay", city: "Majuli", state: "Assam", category: "Homestay", price: 2200, unit: "/ night", description: "Demo island accommodation.", location: { latitude: 27.00, longitude: 94.22 }, accessibility: A("wheelchair", "assistanceStaff") }),

];
export const vehicles = [
  d({ id: "v1", name: "Wheelchair Van", city: "Mysuru", category: "Accessible van", price: 3000, unit: "/ day", description: "Demo wheelchair-accessible van with ramp.", location: { latitude: 12.30, longitude: 76.64 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "v2", name: "Accessible Cab", city: "Agra", category: "Accessible cab", price: 2200, unit: "/ day", description: "Demo cab supporting wheelchair users.", location: { latitude: 27.18, longitude: 78.01 }, accessibility: A("wheelchair") }),
  d({ id: "v3", name: "Hydraulic Lift Bus", city: "Chennai", category: "Accessible bus", price: 9000, unit: "/ day", description: "Demo bus with hydraulic wheelchair lift.", location: { latitude: 13.08, longitude: 80.27 }, accessibility: A("wheelchair", "ramps", "elevator", "assistanceStaff") }),
  d({ id: "v4", name: "Accessible SUV", city: "Bengaluru", category: "Accessible SUV", price: 3500, unit: "/ day", description: "Demo accessible SUV.", location: { latitude: 12.97, longitude: 77.59 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v5", name: "Mobility Support Cab", city: "Delhi", category: "Accessible cab", price: 2800, unit: "/ day", description: "Demo mobility-friendly cab.", location: { latitude: 28.61, longitude: 77.21 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v6", name: "Ramp Van", city: "Jaipur", category: "Accessible van", price: 3200, unit: "/ day", description: "Demo van with wheelchair ramp.", location: { latitude: 26.92, longitude: 75.80 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v7", name: "Accessible Mini Bus", city: "Mumbai", category: "Accessible bus", price: 7500, unit: "/ day", description: "Demo accessible mini bus.", location: { latitude: 18.94, longitude: 72.83 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "v8", name: "Wheelchair Taxi", city: "Pune", category: "Accessible taxi", price: 2400, unit: "/ day", description: "Demo wheelchair taxi.", location: { latitude: 18.52, longitude: 73.85 }, accessibility: A("wheelchair") }),
  d({ id: "v9", name: "Accessible Traveller", city: "Hyderabad", category: "Accessible van", price: 5000, unit: "/ day", description: "Demo accessible group vehicle.", location: { latitude: 17.38, longitude: 78.48 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "v10", name: "Mobility Van", city: "Kochi", category: "Accessible van", price: 3300, unit: "/ day", description: "Demo mobility-friendly van.", location: { latitude: 9.97, longitude: 76.28 }, accessibility: A("wheelchair", "ramps") }),

  d({ id: "v11", name: "Accessible Resort Cab", city: "Goa", category: "Accessible cab", price: 2700, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 15.49, longitude: 73.83 }, accessibility: A("wheelchair") }),
  d({ id: "v12", name: "Beach Mobility Van", city: "Puri", category: "Accessible van", price: 3100, unit: "/ day", description: "Demo beach transfer van.", location: { latitude: 19.80, longitude: 85.82 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v13", name: "Hill Support SUV", city: "Ooty", category: "Accessible SUV", price: 3600, unit: "/ day", description: "Demo hill travel vehicle.", location: { latitude: 11.41, longitude: 76.70 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v14", name: "Munnar Accessible Van", city: "Munnar", category: "Accessible van", price: 3400, unit: "/ day", description: "Demo accessible tourism van.", location: { latitude: 10.09, longitude: 77.06 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v15", name: "Udaipur Mobility Cab", city: "Udaipur", category: "Accessible cab", price: 2600, unit: "/ day", description: "Demo mobility-friendly cab.", location: { latitude: 24.58, longitude: 73.68 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v16", name: "Jodhpur Wheelchair Van", city: "Jodhpur", category: "Accessible van", price: 3000, unit: "/ day", description: "Demo wheelchair van.", location: { latitude: 26.29, longitude: 73.02 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v17", name: "Jaisalmer Desert SUV", city: "Jaisalmer", category: "Accessible SUV", price: 4200, unit: "/ day", description: "Demo accessible desert vehicle.", location: { latitude: 26.91, longitude: 70.91 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v18", name: "Amritsar Accessible Cab", city: "Amritsar", category: "Accessible cab", price: 2300, unit: "/ day", description: "Demo accessible city cab.", location: { latitude: 31.62, longitude: 74.87 }, accessibility: A("wheelchair") }),
  d({ id: "v19", name: "Varanasi Mobility Van", city: "Varanasi", category: "Accessible van", price: 2800, unit: "/ day", description: "Demo accessible van.", location: { latitude: 25.31, longitude: 83.01 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "v20", name: "Shimla Accessible SUV", city: "Shimla", category: "Accessible SUV", price: 4000, unit: "/ day", description: "Demo hill transport vehicle.", location: { latitude: 31.10, longitude: 77.17 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "v21", name: "Manali Wheelchair Van", city: "Manali", category: "Accessible van", price: 3800, unit: "/ day", description: "Demo mountain travel van.", location: { latitude: 32.24, longitude: 77.19 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v22", name: "Rishikesh Accessible Cab", city: "Rishikesh", category: "Accessible cab", price: 2500, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 30.09, longitude: 78.27 }, accessibility: A("wheelchair", "stepFreeAccess") }),
  d({ id: "v23", name: "Srinagar Mobility Van", city: "Srinagar", category: "Accessible van", price: 3600, unit: "/ day", description: "Demo accessible Kashmir transport.", location: { latitude: 34.08, longitude: 74.80 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v24", name: "Leh Support SUV", city: "Leh", category: "Accessible SUV", price: 4500, unit: "/ day", description: "Demo accessible mountain SUV.", location: { latitude: 34.17, longitude: 77.58 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v25", name: "Darjeeling Accessible Van", city: "Darjeeling", category: "Accessible van", price: 3500, unit: "/ day", description: "Demo accessible hill van.", location: { latitude: 27.04, longitude: 88.27 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v26", name: "Gangtok Mobility Cab", city: "Gangtok", category: "Accessible cab", price: 2900, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 27.34, longitude: 88.61 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v27", name: "Shillong Accessible SUV", city: "Shillong", category: "Accessible SUV", price: 3300, unit: "/ day", description: "Demo accessible SUV.", location: { latitude: 25.58, longitude: 91.89 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v28", name: "Kaziranga Safari Van", city: "Kaziranga", category: "Accessible van", price: 4000, unit: "/ day", description: "Demo safari support vehicle.", location: { latitude: 26.58, longitude: 93.17 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v29", name: "Bodh Gaya Accessible Cab", city: "Bodh Gaya", category: "Accessible cab", price: 2200, unit: "/ day", description: "Demo accessible pilgrimage cab.", location: { latitude: 24.70, longitude: 84.99 }, accessibility: A("wheelchair") }),
  d({ id: "v30", name: "Ranchi Mobility Van", city: "Ranchi", category: "Accessible van", price: 2600, unit: "/ day", description: "Demo accessible city van.", location: { latitude: 23.34, longitude: 85.31 }, accessibility: A("wheelchair", "ramps") }),

  d({ id: "v31", name: "Ahmedabad Accessible Cab", city: "Ahmedabad", category: "Accessible cab", price: 2400, unit: "/ day", description: "Demo accessible city cab.", location: { latitude: 23.02, longitude: 72.57 }, accessibility: A("wheelchair") }),
  d({ id: "v32", name: "Kutch Desert Van", city: "Kutch", category: "Accessible van", price: 3500, unit: "/ day", description: "Demo desert travel van.", location: { latitude: 23.73, longitude: 69.86 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v33", name: "Somnath Accessible Cab", city: "Somnath", category: "Accessible cab", price: 2300, unit: "/ day", description: "Demo pilgrimage cab.", location: { latitude: 20.89, longitude: 70.40 }, accessibility: A("wheelchair") }),
  d({ id: "v34", name: "Dwarka Mobility Van", city: "Dwarka", category: "Accessible van", price: 2600, unit: "/ day", description: "Demo accessible van.", location: { latitude: 22.24, longitude: 68.97 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v35", name: "Tirupati Accessible Cab", city: "Tirupati", category: "Accessible cab", price: 2300, unit: "/ day", description: "Demo pilgrimage transport.", location: { latitude: 13.63, longitude: 79.42 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v36", name: "Araku Valley Van", city: "Araku", category: "Accessible van", price: 3200, unit: "/ day", description: "Demo accessible valley transport.", location: { latitude: 18.33, longitude: 82.87 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v37", name: "Vijayawada Accessible SUV", city: "Vijayawada", category: "Accessible SUV", price: 3000, unit: "/ day", description: "Demo accessible SUV.", location: { latitude: 16.51, longitude: 80.65 }, accessibility: A("wheelchair") }),
  d({ id: "v38", name: "Madurai Mobility Cab", city: "Madurai", category: "Accessible cab", price: 2300, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 9.92, longitude: 78.12 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v39", name: "Kanyakumari Accessible Van", city: "Kanyakumari", category: "Accessible van", price: 2900, unit: "/ day", description: "Demo coastal travel van.", location: { latitude: 8.09, longitude: 77.54 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v40", name: "Rameswaram Mobility Cab", city: "Rameswaram", category: "Accessible cab", price: 2200, unit: "/ day", description: "Demo pilgrimage cab.", location: { latitude: 9.29, longitude: 79.31 }, accessibility: A("wheelchair") }),

  d({ id: "v41", name: "Coorg Accessible SUV", city: "Madikeri", category: "Accessible SUV", price: 3500, unit: "/ day", description: "Demo hill travel SUV.", location: { latitude: 12.42, longitude: 75.74 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v42", name: "Mangaluru Accessible Van", city: "Mangaluru", category: "Accessible van", price: 2900, unit: "/ day", description: "Demo coastal van.", location: { latitude: 12.91, longitude: 74.86 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v43", name: "Udupi Accessible Cab", city: "Udupi", category: "Accessible cab", price: 2200, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 13.34, longitude: 74.74 }, accessibility: A("wheelchair") }),
  d({ id: "v44", name: "Murudeshwar Beach Van", city: "Murudeshwar", category: "Accessible van", price: 2800, unit: "/ day", description: "Demo accessible beach van.", location: { latitude: 14.09, longitude: 74.48 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v45", name: "Hampi Heritage Vehicle", city: "Hampi", category: "Accessible SUV", price: 3000, unit: "/ day", description: "Demo heritage-tour vehicle.", location: { latitude: 15.33, longitude: 76.46 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v46", name: "Badami Accessible Van", city: "Badami", category: "Accessible van", price: 2600, unit: "/ day", description: "Demo accessible heritage van.", location: { latitude: 15.95, longitude: 75.68 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v47", name: "Pattadakal Mobility Cab", city: "Pattadakal", category: "Accessible cab", price: 2200, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 15.95, longitude: 75.82 }, accessibility: A("wheelchair") }),
  d({ id: "v48", name: "Vijayapura Accessible Van", city: "Vijayapura", category: "Accessible van", price: 2500, unit: "/ day", description: "Demo accessible van.", location: { latitude: 16.83, longitude: 75.71 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v49", name: "Shivamogga Mobility Cab", city: "Shivamogga", category: "Accessible cab", price: 2200, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 13.93, longitude: 75.57 }, accessibility: A("wheelchair") }),
  d({ id: "v50", name: "Jog Falls Support Vehicle", city: "Shivamogga", category: "Accessible SUV", price: 3200, unit: "/ day", description: "Demo tourism vehicle.", location: { latitude: 14.23, longitude: 74.81 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "v51", name: "Pondicherry Accessible Cab", city: "Puducherry", category: "Accessible cab", price: 2400, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 11.94, longitude: 79.83 }, accessibility: A("wheelchair") }),
  d({ id: "v52", name: "Mahabalipuram Accessible Van", city: "Mahabalipuram", category: "Accessible van", price: 2800, unit: "/ day", description: "Demo coastal van.", location: { latitude: 12.62, longitude: 80.19 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v53", name: "Thanjavur Mobility Cab", city: "Thanjavur", category: "Accessible cab", price: 2300, unit: "/ day", description: "Demo heritage cab.", location: { latitude: 10.78, longitude: 79.13 }, accessibility: A("wheelchair") }),
  d({ id: "v54", name: "Kodaikanal Accessible SUV", city: "Kodaikanal", category: "Accessible SUV", price: 3300, unit: "/ day", description: "Demo hill SUV.", location: { latitude: 10.24, longitude: 77.49 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v55", name: "Varkala Beach Van", city: "Varkala", category: "Accessible van", price: 2900, unit: "/ day", description: "Demo beach van.", location: { latitude: 8.74, longitude: 76.72 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v56", name: "Alleppey Accessible Van", city: "Alappuzha", category: "Accessible van", price: 3100, unit: "/ day", description: "Demo backwater transfer van.", location: { latitude: 9.50, longitude: 76.34 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v57", name: "Thekkady Mobility SUV", city: "Thekkady", category: "Accessible SUV", price: 3500, unit: "/ day", description: "Demo wildlife transport.", location: { latitude: 9.46, longitude: 77.24 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v58", name: "Kovalam Accessible Cab", city: "Kovalam", category: "Accessible cab", price: 2300, unit: "/ day", description: "Demo accessible coastal cab.", location: { latitude: 8.40, longitude: 76.98 }, accessibility: A("wheelchair") }),
  d({ id: "v59", name: "Bekal Accessible Van", city: "Kasaragod", category: "Accessible van", price: 2800, unit: "/ day", description: "Demo coastal transport.", location: { latitude: 12.39, longitude: 75.03 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v60", name: "Athirappilly Mobility SUV", city: "Thrissur", category: "Accessible SUV", price: 3200, unit: "/ day", description: "Demo nature-tour vehicle.", location: { latitude: 10.29, longitude: 76.57 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "v61", name: "Darjeeling Wheelchair Van", city: "Darjeeling", category: "Accessible van", price: 3400, unit: "/ day", description: "Demo accessible mountain van.", location: { latitude: 27.04, longitude: 88.27 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v62", name: "Siliguri Accessible Cab", city: "Siliguri", category: "Accessible cab", price: 2300, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 26.73, longitude: 88.40 }, accessibility: A("wheelchair") }),
  d({ id: "v63", name: "Gangtok Accessible Van", city: "Gangtok", category: "Accessible van", price: 3300, unit: "/ day", description: "Demo mountain van.", location: { latitude: 27.34, longitude: 88.61 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v64", name: "Pelling Support SUV", city: "Pelling", category: "Accessible SUV", price: 3500, unit: "/ day", description: "Demo accessible SUV.", location: { latitude: 27.23, longitude: 88.26 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v65", name: "Tawang Accessible Van", city: "Tawang", category: "Accessible van", price: 3800, unit: "/ day", description: "Demo mountain transport.", location: { latitude: 27.59, longitude: 91.86 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v66", name: "Ziro Valley Cab", city: "Ziro", category: "Accessible cab", price: 2900, unit: "/ day", description: "Demo accessible valley cab.", location: { latitude: 27.54, longitude: 93.82 }, accessibility: A("wheelchair") }),
  d({ id: "v67", name: "Cherrapunji Accessible Van", city: "Cherrapunji", category: "Accessible van", price: 3200, unit: "/ day", description: "Demo accessible nature vehicle.", location: { latitude: 25.27, longitude: 91.73 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v68", name: "Kohima Mobility Cab", city: "Kohima", category: "Accessible cab", price: 2500, unit: "/ day", description: "Demo accessible city cab.", location: { latitude: 25.67, longitude: 94.11 }, accessibility: A("wheelchair") }),
  d({ id: "v69", name: "Aizawl Accessible SUV", city: "Aizawl", category: "Accessible SUV", price: 3000, unit: "/ day", description: "Demo hill transport.", location: { latitude: 23.73, longitude: 92.72 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v70", name: "Agartala Accessible Van", city: "Agartala", category: "Accessible van", price: 2600, unit: "/ day", description: "Demo accessible van.", location: { latitude: 23.83, longitude: 91.29 }, accessibility: A("wheelchair", "ramps") }),

  d({ id: "v71", name: "Port Blair Island Van", city: "Port Blair", category: "Accessible van", price: 3500, unit: "/ day", description: "Demo island transport.", location: { latitude: 11.62, longitude: 92.73 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v72", name: "Kavaratti Mobility Cab", city: "Kavaratti", category: "Accessible cab", price: 3000, unit: "/ day", description: "Demo island transport.", location: { latitude: 10.57, longitude: 72.64 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v73", name: "Daman Accessible Cab", city: "Daman", category: "Accessible cab", price: 2300, unit: "/ day", description: "Demo coastal cab.", location: { latitude: 20.42, longitude: 72.83 }, accessibility: A("wheelchair") }),
  d({ id: "v74", name: "Diu Accessible Van", city: "Diu", category: "Accessible van", price: 2600, unit: "/ day", description: "Demo island transport.", location: { latitude: 20.71, longitude: 70.98 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v75", name: "Chandigarh Mobility Cab", city: "Chandigarh", category: "Accessible cab", price: 2400, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 30.74, longitude: 76.79 }, accessibility: A("wheelchair") }),
  d({ id: "v76", name: "Haridwar Accessible Van", city: "Haridwar", category: "Accessible van", price: 2700, unit: "/ day", description: "Demo pilgrimage transport.", location: { latitude: 29.95, longitude: 78.16 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v77", name: "Bodh Gaya Mobility Van", city: "Bodh Gaya", category: "Accessible van", price: 2600, unit: "/ day", description: "Demo pilgrimage van.", location: { latitude: 24.70, longitude: 84.99 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v78", name: "Patna Accessible Cab", city: "Patna", category: "Accessible cab", price: 2200, unit: "/ day", description: "Demo accessible city cab.", location: { latitude: 25.59, longitude: 85.14 }, accessibility: A("wheelchair") }),
  d({ id: "v79", name: "Ranchi Accessible SUV", city: "Ranchi", category: "Accessible SUV", price: 2900, unit: "/ day", description: "Demo accessible SUV.", location: { latitude: 23.34, longitude: 85.31 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v80", name: "Nashik Accessible Van", city: "Nashik", category: "Accessible van", price: 2800, unit: "/ day", description: "Demo accessible van.", location: { latitude: 20.00, longitude: 73.79 }, accessibility: A("wheelchair", "ramps") }),

  d({ id: "v81", name: "Lonavala Mobility SUV", city: "Lonavala", category: "Accessible SUV", price: 3300, unit: "/ day", description: "Demo hill transport.", location: { latitude: 18.75, longitude: 73.41 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v82", name: "Mahabaleshwar Accessible Van", city: "Mahabaleshwar", category: "Accessible van", price: 3400, unit: "/ day", description: "Demo hill van.", location: { latitude: 17.93, longitude: 73.65 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v83", name: "Ajmer Accessible Cab", city: "Ajmer", category: "Accessible cab", price: 2200, unit: "/ day", description: "Demo accessible cab.", location: { latitude: 26.45, longitude: 74.64 }, accessibility: A("wheelchair") }),
  d({ id: "v84", name: "Pushkar Accessible Van", city: "Pushkar", category: "Accessible van", price: 2500, unit: "/ day", description: "Demo pilgrimage van.", location: { latitude: 26.49, longitude: 74.55 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v85", name: "Mount Abu Mobility SUV", city: "Mount Abu", category: "Accessible SUV", price: 3200, unit: "/ day", description: "Demo hill SUV.", location: { latitude: 24.59, longitude: 72.71 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v86", name: "Ranthambore Safari Van", city: "Sawai Madhopur", category: "Accessible van", price: 3600, unit: "/ day", description: "Demo safari support vehicle.", location: { latitude: 26.02, longitude: 76.50 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v87", name: "Bhopal Accessible Cab", city: "Bhopal", category: "Accessible cab", price: 2200, unit: "/ day", description: "Demo accessible city cab.", location: { latitude: 23.26, longitude: 77.41 }, accessibility: A("wheelchair") }),
  d({ id: "v88", name: "Sanchi Accessible Van", city: "Sanchi", category: "Accessible van", price: 2500, unit: "/ day", description: "Demo heritage transport.", location: { latitude: 23.48, longitude: 77.74 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v89", name: "Khajuraho Accessible SUV", city: "Khajuraho", category: "Accessible SUV", price: 2800, unit: "/ day", description: "Demo heritage tour SUV.", location: { latitude: 24.83, longitude: 79.92 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v90", name: "Bandhavgarh Safari Van", city: "Umaria", category: "Accessible van", price: 3700, unit: "/ day", description: "Demo wildlife vehicle.", location: { latitude: 23.73, longitude: 81.03 }, accessibility: A("wheelchair", "assistanceStaff") }),

  d({ id: "v91", name: "Kanha Safari Van", city: "Mandla", category: "Accessible van", price: 3700, unit: "/ day", description: "Demo wildlife transport.", location: { latitude: 22.33, longitude: 80.61 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v92", name: "Kolkata Accessible Cab", city: "Kolkata", category: "Accessible cab", price: 2500, unit: "/ day", description: "Demo accessible city cab.", location: { latitude: 22.57, longitude: 88.36 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v93", name: "Howrah Mobility Van", city: "Kolkata", category: "Accessible van", price: 2800, unit: "/ day", description: "Demo accessible van.", location: { latitude: 22.60, longitude: 88.26 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v94", name: "Sundarbans Support Boat", city: "Sundarbans", category: "Accessible boat", price: 4500, unit: "/ day", description: "Demo accessible tourism boat.", location: { latitude: 21.95, longitude: 88.90 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v95", name: "Chilika Accessible Boat", city: "Puri", category: "Accessible boat", price: 4000, unit: "/ day", description: "Demo accessible sightseeing boat.", location: { latitude: 19.70, longitude: 85.32 }, accessibility: A("wheelchair", "assistanceStaff") }),
  d({ id: "v96", name: "Amritsar Wheelchair Van", city: "Amritsar", category: "Accessible van", price: 2800, unit: "/ day", description: "Demo wheelchair-accessible van.", location: { latitude: 31.62, longitude: 74.87 }, accessibility: A("wheelchair", "ramps") }),
  d({ id: "v97", name: "Mysuru Accessible Bus", city: "Mysuru", category: "Accessible bus", price: 7000, unit: "/ day", description: "Demo accessible group bus.", location: { latitude: 12.30, longitude: 76.65 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "v98", name: "Bengaluru Accessible Bus", city: "Bengaluru", category: "Accessible bus", price: 7500, unit: "/ day", description: "Demo accessible group bus.", location: { latitude: 12.97, longitude: 77.59 }, accessibility: A("wheelchair", "ramps", "assistanceStaff") }),
  d({ id: "v99", name: "Delhi Accessible Bus", city: "Delhi", category: "Accessible bus", price: 8500, unit: "/ day", description: "Demo accessible group bus.", location: { latitude: 28.61, longitude: 77.21 }, accessibility: A("wheelchair", "ramps", "elevator", "assistanceStaff") }),
  d({ id: "v100", name: "Mumbai Accessible Bus", city: "Mumbai", category: "Accessible bus", price: 8500, unit: "/ day", description: "Demo accessible group bus.", location: { latitude: 18.94, longitude: 72.83 }, accessibility: A("wheelchair", "ramps", "elevator", "assistanceStaff") }),
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
