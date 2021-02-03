import "./WhatsApp.css";
import {AiOutlineWhatsApp} from 'react-icons/ai';

export default function WhatsApp() {
  return (
    <>
      <a
          target="blank"
          href="https://api.whatsapp.com/send?phone=&text=3515497313"
          className="whatsapp-button">
            
          <i className="whatsapp-button">
              <AiOutlineWhatsApp/>
          </i>
      </a>
    </>
  );
}