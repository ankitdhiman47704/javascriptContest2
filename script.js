let employee_name = document.getElementById("name");
let employee_age = document.getElementById("age");
let employee_profession = document.getElementById("profession")
let btn = document.getElementById("add");
let tbody1 = document.querySelector("tbody");
let alert = document.querySelector("span");



let arr = new Array();
btn.addEventListener("click", additem);






let i=0;


function additem(){
    let obj = new Object();
    if(employee_name.value && employee_age.value && employee_profession.value){
    
//console.log(list);
//appending the new element to my documnet body
i++;
let row = document.createElement("tr");//element create
    row.id = -i;
let listitem0 = document.createElement("td");
listitem0.textContent = i;
obj.id =i;
listitem0.classList.add("employee-id");
row.append(listitem0);

let listitem1 = document.createElement("td");
listitem1.textContent = employee_name.value;
obj.name = employee_name.value;
listitem1.classList.add("employee-name")
row.append(listitem1);

let listitem2 = document.createElement("td");
listitem2.innerText =employee_age.value;
obj.age = employee_age.value
listitem2.classList.add("employee-age")
row.append(listitem2);

let listitem3 = document.createElement("td");
listitem3.innerText =employee_profession.value;
obj.profession = employee_profession.value;
listitem3.classList.add("employee-profession")
row.append(listitem3);

let listitem4 = document.createElement("td");
let btns = document.createElement("button")
btns.id = i;
btns.addEventListener("click", ()=>{delete1(btns.id)})

btns.innerText = "Remove"
listitem4.append(btns);
listitem4.classList.add("remove")
row.append(listitem4);


tbody1.append(row);
arr.push(obj); 
 employee_name.value ="";
 employee_age.value ="";
 employee_profession.value="";
 alert.innerText = "Successfully Added!!!"
alert.style.color ="green";
}
else{
   alert.innerText = "All the fields are required!!!"
   alert.style.color ="red";

}  
   
}




function delete1(btn){
    let row1 = document.getElementById(`-${btn}`);
    row1.remove();
    arr.splice(btn-1 ,btn-1);
}