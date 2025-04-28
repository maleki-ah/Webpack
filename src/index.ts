//? async/await
//? Promise

//? Version [1]
// let mp = new Promise<number>((resolve, reject) => {
//     //? Logic
//     resolve(200);

//     //? LTP
//     console.log('begin LTP ...');

//     // setTimeout(() => resolve(250), 5000);
//     reject('Sample Error Message');
// });

// mp.then(value => console.log(value))
//     .catch(reason => console.log(reason));

//? Version [2]
async function executePromise() {
    try {
        let mp = new Promise<number>((resolve, reject) => {
            //? Logic
            // resolve(200);

            //? LTP
            console.log('begin LTP ...');

            setTimeout(() => resolve(250), 5000);

            reject('Sample Error Message');
        });

        const result = await mp;  //? Await the promise resolution
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

executePromise();
