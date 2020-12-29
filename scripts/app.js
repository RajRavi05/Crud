class Details {
  constructor(name, register, department, number) {
    this.name = name;
    this.register = register;
    this.department = department;
    this.number = number;
  }
}

// adding details to UI
class UI {
  addDetails(details) {
    const list = document.querySelector("#list");

    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${details.name}</td>
            <td>${details.register}</td>
            <td>${details.department}</td>
            <td>${details.number}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

    list.appendChild(row);
  }

  deleteDetails(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("firstName").value = "";
    document.getElementById("reg").value = "";
    document.getElementById("department").value = "";
    document.getElementById("mobile").value = "";
  }

  searchDetails() {
    const search = document.querySelector("#search");
    const filter = search.value.toUpperCase();
    const table = document.querySelector("table");
    const tr = table.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

//Event listener for adding details
document.querySelector("#det").addEventListener("submit", (e) => {
  const name = document.querySelector("#firstName").value;
  const register = document.querySelector("#reg").value;
  const department = document.querySelector("#department").value;
  const number = document.querySelector("#mobile").value;

  // instantiating details object
  const details = new Details(name, register, department, number);

  // instantiating UI
  const ui = new UI();

  if (name === "" || register === "" || department === "" || number === "") {
    alert("Please fill out the details");
  } else {
    ui.addDetails(details);

    ui.clearFields();
  }

  e.preventDefault();
});

// eventListener for deleting details
document.querySelector("#list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteDetails(e.target);
  e.preventDefault();
});

// event listener for search
document.querySelector("#search").addEventListener("keyup", () => {
  const ui = new UI();

  ui.searchDetails();
});

// event listener for modal
const signup = document.querySelector("#signup");
const modalSignup = document.querySelector("#modalSignup");

signup.addEventListener("click", () => {
  modalSignup.classList.toggle("displayModal");
});

// event listener for login modal
const login = document.querySelector("#login");
const modalLogIn = document.querySelector("#modalLogin");

login.addEventListener("click", () => {
  modalLogIn.classList.toggle("displayModal");
});

// function myFunction() {
//     let input, filter, table, tr, td, i;
//     input = document.getElementById("search");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }
s