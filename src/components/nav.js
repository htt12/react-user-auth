import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {changeAuth} from '../actions';


class Nav extends Component {
    
    renderButton(){
        if(this.props.auth){
            return <button type='button' className='btn btn-danger' onClick={() => this.props.changeAuth(false)}>Sign Out</button>
        }
        return <button type='button' className='btn btn-outline-light' onClick={() => this.props.changeAuth(true)}>Sign In</button>
    }
    
    
    render(){
        const linkStyle = {
            color: 'white',

        }

        return(
            <nav className=' navbar bg-info font-weight-bold mb-4'>
                <Link to='/' style={linkStyle} className='nav-link'>Home</Link>
                <Link to='/about-us'  style={linkStyle} className='nav-link'>About Us</Link>
                <Link to='/secret-docs'  style={linkStyle} className='nav-link'>Secret Docs</Link>
                <Link to='/operatives'  style={linkStyle} className='nav-link'>Operatives</Link>
                {this.renderButton()}
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth,

    }
}

export default connect(mapStateToProps, {changeAuth: changeAuth})(Nav);