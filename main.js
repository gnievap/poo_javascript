class Course{
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;
    }
}
class LearningPath{
    // constructor({
    //     name,
    //     logo,
    //     especializaciones = [],
    // }){
    //     this.name = name;
    //     this.logo = logo,
    //     this.especializaciones = especializaciones;
    // }
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web", 
    courses: [
        "Curso de Programación Básica",
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
});

const escuelaData = new LearningPath({
    name: "Data Science",
    courses: [
        "Curso de Programación Básica",
        "Curso DataBusiness", 
        "Curso Dataviz"
    ],
});

const escuelaVideogames = new LearningPath({
    name: "Escuela de Videjuegos",
    courses: [
        "Curso de Programación Básica",
        "Curso de Unity",
        "Curso de Unreal Engine"
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

