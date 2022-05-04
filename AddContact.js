import React, { Component } from 'react'

class AddContact extends Component {

    constructor(props) {
      super(props)
      this.state = {
        name: '', 
        email: ''
      }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.email === ''){
            alert('Please fill in all fields')
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' })

    }
    render() {
        return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={this.handleSubmit}>
                <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder="Name" value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})} />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type="text" placeholder="Email" value={this.state.email} 
                    onChange={e => this.setState({email: e.target.value})} />
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
        )
    }
    }

export default AddContact
