import React,{useState} from 'react'
import "./carousel.css";
import { BsArrowLeft,BsArrowRight } from "react-icons/bs";
const Carousel = ({data}) => {
   const [slide,setSlide]=useState(0);
    const nextImage= ()=>{
        if(slide === data.length-1)
            setSlide(0);
        else{
            setSlide(slide+1)
        }
    }
    const prevImage = ()=>{
        if(slide===0)
        {
            setSlide(data.length-1)
        }
        else{
            setSlide(slide-1)
        }
    }
    const show = (index)=>{
        setSlide(index);
    }
  return (
    <div className="image-slider">
        <BsArrowLeft className=" arrow left-arrow" onClick={prevImage}/>
        {data.map((item,index)=>{
            return(<img key={index} src={item.url} alt={item.alt} className={(slide===index)?"slide":"slide slide-hidden"}/>)
        })}
        <BsArrowRight className="arrow right-arrow" onClick={nextImage}/>
        <span className="indicators">
            {
                data.map((_,index)=>{
                    return(<button key={index} onClick={()=>show(index)} className={(slide===index)?"indicator":"indicator indicator-inactive"}></button>)
                })
            }
        </span>
    </div>
  )
}


export default Carousel;