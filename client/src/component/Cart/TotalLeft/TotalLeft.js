import React from "react";
import "./TotalLeft.css";
import ModalCustomPage from "../ModalCustomPage/ModalCustomPage";

function TotalLeft(props) {
  const name = props.name;
  const setname = props.setname;
  const addressNumber = props.addressNumber;
  const setaddressNumber = props.setaddressNumber;
  const address = props.address;
  const setaddress = props.setaddress;
  const addressDetail = props.addressDetail;
  const setaddressDetail = props.setaddressDetail;
  const phone1 = props.phone1;
  const setphone1 = props.setphone1;
  const phone2 = props.phone2;
  const setphone2 = props.setphone2;
  const phone3 = props.phone3;
  const setphone3 = props.setphone3;
  const email1 = props.email1;
  const setemail1 = props.setemail1;
  const emailDomain = props.emailDomain;
  const setemailDomain = props.setemailDomain;

  return (
    <div className="total_left">
      <p>주문하시는 분</p>
      <input
        type="text"
        className="input100"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      <br />
      <p>주소</p>
      <input
        className="input33"
        type="text"
        name="addressNumber"
        value={addressNumber}
      />
      <ModalCustomPage
        setaddress={setaddress}
        setaddressNumber={setaddressNumber}
      />
      <input type="text" className="input100" name="address" value={address} />
      <input
        type="text"
        className="input100"
        name="addressDetail"
        value={addressDetail}
        onChange={(e) => setaddressDetail(e.target.value)}
      />
      <br />
      <br />
      <p>휴대전화</p>
      <select
        class="box input33"
        value={phone1}
        onChange={(e) => setphone1(e.target.value)}
      >
        <option value="010">010</option>
        <option value="011">011</option>
        <option value="016">016</option>
        <option value="017">017</option>
        <option value="018">018</option>
        <option value="019">019</option>
      </select>
      <span> - </span>
      <input
        className="input33"
        type="text"
        name="phone2"
        value={phone2}
        onChange={(e) => setphone2(e.target.value)}
      />
      <span> - </span>
      <input
        className="input33"
        type="text"
        name="phone3"
        value={phone3}
        onChange={(e) => setphone3(e.target.value)}
      />
      <br />
      <br />
      <p>이메일</p>
      <input
        className="input33"
        type="text"
        name="email1"
        value={email1}
        onChange={(e) => setemail1(e.target.value)}
      />
      <span>@</span>
      <input
        className="input33"
        type="text"
        name="emailDomain"
        value={emailDomain}
      />
      <span></span>
      <select
        class="box input33 email_box"
        value={emailDomain}
        onChange={(e) => setemailDomain(e.target.value)}
      >
        <option value="">- 이메일 선택 -</option>
        <option value="naver.com">naver.com</option>
        <option value="gmail.com">gmail.com</option>
        <option value="hanmail.net">hanmail.net</option>
        <option value="nate.com">nate.com</option>
        <option value="kakao.com">kakao.com</option>
      </select>
      <br />
      <br />
      <p>- 이메일을 통해 주문처리과정을 보내드립니다.</p>
      <p>- 이메일 주소란에는 반드시 수신가능한 이메일주소를 입력해 주세요</p>
    </div>
  );
}

export default TotalLeft;
