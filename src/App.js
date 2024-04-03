import { useState } from "react";
import Card from "./components/Card";

function App() {
  const newMonth = new Date().getMonth() + 1;
  const newNum = String(newMonth).length <= 1 ? "0" : null;
  const addNum = newNum + newMonth;
  const newYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    name: " ",
    number: " ",
    date: addNum + "-" + newYear,
    cvv: " ",
  });

  const [side, setSide] = useState("true");

  const [message, setMessage] = useState(
    "please enter your credit card details"
  );

  function handleSubmit(e) {
    // e.preventDefault();
    setMessage("thank you");
  }
  function handleChange(e) {
    let value = e.target.value;
    const name = e.target.name;

    if (name === "cvv" || name === "number") {
      value = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    }

    if (name === "cvv") {
      setSide("false");
    } else {
      setSide("true");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  console.log(formData);

  return (
    <div className="form-container">
      <Card formData={formData} side={side} />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            Name on Card
            <input
              name="name"
              value={formData.value}
              placeholder="name"
              required
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="input-container">
          <label>
            Card Number
            <input
              placeholder="0000 0000 0000 0000"
              minLength={16}
              maxLength={16}
              name="number"
              value={formData.value}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="month-container">
          <label>
            Expiry Date
            <input
              type="month"
              required
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>

          <label>
            CVV
            <input
              id="cvv"
              placeholder="123"
              minLength={3}
              maxLength={3}
              name="cvv"
              value={formData.value}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <input type="submit" />
        </div>
        <p className="info-message">{message}</p>
      </form>
    </div>
  );
}

export default App;
