import React, { useState,useEffect} from 'react'

export const Post = () => {
    const [gifData,setgifData] = useState([])
    const [searchgifData,setsearchgifData] = useState("hello")
    const [textAreaImage,settextAreaImage] = useState("")
    const [openPopup,setopenPopup] = useState(false)
    useEffect(()=>{
      apiCall()
        
    },[searchgifData])
    const apiCall = ()=>{
      fetch(`https://api.giphy.com/v1/gifs/search?q=${searchgifData}&api_key=LDQDzgsqWB0rKRymzGEBK2lE1Oqg8MCE&limit=10=kk`)
        
        .then(response => response.json())
        .then(( data )=> {
            setgifData(data.data)
            console.log(data.data[0].source)
        });
    }
   
    const searchData = (e:any)=>{
     
      setsearchgifData(e.target.value)
      setopenPopup(true)

    }
    const gifUrlClick = (e:any)=>{
     
      settextAreaImage(e.target.src)
      setopenPopup(false)
    }
    const openPopupSet = ()=>{
      if(openPopup == true)
      {
        setopenPopup(false)
      }
      else{
        setopenPopup(true)
      }
    }
  return (
    <div><div className="container">
    <div className="wrapper">
      <section className="post">
        <header>Create Post</header>
        <form action="#">
          <div className="content">
        
            <div className="details">
             
              <div className="privacy">
               
                <i className="fas fa-caret-down"></i>
              </div>
            </div>
          </div>
          <textarea placeholder="What's on your mind" required></textarea>
          <div>
            {textAreaImage==""?'':<img style={{width:"100%"}}  src={textAreaImage}/>}
          </div>
          
          <div className="theme-emoji">
            <img src="icons/theme.svg" alt="theme"/>
            <img src="icons/smile.svg" alt="smile"/>
          </div>
          <div className="options" onClick={openPopupSet}>
            
            <ul className="list" style={{width:"fit-content"}}>
              <li><img style={{width:"100%"}} src="data:image/png;base64,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"  alt="gallery"/></li>
             
              
            </ul>
            Gif
          </div>
          <button style={{background:"blue",cursor:"pointer",color:"white"}}>Post</button>
        </form>
      </section>
      {
                openPopup==true? 
                    <div style={{position:"fixed",top:"480px",padding:"10px",background:"white" ,width:"300px",overflow:"scroll",height:"200px"}}>
                      
                        <div><input type="text"  onChange={searchData} value={searchgifData}/></div>
                        <br/>
                        {
                            gifData.map((data:any)=>{
                              console.log(data.images.original.url)
                              return(<><img onClick={gifUrlClick}style={{width:"30%"}}src={data.images.original.url}/></>)
                            })
                        }
                        
                  </div>
            :""}
    </div>
  </div>

  </div>
  )
}
