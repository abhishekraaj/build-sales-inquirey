import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVisitorList } from '../ACTION/Action';
import './Table.css';

const Table = () => {
  const dispatch = useDispatch();
  const visitorList = useSelector((state) => state.visitorList); 
 console.log(visitorList)
  useEffect(() => {
    dispatch(getVisitorList());
  }, [dispatch]);

  return (
    <div className='container'>
      <h2>Inquiry List</h2>

      <div>
        <Link to='/'>Go Back</Link>
        <div className='btn-container'>
          <button className='inq-btn'>New Inquiry</button>
        </div>
        <table>
        <thead>
          <tr>
            <th>Inquiry Date</th>
            <th>Address</th>
            <th>Assign To</th>
            
          </tr>
        </thead>
        <tbody>
          {visitorList.data?.map((visitor) => (
            <tr key={visitor.id}>
              <td>{visitor.Inquiry_date}</td>
              <td>{visitor.address}</td>
              <td>{visitor.assign_to_data?.first_name}</td>
      
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      
    </div>
  );
};

export default Table;
