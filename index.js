let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
btns = document.getElementsByTagName("button");

for(let i = 0; i < btns.length; ++i){
    btns[i].addEventListener('click', function(e){
        btnText = btns[i].innerText;
        if(btnText == "C"){
            screen.value = "";
            return;
        }
        else if(btnText == "x"){
            btnText = "*";
        }
        else if(btnText == "="){
            calculateTotal();
            return;
        }
        previous = screen.value;
        screen.value = previous + btnText;
    });
}

function calculateTotal(){
    screen.value = eval(screen.value);
}

// for (item of buttons) {
//     item.addEventListener('click', (e)=>{
//         buttonText = e.target.innerText;
//         previousText = screen.value;
//         screen.value = previousText + buttonText;

//     })
// }