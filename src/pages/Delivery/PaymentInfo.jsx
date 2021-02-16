import React from 'react';

import visaIcon from '../../assets/img/Delivery/visa.png';
import visaVerifyIcon from '../../assets/img/Delivery/verified.png';
import mcIcon from '../../assets/img/Delivery/mastercard.png';
import mcSecIcon from '../../assets/img/Delivery/securecode.png';
import belcartIcon from '../../assets/img/Delivery/belcart.png';
import belcartPassIcon from '../../assets/img/Delivery/belcart2.png';
import bePaidIcon from '../../assets/img/Delivery/bepaid.png';
import mtbankIcon from '../../assets/img/Delivery/mtbank.png';

const PaymentInfo = () => {
  return (
    <div className="payment-info-block">
      <div className="payment-info-text">
        {' '}
        При оплате банковской картой онлайн после нажатия кнопки «Оформить заказ» вы перейдете на
        специальную защищенную платежную страницу процессинговой системы bePaid. <br />
        <br />
        На платежной странице будет указан номер заказа и сумма платежа. Для оплаты вам необходимо
        ввести свои карточные данные и подтвердить платеж, нажав кнопку «Оплатить». <br />
        <br />
        Если ваша карта поддерживает технологию 3-D Secure, системой ваш будет предложено пройти
        стандартную одноминутную процедуру проверки владельца карты на странице вашего банка (банка,
        который выдал вашу карту). <br />
        <br />
        После оплаты оператор колл-центра свяжется с вами для уточнения деталей заказа. Если вы
        выбрали опцию «Не перезванивать», точное время доставки (готовности блюда при самовывозе)
        будет указано в sms сообщении. <br />
        <br />
        Обращаем ваше внимание, что после проведения платежа на указанный вами электронный адрес
        придет подтверждение оплаты. Просим вас сохранять данные оплат. <br />
        <br />
        Мы принимаем платежи по следующим банковским картам: Visa, Visa Electron, MasterCard,
        Maestro, Белкарт.{' '}
      </div>
      <div className="payment-icons">
        <img src={visaIcon} alt="" />
        <img src={visaVerifyIcon} alt="" />
        <img src={mcIcon} alt="" />
        <img src={mcSecIcon} alt="" />
        <img src={belcartIcon} alt="" />
        <img src={belcartPassIcon} alt="" />
        <img src={bePaidIcon} alt="" />
        <img src={mtbankIcon} alt="" />
      </div>
    </div>
  );
};

export default PaymentInfo;
