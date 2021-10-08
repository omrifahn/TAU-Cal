import QRCode from 'qrcode'
import React, {useEffect, useState} from 'react'
import createIcsString from "./createIcsString";

const QrGenerator = (props) => {
    let text = createIcsString(props)
    const [src, setSrc] = useState('')

    useEffect( () => {
        QRCode.toDataURL(text).then( (data) => {
            setSrc(data)
        } )
    }, [text] )

    return (
        <div>
            <img width="50" height="50" src={src} />
        </div>
    )
}

export default QrGenerator