let number = parseInt(document.getElementById("contador").textContent);

function colors(){
    if (number < 0){
        document.getElementById("contador").style.color = "red";
    } else if(number > 0){
        document.getElementById("contador").style.color = "green";
    }else{
        document.getElementById("contador").style.color = "black";
    }
    return;

};

document.getElementById("diminuir").addEventListener("click", function(){
    number--;
    document.getElementById("contador").textContent = number;

    colors();
});
document.getElementById("aumentar").addEventListener("click", function(){
    number++;
    document.getElementById("contador").textContent = number;
    
    colors();
});
document.getElementById("resetar").addEventListener("click", function(){
    number=0;
    document.getElementById("contador").textContent = number;

    colors();
});