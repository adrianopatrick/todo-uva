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

        this.add = this.add.bind(this);
        this.clear = this.clear.bind(this);
        this.search = this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    clear = () => {
        this.setState({...this.state, filter: ''}, this.search)
    }

    search = () => {
        fetch(URLS.SERVER + URLS.GET_NAO_ARMAZENADOS, {method: 'GET'})
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        this.setState({...this.state, tarefas: json, tarefasOnDemand: json});
                    });
                } else {
                    console.log('Nenhuma tarefa cadastrada!');
                }
            })
            .catch(error => {
                console.log('Servidor fora do ar! ' + error);
            });
    }

    add = (descricao) => {
        fetch(URLS.SERVER, {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({descricao: this.state.filter})
        })
            .then(response => {
                this.setState({...this.state, filtro: ''});
                this.search();
            })
    }

    refresh = () => {
        if (this.state.tarefas) {
            this.setState({
                ...this.state,
                tarefasOnDemand: this.state.tarefas.filter(tarefa =>
                    tarefa.descricao.toLowerCase().includes(this.state.filter.toLowerCase()))
            });
        }
    }

    handleChange = (event) => {
        this.setState({...this.state, filter: event.target.value}, this.refresh);
    }

    render() {
        return this.props.show ? (
            <div>
                <FilterTarefa filter={this.state.filter} handleChange={this.handleChange}
                              add={this.add} clear={this.clear}/>
                <ListTarefas tarefasOnDemand={this.state.tarefasOnDemand}
                             search={this.search}/>
            </div>
        ) : null
    }

    componentWillMount() {
        this.search();
    }
}

export default Atual;