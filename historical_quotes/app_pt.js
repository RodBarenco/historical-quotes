// local quotes data
const quotes =[

  {
    id: 0,
    name: "Albert Einstein",
    job: "Físico Teórico",
    img:
      "./person_1.jpg",
    text_:
      "Apenas duas coisas são infinitas, o universo e a estupidez humana, e não tenho certeza sobre a primeira."
  },
  
 {
    id: 1,
    name: "Benjamin Franklin",
    job: " polímata: escritor, cientista, inventor, estadista, diplomata, impressor, editor e filósofo político.",
    img:
      "https://live.staticflickr.com/7449/9513188962_684a768264_b.jpg",
    text_:
      "Diga-me e eu esqueço. Ensine-me e eu me lembro. Envolva-me e eu aprendo."
  },
  
   {
    id: 2,
    name: "Margaret Mead",
    job: "Antropóloga cultural",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Margaret_Mead_%281972%29.jpg",
    text_:
      "Sempre lembre que você é absolutamente único. Assim como todos os outros." 
  },
  
  {
    id:3,
	name:"Carl Sagan",
	job: "astrônomo",
	img:
       	"https://upload.wikimedia.org/wikipedia/commons/7/7e/Astronomer_Carl_Sagan_in_1987.jpg",
	text_:
	  "O nitrogênio em nosso DNA, o cálcio em nossos dentes, o ferro em nosso sangue, o carbono em nossas tortas de maçã foram feitos no interior de estrelas em colapso. Somos poeira das estrelas.",
  },
  
   {
    id: 4,
    name: "Karl Marx",
    job: " filósofo, sociólogo e teórico político",
    img:
      "https://live.staticflickr.com/7909/32109448247_3b3d2204aa_b.jpg",
    text_:
      "A história se repete, primeiro como tragédia, segundo como farsa.",
  },
  
   {
    id: 5,
    name: "Hannah Arendt",
    job: " filósofa política",
    img:
      "https://live.staticflickr.com/6115/6246088123_40a1455c7c_b.jpg",
    text_:
      "A triste verdade é que a maior parte do mal é feita por pessoas que nunca decidem ser boas ou más.",
  },
  
  {
    id: 6,
    name: "William Shakespeare",
    job: "  Dramaturgo, poeta e ator",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/William-shakespeare-portrait-of-william-shakespeare-1564-1616-chromolithography-after-hombres-y-mujeres-celebres-1877-barcelona-spain-118154739-57d712c63df78c583373bb00.jpg",
    text_:
      "Não desperdice seu amor com alguém que não o valoriza.",
  },
  
  {
    id: 7,
    name: "Franz Kafka",
    job: " Escritor",
    img:
      "https://live.staticflickr.com/65535/49218371223_a536d410ec_b.jpg",
    text_:
      "A juventude é feliz porque tem a capacidade de ver a beleza. Quem mantém a capacidade de ver a beleza nunca envelhece.",

  },
  
  {
    id: 8,
    name: "Fyodor Dostoevsky",
    job: " Escritor, jornalista e filósofo",
    img:
      "https://cdn2.picryl.com/photo/1879/12/31/dostoevsky-1879-cropped-d89801-small.jpg",
    text_:
      "Acima de tudo, não minta para si mesmo. O homem que mente para si mesmo e ouve sua própria mentira chega a um ponto em que não consegue distinguir a verdade dentro de si, ou ao seu redor, e assim perde todo o respeito por si mesmo e pelos outros. E não tendo respeito ele deixa de amar.",

  },
  
  {
    id: 9,
    name: "Mikhail Bakunin",
    job: " Filósofo, revolucionário anarquista e teorista político",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3T7Dt0wtLQATXUtdYVW_O_VofvBn3gsQpHiYgoSvSuhWc6DJctvDQDKUHxpcxO10iS4&usqp=CAU",
    text_:
     "A verdadeira escola para o povo e para todos os homens adultos é a vida. ",
  },
  
  {
    id: 10,
    name: "Clarice Lispector",
    job: "Escritora",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Clarice_Lispector_por_Maureen_Bisilliat_em_agosto_de_1969._Acervo_IMS.jpg",
    text_:
      "Tudo no mundo começou com um sim. Uma molécula disse sim a outra molécula e a vida nasceu.",
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