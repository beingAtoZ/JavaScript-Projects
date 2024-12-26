let flag = "All";
let expenses = [];

function addData() {
  const a = document.getElementById("amount").value;
  const d = document.getElementById("des").value;
  const c = document.getElementById("category").value;

  if (a === "" || d === "" || c === "") {
    alert("Please fill in all fields.");
    return;
  }

  const obj = {
    amount: a,
    des: d,
    category: c,
  };

  expenses.push(obj);
  localStorage.setItem("mylist", JSON.stringify(expenses));
  getdata();
  document.getElementById("amount").value = "";
  document.getElementById("des").value = "";
  document.getElementById("category").value = "";
}

function getdata() {
  const x = localStorage.getItem("mylist");
  expenses = x ? JSON.parse(x) : [];
  getFilterData();
}

function getFilterData() {
  flag = document.getElementById("filter").value;
  let filteredExpenses = [];

  if (flag === "All") {
    filteredExpenses = expenses;
  } else {
    filteredExpenses = expenses.filter((expense) => expense.category === flag);
  }

  let temp = "";
  let totalSum = 0;

  temp += "<ul>";
  filteredExpenses.forEach((expense) => {
    temp += `<li>${expense.amount} -- ${expense.des} -- ${expense.category}</li>`;
    totalSum += parseFloat(expense.amount);
  });
  temp += "</ul>";

  document.getElementById("wrapper").innerHTML = temp;
  calculate(totalSum);
}

function calculate(totalSum) {
  document.getElementById("total").innerHTML = `Total: ${totalSum}`;
}

function clearData() {
  localStorage.removeItem("mylist");
  expenses = [];
  getdata(); // Refresh the displayed data
}
