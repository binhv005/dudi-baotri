import React from 'react'
import { CheckCircle, Info } from 'lucide-react'

export default function Toast({ message }) {
  if (!message) return null

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className="toast">
        <CheckCircle size={18} className="text-success" />
        <span>{message}</span>
      </div>
    </div>
  )
}
