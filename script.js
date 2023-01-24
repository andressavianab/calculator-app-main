function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'reset') {
            document.querySelector('#resultado').value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            var valorCampo = document.querySelector('#resultado').value
            document.querySelector('#resultado').value = valorCampo + valor
        }

        if (valor === '=') {
            var valorCampo = eval(document.querySelector('#resultado').value)
            document.querySelector('#resultado').value = valorCampo
        }

        if (valor === 'del') {
            var valorCampo = document.querySelector('#resultado').value
            document.querySelector('#resultado').value = valorCampo.replace(/.$/, '' )
        }
        
    } else if (tipo === 'valor') {
        var valorCampo = document.querySelector('#resultado').value
        document.querySelector('#resultado').value = valorCampo + valor
    }
}

const themes = {
    't-one': 't-two',
    't-two':'t-three',
    't-three': 't-one',
}

const button = document.getElementById('switchtheme')
 if (button) {
    button.addEventListener('click', event =>  {
        event.preventDefault()
        const currentTheme = document.body.dataset.theme
        document.body.setAttribute('data-theme', themes[currentTheme] || 't-one')
    })   
 }
