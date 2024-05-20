import { ReactNode } from 'react'
import { DesktopSidebar, MobileSidebar } from '@components/index'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <DesktopSidebar />
      <MobileSidebar />
      <div className="flex-grow h-full overflow-auto lg:p-5 lg:bg-gray-200">
        <div className="bg-white h-full lg:border-2 lg:border-gray-300 p-10">
          { children }
        </div>
      </div>
    </div>
  )
}
