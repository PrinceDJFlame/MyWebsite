// Holidays data
// Hobbies data
const hobbies = [
    {
        title: "Clash Royale",
        description: "Clash Royale is a real-time strategy game that combines elements of card games, tower defense, and multiplayer online battle arena..."
    },
    {
        title: "Warhammer 40K",
        description: "Warhammer 40,000 is a tabletop miniature wargame where players assemble and paint miniatures to battle against each other..."
    },
    {
        title: "Fortnite",
        description: "Fortnite is a battle royale game where players fight to be the last one standing on a shrinking map..."
    },
    {
        title: "Civilization VI",
        description: "Civilization VI is a turn-based strategy game where you build an empire to stand the test of time..."
    },
    {
        title: "Coding",
        description: "I started coding on iPad playgrounds and 'Scratch' at school. I now use mainly HTML, CSS and JS but have also tried writing chatbots on dialogue flow and databases with firebase. Recently I have been working on some AI automatic recognition tools. I want to learn Python next."
    },
    {
        title: "Tennis",
        description: "I've been playing tennis for about 5 years now. I have matchplay every Friday and then training and coaching on a Saturday. I also play for my school. See the tennis section of this site for more about tennis."
    }
];

const holidays = [
    {
        title: "Killin, Scotland",
        description: "My First Holiday was to Killin, Scotland. This holiday was full of sickness, stream building, excitement, and so much more..."
    },
    {
        title: "Cayton Bay, England",
        description: "My second holiday was to a static caravan park in Cayton Bay, England. We made many memories here when we went to the beach, went to an indoor pool, went to a steam railway, went into Scarborough and so much more. Overall this was an amazing holiday with beautiful weather."
    },
    {
        title: "Robin Hoods Bay",
        description: "My third holiday was to Robin Hood's bay. I ended up playing in the heat a lot, getting splashed by water, went to whitby abbey (where Dracula, in legends, lived), fell in love with fish and chips, picked up a crab, went to an aquarium got my first 2 fossils (a trilobite and a raptor tooth and a chipped piece of the raptors pelvis) and so much more."
    },
    {
        title: "Legoland",
        description: "My fourth holiday was an amazing one when we went on a road trip down south (biggest part being Legoland). On this holiday we enjoyed a few rides, and the mini lego city, went to weymouth where we heard about a seal, pirate stories and a pirate cove, went to Stonehenge where we saw the stone circle and met our great aunt. We then travelled down to Bristol where we saw the SS Great Britain and heard about it's story."
    },
    {
        title: "Crete",
        description: "My fifth holiday was to Crete, Greece. This was the first time we'd been on a plane together. We went on many trips. We went to the Cave of Zeus, Spinalonga, ancient Minoan civilization (ruins) of knossos which even has the first paved road ever built, a sea fort, lots of pool swimming, lots of nice food, day at Star beach, a rescue aquarium, many cafes, swam in the mediteranean sea for the first time, had tortoises right by our room and heard the very noisy Chicadas. Definitley one of my favourites."
    },
    {
        title: "Barcelona",
        description: "My sixth holiday was to Badalona/Barcelona, Spain, where we stayed at Hotel Marina. We made so many memories here. We went into a local supermarket and sampled many new foods, enjoyed walks on the beach by our hotel, quick transport on trains and trams, I tried Toblerone for the first time, saw the Sagrada Familia and a lot more. This was another of my favourite trips."
    },
    {
        title: "Malton",
        description: "seventh holiday was one of the best (Malton, Yorkshire, England). This is the exact place I stayed in and it was right in the centre of everywhere we went. Our first day was spent just settling in, going to the town centre of malton to a restaurant called Pizza on the Square (the pizza tasted amazing). On Tuesday, we went to Whitby. Here we went Crabbing for the first time where I caught 1 monster crab, 2 medium crabs and 2 baby crabs. We went to a very nice flapjack shop, rock shop and even went up to Whitby Abbey (which is where Dracula aledgedly lived), and to end the day we had Pot Noodle's and a few bits of meat pastry items. On Wednesday, we went to Castle Howard (which had a huge fire in the early 1900's). There was a nice farmshop where we got a nice lunch, we went to a nice Chinese restaurant where I had the most amazing Lemon Chicken and spicy, salt and pepper squid (exquisite). Later in the week we went to the Birds of Prey centre where we watched 2 bird shows and my favourite bird was either a Griffon vulture or a Red Kite. To end the day, we ate a buffet. On Saturday, we went to Scarbourough where I caught a monster crab, ate a nice fish and chips, ice cream, and churros. We went to a fudge shop and ended the day with some sausage, bacon and egg. On Sunday, we played with the dog in the orchard, big garden area and kid's garden"
    }
];



// Variables for the first slideshow
let slideIndex = 0;
showSlides(slideIndex); // Show the first slide

function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    const descriptions = document.getElementById("hobby-description");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";

    descriptions.innerHTML = `<h2>${hobbies[slideIndex].title}</h2><p>${hobbies[slideIndex].description}</p>`; // Update the text
}

function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Variables for the second slideshow
let slideIndex2 = 0;
showSlides2(slideIndex2); // Show the first slide

function showSlides2(n) {
    const slides2 = document.getElementsByClassName("slides2");
    const descriptions2 = document.getElementById("holiday-description");

    if (n >= slides2.length) { slideIndex2 = 0; }
    if (n < 0) { slideIndex2 = slides2.length - 1; }
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none"; // Hide all slides
    }
    slides2[slideIndex2].style.display = "block"; //Show the current slide

    descriptions2.innerHTML = `<h2>${holidays[slideIndex2].title}</h2><p>${holidays[slideIndex2].description}</p>`; // Update the text
}

function changeSlide2(n) {
    slideIndex2 += n;
    showSlides2(slideIndex2);
}

/*This is the code for the navbar hamburger*/
const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#navbar");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");

hamburgerToggle.addEventListener("click", onHamburgerClick);

function onHamburgerClick() {
    // Toggle the open class on the navbar
    navbar.classList.toggle("open");

    // Toggle visibility of the icons
    if (navbar.classList.contains("open")) {
        iconOpen.style.display = "none"; // Hide hamburger icon
        iconClose.style.display = "block"; // Show close icon
    } else {
        iconOpen.style.display = "block"; // Show hamburger icon
        iconClose.style.display = "none"; // Hide close icon
    }
}
