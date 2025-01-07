import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../../Styles/nursery_form_ui.css'
import axios from 'axios'
var bodyFormData = new FormData();
var itemFormData = new FormData();


const NurseryForm = () => {
    const [nurseryImage ,setnurseryImage] = useState('');
    const [lgt ,setlgt] = useState(0.0);
    const [lgn ,setlgn] = useState(0.0);
    const schema = yup.object().shape({
        name: yup.string().required("Nursery name is required"),
        address: yup.string().required("Address must be provided"),
        email: yup.string().email("It should end with domain").required("Email is required"),
        phone: yup.number()
                .typeError("That does not look like phone number")
                .positive().integer("Enter valid Integer")
                .required("Contact number is required"),
        openTime: yup.string().required("Enter Opening Time"),
        closeTime: yup.string().required("Enter Closing Time"),
        offDay: yup.string().required("Off-Day is required"),
        
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const [imageForm, setImageForm] = useState({});

    const imageSubmitHandle = async (e) => {
        e.preventDefault();
    
        // const itemName = e.target.value.itemName;
        // const itemImage = e.target.value.itemImage;
        // setImageForm({itemName, itemImage});

        itemFormData.append("itemname",e.target.itemName.value);
        itemFormData.append("photo",e.target.itemImage.files[0]);
       const  axiosConfig = {
          
            
            headers: {
                'Content-Type': "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            }
            
          }
        await axios.post('/nursery/itemadd',itemFormData,axiosConfig)
        .then((it)=>{
            console.log("item added");

        })
        .catch((err)=>{
            console.log(err);
        })


        e.target.reset();
    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition( async function(position) {
       
       
            setlgt(position.coords.longitude);
        
            setlgn(position.coords.latitude);
          
        })
      },[])

    const onSubmit =async (data) => {
     
      console.log(data)
        let axiosConfig;
      
       
   
      
      bodyFormData.append('nurseryImage',nurseryImage)
      bodyFormData.append('name',data.name)
      bodyFormData.append('phone',data.phone)
      bodyFormData.append('address',data.address)
      bodyFormData.append('openTime',data.openTime)
      bodyFormData.append('closeTime',data.closeTime    )

      axiosConfig = {
        params: {
          lng:JSON.stringify(lgn),
          ltd:JSON.stringify(lgt)
        },
        
        headers: {
            'Content-Type': "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
        }
        
      }
     
      let status=200;
          
   

      await axios.post('/nursery/register' , bodyFormData ,axiosConfig)
      .then(dat=>{
        
        // use state to set form
       


        })
       .catch(err=>{
        
        
         status= (err.response.status);
        
     
        })

       if(status==200)
       {
        alert("nursery added successfully")
       }
       else
       {
        alert("Internal server error");
       
       }
      
  
    

    
    }
    
    


    return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //     <input type="text" placeholder='Enter Name of Nursery' {...register("name")}/>
    //     <p>{errors.name?.message}</p>
    //     <input type='text' placeholder='Address of Nursery' {...register('address')}/>
    //     <p>{errors.address?.message}</p>
    //     <input type="email" placeholder='Enter Contact-Email of Nursery' {...register("email")}/>
    //     <p>{errors.email?.message}</p>
    //     <input type="text" placeholder='Enter Contact-Number of Nursery' {...register("phone")}/>
    //     <p>{errors.phone?.message}</p>
    //     <input type='time' placeholder='Opening Time' {...register("openTime")}/>
    //     <p>{errors.openTime?.message}</p>
    //     <input type='time' placeholder='Closing Time' {...register("closeTime")}/>
    //     <p>{errors.closeTime?.message}</p>
    //     <input type="text" placeholder='Enter your Off-Day' {...register("offDay")}/>
    //     <p>{errors.offDay?.message}</p>
    //     <input type="submit"/>
    // </form>
    <section id="nursery_page">
    <section id="nur_back">
        <div id="nur_form_cnt">
           <div id="nur_form_back">
               <h2>Register Nursery</h2>
               <form action="" id="nur_form"onSubmit={handleSubmit(onSubmit)}>
                   <div className='attri'>
                      
                       <input type="text" id="nur_form_name"{...register("name")} placeholder='Name of Nursery'/>
                       {/* <p className='err'>{errors.name?.message}</p> */}
                   </div>
                   <div className='attri'>
                       {/* <label for="nur_addr">Address of Nursey</label><br/> */}
                       <input type="text" id="nur_form_addr"{...register('address')} placeholder='Address of Nursery'/>
                       {/* <p className='err'>{errors.address?.message}</p> */}
                   </div>
                   <div className='attri'>
                       {/* <label for="nur_email">Contact Email</label><br/> */}
                       <input type="email" id="nur_form_email"{...register("email")} placeholder='Email'/>
                       {/* <p className='err'>{errors.email?.message}</p> */}
                   </div>
                   <div className='attri'>
                       {/* <label for="nur_phone">Contact Number</label><br/> */}
                       <input type="text" id="nur_form_phone"{...register("phone")} placeholder='Contact Number'/>
                       {/* <p className='err'>{errors.phone?.message}</p> */}
                   </div>
                   <div id="nur_times" className='attri'>
                       <div>
                           <label  id="nur_in_time">Opening Time</label>
                           <input type="time" {...register("openTime")} />
                           {/* <p className='err'>{errors.openTime?.message}</p> */}
                       </div>
                       <div>
                           <label id="nur_out_time">Closing Time</label>
                           <input type="time"  {...register("closeTime")}/>
                           {/* <p className='err'>{errors.closeTime?.message}</p> */}
                       </div>
                   </div>
                   <div className='attri'>
                       {/* <label for="nur_off_day">Enter Off Day</label><br/> */}
                       <input type="text" id="nur_off_day"{...register("offDay")} placeholder='Enter Off Day'/>
                       {/* <p className='err'>{errors.offDay?.message}</p> */}
                   </div>
                   <div className='attri'>
                    <input type='file' id='nur_img_in' onChange={(e)=>{
                        setnurseryImage(e.target.files[0]);
                    }} ></input>
                   </div>
                   <div id='lfbtn'><button>Submit</button></div>
               </form>
                            </div>
           </div>
    </section>
    {/* <section id="main_sec" onSubmit={imageSubmitHandle}>
        <form >
            <div>
                <label for="nur_form_item_name">Item Name</label>
                <input type="text" id="nur_form_item_name" name='itemName'/>
            </div>
            <div>
                <label for="nur_form_item_img">Item Images</label>
                <input type="file" id="nur_form_item_img" name='itemImage'/>
            </div>
            <div><button id="nur_form_item_sub" type='submit'>submit</button></div>
        </form>
    </section> */}
</section>

  )
}

export {NurseryForm}