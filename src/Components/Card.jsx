
function Card(props){
  return(

    <div>
    <div className='uni'>
      <img src="https://images.unsplash.com/photo-1687709348710-05314eea5476?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVuaSUyMHBob3RvfGVufDB8fDB8fHww" alt="open" style={{borderRadius:"40px"}} />
      <h1>Hello {props.uni}</h1>
      <p>{props.para}</p>
    </div> 

    </div>
  );
}
export default Card
