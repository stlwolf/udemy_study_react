import React, { Component } from 'react';

function App(props) {
    return (<div>Hello function App</div>);
}

import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';

class CApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handlePlaceSubmit(place) {
        console.log(place);
    }

    render() {
        return (
            <div>
                <h1>経度緯度検索</h1>
                <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
                <GeocodeResult
                    address={this.state.address}
                    lat={this.state.lat}
                    lng={this.state.lng}
                />
            </div>
        );
    }
}

export default CApp;
