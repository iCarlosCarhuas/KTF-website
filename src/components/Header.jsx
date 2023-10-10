import React, { useState, useEffect } from 'react';

function Header() {
  const [showAlternateImage, setShowAlternateImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      const scrollY = window.scrollY;
      const threshold = documentHeight - windowHeight - 900;

      setShowAlternateImage(scrollY >= threshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="header-maincontainer">
      <div className="header-container">
        <div className="logo-container">
          {showAlternateImage ? (
            <div className="alternate-content">
              <div className="alternate-text">
                <h1>Thanks</h1> <h2>For</h2> <h3>Visiting <b>KTF</b></h3>
              </div>
              <img src="/train.png" className="train-img" alt="alternate image"></img>
            </div>
          ) : (
            <div className="original-content">
              <div className="header-text">
                <h1>Welcome</h1> <h2>To</h2> <h3><b>KTF</b></h3>
              </div>
              <div className="logo-images">
                <img src="/letter-K.png" className="K-letter" alt="letter K"></img>
                <img src="/letter-T.png" className="T-letter" alt="letter T"></img>
                <img src="/letter-F.png" className="F-letter" alt="letter F"></img>
                <img src="/train-img.png" className="train-img" alt="train image"></img>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
