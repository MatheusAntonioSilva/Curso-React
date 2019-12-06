import React from 'react'

const approveds = ['Paula', 'Roberta', 'Gustavo']

export default props => {
  const generateItems = itens => {
    return itens.map(item => <li>{item}</li>)
  }

  return(<ul>{generateItems(approveds)}</ul>)
}
