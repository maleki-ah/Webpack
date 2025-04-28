//? Pascal Case (Class, Interface)
class Person {

    //? Default Access Modifier (public)
    //? Camel Case (property, method, parameter, localVariable)

    firstName!: string;
    lastName!: string;
    private _age!: number;

    constructor(data: { firstName: string; lastName: string; age?: number }) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;

        //? Optional age validation through setter
        if (data.age !== undefined) {
            this.age = data.age;
        }
    }

    //? Readonly Property
    get fullName(): string {
        // return this.firstName + ' ' + this.lastName; //? static string generation
        return `${this.firstName} ${this.lastName}`;    //? dynamic string generation
    }

    //? Getter Setter for private property _age
    get age(): number {
        return this._age;
    }
    set age(value: number) {
        if (value < 0 || value > 50) {
            throw new Error(`invalid value: [${value}]`);
        }

        this._age = value;
    }
}

//? Object Instantiation with Exception Handling
let p1!: Person;

try {
    p1 = new Person({
        firstName: 'Reza',
        lastName: 'Nahi',
        age: 35
    });
}
catch (error) {
    console.log((error as Error).message); //! Debug line for throwing exception
}

//? Debug Output
console.log('👤 Person Object:', p1);
console.log('📛 Full Name:', p1?.fullName);


//? Pascal Case (Class Name)
class Book {

    title!: string;
    author!: string;

    constructor(data: { title: string, author: string }) {
        this.title = data.title;
        this.author = data.author;
    }

    //* define a void method
    display(): void {
        console.log(`📘 Title: ${this.title}`);
        console.log(`✍️ Author: ${this.author}`);
    }
}

//? Object Instantiation with Try/Catch
let b1!: Book;

try {
    b1 = new Book({
        title: 'AHM',
        author: 'Maleki'
    });

    console.log('📚 Book Object:', b1);
    b1.display(); //* Method call
}
catch (error) {
    throw new Error((error as Error).message); //! Debug line for throwing exception
}


//? Inheritance in TypeScript (Class → Class)
class Manager extends Person {
    //* You can extend functionality if needed
}

//? Interface Implementation
interface MyNotification {
    send(message: string): void;
}

//? SMS Notification Class
class SmsNotification implements MyNotification {
    send(message: string): void {
        console.log(`📱 Sending SMS notification with message: "${message}"`);
    }
}

//? Email Notification Class
class EmailNotification implements MyNotification {
    send(message: string): void {
        console.log(`📧 Sending Email notification with message: "${message}"`);
    }
}

//? Polymorphic Behavior
let ns: MyNotification = new EmailNotification();
ns.send('🔔 Sample message'); //? Outputs Email version
