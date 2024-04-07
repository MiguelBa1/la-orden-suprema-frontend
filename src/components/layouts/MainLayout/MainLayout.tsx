import { ReactNode } from 'react'
import { Sidebar } from '@components/index'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-grow h-full overflow-auto">
        { children }
      </div>
    </div>
  )
}
