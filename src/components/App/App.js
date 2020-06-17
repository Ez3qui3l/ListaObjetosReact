import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import List from '../List/List'
import Detail from '../Details/Detail'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            list: [
                {
                    name:"Amor en los tiempos de cólera",
                    author: "Gabriel García Marquez"
                },
                {
                    name:"Así habló Zaratustra",
                    author:"Friedrich Nietzche"
                },
                {
                    name: "la insoportable levedad del ser",
                    author: "Milan Kundera"
                }
            ],
            bookSelected: null
        }
     
      }
    onBookSelected(book){
        this.setState({bookSelected: book})
    }

   

    render(){
        return(
            <Container>
                <Row>
                <Col sm="6">
                        <List list={this.state.list} onBookSelected={(book)=>this.onBookSelected(book)}>

                        </List>
                        </Col>
                        <Col sm="6">
                        <Detail bookSelected={this.state.bookSelected}>
                            Detalle
                        </Detail>
                        </Col>
                        </Row>
            </Container>
        )
    }
}

export default App