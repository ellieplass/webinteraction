
function newFont(){
    
    var font = document.getElementById("myFonts").value;
    document.getElementById("name").style.fontFamily= font;
      
}


function newBackground(){
    var background = document.getElementById("myBackground").value;
    
    document.body.style.backgroundImage = "url(" + background + ")";
    
    console.log("hi");
    
}

    function boldFunction(){
	var checkBox = document.getElementById("boldCheck");
	if ( checkBox.checked == true) {
		document.getElementById("name").style.fontWeight= 'bold';
	}
	else{
		// if false do this
		document.getElementById("name").style.fontWeight= 'inherit';

	}
}
    


function italicFunction(){
    
    var checkBox= document.getElementById("italicCheck");
    
    if(checkBox.checked == true){
        document.getElementById("name").style.fontStyle = 'italic';
        
        
    } else{
        
        document.getElementById("name").style.fontStyle = 'inherit';
    }
    
    
}

function sizeFunction(){

	var newSize= document.getElementById("size").value;
	document.getElementById("name").style.fontSize = newSize + "px";

}

//function backFunction(){
//    var newColor = document.getElementById("backColor").value;
//    
//    document.style.background(255, newColor, 255);
//    
//    
//}


function redFunction(){
    
    var checkBox= document.getElementById("redCheck");
    
    if(checkBox.checked == true){
        document.getElementById("name").style.color = "red";
        
        
    } else{
        
        document.getElementById("name").style.color = 'inherit';
    }
    
    
}

function greenFunction(){
    
    var checkBox= document.getElementById("greenCheck");
    
    if(checkBox.checked == true){
        document.getElementById("name").style.color = "green";
        
        
    } else{
        
        document.getElementById("name").style.color = 'inherit';
    }
    
    
}
   
function yellowFunction(){
    
    var checkBox= document.getElementById("yellowCheck");
    
    if(checkBox.checked == true){
        document.getElementById("name").style.color = "yellow";
        
        
    } else{
        
        document.getElementById("name").style.color = 'inherit';
    }
    
    
}

   
function blueFunction(){
    
    var checkBox= document.getElementById("blueCheck");
    
    if(checkBox.checked == true){
        document.getElementById("name").style.color = "blue";
        
        
    } else{
        
        document.getElementById("name").style.color = 'inherit';
    }
    
    
}

    
    
