var formData1;
    $("#G_signup_post").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {

        // PREPARE FORM DATA
        formData1 = {
            //user : $("select").val(),
            username : $("#username").val(),
            email : $("#G_email").val(),
            password : $("#G_pass").val(),
            role : $("#G_role").val(),
            unique_id : $("#unique_id").val()
           // repass : $("repass").val()
        }; 

        console.log(formData1);

        json = JSON.stringify(formData1);

        console.log(json);

        //var jsondata = { email : $('#email').val() , name : $('#name').val() , password : $('pass').val() , address : $('#add').val() , reg_no : $('#regno').val() };
        // DO POST
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "/admin",
            data : json,
            //dataType : 'json',
            error : function(e) {
                alert("This Gov_id is already exist in database !")
                console.log("ERROR: ", e);
            }
        });

    }