import React from "react"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Home from "./Home"; 
import About from "./About"; 
import Contact from "./Contact"; 
function App() { 
return ( 
<Router> 
<div style={{ fontFamily: "system-ui", padding: 20 }}> 
<h2>  React Router Example</h2> 
{/* Navigation Links */} 
<nav style={{ marginBottom: 20 }}> 
<Link to="/" style={{ marginRight: 10 }}>Home</Link> 
<Link to="/about" style={{ marginRight: 10 }}>About</Link> 
<Link to="/contact">Contact</Link> 
</nav> 
{/* Define Routes */} 
<Routes> 
<Route path="/" element={<Home />} /> 
<Route path="/about" element={<About />} /> 
<Route path="/contact" element={<Contact />} /> 
</Routes> 
</div> 
</Router> 
); 
} 
export default App; 
import React from "react"; 
function Home() { 
return <h3>  Welcome to the Home Page</h3>; 
} 
export default Home; 
import React from "react"; 
function About() { 
return <h3>i This is the About Page</h3>; 
}
