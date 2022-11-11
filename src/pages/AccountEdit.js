import blank_profile from "../pictures/blank_profile.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {getData, patchData} from '../components/fetchData';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Install plugin
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'

// Register the plugins
registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginImageCrop,
  FilePondPluginImageTransform,
  FilePondPluginImageResize
)

const formatPhoneNumber = (phone) => {
    let phoneNumber = ''
    if (phone.length === 10) {
      //เบอร์มือถือ
      phoneNumber =
        phone.substring(0, 3) +
        '-' +
        phone.substring(3, 6) +
        '-' +
        phone.substring(6, 10)
    } else if (phone.length === 9 && phone.at(1) === '2') {
      //เบอร์บ้านกรุงเทพ
      phoneNumber =
        phone.substring(0, 2) +
        '-' +
        phone.substring(2, 5) +
        '-' +
        phone.substring(5, 9)
    } else {
      //เบอร์บ้านต่างจังหวัด
      phoneNumber =
        phone.substring(0, 3) +
        '-' +
        phone.substring(3, 6) +
        '-' +
        phone.substring(6, 9)
    }
    return phoneNumber
  }

const AccountEdit = () =>{
    const navigate = useNavigate()
    const uploadFileRef = useRef()

    // const previewImage = (event)=>{ setPrepic(URL.createObjectURL(event.target.files[0])) }

    // const [data,setData] = useState({
    //     displayName: "Peeranut Srisuthangkul",
    //     email: "peeranut.sri@ku.th",
    //     phoneNumber: "06200000000",
    //     address: "4412 Matlock Rd #200 Arlington Texas United States 76018",
    //     description: "Exercitation sint fugiat et esse ut do quis laboris anim nisi proident ullamco. Sit eu mollit cillum et consequat eu consectetur ad reprehenderit exercitation sunt duis nisi est. Pariatur exercitation commodo non tempor. Fugiat minim velit veniam reprehenderit nulla veniam voluptate adipisicing ullamco culpa incididunt. Sunt irure commodo et ut do aute duis."});
    const [data, setData] = useState({})
    const [status,setStatus]=useState("unknown");

    const sendChange = (new_data) =>{
        patchData(`/user/edit`,JSON.stringify(new_data))
        .then((res)=>{
            if(!res.status) throw new Error("Could not get status")
            if(res.status == "fail" || res.status == "error" || res.status == "err") throw new Error(res.message)
            if ("profilePicture" in new_data){
                localStorage.setItem("profilePicture",new_data["profilePicture"])
            }
            console.log(res.status)
            navigate(`/account/profile`)
        })
        .catch(e=>{
            console.log(e.message)
        })
        // console.log(new_data)
    }

    const summitChange = (e) =>{
        e.preventDefault()
        const personal_info = ["displayName", "email", "phoneNumber", "address", "accountDescription"]
        
        const _changed = {}
        personal_info.forEach((_info)=>{
            const tmp = document.getElementById(_info).value
            if (tmp != ""){
                // console.log(tmp)
                _changed[_info] = tmp
            }
        })
        
        const profileData = uploadFileRef.current.getFile()
        if(profileData!=null) _changed["profilePicture"] = profileData.getFileEncodeDataURL()
        sendChange(_changed)
    }

    useEffect(()=>{
		getData(`/user/myprofile`).then((res)=>{ 
			setStatus(res.status);
			if(res.status == "success"){
				setData(res.data);
			}
			else{
				setData(res.message);
			}
		})
	},[]);

    // console.log(data)

	return (
        <div className="profile-page d-flex justify-content-between">
            <div>
                <h1>My Profile</h1>
                <div className="main-editing-page">
                    <div>
                        <img className="profile-pic" alt="ProfilePic" id="Profile" src={data.profilePicture}/>
                        <FilePond
                            className="choose-image"
                            allowMultiple={false}
                            maxFiles={1}
                            allowFileEncode={true}
                            acceptedFileTypes={['image/png', 'image/jpeg']}
                            imageCropAspectRatio="1:1"
                            ref={uploadFileRef}
                            imageResizeTargetWidth={1000}
                            imageResizeTargetHeight={1000}
                            imageResizeMode="contain"
                            credits={false}/>
                    </div>
                    <div>
                        <div>
                            <label><h5>Name</h5></label><br/>
                            <input type="text" id="displayName" className="input-editing" placeholder={data.displayName} maxlength="30"/>
                        </div>
                        <div>
                            <label><h5>Email</h5></label><br/>
                            <input type="email" id="email" className="input-editing" placeholder={data.email}/>
                        </div>
                        <div>
                            <label><h5>Phone Number</h5></label><br/>
                            <input type="number" id="phoneNumber" className="input-editing" placeholder={data.phoneNumber ? formatPhoneNumber(data.phoneNumber) : ""}/>
                        </div>
                        <div>
                            <label><h5>Address</h5></label><br/>
                            <textarea type="text" id="address" className="input-editing" placeholder={data.address} maxlength="1000"/>
                        </div>
                        <div>
                            <label><h5>Description</h5></label><br/>
                            <textarea type="text" id="accountDescription" className="input-editing" rows="7" placeholder={data.accountDescription} maxlength="2000"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="edit-profile editing">Edit Profile</div>
                <div className="edit-profile" onClick={summitChange}>Save Changes</div>
                <div className="edit-profile cancel">
                    <Link to="/account/profile" className="link-button text-body">Cancel</Link>
                </div>
            </div>
        </div>
	)
}
export default AccountEdit;