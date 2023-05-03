// Busca o formulário na página pelo ID "description"
const form = document.getElementById('description');

// Busca o campo "Valor do financiamento" na página pelo ID "numB"
const nomeBeneficiario = document.getElementById('numB');

// Define a variável "formEvalido" como "false", pois ainda não foi validado
let formEvalido = false;

// Função que valida o formulário antes de ser enviado
function validateForm() {
    // Previne o envio automático do formulário
    event.preventDefault();
    
    // Busca o valor do campo "Valor da Fipe do veículo" na página pelo ID "numA"
    let numA = document.getElementById("numA").value;
    
    // Busca o valor do campo "Valor do financiamento" na página pelo ID "numB"
    let numB = document.getElementById("numB").value;
    
    // Busca o elemento da página que exibirá as mensagens de validação
    let validationMessage = document.getElementById("validationMessage");

    // Verifica se o valor do campo "Valor da Fipe do veículo" é menor ou igual ao valor do campo "Valor do financiamento"
    if (numB <= numA) {
        // Se for menor ou igual, exibe a mensagem de erro em vermelho
        validationMessage.innerHTML = "O valor da Fipe do veículo deve ser maior que o Valor do financiamento!";
        validationMessage.style.color = "red";
        return false;
    } else {
        // Se for maior, exibe a mensagem de sucesso em verde
        validationMessage.innerHTML = "Formulário enviado com sucesso!";
        validationMessage.style.color = "green";
        return true;
    }
}

// Adiciona o evento "submit" ao formulário, que chama a função "validateForm" quando o formulário é enviado
form.addEventListener('submit', validateForm);
