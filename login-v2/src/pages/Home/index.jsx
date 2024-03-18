<<<<<<< HEAD
import { LayoutHomeComponents } from "../../components/layoutComponents/home-index";
=======
import { LayoutHomeComponents } from "../../components/layoutHomeComponents/home-index";
>>>>>>> 1f54fc7accea6e04f598ba95858f4487ac7f1a18

import mediScan from "../../assets/MediscanCor.png"

export const Home = () => { 

  return (
    <LayoutHomeComponents>
      <form className="home-form">
        <span className="home-form-title">Upload de Imagens</span>
        <span className="home-form-title">
          <img src={mediScan} alt="wrap-home"/>
        </span>
      </form>
    </LayoutHomeComponents>
  );
};

export default Home;