import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import styles from "./Search.module.css";

import {AiOutlineArrowRight} from "react-icons/ai";

import { setResponse } from '../../redux/actions';

import Father from './Father';

export default function Search() {

  const [input, setInput] = useState('');
  const response = useSelector(state => state.response);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setResponse('home'))
  }, [])
  

  const handleOnChange = (e) => {
    setInput(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(setResponse(input))
    setInput('')
  }

  if(Array.isArray(response)){
    return (
      <div className={styles.divGlobal}>
        <div className={styles.divHead}>
          <div className={styles.divButtons}>
            <div className={styles.close}></div>
            <div className={styles.minimize}></div>
            <div className={styles.maximize}></div>
          </div>
        </div>
        <div className={styles.divFullWindow}>
          <form onSubmit={handleOnSubmit}>
            <div className={styles.divInput}>
              <div className={styles.divDomain}>
                <span className={styles.domain}>localhost:3001</span>
              </div>
              <div className={styles.divRoutes}>
                <span className={styles.slash}>/</span>
                <input 
                  onChange={handleOnChange} 
                  className={styles.routes} 
                  name='route' 
                  placeholder='home'
                  value={input}
                />
              </div>
              <div className={styles.divArrow}>
                <AiOutlineArrowRight className={styles.arrow}/>
              </div>
            </div>
          </form>
          <div className={styles.divOutput}>
            [
           {response.map(e => <Father object={e}/>)}
            ]
          </div>
        </div>
      </div>
    )
  } else {
    <div>
      <span>Loading...</span>
    </div>
  }
}
