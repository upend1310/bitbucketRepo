import React from "react";
import { Card, CardBody,
    CardTitle } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import { Table } from 'reactstrap';

import CategoriesJSON from "../json/categories.json";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            title: "Select Category"
        }

        this.searchCat= this.searchCat.bind(this);
    }

    searchCat() {
        var input, filter, table, tr, td, i;
        input = document.getElementById("CategorySearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("CatTable");
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
                                        <Input type="search" onKeyUp={this.searchCat} name="search" id="CategorySearch" placeholder="search Category" />
                                    </FormGroup>
                                </FormGroup>
                            </Form>
                            <Table striped bordered responsive id="CatTable">
                                <thead>
                                    <tr>
                                        <th>Category Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        CategoriesJSON.map((Category, index) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <a href={"/"+Category}>
                                                            {Category}
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

export default Category;