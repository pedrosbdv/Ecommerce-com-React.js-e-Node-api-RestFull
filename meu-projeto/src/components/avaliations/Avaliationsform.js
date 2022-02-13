import React, {useState} from 'react'
import Axios from 'axios'

import '../../pages/Avaliations.css'

function Avaliationsform () 
{
    const url = "http://localhost:3000/coments/insertcomments"
    const [data, setData] = useState({
        name: '',
        comments:''
    })
    

    function submit(e)
    {
      e.preventDefault();
      Axios.post(url, {
        name: data.name,
        comments: data.comments
      })
      .then(res=> {
        console.log(res.data)
        window.location.reload();
      })


      
    }





    function handle(e)
    {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return(
        <section className='form_avaliations'>
        <form onSubmit={(e) => submit(e)}>
          <div>
            <h1>Avaliações</h1>
            <label>Nome:</label>
            <input onChange={(e) => handle(e)} id="name" type='text' value={data.name} placeholder='Digite seu nome' name='name' required/>
          </div>
          <div>
            <label>Comentario:</label>
            <textarea onChange={(e) => handle(e)} id="comments" value={data.comments}  placeholder='Deixe seu comentario' name='comments' rows='10' required></textarea>
          </div>
          <div>
            <input type='submit' value='Enviar' />
          </div>  
        </form>
      </section>
    )
}

export default Avaliationsform
