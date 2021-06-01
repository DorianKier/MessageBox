// notification content
var contentAlert = "Accept Cookie?";

// option in message box;
var optionOne = '<div id="optionOne" style="width: 30%; background-color: #00aa00; color: #fff; float: left; text-align: center; padding: 10px; cursor: pointer;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">accept</div>';
var optionTwo = '<div id="optionTwo" style="width: 30%; background-color: #aa0000; color: #fff; float: right; text-align: center; padding: 10px; cursor: pointer;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">dissagre</div>';

// code message box
function messageBox(){
    $(document).ready(function(){
        // fix style for message box to secound open message
        $("#messageBoxAlertJS1234").css({ display: "block" });

        // message box style and blur content page
        $("#messageBoxAlertJS1234").css({ opacity: "0", filter: "blur(0)", position: "absolute", top: "35%", width: "250px", minHeight: "90px", padding: "5px", left: "40%", border: "3px double #000", borderRadius: "5px", textAlign: "center", backgroundColor: "#aaa", color: "#000"});
        $("main").animate({ opacity: "0.5", filter: "blur(10px)" }, 300);

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