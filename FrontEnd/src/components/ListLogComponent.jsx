import React, { Component } from 'react';
import LogService from '../services/LogService';

class ListLogComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            logs: []
        }
        this.addLog= this.addLog.bind(this);
    }
    componentDidMount(){
        LogService.getLogs().then((res) => {
                 this.setState ({logs : res.data});
        }
        );
    }

    addLog(){
        this.props.history.push('/add-Log');
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Logs List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addLog}> Login</button>
                </div>
                  <div className='row'>
                   <table className='table table-stripted table-bordered'>
                      <thead>
                        <tr>
                            <th>Logs First Name </th>
                            <th>Logs Last Name </th>
                            <th>Logs EmailId</th>
                            <th>Actions </th>
                           
                                
                           
                        </tr>
                      </thead>
                        <tbody>
                            {
                                this.state.logs.map(
                                    log => 
                                    <tr key = { log.id}>
                                    <td> {log.firstName}</td>
                                    <td> {log.lastName}</td>
                                    <td> {log.emailId}</td>
                                    

                                    </tr>
                                )
                            }
                        </tbody>

                   </table>

                  </div>

            </div>
        );
    }
}

export default ListLogComponent;