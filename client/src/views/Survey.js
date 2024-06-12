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
    "1- I feel nervous when I speak in front of a group of people.",
    "2- I avoid social gatherings because they make me anxious.",
    "3- I feel self-conscious in social situations.",
    "4- I worry about being judged by others.",
    "5- I feel uncomfortable when I have to introduce myself.",
    "6- I get anxious when I have to speak to authority figures.",
    "7- I avoid eye contact in social situations.",
    "8- I feel like I am being watched in social situations.",
    "9- I find it hard to speak up in meetings.",
    "10- I fear being the center of attention.",
    "11- I get anxious about meeting new people.",
    "12- I worry that people will notice my anxiety.",
    "13- I avoid starting conversations.",
    "14- I fear being negatively evaluated by others.",
    "15- I feel like I can't contribute to social conversations.",
    "16- I feel uncomfortable when I'm not engaged in a conversation.",
    "17- I find it difficult to relax at social events.",
    "18- I feel like I can't contribute to social conversations.",
    "19- I find it difficult to relax at social events.",
    "20- I feel uncomfortable when I'm not engaged in a conversation."
  ];

  const [responses, setResponses] = useState(Array(questions.length).fill(0));

  const handleOptionChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = (event) => {
  event.preventDefault();
  if (responses.some(response => response === 0)) {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please answer all questions before proceeding!',
    });
  } else {
    console.log("Survey responses:", responses);
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Survey Submitted',
      showConfirmButton: false,
      timer: 1500,
    });
  }
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
                <div className="text-center">
                  <Button color="info" type="submit">Submit Survey</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Survey;
