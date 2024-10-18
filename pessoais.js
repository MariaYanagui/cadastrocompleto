// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove tudo que não for dígito
    if (cpf.length !== 11) return false;
 
    let soma = 0;
    let resto;
    if (cpf == "00000000000") return false;
 
    for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
 
    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
 
    return true;
}



function checarEmail(){
    if(document.forms[0].email.value == "" || 
       document.forms[0].email.value.indexOf("@") == -1 ||
       document.forms[0].email.value.indexOf(".") == -1)
       {
        alert("Por favor, informe um email válido");
        return false;
    }else{
        alert("email informado com sucesso!");
        document.getElementById("email").innerHTML = document.forms[0].email.value
        }
}



// -----------------------------------------



// CÓDIGO DE VERIFICAÇÃO DE EMAIL DIGITADO
// -----------------------------------------

function verifica(){
    if(document.forms[0].email.value == 0){
        alert("Por favor, corno, informe um e-mail");
        document.frmEnvia.email.focus();
        return false;
    }
    return true; 
}