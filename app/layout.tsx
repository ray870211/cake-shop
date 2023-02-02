import './globals.sass'
import Sidebar from 'components/Sidebar/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='container'>
          <div className='sidebar'>
            <Sidebar></Sidebar>
          </div>
          <div className='content'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
