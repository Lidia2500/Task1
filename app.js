const yargs = require('yargs');
const student = require('./studentApp.json');

// Add
yargs.command({
    command: 'add',
    describe: 'Add student',
    builder: {
        id: {
            describe: 'This is the ID of the student',
            demandOption: true,
            type: 'number',
        },
        name: {
            describe: 'This is the name of the student',
            demandOption: true,
            type: 'string',
        },
        grades: {
            describe: 'This is the grades of the student',
            demandOption: true,
            type: 'array'
        },
    },
    total: {
        describe: 'This is the total of student’s grades',
        type: 'number'
    },
        comment: {
            describe: 'add comments describe student state',
            demandOption: true,
            type: 'string'
    },
    handler: (argv) => {
        let sum = 0;
        argv.grades.forEach(grade => sum += grade)
        student.addStudent(argv.id, argv.name, argv.grades, argv.comment, sum)
    }
})

// Read 
yargs.command({
    command: 'read',
    describe: 'read student using ID',
    builder: {
        id: {
            describe: 'student want to show information',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        student.readStudent(argv.id)
    }
})

// List
yargs.command({
    command: 'list',
    describe: 'read all student',
    handler: () => {
        student.listStudent()
    }
})
// Delete
yargs.command({
    command: 'delete',
    describe: 'delete student',
    builder: {
        id: {
            describe: 'delete student using id',
            demandOption: true,
            type: 'number'
        },
    },
    handler: (argv) => {
        student.removeStudent(argv.id)
    }
})

// console.log(yargs.argv)
yargs.parse()
