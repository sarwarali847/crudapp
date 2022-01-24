import Student from './Student'


export default class StudOperations {

    studArray = new Set();
    constructor() {
        this.studArray.add(new Student(121, 'Derek', 'Java', 'SE'));
        this.studArray.add(new Student(122, 'James', 'CSS', 'TE'));
        this.studArray.add(new Student(123, 'Nanci', 'SQL', 'FE'));
        this.studArray.add(new Student(124, 'Sarwar', 'CPP', 'BE'));
    }
    getAllStudents() {
        //console.log(this.studArray);
        return [...this.studArray];
    }

    addStudent(stud) {
        let newStud = new Student(parseInt(stud.id), stud.name, stud.department, stud.year);
        this.studArray.add(newStud);
        return [...this.studArray];
    }

    searchStudent(stdId) {

        return [...this.studArray].find((student) => student.id = stdId);
    }
    deleteStudent(id) {
        console.log("in delete Method");
        let student = this.searchStudent(id);
        console.log(student);
        this.studArray.delete(student);
        console.log([...this.studArray]);
        return [...this.studArray];


    }

    updateStudent(stdnt) {
        console.log("in update Method");
        let student = this.searchStudent(parseInt(stdnt.id));
        console.log(student);
        this.studArray.delete(student);
        let studnt = new Student(parseInt(stdnt.id), stdnt.name, stdnt.department, stdnt.year);
        this.studArray.add(studnt);
        console.log([...this.studArray]);
        return [...this.studArray];

    }
}