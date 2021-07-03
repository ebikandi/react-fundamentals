// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({size, style, children}) {
  const enhancedStyle = {...style, fontStyle: 'italic'}
  const enhancedClassNAme = `box box--${size}`
  return (
    <div className={enhancedClassNAme} style={enhancedStyle}>
      {children}
    </div>
  )
}

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// function stylesFactory(color) {
//   return {
//     backgroundColor: color,
//     fontStyle: 'italic',
//   }
// }

// const smallBox = (
//   <div className="box box--small" style={stylesFactory('lightblue')}>
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div className="box box--medium" style={stylesFactory('pink')}>
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div className="box box--large" style={stylesFactory('orange')}>
//     large orange box
//   </div>
// )

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      {/* {smallBox}
      {mediumBox}
      {largeBox} */}
    </div>
  )
}

export default App
