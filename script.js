const new_process_card = document.querySelector(".new-process");
const overlay = document.querySelector(".overlay");
const history_value = document.getElementById("history");
const category_value = document.getElementById("category");
const description_value = document.getElementById("description");
const type_value = document.querySelectorAll(`input[name='type']:checked`);
const load = document.querySelector(".load");
const total_income = document.getElementById("total-income");
const net_profit = document.getElementById("net-profit");
const balance = document.getElementById("balance");
const invoice_count = document.getElementById("invoice-count");
const income_present = document.getElementById("income-present");
const profit_present = document.getElementById("profit-present");
const balance_present = document.getElementById("balance-present");

let total_value = document.getElementById("total");
let starting_balance = 100000;

const removeElement = () => {
  for (const element of [new_process_card, overlay]) {
    element.style.opacity = "0";
    element.style.pointerEvents = "none";
  }
};

const removeValue = () => {
  for (const element of [history_value, category_value, description_value, total_value]) {
    element.value = "";
  }

  for (const element of type_value) {
    element.checked = false;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const random = Math.floor(Math.random() * 3) + 2;

  setTimeout(() => {
    for (const element of [load, overlay]) {
      element.style.opacity = "0";
      element.style.pointerEvents = "none";
    }
  }, random * 300);

  for (const element of [load, overlay]) {
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
  }
});

function newProcess() {
  for (const element of [new_process_card, overlay]) {
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
  }
}

function Overlay() {
  removeElement();
  removeValue();
}

function xMark() {
  removeElement();
  removeValue();
}

let data = [
  {
    index: 1,
    history: "18.08.2026",
    category: "diğer",
    description: "Ürün satışı",
    type: "gelir",
    total: "15.000",
  },
  {
    index: 2,
    history: "18.08.2026",
    category: "maaş",
    description: "Personel maaşı",
    type: "gider",
    total: "4.000",
  },
  {
    index: 3,
    history: "17.08.2026",
    category: "diğer",
    description: "Hizmet geliri",
    type: "gelir",
    total: "12.000",
  },
  {
    index: 4,
    history: "17.08.2026",
    category: "kira",
    description: "Ofis kirası",
    type: "gider",
    total: "2.500",
  },
  {
    index: 5,
    history: "16.08.2026",
    category: "fatura",
    description: "Elektrik faturası",
    type: "gider",
    total: "500",
  },
  {
    index: 6,
    history: "16.08.2026",
    category: "diğer",
    description: "Proje ödemesi",
    type: "gelir",
    total: "5.000",
  },
];

const processData = (person) => {
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");

  Object.values(person).forEach((value) => {
    const td = document.createElement("td");

    if (typeof value === "number" && value >= 1000) {
      value = value.toLocaleString("tr-TR");
    }

    td.textContent = value;

    tr.appendChild(td);
  });

  tbody.appendChild(tr);
};

data.forEach(processData);

total_value.addEventListener("input", () => {
  let value = total_value.value.replace(/\D/g, "");

  total_value.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});

function saveProcess() {
  const type_value = document.querySelector("input[name='type']:checked");

  if (
    !history_value.value ||
    !category_value.value ||
    !description_value.value ||
    !type_value ||
    !total_value.value
  ) {
    removeElement();
    removeValue();
    return;
  }

  const new_process = {
    index: data.length + 1,
    history: history_value.value.split("-").reverse().join("."),
    category: category_value.value,
    description: description_value.value,
    type: type_value.value,
    total: total_value.value,
  };

  data.push(new_process);
  processData(new_process);
  calculateData();

  removeElement();
  removeValue();
}

const calculateData = () => {
  let income = 0;
  let expense = 0;
  let invoice = 0;

  data.forEach((item) => {
    const total = Number(item.total.replace(/\./g, ""));

    if (item.type.toLowerCase() === "gelir") {
      income += total;
    }

    if (item.type.toLowerCase() === "gider") {
      expense += total;
    }

    if (item.category === "fatura") {
      invoice++;
    }
  });

  const profit = income - expense;
  const current_balance = starting_balance + profit;

  const profit_rate = expense > 0 ? (profit / expense) * 100 : 0;
  const balance_rate = starting_balance > 0 ? (profit / starting_balance) * 100 : 0;
  const income_rate = starting_balance > 0 ? (income / starting_balance) * 100 : 0;

  total_income.textContent = `₺${income.toLocaleString("tr-TR")}`;
  net_profit.textContent = `₺${profit.toLocaleString("tr-TR")}`;
  balance.textContent = `₺${current_balance.toLocaleString("tr-TR")}`;

  invoice_count.textContent = invoice;
  profit_present.innerHTML = `
    <i class="fa-solid fa-sort-${profit >= 0 ? "up" : "down"}"></i>
    %${Math.abs(profit_rate).toFixed(1)}
  `;

  balance_present.innerHTML = `
    <i class="fa-solid fa-sort-${balance_rate >= 0 ? "up" : "down"}"></i>
    %${Math.abs(balance_rate).toFixed(1)}
  `;

  income_present.innerHTML = `
    <i class="fa-solid fa-sort-${income_rate >= 0 ? "up" : "down"}"></i>
    %${Math.abs(income_rate).toFixed(1)}
  `;

  if (profit >= 0) {
    for (const element of [profit_present, balance_present]) {
      element.classList.remove("damage");
      element.classList.add("profit");
    }
  } else {
    for (const element of [profit_present, balance_present]) {
      element.classList.remove("profit");
      element.classList.add("damage");
    }
  }
};
calculateData();

function showMore() {
  Fatura();
}
