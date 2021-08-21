import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

function App() {
  const [toggleActions, setToggleActions] = useState(false)
  const [ lastYPos, setLastYPos] = useState(0)

  useEffect(() => {

    function handleScroll(){
      const yPos = window.scrollY
      const isScrollingUp = yPos < lastYPos

      setToggleActions(isScrollingUp)
      setLastYPos(yPos)
    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [lastYPos])


  return (
    <div className="section">
      <div className="cover dark">
          <h2>Hello</h2>
      </div>
      <div className="cover light">
          <h1>Hello</h1>
      </div>


      {toggleActions && <motion.div className="action"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ opacity: { duration: 0.4}}}
      >
        <button onClick={() => console.log('clicked!')}>Home</button>
        <button onClick={() => console.log('clicked!')}>profile</button>
        <button onClick={() => console.log('clicked!')}>More</button>
      </motion.div>}
    </div>
  );
}

export default App;
