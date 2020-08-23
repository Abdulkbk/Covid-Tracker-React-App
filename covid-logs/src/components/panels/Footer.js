import React from 'react';

const Footer = () => {
	const style = {
        width: "100%",
        position: "absolute",
        bottom: "0"
    }
  return (
    <div style={style} className="container text-center">
        <p><a className="text-dark" href="ceodev.000webhostapp.com">Copyright&#169;: &#64;Ceodev</a></p>
        <div className="mb-2">
            <a href="https://github.com/Abdulkbk"><i className="fab fa-md fa-github text-dark"></i></a>
            <a className="px-2" href="https://twitter.com/cipher01_?s=09"><i className="fab fa-md fa-twitter text-dark"></i></a>
            <a href="https://www.linkedin.com/in/abdullahi-yunus-08943519a"><i className="fab fa-md fa-linkedin text-dark"></i></a>
        </div>
    </div>
  );
}

export default Footer;