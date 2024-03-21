import React from "react"

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      { children }
    </div>
  )
}
