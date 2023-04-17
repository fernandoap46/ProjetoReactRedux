## Construção Projeto

### Conhecendo JSX
JSX é uma extensão de sintaxe do JavaScript que permite escrever HTML em um arquivo JavaScript. Ele é usado principalmente em React para descrever a interface do usuário em forma de componentes. O JSX é transformado em código JavaScript válido pelo compilador do React, permitindo que o código seja executado no navegador ou em um servidor Node.js.
## Segue exemplo:

```react
import ReactDOM from 'react-dom'
//É preciso importar o React, pois sem este importe o jsx não funcionará
import React from 'react'

ReactDOM.render(
  <div>Ola React!!!!</div>,
  document.getElementById('root'))

```

## Componente com Propriedade





