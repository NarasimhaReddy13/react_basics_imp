import React from 'react'
import './12_1_StyleSheet.css'

// styling in different types -------- CSS Style Sheets, Inline Styling, CSS Modules ( pic ), CSS in JS Libraries
// if we want to give multiple css use template literals
// as an alternate to template literals -- we have classNames library 


// In react --- Inline styles are not specified as strings -- they are specified as object
// key - is camelCase and value -- as string

const heading = {
    fontSize: 40,
    color: 'red'
}

function Inline(props) {
    let className = props.primary ? 'primary': '' // conditionally applying class
    return(
        <div>
            <h1 className={`${className} font-xl`}> CSS Style Sheets </h1>
            <h1 style = {heading}> Inline </h1>
        </div>
    )
}

export default Inline

// regular style sheets ------ filename.css ---------- import './filename.css' -- sometimes lead to css conflict
// CSS module style sheets  -- filename.module.css --- import styles from './filename.module.css' --- {styles.className}
// These classes are locally scoped by default -- can't be used in children components