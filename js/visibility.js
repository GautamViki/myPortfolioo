document.addEventListener("visibilitychange", function(){
    if(document.visibilityState == "visible")
    {
        document.title = "VIKAS | SOFTWARE DEVELOPER";
        
    }
    else{
        document.title = "Comback to portfolio";
    }
})