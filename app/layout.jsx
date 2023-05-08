import "@styles/globals.css";

import Nav from "@components/Nav";

import Provider from "@components/Provider";


export const metadata = {
  title: "พร้อม AI",

  description: "ค้าหาแอพเผยแพร่ตัวอย่างของพร้อม AI",
};



function layout() {
  return <div>layout</div>;
}
const RootLayout = ({ children }) => (

    <html lang='en'>
    
    <body>
    
    <div className='main'>
    
    <div className='gradient' />
    
    </div>
    <Nav/>
    <main className='app'>
        
    
    {children}
    
    </main>
    
    
    
    </body>
    
    </html>
    
    );
    
    export default RootLayout;

