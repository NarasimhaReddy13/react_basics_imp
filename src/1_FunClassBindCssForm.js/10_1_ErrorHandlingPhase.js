// Error boundaries - Error handling Phase (2 methods)

// We seen that runtime errors during rendering put our app in broken state -- react umounts the whole react component tree

// error boundaries - will catch the error anywhere in UI and display a Callback UI

// class component that implements either 1 or both of the lifecycle methods (getDeriv.. , compoDidCatch) becomes an error boundary

// static method -- is used to render a fallback UI after an error and other will log the error information





import React from 'react'

function ErrorHandlePhase({heroName}) {
    if (heroName === 'Joker') {
        throw new Error('Not a Hero')
    }
    return(
        <div>
            {heroName}
        </div>
    )
}
export default ErrorHandlePhase