alert('Sistema de cadastro de carros')

function captarDados() {
    const modelo =  prompt('Digite o modelo do carro: ')
    const marca =  prompt('Digite a marca do carro: ')
    const ano =  prompt('Digite o ano do carro: ')
    const cor =  prompt('Digite a cor do carro: ')

    const veiculo = { modelo, marca, cor, ano }
    return veiculo
}

function mostrarVeiculo(veiculo){
    console.log(`O veiculo a ser registrado é: ${JSON.stringify(veiculo)}`)
}

const veiculoCadastrado = captarDados()

mostrarVeiculo(veiculoCadastrado)