import React, { useEffect, useState } from 'react';
import './style.css';
import Deposit from '../../assets/deposit.png';
import Transfer from '../../assets/transfer.png';
import Withdraw from '../../assets/withdraw.png';
import { useParams } from 'react-router';
import axios from '../../axios/axios';

function AccountDetail() {
  const number = useParams().id;
  const [account, setAccount] = useState({});
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    const body = JSON.stringify({
      number,
    });

    axios.post('/api/account', body, config).then((res) => {
      setAccount(res.data);
      const body2 = JSON.stringify({
        accountNumber1: number,
      });
      axios.post('/api/operations', body2, config).then((res) => {
        setOperations(res.data);
      }).catch((err) => {
        console.log(err);
      })
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  function sqlToJsDate(sqlDate) {
    const Arr1 = sqlDate.split('-');
    const year = Arr1[0];
    const month = Arr1[1];

    const Arr2 = Arr1[2].split('T');
    const day = Arr2[0];

    const Arr3 = Arr2[1].split(':');
    const hour = Arr3[0];
    const minutes = Arr3[1];

    const Arr4 = Arr3[2].split('.');
    const seconds = Arr4[0];

    const date =
      year +
      '-' +
      month +
      '-' +
      day +
      ' ' +
      hour +
      ':' +
      minutes +
      ':' +
      seconds;
    return date;
  }

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
                <p>{sqlToJsDate(operation.date)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetail;
