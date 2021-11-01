import React from 'react'
import ReactDOM from 'react-dom' // Imported when using createPortals()

// we created portal-root in index.html

function ReactPortals() {
    return ReactDOM.createPortal(<h3> Hello Narasimha </h3>, document.getElementById('portal-root')
    )
}

export default ReactPortals

// Ability to breakout of DOM Tree ( not under root )
// first parameter in createPortal() is -- can be any elements ( nums, strings, JSX, components )

// Why ? --- When a child is a modal, popup or tooltip 
// this behaves like a normal child in every other way