function giveJobToStudent(student, jobName) {
     student = {
        ...student,
        job: jobName
    }
    alert(`Поздравляем! У студента ${student.fullName}, появилась новая работа! Теперь он ${student.job}`)
    return student

}

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

let test = giveJobToStudent(student, 'web-developer')
console.log(test)