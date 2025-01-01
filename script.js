const scrollToTop = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  //   console.log("here", window.scrollY);

  if (window.scrollY > 700) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const toggleMenu = document.getElementById("toggleMenu");
const ulShow = document.getElementById("ulShow");

toggleMenu.addEventListener("click", () => {
  ulShow.classList.toggle("view");
});















// JSON.parse(localStorage.getItem("user"));
// console.log(getData)
// getData()

// const userData = JSON.parse(localStorage.getItem("user"));
// console.log(userData);

// const td = document.querySelector("td")

// const userObj = {
//     username: "Maria",
//     email: "maria@mail.com"
//   }

//   localStorage.setItem('user', JSON.stringify(userObj))

//   const storedUserData = localStorage.getItem('user')

// if (storedUserData) {
//   const userData = JSON.parse(storedUserData)
//   // You can use userData here...
// } else {
//   console.log('User data not found in local storage')
// }

// function showName(text) {
//     storedUserData = td
//     console.log(showName(text))
// }

// document.addEventListener("DOMContentLoaded", () => {
//     // Get all input elements in the form
//     const inputs = document.querySelectorAll("input, select");

//     // Load saved form data from localStorage
//     loadFormData();

//     // Add event listeners to save input data on change
//     inputs.forEach((input) => {
//       input.addEventListener("input", (event) => {
//         saveFormData();
//       });
//     });

//     // Function to save form data to localStorage
//     function saveFormData() {
//       const formData = {};

//       // Loop through all input fields and store their values
//       inputs.forEach((input) => {
//         if (input.type === "checkbox") {
//           formData[input.name] = input.checked;
//         } else {
//           formData[input.name] = input.value;
//         }
//       });

//       // Store the data in localStorage
//       localStorage.setItem("formData", JSON.stringify(formData));
//     }

//     // Function to load saved form data from localStorage
//     function loadFormData() {
//       const savedData = localStorage.getItem("formData");
//       if (savedData) {
//         const formData = JSON.parse(savedData);

//         // Populate form fields with saved data
//         inputs.forEach((input) => {
//           if (input.type === "checkbox") {
//             input.checked = formData[input.name] || false;
//           } else if (input.name) {
//             input.value = formData[input.name] || "";
//           }
//         });
//       }
//     }
//   });
