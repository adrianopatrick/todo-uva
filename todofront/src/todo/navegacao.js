import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import Atual from './Atual';
import Armazenadas from './Armazenadas';
import Creditos from './Creditos';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const storeIcon = <FontIcon className="material-icons">folder</FontIcon>;
const buildIcon = <FontIcon className="material-icons">settings</FontIcon>;

class Navegacao extends React.Component {

    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({ selectedIndex: index });

    render() {
        return (
            <div>
                <Atual show={this.state.selectedIndex === 0} />
                <Armazenadas show={this.state.selectedIndex === 1} />
                <Creditos  show={this.state.selectedIndex === 2} />
                <Paper zDepth={1} className="footer">
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="Atuais"
                            icon={recentsIcon}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label="Armazenadas"
                            icon={storeIcon}
                            onClick={() => this.select(1)}
                        />
                        <BottomNavigationItem
                            label="Créditos"
                            icon={buildIcon}
                            onClick={() => this.select(2)}
                        />
                    </BottomNavigation>
                </Paper>
            </div>
        );
    }
}

export default Navegacao;