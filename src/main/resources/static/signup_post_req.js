
    // SUBMIT FORM
    var formData;
    $("#signup_post").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {

        // PREPARE FORM DATA
        formData = {
            username : $("#name").val(),
            email : $("#email").val(),
            password : $("#password").val(),
            role : $("#role").val(),
            unique_id : $("#reg_no").val(),
            address : $("#address").val(),
           // repass : $("repass").val()
        }; 

        console.log(formData);

        json = JSON.stringify(formData);

        console.log(json);

        //var jsondata = { email : $('#email').val() , name : $('#name').val() , password : $('pass').val() , address : $('#add').val() , reg_no : $('#regno').val() };
        // DO POST
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "/School",
            data : json,
            //dataType : 'json',
            error : function(e) {
                alert("Error !")
                console.log("ERROR: ", e);
            }
        });

    }

