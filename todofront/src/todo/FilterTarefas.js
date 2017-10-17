import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class FilterTarefas extends React.Component {

    render() {
        return (
            <div className="container">
                <div>
                    <TextField
                        style={{width: "100%"}}
                        hintText="Informe a tarefa"
                        floatingLabelText="Tarefa"
                        type="text"
                        onChange={this.props.handleChange}
                        value={this.props.filter}
                    />
                </div>
                <div>
                    <RaisedButton
                        className="smallButton"
                        primary={true}
                        icon={<FontIcon className="material-icons">add</FontIcon>}
                    />
                    <RaisedButton
                        className="smallButton"
                        default={true}
                        icon={<FontIcon className="material-icons">search</FontIcon>}
                    />
                    <RaisedButton
                        className="smallButton"
                        secondary={true}
                        icon={<FontIcon className="material-icons">close</FontIcon>}
                    />
                </div>
            </div>
        )
    }
}

export default FilterTarefas;