
import {Route, Switch} from 'react-router-dom';

// COMPONENTS
import Header from './components/header.component';
import Footer from './components/footer.component';

// SCREENS
import HomeScreen from './screens/home-screen.component';
import PersonalData from './screens/personal-data.component';
import AcademicCredential from './screens/academic-credential.component';
import AcademicWork from './screens/academic-work.component';
import ProfessionalWork from './screens/professional-work.component';


import './App.css';

function App() {
  return (
  <>
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/personaldata' component={PersonalData} />
          <Route path='/credential' component={AcademicCredential} />
          <Route path='/academicwork' component={AcademicWork} />
          <Route path='/professionalwork' component={ProfessionalWork} />
        </Switch> 
    </div>
    <Footer className="footer"/>
  </> 
  );
}

export default App;
