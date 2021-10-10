function initListeners(){
    $("nav a").click(function(e){
        //this stores the id for the anchor tags
        let aID=e.currentTarget.id;

        if(aID=="home"){
            $("nav").css("background-color","black");

            $("nav a").css("color","yellow");

            document.title="Home";
        }

        if(aID=="defense"){
        
            $("nav a").css("color","black");
            $("nav").css("background-color","yellow");

            document.title="Defense";
            
        }

        if(aID=="offense"){
            $("nav").css("background-color","black");

            $("nav a").css("color","yellow");

            document.title="Offense";
        }

        if(aID=="equipment"){
        
            $("nav a").css("color","black");
            $("nav").css("background-color","yellow");

            document.title="Equipment";
            
        }

        let contentID = aID + "Content";

        MODEL.updateView(contentID);
        
 
    });
}

$(document).ready(function () {
    console.log("hey girl hey");
    initListeners();
    MODEL.updateView("homeContent");
});

