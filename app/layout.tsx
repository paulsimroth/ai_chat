import SideBar from '@/components/SideBar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className='flex'>
          <SideBar />

          {/**ClientProvider - Notification */}

          <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
      </body>
    </html>
  )
}
