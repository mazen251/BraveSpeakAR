import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import swal from 'sweetalert2';

function Survey() {
  const questions = [
    "I feel nervous when I speak in front of a group of people.",
    "I avoid social gatherings because they make me anxious.",
    "I feel self-conscious in social situations.",
    "I worry about being judged by others.",
    "I feel uncomfortable when I have to introduce myself.",
    "I get anxious when I have to speak to authority figures.",
    "I avoid eye contact in social situations.",
    "I feel like I am being watched in social situations.",
    "I find it hard to speak up in meetings.",
//    "I fear being the center of attention.",
//    "I get anxious about meeting new people.",
//    "I worry that people will notice my anxiety.",
//    "I avoid starting conversations.",
//    "I fear being negatively evaluated by others.",
//    "I feel like I can't contribute to social conversations."
  ];

  const [responses, setResponses] = useState(Array(questions.length).fill(0));

  const handleOptionChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action with the responses, like sending to a server
    console.log("Survey responses:", responses);
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Survey Submitted',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Social Anxiety and Fear of Public Speaking Survey</CardTitle>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                  <FormGroup key={index}>
                    <Label>{question}</Label>
                    <div>
                      {[1, 2, 3, 4, 5].map(value => (
                        <FormGroup check inline key={value}>
                          <Label check>
                            <Input
                              type="radio"
                              name={`question${index}`}
                              value={value}
                              checked={responses[index] === value}
                              onChange={() => handleOptionChange(index, value)}
                            />{' '}
                            {value}
                          </Label>
                        </FormGroup>
                      ))}
                    </div>
                  </FormGroup>
                ))}
                <Button type="submit" color="info">Submit Survey</Button>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Survey;
