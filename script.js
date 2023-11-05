let displayvalue="";
function inserirvalor(value){
    displayvalue+=value;
    document.getElementById("display").value=displayvalue;  
}
function apagar(){
    displayvalue="";
    document.getElementById("display").value="";  
}
function calculte(){
    try{
        const result= eval(displayvalue);
        document.getElementById('display').value=result;
        displayvalue = result.toString()
    }catch (error){
        document.getElementById('display').value="Error";
    }
}
