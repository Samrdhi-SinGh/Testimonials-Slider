const Array = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60',
    name: 'Rajshree',
    job: 'Prompt Engineer',
    review: 'Working with AI models requires precision and clarity. Crafting the right prompts has completely transformed how we generate solutions and automate complex workflows.'
  },

  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=6',
    name: 'Srija Singh',
    job: 'Designer',
    review: 'Design is not just what it looks like, it is how it works. Creating intuitive and visually appealing interfaces has helped elevate user engagement significantly.'
  },

  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
    name: 'Ranvir Kapadiya',
    job: 'Writer',
    review: 'Words have the power to connect, inspire, and engage audiences. Crafting compelling narratives ensures that every brand story resonates deeply with the readers.'
  }
];

let currentindex = 0;

const imageElement = document.querySelector('#image');

const nameElement = document.querySelector('#name');

const jobElement = document.querySelector('#job');

const reviewElement = document.querySelector('#review');


const Review = function () {

  imageElement.src = Array[currentindex].img;
  console.log(Array[currentindex].img);

  nameElement.innerText = Array[currentindex].name;
  // console.log(Array[currentindex].name);

  jobElement.innerText = Array[currentindex].job;
  // console.log(Array[currentindex].job);

  reviewElement.innerText = Array[currentindex].review;
  // console.log(Array[currentindex].review);

}

Review();

const nextButton = function () {

  currentindex++;

  if(currentindex > Array.length - 1)
    currentindex = 0;


  Review();

}

const randomButton = function () {

  const randomIndex = Math.floor(Math.random() * Array.length);
  currentindex = randomIndex;

  // console.log(currentindex);

  Review();

}

function previousButton() {

  currentindex--;

  if (currentindex < 0)
    currentindex = Array.length - 1;
  console.log(currentindex);

  Review();

}


