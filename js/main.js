(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


var translations = {
    english: {
        "Our roads last longer": "Our roads last longer",
        "Welcome to our website!": "Welcome to our website!",
        "Contact": "Contact",
        "AboutUsTitle": "About us",
        "AboutUs": "25+ years of experience in the construction and building of roads, their maintenance, signaling, and the construction of hydroelectric power plants.",
        "AboutDescription": "The company “EUROKOS” was established in Prishtina in year 2000, after historic and democratic changes that happened here. It started, then, in a very modest manner, with very few tools, in order to continuously grow, and to get today to the highest levels of success. Specialized for building highways, roads, bridges, side elastic shields and collective apartments, setting up and maintaining the nets of aqueduct and canalization, our company starts and finishes completely with its own tools a road, a bridge or a collective residential building.",
        "FullAboutDescription": "The company “EUROKOS” was established in Prishtina in year 2000, after historic and democratic changes that happened here. It started, then, in a very modest manner, with very few tools, in order to continuously grow, and to get today to the highest levels of success. Specialized for building highways, roads, bridges, side elastic shields and collective apartments, setting up and maintaining the nets of aqueduct and canalization, our company starts and finishes completely with its own tools a road, a bridge or a collective residential building. For this reason we own infinite piles and whole tons of broken stones of different dimensions, whereas we produce concrete and other elements as well that are needed for job performance. With the motto: “Our constructions last longer”, “EUROKOS” company creates strong basis for all its work. We start from the ground, land to continue towards the heights. Till now we have gone only forward…",
        "Vision and Mission": "Vision & Mission",
        "VisionDescription": "We know that humanity has moved forward, has developed. It possesses different flying tools. We also know that roads and bridges will forever remain a communication and a connection tool between people. We understand the importance that they have in our new country.",
        "MissionDescription": "The name of our company hides inside the dream that we have. To build European highways, roads and bridges for Kosovo, that when we become part of this large and respected family, our cars to not shake, but to move freely in a different asphalt as they would in water. This is our will, motor that pushes us to improve continuously. “EUROKOS” company sticks completely to what a famous architect stated. We, just like him, don’t want that after many years when we pass by our creations to be ashamed of them.",
        "ButtonAbout": "See More",
        "OurServices": "Our Services",
        "DescServices": "At Eurokos, we're all about connecting communities and powering progress with reliable infrastructure and renewable energy. Let's build a greener future together!",
        "FirstService": "Roads",
        "FirstDescService": "Based on our motto, we at “EUROKOS” do not build just to say so. We want and we work for our roads to be safe and sustainable, according to all predictions, expectations and deadlines. This is not easy and can not be done by anyone.",
        "SecondService": "Bridges",
        "SecondDescService": "Automotive bridges are another specialty of the “EUROKOS” company, another thing that distinguishes us. These magnificent structures, these architectural beauties, we build with an incredible pleasure and responsibility and with a goal to be perpetual and have a long-life. Till now we have build many of them, from the very basic ones for regular roads to the ones more complex i.e. highways of incredible speed.",
        "ThirdService": "Maintenance",
        "ThirdDescService": "“EUROKOS” personnel always live the future ahead of everyone else. Because we always have projects for the upcoming years, our work does not end when the inauguration ribbon is cut. We constantly stand beside our actions and respecting their deadline of sustainability, as we have declared and as it was requested in the contract. When we give our word we like to keep it.",
        "FourthService": "Hydropowers",
        "FourthDescService": "At Eurokos, we understand the importance of harnessing the potential of hydropower to meet the growing demand for energy while minimizing environmental impact. Our expertise in hydropower allows us to design, construct, and maintain hydroelectric facilities that provide reliable and efficient electricity generation.",
        "FifthService": "Signalling",
        "FifthDescService": "Combined signaling with the lighting figuratively represent assisting eyes of a road. A road with a modern signaling cannot be a dark road, cannot be a dead end road. Our company pays a special attention to these horizontal and vertical lighting elements with distinguishing colors that save a life, especially during the difficult atmospheric conditions.",
        "SixthService": "Construction",
        "SixthDescService": "We can make you with a house, a house, amidst other houses, in the joint residential objects. It is another activity, different from the one of roads and bridges but that links to them. Because all the roads lead home .Especially our roads.",
        "ProjectTitle": "Our Projects",
        "DescProject": "From building roads, highways, and bridges to erecting wind turbines and solar panels, we're shaping tomorrow's landscape with innovation and precision.",
        "Client": "Client",
        "FirstJob": "Re-establish of the road Prishtinë - Gjilan (M25.2)",
        "SecondJob": "Construction of the Bridge on the Highway Durrës - Morinë, Segment: Kukës - Kalimash",
        "ThirdJob" : "Construction of the Bridge on the highway Durrës - Morinë, Segment: Milot - Skurraj",
        "FourthJob" : "Mitrovica Region",
        "FifthJob": "Construction of hydropower plant Brod 2",
        "SixthJob": "Construction of hydropower plants Restelica 1 & 2",
        "SeventhJob": "Reconstruction of the road Skëndeaj - Prekaz",
        "EigthJob": "Reconstruction of the road Komoran - Carralev",
        "NinthJob": "Reconstruction of the road Vushtrri - Palac(R105)",
        "TenthJob": "Construction of the Highway Durrës - Morinë Segment: Kalimash - Kukës",
        "EleventhJob": "Construction of roads & platforms in wind power farm in Kitka",
        "12thJob":"Construction of the Highway Durrës - Morinë Segment: Milot - Skurraj",
        "13thJob": "Construction of the Industrial Park",
        "14thJob": "Construction of the Road Magure-Shalë-Kleçkë Phase I & II",
        "15thJob": "Extension of the Road M2:Prishtinë-Hani i Elezit,Segment:Çagllavica",
        "16thJob": "Construction of the Highway Durrës-Morinë, segment: Kukës-Kalimash ByPass Lot 2",
        "17thJob": "Construction of the Highway Durrës-Morinë, Segment: Milot-Rrëshen",
        "18thJob": "Roads asphalt in Krojmir village",
        "19thJob": "Extension of the Nacional Road M9,Segment:Sllatinë-Gjurgjicë,Lot I,Sector C",
        "20thJob": "Reconstruction of Shishtavec",
        "21thJob": "Reconstruction of road Armath - Hamallaj - Hidrovor",
        "22thJob": "Reconstruction of road Baks - Rrjoll",
        "23thJob": "Reconstruction of road Fushë Krujë - ByPass",
        "24thJob": "Construction of road West, Shkoder, ByPass",
        "25thJob": "Reconstruction of road Tropojë - Buqaj",
        "26thJob": "Reconstruction of Nacional road - Iballe, Lot 1",
        "27thJob": "Early site work for new American Embassy Compaund, Pristina, Kosovo",
        "28thJob": "Construction of road Shishtavec - Kukës, Lot 1",
        "29thJob": "Reconstruction of road Kukës - Shishtavec, Lot 2",
        "30thJob": "Construction of the poligon in the FSK-së Barracks in Ferizaj",
        "FirstClient": "World Bank",
        "SecondClient": "Ministry of Transport and Communications & Municipality of Skenderaj",
        "ThirdClient": "Ministry of Transport and Communications",
        "FourthClient": "Ministry of Transport and Communications",
        "FifthClient": "Ministry of Transport,Communications and Public Services",
        "SixthClient": "Guris, Turkey",
        "SeventhClient": "Ministry of Trade and Industry",
        "8thClient": "Lipjan Municipality",
        "9thClient": "General Road Directory",
        "10thClient": "Albanian Development Fund",
        "11thClient": "Ministry of Public Works and Transport",
        "12thClient": "American Embassy",
        "13thClient": "Ministry of FSK",
        "ConstructionPeriod": "Construction Period",
        "ContractAmount": "Contract Amount"
    },
    albanian: {
        "Our roads last longer": "Rrugët tona jetojnë gjatë",
        "Welcome to our website!": "Mirë se vini në faqen tonë të internetit!",
        "Contact": "Kontakti",
        "AboutUsTitle": "Rreth Nesh",
        "AboutUs": "25+ vite përvojë në industrinë e ndërtimit dhe konstruktimit të rrugëve, mirëmbajtjes së tyre, sinjalizimit dhe ndërtimin e hidrocentraleve.",
        "AboutDescription": "Kompania “EUROKOS” u themelua në Prishtinë, në vitin 2000, pas ndryshimeve historike dhe demokratike që ndodhën edhe te ne. Nisi, atëherë, me pak mjete e në mënyrë modeste, për t’u rritur vazhdimisht, e për të mbërritur sot majat më të larta të suksesit. E specializuar për ndërtimin e autostradave, rrugëve, urave, mburojave elastike anësore dhe banesave kolektive, për vendosjen dhe mirëmbajtjen e rrjeteve të ujësjellësve dhe kanalizimeve, kompania jonë fillon e mbaron tërësisht me mjete të veta një rrugë, një urë, ose një objekt banimi të përbashkët.",
        "FullAboutDescription": "Kompania “EUROKOS” u themelua në Prishtinë, në vitin 2000, pas ndryshimeve historike dhe demokratike që ndodhën edhe te ne. Nisi, atëherë, me pak mjete e në mënyrë modeste, për t’u rritur vazhdimisht, e për të mbërritur sot majat më të larta të suksesit. E specializuar për ndërtimin e autostradave, rrugëve, urave, mburojave elastike anësore dhe banesave kolektive, për vendosjen dhe mirëmbajtjen e rrjeteve të ujësjellësve dhe kanalizimeve, kompania jonë fillon e mbaron tërësisht me mjete të veta një rrugë, një urë, ose një objekt banimi të përbashkët. Për këtë qëllim zotërojmë grumbuj të pafund e tonelata të tëra gurësh të thërrmuar me dimensione të ndryshme, ndërsa prodhojmë edhe betonin dhe elementet tjera që na duhen për kryerjen e punëve. Me moton: “Ndërtimet tona jetojnë gjatë”, Kompania “EUROKOS” u krijon baza të forta të gjitha veprave të saj. Ne nisemi nga dheu, nga toka për të vazhduar ngjitjen drejt lartësive. Deri tash kemi ecur vetëm përpara…",
        "Vision and Mission": "Vizioni dhe misioni",
        "VisionDescription": "Ne e dimë se njerëzimi ka ecur përpara, se është zhvilluar. Se zotëron mjete të ndryshme fluturuese. Por gjithashtu e dimë se rrugët dhe urat do të mbeten përgjithmonë mjet komunikimi e lidhjeje mes njerëzve. E kuptojmë rëndësinë që kanë ato edhe për shtetin tonë të ri.",
        "MissionDescription": "Emri i kompanisë sonë fsheh brenda vetes ëndrrën që kemi. Të ndërtojmë autostrada, rrugë e ura evropiane për Kosovën. Që kur të bëhemi pjesë e kësaj familjeje të madhe e të nderuar, veturat tona të mos dridhen, por të lëvizin lirshëm nëpër asfalte të ndryshme si nëpër ujë. Ky është vullneti ynë, motori që na shtyn të përmirësohemi vazhdimisht. Kompania “EUROKOS” i përmbahet tërësisht asaj që tha një arkitekt i njohur. Ne, ashtu si ai, nuk dëshirojmë që pas shumë vjetësh kur të kalojmë pranë veprave tona, të na vijë turp prej tyre.",
        "ButtonAbout": "Shiko më shumë",
        "Our Services": "Serviset tona",
        "DescServices": "Në Eurokos, jemi të angazhuar për të lidhur komunitetet dhe për të fuqizuar përparimin me infrastrukturë të besueshme dhe energji të rinovueshme. Të ndërtojmë së bashku një të ardhme më të gjelbër!",
        "FirstService": "Rrugët",
        "FirstDescService": "Duke u bazuar në moton që kemi, ne nga “EUROKOS”-i, nuk ndërtojmë rrugë vetëm sa për të thënë. Dëshirojmë dhe punojmë që rrugët tona të jenë të sigurta e të qëndrueshme, sipas të gjitha parashikimeve, pritjeve dhe kërkesave të kohës.",
        "SecondService": "Urat",
        "SecondDescService": "Urat automobilistike janë një tjetër specialitet i Kompanisë “EUROKOS”, një tjetër gjë që na dallon e na veçon. Këto struktura madhështore, këto bukuroshe arkitektonike, i ndërtojmë me kënaqësi dhe përgjegjësi të lartë. Me qëllim që të jenë të përjetshme e pa afat. Deri tash kemi ndërtuar shumë prej tyre. Nga të thjeshtat e për rrugë të zakonshme, deri te të ndërlikuarat për superstrada të shpejtësive të mëdha.",
        "ThirdService": "Mirëmbajtjen",
        "ThirdDescService": "Personeli i “EUROKOS”-it gjithmonë jeton në të ardhmen e përpara të tjerëve. Sepse gjithmonë kemi plane e projekte për vitet që vijnë. Puna jonë nuk përfundon ditën kur pritet shiriti përurues. Ne qëndrojmë vazhdimisht me e pranë veprave tona duke respektuar afatin e tyre të qëndrueshmërisë.",
        "FourthService": "Hidrocentralet",
        "FourthDescService": "Në Eurokos, ne e kuptojmë rëndësinë e përdorimit të potencialit të hidroenergisë për të përmbushur kërkesën e rritur për energji ndërsa minimizojmë ndikimin në mjedis. Ekspertiza jonë në hidroenergi na lejon të projektuam, ndërtojmë dhe mirëmbajmë objekte hidroelektrike që ofrojnë gjenerim të besueshëm dhe efikas të energjisë elektrike.",
        "FifthService": "Sinjalizimi",
        "FifthDescService": "Sinjalizimi i kombinuar me ndriçimin përfaqësojnë figurativisht sytë ndihmës të një rruge. Një rrugë me sinjalizim modern nuk mund të jetë rrugë e errët, nuk mund të jetë rrugë qorre. Kompania jonë u kushton rëndësi të veçantë këtyre elementeve ndriçuese horizontale e vertikale me ngjyra të dallueshme që shpëtojnë jetë, sidomos gjatë kushteve të rënduara atmosferike.",
        "SixthService": "Ndërtimtari",
        "SixthDescService": "Ne ju bëjmë edhe me shtëpi. Me shtëpi, mes shumë shtëpive, nëpër objektet e përbashkëta të banimit. Është një veprimtari tjetër, e ndryshme nga ajo e rrugëve dhe urave, por që lidhet me to. Sepse të gjitha rrugët të çojnë në shtëpi. E sidomos rrugët tona.",
        "ProjectTitle": "Projektet tona",
        "Client": "Klienti",
        "DescProject": "Nga ndërtimi i rrugëve, autostradave dhe urave deri te ngritja e turbinave me erë dhe paneleve diellore, ne po e formojmë peizazhin e së nesërmes me risi dhe saktësi.",
        "FirstJob": "Rehabilitimi i rrugës magjistrale Prishtinë - Gjilan",
        "SecondJob": "Ndërtimi i Urës në autostradën Durrës-Morinë, segmenti Kukës-Kalimash",
        "ThirdJob": "Ndërtimi i Urës në autostradën Durrës - Morinë , segmenti Milot - Skurraj",
        "FourthJob": "Regjioni i Mitrovicës Lot II",
        "FifthJob" : "Ndërtimi i Hodrocentralit Brod 2",
        "SixthJob": "Ndërtimi i hidrocentraleve Restelica 1 & 2",
        "SeventhJob": "Rikonstruktimi i rrugës Skënderaj - Prekaz",
        "EigthJob": "Rikonstruktimi i rrugës Komoran - Carralev",
        "NinthJob": "Rikonstruktimi i rrugës Regjionale Vushtrri - Palac(R105)",
        "TenthJob": "Ndërtimi i autostradës Durrës - Morinë Segment: Kalimash - Kukës",
        "EleventhJob": "Ndërtimi i rrugëve & platformave në parkun energjetik me erë në Kitkë",
        "12thJob": "Ndërtimi i autostradës Durrës - Morinë Segmenti: Milot - Skurraj",
        "13thJob": "Ndërtimi i parkut Industrial",
        "14thJob": "Ndërtimi dhe Asfaltimi i rrugës Magure-Shalë-Kleçkë Faza I & II",
        "15thJob": "Zgjerimi i Rrugës Magjistrale M2:Prishtinë-Hani i Elezit Segmenti:Çagllavicë",
        "16thJob": "Ndërtimi i Autostradës Durrës-Morinë, segmenti: Kukës-Kalimash ByPass Lot 2",
        "17thJob": "Ndërtimi i Autostradës Durrës-Morinë, Segmenti Milot-Rrëshen (Aneks Kontrata)",
        "18thJob": "Asfaltimi i rrugëve në fshatin Krojmir",
        "19thJob": "Zgjerimi i Rrugës Nacionale M9,Segmenti:Sllatinë-Gjurgjicë,Lot I,Sektori C",
        "20thJob": "Rikonstruktimi dhe asfaltimi i rrugës Shishtavec",
        "21thJob": "Rikonstruktimi i rrugës Armath - Hamallaj - Hidrovor",
        "22thJob": "Rikonstruktimi i rrugës Baks - Arjoll",
        "23thJob": "Rikonstruktimi i rrugës Fushë Krujë - Bypass",
        "24thJob": "Ndgërtimi i rrugës Perëndimore Shkodër, ByPass",
        "25thJob": "Rikonstruktimi i rrugës Tropojë - Buqaj",
        "26thJob": "Rikonstruimi i rrugës Nacionale - Iballe, Lot 1",
        "27thJob": "Punë të hershme për Ambasadën Amerikane, Prishtinë, Kosovë",
        "28thJob": "Ndërtimi i rrugës Shishtavec - Kukës, Lot 1",
        "29thJob": "Rikonstruksioni i rrugës Kukës - Shishtavec, Lot 2",
        "30thJob": "Ndërtimi i poligonit të reagimit në Kazermën e FSK-së në Ferizaj",
        "FirstClient": "Banka Botërore",
        "SecondClient": "Ministria e Transportit dhe Postë Telekomunikacionit & Kuvendi Komunal Skenderaj",
        "ThirdClient": "Ministria e Transportit dhe Postë Telekomunikacionit",
        "FourthClient": "Ministria e Transporitit dhe Postë Telekomunikacionit",
        "FifthClient": "Ministria e Punëve Publike Transportit dhe Telekomunikacionit",
        "SixthClient": "Guris, Turkey",
        "SeventhClient": "Ministria e Tregtisë dhe Industrisë",
        "8thClient": "Komuna Lipjan",
        "9thClient": "Drejtoria e Përgjithshme e Rrugëve",
        "10thClient": "Fondi Shqiptar i Zhvillimit",
        "11thClient": "Ministria e Punëve Publike dhe Transportit",
        "12thClient": "Ambasada Amerikane",
        "13thClient": "Ministria e FSK",
        "ConstructionPeriod": "Periudha e ndërtimit",
        "ContractAmount": "Vlera e kontratës"
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Get the select element
    var languageSelect = document.getElementById("languageSelect");

    // Add event listener to detect changes in selection
    languageSelect.addEventListener("change", function() {
        // Get the selected language
        var selectedLanguage = languageSelect.value;

        // Get all elements with the class "translate"
        var elementsToTranslate = document.querySelectorAll(".translate");

        // Loop through each element and translate its text
        elementsToTranslate.forEach(function(element) {
            // Get the original text
            var originalText = element.getAttribute("data-original-text");

            // Get the translated text based on the selected language
            var translatedText = getTranslation(originalText, selectedLanguage);

            // Update the element's text with the translated text
            element.textContent = translatedText;
        });
    });
});

// Function to get translation based on language
function getTranslation(text, language) {
    // Check if the translation exists for the given language
    if (translations[language] && translations[language][text]) {
        return translations[language][text];
    } else {
        // If translation doesn't exist, return the original text
        return text;
    }
}

// document.addEventListener("DOMContentLoaded", function() {
//     // Get all elements with the class "translate"
//     var elementsToLimit = document.querySelectorAll(".translate");

//     // Loop through each element and limit its text to 140 words
//     elementsToLimit.forEach(function(element) {
//         var text = element.textContent;
//         var words = text.split(" ");
//         if (words.length > 90) {
//             var limitedText = words.slice(0, 90).join(" ");
//             element.textContent = limitedText + " ...";
//         }
//     });
// });



