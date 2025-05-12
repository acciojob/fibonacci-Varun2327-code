function fibonacci(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1;
  for (let i = 3; i <= num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function showFibonacci() {
  const input = document.getElementById("num").value;
  const n = parseInt(input);

  if (isNaN(n) || n < 1 || n > 50) {
    document.getElementById("result").textContent = "";
    return;
  }

  document.getElementById("result").textContent = fibonacci(n);
}
