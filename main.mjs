function videoPlay(id){
    const urlSecreta = "https//platziultrasecreto.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https//platziultrasecreto.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
    
}


export class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}

class Course{
    constructor({
        name,
        classes = [],
    }){
        this._name = name;
        this.classes = classes;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        this._name = nuevoNombre;
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});
console.log(cursoProgBasica._name);
cursoProgBasica._name = "Cualquier cosa";
console.log(cursoProgBasica._name);

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});
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
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness", 
        "Curso Dataviz"
    ],
});

const escuelaVideogames = new LearningPath({
    name: "Escuela de Videjuegos",
    courses: [
        cursoProgBasica,
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

