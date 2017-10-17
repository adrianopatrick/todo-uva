import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

const ListTarefas = props => {

    const renderRows = () => {
        // const {markAsDone, markAsPending, remove} = props;
        const tarefas = props.tarefasOnDemand || [];
        return tarefas.map(tarefa => (
            <tr key={tarefa._id}>
                <td className={tarefa.done ? 'concluido' : ''}>{tarefa.descricao}</td>
                <td>
                <RaisedButton
                        className="smallButton"
                        primary={true}
                        icon={<FontIcon className="material-icons">check</FontIcon>}
                    />
                    <RaisedButton
                        className="smallButton"
                        default={true}
                        icon={<FontIcon className="material-icons">undo</FontIcon>}
                    />
                    <RaisedButton
                        className="smallButton"
                        secondary={true}
                        icon={<FontIcon className="material-icons">delete</FontIcon>}
                    />
                </td>
            </tr>

        ))
    };

    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <table className="table table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Descricao</th>
                        <th className="tableActions">Ações</th>
                    </tr>
        </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>

        </div>
    )
};

export default ListTarefas;