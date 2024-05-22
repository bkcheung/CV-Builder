import React from 'react'
import ReactDOM from 'react-dom/client'
import Section from './Section.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Section sectionName = "Personal Details"/>
  </React.StrictMode>,
)
