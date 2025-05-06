let total = 0; // 初始总和
let operation = ""; // 初始操作记录
let test = 0; // 控制是否第一次输入

function clearss() {
  total = 0;
  operation = "";
  test = 0;
  
  console.log("clear function triggered!"); // 调试输出，确保点击了清空按钮
  document.getElementById("output").innerText = "当前操作：";
  document.getElementById("math").value = "";  // 清空输入框
}


function appendNumber(number) {
  const input = document.getElementById('math');
  input.value += number; // 将数字添加到输入框的值后面
  
  // 如果是第一次输入，初始化 total
  if(test == 0) {
    total = Number(input.value);  // 直接赋值为数字
    operation = input.value.toString();
    test = 1;
    document.getElementById("output").innerText = "当前操作：" + total;
    document.getElementById("math").value = ""; 
  }
}

function add() {
  const input = document.getElementById("math");
  if (input.value === "") {
    return; // 如果输入框为空，直接返回
  }
  
  const value = Number(input.value);

  if (operation === "") {
    operation = value.toString();
  } else {
    operation += ' + ' + value; // 拼接加法操作
  }

  if (isNaN(value)) {
    alert("请输入有效的数字！");
    input.value = ""; // 清空输入框
    return;
  }

  total += value;  // 进行加法

  document.getElementById("output").innerText = "当前操作：" + operation + " = " + total;
  input.value = "";  // 清空输入框
}

function substraction() {
  const input = document.getElementById("math");
  if (input.value === "") {
    return; // 如果输入框为空，直接返回
  }
  
  const value = Number(input.value);

  if (isNaN(value)) {
    alert("请输入有效的数字！");
    input.value = ""; // 清空输入框
    return;
  }

  if (operation === "") {
    operation = value.toString();
  } else {
    operation += ' - ' + value;
  }

  total -= value;  // 进行减法
  document.getElementById("output").innerText = "当前操作：" + operation + " = " + total;
  input.value = "";
}

function multiplication() {
  const input = document.getElementById("math");
  if (input.value === "") {
    return; // 如果输入框为空，直接返回
  }
  
  const value = Number(input.value);

  if (isNaN(value)) {
    alert("请输入有效的数字！");
    input.value = ""; // 清空输入框
    return;
  }

  if (operation === "") {
    operation = value.toString();
  } else {
    operation += ' x ' + value;
  }

  total = total * value;  // 进行乘法
  document.getElementById("output").innerText = "当前操作：" + operation + " = " + total;
  input.value = "";
}

function division() {
  const input = document.getElementById("math");
  if (input.value === "") {
    return; // 如果输入框为空，直接返回
  }
  
  const value = Number(input.value);

  if (isNaN(value)) {
    alert("请输入有效的数字！");
    input.value = ""; // 清空输入框
    return;
  }

  if (value === 0) {
    alert("除数不能为零！");
    input.value = ""; // 清空输入框
    return;
  }

  if (operation === "") {
    operation = value.toString();
  } else {
    operation += ' ÷ ' + value;
  }

  total = total / value;  // 进行除法
  document.getElementById("output").innerText = "当前操作：" + operation + " = " + total;
  input.value = "";
}
