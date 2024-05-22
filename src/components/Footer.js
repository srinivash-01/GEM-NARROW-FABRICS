import React from "react";

function Footer({ total, CGST, IGST, SGST, Invoice_total, Rupees }) {
  return (
    <div style={{ position: "relative", bottom: "0px" }}>
      <footer >
        <div style={{ display: "flex", justifyContent: "space-between", border: "3px solid green", borderTop: "0" }}>
          <div style={{ width: "67.7%", border: "3px solid green", borderTop: "0", borderBottom: "0", borderLeft: "0" }}>
            <div style={{ padding: "3%" }}>


              <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px", flexDirection: "column", alignItems: "flex-start" }}>
                <div style={{paddingBottom: "1%"}}>
                <p style={{ fontSize: "14px", fontWeight: "500", fontWeight: "bolder", textDecoration: "underline" }}>OUR BANKERS</p>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

                    <p>Bank Name & Branch </p>
                    <p>A/C No</p>
                    <p>RTGS/NEFT</p>


                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

                    <p>&nbsp;:&nbsp;&nbsp; INDIAN BANK, KOMARAPALAYAM</p>
                    <p>&nbsp;:&nbsp;&nbsp;  7493718767</p>
                    <p>&nbsp;:&nbsp;&nbsp; IDIB000K045</p>

                  </div>
                </div>
              </div>

            </div>

            <div style={{ border: "3px solid green", borderBottom: "0", borderRight: "0", borderLeft: "0", display: "flex", padding: "5% 5% 5% 3%" }}>
              <p style={{ fontSize: "14px", fontWeight: "500" }}>RUPEES: <span style={{ fontSize: "12px", marginLeft: "5px", textDecoration: "underline", fontStyle: "italic" }}>{Rupees}</span></p>
            </div>
          </div>




          <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px", flexDirection: "column", alignItems: "flex-end", paddingBottom: "4%" }}>

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <p style={{ paddingLeft: "14px", fontWeight: "700" }}>Total &nbsp;:&nbsp;&nbsp;</p>
                <p style={{ paddingLeft: "14px",fontSize: "14px" }}>CGST &nbsp;:&nbsp;&nbsp;</p>
                <p style={{ paddingLeft: "14px" }}>SGST&nbsp;:&nbsp;&nbsp;</p>
                <p style={{ paddingLeft: "14px" }}>IGST&nbsp;:&nbsp;&nbsp;</p>
                <p style={{  fontWeight: "700" }}>INVOICE TOTAL&nbsp;:&nbsp;&nbsp;</p>

              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <p style={{ paddingLeft: "14px", fontWeight: "700" }}>₹ {total}</p>
                <p style={{ paddingLeft: "14px" }}>{CGST} %</p>
                <p style={{ paddingLeft: "14px" }}>{SGST} %</p>
                <p style={{ paddingLeft: "14px" }}>{IGST} %</p>
                <p style={{ paddingLeft: "14px", fontWeight: "700" }}>₹ {Invoice_total}</p>
              </div>
            </div>
          </div>






        </div>
        <div style={{ display: "flex", border: "3px solid green", borderTop: "0" }}>
          <div style={{ width: "82.5%", border: "3px solid green", borderTop: "0", borderBottom: "0", borderLeft: "0", padding: "3% 3% 3% 2%" }}>
            <p style={{ fontSize: "14px", fontWeight: "500", textDecoration: "underline", paddingBottom: "1%" }}>TERMS</p>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>1. Subjected to Namakkal Jurisdiction only.</p>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>2. Our responsibility cases as soon as the goods leave our godown.</p>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>3. Interest at 24% will be charged if the payment is not made in due time.</p>
          </div>
          <div style={{ width: "40%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: "0px", paddingTop: "25px", paddingBottom: "20px" }}>
            <p style={{ fontSize: "14px", color: "red", paddingTop: "5px", fontWeight: "500" }}>For <span style={{fontWeight: "700"}}>GEM NARROW  FABRICS</span></p>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>Authorised Signatory</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
