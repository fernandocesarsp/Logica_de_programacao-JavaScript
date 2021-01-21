 //matriz
//        var alunos = [
//            {nome: 'daniel', id: 112233, endereco: 'rua faz de conta 2, ap 3, são paulo SP'},
//            {nome: 'josé', id: 112244, endereco: 'rua belezura 5, Sao paulo'},
//            {nome: 'joão', id: 113344, endereco: 'rua belezura 20, Sao Paulo - perto do josé'},
//            {nome: 'maria', id: 114444, endereco: 'rua chuchu 1, RJ'},
//            {nome: 'ana', id: 114555, endereco: 'Av belezura 41,  SP'},
//        ]
        
function Endereco(dados){
    this.logradouro = dados.logradouro || '';
    this.n = dados.n || 0;
    this.complemento = dados.complemento;
    this.cidade = dados.cidade;
    this.estado = dados.estado;
    this.cep = dados.cep;
}

var alunos = [
    {nome: 'daniel', id: 112233, endereco: new Endereco({logradouro: 'rua faz de conta', n: 2, complemento: 'ap 3', cidade: 'São Paulo', estado: 'SP', cep: '111111-111'})},
    {nome: 'josé', id: 112244, endereco: new Endereco({logradouro: 'rua belezura', n: 5, cidade: 'São Paulo', cep: '22222-222'})},
    {nome: 'joão', id: 113344, endereco: new Endereco({logradouro: 'rua belezura', n: 20, cidade: 'São Paulo', cep: '22222-222'})},
    {nome: 'maria', id: 114444, endereco: new Endereco({logradouro: 'rua chuchu', n: 1, estado: 'RJ', cep:'22222-222'})},
    {nome: 'ana', id: 114555, endereco: new Endereco({logradouro: 'Av belezura', n: 41, estado: 'SP', cep:'33333-33'})}
]


var enderecos = [];
var msg = "";


for (var i = 0; i <alunos.length; i++){
    enderecos[i] = alunos[i].endereco;
}

enderecos[1].estado = 'SP';
enderecos[2].estado = 'SP';
enderecos[3].cidade = 'Rio de Janeiro';
enderecos[4].cidade = 'São Paulo';

for(var i = 0; i < enderecos.length; i++) {
    var endereco = enderecos[i];

    for(prop in endereco) {
        if (endereco[prop]) {
            msg += 'i: ' + i + ', ' + prop + ': '+ endereco[prop] + '<br>';
        }
    }
    msg += '<hr>'
}








document.querySelector('#output').innerHTML = msg;