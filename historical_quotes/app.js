// local quotes data
const quotes =[

  {
    id: 0,
    name: "Albert Einstein",
    job: "Theoretical physicist",
    img:
      "./person_1.jpg",
    text_:
      "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."
  },
  
 {
    id: 1,
    name: "Benjamin Franklin",
    job: " polymath: writer, scientist, inventor, statesman, diplomat, printer, publisher and political philosopher.",
    img:
      "https://live.staticflickr.com/7449/9513188962_684a768264_b.jpg",
    text_:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn."
  },
  
   {
    id: 2,
    name: "Margaret Mead",
    job: "Cultural anthropologist",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Margaret_Mead_%281972%29.jpg",
    text_:
      "Always remember that you are absolutely unique. Just like everyone else." 
  },
  
  {
    id:3,
	name:"Carl Sagan",
	job: "Astronomer",
	img:
       	"https://upload.wikimedia.org/wikipedia/commons/7/7e/Astronomer_Carl_Sagan_in_1987.jpg",
	text_:
	  "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.",
  },
  
   {
    id: 4,
    name: "Karl Marx",
    job: " Philosopher, sociologist, and political theorist",
    img:
      "https://live.staticflickr.com/7909/32109448247_3b3d2204aa_b.jpg",
    text_:
      "History repeats itself, first as tragedy, second as farce.",
  },
  
   {
    id: 5,
    name: "Hannah Arendt",
    job: " political philosopher",
    img:
      "https://live.staticflickr.com/6115/6246088123_40a1455c7c_b.jpg",
    text_:
      "“The sad truth is that most evil is done by people who never make up their minds to be good or evil.”",
  },
  
  {
    id: 6,
    name: "William Shakespeare",
    job: "  Playwright, poet and actor",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/William-shakespeare-portrait-of-william-shakespeare-1564-1616-chromolithography-after-hombres-y-mujeres-celebres-1877-barcelona-spain-118154739-57d712c63df78c583373bb00.jpg",
    text_:
      "Don't waste your love on somebody, who doesn't value it.",
  },
  
  {
    id: 7,
    name: "Franz Kafka",
    job: " Writer ",
    img:
      "https://live.staticflickr.com/65535/49218371223_a536d410ec_b.jpg",
    text_:
      "Youth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old.",

  },
  
  {
    id: 8,
    name: "Fyodor Dostoevsky",
    job: " Writer, jornalist and philosopher",
    img:
      "https://cdn2.picryl.com/photo/1879/12/31/dostoevsky-1879-cropped-d89801-small.jpg",
    text_:
      "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",

  },
  
  {
    id: 9,
    name: "Mikhail Bakunin",
    job: " Philosopher, revolutionary anarchist, and political theorist,",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3T7Dt0wtLQATXUtdYVW_O_VofvBn3gsQpHiYgoSvSuhWc6DJctvDQDKUHxpcxO10iS4&usqp=CAU",
    text_:
     "The real school for the people and for all grown men is life. ",
  },
  
  {
    id: 10,
    name: "Clarice Lispector",
    job: "Writer ",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Clarice_Lispector_por_Maureen_Bisilliat_em_agosto_de_1969._Acervo_IMS.jpg",
    text_:
      "Everything in the world began with a yes. One molecule said yes to another molecule and life was born.",
  },
	
];

//select items

const img = document.getElementById("personImg");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text_ = document.getElementById("text_");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem= 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = quotes[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  text_.textContent = item.text_;

});

// show person based on item

function showPerson(person) {
	const item = quotes[person];
	img.src= item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	text_.textContent = item.text_;
}

//show next 

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > quotes.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = quotes.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {

  currentItem = Math.floor(Math.random() * quotes.length);
  showPerson(currentItem);
});