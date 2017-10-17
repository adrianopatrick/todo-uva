import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

import URLS from '../config/URLS';

const ListTarefas = props => {

    const checkTarefa = (tarefa) => {
        fetch(URLS.SERVER + `/${tarefa._id}`, {
            method: 'PUT', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ concluido: true })
        }).then(response => { props.search() })
    }

    const unCheckTarefa = (tarefa) => {
        fetch(URLS.SERVER + `/${tarefa._id}`, {
            method: 'PUT', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ concluido: false })
        }).then(response => { props.search() })
    }

    const archiveTarefa = (tarefa) => {
        fetch(URLS.SERVER + `/${tarefa._id}`, {
            method: 'PUT', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ arquivado: true })
        }).then(response => { props.search() })
    }

    const removerTarefa = (tarefa) => {
        fetch(URLS.SERVER + `/${tarefa._id}`, {
            method: 'DELETE', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => { props.search() })
    }

    const renderRows = () => {
        // const {markAsDone, markAsPending, remove} = props;
        const tarefas = props.tarefasOnDemand || [];
        return tarefas.map(tarefa => (
            <tr key={tarefa._id}>
                <td className={tarefa.concluido ? 'concluido' : ''}>{tarefa.descricao}</td>
                <td>
                    <RaisedButton
                        onClick={() => checkTarefa(tarefa)}
                        className={tarefa.concluido ? 'desaparece' : "smallButton"}
                        primary={true}
                        icon={<FontIcon className="material-icons">check</FontIcon>}
                    />
                    <RaisedButton
                        onClick={() => unCheckTarefa(tarefa)}
                        className={!tarefa.concluido ? 'desaparece' : "smallButton"}
                        default={true}
                        icon={<FontIcon className="material-icons">undo</FontIcon>}
                    />
                    <RaisedButton
                        className="smallButton"
                        onClick={() => removerTarefa(tarefa)}
                        secondary={true}
                        icon={<FontIcon className="material-icons">delete</FontIcon>}
                    />
                    <RaisedButton
                        className={!tarefa.concluido ? 'desaparece' : "smallButton"}
                        onClick={() => archiveTarefa(tarefa)}
                        default={true}
                        icon={<FontIcon className="material-icons">archive</FontIcon>}
                    />
                </td>
            </tr>

        ))
    };

    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <table>
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