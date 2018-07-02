import React from "react";
import { Card, CardBody,
    CardTitle } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { Table } from 'reactstrap';

import CountriesJSON from "../json/countries.json";

class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            title: "Select Country"
        }

        this.searchCntry= this.searchCntry.bind(this);
    }

    searchCntry() {
        var input, filter, table, tr, td, i;
        input = document.getElementById("countrySearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("cntryTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
            }       
        }
    }

    render() {
        var screenHeight= window.innerHeight;
        var cardHeight= screenHeight - 135;
        return(
            <div>
                <div className="pad-10 last-card"> 
                    <Card className="pad-10" style={{minHeight: cardHeight+'px'}}>
                        <CardBody>
                            <CardTitle>{this.state.title}</CardTitle>
                            <Form className="text-left">
                                <FormGroup tag="fieldset">
                                    <FormGroup>
                                        <Input type="search" onKeyUp={this.searchCntry} name="search" id="countrySearch" placeholder="search Country" />
                                    </FormGroup>
                                </FormGroup>
                            </Form>
                            <Table striped bordered responsive id="cntryTable">
                                <thead>
                                    <tr>
                                        <th>Country Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        CountriesJSON.map((country, index) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <a href={"/"+country.code}>
                                                            {country.name}
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Country;