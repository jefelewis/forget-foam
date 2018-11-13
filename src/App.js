// Imports: Dependencies
import React from 'react'

// Imports: CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'
import './css/footer.css'
import './css/header.css'

// Imports: Components

import Footer from './components/Footer'
import Header from './components/Header'
import Ordinance from './components/Ordinance'

// React Application
const App = () => (
  <div className="content">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css" />
    <Header />
    {/* <Footer /> */}
    <Ordinance />
  </div>
)

// Exports
export default App
