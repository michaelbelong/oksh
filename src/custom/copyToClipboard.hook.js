import { useState } from 'react'
import copy from 'copy-to-clipboard'

export const useCopyToClipboard = () => {
  const [ isCopied, setCopy ] = useState(false)

  const closeDelay = (time = 1500) => (
    setTimeout(() => setCopy(false), time)
  )
  const makeCopy = (value) => {
    copy(value)
    setCopy(true)
    closeDelay()
  }

  return {
    isCopied,
    makeCopy,
  }
}