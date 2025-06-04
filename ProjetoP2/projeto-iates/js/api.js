function obterMensagens() {

    let retorno = [];

    let consulta = $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

function colectMsgInfo(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email-contato').value;
    const msg = document.getElementById('msg').value;
    let msgObj = {
        nome: nome,
        email: email,
        mensagem: msg
    }
    if (msgObj){
        inserirMensagem(msgObj);
    }

}

function inserirMensagem(mensagem) {

    /*

    let mensagem = {
            nome: "nome da pessoa", 
            email: "email informado", 
            mensagem: "a mensagem informada"} 

    */
    let inserir = $.ajax({
        
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'text',
        async: false,
        contentType: 'application/json',
    });

    inserir.done(function(response){
        console.log("Success: ",response)
    });

    inserir.fail(function(jqXHR, textStatus, errorThrown){
        console.error("Error: ",textStatus, errorThrown)
    });


}

function validarUsuario(objLoginSenha) {
    let retorno = false;

    let validacao = $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
        }).fail(function () {
            return retorno;
        });

    validacao.done(function (data) {
        retorno = data;
    });

    return retorno;
    }

$(document).ready(function () {
    $('#formLogin').on('submit', function (event) {
        event.preventDefault();

        let email = $('#email').val();
        let senha = $('#senha').val();
        let objLoginSenha = {
            email: email,
            senha: senha
        };

        let autenticado = validarUsuario(objLoginSenha);

        if (autenticado === true) {
            window.location.href = 'mensagens.html';
        } else {
            $('#mensagemErro').text('E-mail e Senha inválidos');
        }
    })
});

function criarTabela(mensagens) {
    if (mensagens.length === 0) {
        $('#corpoTabela').append('<tr><td colspan="100%">Nenhuma mensagem encontrada.</td></tr>');
        return;
    }

    const chaves = Object.keys(mensagens[0]);

    chaves.forEach(chave => {
        $('#cabecalhoTabela').append(`<th>${chave}</th>`);
    });
    mensagens.forEach(msg => {
        let linha = '<tr>';
        chaves.forEach(chave => {
            linha += `<td>${msg[chave]}</td>`;
        });
        linha += '</tr>';
        $('#corpoTabela').append(linha);
    });
}

$(document).ready(function () {
    const mensagens = obterMensagens();
    criarTabela(mensagens);
});