// localStorage.clear()
// // Function to handle button click
// function n1() {
//     var key = "key1";
//     localStorage.setItem(key, 1);
//     console.log("Added new local storage item with key: " + key);
// }

// function n2() {
//     var key = "test2";
//     localStorage.setItem(key, 2);
//     console.log("Added new local storage item with key: " + key);
// }

// function n3() {
//     var key = "test3";
//     localStorage.setItem(key, 3);
//     console.log("Added new local storage item with key: " + key);
// }

// function n4() {
//     var key = "test4";
//     localStorage.setItem(key, 4);
//     console.log("Added new local storage item with key: " + key);
// }

// function n5() {
//     var key = "test5";
//     localStorage.setItem(key, 5);
//     console.log("Added new local storage item with key: " + key);
// }

// function n6() {
//     var key = "test6";
//     localStorage.setItem(key, 6);
//     console.log("Added new local storage item with key: " + key);
// }

// function n7() {
//     var key = "test7";
//     localStorage.setItem(key, 7);
//     console.log("Added new local storage item with key: " + key);
// }

// function n8() {
//     var key = "test8";
//     localStorage.setItem(key, 8);
//     console.log("Added new local storage item with key: " + key);
// }

// function n9() {
//     var key = "test9";
//     localStorage.setItem(key, 9);
//     console.log("Added new local storage item with key: " + key);
// }

// function n10() {
//     let key = parseInt(localStorage.getItem("key")) || 2;
//     //let value = parseInt(localStorage.getItem("value")) || 1;

//     // Set a new local storage item with an incremented key
//     localStorage.setItem("jawaban no " + key, 1);

//     // Update the key and value in local storage
//     localStorage.setItem("key", key + 1);
// }

// // Attach functions to the button click event
// // var button = document.getElementById("yourButtonId");
// // button.addEventListener("click", function () {
// //     n1();
// //     n2();
// //     n3();
// //     n4();
// //     n5();
// //     n6();
// //     n7();
// //     n8();
// //     n9();
// //     n10();
// // });
localStorage.clear()
// Initialize an empty array to store button click outputs
let buttonClickOutputs = [];

// Function to handle button click
function buttonClicked(index) {
    // Get the button index and add it to the array
    buttonClickOutputs.push(index + 1);

    // Display the current array in the console (you can do something else with the array if needed)
    localStorage.setItem('pretest 1', buttonClickOutputs)
}

