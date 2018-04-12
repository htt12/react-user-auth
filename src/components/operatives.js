import React from 'react';
import auth from '../hoc/auth';

const Oplist =  props => (
    <div>
        <h1 className='text-center'>Secret Operatives List</h1>
        <ol>
            <li>Bob</li>
            <li>Rocky</li>
            <li>Jenn</li>
            <li>Maria</li>
            <li>Paul</li>
            <li>Peter</li>
            <li>Sharon</li>
            <li>Kathy</li>
        </ol>
    </div>
)

export default auth(Oplist);