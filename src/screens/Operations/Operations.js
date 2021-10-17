import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './style.css';

function Operations() {
  const [transfer, setTransfer] = useState(false);
  return (
    <div className="operations_container">
      <Header col="operations" />
      <div className="operations_body">
        <h1>Operations</h1>
        <div className="operations_operation">
          <select
            name="operations"
            id="operations"
            onChange={(event) =>
              event.target.value === 'transfer'
                ? setTransfer(true)
                : setTransfer(false)
            }
            className="operations_select"
          >
            <option value="deposit">Deposit</option>
            <option value="transfer">Transfer</option>
            <option value="withdraw">Withdraw</option>
          </select>
          <div className="operations_input_container">
            <input
              type="text"
              placeholder="Account Number"
              className="operations_input"
            />
            {transfer && (
              <input
                type="text"
                placeholder="To"
                className="operations_input"
              />
            )}
            <input
              type="text"
              placeholder="Amount"
              className="operations_input"
            />
            <button className="operations_button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operations;
