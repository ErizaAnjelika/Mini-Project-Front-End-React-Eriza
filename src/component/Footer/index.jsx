import {colPertama,list,colKedua,colKetiga,colKeEmpat,footer} from '../../const'
import './footer.css'

const Footer =()=>{
    return(
        <footer>
            <hr /><br /><br />
        <div className='container'>
            <div className="row footer-about">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  {colPertama.map((item)=>( 
                    <div key={item} >    
                    <div className="footer-logo">
                        <img src={item.logo} alt="" />
                    </div>
                    <div className="footer-title">
                        <p>{item.title}</p>
                    </div>
                    </div> 
                     ))}
                     {list.map((item)=>(
                    <div key={item.id} className="footer-info">
                        <img src={item.icon} alt="" /><span>{item.list}</span>
                    </div>
                     ))}
                </div>    
                <div  className="col-lg-3 col-md-4 col-sm-6">
                    {colKedua.map((item)=>(
                        <div key={item} className="footer-links">
                            <h5>{item.title}</h5>
                            {item.list.map((item)=>(
                            <ul key={item} className='ps-0'>
                                <li>{item}</li>
                            </ul>
                            ))}
                        </div>
                    ))}
                </div>
                <div  className="col-lg-3 col-md-4 col-sm-6">
                    {colKetiga.map((item)=>(
                        <div key={item} className="footer-links">
                            <h5>{item.title}</h5>
                            {item.list.map((item)=>(
                            <ul key={item} className='ps-0'>
                                <li>{item}</li>
                            </ul>
                            ))}
                        </div>
                    ))}
                </div>
                <div  className="col-lg-2 col-md-4 col-sm-6">
                    {colKeEmpat.map((item)=>(
                        <div key={item} className="footer-links">
                            <h5>{item.title}</h5>
                            {item.list.map((item)=>(
                            <div className='icon' key={item}>
                                <img src={item}/>
                            </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
           
            
        </div> 
        <hr />
        <div className='container footer-copyright mt-2'>
                <h4>{footer}</h4>               
            </div>
        </footer>
    )
}

export default Footer

