import { useState } from 'react';

const ImageUpload = ({setImage}) => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (event) => {
    const files = event.target.files;


    Object.values(files).forEach(file=>{
        if (file) {
            const reader = new FileReader();
      
            reader.onloadend = () => {
              setImage(prev=>[...prev,reader.result])
            };
            
            reader.readAsDataURL(file);
          //   event.target.files = new FileList
            event.target.value = ''
          }

    })

    // If a file is selected
    
  };

  return (
    <div>
      <h3>Upload and Display Image</h3>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageSrc && (
        <div>
          <h4>Selected Image:</h4>
          <img
            src={imageSrc}
            alt="Selected"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
