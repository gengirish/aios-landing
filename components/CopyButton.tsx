'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

type CopyButtonProps = {
  text: string
  label?: string
}

export default function CopyButton({ text, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs font-600 text-if-text-dim hover:text-white transition-colors flex-shrink-0"
      aria-label={`${label}: ${text}`}
    >
      {copied ? (
        <>
          <Check size={14} className="text-if-green" />
          Copied
        </>
      ) : (
        <>
          <Copy size={14} />
          {label}
        </>
      )}
    </button>
  )
}
