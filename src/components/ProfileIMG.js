import React,{useState} from 'react';

function ProfileIMG() {
    const [file,setFile] = useState('');
    const [fileURL,setFileURL] = useState('');
    
    const handleFileOnChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
          setFile(file);
          setFileURL(reader.result);
        }
        
        reader.readAsDataURL(file);
      }
    return (
        <>
            <div className="profileIMG">

                    {
                   fileURL=== "" ? <img className="prof_img" src={"https://cdn.pixabay.com/photo/2017/02/13/01/26/the-question-mark-2061539_960_720.png"}/> :<img className="prof_img" src={fileURL} />
                    }
                     <input
                    type='file'
                    accept='image/jpg,impge/png,image/jpeg,image/gif'
                    name='profile_img'
                    onChange={handleFileOnChange} id="uploadIMG" 
                    // style={{display:"none"}}
                    />
                   {/* <label HTMLfor="uploadIMG"> <i class="fas fa-images" /></label> */}
            </div>
        </>
    )
}

export default ProfileIMG
