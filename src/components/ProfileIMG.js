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
                <input
                    type='file'
                    accept='image/jpg,impge/png,image/jpeg,image/gif'
                    name='profile_img'
                    onChange={handleFileOnChange} id="jiyeong" style={{display:"none"}}/>
                    <label for="jiyeong"><button>사진업로드</button></label>
                    {
                   fileURL=== "" ? null :<img className="prof_img" src={fileURL} />
                    }
            </div>
        </>
    )
}

export default ProfileIMG
