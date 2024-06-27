import React, {useEffect, useState} from "react";
import {useParams,useNavigate } from "react-router-dom";
import {useDispatch,useSelector } from "react-redux";
import Loading from "./loading";
import {viewProducts } from "../../actions/productAction";
import {useForm } from "react-hook-form";
import {dataProducts } from "../data";
import samrtPc from '../../img/promotion-lg.png';
import {HiOutlineX} from "react-icons/hi";
import {addToDetail} from "../../actions/detail";
import {viewVacancies, searchVacancies } from "../../actions/vacanciesAction";
import {updateLike } from "../../actions/likeAction";
import  AddressBaseUrl from "../../utils/BaseUrl";
import {getOrganization,viewOrganization } from '../../actions/orgAction';
import {dataVacancy} from '../vacaData';
import '../../App.css'
import moment from 'moment';
import queryString from 'query-string';
import { generateTelegramShareLink } from './generateTelegramShareLink';
import tgicon from '../../icons/Telegram_logo.svg.webp';
import fbicon from '../../icons/fbicon.png';
import show from '../../icons/show.png';
import like from '../../icons/like.png';

    const Vacancie = (message) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [seeMore, setSeeMore] = useState(false);
    const [vacancieDel, setVacancieDel] = useState(false);
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();

    const { vacancies } = useSelector(
      (state) => state.vacancies
   );
//    const { likes } = useSelector(
//     (state) => state.likes
//  );
  const { org } = useSelector(
    (state) => state.org )
  // console.log("all organization yyyyyyyyyy are : ", org?.promotedOrgs[0].id);
  // console.log("all organization VVVVVVVVV are : ", vacancies?.vacancies[0].orgId);
  // const pages = 1;
    useEffect(() =>{
    dispatch(getOrganization());
    },[]);
    useEffect(()=>{
      dispatch(viewOrganization());
    },[]);
   const [currentIndex, setCurrentIndex] = useState(1);
  const nextSlide = () => {
    const isLastSlide = currentIndex === (vacancies.total +1 ) - 1;
    const newIndex = isLastSlide ? 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
    dispatch(viewVacancies(newIndex));
  };
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? 3 - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      dispatch(viewVacancies(newIndex));
    };
    const { product } = useSelector(
        (state) =>state.product
        );
const [data, setData] =useState(dataVacancy || '');
useEffect(() => {
  setData(dataVacancy);
}, [dataVacancy])
// console.log("all vacancies are : ", data[0]);
useEffect(()=>{
    dispatch(viewProducts());
  },[]);
  const detailInfo = localStorage.getItem("detailInfo")
  ? JSON.parse(localStorage.getItem("detailInfo"))
  : null;
  const [term, setTerm] = useState("");
  console.log("selected date is :", term);
  // const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
     if (term === "") return alert("Please enter search term!");
    dispatch(searchVacancies(term));
    //console.log("term : ",term);
    //setTerm("");
  };
//new pagination 
// const [vacancie, setProducts] = useState([])
// console.log("view vacancies2 : ",vacancies?.vacancies?.length);

useEffect(() =>{
  dispatch(viewVacancies());
  // setProducts(vacancies?.vacancies)
},[]);
const orgHandler=(id)=>{
    navigate("org/"+id)
}
const [page, setPage] = useState(1)
const selectPageHandler = (selectedPage) => {
  // alert(data.length+","+selectedPage)
  // console.log("next button cliked : ",selectedPage);
  if (selectedPage >= 1 && (selectedPage * 6)-6 < vacancies?.vacancies?.length  && selectedPage !== page) {
    setPage(selectedPage)
  }}
  //       //  Count Number Of View              
  // const [views, setViews] = useState(0);

  // useEffect(() => {
  //   // Function to increment the view count
  //   const incrementViews = () => {
  //     setViews((prevViews) => {
  //       const newViews = prevViews + 1;
  //       localStorage.setItem('viewCount', newViews.toString()); // Store the updated view count in local storage
  //       return newViews;
  //     });
  //   };

  //   // Read the view count from local storage on component mount
  //   const storedViewCount = localStorage.getItem('viewCount');
  //   if (storedViewCount) {
  //     setViews(parseInt(storedViewCount, 10));
  //   }

  //   // Increment the view count every second
  //   const interval = setInterval(incrementViews, 1000);
  //   // Clean up the interval when the component unmounts
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []); // Run the effect only on component mount

  // const [views, setViews] = useState(0);

  // useEffect(() => {
  //   // Update the view count when the component mounts
  //   setViews((prevViews) => prevViews + 1);
  // }, []);

  // useEffect(() => {
  //   // Store the view count in local storage whenever it changes
  //   localStorage.setItem('viewCount', views.toString());
  // }, [views]);
     // Like count
     const [likes, setLikes] = useState(0);
     const [hasLiked, setHasLiked] = useState(false);
   
    //  useEffect(() => {
    //    // Check if the user has already liked the post
    //    const liked = localStorage.getItem('postViewed');
    //    if (liked === 'true') {
    //      setHasLiked(true);
    //    }
    //  }, []);
     const handleLike = (id) => {
      // alert(id)
       if (!hasLiked) {
         var likes=0;
         var data={id:id,
                   likes:likes+1
                   }  
         dispatch(updateLike(data));
          //  alert(data.likes+","+data.id)       
        setHasLiked(true);
        //localStorage.setItem('postViewed', 'true');
           }
          else{
            var dataValue={id:id,
                       likes:likes-1
                      }         
            dispatch(updateLike(dataValue));
           setHasLiked(false);
          }};
   // View count
   const [views, setViews] = useState(0);
   const [hasView, setHasView] = useState(false);
  //  useEffect(() => {
  //    // Check if the user has already liked the post
  //    const liked = localStorage.getItem('postViewed');
  //    if (liked === 'true') {
  //     setHasView(true);
  //    }}, []);
  //  const handleView = () => {
  //    if (!hasView) {
  //     setViews(views + 1);
  //      setHasView(true);
  //      localStorage.setItem('postViewed', 'true');
  //    }};
    const VacancieDetail = (data) =>{
      dispatch(addToDetail(data));
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
      }); };
  
       //Change number likes and views to its text form
       const numberOfLike = (number) => {
        // const millionPart = Math.floor(number / 1000000);
        // const decimalPart = Math.floor((number % 1000000) / 100000) / 10; // Get the first decimal place  
        const decimalPart = number % 1000000;
        const millionPart = Math.floor(number / 1000000);
        const truncatedNumber = decimalPart.toString().slice(0, 3);
        const formattedLikeNumber = millionPart +'.'+ truncatedNumber;
          return formattedLikeNumber
          };
        const NumberOfView = (number) => {
        // const millionPart = Math.floor(number / 1000000);
        // const decimalPart = Math.floor((number % 1000000) / 100000) / 10; // Get the first decimal place  
        // const formattedViewNumber = millionPart + decimalPart;
        const decimalPart = number % 1000000;
        const millionPart = Math.floor(number / 1000000);
        const truncatedNumber = decimalPart.toString().slice(0, 3);
        const formattedViewNumber = millionPart + '.' + truncatedNumber;
          return formattedViewNumber
          };
          const formattedLikeNumber = numberOfLike(likes);  
          const formattedViewNumber = NumberOfView(views); 
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
          <span className="mr-2 md:ml-16 ml-5 underline decoration-pink-800 decoration-4 underline-offset-8">የስራ</span>ማስታዎቂያ
         </button>
         <form onSubmit={submitHandler}>
         <div class=" mb-4 flex flex-wrap items-stretch absolute md:-mt-4 mt-6 md:ml-0 ml-5 md:right-28 right-10">
          <input
           className="bg-[#E3E6E6]  p-3 relative mr-2 rounded-md z-20" 
             type="date"
             aria-label="Search"
             aria-describedby="button-addon1"
             value={term}
             onChange={(e) => setTerm(e.target.value)}/>
          {/* <input
            type="search"
            class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200 z-50"
            
            aria-label="Search"
            aria-describedby="button-addon1" 
            value={term}
            onChange={(e) => setTerm(e.target.value)}/> */}
        <button
          className="relative bg-sky-500 rounded-md z-20 flex items-center rounded-r bg-secondary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg 
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
 <div className=' bg-white  md:flex lg:flex pb-32 md:mt-0 mt-3 md:pl-14 pl-0 md:ml-3 md:mr-0 ml-5 mr-5'>    
  <div class="relative grid xl:grid-cols-3 ml-5 md:grid-cols-3 grid-cols-1 xl:gap-20 md:gap-20 gap-7 my-3 xl:gap-x-10 md:gap-x-7 gap-x-5">
    {(vacancies?.vacancies?.length > 0)
      ?(
        vacancies?.vacancies?.slice(page *6 - 6, page * 6).map((vacancie,index) => { 
          return(
           <>
            <div key={index} 
                 className=" h-40 md:h-56 xl:h-s6 md:mt-8 mt-16 xl:w-96 md:w-80 sm:w-60 relative md:ml-2 md:mr-0 mr-2 -ml-3 mb-7 md:mb-10">
             <div className="w-full h-full relative border-gray-600 
             shadow-md shadow-neutral-400 bg-cover bg-no-repeat rounded-xl "> 
              <div className="relative flex justify-center items-center h-full rounded-xl">
              <img 
               className="transition relative w-full h-full cursor-pointer duration-700 rounded-xl border-2 border-b-2 border-gray-600"
               alt="images not found"
               src={`${AddressBaseUrl}/images/${vacancie.image}`} 
              //src={`/img/${vacancie.featureImage}`}
              />
              </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-xl 
                 justify-center overflow-hidden bg-gradient-to-r from-green-500 via-amber-300
                 to-pink-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70"
                 onClick={()=>VacancieDetail(vacancie)}>
              <button onClick={() => VacancieDetail(vacancie)} className=" h-12 w-28 rounded-3xl mt-20 text-slate-100 border border-none
               bg-black">View Detail</button>
          </div>
          {/* <div className=" h-auto"> */}
          <div className="mt-4 flex flex-row w-full ">
          {/* <ul  className='  mt-3 flex'>
          {(org?.promotedOrgs?.length > 0)
         ?(
          org?.promotedOrgs?.map((orgs,index) => 
        (
          (orgs.id)==(vacancie.orgId)?(
               <button className=" " 
             onClick={() => orgHandler(`${orgs.id}`)}
             >
             <img className=' w-12 -mt-3 h-10 rounded-full border-2' 
               src={`${AddressBaseUrl}/images/${orgs?.logo}`}
               alt='Noimage'/>
             </button>)
            :("")  
        ))):("")}
          </ul> */}
           {/* src={`${AddressBaseUrl}/images/${vacancie.image}`}  */}
        <div className="mt-1 flex-1">
        <div className="h-auto">
         <span className=" font-bold"> {vacancie.title?.substring(0,80)}</span>
           <br />
          {(org?.promotedOrgs?.length > 0)
          ?(
          org?.promotedOrgs?.map((orgs,index) => 
         (
          (orgs.id)==(vacancie.orgId)?(
            <>
            <button 
             className='text-[#0099ff] float-left w-full flex mt-3'
             onClick={() => orgHandler(`${orgs.id}`)}
             >
             <img className=' w-10 -mt-3 h-10 rounded-full border-1 mr-3' 
               src={`${AddressBaseUrl}/images/${orgs?.logo}`}
               alt='Noimage'/>1
             {orgs.name.substring(0,75)}   
             </button>
             <br />
            <i className="">
          {/* {item.createdAt.split('T')[0]} */}
          <i className=" mt-3">{moment(vacancie.createdAt).fromNow()} </i>
          </i>
            </>             
            ):(""))))
        :("")}
        </div>
        </div>
        <div  className=" bg-slate-50 border-2 flex-2 mr-0.5 h-12 p-0.5 rounded shadow">
        <div className="h-aouto">
           {(likes >= 100000)
                   ?(
           <i className="whitespace-pre-wrap overflow-wrap break-all text-amber-500">{formattedLikeNumber}m</i> 
                   ):(
           <i className="whitespace-pre-wrap overflow-wrap break-all text-amber-500">{likes}</i> 
                   )}
          <br />
          {/* disabled={hasLiked} */}
         <img onClick={() => handleLike(vacancie.id)}  className="w-5 h-4 cursor-pointer" src={`${like}`}/>
        </div>
       </div>
       <div  className="bg-slate-50 border-2 rounded flex-3 h-12 text-center p-0.5 shadow">
        <div className="h-auto">
                   {(views >= 100000)
                   ?(
            <i className="whitespace-pre-wrap overflow-wrap break-all text-amber-500">{formattedViewNumber}m</i> 
                   ):(
            <i className="whitespace-pre-wrap overflow-wrap break-all text-center text-amber-500">{views}</i> 
                   )}
         <img className="w-5 h-4  " src={`${show}`}/>
        </div>
        </div>
       </div>
       {/* <span className=" float-right mr-1 text-center flex-2 h-auto overflow-hidden w-3/12 pt-3 mb-[-0.5]">
  
       </span>    */}
      {/* </div> */}
     </div>
    </div>
      </>
     )})):(<><div className="text-xl font-semibold flex justify-center mt-5 ml-32">------ ምንም ሥራ  የለም! ------</div></>) }
    </div>
    </div>
      <br />
      {vacancies?.vacancies?.length > 0 && 
       <div className=" justify-center ml-10 mt-10">
        {(vacancies?.vacancies?.length > page * 6)?(
           <p className='text-sm text-gray-700 mb-7'>
            ክጠቅላላ <span className='font-medium ml-2 mr-2'> {vacancies?.vacancies?.length} </span>
             የስራ ማስታወቂያዎች ዝርዝር ውስጥ ከቁጥር <span className='font-medium ml-2 mr-2'>{page * 6 - 6}</span>
             እስከ ቁጥር <span className='font-medium ml-2 mr-2'> {page * 6} </span> የሚገኙ የስራ ማስታወቂያዎች ዝርዝር  
             </p>
          ):<p className='text-sm text-gray-700 mb-7'>
              <p className="mr-2">(መጨረሻው ነው)</p> ጠቅላላ <span className='font-medium ml-2 mr-2'> {vacancies?.vacancies?.length} </span>
               የስራ ማስታወቂያዎች ብቻ ይገኛሉ::  
            </p>
          }
        <nav
          className='relative z-0  inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
        <button
          onClick={() => selectPageHandler(page - 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border
            bg-[#fe9900] border-gray-300  text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className="font-bold">ምልስ</span>
        </button>
         <button
            onClick={() => selectPageHandler(page + 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border
             border-gray-300 bg-[#fe9900] text-sm font-medium text-gray-500 hover:bg-gray-50'>
            <span className=" font-bold">ቀጣይ</span>
         </button>
        </nav>
      </div>
      }
       {vacancieDel && (
          <> 
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6 mx-auto max-w-8xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative border border-grey-100 flex flex-col w-full bg-orange-400 outline-none focus:outline-none">
                  {/*header*/}               
                   <div className="flex justify-end p-1">
                   {/* Share button */}
                   <span className="flex flex-row ">
                   <button className="m-2" onClick={handleFBShareClick}>           
                     <img className="w-14 h-10 " src={fbicon} alt=""/>
                    </button>
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
               </div>
              </>
             )} 
      </section>
     </div>
   </div> 
</>
);}
export default Vacancie;
