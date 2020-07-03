function baseDireita() {
    const baseDireita = document.getElementById('baseDireita').value // pega o valor do input
    const editar = document.getElementById('bloco').style.borderBottomRightRadius = `${baseDireita}px` // adiciona estilo borda
    return editar 
}

function baseEsquerda() {
    const baseEsquerda = document.getElementById('baseEsquerda').value
    const editar = document.getElementById('bloco').style.borderBottomLeftRadius = `${baseEsquerda}px`
    return editar
}

function topoDireita() {
    const topoDireita = document.getElementById('topoDireita').value
    const editar = document.getElementById('bloco').style.borderTopRightRadius = `${topoDireita}px`
    return editar
}

function topoEsquerda() {
    const topoEsquerda = document.getElementById('topoEsquerda').value
    const editar = document.getElementById('bloco').style.borderTopLeftRadius = `${topoEsquerda}px`
    return editar
}

