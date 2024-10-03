let nome, idade, cidade

const aluno = {}

aluno.nome = prompt("Digite seu nome:")
aluno.idade = Number (prompt("Digite sua idade:"))
aluno.cidade = prompt("Digite sua cidade:")

console.log(aluno)

let num = Number(prompt("Digite '0' para atualizar a idade ou '1' para atualizar a cidade:"))

    if(num == 0){
        aluno.idade = Number (prompt("Digite sua idade:"))
    }
        if(num == 1){
            aluno.cidade = prompt("Digite sua cidade:")
        }

 console.log(aluno)

