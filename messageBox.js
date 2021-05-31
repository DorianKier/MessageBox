// notification content
var contentAlert = "Accepted Cookie?";

// option in message box;
var optionOne = '<div id="optionOne" style="width: 30%; background-color: #00aa00; color: #fff; float: left; text-align: center; padding: 10px; cursor: pointer;">accepted</div>';
var optionTwo = '<div id="optionTwo" style="width: 30%; background-color: #aa0000; color: #fff; float: right; text-align: center; padding: 10px; cursor: pointer;">dissagre</div>';

// code message box
function messageBox(){

    $(document).ready(function(){

        // message box style and blur content page
        $("#messageBoxAlertJS1234").css({ opacity: "0", filter: "blur(0)", position: "absolute", top: "35%", width: "250px", height: "90px", padding: "5px", left: "40%", border: "1px solid #000"});
        $("main").animate({ opacity: "0.5", filter: "blur(2px)" }, 300);

        // connected message and options
        var completeContetntBox = '<p>'+contentAlert+'</p>'+optionOne+optionTwo;

        // create message box to page
        $("#messageBoxAlertJS1234").html(completeContetntBox);
        $("#messageBoxAlertJS1234").animate({ opacity: "1", filter: "blur(0)"}, 300);

        // reaction on click option
        $("#optionOne").click(function(){
            $("main").animate({ opacity: "1", filter: "blur(0)" }, 300);
            $("#messageBoxAlertJS1234").css({ display: "none" });
        });
        $("#optionTwo").click(function(){
            window.location="http://google.pl";
        });
    });

};