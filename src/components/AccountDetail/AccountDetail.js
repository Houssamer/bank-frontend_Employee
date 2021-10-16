import React, { useState } from 'react';
import './style.css';
import Deposit from '../../assets/deposit.png';
import Transfer from '../../assets/transfer.png';
import Withdraw from '../../assets/withdraw.png';

function AccountDetail() {
  const [account, setAccount] = useState({
    id: 1,
    number: '961715552555369759046004',
    balance: 500,
  });
  const [operations, setOperations] = useState([
    {
      id: 1,
      type: 'Deposit',
      amount: 500,
      date: '2021-06-28 18:00:00',
    },
    {
      id: 2,
      type: 'Transfer',
      amount: 500,
      date: '2021-06-28 18:00:00',
    },
    {
      id: 3,
      type: 'Withdraw',
      amount: 500,
      date: '2021-06-28 18:00:00',
    },
  ]);

  return (
    <div className="accountDetail_container">
      <h1>Account</h1>
      <div className="accountDetail_body">
        <div className="accountDetail_leftSide">
          <h4>Account number: </h4>
          <div className="accountDetail_number">
            <p>{account.number}</p>
          </div>
          <div className="accountDetail_balance">
            <p>
              Balance: <br /> {account.balance}$
            </p>
          </div>
        </div>
        <div className="accountDetail_rightSide">
          <div className="accountDetail_right_topSide">
            <h4>Operations history</h4>
            <select name="operation" id="operation">
              <option value="all">All</option>
              <option value="deposit">Deposit</option>
              <option value="transfer">Transfer</option>
              <option value="withdraw">Withdraw</option>
            </select>
          </div>
          <div className="accountDetail_right_bottomSide">
            {operations.map((operation) => (
              <div key={operation.id} className="acccountDetail_operation">
                <img
                  src={
                    operation.type === 'Deposit'
                      ? Deposit
                      : operation.type === 'Transfer'
                      ? Transfer
                      : Withdraw
                  }
                  alt={operation.type}
                  className="operation_icon"
                />
                <div className="accountDetail_account_info">
                  <h3>{operation.type}</h3>
                  <p>{operation.amount}$</p>
                </div>
                <p>{operation.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetail;
