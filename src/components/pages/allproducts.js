import React, {useEffect, useState} from "react";
import {useNavigate } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from "react-redux";
import { addToDetail } from "../../actions/detail";
import { HiOutlineX } from "react-icons/hi";
import AddressBaseUrl from "../../utils/BaseUrl";
import {viewOrganization } from '../../actions/orgAction';
import { viewProducts} from "../../actions/productAction";
import moment from 'moment';
import { generateTelegramShareLink } from './generateTelegramShareLink';
import tgicon from '../../icons/Telegram_logo.svg.webp';
import fbicon from '../../icons/fbicon.png';
import images1 from '../../img/imge1.jpeg';

// import like from '../../icons/like.png';
// import show from '../../icons/show.png';
import { dataProducts } from '../data';

const Allproducts = (message) => {
const [vacancieDel, setVacancieDel] = useState(false);
 const [product, setData] =useState(dataProducts || '');
 console.log("product==",product)
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
     if (term === "") return alert("Please enter search term!");
    // dispatch(searchVacancies(term));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    setData(dataProducts);
  }, [dataProducts])
  const { org } = useSelector(
    (state) => state.org )
  // const pages = 1;
  const navigate =useNavigate()
  const orgHandler=(id)=>{
   navigate("org/"+id)
  }
   useEffect(() =>{
   dispatch(viewOrganization());
   },[]);
   useEffect(() =>{
  dispatch(viewProducts());
},[]);
  // const {product} = useSelector(
  //   (state)=> state.product
  // );
  const [page, setPage] = useState(1)
  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && (selectedPage * 6)-6 <product?.promotedProducts?.length  && selectedPage !== page) {
      setPage(selectedPage)
    }}

  const detailInfo = localStorage.getItem("detailInfo")
  ? JSON.parse(localStorage.getItem("detailInfo"))
  : null;
   // Like count
   const [likes, setLikes] = useState(0);
   const [hasLiked, setHasLiked] = useState(false);
 
   useEffect(() => {
     // Check if the user has already liked the post
     const liked = localStorage.getItem('postViewed');
     if (liked === 'true') {
       setHasLiked(true);
     }
   }, []);
 
   const handleLike = () => {
     if (!hasLiked) {
       setLikes(likes + 1);
       setHasLiked(true);
       localStorage.setItem('postViewed', 'true');
     }
   };
      // View count
      const [views, setViews] = useState(0);
      const [hasView, setHasView] = useState(false);
      useEffect(() => {
        // Check if the user has already liked the post
        const Vew= localStorage.getItem('postViewed');
        if (Vew === 'true') {
         setHasView(true);
        }}, []);
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
    return (
      <>
   <div className=" w-full bg-[white] md:mt-5 mt-20 pb-7">
     <div className=" mx-auto h-4/5">
     <section className="mb-6 text-center text-gray-800 group">
     <div className=" md:flex block flex-wrap justify-between items-center mx-auto md:px-6 lg:px-6 px-1">
     <div className="flex items-center py-3 mb-4 md:ml-0 ml-3">
     <button
        className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mt-10 md:ml-12  underline decoration-pink-800 decoration-4 underline-offset-8 mr-1">Product</span>Lists
        </button>
        <form onSubmit={submitHandler}>
        <div class=" mb-4 flex items-stretch absolute md:mt-0 mt-10 md:ml-0 ml-5 md:right-28 right-2">
         <input className="bg-[#E3E6E6] mr-2 p-3 rounded-md md:-mt-5 mt-0 z-20 " 
             type="date"
             aria-label="Search"
             aria-describedby="button-addon1"
             value={term}
             onChange={(e) => setTerm(e.target.value)}/>
             <button
             class="relative bg-sky-500 rounded-md md:-mt-5 mt-0 z-20 flex  h-11/12 items-center rounded-r bg-secondary px-6
              py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 
              ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-primary-800 active:shadow-lg"
        type="submit"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5">
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
   <div className=' bg-white md:flex lg:flex pb-32 md:-mt-3 mt-10 md:pl-14 pl-0 md:ml-3 md:mr-0 ml-0.5 mr-0'>    
    <div class="relative grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 xl:gap-20 md:gap-20 gap-12 my-3 xl:gap-x-10 md:gap-x-7 gap-x-5">
      {
      //(product?.promotedProducts?.length)>0
      (product.length>0)
        ?(
          //product?.promotedProducts?.slice(page * 6 - 6, page * 6).map((item, index) => {
            product?.slice(page * 6 - 6, page * 6).map((item, index) => {
            return(
              <>
             {/* <div key={index} className=" xl:h-s6 xl:w-96 md:w-80 sm:w-60 relative md:ml-2 ml-2 mr-2 my-20 mb-24 md:mb-7">
             <div className="w-full h-full relative border-gray-600 
                 shadow-md shadow-neutral-400 bg-cover bg-no-repeat rounded-xl ">  */}
            <div key={index} className='xl:h-s6 xl:w-96 md:w-80 sm:w-60 md:ml-2 ml-0 mr-0 my-20 mb-5 md:mb-5 shadow-slate-600 relative md:m-10 mt-16 m-0 rounded-xl shadow-[0_0_15px_0_rgba(0,0,0,0.1)] md:h-[420px] h-[450px]'>
             <div className='p-0.5 relative rounded-xl text-center justify-center md:h-[420px] h-[450px]'>
                 <div className="items-center hover:mt-2 duration-500 text-center justify-center rounded-xl md:h-[420px] h-[450px]">
                  <div className=" h-3 bg-blue-500 w-full rounded-t-xl"></div>
                  <div className="relative w-full h-56">
                    <img
                    className="relative w-full h-56 cursor-pointer  border-b-1 border-gray-400"
                        src={`${images1}`} 
                     // src={`${AddressBaseUrl}/images/${item.featureImage}`}
                      //onClick={ () => VacancieDetail(item)}
                     // src={smartPhone}
                      alt="product img not found"
                    />
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

       <p className=" text-cyan-600 te font-semibold">{product[0].name.substring(0,30)}</p>    
      <p className=" ml-1 text-sm">{product[0].description.substring(0,60)}</p>   
         </div>
             {/* src={`${AddressBaseUrl}/images/${vacancie.image}`}  */}
            <button 
              className=' text-[#0099ff] float-left w-11/12 items-center text-center justify-center flex'
              onClick={() => orgHandler(`${product[0].id}`)}
              >
              <img className=' w-28 h-28 rounded-l-full rounded-t-full rounded-3xl border-1' 
               // src={`${AddressBaseUrl}/images/${orgs?.logo}`}
               src={`/img/${item.featureImage}`} 
                alt='Noimage'/>
              </button>
           </div> 
        <div className="absolute md:flex p-3 w-full md:bottom-0 bottom-7 h-10 md:pt-2 pt-0 text-center justify-center rounded-b-xl text-gray-700 -ml-0.5">
      <p className=" mr-1">Choose</p><p className=" mr-1 text-cyan-600">{product[0].name.substring(0,30)}</p><p>products</p>
        </div>
          </div>
         </div>
     </div>
    <div className=" font-bold w-full mt-5 ml-1"> 
    <p className=" text-lg">{item.name.substring(0,80)}</p>
    <p className=" ml-1 text-sm">{product[0].description.substring(0,60)}...</p>   
    <span className=" w-full ml-1 text-sm text-cyan-600 text-center">Posted On: {item?.date}</span>  
    </div>
    </div>
    </>)})):(<><div className=" text-xl font-semibold flex justify-center mt-5 ml-32">
              ------ No Products ! ------</div></>)}
   </div>
  </div>
   <br /> <br />
      {/* {(product?.promotedProducts?.length) > 0 &&  */}
       {(product?.length) > 0 &&
       <div className=" justify-center ml-10">
       {(product?.length >page * 6)?(
           <p className='text-sm text-gray-700 mb-7'>
         List of products from number <span className='font-medium ml-2 mr-2'>{page * 6 - 6}</span>
             to number <span className='font-medium ml-2 mr-2'> {page * 6} </span> 
             in all list of <span className='font-medium ml-2 mr-2'> {product?.length} </span>
             products 
             </p>
          ):<p className='text-sm text-gray-700 mb-7'>
              <p className="mr-2">(The End)</p> Generally <span className='font-medium ml-2 mr-2'> {product?.length} </span>
              products only  
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
            <span className="font-bold">back</span>
          </button>
          <button
          onClick={() => selectPageHandler(page + 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border
             border-gray-300 bg-[#fe9900] text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            <span className=" font-bold">next</span>
          </button>
       </nav>
       </div>
      }
        {vacancieDel && (
         <> 
          <div className="justify-center items-center flex overflow-x-hidden  border-grey-100 shadow-lg overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
           <div className="relative w-auto my-6 mx-auto bg-slate-500 max-w-7xl border border-grey-100 shadow-lg">
           {/*content*/}
             <div className="rounded-lg shadow-lg relative border border-grey-100 flex flex-col w-full bg-orange-400 outline-none focus:outline-none p-3">
                  {/*header*/}               
                  <div className="flex justify-end p-1">
                   {/* Share button */}
                   <span className="flex flex-row ">

                   <button className="m-2" onClick={handleTGShareClick}>
                     <img className="w-14 h-10" src={images1} alt=""/>
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
                      //src={`${AddressBaseUrl}/images/${detailInfo.featureImage}`}
                      src={`/img/${product[0].featureImage}`} 
                      alt="product img not found"
                      /> 
                      </div>
                     <div className="m-4 w-1/2 border border-grey-100 shadow-lg">
                     <p className="text-lg font-bold">{product[0]?.name}</p> 
                     <div class="pt-2">
                     <p className="text-sm font-bold  mt-4 text-center">{product[0]?.description}</p>
                     </div>
                    <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.price}birr</p>    
                    {(org?.promotedOrgs?.length > 0)
                      ?(
                        org?.promotedOrgs?.map((orgs,index) => 
                      (
                        (orgs.id)==(detailInfo.orgId)?(
                            <>
                            <h3 class="border-t mb-2 ml-8 mr-6 pt-3 font-semibold underline">
                              phone: <span class="font-thin">{orgs?.phone}</span></h3>
                              <h3 class="border-t ml-8 mr-6 mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">{orgs?.email}</span></h3> 
                          </>)
                          :("")  
                      ))):("")} 
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </>)}
     </section>
    </div>
   </div>
  </>
);}
export default Allproducts;