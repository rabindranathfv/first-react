import { Component } from "react";

import PropTypes from 'prop-types';

export default class ListCars extends Component {
    static propTypes = {
        cars: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            model: PropTypes.string.isRequired,
            manufacture: PropTypes.string.isRequired,
            vin: PropTypes.string.isRequired
        })).isRequired, 
    };
    render() {
        const { cars } = this.props;
        return (
            <div>
                <h1> Car list! </h1>

                <table>
                    <tr>
                        <th>Model</th>
                        <th>Manufacture</th>
                        <th>Car VIN</th>
                    </tr>

                    {cars.map( car => {
                    return <tr key={car.id}>
                        <th>{car.model}</th>
                        <th>{car.manufacture}</th>
                        <th>{car.vin}</th>
                    </tr>
                })}
                </table>
            </div>
        )
    }
}