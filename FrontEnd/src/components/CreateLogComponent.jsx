import React, { Component } from 'react';

class CreateLogComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
                    firstName: '',
                    lastName: '',
                    emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveLog = this.saveLog.bind(this);
    }
    saveLog = (e) =>{
        e.preventDefault();
       let log = {firstName: this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId}
       <console.log('log => '+ JSON.stringify(log));



    }
    changeFirstNameHandler=(event) =>{
        this.setState({firstName: event.target.value});
    }
    changeFirstNameHandler=(event) =>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler=(event) =>{
        this.setState({lastName: event.target.value});
    }
    changeEmailHandlerr=(event) =>{
        this.setState({emailId: event.target.value});
    }
      cancel(){
        this.props.history.push('/logs');
      }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className= "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className='text-center'> Add User</h3>

                            <div className='card-body'>
                                <form>

                                    <div className='form-group'>
                                        <label>First Name:</label>
                                        <input placeholder='First Name' name="firstName" className='form-control'
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name:</label>
                                        <input placeholder='Last Name' name="lastName" className='form-control'
                                        value={this.state.lastName} onChange={this.changeLasttNameHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label>Email Id:</label>
                                        <input placeholder='Email Address' name="emailId" className='form-control'
                                        value={this.state.emailaddress} onChange={this.changeEmailHandler}/>

                                    </div>
                                         <button className='btn btn-success' onClick={this.saveLog}>Save</button>
                                                <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default CreateLogComponent;