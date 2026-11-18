const $ = (s) => document.querySelector(s);
const copy = {
  en: {
    operations: "OPERATIONS",
    planning: "PLANNING",
    dashboard: "Dashboard",
    alerts: "Alerts",
    inventory: "Inventory",
    products: "Products",
    forecast: "AI forecast",
    orders: "Purchase orders",
    suppliers: "Suppliers",
    reports: "Reports",
    mainNavigation: "Main navigation",
    language: "Language",
    accountName: "Warehouse Manager",
    initials: "WM",
    manager: "Manager",
    popupRole: "Admin",
    usersTitle: "Active users",
    usersSubtitle: "Signed in to the website",
    connected: "online",
    employee: "Employee",
    trader: "Merchant",
    active: "Active now",
    lastSeen: "Active",
    minutes: "min ago",
    logout: "Log out",
    title: "New purchase order",
    subtitle: "Choose a supplier and the items to order",
    searchPlaceholder: "Search products, SKUs...",
    cancel: "Cancel",
    supplierStep: "1. Supplier",
    supplier: "Supplier",
    expectedDelivery: "Expected delivery",
    itemsStep: "2. Items",
    product: "PRODUCT",
    sku: "SKU",
    qty: "QTY",
    unitCost: "UNIT COST (EGP)",
    lineTotal: "TOTAL (EGP)",
    remove: "Remove",
    addItem: "Add item",
    summary: "Summary",
    itemsLabel: "Items",
    expectedLabel: "Expected",
    total: "Total",
    suggestion: "Suggested by AI forecast: reorder 400 units of Product 1.",
    submit: "Submit for approval",
    saveDraft: "Save draft",
    footer: "© 2027 Smart Warehouse. All rights reserved.",
    saved: "Draft saved",
    submitted: "Submitted for approval",
    empty: "Add an item to start your order",
    suppliers: "Suppliers",
    productNames: ["Product 1", "Product 2", "Product 3", "Product 4"],
    currency: "EGP",
  },
  ar: {
    operations: "العمليات",
    planning: "التخطيط",
    dashboard: "لوحة التحكم",
    alerts: "التنبيهات",
    inventory: "المخزون",
    products: "المنتجات",
    forecast: "توقعات الذكاء الاصطناعي",
    orders: "أوامر الشراء",
    suppliers: "الموردون",
    reports: "التقارير",
    mainNavigation: "التنقل الرئيسي",
    language: "اللغة",
    accountName: "مدير المخزن",
    initials: "م أ",
    manager: "مدير",
    popupRole: "مدير",
    usersTitle: "المستخدمون النشطون",
    usersSubtitle: "سجلوا الدخول إلى الموقع",
    connected: "متصلون",
    employee: "موظف",
    trader: "تاجر",
    active: "نشط الآن",
    lastSeen: "نشط قبل",
    minutes: "دقائق",
    logout: "تسجيل الخروج",
    title: "إنشاء أمر شراء جديد",
    subtitle: "اختر المورد والمنتجات المطلوبة",
    searchPlaceholder: "ابحث عن المنتجات أو SKU...",
    cancel: "إلغاء",
    supplierStep: "١. المورد",
    supplier: "المورد",
    expectedDelivery: "موعد التسليم المتوقع",
    itemsStep: "٢. المنتجات",
    product: "المنتج",
    sku: "SKU",
    qty: "الكمية",
    unitCost: "سعر الوحدة (EGP)",
    lineTotal: "الإجمالي (EGP)",
    remove: "حذف",
    addItem: "إضافة منتج",
    summary: "الملخص",
    itemsLabel: "المنتجات",
    expectedLabel: "التسليم المتوقع",
    total: "الإجمالي",
    suggestion:
      "اقتراح من توقعات الذكاء الاصطناعي: أعد طلب 400 وحدة من المنتج 1.",
    submit: "إرسال للموافقة",
    saveDraft: "حفظ كمسودة",
    footer: "© ٢٠٢٧ Smart Warehouse. جميع الحقوق محفوظة.",
    saved: "تم حفظ المسودة",
    submitted: "تم الإرسال للموافقة",
    empty: "أضف منتجًا لبدء أمر الشراء",
    suppliers: "الموردون",
    productNames: ["المنتج 1", "المنتج 2", "المنتج 3", "المنتج 4"],
    currency: "EGP",
  },
};
const products = [
  { id: "p1", sku: "SKU-2210", cost: 12.5 },
  { id: "p2", sku: "SKU-3087", cost: 9.75 },
  { id: "p3", sku: "SKU-1042", cost: 38 },
  { id: "p4", sku: "SKU-2301", cost: 21 },
];
const suppliers = [
  {
    id: "s1",
    en: "Company name",
    ar: "اسم الشركة",
    product: "Product 1",
    arProduct: "المنتج 1",
    score: 98,
  },
  {
    id: "s2",
    en: "Company name",
    ar: "اسم الشركة",
    product: "Product 1",
    arProduct: "المنتج 1",
    score: 98,
  },
  {
    id: "s3",
    en: "Company name",
    ar: "اسم الشركة",
    product: "Product 2",
    arProduct: "المنتج 2",
    score: 95,
  },
  {
    id: "s4",
    en: "Company name",
    ar: "اسم الشركة",
    product: "Product 3",
    arProduct: "المنتج 3",
    score: 90,
  },
  {
    id: "s5",
    en: "Company name",
    ar: "اسم الشركة",
    product: "Product 4",
    arProduct: "المنتج 4",
    score: 88,
  },
];
const users = [
  {
    en: "Ahmed Hassan",
    ar: "أحمد حسن",
    email: "ahmed@smartwh.com",
    enInitials: "AH",
    arInitials: "أح",
    role: "employee",
  },
  {
    en: "Sara Mostafa",
    ar: "سارة مصطفى",
    email: "sara@smartwh.com",
    enInitials: "SM",
    arInitials: "س م",
    role: "employee",
  },
  {
    en: "Karim Adel",
    ar: "كريم عادل",
    email: "karim@supplier.com",
    enInitials: "KA",
    arInitials: "ك ع",
    role: "trader",
  },
  {
    en: "Nour Youssef",
    ar: "نور يوسف",
    email: "nour@smartwh.com",
    enInitials: "NY",
    arInitials: "ن ي",
    role: "employee",
  },
  {
    en: "Mona Tarek",
    ar: "منى طارق",
    email: "mona@smartwh.com",
    enInitials: "MT",
    arInitials: "م ط",
    role: "trader",
  },
];
let lang = "en",
  items = [{ productId: "p1", quantity: 400 }];
function money(value) {
  return displayDigits(
    new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    }).format(value),
  );
}
function currentCopy() {
  return copy[lang];
}
function displayDigits(value) {
  const ascii = String(value).replace(/[٠-٩]/g, (d) =>
    String("٠١٢٣٤٥٦٧٨٩".indexOf(d)),
  );
  return lang === "ar"
    ? ascii.replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)])
    : ascii;
}
function asciiDigits(value) {
  return String(value).replace(/[٠-٩]/g, (d) =>
    String("٠١٢٣٤٥٦٧٨٩".indexOf(d)),
  );
}
function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
}
function renderSupplierMenu() {
  const query = asciiDigits($("#supplierFilter").value).trim().toLowerCase(),
    selected = $("#supplierSelect").value;
  const matches = suppliers.filter((s) =>
    `${s.en} ${s.ar} ${s.product} ${s.arProduct}`.toLowerCase().includes(query),
  );
  $("#supplierCurrent").textContent = displayDigits(
    suppliers.find((s) => s.id === selected)?.[lang] ||
      (lang === "ar" ? "اسم الشركة" : "company name"),
  );
  $("#supplierOptions").innerHTML = matches.length
    ? matches
        .map(
          (s) =>
            `<li><button type="button" class="supplier-option${s.id === selected ? " selected" : ""}" data-supplier="${escapeHTML(s.id)}" aria-pressed="${s.id === selected}"><span class="supplier-option-copy"><strong>${escapeHTML(displayDigits(s[lang]))}</strong><span>${lang === "ar" ? `${escapeHTML(displayDigits(s.arProduct))} · الالتزام بالموعد ${displayDigits(s.score)}٪` : `${escapeHTML(s.product)} · On-time ${s.score}%`}</span></span><span class="supplier-option-check" aria-hidden="true">✓</span></button></li>`,
        )
        .join("")
    : `<li class="supplier-empty">${lang === "ar" ? "لا يوجد موردون مطابقون" : "No suppliers found"}</li>`;
  $("#supplierMenu").setAttribute(
    "aria-label",
    lang === "ar" ? "اختيار مورد" : "Choose a supplier",
  );
  $("#supplierFilter").placeholder =
    lang === "ar" ? "ابحث عن الموردين..." : "Search suppliers...";
  $("#supplierFilter").setAttribute(
    "aria-label",
    $("#supplierFilter").placeholder,
  );
  $("#addSupplier").querySelector('[data-i18n="addSupplier"]').textContent =
    lang === "ar" ? "إضافة مورد" : "Add supplier";
}
function renderUsers() {
  const d = currentCopy();
  $("#usersList").innerHTML = users
    .map(
      (u, index) =>
        `<li class="user-row"><span class="user-avatar user-tone-${index + 1}">${lang === "ar" ? u.arInitials : u.enInitials}<i class="presence is-online" aria-hidden="true"></i></span><span class="user-details"><strong>${lang === "ar" ? u.ar : u.en}</strong><span class="user-detail" dir="ltr">${u.email}</span></span><span class="user-role ${u.role}">${d[u.role]}</span></li>`,
    )
    .join("");
  $(".online-count").textContent = displayDigits(5);
  $(".users-count").textContent = displayDigits(5);
  $("#usersList").setAttribute("aria-label", d.usersTitle);
  $(".users").setAttribute(
    "aria-label",
    lang === "ar" ? `${displayDigits(5)} مستخدمين` : "5 users",
  );
  $("#usersPanel").setAttribute("aria-label", d.usersTitle);
}
function localizeControls() {
  const d = currentCopy();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (d[key] !== undefined)
      el.textContent = lang === "ar" ? displayDigits(d[key]) : d[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (d[key]) el.setAttribute("aria-label", d[key]);
  });
  $("nav").setAttribute("aria-label", d.mainNavigation);
  $(".language").setAttribute("aria-label", d.language);
  $("#productSearch").placeholder = d.searchPlaceholder;
  $("#productSearch").setAttribute("aria-label", d.searchPlaceholder);
  $("#deliveryDate").setAttribute(
    "aria-label",
    lang === "ar" ? "موعد التسليم المتوقع" : "Expected delivery date",
  );
  $("#openDatePicker").setAttribute(
    "aria-label",
    lang === "ar" ? "اختيار موعد التسليم" : "Choose expected delivery date",
  );
  $("#openDatePicker").title = lang === "ar" ? "اختيار التاريخ" : "Choose date";
  document
    .querySelectorAll(".badge")
    .forEach((el) => (el.textContent = displayDigits(el.textContent)));
  $("#usersToggle .users-count").textContent = displayDigits(5);
  document.querySelectorAll("#productSuggestions option").forEach((o, i) => {
    o.value =
      lang === "ar"
        ? `${displayDigits(`المنتج ${i + 1}`)} · SKU-${displayDigits(products[i].sku.slice(4))}`
        : `Product ${i + 1} · ${products[i].sku}`;
  });
  const iconDay = document.querySelector("#openDatePicker svg text:last-child");
  if (iconDay) iconDay.textContent = displayDigits(17);
  const iconMonth = document.querySelector(
    "#openDatePicker svg text:first-of-type",
  );
  if (iconMonth && lang === "ar") iconMonth.textContent = "يوليو";
  else if (iconMonth) iconMonth.textContent = "July";
  renderSupplierMenu();
  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  renderUsers();
}
function monthName(date) {
  const months =
    lang === "ar"
      ? [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ]
      : [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
  return displayDigits(
    `${Number(date.slice(8, 10))} ${months[Number(date.slice(5, 7)) - 1]}`,
  );
}
function formatDeliveryDate(date) {
  if (!date) return "";
  const months =
    lang === "ar"
      ? [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ]
      : [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
  return displayDigits(
    `${Number(date.slice(8, 10))} ${months[Number(date.slice(5, 7)) - 1]} ${date.slice(0, 4)}`,
  );
}
let calendarMonth = new Date(2026, 9, 1);
function renderCalendar() {
  const monthNames =
    lang === "ar"
      ? [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ]
      : [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
  const weekdays =
    lang === "ar"
      ? ["ح", "ن", "ث", "ر", "خ", "ج", "س"]
      : ["S", "M", "T", "W", "T", "F", "S"];
  $("#calendarMonth").textContent = displayDigits(
    `${monthNames[calendarMonth.getMonth()]} ${calendarMonth.getFullYear()}`,
  );
  $("#calendarWeekdays").innerHTML = weekdays
    .map((day) => `<span>${day}</span>`)
    .join("");
  const year = calendarMonth.getFullYear(),
    month = calendarMonth.getMonth(),
    offset = new Date(year, month, 1).getDay(),
    count = new Date(year, month + 1, 0).getDate(),
    cellCount = Math.ceil((offset + count) / 7) * 7,
    selected = $("#deliveryDate").value;
  let cells = "";
  for (let i = 0; i < cellCount; i++) {
    const day = i - offset + 1;
    if (day < 1 || day > count) {
      cells += '<span class="calendar-empty" aria-hidden="true"></span>';
      continue;
    }
    const value = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    cells += `<button type="button" class="calendar-day${value === selected ? " selected" : ""}" role="gridcell" aria-pressed="${value === selected}" data-calendar-date="${value}">${displayDigits(day)}</button>`;
  }
  $("#calendarGrid").innerHTML = cells;
  $("#dateCalendar").setAttribute(
    "aria-label",
    lang === "ar" ? "اختيار التاريخ" : "Choose a date",
  );
  $("[data-calendar-prev]").setAttribute(
    "aria-label",
    lang === "ar" ? "الشهر السابق" : "Previous month",
  );
  $("[data-calendar-next]").setAttribute(
    "aria-label",
    lang === "ar" ? "الشهر التالي" : "Next month",
  );
  $("[data-calendar-clear]").textContent = lang === "ar" ? "مسح" : "Clear";
  $("[data-calendar-today]").textContent = lang === "ar" ? "اليوم" : "Today";
}
function render() {
  const d = currentCopy(),
    body = $("#itemsBody");
  body.innerHTML = items.length
    ? items
        .map((item, index) => {
          const p = products.find((x) => x.id === item.productId);
          const productName = displayDigits(
            d.productNames[Number(p.id.slice(1)) - 1],
          );
          return `<tr><td>${productName}</td><td><bdi dir="ltr">${displayDigits(p.sku)}</bdi></td><td><input class="qty-input" type="text" inputmode="numeric" value="${displayDigits(item.quantity)}" data-qty="${index}" aria-label="${d.qty} ${productName}"></td><td><bdi dir="ltr">${money(p.cost)}</bdi></td><td><bdi dir="ltr">${money(item.quantity * p.cost)}</bdi></td><td><button class="remove-item" type="button" data-remove="${index}">${d.remove}</button></td></tr>`;
        })
        .join("")
    : `<tr><td class="empty-items" colspan="6">${d.empty}</td></tr>`;
  const selected = $("#supplierSelect").value;
  $("#summarySupplier").textContent = displayDigits(
    suppliers.find((s) => s.id === selected)?.[lang] || "—",
  );
  $("#summaryItems").textContent = displayDigits(items.length);
  const date = $("#deliveryDate").value;
  $("#deliveryDateLabel").value = formatDeliveryDate(date);
  $("#summaryDate").textContent = date ? monthName(date) : "—";
  const total = items.reduce(
    (sum, item) =>
      sum +
      item.quantity *
        (products.find((p) => p.id === item.productId)?.cost || 0),
    0,
  );
  $("#summaryTotal").textContent = `${d.currency} ${money(total)}`;
  renderSupplierMenu();
}
function addProduct(id) {
  const existing = items.find((i) => i.productId === id);
  if (existing) existing.quantity += 1;
  else items.push({ productId: id, quantity: 1 });
  render();
}
function setLanguage(next) {
  lang = next === "ar" ? "ar" : "en";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localizeControls();
  render();
  renderCalendar();
  try {
    localStorage.setItem("supplier-search-lang", lang);
  } catch {}
}
document
  .querySelectorAll("[data-lang]")
  .forEach((b) =>
    b.addEventListener("click", () => setLanguage(b.dataset.lang)),
  );
$("#supplierSelect").addEventListener("change", render);
$("#supplierPickerButton").addEventListener("click", (event) => {
  event.stopPropagation();
  const menu = $("#supplierMenu"),
    open = menu.hidden;
  menu.hidden = !open;
  $("#supplierPickerButton").setAttribute("aria-expanded", String(open));
  if (open) {
    $("#supplierFilter").value = "";
    renderSupplierMenu();
    $("#supplierFilter").focus();
  }
});
$("#supplierFilter").addEventListener("input", renderSupplierMenu);
$("#supplierOptions").addEventListener("click", (event) => {
  const choice = event.target.closest("[data-supplier]");
  if (!choice) return;
  $("#supplierSelect").value = choice.dataset.supplier;
  $("#supplierMenu").hidden = true;
  $("#supplierPickerButton").setAttribute("aria-expanded", "false");
  render();
  $("#supplierPickerButton").focus();
});
$("#addSupplier").addEventListener("click", () => {
  const name = window.prompt(
    lang === "ar" ? "اكتبي اسم المورد الجديد" : "Enter the new supplier name",
  );
  if (!name?.trim()) return;
  const id = `s${Date.now()}`,
    supplier = {
      id,
      en: name.trim(),
      ar: name.trim(),
      product: "Product 1",
      arProduct: "المنتج 1",
      score: 100,
    };
  suppliers.push(supplier);
  const option = document.createElement("option");
  option.value = id;
  option.textContent = supplier.en;
  $("#supplierSelect").append(option);
  $("#supplierSelect").value = id;
  $("#supplierMenu").hidden = true;
  $("#supplierPickerButton").setAttribute("aria-expanded", "false");
  render();
});
$("#deliveryDate").addEventListener("change", render);
$("#openDatePicker").addEventListener("click", (event) => {
  event.stopPropagation();
  const panel = $("#dateCalendar"),
    open = panel.hidden;
  panel.hidden = !open;
  $("#openDatePicker").setAttribute("aria-expanded", String(open));
  if (open) {
    const date = $("#deliveryDate").value;
    if (date)
      calendarMonth = new Date(
        Number(date.slice(0, 4)),
        Number(date.slice(5, 7)) - 1,
        1,
      );
    renderCalendar();
  }
});
$("#dateCalendar").addEventListener("click", (event) => {
  const day = event.target.closest("[data-calendar-date]");
  if (day) {
    $("#deliveryDate").value = day.dataset.calendarDate;
    $("#dateCalendar").hidden = true;
    $("#openDatePicker").setAttribute("aria-expanded", "false");
    render();
    $("#openDatePicker").focus();
    return;
  }
  if (event.target.closest("[data-calendar-prev]"))
    calendarMonth = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth() - 1,
      1,
    );
  else if (event.target.closest("[data-calendar-next]"))
    calendarMonth = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth() + 1,
      1,
    );
  else if (event.target.closest("[data-calendar-clear]")) {
    $("#deliveryDate").value = "";
    render();
  } else if (event.target.closest("[data-calendar-today]")) {
    const today = new Date();
    $("#deliveryDate").value =
      `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    calendarMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    render();
  }
  renderCalendar();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".date-control")) {
    const panel = $("#dateCalendar");
    if (!panel.hidden) {
      panel.hidden = true;
      $("#openDatePicker").setAttribute("aria-expanded", "false");
    }
  }
  if (!event.target.closest(".supplier-picker")) {
    const menu = $("#supplierMenu");
    if (!menu.hidden) {
      menu.hidden = true;
      $("#supplierPickerButton").setAttribute("aria-expanded", "false");
    }
  }
});
$("#itemsBody").addEventListener("change", (e) => {
  const input = e.target.closest("[data-qty]");
  if (!input) return;
  const i = Number(input.dataset.qty);
  items[i].quantity = Math.max(1, Number(asciiDigits(input.value)) || 1);
  render();
});
$("#itemsBody").addEventListener("click", (e) => {
  const button = e.target.closest("[data-remove]");
  if (!button) return;
  items.splice(Number(button.dataset.remove), 1);
  render();
});
$("#addItem").addEventListener("click", () => {
  const id =
    products.find((p) => !items.some((i) => i.productId === p.id))?.id || "p1";
  addProduct(id);
});
$("#productSearch").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault();
  const q = asciiDigits(e.currentTarget.value).trim().toLowerCase();
  const index = products.findIndex(
    (p, i) =>
      p.sku.toLowerCase() === q ||
      asciiDigits(currentCopy().productNames[i]).toLowerCase() === q ||
      `product ${i + 1}` === q,
  );
  if (index >= 0) {
    addProduct(products[index].id);
    e.currentTarget.value = "";
    $("#orderMessage").hidden = true;
  }
});
$("#cancelOrder").addEventListener("click", () => history.back());
$("#saveDraft").addEventListener("click", () => {
  const draft = {
    supplier: $("#supplierSelect").value,
    date: $("#deliveryDate").value,
    items,
  };
  try {
    localStorage.setItem("new-purchase-order-draft", JSON.stringify(draft));
  } catch {}
  $("#orderMessage").textContent = currentCopy().saved;
  $("#orderMessage").hidden = false;
});
$("#submitOrder").addEventListener("click", () => {
  $("#orderMessage").textContent = currentCopy().submitted;
  $("#orderMessage").hidden = false;
});
const usersToggle = $("#usersToggle"),
  usersPanel = $("#usersPanel");
function closeUsersPanel(returnFocus = false) {
  usersPanel.hidden = true;
  usersToggle.setAttribute("aria-expanded", "false");
  if (returnFocus) usersToggle.focus();
}
usersToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = usersPanel.hidden;
  usersPanel.hidden = !open;
  usersToggle.setAttribute("aria-expanded", String(open));
});
document.addEventListener("click", (e) => {
  if (
    !usersPanel.hidden &&
    !e.target.closest("#usersPanel") &&
    !e.target.closest("#usersToggle")
  )
    closeUsersPanel();
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const supplierMenu = $("#supplierMenu");
  if (!supplierMenu.hidden) {
    supplierMenu.hidden = true;
    $("#supplierPickerButton").setAttribute("aria-expanded", "false");
    $("#supplierPickerButton").focus();
    return;
  }
  const calendar = $("#dateCalendar");
  if (!calendar.hidden) {
    calendar.hidden = true;
    $("#openDatePicker").setAttribute("aria-expanded", "false");
    $("#openDatePicker").focus();
    return;
  }
  if (!usersPanel.hidden) closeUsersPanel(true);
});
let saved = "en";
try {
  saved = localStorage.getItem("supplier-search-lang") === "ar" ? "ar" : "en";
  const draft = JSON.parse(
    localStorage.getItem("new-purchase-order-draft") || "null",
  );
  if (draft) {
    if (suppliers.some((s) => s.id === draft.supplier))
      document.querySelector("#supplierSelect").value = draft.supplier;
    if (/^\d{4}-\d{2}-\d{2}$/.test(draft.date || ""))
      document.querySelector("#deliveryDate").value = draft.date;
    if (Array.isArray(draft.items))
      items = draft.items
        .filter(
          (item) =>
            products.some((p) => p.id === item.productId) &&
            Number(item.quantity) > 0,
        )
        .map((item) => ({
          productId: item.productId,
          quantity: Number(item.quantity),
        }));
  }
} catch {}
setLanguage(saved);
