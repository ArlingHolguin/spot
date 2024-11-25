'use client'
import axios from "axios";
import { use, useEffect } from "react";

export function Test() {
  //al cargar este componente hace run llmado a api y muestra el resultado http://127.0.0.1:8000/api/v1/test/
  
  http://spotly.test/api/v1/test
  // Utilizar axxios para hacer el llamado a la api 

  useEffect(() => {
    axios.get('http://spotly.test/api/v1/test')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
  }, []);
  
  return (
    <div className="">
      http://spotly.test/api/v1/test

    </div>
  );
}