var myArray = [];
$.ajax({
     method:'GET',
     url:'/grant/view',
     success:function(response){
        myArray = response
        console.log(myArray)
         buildTable(myArray)
         console.log(myArray)
     }
})
buildTable(myArray)
console.log(myArray);
function buildTable(data){
    var table = document.getElementById('view_grant')

    for(var i=0; i<data.length; i++){
           var row =
                        `<tr>
                        <td> ${data[i].name}</td>
                        <td> ${data[i].max_amnt}</td>
                        <td> ${data[i].min_amnt}</td>
                        <td> ${data[i].desc}</td>
                        <td> ${data[i].activation}</td>
                        <td> ${data[i].deactivation}</td>

                        </tr>`
           table.innerHTML += row;
    }
}