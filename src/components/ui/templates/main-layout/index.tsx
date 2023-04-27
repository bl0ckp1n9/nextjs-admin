import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export default function MainLayout({ children }: Props) {
  return (
    <div>
      <header className="bg-slate-900 p-4">Header</header>
      <main className="bg-[#FCFCFC]">{children}</main>;
    </div>
  )
}
