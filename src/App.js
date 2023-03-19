import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import renderRoutes from './routes';
import { Suspense, useEffect } from 'react';
import Skeleton from './Loader/Skeleton';
import { Row, Col } from 'antd';
import { Loader } from './Loader/Skeleton';
import { useDispatch } from 'react-redux';


// const arrSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
// const navigate = useNavigate();
// const dispatch = useDispatch();
// useEffect(()=>{
//   dispatch({type: 'ADD_NAVIGATE', navigate: navigate})
// }, [])
//   const renderListProduct = () => {
//    return arrSkeleton.map((item) => { return <Loader key={item}/>})
// }

  return (
    <>
    <Suspense fallback={<div className='container'><Loader/></div>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
    
          {/* HomeTemplate */}
          {/* <Route path='home' element={<HomeTemplate/>}>
            <Route path='contact' element={<Contact/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='dragdrop' element={<DemoDragDrop/>}/>
            <Route path='detail/:id' element={<Detail/>}/>
            <Route path='profile' element={<Profile/>}/>
          </Route>

          <Route path='login' element={<UserLoginTemplate/>}/> */}

          {/* CyberbugsTemplate  */}
          {/* <Route path='jirabugs' element={<JirabugsTemplate/>}>
            <Route path='contact' element={<CreateProject/>}/>
            <Route path='projectmanagement' element={<ProjectManagement/>}/>
            <Route path='projectdetail/:projectId' element={<IndexJiraBugs/>}/>
            <Route path='' element={<ProjectManagement/>}/>
          </Route> */}

        </Routes>
      </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
