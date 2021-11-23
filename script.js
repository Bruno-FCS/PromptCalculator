var valid = 1;
var again = "";
while(again != "n"){
    var n1 = parseFloat(prompt("Digite o primeiro número:"));
    var op = "";
    while(op != "+" && op != "-" && op != "/" && op != "*" && op != "^"){
    op = prompt("Digite qual operação deseja fazer (+,-,/,*,^):");
    } //Garante que o usuário só possa selecionar uma das opções citadas
    var n2 = parseFloat(prompt("Digite o segundo número: "));
    var n3 = n1; //Guarda o número inical para viabilizar a potenciação
    var r;
    switch(op){
        case "+":
        r = n1 + n2;
        break;
        case "-":
        r = n1 - n2;
        break;
        case "/":
        r = n1 / n2;
        break;
        case "*":
        r = n1 * n2;
        break;
        case "^":
            for(var cont = 1; cont < n2; cont++){
                n1 = n1 * n3;
                r = n1;
            }
        break;
        default:
        alert("Houve algum erro, por favor atualize a página e tente novamente");
        break;
    }
    alert("O resultado é: " + r);
    again = ""; //Faz com que o programa peça uma nova checagem após cada conta
    while(again != "s" && again != "n"){
    again = prompt("Deseja fazer outra operação? (s/n)");
    } //Garante que o usuário só possa selecionar uma das opções citadas
} //Possibilita que, caso a resposta seja "s", o usuário faça outra conta