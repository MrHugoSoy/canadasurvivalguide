'use client'
import { useState } from 'react'
import DownloadModal from './DownloadModal'

export default function HeroCTA({ className }: { className?: string }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <DownloadModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <button onClick={() => setShowModal(true)} className={className}>
        Download free guide
      </button>
    </>
  )
}
