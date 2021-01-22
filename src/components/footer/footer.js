import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className = "footer-container">
           <div className="stamp">
               <h4>Designed & Developed by</h4>
               <h4>Will Jackson III 2020 </h4>

           </div>

           <div className="footer-social-links-container">
               <ul className="footer-social-links">
                 <li><a href="mailto:williamjackson982@gmail.com" type="email-link">EMAIL</a></li>
                 <li><a href="#">CODEPEN</a></li>
                 <li><a href="https://github.com/Thatguywill12" target='_blank'>GITHUB</a></li>
                 <li><a href="https://www.linkedin.com/in/willjacksoniii/" target='_blank'>LINKEDIN</a></li>
               </ul>
               
           </div>  
        </div>
    )
}

export default Footer