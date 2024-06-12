import React, { useState } from 'react';
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
  const [voiceStuttering, setVoiceStuttering] = useState('');
  const [profiledMovements, setProfiledMovements] = useState('');
  const [emotions, setEmotions] = useState('');

  const addUser = () => {
    // Calculate the total weight
    const totalWeight = parseInt(voiceStuttering) + parseInt(profiledMovements) + parseInt(emotions);

    // Check if total weight is not exactly 10
    if (totalWeight !== 10) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Total weight must be exactly 10!',
      });
      return; // Exit the function early
    }

    // Reset input fields
    setVoiceStuttering('');
    setProfiledMovements('');
    setEmotions('');

    // Show success message
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Changes Appended`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Define Weight Distribution Across Modalities</CardTitle>
                <div className="text-center">
                  <div style={{ color: 'red' }}>Total Weight Must Be Equal 10</div> {/* Making the text red colored */}
                </div>
              </CardHeader>
              <CardBody>
                <div className="row">
                  <div className="col">
                    <label>Voice Stuttering</label>
                    <input type="text" className="form-control" value={voiceStuttering} onChange={e => setVoiceStuttering(e.target.value)} />
                  </div>
                  <div className="col">
                    <label>Profiled Movements</label>
                    <input type="text" className="form-control" value={profiledMovements} onChange={e => setProfiledMovements(e.target.value)} />
                  </div>
                  <div className="col">
                    <label>Emotions</label>
                    <input type="text" className="form-control" value={emotions} onChange={e => setEmotions(e.target.value)} />
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
