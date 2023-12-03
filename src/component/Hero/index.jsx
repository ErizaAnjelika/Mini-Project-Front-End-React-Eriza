import {sectionImg,sectiontext,servicesData} from '../../const'
import './Hero.css'
const Hero =()=>{

    return(
        <div className="container hero-wrapper">
            <div className='row hero-content'>
                <div className='col-lg-6 col-md-6 col-sm-6 left-side'>
                    {sectiontext.map((item)=>(
                        <div className="content-left-side" key={item}>
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                            <button>{item.textBtn}</button>
                        </div>
                    ))}
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 right-side'>
                    <img src={sectionImg} alt="" />
                </div>
            </div>
            <div className='row content-service' style={{marginTop:'500px'}}>
                    {servicesData.map((item)=>(
                    <div key={item.id} className='service col-lg-4'>
                        <img src={item.serviceLogo} alt="" />
                        <h1>{item.serviceTitle}</h1>
                        <p>{item.paragraph}</p>
                    </div> 
                    ))}
            </div>
        </div>
    )
}

export default Hero