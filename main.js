class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);

    }
}

function videoPlay(id){
    const urlSecreta = "https//platziultrasecreto.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https//platziultrasecreto.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
    
}


class PlatziClass{
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
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree,
        this.lang = lang
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
    isFree: true
});


const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
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

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });

        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if ( newCourse.isFree ){
            this.approvedCourses.push(newCourse);
        }
        else{
            console.warn("Lo sentimos, " + this.name + ", sólo puedes tomar cursos gratuitos");
        }
    }

}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    } 

    approveCourse(newCourse){
        if ( newCourse.lang !== "english" ){
            this.approvedCourses.push(newCourse);
        }
        else{
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
            this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
            this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profesor",
        });

        comment.publicar();
    }
}


const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@plati.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVideogames,
    ],
});

const freddy = new TeacherStudent({
    name: "Fredy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddie",
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "mike",
    email: "mike@plati.com",
    instagram: "happymike",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

