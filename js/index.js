
const projects = {
    title: ["Pokemon-Quiz"],
    screenshots: [
        [
            "../assets/screenshots/pokemon-quiz/pokemon-quiz1.png",
            "../assets/screenshots/pokemon-quiz/pokemon-quiz2.png",
            "../assets/screenshots/pokemon-quiz/pokemon-quiz3.png",
            "../assets/screenshots/pokemon-quiz/pokemon-quiz4.png",
            "../assets/screenshots/pokemon-quiz/pokemon-quiz5.png",
        ]
    ],
    skills: [["HTML, CSS, jQuery, Dom Manipulation"]],
};

function renderProjects() {
    const projectsDiv = document.querySelector('.projects');
    const title = projectsDiv.querySelector('.project-title');
    title.innerText = projects.title;
    console.log(title.innerText);
    console.log(projects);
    console.log(title);
}

function handleAbout() {

}

function handleProjects() {
    console.log('Projects ran');
}

function handleContact() {
    console.log('Contact ran');
}

function handlePrevBtn() {
    const prevBtn = document.querySelector('.js-prev-btn');
    prevBtn.addEventListener('click', () => {
        console.log('Prev btn clicked');
    })
    console.log(prevBtn);
}

function handleNextBtn() {
    const nextBtn = document.querySelector('.js-next-btn');
    nextBtn.addEventListener('click', () => {
        console.log('Next btn clicked');
    })
    console.log(nextBtn);
}

function handleImgChange() {
    // if the previous btn is called
    // change the image to the last image in the array
    // otherwise go forward
    // if the next button is clicked
    // move to the next image in the array
    // if the image in the array goes past the length of the array
    // start over at the beginning of the images array
    // if () {

    // } else if () {

    // }
}

function main() {
    console.log('Main ran');
    renderProjects();
    handleAbout();
    handleProjects();
    handleContact();
    handlePrevBtn();
    handleNextBtn();
}

main();

