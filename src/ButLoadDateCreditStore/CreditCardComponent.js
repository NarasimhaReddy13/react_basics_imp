import React, {useState} from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

export default function CreditCardComponent() {

    const [num, setNum] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
        <div>
            <Cards number={num} name={name} expiry={expiry} cvc={cvc} focused={focus} />
            <form>
                <input type='tel' name='number' placeholder='Card Number' value={num} onChange={e => setNum(e.target.value)}
                onFocus={e => setFocus(e.target.name)} />

                <input type='text' name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)}
                onFocus={e => setFocus(e.target.name)} />

                <input type='text' name='expiry' placeholder='MM/YY Expiry' value={expiry} onChange={e => setExpiry(e.target.value)}
                onFocus={e => setFocus(e.target.name)} />

                <input type='tel' name='cvc' placeholder='cvc' value={cvc} onChange={e => setCvc(e.target.value)}
                onFocus={e => setFocus(e.target.name)} />
            </form>
        </div>
    )
}
