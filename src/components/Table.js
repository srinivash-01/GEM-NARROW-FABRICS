import React from "react";

function Table({ list, total }) {
  const tableStyle = {
    width: "100%",
    textAlign: "center",
    borderCollapse: "collapse",
    border: "3px solid green",
    borderTop: "0"

  };

  const thStyle = {
    fontWeight: "bold",
    backgroundColor: "#A5DD9B", // Change this color to your desired background color
    padding: "8px",
    border: "3px solid green",
    borderTop: "0",
    borderBottom: "0",
    borderLeft: "0"
  };

  const tdStyle = {
    padding: "8px",
    border: "3px solid green",
    borderTop: "0",
    borderBottom: "0",
    borderLeft: "0"
  };

  return (
    <>
      <table style={tableStyle} className="mb-10">
        <thead>
          <tr>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Size</th>
            <th style={thStyle}>Particulars</th>
            <th style={thStyle}>HSN Code</th>
            <th style={thStyle}>Quantity</th>
            <th style={thStyle}>Rate</th>
            <th style={thStyle}>Amount <br/>(₹)</th>
          </tr>
        </thead>
        {list.map(({ id, Size, Particulars, HSN_Code, Rate, quantity, price, amount }, index) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{Size}</td>
                <td style={tdStyle}>{Particulars}</td>
                <td style={tdStyle}>{HSN_Code}</td>
                <td style={tdStyle}>{quantity}</td>
                <td style={tdStyle}>{price}</td>
                <td style={tdStyle}>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
        <tfoot>
          <tr >
            <td style={{
              padding: "8px",
              border: "3px solid green",
              borderTop: "0",
              borderBottom: "0",
              borderLeft: "0"
            }}></td>
            <td style={{
              padding: "8px",
              border: "3px solid green",
              borderTop: "0",
              borderBottom: "0",
              borderLeft: "0"
            }}></td>
            <td style={{
              padding: "8px",
              border: "3px solid green",
              borderTop: "0",
              borderBottom: "0",
              borderLeft: "0",
              fontSize: "12px",
              fontWeight: "500",
              fontStyle: "italic"            
            }}>Narrow Women Fabrics (HSN - 58063120)<br/> Taxed at 5% as per GST ACT -01.07-17 <br/>Chapter : 58, Section : 6 </td>
            <td style={{
              padding: "8px",
              border: "3px solid green",
              borderTop: "0",
              borderBottom: "0",
              borderLeft: "0"
            }}></td>
            <td style={{
              padding: "8px",
              border: "3px solid green",
              borderTop: "0",
              borderBottom: "0",
              borderLeft: "0"
            }}></td>
            <td style={{
              padding: "8px",
              border: "3px solid green",
              borderTop: "0",
              borderBottom: "0",
              borderLeft: "0"
            }}></td>
            <td style={{
              padding: "8px",
              border: "3px solid green",
              borderTop: "0",
              borderBottom: "0",
              borderLeft: "0"
            }}></td>

          </tr>
        </tfoot>
      </table>

    </>
  );
}

export default Table;
