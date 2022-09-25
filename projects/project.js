const Projects = [
    {
        name : "Clone of Dermstore.com",
        about : "Dermstore is a skin care and beauty e-commerce site in the United States. This application allows to buy beauty products. Collaborative Project along with 6 developers. Tech Stack - Java Script, Html, CSS, Bootstrap",
        img : "images/dermstore.png",
        gitrepo : "https://github.com/GautamViki/DermStore",
        tech_stack : "HTML | CSS | JAVASCRIPT | BOOTSTRAP | JQUERY",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            
        ],
        project_link : "https://gautamviki.github.io/DermStore/",
        project_type : "Team Project",
        category : ["all", "html"],
    },
    {
        name : "REST API for an Online Food Application",
        about : "We have developed this REST API for an Online Food Booking application. This API performs all the fundamental CRUD operations of any Online Food Booking platform with user validation at every step. Tech Stack - Java, SpringBoot, MySQL, Swagger UI, Spring Framework and Maven",
        img : "images/OnlineFoodPlaza.png",
        gitrepo : "https://github.com/GautamViki/OnlineFoodPlaza",
        tech_stack : "JAVA | SPRINGBOOT | MYSQL | SWAGGER UI | SPRING FRAMEWORK | MAVEN",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            
        ],
        // project_link : "https://gautamviki.github.io/DermStore/",
        project_type : "Team Project",
        category : ["all", "mern"],
    },
    {
        name : "Disney+",
        about : "Disney+ is an American subscription video on-demand over-the-top streaming service owned and operated by the Media and Entertainment Distribution division of The Walt Disney Company. At this website you can watch your favorite movies and shows.Tech Stack - Java Script, Html, CSS, Bootstrap and API",
        img : "images/Disney.png",
        gitrepo : "https://github.com/GautamViki/Hotstar",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
        project_link : "https://gautamviki.github.io/Hotstar/",
        project_type : "Indivisual Project",
        category : ["all", "html"],
    },
    {
        name : "Mini Movie App",
        about: "This is the mini Movies app application. In this application you can search your favourite movie here and see all details of the movie. Tech Stack - Java Script, Html, CSS, Bootstrap and OMDB API.",
        img : "images/MiniMovieApp.png",
        gitrepo : "https://github.com/GautamViki/OMDBMovieMiniApp",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
        project_link : "https://gautamviki.github.io/OMDBMovieMiniApp/",
        project_type : "Indivisual Project",
        category : ["all", "html"],
    },
    {
        name : "Clone of BestBuy",
        about: "Best Buy is an American multinational consumer electronics retailer headquartered in Richfield, Minnesota. You can buy all electronics products from here. Collaborative Project along with 6 developers. Tech Stack - Java Script, Html, CSS, Bootstrap.",
        img : "images/bestbuy.png",
        gitrepo : "https://github.com/AnshulKumarYadav/bestbuy",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
        project_link : "https://anshulkumaryadav.github.io/bestbuy/",
        project_type : "Team Project",
        category : ["all", "html"],

    },   
]




let projects__container = document.getElementById("projects--container")

let all_projects = document.querySelector(".all_projects")

let mern_projects = document.querySelector(".mern_projects");
// let other_projects = document.querySelector(".other_projects");
let html_projects = document.querySelector(".html_projects")
all_projects.classList.add("active_tech_project")

all_projects.addEventListener("click", () => {
    filterProjects("all");
    all_projects.classList.add("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.remove("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.remove("active_tech_project")
})
mern_projects.addEventListener("click", () => {
    filterProjects("mern");
    all_projects.classList.remove("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.add("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.remove("active_tech_project")
})

html_projects.addEventListener("click", () => {
    filterProjects("html");
    all_projects.classList.remove("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.remove("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.add("active_tech_project")
})

function filterProjects(basis) {
    let filtered = Projects.filter((el) => {
        return el.category.includes(basis)
    })
    displayProjectData(filtered)
}

function displayProjectData(Projects) {
    projects__container.innerHTML = null;
Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack}
      </div>
      
    </div>
  </div>
    `
    projects__container.append(main)

})

}

displayProjectData(Projects);


