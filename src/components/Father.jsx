import React from 'react'
import Son from './Son'

export default props => {
  let localInfo = 'Nenhum'
  const notificateExitSon =
    local => localInfo = local

  return(
    <div>
      {localInfo}
      <Son notificateExit={notificateExitSon} />
    </div>
  )
}
