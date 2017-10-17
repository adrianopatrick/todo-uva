import React from 'react'

class Creditos extends React.Component {

    render() {
        return this.props.show ? (
            <div >
                Tela de Créditos
            </div >
        ) : null
    }
}

export default Creditos;