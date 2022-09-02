var formData;
    $("#new_grant_post").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });

function ajaxPost() {

        // PREPARE FORM DATA
        formData = {
            name : $("#school_name").val(),
            unique_id : $("#unique_id").val(),
            amount : $("#amount").val(),
            subject : $("#subject").val(),
            verify : 0
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
            url : "/School/grant",
            data : json,
            //dataType : 'json',
            error : function(e) {
                alert("Error !")
                console.log("ERROR: ", e);
            }
        });

    }
