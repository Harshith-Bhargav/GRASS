/*$.ajax({
    method:'GET',
    url:'C:\Users\hp\Documents\OOAD Project\Bootstrap_Data_Table\status.json',
    success:function(response){
        myArray = response.data
        console.log(myArray)
}
})

$("#verify_btn").click(function(event) {
    // Prevent the form from submitting via the browser.
    event.preventDefault();
    buildTable(myArray);
});*/


myArray1 = [
{    
    "SCHOOL_ID":"54561",
    "SCHOOL_NAME":"JJIS",               
    "GRANT_SUBJECT":"Lab",        
    "REQUIRED_AMOUNT":"75000",
    "verify" : 1 
} ,
{
    "SCHOOL_ID":"523561",
        "SCHOOL_NAME":"SSGK",
        "GRANT_SUBJECT":"SCHOLAR",
        "REQUIRED_AMOUNT":"25000",
        "verify" : 1
 },
 {
    "SCHOOL_ID":"52",
        "SCHOOL_NAME":"KVR",
        "GRANT_SUBJECT":"Eco",
        "REQUIRED_AMOUNT":"15000",
        "verify" : 1
 }
]




buildTable(myArray1)

function buildTable(data) {
    var table = document.getElementById('verification') 
    
   for(var i=0; i<data.length; i++){
       if(data[i].verify === 1)
       {
        var row =  
                    `<tr>
                    <td id='gid'> ${data[i].SCHOOL_ID}</td>
                    <td id='gid'> ${data[i].SCHOOL_NAME}</td>
                    <td id='gsub'> ${data[i].GRANT_SUBJECT}</td>
                    <td id='reqamt'> ${data[i].REQUIRED_AMOUNT}</td>
                    </tr>`
        table.innerHTML += row      
       }
    } 
}