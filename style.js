let name =document.querySelector("#name")
let age =document.querySelector("#age")
let profession =document.querySelector("#profession")
let nationality =document.querySelector("#nationality")
let address =document.querySelector("#address")
let submit =document.querySelector("#submits")

let addBookList= document.querySelector("#add-booklist")

submit.addEventListener("click",function(e){
    e.preventDefault();

    if(name.value==""){
        alert("bai name den nai")
    }
    else if(age.value==""){
        alert("bai age den nai")
    }
    else if(profession.value==""){
        alert("bai apner pesha den nai")
    }
    else if(nationality.value==""){
        alert("bai nationality den nai")
    }
    else if(address.value==""){
        alert("bai addresss den nai")
    }
    else{
        const newRowCreat =document.createElement("tr");

        const newname = document.createElement("td");
        newRowCreat.appendChild(newname);
        newname.innerHTML = name.value;
        
        const newage = document.createElement("td");
        newRowCreat.appendChild(newage);
        newage.innerHTML = age.value;

        const newprofession = document.createElement("td");
        newRowCreat.appendChild(newprofession);
        newprofession.innerHTML = profession.value;
        
        const newnationality = document.createElement("td");
        newRowCreat.appendChild(newnationality);
        newnationality.innerHTML = nationality.value;

        const newaddress = document.createElement("td");
        newRowCreat.appendChild(newaddress);
        newaddress.innerHTML = address.value;

        addBookList.appendChild(newRowCreat);
   
        // let newRow= document.createElement("tr");

        // let newname = document.createElement("td");
        // newRow.appendChild(newname);
        // newname.innerHTML=name.value;
       
        // let newage =document.createElement("td");
        // newRow.appendChild(newage);
        // newage.innerHTML=age.value;

        // let newprofession =document.createElement("td");
        // newRow.appendChild(newprofession);
        // newprofession.innerHTML=profession.value;

        // let newnationality =document.createElement("td");
        // newRow.appendChild(newnationality);
        // newnationality.innerHTML=nationality.value;

        // let newaddress =document.createElement("td");
        // newRow.appendChild(newaddress);
        // newaddress.innerHTML=address.value;
        
        // addBookList.appendChild(newRow);

        // name.value="";
        // age.value="";
        // profession.value="";
        // nationality.value="";
        // address.value="";
    }
})