// File 1
export  function sum(a, b) {
  return a + b
}

// File 2
export default function rest(a,b){
    return a-b;
}

// File 3

// Without default
import {sum} from './file1.js'

// With default
import rest from './file2.js'

function calculator(){
    sum(1,2)
    rest(1,2)
}


// React

import React from 'react'

React.useState
React.useEffect
React.Fragment