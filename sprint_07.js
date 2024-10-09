const goods = document.querySelector(".goods");
const square = document.querySelector(".square");
const layer = document.querySelector(".layer");
const out1 = document.querySelector(".out-1");
const out2 = document.querySelector(".out-2");
const out3 = document.querySelector(".out-3");
const goodsImg = document.querySelector(".goods-img");

// Функція – витрата
function t01() {
  let expenditures = 0;
  let k = 0;
  let price = 0;

  const value = goods.value;

  // Провірка
  if (square.value < 0) square.value = 1;
  if (layer.value < 0) layer.value = 1;
  if (layer.value > 100) {
    alert("У вас товщина шару більше 100");
  }
  if (square.value.trim() === "") {
    square.value = 1;
  }
  if (layer.value.trim() === "") {
    layer.value = 1;
  }

  switch (value) {
    case "budmajster":
      console.log("Budmajster");
      k = 1.9;
      price = 157;
      break;
    case "ceresit":
      console.log("ceresit");
      k = 2;
      price = 136;
      break;
    case "siltek":
      console.log("siltek");
      k = 2;
      price = 151;
      break;
    case "polimin":
      console.log("polimin");
      k = 1;
      price = 110;
      break;
  }
  expenditures = square.value * layer.value * k;
  out1.textContent = expenditures + " кг";
  out2.textContent = Math.ceil(expenditures / 25) + " мішка / мішків";
  out3.textContent = price * Math.ceil(expenditures / 25) + " uah";
}

// Змінюємо зображення при виборі товару в select
function t02() {
  const value = goods.value;
  // goodsImg.src = "./images/" + value + ".jpg";
  goodsImg.src = `./images/${value}.jpg`;
  out1.textContent = "";
  out2.textContent = "";
  out3.textContent = "";
}

document.querySelector(".b-1").onclick = t01;
goods.onchange = t02;
