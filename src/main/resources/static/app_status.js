// $.getJSON("status.json",function(data){
//     var Gstatus='';
//     $.each(data,function(key,value1){
//         Gstatus +='<tr>';
//         Gstatus +='<tr>' +value1.GRAND_ID+'<td>';
//         Gstatus +='<tr>'+value1.GRANT_SUBJECT+'<td>';
//         Gstatus +='<tr>'+value1.REQUIRED_AMOUNT+'<td>';
//         Gstatus +='<tr>'+value1.VERIFY+'<td>';
//         Gstatus +='<tr>'+value1.STATUS+'<td>';
//         Gstatus +='<tr>'+value1.APPROVED_AMOUNT+'<td';
//         Gstatus +='</tr>';
//     });
//     $('#Applied_Grant_Status').append(Gstatus);

    // $(document).ready(function()
    //    {
    //       $(".btn-group .btn").click(function()
    //          {
	// 	        var inputValue = $(this).find("input").val();
    //               if(inputValue != 'all')
    //               {
	// 		       var target = $('table tr[data-status="' + inputValue + '"]');
	// 		        $("table tbody tr").not(target).hide();
	// 		         target.fadeIn();
	// 	          } else {
	// 		          $("table tbody tr").fadeIn();
	// 	            }
	//         });
	//     // Changing the class of status label to support Bootstrap 4
    //        var bs = $.fn.tooltip.Constructor.VERSION;
    //      var str = bs.split(".");
    //      if(str[0] == 4)
    //        {
    //           $(".label").each(function()
    //            {
    //     	     var classStr = $(this).attr("class");
    //             var newClassStr = classStr.replace(/label/g, "badge");
    //              $(this).removeAttr("class").addClass(newClassStr);
    //             });
    //         }
// });

// function buildTable(i,data){
//     var table =
// }


// using link
// $.ajax({
//     method:'GET',
//     url:'C:\Users\hp\Documents\OOAD Project\Bootstrap_Data_Table\status.json',
//     success:function(response){
//         myArray = response.data
//         buildTable(myArray)
//         console.log(myArray)
//     }
// })
var myArray = [
    {    
        "GRANT_ID":"54561",               
        "GRANT_SUBJECT":"SCHOLAR",        
        "REQUIRED_AMOUNT":"75000",  
        "VERIFY": "PENDING",
        "STATUS":"",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"67845",
        "GRANT_SUBJECT":"BUILDING & MAINTAINANCE",
        "REQUIRED_AMOUNT":"100000",
        "VERIFY": "VERIFY",
        "STATUS":"PENDING",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"56784",
        "GRANT_SUBJECT":"SCHOLAR",
        "REQUIRED_AMOUNT":"55000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"55000"

    } ,
    {
        "GRANT_ID":"384216",
        "GRANT_SUBJECT":"BUILDING & MAINTAINANCE",
        "REQUIRED_AMOUNT":"175000",
        "VERIFY": "PENDING",
        "STATUS":"",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"45873",
        "GRANT_SUBJECT":"NATIONAL_DAY",
        "REQUIRED_AMOUNT":"55000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"50000"

    } ,
    {
        "GRANT_ID":"23186",
        "GRANT_SUBJECT":"MIDDAY_MEAL",
        "REQUIRED_AMOUNT":"90000",
        "VERIFY": "VERIFIED",
        "STATUS":"PARIALLY_APPROVED",
        "APPROVED_AMOUNT":"45000"

    } ,
    {
        "GRANT_ID":"941203",
        "GRANT_SUBJECT":"ACHIEVERS",
        "REQUIRED_AMOUNT":"25000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"25000"

    } ,
    {
        "GRANT_ID":"548756",
        "GRANT_SUBJECT":"SCHOLAR",
        "REQUIRED_AMOUNT":"7500",
        "VERIFY": "VERIFIED",
        "STATUS":"REJECTED",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"86436",
        "GRANT_SUBJECT":"TEACHING_AIDS",
        "REQUIRED_AMOUNT":"65000",
        "VERIFY": "PENDING",
        "STATUS":"",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"493206",
        "GRANT_SUBJECT":"NATIONAL_DAY",
        "REQUIRED_AMOUNT":"75000",
        "VERIFY": "VERIFIED",
        "STATUS":"REJECTED",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"320056",
        "GRANT_SUBJECT":"BUILDING & MAINTAINANCE",
        "REQUIRED_AMOUNT":"58000",
        "VERIFY": "VERIFIED",
        "STATUS":"REJECTED",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"110051",
        "GRANT_SUBJECT":"INFO_TECH",
        "REQUIRED_AMOUNT":"275000",
        "VERIFY": "VERIFIED",
        "STATUS":"PARTIALLY_APPROVED",
        "APPROVED_AMOUNT":"75000"

    } ,
    {
        "GRANT_ID":"63956",
        "GRANT_SUBJECT":"ACHIEVERS",
        "REQUIRED_AMOUNT":"5000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"5000"

    } ,
    {
        "GRANT_ID":"647210",
        "GRANT_SUBJECT":"MIDDAY_MEALS",
        "REQUIRED_AMOUNT":"65000",
        "VERIFY": "VERIFIED",
        "STATUS":"REJECTED",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"841006",
        "GRANT_SUBJECT":"SCHOLAR",
        "REQUIRED_AMOUNT":"10000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"10000"

    } ,
    {
        "GRANT_ID":"23186",
        "GRANT_SUBJECT":"BUILDING & MAINTAINANCE",
        "REQUIRED_AMOUNT":"12050",
        "VERIFY": "VERIFIED",
        "STATUS":"REJECTED",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"56784",
        "GRANT_SUBJECT":"INFO_TECH",
        "REQUIRED_AMOUNT":"77000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"77000"

    } ,
    {
        "GRANT_ID":"841006",
        "GRANT_SUBJECT":"iNFO_TECH",
        "REQUIRED_AMOUNT":"85000",
        "VERIFY": "VERIFIED",
        "STATUS":"PARIALLY_APPROVED",
        "APPROVED_AMOUNT":"70000"

    } ,
    {
        "GRANT_ID":"841006",
        "GRANT_SUBJECT":"MODERNIZATION",
        "REQUIRED_AMOUNT":"55000",
        "VERIFY": "PENDING",
        "STATUS":"",
        "APPROVED_AMOUNT":""

    } , 
    {
        "GRANT_ID":"384216",
        "GRANT_SUBJECT":"MODERNIZATION",
        "REQUIRED_AMOUNT":"10000",
        "VERIFY": "VERIFIED",
        "STATUS":"REJECTED",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"67845",
        "GRANT_SUBJECT":"INFO_TECH",
        "REQUIRED_AMOUNT":"167000",
        "VERIFY": "PENDING",
        "STATUS":"",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"54561",
        "GRANT_SUBJECT":"TECHING_AID",
        "REQUIRED_AMOUNT":"97000",
        "VERIFY": "VERIFIED",
        "STATUS":"PARTIALLY_APPROVED",
        "APPROVED_AMOUNT":"45000"

    } ,
    {
        "GRANT_ID":"56784",
        "GRANT_SUBJECT":"MIDDAY_MEAL",
        "REQUIRED_AMOUNT":"70000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"70000"

    } ,
    {
        "GRANT_ID":"86546",
        "GRANT_SUBJECT":"SCHOLAR",
        "REQUIRED_AMOUNT":"12500",
        "VERIFY": "PENDING",
        "STATUS":"",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"176506",
        "GRANT_SUBJECT":"ACHIEVERS",
        "REQUIRED_AMOUNT":"10400",
        "VERIFY": "VERIFIED",
        "STATUS":"PARTIALLY_APPROVED",
        "APPROVED_AMOUNT":"6670"

    } ,
    {
        "GRANT_ID":"841006",
        "GRANT_SUBJECT":"TEACHING_AIDS",
        "REQUIRED_AMOUNT":"23000",
        "VERIFY": "PENDING",
        "STATUS":"",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"75360",
        "GRANT_SUBJECT":"NATIONAL_DAY",
        "REQUIRED_AMOUNT":"7500",
        "VERIFY": "PENDING",
        "STATUS":"",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"10623",
        "GRANT_SUBJECT":"INFO_TECH",
        "REQUIRED_AMOUNT":"207000",
        "VERIFY": "VERIFIED",
        "STATUS":"REJECTED",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"100069",
        "GRANT_SUBJECT":"SCHOLAR",
        "REQUIRED_AMOUNT":"65000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"65000"

    } ,
    {
        "GRANT_ID":"86546",
        "GRANT_SUBJECT":"BUILDING & MAINTAINANCE",
        "REQUIRED_AMOUNT":"85000",
        "VERIFY": "VERIFIED",
        "STATUS":"PARTIALLY_APPROVED",
        "APPROVED_AMOUNT":"40000"

    } ,
    {
        "GRANT_ID":"45006",
        "GRANT_SUBJECT":"MIDDAY_MEAL",
        "REQUIRED_AMOUNT":"67000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"67000"

    } ,
    {
        "GRANT_ID":"221006",
        "GRANT_SUBJECT":"NATIONAL_DAY",
        "REQUIRED_AMOUNT":"12030",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"12030"

    } ,
    {
        "GRANT_ID":"110200",
        "GRANT_SUBJECT":"MIDDAY_MEALS",
        "REQUIRED_AMOUNT":"54000",
        "VERIFY": "APPROVED",
        "STATUS":"PARYIALLY_APPROVED",
        "APPROVED_AMOUNT":"32000"

    } ,
    {
        "GRANT_ID":"776896",
        "GRANT_SUBJECT":"SCHOLAR",
        "REQUIRED_AMOUNT":"22000",
        "VERIFY": "VERIFIED",
        "STATUS":"REJECTED",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"776896",
        "GRANT_SUBJECT":"BUILDING & MAINTAINANCE",
        "REQUIRED_AMOUNT":"120000",
        "VERIFY": "PENDING",
        "STATUS":"",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"776896",
        "GRANT_SUBJECT":"MIDDAY_MEALS",
        "REQUIRED_AMOUNT":"25000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"25000"

    }, 
    {
        "GRANT_ID":"22566",
        "GRANT_SUBJECT":"SCHOLAR",
        "REQUIRED_AMOUNT":"17000",
        "VERIFY": "PENDING",
        "STATUS":"",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"623415",
        "GRANT_SUBJECT":"MODERNISATION",
        "REQUIRED_AMOUNT":"52040",
        "VERIFY": "VERIFIED",
        "STATUS":"PARTIALLY_APPROVED",
        "APPROVED_AMOUNT":"25220"

    } ,
    {
        "GRANT_ID":"24306",
        "GRANT_SUBJECT":"NATIONAL_DAY",
        "REQUIRED_AMOUNT":"60000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"11906",
        "GRANT_SUBJECT":"TEACHING_AIDS",
        "REQUIRED_AMOUNT":"66000",
        "VERIFY": "VERIFIED",
        "STATUS":"PENDING",
        "APPROVED_AMOUNT":""

    } ,
    {
        "GRANT_ID":"11906",
        "GRANT_SUBJECT":"ACHIEVERS",
        "REQUIRED_AMOUNT":"82000",
        "VERIFY": "VERIFIED",
        "STATUS":"APPROVED",
        "APPROVED_AMOUNT":"82000"

    } 

]

buildTable(myArray)

function buildTable(data){
    var table = document.getElementById('Applied_Grant_status') 
    
   for(var i=0; i<data.length; i++){
       var row = `<tr>
      
                    <td> ${data[i].GRANT_ID}</td>
                    <td> ${data[i].GRANT_SUBJECT}</td>
                    <td> ${data[i].REQUIRED_AMOUNT}</td>
                    <td> ${data[i].VERIFY}</td>
                    <td> ${data[i].STATUS}</td>
                    <td> ${data[i].APPROVED_AMOUNT}</td>

                  </tr>`

        table.innerHTML += row          
                    
   } 
}