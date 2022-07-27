const Projects = [

    {
        name : "Clone of BobbiBrown.com",
        about : "BobbiBrown providing branded cosmetics products online, makeup kit online. In this project, I was leading my team and majorly worked on Home page, Product page, Signin functionality, Cart page, Wishlist and Payment page.",
        img : "https://miro.medium.com/max/1050/1*jdopOSsDRiGDWu9M3GviCQ.png",
        gitrepo : "https://github.com/AnshulKumarYadav/bobbibrown",
        tech_stack : "HTML | CSS | JAVASCRIPT",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            
        ],
        project_link : "https://anshulkumaryadav.github.io/BobbiBrown/",
        project_type : "Team Project",
        category : ["all", "html"],

    },
   
    {
        name : "Clone of YouTube",
        about: "A frontend clone of YouTube, where in the home page user will find popular videos of YouTube and also can search for the desired videos it will show all the videos related to search on the result page.",
        img : "https://miro.medium.com/max/700/1*nhm4FnPWW69oTAEPT02umQ.png",
        gitrepo : "https://github.com/AnshulKumarYadav/youtube",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
        project_link : "https://anshulkumaryadav.github.io/youtube/",
        project_type : "Indivisual Project",
        category : ["all", "html"],

    },
    {
        name : "FoodyShop",
        about : "A reciepe searching app where we can search any dish and get all ingrediant details and process of making",
        img : "../images/foodyshop.png",
        gitrepo : "https://github.com/AnshulKumarYadav/foodyShop",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
        project_link : "https://anshulkumaryadav.github.io/foodyShop/",
        project_type : "Indivisual Project",
        category : ["all", "html"],

    },
    {
        name : "Wheather app",
        about : "Nykaa is a beauty retail companythat sells cosmetic commodities online. In this project, I was leading my team and majorly worked on Home page, Product page, Signin functionality, Cart and Wishlist page.",
        img : "../images/wheather.png",
        gitrepo : "https://github.com/AnshulKumarYadav/weatherApp",
        video : "",
        tech_stack : " HTML | CSS | JavaScript |",
        tech_stackicons : [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,

        ],
        project_link : "https://anshulkumaryadav.github.io/weatherApp/",
        project_type : "Indivisual Project",
        category : ["all", "html", "other"]
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
// other_projects.addEventListener("click", () => {
//     filterProjects("other");
//     all_projects.classList.remove("active_tech_project")
//     react_projects.classList.remove("active_tech_project")
//     mern_projects.classList.remove("active_tech_project")
//     // other_projects.classList.add("active_tech_project")
//     html_projects.classList.remove("active_tech_project")
// })
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
Projects.reverse().forEach(pro => {
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


