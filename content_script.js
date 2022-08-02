function setBackGroundColor(obj){

    var computedStyle = window.getComputedStyle(obj);

    console.log(computedStyle);

    var bgColor = computedStyle.backgroundColor;

    console.log(bgColor);

    var txtColor = computedStyle.color;

    console.log(txtColor);

    bgColor = bgColor.replace("rgba(","");

    bgColor = bgColor.replace(")","");

    var rgba = bgColor.split(",");

    txtColor = txtColor.replace("rgb(","");

    txtColor = txtColor.replace(")","");

    rgbt = txtColor.split(",");

    if (rgba[0] < 35 && rgba[1] < 35 && rgba[2] < 35 && rgba[3] < 3){

        rgba[0] = rgba[0];

        rgba[1] = rgba[1];

        rgba[2] = rgba[2];

        obj.style.backgroundColor= 'rgb(' + rgba[0] + ',' + rgba[1] + ',' + rgba[2] + ')';
    }

    if (rgbt[0] > 237 && rgbt[1] > 237 && rgbt[2] > 237){

        rgbt[0] = 255 - rgbt[0];

        rgbt[1] = 255 - rgbt[1];

        rgbt[2] = 255 - rgbt[2];

        obj.style.color = 'rgb(' + rgbt[0] + ',' + rgbt[1] + ',' + rgbt[2] + ')';;
    }

}
    
function setStyle() {  
        
    var elem = document.querySelectorAll("*");

    if (elem == null){  
            
        console.log("Couldnt find element: Not setting it.");

        return;
        
    }  
        
    for(var i=0; i < elem.length; i++) { 
            
        //setBackGroundColor(elem[i]);

        elem[i].style.fontStyle= "italic";

    }
        
    var iframes = document.getElementsByTagName('iframe');

    if (iframes == null){

        console.log("Couldnt find iframes: Not setting it.");

        return;

    }

    for(var i=0; i < iframes.length; i++){

        var elmnts = iframes[i].contentWindow.document.querySelectorAll("*");

        if(elmnts == null){  
                
            console.log("Couldnt find element: Not setting it.");

            continue;
            
        }  
            
        for(var i=0; i < elmnts.length; i++) { 
                
            //setBackGroundColor(elem[i]);

            elem[i].style.fontStyle= "italic";
            
        }
    }
};

console.log("Starting");

setStyle();

console.log("Done");

