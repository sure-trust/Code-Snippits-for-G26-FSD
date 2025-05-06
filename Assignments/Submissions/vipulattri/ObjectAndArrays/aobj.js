StudentDetails  = [{
    Stdname: "Vipul",
    marks:90,
},
{
    Stdname: "Vishal",
    marks:80,
},
{
    Stdname: "Vikas",
    marks:70,
},
{
    Stdname: "Rohan",
    marks:60,
},
{
    Stdname: "Mohan",
    marks:50,
},
{
    Stdname: "Rahul",
    marks:40,
},
{
    Stdname: "Raj",
    marks:30,
},
{
    Stdname: "Rajesh",
    marks:20,
},
{
    Stdname: "Ramesh",
    marks:10,
},
{
    Stdname: "Ravi",
    marks:5,
},
]

// we want to print the student name who have score the highest marks 
let max = StudentDetails[0].marks;
let name = StudentDetails[0].Stdname;

for(let i=1;i<StudentDetails.length;i++){
    if(max<StudentDetails[i].marks){
        max = StudentDetails[i].marks;
        name = StudentDetails[i].Stdname;
    }
}

console.log("The student who have scored the highest marks is "+name);