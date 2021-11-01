// make use of svg if aware --

// Now using react-spinners

import React from 'react'
import { css } from '@emotion/react'
import { BounceLoader, BeatLoader } from 'react-spinners'

const loaderCSS = css`
    margin-top: 25px;
    margin-bottom: 25px;
`

export default function Loadings() {
    return (
        <div>

            <div>
                <BounceLoader css={loaderCSS} loading size={20} color='red'/>

            </div>
            <div>

                <BeatLoader css={loaderCSS} loading size={40} color='green'/>
            </div>

        </div>
    )
}


// imported emotion package for css --- @emotion/core