//TDD 
// Make objects for each image - name, image, clicks - seen? (check)
// constructor function ^^ (check)
// create count variable (check)
// counting guesses ONLY allowing a certain number and then you can't guess any more
// render two images - must be two different images
// - renders
// - pick goats
// you can click - listener
// when you click it counts AND renders new images
// stretch goal - make sure images don't repeat each round 
// wipe out data of results to start over - render the results
// Get global variables

// Global Variables

// added constructor variables here
const results = document.getElementById('goat-clicks')
const bothGoats = document.getElementById('all_goats')
const rightGoatImg = document.getElementById('right_goat_img')
const leftGoatImg = document.getElementById('left_goat_img')
const rightGoatPElem = document.getElementById('right_goat_p')
const rleftGoatPElem = document.getElementById('left_goat_p')

let totalClicks = 0;

let leftGoat = null;
let rightGoat = null;

// added in constructor function here in order to create how images pop up
const GoatPictures = function(name, imagePath) {
    this.name = name,
    this.imagePath = imagePath,
    this.clicks = 0,
    this.timeShown = 0,


GoatPictures.allImages.push(this);
}
// added property to goatPictures that is an array
GoatPictures.allImages = [];

const renderGoats = function() {
    // using the right and left global variables for the image and p tag in order to stick pictures to page
    leftGoatImg.src = leftGoat.imagePath;
    rightGoatImg.src = rightGoat.imagePath;
    rightGoatPElem.textContent = rightGoat.name
}

// write a function that picks two different goats

function goatPicker() {
    const leftIndex = Math.floor(Math.random() * GoatPictures.allImages.length)
    console.log(GoatPictures.allImages)
    console.log(leftIndex)
    let rightIndex = Math.floor(Math.random() * GoatPictures.allImages.length)
    console.log(rightIndex)

    while(rightIndex === leftIndex) {
        rightIndex = Math.floor(Math.random() * GoatPictures.allImages.length)
        console.log(rightIndex)
    }

    leftGoat = GoatPictures.allImages[leftIndex];
    rightGoat = GoatPictures.allImages[rightIndex];
}

// display vote count
    function displayVoteCount() {
        results.innerHTML = '';
        let h2Elem = document.createElement('h2')
        h2Elem.textContent = 'Goat Likes'
        results.appendChild(h2Elem);
        for(let goat of GoatPictures.allImages) {
            const liElem = document.createElement('li');
            console.log('goat', goat)
            liElem.textContent = '${goat.name}: ${goat.clicks}'
            results.appendChild(liElem)
        }
    }


function handleClick(event) {
    console.log(event.target);
    const clickTarget = event.target;
    const id = clickTarget.id;

    // / we need a way to compare the left goat and right goat to what we clicked on to mae sure we count the vote
    // if they vote 10 times or less do this

    if(totalClicks < 10) {
        if(id === 'left_goat_img' || id === 'right_goat_img' ) {
            // increment votes total/ increment particular votes we clicked on
            if (id === 'left_goat_img') {
                leftGoat.clicks++;
             } else {
                 rightGoat.clicks++;
             }
             totalClicks++;
             leftGoat.timeShown++;
             rightGoat.timeShown++;
             goatPicker();
             renderGoats();
            }
        }
    }
    if(totalClicks == 10) {
        bothGoats.removeEventListener('click', handleClick);
        displayVoteCount();
    }

new GoatPictures('Bunny Goat', 'assets/bunny-goat.png');
new GoatPictures('Cool Goat', 'assets/cool-goat.jpeg');
new GoatPictures('Cruisin Goat', 'assets/cruisin-goat.jpeg');
new GoatPictures('Float Your Goat', 'assets/float-your-goat.jpeg');
new GoatPictures('Goat Away', 'assets/goat-away.jpeg');
new GoatPictures('Goat Out of Hand', 'assets/goat-out-of-hand.jpeg');
new GoatPictures('Kissing Goat', 'assets/kissing-goat.jpeg');
new GoatPictures('Lucky Goat', 'assets/lucky-goat.jpeg');
new GoatPictures('Sassy Goat', 'assets/sassy-goat.jpeg');
new GoatPictures('Smiling Goat', 'assets/smiling-goat.jpeg');
new GoatPictures('Sweater Goat', 'assets/sweater-goat.jpeg');

bothGoats.addEventListener('click', handleClick);

goatPicker();
// console.log('left goat' , leftGoat);
// console.log('right goat' , rightGoat);

renderGoats();