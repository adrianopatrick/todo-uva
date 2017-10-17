import React from 'react'
import FilterTarefa from './FilterTarefas'
import ListTarefas from './ListTarefas'
import URLS from '../config/URLS';

class Atual extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: '', tarefasOnDemand: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    refresh = () => {
        this.setState({
            ...this.state,
            tarefasOnDemand: this.state.tarefas.filter(tarefa =>
                tarefa.descricao.toLowerCase().includes(this.state.filter.toLowerCase()))
        });
    }

    handleChange = (event) => {
        this.setState({ ...this.state, filter: event.target.value }, this.refresh);
    }

    render() {
        return this.props.show ? (
            <div>
                <FilterTarefa filter={this.state.filter} handleChange={this.handleChange} />
                <ListTarefas tarefasOnDemand={this.state.tarefasOnDemand}/>
            </div>
        ) : null
    }

    componentWillMount() {
        fetch(URLS.SERVER + URLS.GET_NAO_ARMAZENADOS, { method: 'GET' })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        this.setState({ ...this.state, tarefas: json, tarefasOnDemand: json });
                    });
                } else {
                    console.log('Nenhuma tarefa cadastrada!');
                }
            })
            .catch(error => {
                console.log('Servidor fora do ar! ' + error);
            });
    }
}

export default Atual;