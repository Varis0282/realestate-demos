// Shared bilingual content consumed by all 5 real-estate themes.
// Same content, different design — that's the pitch.

export type Lang = "en" | "hi";

export const projects = [
  {
    id: "shivalik-greens", photo: 0, icon: "Building2",
    en: { name: "Shivalik Greens", type: "2 & 3 BHK Premium Flats", location: "Super Corridor, Indore", sizes: "1,050 – 1,650 sq ft", priceFrom: "₹38 Lakh onwards", status: "Possession Dec 2026", desc: "A gated high-rise township on Super Corridor — 5 minutes from the airport road, with clubhouse, landscaped gardens and 70% open space. MP-RERA Registered." },
    hi: { name: "शिवालिक ग्रीन्स", type: "2 व 3 BHK प्रीमियम फ्लैट", location: "सुपर कॉरिडोर, इंदौर", sizes: "1,050 – 1,650 वर्ग फुट", priceFrom: "₹38 लाख से", status: "पज़ेशन दिसंबर 2026", desc: "सुपर कॉरिडोर पर गेटेड हाई-राइज़ टाउनशिप — एयरपोर्ट रोड से 5 मिनट, क्लबहाउस, लैंडस्केप गार्डन और 70% खुली जगह के साथ। MP-RERA रजिस्टर्ड।" },
    highlights: { en: ["Clubhouse + Gym", "70% open space", "Airport 10 min"], hi: ["क्लबहाउस + जिम", "70% खुली जगह", "एयरपोर्ट 10 मिनट"] },
  },
  {
    id: "shivalik-enclave", photo: 1, icon: "Home",
    en: { name: "Shivalik Enclave", type: "3 & 4 BHK Row Houses", location: "Nipania, Indore", sizes: "1,800 – 2,600 sq ft", priceFrom: "₹65 Lakh onwards", status: "Ready to Move", desc: "Independent row houses in fully developed Nipania — private gardens, wide 40-ft RCC roads and a community park. Registry-ready titles. MP-RERA Registered." },
    hi: { name: "शिवालिक एन्क्लेव", type: "3 व 4 BHK रो हाउस", location: "निपानिया, इंदौर", sizes: "1,800 – 2,600 वर्ग फुट", priceFrom: "₹65 लाख से", status: "रेडी टू मूव", desc: "पूर्ण विकसित निपानिया में स्वतंत्र रो हाउस — निजी गार्डन, 40 फुट चौड़ी RCC सड़कें और कम्युनिटी पार्क। रजिस्ट्री-रेडी टाइटल। MP-RERA रजिस्टर्ड।" },
    highlights: { en: ["Private garden", "Ready to move", "Gated colony"], hi: ["निजी गार्डन", "रेडी टू मूव", "गेटेड कॉलोनी"] },
  },
  {
    id: "shivalik-business-park", photo: 2, icon: "Landmark",
    en: { name: "Shivalik Business Park", type: "Shops, Showrooms & Offices", location: "MR-10 Road, Indore", sizes: "220 – 1,200 sq ft", priceFrom: "₹22 Lakh onwards", status: "Possession Jun 2026", desc: "Commercial spaces on the fast-growing MR-10 corridor — main-road frontage, dedicated parking and high footfall catchment. Ideal for investment or own business. MP-RERA Registered." },
    hi: { name: "शिवालिक बिज़नेस पार्क", type: "दुकानें, शोरूम व ऑफिस", location: "MR-10 रोड, इंदौर", sizes: "220 – 1,200 वर्ग फुट", priceFrom: "₹22 लाख से", status: "पज़ेशन जून 2026", desc: "तेज़ी से बढ़ते MR-10 कॉरिडोर पर कमर्शियल स्पेस — मेन रोड फ्रंटेज, डेडिकेटेड पार्किंग और हाई फुटफॉल। निवेश या स्वयं के व्यवसाय के लिए आदर्श। MP-RERA रजिस्टर्ड।" },
    highlights: { en: ["Main-road frontage", "High footfall", "Investment pick"], hi: ["मेन रोड फ्रंटेज", "हाई फुटफॉल", "निवेश के लिए उत्तम"] },
  },
];

export const amenities = [
  { icon: "ShieldCheck", en: { title: "Gated Township, 24×7 Security", desc: "Boundary wall, guarded entry, CCTV coverage and night patrolling — your family is always safe." }, hi: { title: "गेटेड टाउनशिप, 24×7 सुरक्षा", desc: "बाउंड्री वॉल, गार्डेड एंट्री, CCTV कवरेज और रात्रि गश्त — आपका परिवार हमेशा सुरक्षित।" } },
  { icon: "Trees", en: { title: "Landscaped Gardens", desc: "Central park, walking track and senior-citizen sit-outs surrounded by 500+ trees." }, hi: { title: "लैंडस्केप गार्डन", desc: "सेंट्रल पार्क, वॉकिंग ट्रैक और 500+ पेड़ों के बीच सीनियर-सिटीज़न बैठक क्षेत्र।" } },
  { icon: "Dumbbell", en: { title: "Clubhouse & Gym", desc: "Fully equipped gym, indoor games, community hall for functions and festivals." }, hi: { title: "क्लबहाउस व जिम", desc: "पूर्ण सुसज्जित जिम, इनडोर गेम्स, समारोह व त्योहारों के लिए कम्युनिटी हॉल।" } },
  { icon: "Baby", en: { title: "Kids' Play Area", desc: "Safe, soft-floor play zone with swings and slides — away from vehicle movement." }, hi: { title: "बच्चों का प्ले एरिया", desc: "झूलों और स्लाइड के साथ सुरक्षित सॉफ्ट-फ्लोर प्ले ज़ोन — वाहनों से दूर।" } },
  { icon: "Zap", en: { title: "Power Backup", desc: "100% backup for lifts and common areas; optional backup for homes." }, hi: { title: "पावर बैकअप", desc: "लिफ्ट व कॉमन एरिया के लिए 100% बैकअप; घरों के लिए वैकल्पिक बैकअप।" } },
  { icon: "Route", en: { title: "Wide RCC Roads", desc: "40-ft internal RCC roads with street lighting and storm-water drains." }, hi: { title: "चौड़ी RCC सड़कें", desc: "स्ट्रीट लाइट व वर्षा-जल नालियों के साथ 40 फुट चौड़ी आंतरिक RCC सड़कें।" } },
  { icon: "Droplets", en: { title: "Rainwater Harvesting", desc: "Society-wide harvesting pits and bore recharge — water security for decades." }, hi: { title: "रेनवॉटर हार्वेस्टिंग", desc: "पूरी सोसायटी में हार्वेस्टिंग पिट व बोर रिचार्ज — दशकों की जल सुरक्षा।" } },
  { icon: "KeyRound", en: { title: "Registry-Ready Titles", desc: "Clear titles, T&CP approved layouts and diversions — loan and registry without hassle." }, hi: { title: "रजिस्ट्री-रेडी टाइटल", desc: "क्लियर टाइटल, T&CP स्वीकृत लेआउट व डायवर्शन — बिना झंझट लोन और रजिस्ट्री।" } },
];

export const reviews = [
  { name: "Rajesh & Meena Solanki", area: "Shivalik Enclave, Nipania", stars: 5, en: "They promised possession in March and handed over keys in February. In Indore real estate, that alone says everything about this builder.", hi: "मार्च का पज़ेशन बोला था और फरवरी में चाबी दे दी। इंदौर के रियल एस्टेट में यही बात इस बिल्डर के बारे में सब कुछ कह देती है।" },
  { name: "Amit Khandelwal", area: "Shivalik Greens, Super Corridor", stars: 5, en: "Booked a 3 BHK after comparing 6 projects. Transparent pricing — the cost sheet they gave on day one was the final cost. No 'extra charges' surprise.", hi: "6 प्रोजेक्ट देखने के बाद 3 BHK बुक किया। पारदर्शी प्राइसिंग — पहले दिन जो कॉस्ट शीट दी वही फाइनल थी। कोई 'एक्स्ट्रा चार्ज' का झटका नहीं।" },
  { name: "Dr. Nidhi Agrawal", area: "Row House Owner", stars: 5, en: "Construction quality is genuinely good — we did a private inspection before registry and the engineer found nothing to flag. Rare.", hi: "कंस्ट्रक्शन क्वालिटी वाकई अच्छी है — रजिस्ट्री से पहले हमने निजी इंस्पेक्शन कराया और इंजीनियर को कोई कमी नहीं मिली। दुर्लभ बात।" },
  { name: "Sunil Patidar", area: "Business Park Investor", stars: 4, en: "Bought a shop as investment. Rental was committed honestly — no inflated promises. Getting steady rent from month three.", hi: "निवेश के लिए दुकान खरीदी। किराए का वादा ईमानदारी से किया — कोई बढ़ा-चढ़ा सपना नहीं। तीसरे महीने से लगातार किराया मिल रहा है।" },
  { name: "Farooq Sheikh", area: "Shivalik Greens", stars: 5, en: "Their team handled my SBI home loan file completely — I only signed. Possession, registry, naamantaran — everything on time.", hi: "SBI होम लोन की पूरी फाइल उनकी टीम ने संभाली — मैंने सिर्फ साइन किए। पज़ेशन, रजिस्ट्री, नामांतरण — सब समय पर।" },
  { name: "Kavita & Prakash Jain", area: "First-time Buyers", stars: 5, en: "As first-time buyers we were scared of builders. Site visit was no-pressure, every question got a straight answer. We felt respected.", hi: "पहली बार घर खरीदते हुए बिल्डरों से डर लगता था। साइट विज़िट बिना दबाव की थी, हर सवाल का सीधा जवाब मिला। हमें सम्मान महसूस हुआ।" },
];

export const faqs = [
  { en: { q: "Are the projects RERA registered?", a: "Yes — every Shivalik project is MP-RERA registered and T&CP approved. Registration numbers and approved layouts are shown at the site office and can be verified on the MP-RERA portal." }, hi: { q: "क्या प्रोजेक्ट RERA रजिस्टर्ड हैं?", a: "हाँ — हर शिवालिक प्रोजेक्ट MP-RERA रजिस्टर्ड और T&CP स्वीकृत है। रजिस्ट्रेशन नंबर व स्वीकृत लेआउट साइट ऑफिस पर उपलब्ध हैं और MP-RERA पोर्टल पर जाँचे जा सकते हैं।" } },
  { en: { q: "Can I get a home loan? Do you help with it?", a: "Yes — our projects are approved by leading banks and housing finance companies. Our documentation team prepares your complete loan file free of charge." }, hi: { q: "क्या होम लोन मिल सकता है? क्या आप मदद करते हैं?", a: "हाँ — हमारे प्रोजेक्ट प्रमुख बैंकों व हाउसिंग फाइनेंस कंपनियों से स्वीकृत हैं। हमारी टीम आपकी पूरी लोन फाइल निःशुल्क तैयार करती है।" } },
  { en: { q: "What about hidden charges?", a: "None. The cost sheet you receive on day one includes development charges, parking, club membership and GST. What we quote is what you pay." }, hi: { q: "छिपे हुए चार्ज का क्या?", a: "कोई नहीं। पहले दिन मिलने वाली कॉस्ट शीट में डेवलपमेंट चार्ज, पार्किंग, क्लब मेंबरशिप व GST शामिल हैं। जो बताते हैं वही देना होता है।" } },
  { en: { q: "Is there a payment plan?", a: "Yes — construction-linked plans with a booking amount from ₹51,000, plus special schemes for government employees and defence personnel." }, hi: { q: "क्या पेमेंट प्लान है?", a: "हाँ — ₹51,000 से बुकिंग राशि के साथ कंस्ट्रक्शन-लिंक्ड प्लान, और सरकारी कर्मचारियों व सैनिकों के लिए विशेष योजनाएँ।" } },
  { en: { q: "Is the site visit really free? I don't have a vehicle.", a: "Completely free — and we provide free pickup and drop from anywhere in Indore for scheduled site visits. Book your slot on WhatsApp." }, hi: { q: "क्या साइट विज़िट सच में फ्री है? मेरे पास वाहन नहीं है।", a: "पूरी तरह फ्री — और तय साइट विज़िट के लिए इंदौर में कहीं से भी फ्री पिकअप-ड्रॉप देते हैं। WhatsApp पर स्लॉट बुक करें।" } },
  { en: { q: "What happens after possession — who maintains the society?", a: "We hand over to a registered residents' welfare association with audited maintenance accounts, and support the RWA for its first full year." }, hi: { q: "पज़ेशन के बाद सोसायटी की देखरेख कौन करता है?", a: "हम ऑडिटेड मेंटेनेंस खातों के साथ रजिस्टर्ड रहवासी संघ (RWA) को हैंडओवर करते हैं, और पहले पूरे साल RWA का सहयोग करते हैं।" } },
];

export const stats = [
  { value: "8", en: "Projects Delivered", hi: "प्रोजेक्ट डिलीवर" },
  { value: "1,200+", en: "Happy Families", hi: "खुशहाल परिवार" },
  { value: "24+", en: "Years in Indore", hi: "इंदौर में वर्ष" },
  { value: "100%", en: "On-Time Possession", hi: "समय पर पज़ेशन" },
];

export const whyUs = [
  { icon: "Clock", en: { title: "On-Time Possession, Every Time", desc: "8 projects, 8 on-time handovers. Our track record is public — ask any resident." }, hi: { title: "हर बार समय पर पज़ेशन", desc: "8 प्रोजेक्ट, 8 बार समय पर हैंडओवर। हमारा रिकॉर्ड सबके सामने है — किसी भी रहवासी से पूछिए।" } },
  { icon: "IndianRupee", en: { title: "Transparent, Final Pricing", desc: "Day-one cost sheet = final cost. Development, parking, club and GST included upfront." }, hi: { title: "पारदर्शी, फाइनल प्राइसिंग", desc: "पहले दिन की कॉस्ट शीट = फाइनल कीमत। डेवलपमेंट, पार्किंग, क्लब व GST पहले से शामिल।" } },
  { icon: "HardHat", en: { title: "Engineer-Grade Construction", desc: "Branded steel & cement, third-party quality audits and a 5-year structural warranty." }, hi: { title: "इंजीनियर-ग्रेड निर्माण", desc: "ब्रांडेड सरिया व सीमेंट, थर्ड-पार्टी क्वालिटी ऑडिट और 5 साल की स्ट्रक्चरल वारंटी।" } },
  { icon: "FileCheck", en: { title: "Clear Titles & Free Loan Help", desc: "T&CP approved, RERA registered, registry-ready — with complete loan documentation done for you." }, hi: { title: "क्लियर टाइटल व फ्री लोन सहायता", desc: "T&CP स्वीकृत, RERA रजिस्टर्ड, रजिस्ट्री-रेडी — पूरी लोन फाइल की तैयारी हमारी ज़िम्मेदारी।" } },
];

export const ui = {
  en: {
    nav: { home: "Home", about: "About Us", projects: "Projects", amenities: "Amenities", gallery: "Gallery", contact: "Contact & Site Visit", book: "Book Free Site Visit" },
    hero: {
      badge: "Building Indore since 2001 · MP-RERA Registered",
      title: "Your Dream Home in Indore,",
      titleAccent: "Delivered On Time",
      sub: "Flats, row houses and commercial spaces on Super Corridor, Nipania and MR-10 — 8 projects delivered, 1,200+ happy families, zero delayed possessions. Book a free site visit with pickup & drop.",
      cta1: "Book Free Site Visit",
      cta2: "Call Now",
      open: "Bookings Open · Shivalik Greens & Business Park",
    },
    sections: {
      projectsTitle: "Our Projects",
      projectsSub: "Homes and investments across Indore's fastest-growing corridors.",
      amenitiesTitle: "Township Amenities",
      amenitiesSub: "Everything your family needs, inside the gate.",
      whyTitle: "Why Families Trust Shivalik",
      whySub: "24 years, 8 projects, one reputation — we deliver what we promise.",
      reviewsTitle: "What Owners Say",
      reviewsSub: "Real families, real possessions, real words.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Straight answers to every home-buyer's worry.",
      galleryTitle: "Project Gallery",
      gallerySub: "Actual photographs from our townships and sample homes.",
      visitTitle: "Visit Our Office",
      visitSub: "Super Corridor, Indore — or let us pick you up for a site visit.",
      ctaTitle: "A 30-minute site visit can save 30 years of regret.",
      ctaSub: "See the construction, meet the residents, verify the papers — then decide. Free pickup & drop across Indore.",
    },
    booking: {
      title: "Book a Free Site Visit",
      sub: "Fill this form — your request reaches our WhatsApp instantly. We confirm your visit (with free pickup) within 15 minutes.",
      name: "Your Name", namePh: "e.g. Rajesh Solanki",
      phone: "Mobile Number", phonePh: "e.g. 92024 20455",
      project: "Select Project", anyProject: "Not sure — suggest me",
      unitType: "Looking For", unitTypes: ["2 BHK Flat", "3 BHK Flat", "Row House", "Shop / Office"],
      date: "Preferred Visit Date", slot: "Preferred Time",
      note: "Pickup Location (optional)", notePh: "e.g. Vijay Nagar square — need pickup",
      submit: "Book Visit on WhatsApp",
      or: "or",
      call: "Call our sales office",
      success: "Opening WhatsApp… your site-visit request is ready to send!",
      morning: "Morning", evening: "Afternoon / Evening",
    },
    footer: { rights: "All rights reserved.", quick: "Quick Links", contact: "Contact", hours: "Office Hours", tagline: "Indore's on-time builder since 2001." },
    misc: { viewAll: "View All Projects", experience: "Experience", readMore: "Know More", getDirections: "Get Directions", emergency: "Sales Helpline (10 AM – 7 PM)", priceFrom: "Starting", status: "Status", sizes: "Sizes", location: "Location", rera: "MP-RERA Registered", enquire: "Enquire Now" },
    about: {
      title: "About Shivalik Buildcon",
      sub: "24 years of on-time possessions in Indore.",
      story1: "Shivalik Buildcon began in 2001 with a single plotted colony in Nipania and a rule the founder refused to break — never promise a date you cannot keep.",
      story2: "Eight projects later, that rule is still the company. Over 1,200 families live in Shivalik townships across Super Corridor, Nipania and MR-10, every one of them handed keys on or before the promised date — through market crashes, material shortages and a pandemic.",
      story3: "We are not Indore's biggest builder. We are the one whose residents bring their relatives to book the next project. That is the only marketing we have ever needed.",
      missionTitle: "Our Promise",
      mission: "Honest pricing, engineer-grade construction and possession on the promised date — for every family, every time.",
      values: [
        { title: "The Date is Sacred", desc: "Possession timelines are commitments, not marketing. 8 for 8 so far." },
        { title: "One Cost Sheet", desc: "The price on day one is the price at registry. No surprises, ever." },
        { title: "Build Like It's Ours", desc: "Branded materials, third-party audits, 5-year structural warranty." },
        { title: "After-Sales That Answers", desc: "Registry, naamantaran, loan files and a supported RWA handover." },
      ],
    },
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", projects: "प्रोजेक्ट्स", amenities: "सुविधाएँ", gallery: "गैलरी", contact: "संपर्क व साइट विज़िट", book: "फ्री साइट विज़िट बुक करें" },
    hero: {
      badge: "2001 से इंदौर का निर्माण · MP-RERA रजिस्टर्ड",
      title: "इंदौर में आपके सपनों का घर,",
      titleAccent: "समय पर डिलीवर",
      sub: "सुपर कॉरिडोर, निपानिया व MR-10 पर फ्लैट, रो हाउस और कमर्शियल स्पेस — 8 प्रोजेक्ट डिलीवर, 1,200+ खुशहाल परिवार, एक भी पज़ेशन लेट नहीं। फ्री पिकअप-ड्रॉप के साथ साइट विज़िट बुक करें।",
      cta1: "फ्री साइट विज़िट बुक करें",
      cta2: "अभी कॉल करें",
      open: "बुकिंग चालू · शिवालिक ग्रीन्स व बिज़नेस पार्क",
    },
    sections: {
      projectsTitle: "हमारे प्रोजेक्ट्स",
      projectsSub: "इंदौर के सबसे तेज़ बढ़ते इलाकों में घर और निवेश।",
      amenitiesTitle: "टाउनशिप सुविधाएँ",
      amenitiesSub: "परिवार की हर ज़रूरत, गेट के अंदर।",
      whyTitle: "परिवार शिवालिक पर भरोसा क्यों करते हैं",
      whySub: "24 साल, 8 प्रोजेक्ट, एक साख — जो कहते हैं वो करते हैं।",
      reviewsTitle: "मालिक क्या कहते हैं",
      reviewsSub: "असली परिवार, असली पज़ेशन, असली बातें।",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqSub: "हर घर-खरीदार की चिंता का सीधा जवाब।",
      galleryTitle: "प्रोजेक्ट गैलरी",
      gallerySub: "हमारी टाउनशिप व सैंपल घरों की वास्तविक तस्वीरें।",
      visitTitle: "हमारे ऑफिस आइए",
      visitSub: "सुपर कॉरिडोर, इंदौर — या साइट विज़िट के लिए हम आपको लेने आएँगे।",
      ctaTitle: "30 मिनट की साइट विज़िट 30 साल के पछतावे से बचा सकती है।",
      ctaSub: "निर्माण देखिए, रहवासियों से मिलिए, कागज़ जाँचिए — फिर फैसला कीजिए। पूरे इंदौर में फ्री पिकअप-ड्रॉप।",
    },
    booking: {
      title: "फ्री साइट विज़िट बुक करें",
      sub: "यह फॉर्म भरें — आपकी रिक्वेस्ट तुरंत हमारे WhatsApp पर पहुँचेगी। 15 मिनट में विज़िट (फ्री पिकअप सहित) कन्फर्म।",
      name: "आपका नाम", namePh: "जैसे: राजेश सोलंकी",
      phone: "मोबाइल नंबर", phonePh: "जैसे: 92024 20455",
      project: "प्रोजेक्ट चुनें", anyProject: "पक्का नहीं — सुझाव दें",
      unitType: "क्या चाहिए", unitTypes: ["2 BHK फ्लैट", "3 BHK फ्लैट", "रो हाउस", "दुकान / ऑफिस"],
      date: "विज़िट की तारीख", slot: "पसंदीदा समय",
      note: "पिकअप लोकेशन (वैकल्पिक)", notePh: "जैसे: विजय नगर चौराहा — पिकअप चाहिए",
      submit: "WhatsApp पर विज़िट बुक करें",
      or: "या",
      call: "सेल्स ऑफिस को कॉल करें",
      success: "WhatsApp खुल रहा है… आपकी साइट-विज़िट रिक्वेस्ट भेजने के लिए तैयार है!",
      morning: "सुबह", evening: "दोपहर / शाम",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।", quick: "क्विक लिंक्स", contact: "संपर्क", hours: "ऑफिस समय", tagline: "2001 से इंदौर का समय-पर-पज़ेशन बिल्डर।" },
    misc: { viewAll: "सभी प्रोजेक्ट देखें", experience: "अनुभव", readMore: "और जानें", getDirections: "रास्ता देखें", emergency: "सेल्स हेल्पलाइन (सुबह 10 – शाम 7)", priceFrom: "शुरुआती कीमत", status: "स्थिति", sizes: "साइज़", location: "लोकेशन", rera: "MP-RERA रजिस्टर्ड", enquire: "अभी पूछें" },
    about: {
      title: "शिवालिक बिल्डकॉन के बारे में",
      sub: "इंदौर में 24 साल से समय पर पज़ेशन।",
      story1: "शिवालिक बिल्डकॉन की शुरुआत 2001 में निपानिया की एक प्लॉटेड कॉलोनी से हुई — और संस्थापक के एक अटूट नियम से: वह तारीख कभी मत बताओ जो निभा न सको।",
      story2: "आठ प्रोजेक्ट बाद भी वही नियम कंपनी की पहचान है। सुपर कॉरिडोर, निपानिया व MR-10 की शिवालिक टाउनशिप में 1,200+ परिवार रहते हैं — हर एक को वादे की तारीख पर या उससे पहले चाबी मिली — बाज़ार की मंदी, सामग्री की कमी और महामारी के बावजूद।",
      story3: "हम इंदौर के सबसे बड़े बिल्डर नहीं हैं। हम वो बिल्डर हैं जिसके रहवासी अगला प्रोजेक्ट बुक कराने अपने रिश्तेदारों को लाते हैं। यही हमारी एकमात्र मार्केटिंग रही है।",
      missionTitle: "हमारा वादा",
      mission: "ईमानदार कीमत, इंजीनियर-ग्रेड निर्माण और वादे की तारीख पर पज़ेशन — हर परिवार के लिए, हर बार।",
      values: [
        { title: "तारीख पवित्र है", desc: "पज़ेशन की समय-सीमा वादा है, मार्केटिंग नहीं। अब तक 8 में से 8।" },
        { title: "एक ही कॉस्ट शीट", desc: "पहले दिन की कीमत ही रजिस्ट्री की कीमत। कभी कोई झटका नहीं।" },
        { title: "अपना घर समझकर निर्माण", desc: "ब्रांडेड सामग्री, थर्ड-पार्टी ऑडिट, 5 साल स्ट्रक्चरल वारंटी।" },
        { title: "जवाब देने वाली आफ्टर-सेल्स", desc: "रजिस्ट्री, नामांतरण, लोन फाइल और सहयोग के साथ RWA हैंडओवर।" },
      ],
    },
  },
};
