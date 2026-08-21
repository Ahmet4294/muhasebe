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

const Loading = (randomMax = 3, randomMin = 2) => {
  const random = Math.floor(Math.random() * randomMax) + randomMin;

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
};

window.addEventListener("DOMContentLoaded", () => {
  Loading();
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
  {
    index: 7,
    history: "15.08.2026",
    category: "satış",
    description: "Web sitesi satışı",
    type: "gelir",
    total: "8.500",
  },
  {
    index: 8,
    history: "15.08.2026",
    category: "vergi",
    description: "KDV ödemesi",
    type: "gider",
    total: "3.200",
  },
  {
    index: 9,
    history: "14.08.2026",
    category: "sigorta",
    description: "İşyeri sigorta primi",
    type: "gider",
    total: "2.850",
  },
  {
    index: 10,
    history: "14.08.2026",
    category: "alışveriş",
    description: "Ofis mobilyası alımı",
    type: "gider",
    total: "7.400",
  },
  {
    index: 11,
    history: "13.08.2026",
    category: "banka",
    description: "Havale işlem ücreti",
    type: "gider",
    total: "175",
  },
  {
    index: 12,
    history: "13.08.2026",
    category: "maaş",
    description: "Prim ödemesi",
    type: "gider",
    total: "3.750",
  },
  {
    index: 13,
    history: "12.08.2026",
    category: "kira",
    description: "Depo kullanım bedeli",
    type: "gider",
    total: "3.800",
  },
  {
    index: 14,
    history: "12.08.2026",
    category: "sigorta",
    description: "Araç sigortası",
    type: "gider",
    total: "4.250",
  },
  {
    index: 15,
    history: "11.08.2026",
    category: "alışveriş",
    description: "Bilgisayar ekipmanı",
    type: "gider",
    total: "11.500",
  },
  {
    index: 16,
    history: "11.08.2026",
    category: "banka",
    description: "Hesap işletim ücreti",
    type: "gider",
    total: "320",
  },
  {
    index: 17,
    history: "10.08.2026",
    category: "diğer",
    description: "Danışmanlık hizmeti",
    type: "gelir",
    total: "9.750",
  },
  {
    index: 18,
    history: "10.08.2026",
    category: "vergi",
    description: "Stopaj ödemesi",
    type: "gider",
    total: "2.150",
  },
  {
    index: 19,
    history: "09.08.2026",
    category: "fatura",
    description: "Su faturası",
    type: "gider",
    total: "425",
  },
  {
    index: 20,
    history: "09.08.2026",
    category: "maaş",
    description: "Yemek yardımı",
    type: "gider",
    total: "2.600",
  },
  {
    index: 21,
    history: "08.08.2026",
    category: "satış",
    description: "E-ticaret siparişi",
    type: "gelir",
    total: "13.250",
  },
  {
    index: 22,
    history: "08.08.2026",
    category: "alışveriş",
    description: "Kırtasiye ürünleri",
    type: "gider",
    total: "980",
  },
  {
    index: 23,
    history: "07.08.2026",
    category: "banka",
    description: "POS cihazı komisyonu",
    type: "gider",
    total: "640",
  },
  {
    index: 24,
    history: "07.08.2026",
    category: "diğer",
    description: "Freelance proje geliri",
    type: "gelir",
    total: "6.800",
  },
  {
    index: 25,
    history: "06.08.2026",
    category: "fatura",
    description: "Doğalgaz faturası",
    type: "gider",
    total: "1.450",
  },
  {
    index: 26,
    history: "06.08.2026",
    category: "kira",
    description: "Araç park kira bedeli",
    type: "gider",
    total: "1.750",
  },
  {
    index: 27,
    history: "05.08.2026",
    category: "vergi",
    description: "Damga vergisi",
    type: "gider",
    total: "850",
  },
  {
    index: 28,
    history: "05.08.2026",
    category: "sigorta",
    description: "Çalışan sigorta primi",
    type: "gider",
    total: "5.300",
  },
  {
    index: 29,
    history: "04.08.2026",
    category: "satış",
    description: "Kurumsal ürün satışı",
    type: "gelir",
    total: "19.500",
  },
  {
    index: 30,
    history: "04.08.2026",
    category: "diğer",
    description: "Yazılım lisans geliri",
    type: "gelir",
    total: "4.600",
  },
];

const tables = document.querySelector(".tables");
const table = document.querySelector(".faturalar .table");

table.appendChild(tables.cloneNode(true));

const processData = (person) => {
  const panel_tbody = document.querySelector(".panel tbody");
  const fatura_tbody = document.querySelector(".faturalar tbody");
  const tr = document.createElement("tr");

  Object.values(person).forEach((value) => {
    const td = document.createElement("td");

    if (typeof value === "number" && value >= 1000) {
      value = value.toLocaleString("tr-TR");
    }

    td.textContent = value;

    tr.appendChild(td);
  });

  if (panel_tbody && panel_tbody.children.length < 6) {
    panel_tbody.appendChild(tr.cloneNode(true));
  }

  fatura_tbody.appendChild(tr);
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
