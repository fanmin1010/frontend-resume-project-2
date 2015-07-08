

/*** bio json object ***/

var bio = {
    "name" : "Min Fan",
    "role" : "Front-end Web Developer",
    "contacts" : {
        "mobile" : "917-855-0258",
        "email" : "fanmin1010@hotmail.com",
        "github" : "fanmin1010",
        "twitter" : "@fanmin1010",
        "location" : "New York City"
    },
    "welcomeMessage" : "Welcome to my resume page; interested in more info? contact me!",
    "skills" : [ "HTML/CSS & JavaScript",
        "C++ and Java programming",
        "Data Structures",
        "Organic Chemistry" ],
    "biopic" : "images/min.jpg",
    "display" : bioDisplay
}
// implementation of bioDisplay function
function bioDisplay(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var fromattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(fromattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"].mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio["contacts"].email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"].twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio["contacts"].github);
    var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"].location);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter); 
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter); 
    $("#footerContacts").append(formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedPic);
    $("#header").append(formattedMsg);
    $("#header").append(HTMLskillsStart);
    for(var item in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
        $("#skills").append(formattedSkill);
    }
}
// call bio display function
bio.display();

/*** education json object ***/

var education = {
    "schools" : [{
        "name" : "Central South University",
        "location" : "Changsha, Hunan Province China",
        "degree" : "Bachelor of Science",
        "major" : "Applied Chemistry",
        "years" : 2010,
        "url" : "http://iecd.csu.edu.cn/en-US/Default.aspx"
    },{
        "name" : "New York University",
        "location" : "New York, NY",
        "degree" : "Ph.D candidate",
        "major" : "Chemistry",
        "years" : 2016,
        "url" : "http://www.nyu.edu"
    }],
    "onlineCourses" : [{
        "title" : "C++ Certificate for Financial Engineering",
        "school" : "Baruch College, CUNY",
        "date" : 2014,
        "url" : "http://mfe.baruch.cuny.edu/online-programming/"
    },{
        "title" : "Front-end Nanodegree",
        "school" : "Udacity",
        "date" : 2015,
        "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display" : educationDisplay
}
// implementation of educationdisplay function
function educationDisplay() {
    for(var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var currentSchool = education.schools[school];
        var schoolName = HTMLschoolName.replace("%data%", currentSchool.name);
        schoolName = schoolName.replace("#", currentSchool.url);
        var schoolDegree = HTMLschoolDegree.replace("%data%", currentSchool.degree);
        var schoolDates = HTMLschoolDates.replace("%data%", currentSchool.years);
        var schoolLocation = HTMLschoolLocation.replace("%data%", currentSchool.location);
        var schoolMajor = HTMLschoolMajor.replace("%data%", currentSchool.major);
        $(".education-entry:last").append(schoolName);
        $(".education-entry:last").append(schoolDegree);
        $(".education-entry:last").append(schoolDates);
        $(".education-entry:last").append(schoolLocation);
        $(".education-entry:last").append(schoolMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for(var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var current = education.onlineCourses[course];
        var title = HTMLonlineTitle.replace("%data%", current.title);
        var school = HTMLonlineSchool.replace("%data%", current.school);
        var dates = HTMLonlineDates.replace("%data%", current.date);
        var url = HTMLonlineURL.replace("%data%", current.url);
        $(".education-entry:last").append(title + school);
        $(".education-entry:last").append(dates);
        $(".education-entry:last").append(url);
    }
}
// call education display function
education.display();

/*** work json object ***/

var work = {
    "jobs" : [{
        "employer" : "New York University",
        "title" : "Research Assistant",
        "location" : "New York, NY",
        "dates" : "2010 - 2015",
        "description" : "Research assistant in a Chemistry lab and teaching assistant for Organic Chemistry and General Chemistry."
    },{
        "employer" : "Maruzen Co. Ltd",
        "title" : "Sales Representative",
        "location" : "Dallas, TX",
        "dates" : "2013 - 2014",
        "description" : "Salesperson at ACS meeting, responsible for selling chemistry models, organizing promotional events and presenting specialty of merchandise to potential clients."
    }],
    "display" : workDisplay
}
// implementation of workDisplay function
function workDisplay(){
    for(var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var current = work.jobs[job];
        var employer = HTMLworkEmployer.replace("%data%", current.employer);
        var title =  HTMLworkTitle.replace("%data%", current.title);
        var date = HTMLworkDates.replace("%data%", current.dates);
        var location = HTMLworkLocation.replace("%data%", current.location);
        var description = HTMLworkDescription.replace("%data%", current.description);
        $(".work-entry:last").append(employer + title);
        $(".work-entry:last").append(date);
        $(".work-entry:last").append(location);
        $(".work-entry:last").append(description);
    }   
}
// call the display function in work object
work.display();

/*** portofolio object containing the information of projects ***/

var portofolio = {
    "projects" : [{
        "title" : "Operating System Simulation",
        "dates" : "2015.1 - 2015.5",
        "description" : "A C++ program mimicing the operationg of a modern operating system, which deals with command line interpretation, memory management with paging system, short-term & long-term cpu scheduling, and disk management.",
        "images" : ["images/os1-sized.jpg", "images/os2-sized.jpg"]
    },{
        "title" : "Clean Energy Discovery",
        "dates" : "2014.1 - 2015.3",
        "description" : "The project aims to find a replace of the current fossil fuel energy supply. To reduce air pollution and slow down global warming, it is urgent to find a clean energy resource, like wind energy, solar energy, nuclear energy, e.t.c.",
        "images" : ["images/energy1-sized.jpg", "images/energy2-sized.jpg"]
    }],
    "display" : portofolioDisplay
}

//implementation of the display function
function portofolioDisplay(){
    for(var project in portofolio.projects){
        $("#projects").append(HTMLprojectStart);
        var current = portofolio.projects[project];
        var title = HTMLprojectTitle.replace("%data%", current.title);
        var dates = HTMLprojectDates.replace("%data%", current.dates);
        var description = HTMLprojectTitle.replace("%data%", current.description);
        $(".project-entry:last").append(title);
        $(".project-entry:last").append(dates);
        $(".project-entry:last").append(description);
        if(current.images.length>0){
            for(var image in current.images){
                var imageURL = HTMLprojectImage.replace("%data%", current.images[image]);
                $(".project-entry:last").append(imageURL);
            }
        }
    }
}
// call the display function in portofolio object
portofolio.display();

// append the internationalization button to the page
$("#main").append(internationalizeButton);
var button = $("#main").children("button");
button.css({
    "margin" : "5px 10px",
    "float" : "right",
});
// function inName for clicking internatiolize button
function inName(inputName) {
    var resultName;
    var nameArray = inputName.split(" ");
    resultName = nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLowerCase();
    resultName = resultName + " " + nameArray[1].toUpperCase();
    return resultName;
}

// add google map api to the page
  $("#map-div").append(googleMap);

