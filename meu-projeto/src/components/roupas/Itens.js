import spfc from './../../img/camisa_spfc_esporte.jpg'
import corinthians  from './../../img/camisa_corinthians_esporte.jpg'
import palmeiras from './../../img/camisa_palmeiras_esporte.jpg'
import psg from './../../img/camisa_psg_esporte.jpg'
import rma from './../../img/camisa_rma_esporte.jpg'
import mu from './../../img/camisa_mu_esporte.jpg'

const Itens = {
    products: [
    {
      id:'1',
      img: spfc,
      title: 'São Paulo Futebol Clube',
      description:'Camisa original - ADIDAS - PRO FOOTBALL 2022',
      price:350,
      category:'brazilian_teans',
      mark:'Adidas',
      cart:'São Paulo',
    },
    {
      id:'2',
      img: corinthians,
      title: 'Sport Club Corinthians Paulista',
      description:'Camisa original - NIKE - PRO FOOTBALL 2022',
      price:300,
      category:'brazilian_teans',
      mark:'Nike',
      cart:'Corinthians',
    },
    {
      id:'3',
      img: palmeiras,
      title: 'Sociedade Esportiva Palmeiras',
      description: 'Camisa original - PUMA - PRO FOOTBALL 2022',
      price:100,
      category:'brazilian_teans',
      cart:'Palmeiras',
    },
    {
      id:'4',
      img: psg,
      title: 'Paris Saint-Germain Football Club',
      description: 'Camisa original - NIKE - PRO FOOTBALL 2022',
      price:400,
      category:'foreign_teans',
      cart:'PSG',
    },
    {
      id:'5',
      img:rma,
      title: 'Real Madrid Club de Fútbol',
      description: 'Camisa original - ADIDAS - PRO FOOTBALL 2022',
      price:500,
      category:'foreign_teans',
      mark:'Adidas',
      cart:'Real Madrid',
    },
    {
      id:'6',
      img:mu,
      title: 'Manchester United Football Club',
      description: 'Camisa original - ADIDAS - PRO FOOTBALL 2022',
      price:450,
      category:'foreign_teans',
      mark:'Adidas',
      cart:'Manchester United'
    },
  ],
};

export default Itens;
