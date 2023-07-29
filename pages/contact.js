import Heading from "../components/Heading";
import s from '../styles/Contact.module.css';
import Image from 'next/image';
import smallPic from '../public/contact/color.jpg';

function Contact() {
  return <>
    <Heading text="Контакты:" />
    <div className={s.contact}>
    <Image src={smallPic}
      alt='car'
      placeholder="blur"
      style={{objectFit: 'cover'}}
      />
   
      <div className={s.rightSide}>
        <form className={s.form} id="contact-form" method="POST">
          <label htmlFor="name"> Полное имя </label>
          <input name="name" placeholder="Введите полное имя..." type="text" />
          <label htmlFor="email"> Email </label>
          <input className={s.input} name="email" placeholder="Введите email..." type="email" />
          <label htmlFor="message"> Сообщение </label>
          <textarea className={s.textarea}
            rows="6"
            placeholder="Введите ваш вопрос..."
            name="message"
            required
          >
          </textarea>
          <button className={s.button} type="submit"> Отправить сообщение </button>
        </form>
      </div>
    </div>
  </>
}


export default Contact