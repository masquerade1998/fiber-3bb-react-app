import AppHeaderMain from './components/Header/AppHeaderMain';
import AppHeaderBottom from './components/Header/AppHeaderBottom';

import AppMain_11 from './components/Main/AppMain_11';
import AppMain_12 from './components/Main/AppMain_12';

import AppFooterTop from './components/Footer/AppFooterTop';
import AppFooterMain from './components/Footer/AppFooterMain';
import AppFooterBottom from './components/Footer/AppFooterBottom';


function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="header">
          <AppHeaderMain/>
          <AppHeaderBottom/>
        </div>
        <div className="main">
            <div className="container">
              <div className="main-content-wrap">
                <div className="main-content">
                  <div id="content">
                    <div className="page-content">
                      <AppMain_11/>
                      <AppMain_12/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="footer">
          <AppFooterTop/>
          <AppFooterMain/>
          <AppFooterBottom/>
        </div>
      </div>
    </>
  )
}

export default App