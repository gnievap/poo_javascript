class LearningPath{
    constructor({
        name,
        logo,
        especializaciones = [],
    }){
        this.name = name;
        this.logo = logo,
        this.especializaciones = especializaciones;
    }
}

const escuelaWeb = new LearningPath({
    name: "Desarrollo Web", 
    logo: "Logo", 
    especializaciones: [
        "FrontEnd",
        "BackEnd",
        "FullStack"
    ],
});

const escuelaData = new LearningPath({
    name: "Data Science",
    logo: "Logo",
    especializaciones: [
        "Data Analyst", 
        "Data Scientis"
    ],
});

const escuelaVideogames = new LearningPath({
    name: "Videjuegos",
    logo: "Logo",
    especializaciones: [
        "Unity",
        "Unreal Engine"
    ],
});

class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name     =   name;
        this.email    =   email;
        this.username =   username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@plati.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVideogames,
    ],
});

const miguelito = new Student({
    name: "Miguelito",
    username: "mike",
    email: "mike@plati.com",
    instagram: "happymike",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

