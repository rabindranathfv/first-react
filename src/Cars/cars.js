import { Component } from "react";
import listCars from './cars.json'

export default class ListCars extends Component {
    render() {
        return (
            <div>
                <h1> Car list! </h1>

                <table>
                    <tr>
                        <th>Model</th>
                        <th>Manufacture</th>
                        <th>Car VIN</th>
                    </tr>

                    {listCars.map( car => {
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