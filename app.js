function onMyFormSubmit(){
    var KeepFormData= readFromData();
    console.log(KeepFormData);
    insertNewRecord(KeepFormData)
    reset();
    
}

function readFromData(){
    var formData= {};
    formData['fullName']=document.getElementById('fullName').value;
    formData['empCode']=document.getElementById('empCode').value;
    formData['salary']=document.getElementById('salary').value;
    formData['city']=document.getElementById('city').value;
    
    return formData;
}

function insertNewRecord(data){
    var table=document.getElementById('tableBody');
    var newRow=table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
    cell1.innerHTML=data.fullName;
    cell2.innerHTML=data.empCode;
    cell3.innerHTML=data.salary;
    cell4.innerHTML=data.city;
    cell5.innerHTML=` <a>Edit</a>
    <a>Delete</a> `;

}

function reset(){
    document.getElementById('fullName').value="";
    document.getElementById('empCode').value="";
    document.getElementById('salary').value="";
    document.getElementById('city').value="";
    
}