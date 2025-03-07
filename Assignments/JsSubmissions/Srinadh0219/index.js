const tableData=document.getElementById("super");
tableData.addEventListener("click" , createTable);
const createTable=() =>{
  console.log("Hi");
  


  const s=document.getElementById("ram");
  s.innerHTML="";
const a=document.getElementById("child1").value;
const b=document.getElementById("child2").value;

const table=document.createElement("table");
for(let i=0;i<a;i++)
{
    const rows=document.createElement("tr");
    for(let j=0;j<b;j++)
    {
      const cols=document.createElement("th") ;
      rows.appendChild(cols);
      
    }
    table.appendChild(rows);
}
s.appendChild(table);
}





