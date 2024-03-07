import { LayoutComponents } from "../../components/layoutComponents";

import mediScan from "../../assets/MediscanCor.png"

export const Home = () => { 

  return (
    <LayoutComponents>
      <form className="home-form">
        <span className="home-form-title">Upload de Imagens</span>
        <span className="home-form-title">
          <img src={mediScan} alt=""/>
        </span>
      </form>
    </LayoutComponents>
  );
};

export default Home;