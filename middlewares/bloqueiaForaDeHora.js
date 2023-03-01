let hora = (new Date()).getHours();

// Criar middleware bloqueiaForaDeHora
// Verificar se hora é maior que 0 e menor 19
// Nesse caso, mandar mensagem de "Volte mais tarde"
// Caso contrário, deixar req ir adiante...