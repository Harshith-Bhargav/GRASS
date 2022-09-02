var myArray = []
$.ajax({
    method:'GET',
    url:'/grant/view',
    success:function(response){
        myArray = response
        console.log(myArray)
        CustomDropDown(myArray)

    }
})

/*const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label_drop").innerHTML;
    optionsContainer.classList.remove("active");
  });
});*/


//console.log(myArray);


//CustomDropDown(myArray)
//console.log(myArray);

function CustomDropDown(data){

  var option= document.getElementById('dd_grant')


    for(var i=0;i<data.length;i++){
        var drop_data= `<option value=${data[i].name}>${data[i].name}</option>`
         //drop_data.innerHTML
         option.innerHTML += drop_data;
    }

}

