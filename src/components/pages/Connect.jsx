import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Connect extends Component {
    state = {}
    render() {
        return (

            <>

                <h1>Hello from Connect</h1>
                <p className='lead'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Soluta eos ullam recusandae ipsum? Quaerat accusamus sequi delectus saepe adipisci odio reiciendis, provident voluptate
                    officiis quam veritatis voluptas. Laboriosam, quod inventore?
                </p>
                <Link to='/'>
                    <button className='btn btn-sm bg-success'>Testing</button>
                </Link>
            </>
        );
    }
}

export default Connect;