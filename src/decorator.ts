//? AOP (Aspect-Oriented Programming)
//? Decorator Design Pattern in TypeScript
//? Functional Programming Concepts: Pure Function, HoF, Closure, Recursion, Currying, Memoization, Immutability, etc.
//? Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter.

//? Decorator Factory (Higher-Order Function)
function decoratorFactory() {
    //? Evaluation Logic (returns the actual decorator function)
    return function (
        target: any,
        propertyKey?: string | symbol,
        descriptor?: PropertyDescriptor
    ) {
        //? Decoration Logic
        if (propertyKey) {
            // This is either a method or a property decorator
            const name = String(propertyKey);
            console.log(`Decorating ${descriptor ? 'Method' : 'Property'} "${name}"`);
        } else {
            // This is a class decorator
            console.log('Decorating Class');
        }
    };
}

//? Class Decorator
@decoratorFactory()
class DecoratedClass {

    //? Property Decorator
    @decoratorFactory()
    data!: string;

    //? Method Decorator
    @decoratorFactory()
    show(): void {
        console.log('Inside show() method.');
    }

    //? Accessor Decorator
    private _name: string = '';

    @decoratorFactory()
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

//? Instantiate class and trigger logic
const obj = new DecoratedClass();
obj.data = 'test';
obj.show();
obj.name = 'Reza';
console.log(obj.name);
