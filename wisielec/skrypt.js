


let slowo=prompt("Podaj swoje słowo: ");
while(slowo.length<=0)
{
    slowo=prompt("Musisz podać swoje słowo!: ");
}


slowo=slowo.toUpperCase();
let ukryteslowo=[];
const alfabet = [
    "A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", 
    "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "R", "S", 
    "Ś", "T", "U", "W", "Y", "Z", "Ź", "Ż"
];

for(let i=0;i<slowo.length;i++){
    
    if(slowo[i]===" "){
        ukryteslowo[i]=" ";
    }
    else{
        ukryteslowo[i]="_ ";
    }



}
document.getElementById("slowo").innerHTML=ukryteslowo.join("");


for(let i=0;i<alfabet.length;i++){
    document.getElementById("alfabet").innerHTML+=`<section id="l${i}"class="litera" value="${i}" onclick="gdykliknie(${i})">${alfabet[i]}</section>`;

}

let wygrana=0;
let punkty=0;
function gdykliknie(x){
    let poprawna=false;
    let wybranaLitera=alfabet[x];
    
    for(let i=0;i<slowo.length;i++)
    {
       
       
       
       
       
        if(slowo[i]==alfabet[x])
        {
            ukryteslowo[i]=alfabet[x];
            document.getElementById("slowo").innerHTML=ukryteslowo.join(" ");
            poprawna=true;
        }
        
    

    }
    //dodaje klase czy poprawna litera cyz nie
    if(poprawna){
        document.getElementById(`l${x}`).classList.add("poprawnalitera");
        wygrana++;
    }
    else{
        document.getElementById(`l${x}`).classList.add("niepoprawnalitera");
        punkty++;
        document.getElementById("wisielec").innerHTML=`${punkty}/11 <img src="/wisielec/grafika/${punkty+1}.png"/>`;
        
    }
    //sprawdza czy nie ma juz wygranej
    if(wygrana==slowo.length){
        document.getElementById("slowo").innerHTML="Wygrana poprawne słowo to: "+slowo;
    }
    else if(punkty==11){
        document.getElementById("slowo").innerHTML="Przegrana poprawne słowo to: "+slowo;
    }
    


}


