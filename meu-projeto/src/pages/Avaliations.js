import React, {Component} from 'react'
import './Avaliations.css'
import api from './../Api'
import user from '../img/images.png'
import Avaliationsform from '../components/avaliations/Avaliationsform'
class Avaliations  extends Component{
  state = {
    comentarios:[],
  }

  async componentDidMount(){
    const response = await api.get('/coments/allcoments');
    this.setState({comentarios: response.data.response})
  }

  render() {

    const {comentarios} = this.state;
    console.log(comentarios);

    return(
      <>
        <section className="avaliations">
          <div className="avaliation_box_container">
            {comentarios.map(comentario => ( 
              <>
                <div className="avaliation_box">
                  <div className="box_top">
                    <div className="profile">
                      <div className="profile_img">
                        <img src={user} alt=""/>
                      </div>

                      <div className="name_user">
                        <strong>{comentario.NOME}</strong>
                        <span>{comentario.DATA_COMENTARIO}</span>
                      </div>
                    </div>
                    <div className="stars">
                      <span></span>
                    </div>
                  </div>

                  <div className="comment">
                    <p>{comentario.COMENTARIO}</p>
                  </div>
                </div>
              </>
            ))}

          </div>
        </section>

        <Avaliationsform/>
      </>
    );
  };
};

export default Avaliations








        



    
    
      
      




      

    

