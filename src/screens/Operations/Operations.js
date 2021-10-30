import React, { useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import './style.css';
import axios from '../../axios/axios';
import swal from 'sweetalert';
import ReactLoading from 'react-loading';

function Operations() {
  const [transfer, setTransfer] = useState(false);
  const [loading, setLoading] = useState(false);
  const accountNumberRef = useRef();
  const toRef = useRef();
  const amountRef = useRef();
  const selectRef = useRef();
  const config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
  };

  function Deposit() {
    setLoading(true);
    const accountNumber = accountNumberRef.current.value;
    const amount = amountRef.current.value;

    const body = JSON.stringify({
      accountNumber1: accountNumber,
      amount,
    });

    axios.post('/api/operations/deposit', body, config)
      .then(() => {
        setLoading(false);
        swal({
          title: 'Success',
          text: 'The operation has been done.',
          icon: 'success',
          button: 'ok'
        });
      }).catch((err) => {
        setLoading(false);
        swal({
          title: 'Error',
          text: 'An error has been occured. Please try again',
          icon: 'error',
          button: 'ok'
        })
      });
  }

  function Transfer() {
    setLoading(true);
    const accountNumber = accountNumberRef.current.value;
    const To = toRef.current.value;
    const amount = amountRef.current.value;

    const body = JSON.stringify({
      accountNumber1: accountNumber,
      accountNumber2: To,
      amount,
    });

    axios.post('/api/operations/transfer', body, config)
      .then(() => {
        setLoading(false);
        swal({
          title: 'Success',
          text: 'The operation has been done.',
          icon: 'success',
          button: 'ok'
        });
      }).catch((err) => {
        setLoading(false);
        swal({
          title: 'Error',
          text: 'An error has been occured. Please try again',
          icon: 'error',
          button: 'ok'
        })
      });
  }

  function Withdraw() {
    setLoading(true);
    const accountNumber = accountNumberRef.current.value;
    const amount = amountRef.current.value;

    const body = JSON.stringify({
      accountNumber1: accountNumber,
      amount,
    });

    axios.post('/api/operations/withdraw', body, config)
      .then(() => {
        setLoading(false);
        swal({
          title: 'Success',
          text: 'The operation has been done.',
          icon: 'success',
          button: 'ok'
        });
      }).catch((err) => {
        setLoading(false);
        swal({
          title: 'Error',
          text: 'An error has been occured. Please try again',
          icon: 'error',
          button: 'ok'
        })
      });
  }

  function submit() {
    switch (selectRef.current.value) {
      case 'deposit':
        Deposit();
        break;
      case 'transfer':
        Transfer();
        break;
      case 'withdraw':
        Withdraw();
        break;
      default:
        break;
    }
  }

  return (
    <div className="operations_container">
      {loading && (
        <div className={`${loading}` ? 'loading' : 'hiddenLoading'}>
          <ReactLoading
            type="spinningBubbles"
            color="black"
            height="8%"
            width="8%"
          />
        </div>
      )}
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
            ref={selectRef}
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
              ref={accountNumberRef}
            />
            {transfer && (
              <input
                type="text"
                placeholder="To"
                className="operations_input"
                ref={toRef}
              />
            )}
            <input
              type="text"
              placeholder="Amount"
              className="operations_input"
              ref={amountRef}
            />
            <button className="operations_button" onClick={submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operations;
