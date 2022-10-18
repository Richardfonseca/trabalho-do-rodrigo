let cadastrosNome = []
let cadastrosData = []
let cadastrosEndereco = []
let cadastrosSenha = []


function cadastrar() {

  let cadastrarNomeHTML1 = document.getElementById("name").value;
  let cadastrarDataHTML2 = document.getElementById("data").value;
  let cadastrarEnderecoHTML3 = document.getElementById("endereco").value;
  let cadastrosSenhaHTML4 = document.getElementById("senha").value;
  let inserirNome = document.getElementById("inserirNome");
  let inserirData = document.getElementById("inserirData");
  let inserirEndereco = document.getElementById("inserirEndereco");
  let inserirSenha = document.getElementById("inserirSenha");

  if (cadastrarNomeHTML1 === "") {
    alert("insira seu nome");
  } else {
    cadastrosNome.push(cadastrarNomeHTML1);
    inserirNome.textContent = `Nome: ${cadastrarNomeHTML1}`;
  }

  if (cadastrarDataHTML2 === undefined) {
    alert("insira seu data");
  } else {
    inserirData.textContent =`DATA: ${cadastrarDataHTML2}`;
    cadastrosData.push(cadastrarDataHTML2);
  }
  if (cadastrarEnderecoHTML3 === "") {
    alert("insira seu endereço");
  } else {
    inserirEndereco.textContent = `Endereço:${cadastrarEnderecoHTML3}`;
    cadastrosEndereco.push(cadastrarEnderecoHTML3);
  }
  if (cadastrosSenhaHTML4 === "") {
    alert("insira seu endereço");
  } else {
    inserirSenha.textContent = `Senha:${cadastrosSenhaHTML4}`;
    cadastrosSenha.push(cadastrosSenhaHTML4);
  }


  console.log(`Nome cadastrado: ${cadastrosNome[cadastrosNome.length - 1]}`);
  console.log(`Data de nascimento: ${cadastrosData[cadastrosNome.length - 1]}`);
  console.log(`endereço${cadastrosEndereco[cadastrosNome.length - 1]}`);
  console.log(`senha ${cadastrosSenha[cadastrosNome.length - 1]}`);

  
}

