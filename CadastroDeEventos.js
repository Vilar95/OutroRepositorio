let ColocarData = new Date('1995-08-05');
let date = new Date('2022-01-18');
let IdadeCadastro =26
let listaCadastrados = ["Pedro","Augusto","Clara","Felipe","Helena","Joyce"]

if(ColocarData < date) {
    console.log("Prosseguir cadastro")
}else{
    console.log("Não foi possível continuar seu cadastro.")
}
if(IdadeCadastro >=18) {
    console.log("Prosseguir cadastro.")
}else{
    console.log("Não foi possível continuar seu cadastro.")
}
if (listaCadastrados.length <= 99) {
    console.log("Cadastro Finalizado.")
}else {
    console.log("Não é possível concluir seu cadastro, número de participantes ultrapassado.")
}