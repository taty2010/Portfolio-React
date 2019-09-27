import React from 'react';

function Footer(){
    const twitter = 'https://twitter.com/tatynovell';
    const linkedin = 'https://www.linkedin.com/in/tatyana-novell-b0168bb1/';
    const github = 'https://github.com/taty2010';

	const footer = (
    <div id='contact' className="full-width">
		<div id="contact-info">
			<a href={twitter}><i className="fab fa-twitter"></i></a>
			<a href={linkedin}><i className="fab fa-linkedin-in"></i></a>
			<a href= {github}><i className="fab fa-github"></i></a>
		</div>
	</div>
    )   

    return <footer id="contact">{footer}</footer>

}

export default Footer;