import React, {useEffect,useRef, useState} from "react";
import Layout from "../layout/layout";
import "../../App.css";
import BackTotop from "./backTOtop";
import Contact from "./contactus";
import { FaArrowLeft } from "react-icons/fa";
import  { organizationdata } from "../organizationdata";
import logos from '../../img/img1.jpg'
import education from '../../img/sun_icon3.jpeg';
import healthcare from '../../img/hero.jpeg';
import { RiMenuLine } from "react-icons/ri";
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import { button, useNavigate } from "react-router-dom";
import AddressBaseUrl from "../../utils/BaseUrl";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrganization } from "../../actions/orgAction";
import { addToDetail } from "../../actions/detail";
import { HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import img1 from "../../icons/office.png";
import ImgCont from "../../icons/contact.jpeg";
import vacancy from "../../icons/vacancy.png";
import producticon from "../../icons/new-product.png";
import biddings from "../../icons/bidding.png";
import { louberDetail} from "../../actions/louberDetail";
import classNames from 'classnames';
import icon3 from '../../img/download.png';
import "../../App.css"

const Manufacture = () =>{
 // window.scrollTo(0, 0);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const [data, setData] =useState(organizationdata || '');
 useEffect(() => {
  setData(organizationdata);
},[organizationdata]);
//  console.log("yyyyyyyyyy",data[0].logo)
 const [open, setOpen] = useState(true);
 const [vacancieDel, setVacancieDel] = useState(false);
 const [louberDel, setLouberDel] = useState(false);
 const [BiddingDel, setbiddingDel] = useState(false);
 const [productDel, setProductDel] = useState(false);
//menu bar
const [menu, setMenu] = useState(true);
const setmenu = () =>{
  if(menu){
    setMenu(false);
  }else{
    setMenu(true);
  }
}
const { org } = useSelector(
  (state) => state.org
 )

//Products
const {id} = useParams();
useEffect(() => {
   dispatch(getOrganization(id));
},[]);


//  console.log("yibe",org?.job_vacancies
 
// console.log("organization detail now : ", org?.job_vacancies?.job_vacancies[0]?.title);
const firstSection = useRef();
const productSection = useRef();
const vacancieSection = useRef();
const dayworkSection = useRef();
const biddingSection = useRef();
// const [start, setStart] = useState(false);
// const secRef = useRef();

    const getFooter=()=>{
      window.scrollTo({
        top: document.documentElement.scrollHeight,  
        left: 0,
        behavior: 'auto'
        //behavior: 'smooth'
         });
        }
const [isActive,setIsActive]=useState('b0')
const scrollToAllOrg=(btn0)=>{
  window.scrollTo({top: 0, 
    left: 0, 
    behavior: 'auto'
   // behavior: 'smooth'
  });
  setIsActive(btn0)
    }
const contactus = (elmRef,btn1) =>{
  window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior: "smooth"
   })
   setIsActive(btn1)
  }
const scrollToAllProduct = (elmRef,btn2) =>{
  if((org?.promotedProducts?.promotedProducts?.length)>0)
  {
  window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior: "smooth"
    })}
    setIsActive(btn2)
  }
const scrollToAllBids = (elmRef,btn3) =>{
  if(org?.bids?.bids?.length>0)
  {
  window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior: "smooth"
   })}
   setIsActive(btn3)
  }

const scrollToAllVacancy = (elmRef,btn4) =>{
  if((org?.job_vacancies?.job_vacancies.length )>0||(org?.daily_works?.daily_works?.length)>0)
  {
  window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior: "smooth"
    })}
    setIsActive(btn4)
  }
   
const louberWorkDetail = localStorage.getItem("louberWorkDetail")
? JSON.parse(localStorage.getItem("louberWorkDetail"))
: null;

const VacancieDetail = (data) =>{
  dispatch(addToDetail(data));
  setVacancieDel(true);
}
const LouberDetail = (data) =>{
  dispatch(louberDetail(data));
  setLouberDel(true);
}
const BiddingDetail = (data) =>{
  dispatch(addToDetail(data));
  setbiddingDel(true);
}
const ProductsDetail = (data) =>{
  dispatch(addToDetail(data));
  setProductDel(true);
}
// const navLinkStyles=({isActive})=>{
//   return{
//    color:isActive ?'green':'black',
//    fontWeight:isActive?'bolder':'unset',
//    fontSize:isActive? '20px':'unset'
//   }}
const detailInfo = localStorage.getItem("detailInfo")
? JSON.parse(localStorage.getItem("detailInfo"))
: null;
 const slides = [
  {url: healthcare},
  {url: logos},
  {url: education},
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  // styles
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#F3AE33" :  "#2b2b2b" ,
    };
  };
  const isCurrentPage = (href) => {
    // return true if `href` is the current path, many ways you could do this
 }
  const backNavigate =(id)=>{
    navigate("/")
    // navigate("org")
  }
  
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
  const [description, setDescription] = useState(descrip.substring(0,700)+'   . . .');
  var hidden=''
  if (descrip.length > 700 ) {
    hidden='visible'
  }
  else{
    hidden='hidden' 
  }
  const [background, setBackground] = useState('');

  const getDescription=()=>{
    setDescription(descrip)
    setBackground('bg-[#E3E6E6] text-[#E3E6E6]')
  }
      
  //Fixed header after scroll
      const [isScrolled, setIsScrolled] = useState(true);
      const [prevScrollPos, setPrevScrollPos] = useState(0);
  
      useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          setIsScrolled(currentScrollPos < prevScrollPos);
          setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos]);
      const navbarClasses = classNames('fixed', 'top-0', 'w-full', {
        'opacity-0': !isScrolled,
        'opacity-100': isScrolled,
        'transition-transform duration-300 ease-in-out': true,
      });
         // //Stiky navbar in scroll
      //     let prevScrollPosed = window.pageYOffset;

      // window.addEventListener('scroll', function() {
      //   const currentScrollPos = window.pageYOffset;
      
      //   if (prevScrollPosed > currentScrollPos) {
      //     document.querySelector('.sticky-navbar').classList.remove('translate-y-[-100%]');
      //   } else {
      //     document.querySelector('.sticky-navbar').classList.add('translate-y-[-100%]');
      //   }
      
      //   prevScrollPosed = currentScrollPos;
      // });

      const [isSticky, setIsSticky] = useState(false);
      const scrollDistance = 100; // Adjust this value to define the scroll distance threshold
    
      useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          setIsSticky(currentScrollPos > scrollDistance);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
    <Layout>

   <div className="md:pt-0 lg:pt-0 ">
    <>
    <div className='w-full flex flex-row h-16 text-center pl-20  bg-[rgb(243,241,241)]  text-black '>
    {/* <div id="toast-notification" className="w-full pt-0.5 m-2 h-10/12 max-w-xs pl-2 pr-2 text-center text-gray-900 bg-lime-500 rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert"> */}
    {/* <div className="flex items-center mb-3">
    {(org?.promotedProducts?.promotedProducts?.length)>0
      ?(
        <>
       <button type="button" className=" left-1 -mt-0 font-semibold bg-orange-400   text-white justify-center items-center flex-shrink-0 hover:text-gray-900
                    rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex  max-w-80 overflow-x-auto dark:text-gray-500 dark:hover:text-white dark:bg-gray-800
                     dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
        {org?.promotedProducts?.promotedProducts?.length  }        
      </button>
        <span className="mb-1 text-sm mt-1 font-semibold text-gray-900 ">አዲስ ምርቶች በቀርብ ቀን ተለቃዋል</span>
        </>
        ):(<span className="mb-1 text-sm mt-1 text-red-500 font-semibold ">የተለቀቀ ምርት የለም</span>)}
        <button type="button" className="ml-auto mt-0.5 font-semibold text-orange-400 -mx-1 -my-1.5 bg-white justify-center items-center flex-shrink-0 hover:text-gray-900
                   rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
              !
        </button>
    </div> */}

    <div id="toast-notification" className="w-full m-2 pt-0.5 h-10/12 max-w-xs pl-2 pr-2  text-center text-gray-900 rounded-lg dark:bg-gray-800 dark:text-gray-300" role="alert">
   <div className="flex items-center mb-3">
   <img className=' w-6 h-5 mx-4 ' src={producticon} alt='Noicon'/>
   {(org?.promotedProducts?.promotedProducts?.length)>0
      ?(
        <>
      <button type="button" className=" left-1 mt-0.5 font-semibol font-bold text-amber-500 justify-center items-center flex-shrink-0 hover:text-gray-900
                    rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex  overflow-x-auto dark:text-gray-500 dark:hover:text-white dark:bg-gray-800
                     dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                     {org?.promotedProducts?.promotedProducts?.length  }        
      </button>
        <span className="mb-1 text-sm mt-1 font-semibold text-gray-900 ">አዲስ ምርቶች በቀርብ ቀን ተለቃዋል</span>
        </>
        ):(<span className="mb-1 text-sm mt-1 text-red-500 font-semibold ">የተለቀቀ ምርት የለም</span>)}
    </div>
  </div>
{/* </div> */}
            {/* Bids */}
    <div id="toast-notification" className="w-full m-2 pt-0.5 h-10/12 max-w-xs pl-2 pr-2  text-center text-gray-900 rounded-lg dark:bg-gray-800 dark:text-gray-300" role="alert">
    <div className="flex items-center mb-3">
    <img className=' w-6 h-5 mx-4 ' src={biddings} alt='Noicon'/>
    {(org?.bids?.bids?.length>0)
      ?(
        <>
      <button type="button" className=" left-1 -mt-0.5 font-semibol font-bold text-amber-500 justify-center items-center flex-shrink-0 hover:text-gray-900
                    rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex  overflow-x-auto dark:text-gray-500 dark:hover:text-white dark:bg-gray-800
                     dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                     {org?.bids?.bids?.length}  

      </button>
        <span className="mb-1 text-sm mt-1 font-semibold text-gray-900 ">አዲስ የጫራታ ማስታወቂያዎች በቀርብ ቀን ተለቃዋል</span>
        </>
        ):(<span className="mb-1 text-sm mt-1 text-red-500 font-semibold ">የተለቀቀ የጫራታ ማስታወቂያ የለም</span>)}
    </div>
    </div>
   {/* <div id="toast-notification" className="w-full pt-0.5 m-2 h-10/12 max-w-xs pl-2 pr-2 text-center text-gray-900 bg-lime-500 rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
    <div className="flex items-center mb-3">
    {((org?.job_vacancies?.job_vacancies.length )>0||(org?.daily_works?.daily_works?.length)>0)
      ?(
        <>
       <button type="button" className=" left-1 -mt-0 font-semibold bg-orange-400   text-white justify-center items-center flex-shrink-0 hover:text-gray-900
                    rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex  max-w-80 overflow-x-auto dark:text-gray-500 dark:hover:text-white dark:bg-gray-800
                     dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                     {(org?.job_vacancies?.job_vacancies.length )+(org?.daily_works?.daily_works?.length)}  
      </button>
        <span className="mb-1 text-sm mt-1 font-semibold text-gray-900 ">አዲስ የስራ ማስታወቂያዎች በቀርብ ቀን ተለቃዋል</span>
        </>
        ):(<span className="mb-1 text-sm mt-1 text-red-500 font-semibold ">የተለቀቀ የስራ ማስታወቂያ የለም</span>)}
        <button type="button" className="ml-auto mt-0.5 font-semibold text-orange-400 -mx-1 -my-1.5 bg-white justify-center items-center flex-shrink-0 hover:text-gray-900
                   rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
              !
        </button>
    </div>
    </div> */}

    {/* Vacancies */}
    <div id="toast-notification" className="w-full m-2 pt-0.5 h-10/12 max-w-xs pl-2 pr-2  text-center text-gray-900 rounded-lg dark:bg-gray-800 dark:text-gray-300" role="alert">
    <div className="flex items-center mb-3">
    <img className=' w-6 h-5 mx-4' src={vacancy} alt='Noicon'/> 
    {((org?.job_vacancies?.job_vacancies.length )>0||(org?.daily_works?.daily_works?.length)>0)  
      ?(
        <>
      <button type="button" className=" left-1 font-semibol font-bold text-amber-500 justify-center items-center flex-shrink-0 hover:text-gray-900
                    rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex  overflow-x-auto dark:text-gray-500 dark:hover:text-white dark:bg-gray-800
                     dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
                     {(org?.job_vacancies?.job_vacancies.length )+(org?.daily_works?.daily_works?.length)}  

      </button>
        <span className="mb-1 text-sm mt-1 w-10/12 font-semibold text-gray-900 ">አዲስ የስራ ማስታወቂያዎች በቀርብ ቀን ተለቃዋል</span>
        </>
        ):(<span className="mb-1 text-sm mt-1 text-red-500 font-semibold ">የተለቀቀ የስራ ማስታወቂያ የለም</span>)}

    </div>
    </div>

    <div id="toast-notification" className="h-full m-2 h-10/12 gap-x-7  max-w-xs pl-2 pr-2 text-center text-gray-900 bg-[rgb(243,241,241)] rounded-lg dark:bg-gray-800 dark:text-gray-300" role="alert">
    <div className="flex flex-col items-center pl-10 mb-3 h-full">
 
        <span className="mb-1  text-sm  font-semibold text-gray-900 ">Phone:{org?.org?.phone}</span>
        <span className="mb-1  text-sm  font-semibold text-gray-900 ">Email:
        <a href="" className="mb-1  text-sm underline text-sky-500 font-semibold ">{org?.org?.email}</a>
        </span>
    </div>
    </div>
   </div> 
   <nav className={`navbar ${isSticky ? 'sticky' : ''} z-50 pr-7  top-0 overflow-hidden justify-between list-none font-serif uppercase font-medium xl:text-xl 
   md:text-xl xs:text-xs text-justify-center w-full md:h-24 sm:h-20 shadow-xl sm:flex bg-white items-center `}>
   <div className="flex">

   {/* <button className="fixed bottom-10 right-5 h-6 w-6 z-100 bg-white text-2xl" onClick={scrollTop}>^</button> */}
<button class="w-14 h-7 rounded-lg bg-sky-500 text-center justify-center hover:bg-green-500 text-white ml-3 mt-5"
           onClick={() => backNavigate()}>
          <FaArrowLeft className=" w-full text-white items-center"  />
</button>
<button className=' w-96 p-2 md:flex block '  
   onClick={() => backNavigate()}> 
  <img className=' md:w-32 md:h-20 w-20 h-10  -mt-3 lg:ml-1 sm:ml-5 rounded-2xl' 
  //src={Logue} 
  src={`${AddressBaseUrl}/images/${org?.org?.logo}`}
  alt="NoLogue"
  />
   <h2 className="md:-ml-1 -ml-32 ">{org?.org?.name} </h2>
  </button>
 </div>
<div className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
          <RiMenuLine size={24} onClick={setmenu}/>
          {/* <ion-icon name={!menu?'close':'menu'}></ion-icon> */}
</div>
<ul className=' mr-8  lg:flex md:flex bg-white  left-0 w-full md:w-auto
 sm:hidden absolute md:static justify-end items-center flex-1 list-none z-20 '>
<li className='mx-6'><button className={`transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex
          ${isActive === 'b0' ? 'text-[rgb(0,153,255)]' : ''}`}
          onClick={()=> scrollToAllOrg('b0')}>ስለ ድርጅቱ</button></li>
<li className='mx-6'>
          <button onClick={()=> contactus(firstSection,'b1')}
                  className={`transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex
                  ${isActive === 'b1' ? 'text-[#0099ff]' : ''}`} >
                 አግኙን
               </button></li>
<li className='mx-6'><button  className={`transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex
                                           ${isActive === 'b2' ? 'text-[#0099ff]' : ''}`}
 onClick={()=> scrollToAllProduct(productSection,'b2')}>
ምርቶች</button></li>
<li className='mx-6'><button onClick={()=> scrollToAllBids(biddingSection,'b3')}
  className={`transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex
             ${isActive === 'b3' ? 'text-[#0099ff]' : ''}`} 
    >   
    የጨረታ ማስታዎቂያ </button></li>
 <li className='mx-6'><button onClick={()=> scrollToAllVacancy(vacancieSection,'b4')}
 className={`transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex
            ${isActive === 'b4' ? 'text-[#0099ff]' : ''}`}>
 የስራ ማስታዎቂያ</button></li>
 {/* <li><button className=' transition duration-700 transform hover:-translate-y-1 hover:scale-110 ml-12 flex' 
    >  ግብት </button></li> */}
</ul>
</nav>
{/* Mobile Navigation */}
<ul className={` ${!menu ? "left-0 opacity-100" :"left-[-750px] md:opacity-0"}
                    sm:flex lg:hidden flex-1  list-none flex flex-col
                    p-6 bg-black-gradient fixed w-full right-0  ml-0 my-2 top-14
                    sidebar bg-white transition-all duration-500 ease-in z-50
                    `}>
  <li className='mx-6 font-serif uppercase font-medium text-xl'>
                <button onClick={()=> scrollToAllOrg()}
                 className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex'
                to ="/"> <img className=' w-6 h-5 mx-4 ' src={img1} alt='Noicon'/>ስለ ድርጅቱ</button></li>
                <li className='mx-6 font-serif uppercase font-medium text-xl'>
                <button onClick={()=> contactus(firstSection)}
                 className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex'
                to ="/"> <img className=' w-6 h-5 mx-4 ' src={ImgCont} alt='Noicon'/>አግኙን</button></li>
 <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
      <button onClick={()=> scrollToAllProduct(productSection)}
      className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex'>
      <img className=' w-6 h-5 mx-4 ' src={producticon} alt='Noicon'/> ምርቶች</button></li>
      <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
     <button onClick={()=> scrollToAllBids(biddingSection)}
      className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex' 
        >   
        <img className=' w-6 h-5 mx-4 ' src={biddings} alt='Noicon'/> የጨረታ ማስታዎቂያ </button></li>
 <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
      <button onClick={()=> scrollToAllVacancy(vacancieSection)}
      className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex'>
      <img className=' w-6 h-5 mx-4 ' src={vacancy} alt='Noicon'/>  የስራ ማስታዎቂያ</button></li>
    {/* <li><button className=' transition duration-700 transform hover:-translate-y-1 hover:scale-110 ml-12 flex' 
        >  ግብት </button></li> */}
    </ul>
   </>    
  </div>
  <div className=" mt-20 bg-[white] ">
  <div className="z-50">
       <BackTotop />
     </div>
        <div className=" bg-[white] md:flex-row pb-12 flex-col md:pt-0 lg:pt-0 md:mb-0 mb-44 pt-24  md:h-full w-full  group">
          <div className='h-full  md:flex block md:h-full ml-10 w-11/12 md:-mt-10 -mt-5 rounded p-2'> 
          <div
            className=" md:w-10/12 md:mb-0 mb-16  md:mr-8 h-full md:-mt-5 -mt-10 flex md:ml-5 ml-2 flex-col md:p-2 p-3 justify-center items-center">
             {(org?.org)
             ?(<>
              <h1 className="text-4xl md:text-4xl xl:text-5xl capitalize text-[#F49F08] font-bold font-display tracking-tight leading-tight italic">
                  {`${org?.org?.name}`}
                  </h1>
                  <p className="text-2xl md:text-2xl mt-4 capitalize xl:text-3xl text-[#F49F08] font-bold font-display tracking-tight leading-tight">
                  {`${ org?.org?.businessSector}`}</p>
                  <p id='custom-scroll' className=" h-11/12 w-11/12 mt-5 shadow-lg bg-slate-200 p-5 justify-center rounded-md max-h-72 overflow-y-auto scrollbar-thumb-indigo-500 scrollbar-track-gray-200 "> 
                  {org?.org?.description}
                  {descrip}
                  </p>
             </>):(<p className="text-2xl md:text-2xl mt-4 xl:text-3xl text-[#F49F08] font-bold font-display tracking-tight leading-tight">
                    NOT promoted </p>)
             }
      {/* <div>  */}
         {/* Description Page */}
         {/* <p id='custom-scroll' className=" h-11/12 w-11/12 mt-5 shadow-lg bg-slate-200 p-5 justify-center rounded-md max-h-72 overflow-y-auto scrollbar-thumb-indigo-500 scrollbar-track-gray-200 ">  */}
       {/* {paragraphClass}>  */}
       {/* {descrip} */}
       {/* </p>  */}
       {/* {!expanded && ( 
        <button 
          className="text-blue-500 hover:underline w-32 pl-3 rounded-lg h-10 bg-[#fe9900]" 
          onClick={toggleExpanded} 
        >  Read More
        <img className='w-6 h-6 -ml-2 -mt-6 rounded-full' alt='' src={icon3}/> 
        </button> 
                )}  */}
        {/* {expanded && ( 
          <button  style={{backgroundColor:"#fe9900"}}
          className="text-blue-500 hover:underline w-32 pl-3 rounded-lg h-10 " 
          onClick={toggleExpanded} 
        >  Read less
        <img className='w-6 h-6 -ml-2 -mt-6 rounded-full' alt='' src={icon3}/> 
         </button>
         )}  */}
       {/* </div>  */}
         </div>
        <div
          // style={{ backgroundImage: `url(${org && org[currentIndex]?.url})` }}
          className='md:ml-2 ml-5 md:mt-2 bg-slate-200 border p-2 md:mr-7 -mt-20 mr-2 rounded-2xl md:w-2/3 w-40 md:h-full h-60 bg-center duration-700 relative bg-cover bg-no-repeat'
          >
          <img 
          className="md:w-full md:h-96 w-11/12 h-3/4 rounded-lg "
         // src={`/img/Eplusapp1.png`} 
          src={`${AddressBaseUrl}/images/${org?.org?.logo}`}
          alt=""
          />
        </div>
       </div>
     </div>
 {/* product list */}
 { 
     (org?.promotedProducts?.promotedProducts?.length)>0
      ?(
        <div className="items-center py-3 ml-16 mr-12 mb-4 border-t border-gray-500 mt-1" ref={productSection}>
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8"> ምርቶች </span>
         </button>
        </div>
      ):(null)
    }
    <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4 ml-16 mr-12">
      {
        (org?.promotedProducts?.promotedProducts?.length)>0
          ?(
            data[0]?.Products?.slice(0, 3).map((products, index) => (
       <div key={index} className="mb-6 lg:mb-0">
        <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
            <div className="flex pb-2">
                  <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-screen h-72 transition hover:scale-125 duration-700 rounded-md cursor-pointer"                     
                     onClick={() => ProductsDetail(products) }
                      //src={`/img/${products.featureImage}`}
                      src={`${AddressBaseUrl}/images/${products.image}`}
                      alt="product img not found"
                    />
                  </div>
                </div>
            <div className="ml-5 m-auto">
              <p className="text-sm font-bold">{products.name}</p>
              <p className="mb-2 text-sm ">{products.description.substring(0, 30) + " ..."}</p>
              <p className="mb-2 text-sm ">  {products?.createdAt.split('T')[0]}</p>
             </div>
            </div>
           </div>
        )))
      :(null)  
      }
     </div>
     {productDel && (
          <> 
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6 mx-auto max-w-7xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-orange-400 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-end p-1">
                    <button
                       onClick={() => setProductDel(false) }
                      type="button"
                      className="text-red-600 bg-transparent hover:bg-gray-200 rounded-lg text-lg p-1 ml-auto inline-flex items-center"
                      data-modal-toggle="log-in-model"
                    >
                      <HiOutlineX className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="w-full flex bg-white">
                    <div className="p-3 w-1/2 border border-grey-100 shadow-lg">
                    <img
                    className="w-full h-96 transition cursor-pointer duration-700"
                      //src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
                      src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                   {/* <p className="text-lg font-bold">{louberWorkDetail?.name}</p>  */}
                    <div class="bg-white rounded-md max-w-4xl mx-auto p-2 space-y-2 -mt-2 shadow-lg">
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">የድርጅቱ ስም: <span >{org?.org?.name}</span></h3> 
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምርቱ መጠሪያ: </h3> <span >{louberWorkDetail?.title} ግልጽ ጨረታ ማስታወቂያ</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምርቱ አይነት:</h3> <span >{louberWorkDetail?.type} </span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምርቱ የተናጠል ዋጋ:</h3><span >200 </span>የምርቱ የጀምላ ዋጋ:</h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">ቦታ: </h3><span>BD</span></h3>
                        <div class="pt-2">
                          <h3 class="font-semibold -ml-56 underline"> ማብራሪያ:</h3>
                            <p class=" mt-2">{louberWorkDetail?.description}</p>
                        </div>
                        <h3 class="border-t mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">EplusApp88@gmail.com</span></h3> 
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
            </>
          )} 
           {/* bids */}
    { 
     (org?.bids?.bids?.length)>0
      ?(
        <div className="items-center py-3 mb-4 ml-16 mr-12 mt-6 border-t border-gray-500" ref= {biddingSection}>
         <button className="  text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የጨረታ ማስታዎቂያ </span>
         </button>
        </div>
       ):(null)
     }
     <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4 ml-16 mr-12">
      {
        (org?.bids?.bids?.length)>0
          ?(
            org?.bids?.bids?.slice(0, 3).map((bid, index) => (
       <div key={index} className="mb-6 lg:mb-0 ">
        <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
            <div className="flex pb-2">
                  <div
                    className="p-2  relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-screen h-72 transition hover:scale-125 duration-700 rounded-md cursor-pointer"
                     // src={`${AddressBaseUrl}/images/${bid.image}`}
                     src={`${AddressBaseUrl}/images/${bid.image}`}
                      alt="product img not found"
                      onClick={() => BiddingDetail(bid) }
                    />
                  </div>
                </div>
            <div className=" ml-5 m-auto">
              <p className="text-sm font-bold">{bid?.title}</p>
              <p className="mb-2 text-sm ">{bid?.description.substring(0, 30) + " ..."}</p>
              <p className="mb-2 text-sm ">  {bid?.createdAt.split('T')[0]}</p>
             </div>
            </div>
           </div>
        )))
      :(null)  
      }
     </div>
     {BiddingDel && (
          <> 
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
         <div className="relative w-auto my-6 mx-auto max-w-7xl">
           {/*content*/}
             <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-orange-400 outline-none focus:outline-none">
               {/*header*/}
                <div className="flex justify-end p-1">
                  <button
                    onClick={() => setbiddingDel(false) }
                      type="button"
                      className="text-red-600 bg-transparent hover:bg-gray-200 rounded-lg text-lg p-1 ml-auto inline-flex items-center"
                      data-modal-toggle="log-in-model"
                    >
                      <HiOutlineX className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="w-full flex bg-white">
                    <div className="p-3 w-1/2 border border-grey-100 shadow-lg">
                    <img
                      className="w-full h-96 transition cursor-pointer duration-700"
                      src={`${AddressBaseUrl}/images/${detailInfo.image}`}
                     // src={samrtPc} 
                      alt="product img not found"
                      /> 
                      </div>
                     <div className="m-4">
                     <p className="text-lg font-bold">{detailInfo?.title}</p> 
                     <div class="pt-2">
                     <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.description}</p>  
                     </div>
                     {(org?.promotedOrgs?.length > 0)
                      ?(
                        org?.promotedOrgs?.map((orgs,index) => 
                      (
                        (orgs.id)==(detailInfo.orgId)?(
                            <>
                            <h3 class="border-t mb-2 pt-3 font-semibold underline">
                              phone: <span class="font-thin">{orgs?.phone}</span></h3>
                              <h3 class="border-t mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">{orgs?.email}</span></h3> 
                          </>)
                          :("")  
                      ))):("")} 
                   </div>
                  </div>
                 </div>
                </div>
               </div>
            </>
          )} 
          {/* Vacancy */}
<div className="w-11/12 xl:w-11/12 mx-auto md:mt-10 lg:mt-10 border-t border-gray-500 ">
    <section className="mb-12 text-gray-800 text-center ">
    {/* job_vacancies */}
    {/* (org?.job_vacancies?.length)>0 */}
    { 
     ((org?.job_vacancies?.job_vacancies.length )>0||(org?.daily_works?.daily_works?.length)>0)
      ?(
        <div className="items-center py-3 mb-4">
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የስራ ማስታዎቂያ</span>
         </button>
        </div>
      ):(null)
    }
      <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4" ref={vacancieSection}>
      {
        (org?.job_vacancies?.job_vacancies.length)>0
          ?(
            org?.job_vacancies?.job_vacancies?.slice(0, 7).map((job, index) => (
       <div key={index} className="mb-6 lg:mb-0">
        <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
            <div className="flex pb-2">
                  <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                  {/*      src={`${AddressBaseUrl}/images/${job.image}`} */}
                    <img
                      className="w-screen h-72 transition hover:scale-125 duration-700 rounded-md cursor-pointer"
                      //src={`/img/${job.featureImage}`}
                      src={`${AddressBaseUrl}/images/${job.image}`}
                      alt="product img not found"
                      onClick={() => VacancieDetail(job) }
                    />
                  </div>
                </div>
            <div className="m-auto">
              <p className="text-sm font-bold">{job?.title}</p>
              <p className="mb-2 text-sm ">{job?.description.substring(0, 30) + " ..."}</p>
              <p className="mb-2 text-sm ">  {job?.createdAt.split('T')[0]}</p>
             </div>
            </div>
           </div>
        )))
      :(null)  
      }
     </div>
     {vacancieDel && (
          <> 
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6  mx-auto max-w-7xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg bg-orange-400 relative flex flex-col w-full  outline-none focus:outline-none">
                  {/*header*/}               
                   <div className="flex justify-end p-1">
                    <button
                       onClick={() => setVacancieDel(false) }
                      type="button"
                      className="text-red-600 bg-transparent hover:bg-gray-200 rounded-lg text-lg p-1 ml-auto inline-flex items-center"
                      data-modal-toggle="log-in-model"
                    >
                      <HiOutlineX className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="w-full flex bg-white">
                    <div className="p-2 w-1/2 border border-grey-100 shadow-lg">
                    {/* src={`/img/${detailInfo.featureImage}`} */}
                    <img
                    className="w-full h-96 transition hover:scale-125 duration-700 rounded-md cursor-pointer "
                     
                      //src={`${AddressBaseUrl}/images/${detailInfo.image}`}
                      src={`${AddressBaseUrl}/images/${detailInfo.image}`}
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                   {/* <p className="text-lg font-bold">{louberWorkDetail?.name}</p>  */}
                    <div class="bg-white rounded-md max-w-4xl mx-auto p-2 space-y-2 -mt-2 shadow-lg">
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">የድርጅቱ ስም: <span >EplusApp/ኢጵላሣጵ</span></h3> 
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራው መጠሪያ: </h3> <span >{detailInfo?.title}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">ደሞዝ: </h3><span> {detailInfo?.price}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምዝገባ ማብቂያ ቀን: </h3><span >{detailInfo?.closingDate?.split('T')[0]}-{detailInfo?.closingDate?.split('T')[0]}</span></h3>
                    <div class="pt-2">
                    <h3 class="font-semibold -ml-56 underline"> ማብራሪያ:</h3>
                    <p class=" mt-2">{detailInfo?.description}</p>
                    </div>
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">phone: <span class="font-thin">0984008445</span></h3> 
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">EplusApp88@gmail.com</span></h3> 
                    </div>
                    </div>
                  </div>
                 </div>
                </div>
               </div>
              </>
             )} 
     <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4" ref={dayworkSection}>
       {
         (org?.daily_works?.daily_works?.length)>0
           ?(
            org?.daily_works?.daily_works?.slice(0, 7).map((job, index) => (
         <div key={index} className="mb-6 lg:mb-0">
         <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
         <div className="flex pb-2">
         <div
            className="p-2 relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
                  {/*      src={`${AddressBaseUrl}/images/${job.image}`} */}
                    <img
                    className="w-screen h-72 transition hover:scale-125 duration-700 rounded-md cursor-pointer"
                      //src={`/img/${job.featureImage}`}
                      src={`${AddressBaseUrl}/images/${job.image}`}
                      alt="product img not found"
                      onClick={() => LouberDetail(job) }
                    />
                  </div>
                 </div>
                <div className="m-auto">
              <p className="text-sm font-bold">{job?.title}</p>
              <p className="mb-2 text-sm ">{job?.description.substring(0, 30) + " ..."}</p>
              <p className="mb-2 text-sm ">  {job?.createdAt.split('T')[0]}</p>
             </div>
            </div>
           </div>
        )))
      :(null) }
     </div>
     {louberDel && (
          <> 
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6 mx-auto max-w-7xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-orange-400 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-end p-1">
                    <button
                       onClick={() => setLouberDel(false) }
                      type="button"
                      className="text-red-600 bg-transparent hover:bg-gray-200 rounded-lg text-lg p-1 ml-auto inline-flex items-center"
                      data-modal-toggle="log-in-model"
                    >
                      <HiOutlineX className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="w-full flex bg-white">
                    <div className="p-3 w-1/2 border border-grey-100 shadow-lg">
                    <img
                    className="w-full h-96 transition cursor-pointer duration-700"
                      src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                   {/* <p className="text-lg font-bold">{louberWorkDetail?.name}</p>  */}
                    <div class="bg-white rounded-md max-w-4xl mx-auto p-2 space-y-2 -mt-2 shadow-lg">
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">Name: <span >{org?.org?.name}</span></h3> 
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራው መጠሪያ: </h3> <span >{louberWorkDetail?.title}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራው አይነት:</h3> <span >{louberWorkDetail?.type}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራ ቀን/ስአት:</h3><span >ሙሉ ቀን</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የቀን ክፍያ: </h3><span> {louberWorkDetail?.price}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምዝገባ ማብቂያ ቀን: </h3><span >{louberWorkDetail?.closingDate?.split('T')[0]}-{louberWorkDetail?.closingDate?.split('T')[0]}</span></h3>
                        <div class="pt-2">
                          <h3 class="font-semibold -ml-56 underline"> ማብራሪያ:</h3>
                            <p class=" mt-2">{louberWorkDetail?.description}</p>
                        </div>
                        <h3 class="border-t mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">EplusApp88@gmail.com</span></h3> 
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
            </>
          )} 
   </section>
  </div>
      <div className="w-11/12 mx-auto border-t border-gray-500 " ref={firstSection}>
       <div class="grid lg:grid-cols-2 xl:gap-10 md:gap-6 xl:gap-x-4">
        <div className="flex items-center pt-5 justify-center md:justify-start">
         <NavLink onClick={() => setOpen(true)} className="text-xl text-[#F49F08] hover:text-sky-400" > ለበለጠ መረጃ </NavLink>
         </div>
          <div>
           <button onClick={() => setOpen(false)} className="text-xl text-black"> {org?.org?.name}</button>
          </div>
        </div>
      </div>
      { open ? (
          <>
           <div className="md:mt-2 lg:mt-2 mt-2">
            <Contact/>
           </div>
          </>
      ):(
        <>
        <div className="w-11/12 mx-auto">
          <div className="flex flex-wrap items-center rounded-lg mx-auto">
            <div data-aos="fade-up-right" className="grow-0 shrink-0 basis-auto w-full  md:w-4/12 xl:w-4/12 h-[401px]">
              <img
                src={`${AddressBaseUrl}/images/${org?.org?.logo}`}
                //src={smartDesktop}
                alt="img of eplus img"
                className="w-full rounded-lg h-[350px] mt-6"
              />
            </div>
            <div data-aos="fade-up" className="grow-0 shrink-0 basis-auto w-full  md:w-6/12 xl:w-6/12" >
              <div className="pl-5 xl:pl-10 mt-4 select-none">
                <p className="text-textColor font-display xl:text-lg md:text-lg leading-8 text-left tracking-tight pb-2">
                {org?.org?.name}
                </p>
                <p className="text-textColor font-display xl:text-lg md:text-lg leading-8 text-left tracking-tight pb-2">
                  {/* ኢጵላሣጵ ንግድ ስራዎች አክሲዮን ማህበር በኢትዮጵያ አዲሱ የንግድ ፈቃድ መስጫ መደብ መሠረት ረቂቅ
                  መረጃ ወይም ሶፍትዌር ፍብርክ (ንድፍ፣ ምርት፣ ብልጽግ፣ ትግብር፣ ድር ንድፍና ዝርግት አካቶ) እና
                  መረጃ የማቀነባበርና የመረጃ ቋት የማደራጀት ስራዎች ረቂቅ የመረጃ ምጥቀቶችን ማዘጋጀት፣ የመረጃ
                  ቋት ማዘጋጀት፣ በቀላሉ እንዲፈለጉ ማድረግ፣ ወቅቱን ጠብቆ የማሻሻል፣ የሶፍትዌር ዲዛይን፣ ልማት፣ */}
                  {org?.org?.description}
                </p>
              </div>
            </div>
          </div>
         </div>
        </>
      )}
    </div>
    </Layout>
    );}
export default Manufacture;