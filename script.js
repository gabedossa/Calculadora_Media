const form = document.getElementById("formAtividade");
const imgAprovado = `<img src="./img/aprovado.png" alt="Emoji celebrando" />`;
const imgReprovado = `<img src="./img/reprovado.png" alt="Emoji triste" />`;
const atividades = [];
const notas = [];
const notaMinima = parseFloat(prompt("Digite a nota mínima para aprovação:"));

const spanAprovado = '<span class="resultado aprovado"> Aproado </span>'
const spanReprovado = '<span class="resultado reprovado"> Reproado </span>'

let linhas = "";
form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
});

function adicionaLinha() {
  const inputNomeAtividade = document.getElementById("nome-ativiade");
  const inputNotaAtividade = document.getElementById("nota-ativiade");

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
      
        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td> `;
        linha += `<td>${
          inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado
        }</td> `;
        linha += `</tr> `;
  
    linhas += linha;


  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}
