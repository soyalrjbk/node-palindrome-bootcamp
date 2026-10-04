document.querySelector('#clickMe').addEventListener('click', checkPalindrome)

function checkPalindrome(){

  const wordInput = document.querySelector("#wordInput").value.toLowerCase();

  fetch(`/api?word=${wordInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#yourWord").textContent = `You entered: "${data.yourWord}"`
      document.querySelector("#theResult").textContent = `Result: "${data.result}"`
    });
}
