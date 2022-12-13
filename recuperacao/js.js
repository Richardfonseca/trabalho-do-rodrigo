//entradas para se cadastrar
let cadastrosNome = []
let cadastrosData = []
let cadastrosEndereco = []
let cadastrosCpf = []
let cadastrosEstado = []


function inp() {
  let inserirData = document.getElementById("inserirData");
  let inserirEndereco = document.getElementById("inserirEndereco");
  let inserirCpf = document.getElementById("inserirCpf");
  let inserirEstado = document.getElementById("inserirEstado");

}


function cadastrar() {

  let cadastrarNomeHTML1 = document.getElementById("name").value; //pega um elemento do html pelo seu identificador id

  let cadastrarDataHTML2 = document.getElementById("data").value;
  let cadastrarEnderecoHTML3 = document.getElementById("endereco").value;
  let cadastrarCpfHTML4 = document.getElementById("cpf").value;
  let cadastrosEstadoHTML5 = document.getElementById("estado").value;
  let inserirNome = document.getElementById("inserirNome");
  inp()



  //condicionais para nao deixar nulas as informações do nome

  if (cadastrarNomeHTML1 === "") {
    alert("insira seu nome");//se caso nao for preenchido aparecera um alerta escrito "insira seu nome"
  } else {
    cadastrosNome.push(cadastrarNomeHTML1);
    inserirNome.textContent = `Nome: ${cadastrarNomeHTML1}`;
  }
  //condicionais para nao deixar nulas as informações do data
  if (cadastrarDataHTML2 === "") {
    alert("insira sua data");//se caso nao for preenchido aparecera um alerta escrito "insira sua data"
  } else {
    inserirData.textContent = `DATA: ${cadastrarDataHTML2}`;
    cadastrosData.push(cadastrarDataHTML2);
  }
  //condicionais para nao deixar nulas as informações do endereço
  if (cadastrarEnderecoHTML3 === "") {
    alert("insira seu endereço"); //se caso nao for preenchido aparecera um alerta escrito "insira seu endereço"
  } else {
    inserirEndereco.textContent = `Endereço:${cadastrarEnderecoHTML3}`;
    cadastrosEndereco.push(cadastrarEnderecoHTML3);
  }
  //condicionais para nao deixar nulas as informações do cpf
  if (cadastrarCpfHTML4 === "") {
    alert("insira seu cpf"); //se caso nao for preenchido aparecera um alerta escrito "insira seu cpf"
  } else {
    inserirCpf.textContent = `Cpf:${cadastrarCpfHTML4}`;
    cadastrosCpf.push(cadastrarCpfHTML4);
  }
  //condicionais para nao deixar nulas as informações do estado
  if (cadastrosEstadoHTML5 === "") {
    alert("insira seu estado"); //se caso nao for preenchido aparecera um alerta escrito "insira seu estado"
  } else {
    inserirEstado.textContent = `Estado:${cadastrosEstadoHTML5}`;
    cadastrosEstado.push(cadastrosEstadoHTML5);
  }


  //saidas
  console.log(`Nome cadastrado: ${cadastrosNome[cadastrosNome.length - 1]}`);
  console.log(`Data de nascimento: ${cadastrosData[cadastrosData.length - 1]}`);
  console.log(`endereço:${cadastrosEndereco[cadastrosEndereco.length - 1]}`);
  console.log(`cpf:${cadastrosCpf[cadastrosCpf.length - 1]}`);
  console.log(`estado:${cadastrosEstado[cadastrosEstado.length - 1]}`);


}

