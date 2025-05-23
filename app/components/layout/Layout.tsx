import { ReactNode } from "react"
import Header from "./Header"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
    </>
  )
}
