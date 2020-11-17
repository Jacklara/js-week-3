'use strict';

class person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
        this.exercise = function() {
                console.log('Weight lifting has many health benefits');
             }
        this.fetchJob = function() {
                console.log(`${name} is an ${job}`)
             }
    }
}

class programmer extends person {
    constructor(name, job, age, languages) {
        super(name, job, age, languages)
        this.languages = languages;
        this.busy = false;
        this.completeTask = function() {
            return this.busy = false;
        };
        this.acceptNewTask = function() {
            return this.busy = true;
        };
        this.offerNewTask = function() {
            if (this.busy === true) {
                console.log(`${name} is avalible to take on a new task`);
            } else {
                console.log(`${name} cannot take on a new task`);
            }
        };
        this.learnLanguage = function() {
            this.languages.push(language);
        };
        this.listLanguages = function() {
            console.log(`Languages Learned: ${languages}`);
        };
    };
};

var Cesar = new programmer ('Cesar', 'Assosiate Engineer', 23, ['python', 'Go', 'JavaScript']);

Cesar.exercise()
Cesar.fetchJob()
Cesar.acceptNewTask()
Cesar.offerNewTask()
