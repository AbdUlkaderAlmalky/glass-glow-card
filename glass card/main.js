const listas = document.querySelector(".control");

for (let i = listas.length ; i<5 ; i+=2){
    console.log(listas);
    i++;
    document.write("first " + [i].length);
};