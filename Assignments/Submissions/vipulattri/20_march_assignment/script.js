export const myName = "Vipul";

export function fetchUniversities() {
  fetch("http://universities.hipolabs.com/search?name=middle")
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0 && data[0].web_pages) {
        for(let i =0;i<15;i++){
        document.getElementById("output").innerText += `
          University: ${data[i].name}
          Website: ${data[i].web_pages[i]}
          Country: ${data[i].country}
          Domains: ${data[i].domains.join(", ")}
        `;}
      } else {
        document.getElementById("output").innerText = "No university found.";
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

export const Vipul = fetchUniversities();
