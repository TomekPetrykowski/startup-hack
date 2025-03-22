import { useState } from 'react';
import { Input } from './input';
import { ImagePlus } from 'lucide-react';

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
            event.target.value = ''
          }

    })
    
  };

  return (
    <div>
      <h3>Upload an image</h3>
      <Input type="file" accept="image/*" onChange={handleImageChange} multiple className="w-50 h-50"></Input>
      <ImagePlus className="relative bottom-27 left-22"></ImagePlus>
    </div>
  );
};

export default ImageUpload;
