import HomeSideBar from "../components/HomeSideBar/HomeSideBar";
import './Home.css'
export default function Home() {

  return ( 
    <div>
        <div className='sidebar'><HomeSideBar/></div>
        <body className="pageContent">
        <h1>Главаная страница</h1>

        </body>

    </div>
  );
}