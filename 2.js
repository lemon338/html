let total = 0; // 初始总和

function add() {
  // 1. 获取输入框的值
  const input = document.getElementById("math");
  const value = Number(input.value);

  // 2. 检查输入是否是合法数字
  if (isNaN(value)) {
    alert("请输入有效的数字！");
    input.value = ""; // 清空输入框
    return;
  }

  // 3. 加到总和里
  total += value;

  // 4. 显示最新结果
  document.getElementById("output").innerText = "当前总和：" + total;

  // 5. 清空输入框，等待下一次输入
  input.value = "";
}

function substraction(){
    const input=document.getElementById("math");
    const value=Number(input.value);

    if (isNaN(value)) {
        alert("请输入有效的数字！");
        input.value = ""; // 清空输入框
        return;
      }
      total-=value;
      document.getElementById("output").innerText = "当前总和：" + total;
      input.value="";


}

function multiplication(){
        const input=document.getElementById("math");
        const value=Number(input.value);
    
        if (isNaN(value)) {
            alert("请输入有效的数字！");
            input.value = ""; // 清空输入框
            return;
          }
          total=total*value;
          document.getElementById("output").innerText = "当前总和：" + total;
          input.value="";
}

function division(){
    const input=document.getElementById("math");
    const value=Number(input.value);

    if (isNaN(value)) {
        alert("请输入有效的数字！");
        input.value = ""; // 清空输入框
        return;
      }
      total=total/value;
      document.getElementById("output").innerText = "当前总和：" + total;
      input.value="";
    }