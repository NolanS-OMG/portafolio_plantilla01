const navHeader = document.getElementById("navHeader");
const navProjects = document.getElementById("navProjects");
const navExperience = document.getElementById("navExperience");

const downloadButton = document.getElementById("downloadButton");
const jobTitle = document.getElementById("jobTitle");
const presentationText = document.getElementById("presentationText");

const projectsTitle = document.getElementById("projectsTitle");

const miniCV = document.getElementById("miniCV");

function changeMiniCVLanguage() {
  if( language ) {
    miniCV.innerHTML = "<li>"+
    "<h4>Experiencia profesional</h4>"+
  "</li>"+
  "<li>"+
    "<h4>Puesto de trabajo</h4>"+
    "<h5>Enero 2023 - Enero 2024</h5>"+
    "<h6>Empresa</h6>"+
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad dolor itaque quidem saepe cupiditate accusantium ut sed! Maxime cupiditate voluptatibus assumenda numquam libero itaque fuga delectus debitis placeat totam. <br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere nihil eum quos vero, quia natus harum molestiae placeat. Quia quo voluptas exercitationem iure? Hic fugiat pariatur sed consectetur! Impedit!</p>"+
    "<br>"+
  "</li>"+
  "<li>"+
    "<h4>Puesto de trabajo</h4>"+
    "<h5>June 2022 - December 2022</h5>"+
    "<h6>Empresa</h6>"+
    "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias mollitia expedita obcaecati beatae consectetur earum ratione reiciendis voluptatum, illum nostrum iure molestiae optio perspiciatis est corrupti, quas eius vero repudiandae! <br> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium adipisci corrupti fugit cupiditate, dolore quisquam ratione provident consectetur odit eveniet id similique quas alias consequuntur quasi quis enim vel voluptatem.</p>"+
  "</li>"
  } else {
    miniCV.innerHTML = "<li>"+
    "<h4>Professional Experience</h4>"+
  "</li>"+
  "<li>"+
    "<h4>Job Title</h4>"+
    "<h5>January 2023 - January 2024</h5>"+
    "<h6>Company</h6>"+
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad dolor itaque quidem saepe cupiditate accusantium ut sed! Maxime cupiditate voluptatibus assumenda numquam libero itaque fuga delectus debitis placeat totam. <br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere nihil eum quos vero, quia natus harum molestiae placeat. Quia quo voluptas exercitationem iure? Hic fugiat pariatur sed consectetur! Impedit!</p>"+
    "<br>"+
  "</li>"+
  "<li>"+
    "<h4>Job Title</h4>"+
    "<h5>June 2022 - December 2022</h5>"+
    "<h6>Company</h6>"+
    "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias mollitia expedita obcaecati beatae consectetur earum ratione reiciendis voluptatum, illum nostrum iure molestiae optio perspiciatis est corrupti, quas eius vero repudiandae! <br> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium adipisci corrupti fugit cupiditate, dolore quisquam ratione provident consectetur odit eveniet id similique quas alias consequuntur quasi quis enim vel voluptatem.</p>"+
  "</li>"
  }
}

const languageButton = document.getElementById("languageButton");
let language = true; //true = Español | false = Inglés

function setLanguage () {
  navHeader.innerText = language ? "Inicio" : "Header";
  navProjects.innerText = language ? "Proyectos" : "Proyects";
  navExperience.innerText = language ? "Experiencia" : "Experience";
  languageButton.innerText = language ? "EN" : "ES";

  downloadButton.innerText = language ? "Descargar CV" : "Download CV";
  downloadButton.href = language ? "./assets/files/CV_Física.pdf" : "./assets/files/CV_Física.pdf" ;

  jobTitle.innerText = language ? "Puesto de trabajo" : "Job position";
  presentationText.innerHTML = language ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, saepe in odit molestias adipisci quidem alias quia rerum nulla perferendis quod! Ab, fugit voluptate voluptatum quo excepturi odio suscipit ullam. <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat est totam, laboriosam exercitationem porro libero aspernatur ab cum odio culpa, dolorem quas nulla enim repellendus odit delectus, similique reiciendis cumque." : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, saepe in odit molestias adipisci quidem alias quia rerum nulla perferendis quod! Ab, fugit voluptate voluptatum quo excepturi odio suscipit ullam. <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat est totam, laboriosam exercitationem porro libero aspernatur ab cum odio culpa, dolorem quas nulla enim repellendus odit delectus, similique reiciendis cumque.";

  projectsTitle.innerText = language ? "Proyectos" : "Proyects";

  changeMiniCVLanguage();

  deleteProjectSquares();
  makeProjectSquares();
}

languageButton.addEventListener( "click", () => {
  language = !language;
  setLanguage();
} );

const cancelPopUp = document.getElementById("cancel");
cancelPopUp.addEventListener("click", removePopUp);

const blackBg = document.getElementById("blackBg");
blackBg.addEventListener("click", removePopUp);

const profilePic = document.getElementById("profilePic");
profilePic.src = "./assets/images/generic.png";
profilePic.alt = "Foto de perfil genérica";

const projectsGrid = document.getElementById('projectsGrid');

const projectsOptions = [

  { 
    titleTrue: "PROYECTO 1", 
    titleFalse: "PROYECT 1", 
    descriptionTrue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, saepe in odit molestias adipisci quidem alias quia rerum nulla perferendis quod! Ab, fugit voluptate voluptatum quo excepturi odio suscipit ullam. <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat est totam, laboriosam exercitationem porro libero aspernatur ab cum odio culpa, dolorem quas nulla enim repellendus odit delectus, similique reiciendis cumque.",
    descriptionFalse: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, saepe in odit molestias adipisci quidem alias quia rerum nulla perferendis quod! Ab, fugit voluptate voluptatum quo excepturi odio suscipit ullam. <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat est totam, laboriosam exercitationem porro libero aspernatur ab cum odio culpa, dolorem quas nulla enim repellendus odit delectus, similique reiciendis cumque.",
    url: "https://www.youtube.com/", 
    image: "./assets/images/proyecto00/proyecto00.png"
  },

  { 
    titleTrue: "PROYECTO 2", 
    titleFalse: "PROYECT 2", 
    descriptionTrue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, saepe in odit molestias adipisci quidem alias quia rerum nulla perferendis quod! Ab, fugit voluptate voluptatum quo excepturi odio suscipit ullam. <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat est totam, laboriosam exercitationem porro libero aspernatur ab cum odio culpa, dolorem quas nulla enim repellendus odit delectus, similique reiciendis cumque.",
    descriptionFalse: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, saepe in odit molestias adipisci quidem alias quia rerum nulla perferendis quod! Ab, fugit voluptate voluptatum quo excepturi odio suscipit ullam. <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat est totam, laboriosam exercitationem porro libero aspernatur ab cum odio culpa, dolorem quas nulla enim repellendus odit delectus, similique reiciendis cumque.",
    url: "https://www.youtube.com/", 
    image: "./assets/images/proyecto00/proyecto00.png"
  },

  { 
    titleTrue: "PROYECTO 3", 
    titleFalse: "PROYECT 3", 
    descriptionTrue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, saepe in odit molestias adipisci quidem alias quia rerum nulla perferendis quod! Ab, fugit voluptate voluptatum quo excepturi odio suscipit ullam. <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat est totam, laboriosam exercitationem porro libero aspernatur ab cum odio culpa, dolorem quas nulla enim repellendus odit delectus, similique reiciendis cumque.",
    descriptionFalse: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, saepe in odit molestias adipisci quidem alias quia rerum nulla perferendis quod! Ab, fugit voluptate voluptatum quo excepturi odio suscipit ullam. <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat est totam, laboriosam exercitationem porro libero aspernatur ab cum odio culpa, dolorem quas nulla enim repellendus odit delectus, similique reiciendis cumque.",
    url: "https://www.youtube.com/", 
    image: "./assets/images/proyecto00/proyecto00.png"
  }

];

function showPopUp (event) {
  const button = event.target;

  let index = Number(button.id.replace( "project", "" ));

  const popUp = document.getElementById("popUp");
  popUp.className = "pop-up";

  const infoDiv = document.createElement("div");
  infoDiv.className = "info-pop-up";
  infoDiv.innerHTML = `<h4 class='font-size-large'>${language ? projectsOptions[index].titleTrue : projectsOptions[index].titleFalse}</h4>` +
                      `<p class='font-size-small'>${language ? projectsOptions[index].descriptionTrue : projectsOptions[index].descriptionFalse}</p>` +
                      `<a class="link" href=${projectsOptions[index].url} target="_blank">${language ? "Ir a la página" : "Go to Page"}</a>`
  
  const imageDiv = document.createElement("div");
  imageDiv.className = "img-pop-up";

  const image = document.createElement('img');
  image.src = projectsOptions[index].image;
  image.alt = projectsOptions[index].titleTrue;
  image.className = "position-absolute width-100 height-100 padding-25 object-fit-cover";

  imageDiv.appendChild(image);

  popUp.appendChild(infoDiv);
  popUp.appendChild(imageDiv);

  const popUpContainer = document.getElementById("popUpContainer");
  popUpContainer.classList.remove("display-none");
  popUpContainer.classList.add("display-flex");

}

function removePopUp (event) {
  const popUpContainer = document.getElementById("popUpContainer");
  popUpContainer.classList.remove("display-flex");
  popUpContainer.classList.add("display-none");

  const popUp = document.getElementById("popUp");
  popUp.innerHTML = '<button class="cancel-pop-up" id="cancel">' +
                    '<img src="./assets/svg/icons8-cancel.svg" alt="cancel">' +
                    '</button>';
  
  const cancelPopUp = document.getElementById("cancel");
  cancelPopUp.addEventListener("click", removePopUp);

}

function makeProjectSquares() {
  for( let i=0; i<projectsOptions.length; i++ ) {
    const projectSquare = document.createElement('div');
    projectSquare.className = "project-container";
  
    const projectTitle = document.createElement('button');
    projectTitle.id = `project${i}`;
    projectTitle.innerText = language ? projectsOptions[i].titleTrue : projectsOptions[i].titleFalse;
    projectTitle.addEventListener("click", showPopUp);
  
    const projectImage = document.createElement("div");
    projectImage.className = "project-image";
  
    const image = document.createElement('img');
    image.src = projectsOptions[i].image;
    image.alt = projectsOptions[i].titleTrue;
  
    projectImage.appendChild(image);
  
    projectSquare.appendChild(projectImage);
    projectSquare.appendChild(projectTitle);
  
    projectsGrid.appendChild(projectSquare);
  }
}

function deleteProjectSquares() {
  projectsGrid.innerHTML = "";
}

let colorIndex = 0;
const changeColorButton = document.getElementById( "changeColorButton" );
function nextColor() {
  const colorLink = document.getElementById('colorStylesheet');
  let fileName = "colors0" + String(colorIndex) + ".css";
  if ( colorIndex > 9 ) {
    fileName = "colors" + String(colorIndex) + ".css";
  }
  colorLink.href = fileName;
  changeColorButton.innerText = fileName;
}

changeColorButton.addEventListener( "click", () => {
  colorIndex += 1;
  if( colorIndex >= 5 ) {
    colorIndex = 0;
  }
  nextColor();
} );

nextColor();

setLanguage();