import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import "./ModalCustomPage.css";

export default function ModalCustomPage(props) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    props.setaddressNumber(data.zonecode);
    console.log(
      "🚀 ~ file: addressModal.js:28 ~ handleComplete ~ data.zonecode",
      data.zonecode
    );
    props.setaddress(fullAddress);
    console.log(
      "🚀 ~ file: addressModal.js:30 ~ handleComplete ~ fullAddress",
      fullAddress
    );

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const postCodeStyle = {
    display: "block",
    top: "50px",
    zIndex: "100",
    padding: "7px",
    width: "100%",
    overflow: "hidden",
  };

  return (
    <>
      <button className="address_button" onClick={onToggleModal}>
        우편번호 검색
      </button>
      {isOpen && (
        <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
      )}
    </>
  );
}
