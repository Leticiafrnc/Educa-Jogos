function conferirTelefone() {
    const respTelefone = document.querySelector('input#respostaTelefone')
    const resTelefone = document.querySelector('div#resultadoTelefone')
    const resultadoTelefone = String(respTelefone.value)
    
    if (resultadoTelefone === 'Telefone') {
        resTelefone.innerHTML = ` Parabéns, está correto!` 
    } else{
        resTelefone.innerHTML = `Resposta errada, tente outra vez!`
    }
    } 

    function conferirAlmofada() {
        const respAlmofada = document.querySelector('input#respostaAlmofada')
        const resAlmofada = document.querySelector('div#resultadoAlmofada')
        const resultadoAlmofada = String(respAlmofada.value)

        if (resultadoAlmofada === `Almofada`) {
            resAlmofada.innerHTML = `Parabéns, está correto!` 
        } else{
            resAlmofada.innerHTML = `Resposta errada, tente outra vez!`
        }
    }

    function conferirTesoura () {
        const respTesoura = document.querySelector('input#respostaTesoura')
        const resTesoura = document.querySelector('div#resultadoTesoura')
        const resultadoTesoura = String(respTesoura.value)
        
        if (resultadoTesoura === `Tesoura`) {
            resTesoura.innerHTML = `Parabéns, está correto!` 
        } else{
            resTesoura.innerHTML = `Resposta errada, tente outra vez!`
        }
    }
    function conferirCapacete() {
        const respCapacete = document.querySelector('input#respostaCapacete')
        const resCapacete = document.querySelector('div#resultadoCapacete')
        const resultadoCapacete = String(respCapacete.value)

        if (resultadoCapacete === `Capacete`) {
            resCapacete.innerHTML = `Parabéns, está correto!` 
        } else{
            resCapacete.innerHTML = `Resposta errada, tente outra vez!`
        }
    }
   