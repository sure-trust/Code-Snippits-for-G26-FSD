const input = document.getElementById("stateInput");
const resultDiv = document.getElementById("result");

input.addEventListener("input", async () => {
  const state = input.value;

  if (state) {
    try {
      const response = await fetch(`/api/users/${state}`);
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();

      resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (err) {
      resultDiv.textContent = `Error: ${err.message}`;
    }
  } else {
    resultDiv.textContent = "";
  }
});
