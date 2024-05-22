import React from "react";
import GEM from "../asserts/GEM1.png";
function Header({ handlePrint }) {
  return (
    <div style={{border: "3px solid green", padding: "1%"}}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "33.3%", display: "flex", justifyContent: "center" }}>
          <p style={{ fontSize: "12px", fontWeight: "700" }}>GSTIN : 33CLYPS2180Q2Z0</p>
        </div>
        <div style={{ width: "33.3%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          {/* <p style={{ fontSize: "12px", fontWeight: "500" }}>SUBJECTED TO NAMAKKAL JURISDICTION</p>
          <p style={{ fontSize: "20px", color: "red", fontWeight: "bolder", textDecoration: "underline" }}>INVOICE</p> */}
        </div>
        <div style={{ width: "33.3%", display: "flex", flexDirection: "column", alignItems: "end" }}>
          <p style={{ fontSize: "12px", fontWeight: "500" }}>Off: Cell: 94425 84427, 93600 42427</p>
          <p style={{ fontSize: "12px", fontWeight: "500" }}>E-mail: gemnarrow1968@gmail.com</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{width: "33.3%", display: "flex",justifyContent: "center"}}>
        <img style={{ width: "40%"}} src={GEM}></img>
        </div>
        <div style={{ width: "55%", flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "flexStart",marginTop: "-30px"}}>
          <p style={{ fontSize: "12px", fontWeight: "500" }}>SUBJECTED TO NAMAKKAL JURISDICTION</p>
          <p style={{ fontSize: "20px", color: "red", fontWeight: "bolder", textDecoration: "underline" }}>INVOICE</p>
          <p style={{ fontSize: "27px", color: "red", fontWeight: "bolder", marginTop: "2%", fontFamily: "sans-serif" }}>GEM NARROW FABRICS</p>
          <p style={{ fontSize: "12px", borderRadius: "10px", fontWeight: "700", border: "1px solid #73AD21", padding: "2px",background: "rgb(165, 221, 155)" }}>Mfrs of : ALL KINDS OF COTTON TAPES</p>
          <p style={{ fontSize: "12px", fontWeight: "500", paddingTop: "5px" }}>148 A, Kamban Nagar, B.Ed College Backside,</p>
          <p style={{ fontSize: "12px", color: "red", paddingTop: "5px", fontWeight: "500" }}>KOMARAPALAYAM - 638 183, Namakkal Dt, Tamilnadu.</p>
        </div>
        <div style={{width: "33.3%"}}></div>
      </div>
    </div>

  );
}

export default Header;
