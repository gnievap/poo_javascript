// Objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
}; 

function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    "Juanita", 15, ["Curso de Introducción a la Producción de Videojuegos", "Curso de Creación de Personajes"]
);

// Prototipos con sintaxis de clases
class Student2{
    constructor({
        name,
        age,
        email,
        cursosAprobados = [],
        
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }

}

const panfilito = new Student2({
    email : "panfis@gmail.com",
    name: "Panfilo",
    age: 28,
});