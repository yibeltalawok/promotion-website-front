  import React, { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
  import AddressBaseUrl from '../../utils/BaseUrl';
  import { RxDotFilled } from 'react-icons/rx';
  import { viewOrganization } from '../../actions/orgAction';
  import { useNavigate } from 'react-router-dom';
  import {dataVacancy} from '../vacaData';
  import logoImage from '../../img/logobg1.png';

   function Orgdetail() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { org } = useSelector(
    (state) => state.org )
    const [data, setData] =useState(dataVacancy || '');
    console.log("organization yibeee list : ", org?.promotedOrgs);
    const [descrip, setDescrip] = useState(
`      Eplasap Trade Co., Ltd. draft of the new business licensing category in Ethiopia
      Information or software creation (including design, production, development, implementation, web design and development) and
      data processing and database organization works, preparation of draft information resources, information
        Creating databases, making them easily searchable, keeping up with the times, software design, development,
        implementation, software installation, commissioning and testing, everything has been completed before entering the country
        application software customization, computer network design, cabling; implementation and get
        Proof of competence to do other computer-related work from ኢ/ቴ/ሚ and የን/ሥ/ፈቃድ
        from ን/ገ/ል/ሚ.`)
  // console.log("organization logo name : ", org?.promotedOrgs && org?.promotedOrgs?.name);
  useEffect(() =>{
    dispatch(viewOrganization());
  },[])
  useEffect(() => {
    setData(dataVacancy);
  }, [dataVacancy])
 //console.log("organization list : ", org)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count,setCount]=useState(0) 
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? org?.promotedOrgs?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
   //console.log("organization length : ", org?.promotedOrgs?.length);
  const nextSlide = () => {
    const isLastSlide = currentIndex === org?.promotedOrgs?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //console.log("newIndex : ", newIndex);
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const orgHandler = (id) =>{
    navigate("org/"+id)
    //  navigate("org")
  }
  return (
   <div className='bg-[white] md:mt-0 mt-20 w-full'>
    <div className="hidden md:flex items-center py-3 mb-4 ">
      <button
        className=" text-lg font-display text-black font-medium hover:text-[#0099ff]">
        <span className=" ml-7 underline decoration-pink-800 decoration-4 underline-offset-8 mr-1">Organaizations</span> Lists
       </button>
      </div>
     <div className='relative bg-white w-full  h-full md:flex lg:flex pb-8'>   
          <div className='relative m-8 md:w-6/12'>
         <h1 className='md:text-3xl text-lg italic'>{`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}`}</h1>
         <h1 className='md:flex pt-0 md:pt-6 font-semibold lg:pt-6'  onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}>
         {/* {`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.businessSector}`} */}
         {/* {org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.description} */}
         <p id="custom-scroll" className=" h-11/12 w-11/12 mt-5 shadow-lg bg-slate-200 p-5 justify-center rounded-md max-h-72 overflow-y-auto scrollbar-thumb-indigo-500 scrollbar-track-gray-200 "> 
                 {descrip}
                 {/* {org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.description} */}
              </p> 
         </h1>
        <div className='pt-0 md:pt-4 lg:pt-4'>
          <a>
            <button className='bg-[#0099ff] text-white font-semibold md:py-1 lg:py-1 lg:px-12 md:px-12 px-2 h-full' onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}>Data List</button>
          </a>           
          {/* <a>
            <button className='bg-[#0397FF] text-white font-semibold md:py-1 lg:py-1 lg:px-12 md:px-12 px-2 h-full'  onClick={() => orgHandler()}>ዝርዝር መረጃ</button>
          </a>   */}
        </div>
       </div>
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='md:w-5/12 h-full rounded-2xl bg-center bg-cover duration-500 md:-mt-10 mt-0 pt-1'
      >
    <img className='h-52 md:h-96 lg:h-96 w-full' alt=''
    // src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`} 
         src={logoImage} 
        onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}
        /> 
    <div className='flex mb-0 justify-center py-2 pb-8 ml-8'>
      {
      (data?.length)>0
        ?(
         data?.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          {(data?.length)<=6
          ?(
            <button className=' bg-white border-2 w-9 h-9 rounded-xl pb-3 m-1'>
          {slideIndex+1}
            {/* <RxDotFilled/> */}
          </button>
          ):""
        }
       </div>
        ))):(null)
        }
      {/* Left Arrow */}

       {(data?.length)>6
          ?(
         <> 
        <button className=' bg-white border-2 w-9 h-9 rounded-xl font-semibold  m-1'>
         1
        </button>
          <button className=' bg-white border-2 w-9 h-9 rounded-2xl font-semibold m-1'>
          2 
          </button>
          <button className=' bg-white border-2 w-9 h-9 font-semibold rounded-xl m-1'>
          3
          </button>
          <button className='flex pt-3'>
          <RxDotFilled className=' font-bold'/> 
          <RxDotFilled className=' font-bold'/> 
          <RxDotFilled className=' font-bold'/> 
          </button>
          <button className=' bg-white border-2 w-9 h-9 rounded-xl pb-3 m-1'>
           {data?.length}
           </button>
           </>
          ):""
        }
    </div>
    <div className='flex mb-0 justify-center -mt-6 pb-8'>
      <div className='hover:bg-zinc-950 text-2xl p-0 lg:p-2 bg-blackl text-black hover:text-white cursor-pointer border-2 border-zinc-950 duration-700'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
       {/* Right Arrow */}
      <div className='hover:bg-zinc-950  md:left-12 lg:left-12 left-8 text-2xl p-0 md:p-2 lg:p-2 text-black cursor-pointer hover:text-white border-2 border-zinc-950 duration-700'>
         <BsChevronCompactRight onClick={nextSlide} size={30} />
     </div>
   </div>
     {
      (data?.length)>0
        ?(
          <>
       <p className=" float-right p-3 -mt-10 md:ml-0 ml-14 md:mr-28">Generally <span className='font-bold -mt-4'>
         {data?.length} </span>
         organaizations is found.  
        </p>
        </>):("No Any Organization")}
    </div>
  </div>
</div>
  );}
export default Orgdetail;