import { ReactNode } from 'react'
import { DesktopSidebar, MobileSidebar } from '@components/index'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <DesktopSidebar />
      <MobileSidebar />
      <div className="flex-grow h-full overflow-auto md:p-5 md:bg-gray-200">
        <div className="bg-white min-h-full md:border-2 md:border-gray-300 p-10">
          { children }
        </div>
      </div>
    </div>
  )
}
