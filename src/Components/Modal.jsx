import React from 'react'

function Modal({active,setActive,children}) {
    return (
        <div className={active ?'modal active' :'modal'}>
            <div className={active ?'modal_content active' :'modal_content'}>
                {children}
            </div>
        </div>
    )
}

export default Modal
