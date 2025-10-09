import React from 'react';  
import Sidebar from './components/Sidebar/Sidebar'; // نوار کناری – Sidebar component
import PageOne from './components/PageOne'; // صفحه اول – Main page

function App() {  
  return (  
    <div className="App"> 
      {/* نمایش صفحه اصلی و نوار کناری – Render main page and sidebar */}
      <PageOne />
      <Sidebar />
    </div>  
  );  
}  

export default App;
