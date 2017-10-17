import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class FilterTarefas extends React.Component {

    render() {
        const {add, clear} = this.props;
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
                        onClick={add}
                        className="smallButton"
                        primary={true}
                        icon={<FontIcon className="material-icons">add</FontIcon>}
                    />
                    <RaisedButton
                        onClick={clear}
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