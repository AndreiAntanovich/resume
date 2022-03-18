import React, {useState} from 'react';
import './HomePage.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

const  HomePage:React.FunctionComponent = () =>{
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()  

    return (
    <div>

    </div>
  );
}

export default HomePage;
