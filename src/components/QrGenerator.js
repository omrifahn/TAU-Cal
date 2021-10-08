import QRCode from 'qrcode'
import {useEffect, useState} from 'react'
import createIcsString from "./createIcsString";


const QrGenerator = (props) => {
    let text = createIcsString(props)
    const [src, setSrc] = useState('')

    useEffect( () => {
        QRCode.toDataURL(text).then( (data) => {
            setSrc(data)
        } )
    }, [] )

    return (
        <div>
            <img width="50" height="50" src={src} />
        </div>
    )
}

export default QrGenerator