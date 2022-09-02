myArray1 = [
    {    
        "SCHOOL_ID":"1",
        "SCHOOL_NAME":"Gardning",                       
        "REQUIRED_AMOUNT":"75000",
        "verify" : 1 
    } ,
    {
        "SCHOOL_ID":"2",
            "SCHOOL_NAME":"Toilets",
            "REQUIRED_AMOUNT":"25000",
            "verify" : 1
     },
     {
        "SCHOOL_ID":"3",
            "SCHOOL_NAME":"labs",
            "REQUIRED_AMOUNT":"175000",
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
                        <td id='reqamt'> ${data[i].REQUIRED_AMOUNT}</td>
                        </tr>`
            table.innerHTML += row      
           }
        } 
    }