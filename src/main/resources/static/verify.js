//function buildTable(i,data){
//     var table =
// }


// using link
var myArray = [];
$.ajax({
     method:'GET',
     url:'/grant/user',
     success:function(response){
        myArray = response
         buildTable(myArray)
         console.log(myArray)
     }
})
buildTable(myArray)
console.log(myArray);
function buildTable(data){
    var table = document.getElementById('verification')

    for(var i=0; i<data.length; i++){
           var row =
                        `<tr>
                        <td> ${data[i].name}</td>
                        <td> ${data[i].unique_id}</td>
                        <td> ${data[i].amount}</td>
                        <td> ${data[i].subject}</td>
                        <td><button id='green_btn' class='gb' onclick='flag_1(${i})'>verify</button>
                        <td><button onclick='flag_0()'>reject</button>

                        </tr>`
           table.innerHTML += row;
    }
}



function flag_1(n){


    formData = {
        //user : $("select").val(),
        id : 1,
        verify : 1
    };

    console.log(formData);

    json = JSON.stringify(formData);

    console.log(json);

    //var jsondata = { email : $('#email').val() , name : $('#name').val() , password : $('pass').val() , address : $('#add').val() , reg_no : $('#regno').val() };
    // DO POST
   /* $.ajax({
        type : "PUT",
        contentType : "application/json",
        url : "/grant/user/id",
        data : json,
        //dataType : 'json',
        error : function(e) {
            alert("Try some other way !")
            console.log("ERROR: ", e);
        }
    });*/

    gb = document.getElementsByClassName('gb');
    gb[n].style.background = 'orange';
    gb[n].innerText = 'Verified';
}