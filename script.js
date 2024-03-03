const URL = `https://api.adviceslip.com/advice`;
const btn = document.querySelector(".box-img");
const fetchData = () => {
  fetch(`${URL}`)
    .then((respone) => {
      if (!respone.ok) {
        throw new Error("Network response was not ok");
      }
      return respone.json();
    })
    .then((data) => {
      const { id, advice } = data.slip;
      update(id, advice);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

function update(id, advice) {
  document.getElementById("id-quote").innerHTML = `advice #${id}`;
  document.getElementById("quote").innerHTML = `${advice}`;
}
btn.addEventListener("click", fetchData);
