import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid";

function TableForm({
  Size,
  setSize,
  Particulars,
  setParticulars,
  HSN_Code,
  setHSN_Code,

  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Size || !Particulars || !HSN_Code || !quantity || !price) {
      alert("Please Fill In All Inputs");
      return;
    }

    const calculatedAmount = quantity * price;
    const newItem = {
      id: uuidv4(),
      Size,
      Particulars,
      HSN_Code,

      quantity,
      price,
      amount: calculatedAmount,
    };

    if (isEditing) {
      const updatedList = list.map((item) =>
        item.id === editingId ? newItem : item
      );
      setList(updatedList);
      setIsEditing(false);
      setEditingId(null);
    } else {
      setList([...list, newItem]);
    }

    setSize("");
    setParticulars("");
    setHSN_Code("");

    setQuantity("");
    setPrice("");
    setAmount(0);
  };

  useEffect(() => {
    setAmount(quantity * price);
  }, [quantity, price, setAmount]);

  useEffect(() => {
    const totalAmount = list.reduce((acc, item) => acc + item.amount, 0);
    setTotal(totalAmount);
  }, [list, setTotal]);

  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setIsEditing(true);
    setEditingId(id);
    setSize(editingRow.Size);
    setParticulars(editingRow.Particulars);
    setHSN_Code(editingRow.HSN_Code);

    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };

  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="Particulars">Item Particulars</label>
          <input
            type="text"
            name="Particulars"
            id="Particulars"
            placeholder="Item particulars"
            value={Particulars}
            onChange={(e) => setParticulars(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-6 gap-10">
          <div className="flex flex-col">
            <label htmlFor="Size">Size</label>
            <input
              type="text"
              name="Size"
              id="Size"
              placeholder="Size"
              value={Size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="HSN_Code">HSN Code</label>
            <input
              type="text"
              name="HSN_Code"
              id="HSN_Code"
              placeholder="HSN Code"
              value={HSN_Code}
              onChange={(e) => setHSN_Code(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 px-8 py-1 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mb-5"
        >
          {isEditing ? "Edit Item" : "Add Item"}
        </button>
      </form> */}

      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100">
            <td className="font-bold">Size</td>
            <td className="font-bold">Particulars</td>
            <td className="font-bold">HSN Code</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
            <td className="font-bold">Actions</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, Size, Particulars, HSN_Code, quantity, price, amount }) => (
            <tr key={id}>
              <td>{Size}</td>
              <td>{Particulars}</td>
              <td>{HSN_Code}</td>

              <td>{quantity}</td>
              <td>₹ {price}</td>
              <td>₹ {amount}</td>
              <td>
                <button onClick={() => deleteRow(id)}>
                  <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                </button>
                <button onClick={() => editRow(id)}>
                  <CiEdit className="text-green-700 font-bold text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>

          <tr style={{marginTop: "50px"}}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td style={{fontWeight: "700"}}>Total</td>
            <td style={{fontWeight: "700"}}>₹ {total.toLocaleString()}</td>
          </tr>
          <tr>
            <td>

              <input
                type="text"
                name="Size"
                id="Size"
                placeholder="Size"
                value={Size}
                onChange={(e) => setSize(e.target.value)}
                style={{ width: "100px" }}
              />

            </td>
            <td>
              <input
                type="text"
                name="Particulars"
                id="Particulars"
                placeholder="Item particulars"
                value={Particulars}
                onChange={(e) => setParticulars(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                name="HSN_Code"
                id="HSN_Code"
                placeholder="HSN Code"
                value={HSN_Code}
                onChange={(e) => setHSN_Code(e.target.value)}
                style={{ width: "100px" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{ width: "100px" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ width: "100px" }}
              />
            </td>
            <td>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 px-8 py-1 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mb-5"
              >
                {isEditing ? "Edit Item" : "Add Item"}
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      

    </>
  );
}

export default TableForm;
