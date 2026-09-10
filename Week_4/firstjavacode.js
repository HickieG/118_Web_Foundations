// This is my first JavaScript code file; it feels like we are introducing Python to web development, I am here for it!

console.log("Hello, world! Let's cook some breakfast!");

const eggs = true;
const bacon = true;
const toast = true;
const OJ = true;

console.log("Eggs status:", eggs);
console.log("Bacon status:", bacon);
console.log("Toast status:", toast);
console.log("OJ status:", OJ);

function breakfastOrder(mainCourse, sideDish, bread, drink) {
    if (mainCourse && sideDish && bread && drink) {
        console.log("Ready for a delicious breakfast!");
    }
    else {
        console.log("Something is missing for breakfast!");
    }
}

//Changed the conditional statement to a function that is called below. 

breakfastOrder(eggs, bacon, toast, OJ);