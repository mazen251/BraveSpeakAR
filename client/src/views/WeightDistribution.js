import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';

function WeightDistribution() {
  const [password, setPassword] = useState('');
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

  const addUser = async () => {
    try {
      const user = { username, email, password };
      await axios.post('http://localhost:5000/add_user', user);
      // Reset form
      setPassword('');
      setName('');
      setEmail('');
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Changes Appended`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Define Weight Distribution Across Modalities</CardTitle>
                <div className="text-center"> {/* Centering the text */}
                  <div style={{ color: 'red' }}>Total Weight Must Be Equal 10</div> {/* Making the text red colored */}
                </div>
              </CardHeader>
              <CardBody>
                <div className="row">
                  <div className="col">
                    <label>Voice Stuttering</label>
                    <input type="text" className="form-control" value={username} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="col">
                    <label>Profiled Movements</label>
                    <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div className="col">
                    <label>Emotions</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-info mt-2" onClick={addUser}>Append Changes</button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WeightDistribution;
