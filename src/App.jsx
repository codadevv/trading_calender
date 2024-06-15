import Header from "./components/Header";
import CalenderWidget from "./components/CalenderWidget";


export default function App()
{
  return (
    <>
      <div id="container_master_root">
        <Header />
        <div id="body">
          <CalenderWidget />
        </div>
      </div>
    </>
  )
}



