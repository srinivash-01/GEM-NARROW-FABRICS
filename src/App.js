import ReactToPrint from "react-to-print";
import React, { useRef } from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDeatils from "./components/MainDeatils";
import ClientDeatils from "./components/ClientDeatils";
import Dates from "./components/Dates";
import TableForm from "./components/TableForm";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [clientName, setClientName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [GSTIN, setGSTIN] = useState("");
  const [StateCode, setStateCode] = useState("");
  const [Po_No, setPo_No] = useState("");
  const [Bale_No, setBale_No] = useState("");
  const [Lorry_to, setLorry_to] = useState("");
  const [LR_No, setLR_No] = useState("");
  const [Weigth, setWeigth] = useState("");
  const [Date, setDate] = useState("");
  const [Charges, setCharges] = useState("");
  const [LR_Through, setLR_Through] = useState("");
  const [DPT, setDPT] = useState("");
  const [TBNT, setTBNT] = useState("");
  const [Rupees, setRupees] = useState("");
 






  //table
  const [Size, setSize] = useState("");
  const [Particulars, setParticulars] = useState("");
  const [HSN_Code, setHSN_Code] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState("");
  const [CGST, setCGST] = useState(5);
  const [SGST, setSGST] = useState(5);
  const [IGST, setIGST] = useState(5);
  const [Invoice_total, setInvoice_total] = useState("");

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button className="bg-blue-500 ml-5 mx-2 py-1 px-8 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                  Print/Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div ref={componentRef} className="p-5">
              <Header handlePrint={handlePrint} />
              <Dates
                invoiceNumber={invoiceNumber}
                Date={Date}
                clientName={clientName}
                GSTIN={GSTIN}
                StateCode={StateCode}
                Po_No={Po_No}
                Bale_No={Bale_No}
                Lorry_to={Lorry_to}
                LR_No={LR_No}
                Weigth={Weigth}
                Charges={Charges}
                LR_Through={LR_Through}
                DPT = {DPT}
                TBNT = {TBNT}
                Rupees = {Rupees}
              />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Table
                  quantity={quantity}
                  price={price}
                  amount={amount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </div>
              {/* <Notes notes={notes} /> */}
              <Footer
                name={clientName}
                total={total}
                CGST={CGST}
                IGST={IGST}
                SGST={SGST}
                Invoice_total={Invoice_total}
                Rupees = {Rupees}
              />
            </div>
            <button
              onClick={() => setShowInvoice(false)}
              className="bg-blue-500 px-8 py-1 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
            >
              Edit Information
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center">


              <article className=" md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Enter Invoice Number"

                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Date</label>
                  <input
                    type="date"
                    name="Date"
                    id="Date"
                    placeholder="Enter Invoice Date"

                    value={Date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <textarea
                  name="clientName"
                  id="clientName"
                  placeholder="Enter M/S"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  rows={5}
                  cols={30}
                />
                <div className="flex flex-col">
                  <label htmlFor="dueDate">GSTIN : </label>
                  <input
                    type="text"
                    name="GSTIN"
                    id="GSTIN"
                    placeholder="Enter GSTIN"

                    value={GSTIN}
                    onChange={(e) => setGSTIN(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">StateCode : </label>
                  <input
                    type="text"
                    name="StateCode"
                    id="StateCode"
                    placeholder="Enter StateCode"

                    value={StateCode}
                    onChange={(e) => setStateCode(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Po_No : </label>
                  <input
                    type="text"
                    name="Po_No"
                    id="Po_No"
                    placeholder="Enter Po_No"

                    value={Po_No}
                    onChange={(e) => setPo_No(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Bale_No : </label>
                  <input
                    type="text"
                    name="Bale_No"
                    id="Bale_No"
                    placeholder="Enter Bale_No"

                    value={Bale_No}
                    onChange={(e) => setBale_No(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Lorry_to : </label>
                  <input
                    type="text"
                    name="Lorry_to"
                    id="Lorry_to"
                    placeholder="Enter Lorry_to"

                    value={Lorry_to}
                    onChange={(e) => setLorry_to(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">LR_No : </label>
                  <input
                    type="text"
                    name="LR_No"
                    id="LR_No"
                    placeholder="Enter LR_No"

                    value={LR_No}
                    onChange={(e) => setLR_No(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Weigth : </label>
                  <input
                    type="text"
                    name="Weigth"
                    id="Weigth"
                    placeholder="Enter Weigth"

                    value={Weigth}
                    onChange={(e) => setWeigth(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Charges : </label>
                  <input
                    type="text"
                    name="Charges"
                    id="Charges"
                    placeholder="Enter Charges"

                    value={Charges}
                    onChange={(e) => setCharges(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">LR_Through : </label>
                  <input
                    type="text"
                    name="LR_Through"
                    id="LR_Through"
                    placeholder="Enter LR_Through"

                    value={LR_Through}
                    onChange={(e) => setLR_Through(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">DPT : </label>
                  <input
                    type="text"
                    name="DPT"
                    id="DPT"
                    placeholder="Enter DPT"

                    value={DPT}
                    onChange={(e) => setDPT(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">TBNT : </label>
                  <input
                    type="text"
                    name="TBNT"
                    id="TBNT"
                    placeholder="Enter TBNT"

                    value={TBNT}
                    onChange={(e) => setTBNT(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Rupees : </label>
                  <input
                    type="text"
                    name="Rupees"
                    id="Rupees"
                    placeholder="Enter Rupees"
                    value={Rupees}
                    onChange={(e) => setRupees(e.target.value)}
                  />
                </div>
              </article>
              {/* this is our table form */}
              <article>
                <TableForm
                  Size={Size}
                  setSize={setSize}
                  Particulars={Particulars}
                  setParticulars={setParticulars}
                  HSN_Code={HSN_Code}
                  setHSN_Code={setHSN_Code}
                  price={price}
                  setPrice={setPrice}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>
              <article style={{display: "flex",padding: "1%",justifyContent: "flex-start",alignItems: "center",flexDirection: "row",justifyContent: "space-around"}}>
                <div className="flex flex-col" >
                  <label htmlFor="dueDate">CGST : </label>
                  <input
                    type="text"
                    name="CGST"
                    id="CGST"
                    placeholder="Enter CGST"
                    style={{ width: "100px" }}
                    value={CGST}
                    onChange={(e) => setCGST(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">SGST : </label>
                  <input
                    type="text"
                    name="SGST"
                    id="SGST"
                    placeholder="Enter SGST"
                    style={{ width: "100px" }}
                    value={SGST}
                    onChange={(e) => setSGST(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">IGST : </label>
                  <input
                    type="text"
                    name="IGST"
                    id="IGST"
                    placeholder="Enter IGST"
                    style={{ width: "100px" }}
                    value={IGST}
                    onChange={(e) => setIGST(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Invoice_total : </label>
                  <input
                    type="text"
                    name="Invoice_total"
                    id="Invoice_total"
                    placeholder="Enter Invoice_total"

                    value={Invoice_total}
                    onChange={(e) => setInvoice_total(e.target.value)}
                  />
                </div>
              </article>
              {/* <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="25"
                rows="8"
                placeholder="Additional Notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea> */}

              <button
                onClick={() => {
                  setShowInvoice(true);
                }}
                className="bg-blue-500 px-8 py-1 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
