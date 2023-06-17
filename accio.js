const employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  const developers = employees
    .filter((employee) => employee.profession === "developer")
    .map((employee) => employee.name);

  console.log(developers);
}

function PrintDeveloperbyForEach() {
  const developers = [];
  employees.forEach((employee) => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });

  console.log(developers);
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);

  console.log(newEmployee);
}

function removeAdmin() {
  const filteredEmployees = employees.filter(
    (employee) => employee.profession !== "admin"
  );

  console.log(filteredEmployees);
}

function ConcatinateArray() {
  const additionalEmployees = [
    { id: 4, name: "michael", age: "22", profession: "developer" },
    { id: 5, name: "emma", age: "21", profession: "designer" },
    { id: 6, name: "alex", age: "24", profession: "manager" }
  ];

  const concatenatedArray = employees.concat(additionalEmployees);
  console.log(concatenatedArray);
}

// Testing the functions
console.log("PrintDeveloperbyMap():");
PrintDeveloperbyMap();
console.log("\nPrintDeveloperbyForEach():");
PrintDeveloperbyForEach();
console.log("\naddData():");
addData();
console.log("\nremoveAdmin():");
removeAdmin();
console.log("\nConcatinateArray():");
ConcatinateArray();
