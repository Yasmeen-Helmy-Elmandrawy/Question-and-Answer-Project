import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { question } from "../data";

const FormInput = ({ onAdd, notify }) => {
  const [qu, setQu] = useState('');
  const [an, setAn] = useState('');
  // to push data to array
  const addNewItem = () => {
    if(qu === "" || an === ""){
      notify("من فضلك أكمل البيانات", "Error");
      return ;
    }
    question.push({id: Math.random(), q: qu, a: an});
    setQu('');
    setAn('');
    onAdd();
    console.log(question);
  }
  return (
    <Row className="my-3">
        <Col sm="5">
            <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="email" placeholder="ادخل السؤال" />
        </Col>
        <Col sm="5">
            <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="ادخل الإجابة" />
        </Col> 
        <Col sm="2">
            <button onClick={addNewItem} className="btn-color w-100" type="submit">
                إضافة
            </button>
        </Col>
        
    </Row>
  )
}

export default FormInput
