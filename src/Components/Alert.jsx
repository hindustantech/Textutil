import React from 'react'

const Alert = (props) => {
    return (
        props.aleart && <div class={`alert alert-${props.aleart.type} alert-dismissible fade show`} role="alert">
            <strong>{props.aleart.type}</strong><strong> {props.aleart.message}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert