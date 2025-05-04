<<<<<<< HEAD
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");
const yearSelect = document.getElementById("year");
const months = ["Month", "Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
months.forEach(month=>{
    let option = document.createElement("option");
    option.text = month;
    option.value = month;
    monthSelect.appendChild(option);
});
for(let i=1;i<=31;i++){
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    daySelect.appendChild(option);
}
for(let i=new Date().getFullYear();i>=1900;i--){
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    yearSelect.appendChild(option);
=======
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");
const yearSelect = document.getElementById("year");
const months = ["Month", "Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
months.forEach(month=>{
    let option = document.createElement("option");
    option.text = month;
    option.value = month;
    monthSelect.appendChild(option);
});
for(let i=1;i<=31;i++){
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    daySelect.appendChild(option);
}
for(let i=new Date().getFullYear();i>=1900;i--){
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    yearSelect.appendChild(option);
>>>>>>> upstream/main
}