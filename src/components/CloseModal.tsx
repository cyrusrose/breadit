'use client'

import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Button } from './ui/Button'

interface CloseModalProps {}

const CloseModal: FC<CloseModalProps> = ({}) => {
  const router = useRouter()

  return (
    <Button
      variant="subtle"
      className="h-6 w-6 rounded-md p-0"
      onClick={() => router.back()}>
      <X aria-label="close modal" className="h-4 w-4" />
    </Button>
  )
}

export default CloseModal
