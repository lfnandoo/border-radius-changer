// pegar os inputs das bordas
const bordas = document.querySelectorAll('.bordas')
      topLeft = document.querySelector('#topoEsquerda')
      topRight = document.querySelector('#topoDireita')
      bottomLeft = document.querySelector('#baseEsquerda')
      bottomRight = document.querySelector('#baseDireita')

// pegar o text area e o bloco que vai receber a borda
const codigo = document.querySelector('#codigo')
const bloco = document.querySelector('#bloco')
const copiar = document.querySelector('#copiar')

var areatext = codigo.innerHTML

// aplicar borda
function aplicar() {
    //adicionar valor
    let valor = `${topLeft.value}px ${topRight.value}px ${bottomLeft.value}px ${bottomRight.value}px`
    console.log('valor')
    bloco.style.borderRadius = valor

    codigo.innerHTML = mostrarCodigo(topLeft.value, topRight.value, bottomLeft.value, bottomRight.value) 
}

function mostrarCodigo(topLeft, topRight, bottomLeft, bottomRight) {
    const adicionarCodigo = `
        -webkit-border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;
        -moz-border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;
        border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;
    `
    
    return adicionarCodigo
}

function copiarTexto() {
    const novaCopia = document.createElement('textarea')
    novaCopia.value = codigo.textContent
    console.log(novaCopia.value)
    document.body.appendChild(novaCopia)
    novaCopia.select()
    document.execCommand('copy')
    document.body.removeChild(novaCopia)
}