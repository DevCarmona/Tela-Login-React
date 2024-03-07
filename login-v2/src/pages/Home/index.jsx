
import { useState } from "react";
import { LayoutComponents } from "../../components/layoutComponents";

import mediScan from "../../assets/MediscanCor.png"

export const Home = () => {
  //  State to store the images
  //  Estado para armazenaras imagens
  const[images, setImages] = useState([]);

  //  Function to handle image upload
  //  Função para lidar com o upload de imagens
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImages([...images, reader.result]);
    };

    if(file) {
      reader.readAsDataURL(file);
    }
  };

  //  Function to remove an image from the list
  //  Função para remover uma imagem da lista
  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  }

  return (
    <LayoutComponents>
      <form className="home-form">
        <span className="login-form-title">Upload de Imagens</span>
        <span className="login-form-title">
          <img src={mediScan} alt=""/>
        </span>
        <div className="image-form">

          {/* Input to do image upload */}
          <div className="image-upload-form">
            <input 
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          {/* Image list*/}
          <div className="image-list-form">
            <h2>Lista de Imagens:</h2>
            <ul>
              {images.map((image, index) => (
                <li key={index}>
                  <img 
                    src={image}
                    alt={`Image ${index}`}
                    style={{maxWidth: "200px", maxHeight: "200px"}}
                  />
                  <button onClick={() => handleRemoveImage(index)}>Remover</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </form>
    </LayoutComponents>
  );
};

export default Home;