import React,{useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
// import { viewProducts } from "../../actions/productAction";
import moment from 'moment';
import { useForm } from "react-hook-form";
import {dataVacancy} from '../vacaData';
import samrtPc from '../../img/promotion-lg.png';
import { HiOutlineX } from "react-icons/hi";
import { louberDetail} from "../../actions/louberDetail";
import { Daily_Labourer ,searchDayWork} from "../../actions/louberWorkAction";
import { viewOrganization } from '../../actions/orgAction';
import  AddressBaseUrl from "../../utils/BaseUrl";
import { generateTelegramShareLink } from './generateTelegramShareLink';
import tgicon from '../../icons/Telegram_logo.svg.webp';
import fbicon from '../../icons/fbicon.png';
// import show from '../../icons/show.png';
// import like from '../../icons/like.png';

  const LouberWork = (message) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [seeMore, setSeeMore] = useState(false);
    const [vacancieDel, setVacancieDel] = useState(false);
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();
    const { org } = useSelector(
      (state) => state.org )
    const {loubers} = useSelector(
      (state) => state.loubers
  );
  console.log("daily work are : ", loubers);
  console.log("page No. : ", loubers.pages);
 useEffect(() =>{
  dispatch(viewOrganization());
  },[])
  const orgHandler=(id)=>{
    navigate("org/"+id)
}
useEffect(() =>{
      dispatch(Daily_Labourer());
  },[]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === loubers.pages - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   dispatch(Daily_Labourer(newIndex));
  // };

    // const { product } = useSelector(
    //     (state) =>state.product
    //     );
        // console.log("all products are1 ", product);

const [data, setData] =useState(dataVacancy || '');

// useEffect(()=>{
//     dispatch(viewProducts());
//   },[]);
//change useselector data to useState states with react js
  useEffect(() => {
    setData(dataVacancy);
  }, [dataVacancy])
  const likeProduct =()=>{
    alert("Thank you")
  }
  const louberWorkDetail = localStorage.getItem("louberWorkDetail")
  ? JSON.parse(localStorage.getItem("louberWorkDetail"))
  : null;

  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
     if (term === "") return alert("Please enter search term!");
    dispatch(searchDayWork(term));
    console.log("term : ",term);
    setTerm("");
  };

  const [currentPage, setPage] = useState(1)
  const selectPageHandler = (selectedPage) => {
    // alert(data.length+","+selectedPage)
    console.log("next button cliked : ",selectedPage);
    if (selectedPage >= 1 && (selectedPage * 6)-6 <= loubers?.vacancies?.length  && selectedPage !== currentPage) {
      setPage(selectedPage)
    }}
    //Count Number of Views
    // const [views, setViews] = useState(0);

    // useEffect(() => {
    //   // Update the view count when the component mounts
    //   setViews((prevViews) => prevViews + 1);
    // }, []);
  
    // useEffect(() => {
    //   // Store the view count in local storage whenever it changes
    //   localStorage.setItem('viewCount', views.toString());
    // }, [views]);
       // View count
   const [views, setViews] = useState(1635453);
   const [hasView, setHasView] = useState(false);
   useEffect(() => {
     // Check if the user has already liked the post
     const liked = localStorage.getItem('postViewed');
     if (liked === 'true') {
      setHasView(true);
     }}, []);
     const VacancieDetail = (data) =>{
      dispatch(louberDetail(data));
      setVacancieDel(true);
     if (!hasView) {
       setViews(views + 1);
        setHasView(true);
        localStorage.setItem('postViewed', 'true');  
      }}

      //Share To Telegram
      const handleTGShareClick = () => {
        const telegramShareLink = generateTelegramShareLink(message);
           window.open(telegramShareLink);
         };
       //Share To FaceBook
       const handleFBShareClick = () => {
       const urlToShare = 'http://localhost:3000'; // Replace with the URL you want to share  
        window.FB.ui(
         {
           method: 'share',
           href: urlToShare,
         },
         function (response) {
           // Handle the response if needed
           console.log(response);
         });};
       //Change number likes and views to its text form


return(
  <>
   <div className=" w-full bg-[white] md:mt-0 mt-20 pb-7">
  <div className=" mx-auto h-4/5">
   <section className="mb-6 text-center text-gray-800 group">
    <div className=" md:flex block flex-wrap justify-between items-center mx-auto md:px-6 lg:px-6 px-1">
      <div className="flex items-center py-3 mb-4 md:ml-0 ml-3">
         <button
          className=" text-lg font-display text-black font-medium hover:text-[#0397FF]"
         >
         <span className="mr-2 md:ml-16 ml-5 underline decoration-pink-800 decoration-4 underline-offset-8">Louber Work</span>Vacancie Lists
         </button>
         <form onSubmit={submitHandler}>
         <div class=" mb-4 flex items-stretch absolute md:-mt-4 mt-10 md:ml-0 ml-5 md:right-28 right-2">
          <input 
          className="bg-[#E3E6E6]  p-3 mr-2 relative rounded-md z-20 " 
            type="date"
             aria-label="Search"
             aria-describedby="button-addon1"
             value={term}
             onChange={(e) => setTerm(e.target.value)}/>
      <button
      className="relative bg-sky-500 rounded-md z-20 flex items-center rounded-r bg-secondary px-6 py-2.5 text-xs font-medium uppercase leading-tight
                 text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg 
                 focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
        type="submit"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
       </button>
        </div>
      </form>
     </div>
    </div>
    <div className=' bg-white md:flex lg:flex pb-32 md:-mt-3 mt-14 md:pl-14 pl-0 md:ml-3 md:mr-0 ml-0.5 mr-0'>    
    <div class="relative grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 xl:gap-20 md:gap-20 gap-12 my-3 xl:gap-x-10 md:gap-x-7 gap-x-5">
      {
      //(product?.promotedProducts?.length)>0
      (dataVacancy.length>0)
        ?(
          //product?.promotedProducts?.slice(page * 6 - 6, page * 6).map((item, index) => {
            dataVacancy?.slice(currentPage * 6 - 6, currentPage * 6).map((item, index) => {
            return(
              <>
             {/* <div key={index} className=" xl:h-s6 xl:w-96 md:w-80 sm:w-60 relative md:ml-2 ml-2 mr-2 my-20 mb-24 md:mb-7">
             <div className="w-full h-full relative border-gray-600 
                 shadow-md shadow-neutral-400 bg-cover bg-no-repeat rounded-xl ">  */}
            <div key={index} className='xl:h-s6 xl:w-96 md:w-80 sm:w-60 md:ml-2 ml-0 mr-0 my-20 mb-5 md:mb-1 relative md:m-10 mt-16 m-0 rounded-xl shadow-slate-600 shadow-[0_0_15px_0_rgba(0,0,0,0.1)] md:h-[420px] h-[450px]'>
             <div className='p-0.5 relative rounded-xl text-center justify-center md:h-[420px] h-[450px]'>
                 <div className="items-center hover:mt-2 duration-500 text-center justify-center rounded-xl md:h-[420px] h-[450px]">
                  <div className=" h-3 bg-blue-500 w-full rounded-t-xl"></div>
                  <div className="relative w-full h-6/12">
                   <div>
                  {(item.featureImage != "")
                        ?(
                   <img
                    className="relative w-full h-6/12 cursor-pointer border-2 border-b-1 border-gray-400"
                        src={`/img/${item.featureImage}`} 
                     // src={`${AddressBaseUrl}/images/${item.featureImage}`}
                      //onClick={ () => VacancieDetail(item)}
                     // src={smartPhone}
                      alt="product img not found"
                    />
                        ):(
                        <div
                        className="relative w-full h-52 cursor-pointer border-0 border-b-1 text-center p-3 border-gray-400" >
                        <p className="font-semibold flex">Job Title:<p className="font-normal text-sm">{dataVacancy[0].name.substring(0,30)}</p> </p>    
                        <p className=" font-semibold flex" flex>Job type:<p className="font-normal text-sm">{dataVacancy[0].name.substring(0,30)}</p></p>    
                        <p className=" font-semibold flex">Salary:<p className=" font-normal text-sm">{dataVacancy[0].salary}</p></p>    
                        <p className=" ml-1 text-sm">Description: {dataVacancy[0].description.substring(0,60)}</p>   
                        </div>
                        )}
                    </div>
                 <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-xl text-center
                    justify-center overflow-hidden bg-gradient-to-r from-green-500 via-amber-300
                  to-pink-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70"
                    onClick={()=>VacancieDetail(item)}>
                   <button onClick={() => VacancieDetail(item)} className=" h-12 w-28 rounded-3xl mt-20 text-slate-100 border border-none
                  bg-black">View Detail</button>
                </div>
                </div>
             <div className=" h-4/12 w-full text-center justify-center">
              <div className=" float-left h-8/12 w-full flex text-center justify-center">
            <div className=" w-2/3 text-left mt-3 p-1 pt-2 pl-3">
            {/* {(product?.length > 0)
            ?(
            product?.map((orgs,index) => 
           (
            (orgs.id)!==(item.orgId)?(
              <> */}
       <p className=" text-cyan-600 te font-semibold">{dataVacancy[0].name.substring(0,30)}</p>    
      <p className=" ml-1 text-sm">{dataVacancy[0].description.substring(0,60)}</p>   
                                {/* </>             
              ):("No image"))))
          :("No organization")} */}
         </div>
             {/* src={`${AddressBaseUrl}/images/${vacancie.image}`}  */}
            <div className=" w-1/3 text-center items-center justify-center">
            <button 
              className=' text-[#0099ff] float-left w-11/12 items-center text-center justify-center flex'
              onClick={() => orgHandler(`${dataVacancy[0].id}`)}
              >
              <img className=' w-11/12 h-24 rounded-r-3xl rounded-t-3xl border-1 ml-1 mt-2' 
               // src={`${AddressBaseUrl}/images/${orgs?.logo}`}
               src={`/img/${item.featureImage}`} 
                alt='Noimage'/>
              </button>
              </div>
            {/* <span className=" float-right mr-1 flex flex-row text-center w-3/12 pt-3 mb-[-0.5]">
              <span className="inline-block mx-auto">
              {(likes >= 100000)
                        ?(
                  <i className="whitespace-pre-wrap overflow-wrap break-all   text-amber-500">{formattedLikeNumber}m</i> 
                        ):(
                        <i className="whitespace-pre-wrap overflow-wrap break-all   text-amber-500">{likes}</i> 
                        )}
                <br />
              <img onClick={handleLike} disabled={hasLiked} className="w-5 h-4 " src={`${like}`}/>
             </span>
             <span className="inline-block mx-auto">
                {(views >= 100000)
                          ?(
                    <i className="whitespace-pre-wrap overflow-wrap break-all   text-amber-500">{formattedViewNumber}m</i> 
                          ):(
                    <i className="whitespace-pre-wrap overflow-wrap break-all text-amber-500">{views}</i> 
                          )}
                <br />
                <img className="w-5 h-4  " src={`${show}`}/>
             </span>
            </span>    */}
           </div> 
        <div className="absolute md:flex p-3 w-full md:bottom-0 bottom-7 h-10 md:pt-2 pt-0 text-center justify-center rounded-b-xl text-gray-700 -ml-0.5">
      <p className=" mr-1">Choose</p><p className=" mr-1 text-cyan-600">{dataVacancy[0].name.substring(0,30)}</p><p>products</p>
        </div>
          </div>
         </div>
     </div>
    <div className=" font-bold w-full mt-5 text-left ml-1 "> 
    <p className=" text-lg">{item.name.substring(0,80)}</p>
    <p className=" ml-1 text-sm">{dataVacancy[0].description.substring(0,60)}...</p>   
    <span className=" w-full ml-1 text-sm underline text-center">{item?.date}</span>  
    </div>
    </div>
    </>)})):(<><div className=" text-xl font-semibold flex justify-center mt-5 ml-32">
                   ------ No Vacancy ! ------</div></>)}
   </div>
  </div>
      <br />
      {loubers?.loubers?.length > 0 && 
       <div className=" justify-center ml-10 mt-10">
        {(loubers?.loubers?.length > currentPage * 6)?(
           <p className='text-sm text-gray-700 mb-7'>
            From all list<span className='font-medium ml-2 mr-2'> {loubers?.loubers?.length} </span>
             vacancies.Some lists from <span className='font-medium ml-2 mr-2'>{currentPage * 6 - 6}</span>
             number to <span className='font-medium ml-2 mr-2'> {currentPage * 6} </span> number  
             </p>
          ):<p className='text-sm text-gray-700 mb-7'>
              <p className="mr-2">(the end)</p> Generally <span className='font-medium ml-2 mr-2'> {loubers?.loubers?.length} </span>
               vacancies only.
            </p>
          }
        <nav
          className='relative z-0  inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
        <button
          onClick={() => selectPageHandler(currentPage - 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border
            bg-[#fe9900] border-gray-300  text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className="font-bold">back</span>
        </button>
         <button
            onClick={() => selectPageHandler(currentPage + 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border
             border-gray-300 bg-[#fe9900] text-sm font-medium text-gray-500 hover:bg-gray-50'>
            <span className=" font-bold">next</span>
         </button>
        </nav>
      </div>
      }
        {vacancieDel && (
          <> 
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6 mx-auto max-w-7xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative border border-grey-100 flex flex-col w-full bg-orange-400 outline-none focus:outline-none">
                  {/*header*/}               
                  <div className="flex justify-end p-1">
                  {/* Share button */}
                  <span className="flex flex-row ">
                  {/* <button className="m-2" onClick={handleFBShareClick}>           
                    <img className="w-14 h-10 " src={fbicon} alt=""/>
                   </button> */}
                  <button className="m-2" onClick={handleTGShareClick}>
                    <img className="w-14 h-10" src={tgicon} alt=""/>
                   </button>
                  <button
                      onClick={() => setVacancieDel(false) }
                     type="button"
                     className="text-red-600 m-2 hover:bg-gray-200 rounded-lg text-lg  "
                     data-modal-toggle="log-in-model" >
                     <HiOutlineX className="w-8 h-6" />
                  </button>
                  </span>
                 </div>
                  <div className=" bg-white w-full flex flex-row">
                    <div className="p-4 w-1/2">
                    <img
                      className="w-full h-96 transition cursor-pointer duration-700"
                      src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
                     // src={samrtPc} 
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                   {/* <p className="text-lg font-bold">{louberWorkDetail?.name}</p>  */}
                    <div class="bg-white rounded-md max-w-4xl mx-auto p-2 space-y-2 -mt-2 shadow-lg">
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">Name: <span >EplusApp</span></h3> 
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">Job Title: </h3> <span >{louberWorkDetail?.title}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">Job Type:</h3> <span >{louberWorkDetail?.type}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">Work Day/Time:</h3><span >Full Day</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">Payment: </h3><span> {louberWorkDetail?.price}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">Register Date: </h3><span >{louberWorkDetail?.closingDate?.split('T')[0]}-{louberWorkDetail?.closingDate?.split('T')[0]}</span></h3>
                     <div class="pt-2">
                     <h3 class="font-semibold -ml-56 underline"> Description:</h3>
                     <p class=" mt-2">{louberWorkDetail?.description}</p>
                    </div>
                    {(org?.promotedOrgs?.length > 0)
                      ?(
                        org?.promotedOrgs?.map((orgs,index) => 
                      (
                        (orgs.id)==(louberWorkDetail.orgId)?(
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
                </div>
            </>
          )} 
       {/* { seeMore && (
         <>
           {
           (loubers?.vacancies?.length)>0
            ?(
              loubers?.vacancies?.map((values,index) =>{
             return(
               <>
                <div key={index} className=" mt-3">
                  <div className=" products">
                   <div
                    className=" products__single relative border-gray-600 
                                shadow-lg shadow-neutral-900 bg-cover bg-no-repeat"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className=" w-screen h-52 transition cursor-pointer duration-700 rounded-xl"
                      src={`${AddressBaseUrl}/images/${values.image}`} 
                      alt="product img not found"
                      onError={event => {
                      event.target.src = `${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`
                        event.onerror = null
                      }}
                    />
                    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-xl 
                    justify-center overflow-hidden bg-gradient-to-r from-green-500 via-amber-300
                    to-pink-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70"
                    onClick={() => VacancieDetail(values) }>
                    <button className=" h-12 w-28 rounded-3xl mt-20 text-slate-100 border border-none
                    bg-black">View Detail</button>
                    </div>
                    <div className="mt-4 float-left flex">
                      <ul  className='  mt-3 flex'>
                      <img className=' w-7 h-6 rounded-2xl' 
                           src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}
                           alt='Noimage'/>
                      </ul>
                   
                       <div className="p-0">
                   <p className="text-sm font-bold  mt-4 text-center">{values?.title.substring(0,24)}</p>      
                    </div>
                      <span className="mt-1 ml-2">
                      <p className=" font-thin border text-sm">{`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}`}
                      </p></span><br />
                    </div>
        
                 </div>
                </div>
            </div>
          </>
         )})):
     (<><div><Loading/></div></>) } 
  </>
 )}
   {seeMore? (
      <button
        className=" text-lg font-display text-[#F49F08] mt-10 font-medium hover:text-[#0397FF] absolute right-20"
        onClick={() => setSeeMore(false)
        }
      >
        ዝግት
      </button>
   ):(
      <button
        className=" text-lg font-display text-[#F49F08] mt-10 font-medium hover:text-[#0397FF] absolute right-20"
        onClick={() => setSeeMore(true)}
      >
        ሁሉም ማስታወቂያዎች
      </button>
    )} */}
    {/* <button onClick={nextSlide}>perv_page</button>
    <button>next_page</button> */}
  </section>
 </div>
</div>  
</>
);}
export default LouberWork;