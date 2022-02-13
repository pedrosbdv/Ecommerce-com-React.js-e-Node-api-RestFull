import Cards from './../components/roupas/Cards'


function Home (props)
{
  const {products, onAdd} = props;

  return (
    <>
      <Filter/>
      <div className='container'>
          <h1 className='title_cards'>Produtos</h1>
            <div className='wrapper'>
              {products.map((product) => (
                <Cards key={product.id} onAdd={onAdd} product={product}/>
              ))}
            </div>
      </div>
    </>
  )
}

function Filter ()
{
  return(
    <div className='fs_app'>
      <section className='fs_price_body'>
        <div>
          <span className='heading'>
            Preço
          </span>
          <div className='buttons'>
            <button className='btn' type='button'>R$100</button>
            <button className='btn' type='button'>R$300</button>
            <button className='btn' type='button'>R$500</button>
          </div>
        </div>
      </section>
      <div className='line1'></div>

      <section className='fs_price_body'>
        <div>

          <span className='heading'>
            Categoria
          </span>

          <div className='text'>
            <ul className='types'>
              <li>Times Brasileiros<input className='select' name='times' type='radio'/></li>
              <li>Times Estrangeiros<input  className='select' name='times' type='radio'/></li>
              <li>Todos<input  name='times' className='select' type='radio'/></li>
            </ul>

          </div>
        </div>
      </section>
      <div className='line2'></div>

      <section className='fs_price_body'>
        <div className='conteudo'>

          <span className='heading'>
            Marca
          </span>

          <div className='text'>
            <ul className='marks'>
              <li> Nike   <input className='select' name='times' type='radio'/></li>
              <li> Puma   <input className='select' name='times' type='radio'/></li>
              <li> Adidas <input className='select' name='times' type='radio'/></li>
            </ul>

          </div>
        </div>
      </section>
      <div className='line2'></div>
    </div>
  )
}

export default Home;
