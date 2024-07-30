import React, {useState } from 'react';
import {useEffect} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { viewOrganization } from '../../actions/orgAction';
import Loading from "./loading";
import  AddressBaseUrl from "../../utils/BaseUrl";
import { RxDotFilled } from 'react-icons/rx';
import {dataVacancy} from '../vacaData';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';
import Home1 from '../../img/Hpage1.jpg'
import Home2 from '../../img/firstImage1.jpg'
import Home3 from '../../img/hpage2.jpg'
import EplusApp1 from '../../img/eplusappImg1.jpg'
import EplusApp2 from '../../img/eplusappImg2.jpg'

const Fristpage = (props) =>{
const navigate=useNavigate()
const orgHandler =(id)=>{
  navigate("org/"+id)
  // navigate("org")
}
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(viewOrganization());
     },[]);
  const { org } = useSelector(
   (state)=> state.org);
//  console.log("all organizations are : ", org);
const [data, setData] =useState(dataVacancy || '');
useEffect(() => {
  setData(dataVacancy);
}, [dataVacancy])
const [isUp, setIsUp] = useState(false);
// const handleClick = () => {
//   setIsUp(!isUp);
// };

// useEffect(() => {
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     setIsUp(scrollPosition > 0);
//   };
//   window.addEventListener('scroll', handleScroll);

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [descrip, setDescrip] = useState(
    `መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ የመንግስት 
    መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ በቀላሉ ካርታ ላይ ለይቶ ለማወቅ:
    ይህ ኢጵላሣጵ ዌብ ሳይት ነው ኢጵላሣጵ የራሱ የሆነ ዌብሳይት አልምቶ አሁን ደሞ ለግለሰቦች እና ለድርጅቶች የየራሳቸው የሆነ ዌብሳይት ለማልማት 
    ሙሉ ዝግጅቱን ጨርሷል። እርሶም እድሉን ይጠቀሙ። ኢኮሜርስ ዌብ ሳይት በበይነመረቡ ላይ የእርስዎ ዲጂታል የመደብር ፊት ነው። በገዢ እና በሻጭ መካከል ያለውን ግብይት ያመቻቻል ያፋጥናል. 
    የመስመር ላይ ደንበኞችዎ ምርጫቸውን አድርገው መጠቀም ይችላሉ።
    መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ የመንግስት 
    መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ በቀላሉ ካርታ ላይ ለይቶ ለማወቅ:
    ይህ ኢጵላሣጵ ዌብ ሳይት ነው ኢጵላሣጵ የራሱ የሆነ ዌብሳይት አልምቶ አሁን ደሞ ለግለሰቦች እና ለድርጅቶች የየራሳቸው የሆነ ዌብሳይት ለማልማት 
    ሙሉ ዝግጅቱን ጨርሷል። እርሶም እድሉን ይጠቀሙ። ኢኮሜርስ ዌብ ሳይት በበይነመረቡ ላይ የእርስዎ ዲጂታል የመደብር ፊት ነው። በገዢ እና በሻጭ መካከል ያለውን ግብይት ያመቻቻል ያፋጥናል. 
    የመስመር ላይ ደንበኞችዎ ምርጫቸውን አድርገው መጠቀም ይችላሉ።
    መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ የመንግስት 
    መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ በቀላሉ ካርታ ላይ ለይቶ ለማወቅ:
    ይህ ኢጵላሣጵ ዌብ ሳይት ነው ኢጵላሣጵ የራሱ የሆነ ዌብሳይት አልምቶ አሁን ደሞ ለግለሰቦች እና ለድርጅቶች የየራሳቸው የሆነ ዌብሳይት ለማልማት 
    ሙሉ ዝግጅቱን ጨርሷል። እርሶም እድሉን ይጠቀሙ። ኢኮሜርስ ዌብ ሳይት በበይነመረቡ ላይ የእርስዎ ዲጂታል የመደብር ፊት ነው። በገዢ እና በሻጭ መካከል ያለውን ግብይት ያመቻቻል ያፋጥናል. 
    የመስመር ላይ ደንበኞችዎ ምርጫቸውን አድርገው መጠቀም ይችላሉ።
    መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ የመንግስት 
    መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ በቀላሉ ካርታ ላይ ለይቶ ለማወቅ:
    ይህ ኢጵላሣጵ ዌብ ሳይት ነው ኢጵላሣጵ የራሱ የሆነ ዌብሳይት አልምቶ አሁን ደሞ ለግለሰቦች እና ለድርጅቶች የየራሳቸው የሆነ ዌብሳይት ለማልማት 
    ሙሉ ዝግጅቱን ጨርሷል። እርሶም እድሉን ይጠቀሙ። ኢኮሜርስ ዌብ ሳይት በበይነመረቡ ላይ የእርስዎ ዲጂታል የመደብር ፊት ነው። በገዢ እና በሻጭ መካከል ያለውን ግብይት ያመቻቻል ያፋጥናል. 
    የመስመር ላይ ደንበኞችዎ ምርጫቸውን አድርገው መጠቀም ይችላሉ።`);
    const [expanded, setExpanded] = useState(false); 
    const toggleExpanded = () => { 
      setExpanded(!expanded); 
    }; 
    const paragraphClass = classNames('line-clamp-5', { 
      'line-clamp-none': expanded, 
    }); 

    // const [description, setDescription] = useState(descrip.substring(0,700)+'   . . .');
  
    // var hidden=''
    // if (descrip.length > 700 ) {
    //   hidden='visible'
    // }
    // else{
    //   hidden='hidden' 
    // }
    // const [background, setBackground] = useState('');
  
    // const getDescription=()=>{
    //   setDescription(descrip)
    //   setBackground('bg-[#E3E6E6] text-[#E3E6E6]')

    // }
  // const shorten = descrip ? descrip.substring(0, 100) : ''
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? org.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
      const isLastSlide = currentIndex === org?.promotedOrgs?.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  let text=["gfhhhh","jfjfjj"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 1000);
    return () => clearInterval(interval);
  },[]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

 return(
    <>
{/* bg-[#E3E6E6] */}
<div className='md:-mt-24 mt-3 h-full flex bg-[white] overflow-hidden'>
 <div
  className="h-full w-full flex bg-[white] duration-500 hover:scale-105 transition-all"> 
 <div 
 style={{
        backgroundImage: `url(${EplusApp1})`,
      }}
    className="bg-cover overflow-hidden bg-center bg-no-repeat pb-[34%] rounded-[2px] ml-[30px] md:w-[45%]  relative transition-all md:h-[350px] first-letter:md:flex-row p-2 flex-col md:pt-0 lg:pt-0 md:mb-2 mb-20 pt-24 border-b group">
    <div className='h-full -mb-36 md:flex block md:h-full w-full md:-mt-40 -mt-0 rounded p-3'>           
      <div
        className=" md:w-1/2 float-right md:mb-0 mb-16 h-full md:-mt-16 mt-16 flex md:ml-5 ml-2 flex-col md:p-14 p-3 justify-center items-center">                
         
           {/* <button onClick={handleClick}>Toggle</button>
            <div className={`transition-transform duration-300 ease-in-out transform ${isUp ? 'translate-y-[-100px]' : 'translate-y-0'}`}>
            <button>hfhfhfh</button>
            </div> */}        
               {/* <h1 className="text-4xl md:text-4xl xl:text-5xl text-[#F49F08] capitalize font-bold font-display tracking-tight leading-tight italic">
                  {org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}
                  </h1>
                  <p className="text-2xl md:text-2xl mt-4 xl:text-3xl text-[#F49F08] capitalize font-bold font-display tracking-tight leading-tight">
                  {org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.businessSector}</p>
                  <div className=' '> 
                 <p id="custom-scroll" className=" h-11/12 w-11/12 mt-5 shadow-lg bg-slate-200 p-5 justify-center rounded-md max-h-72 overflow-y-auto scrollbar-thumb-indigo-500 scrollbar-track-gray-200 "> 
                 {descrip}
                 {org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.description}
              </p> 
       </div> 
     */}
      {/* <button onClick={getDescription} className={`${hidden} ${background} -mt-1 ml-0 text-sky-600 font-semibold`}>
          More
      </button> */}
      </div>
      {/* <div
          // style={{ backgroundImage: `url(${org && org[currentIndex]?.url})` }}
          className='md:ml-2 ml-5 md:mt-2  border p-2 md:mr-7 -mt-20 mr-2 rounded-2xl md:w-2/3 w-40 md:h-full h-full bg-center duration-700 relative bg-cover bg-no-repeat'
          >
          <img 
           className="md:w-full md:h-96 w-11/12 h-full rounded-lg "
           src={Home}//{`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}
           alt=""
           /> */}
          {/* {(org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo)!==''
          ?(
        <LazyLoad height={300} once>
          <img 
           className="md:w-full md:h-96 w-11/12 h-3/4 rounded-lg "
           src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}
           alt=""
           />
        </LazyLoad>
        ):("")} */}
        {/* </div> */}
       </div>
       <div className="absolute top-0 left-0 w-full h-10 text-3xl text-center -mt-2 font-bold text-orange-400 p-4">
      Use Our promotional website
        </div>
       {/* <div className='hidden origin-bottom mt-20 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl hover:border-2 py-2 md:py-12 lg:py-12 bg-white/40 rounded-sm hover:bg-black/20 border-black text-black cursor-pointer z-10'>
           <BsChevronCompactRight onClick={nextSlide} className='h-12 w-12' />
       </div> */}
       <div className="absolute bottom-0 left-0 w-full h-10 text-white p-4">
      Choose our compan product
        </div>
      {/* <div className=' md:text-lg text-xs md:ml-20 ml-9 md:mt-32 mt-20 md:-mb-3 -mb-20 z-30 '>
        <a ><button 
       onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}
      className='animate-pulse font-semibold text-sky-500'>
        <i>{org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.description?.substring(0,100)} .  .  .
        </i>
          </button></a>
       </div> */}
      {/* <div className={`transition-transform duration-300 ease-in-out transform ${isUp ? 'translate-y-[-700px]' : 'translate-y-0'}`}>
        <button>hfhfhfh</button>
      </div> */}
    </div>
   <div  
     style={{
        backgroundImage: `url(${Home1})`,
      }}
      className="relative transition-all bg-cover bg-center bg-no-repeat pb-[34%] overflow-hidden rounded-[2px]
       w-[98%] md:h-[350px] first-letter:md:flex-row p-2 flex-col md:pt-0 lg:pt-0 md:mb-2 mb-20 pt-20 text-center border-b group">  
        <div className="absolute bottom-0 rounded-md text-center text-cyan-600 left-10 w-11/12 
       text-3xl font-semibold capitalize bg-slate-100 h-20 p-4">
     <div class="carousel-item text-4xl font-bold text-center transition-transform duration-1000 ease-in-out">
    The Promotion Website is used to promot campany
     </div>
     <div class="carousel-item text-4xl font-bold text-center transition-transform duration-1000 ease-in-out">
     Used to promot,and sell campany's product
     </div>
     <div class="carousel-item text-4xl font-bold text-center transition-transform duration-1000 ease-in-out">
      To sell stock,and bids advertisation
     </div>
     <div class="carousel-item text-4xl font-bold text-center transition-transform duration-1000 ease-in-out">
     The job vacancy and louber vacancy posted using this Website
     </div>
     </div>
    </div>
   </div>  
  </div>
 </>
)}
export default Fristpage;