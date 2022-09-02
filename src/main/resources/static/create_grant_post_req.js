var formData;
    $("#signup_post1").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {

        // PREPARE FORM DATA
        formData = {
            //user : $("select").val(),
            desc : $("#g_desc").val(),
            name : $("#g_name").val(),
            min_amnt : $("#min_amt").val(),
            max_amnt : $("#max_amt").val(),
            activation : $("#a_date").val(),
            deactivation : $('#da_date').val(),

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
            url : "/grant",
            data : json,
            //dataType : 'json',
            error : function(e) {
                alert("This Grant is already exist in database !")
                console.log("ERROR: ", e);
            }
        });

    }