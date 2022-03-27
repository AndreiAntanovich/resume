import React, {useState} from 'react';
import './Skills.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

const  Skills:React.FunctionComponent = () =>{
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()  

    return (
    <div>

    </div>
  );
}

export default Skills;
