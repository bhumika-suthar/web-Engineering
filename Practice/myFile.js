// const myPromise= new Promise((resolve=>{ return }), rejvy)

function myPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber)
        setTimeout(() => {
            if (randomNumber % 2 === 0) {
                reject(new Error("Promise reject for even number."));
            } else {
                resolve("Promise resolve for even number.");
            }
        }, 5000);
    });
}
myPromise()
    .then(result => console.log("Success:", result))
    .catch(error => console.error("Error:", error.message));