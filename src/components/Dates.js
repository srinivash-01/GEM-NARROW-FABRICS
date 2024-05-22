import React from "react";

function Dates({ invoiceNumber, Date, clientName, GSTIN, StateCode, Po_No, Bale_No, Lorry_to, LR_No, Weigth, Charges, LR_Through, DPT, TBNT, Rupees }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
        <div style={{ width: "45%", border: "3px solid green", padding: "1%", borderTop: "0", borderRight: "0" }}>

          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start",fontWeight: "500" }}>
              <p>INVOICE NUMBER</p>
              <p>DATE </p>
              <p>M/S </p>
              <p>GSTIN</p>
              <p>STATE CODE </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp; {invoiceNumber}</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp; {Date}</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp;  {clientName}</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp; {GSTIN}</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp; {StateCode}</p>
            </div>
          </div>






        </div>
        <div style={{ width: "55%", border: "3px solid green", padding: "1%", borderTop: "0",  fontSize: "14px"  }}>
          <div style={{ display: "flex" }}>
          <div style={{ width: "50%", display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" ,fontWeight: "500"}}>
              <p>Po No</p>
              <p>Bale No </p>
              <p>LR No</p>
              <p>Date</p>
              <p>L/R through </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp; {Po_No}</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp; {Bale_No}</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp;  {LR_No}</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp; {Date}</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp; {LR_Through}</p>
            </div>
          </div>
          <div style={{ display: "flex",width: "50%" , justifyContent: "center"}}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" ,fontWeight: "500"}}>
              <p>&nbsp;</p>
              <p>Lorry to </p>
              <p>Weigth</p>
              <p>Charges(₹)</p>
              <p>&nbsp;</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <p style={{ paddingLeft: "15px" }}>&nbsp;&nbsp;</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp; {Lorry_to}</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp;  {Weigth}</p>
              <p style={{ paddingLeft: "15px" }}>:&nbsp;&nbsp; {Charges}</p>
              <p style={{ paddingLeft: "15px" }}>&nbsp;</p>
            </div>
          </div>
          </div>

        </div>

      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", border: "3px solid green", padding: "1%", borderTop: "0", borderRight: "0" }}><p style={{ fontSize: "14px", fontWeight: "500" }}>Documents Presented to <span style={{ fontSize: "12px", marginLeft: "5px", textDecoration: "underline"}}>{DPT}</span></p></div>
        <div style={{ width: "50%", border: "3px solid green", padding: "1%", borderTop: "0", borderLeft: "0" }}><p style={{ fontSize: "14px", fontWeight: "500" }}>To be negotiated through <span style={{ fontSize: "12px", marginLeft: "5px", textDecoration: "underline"}}>{TBNT}</span></p></div>
      </div>
    </>
  );
}

export default Dates;
