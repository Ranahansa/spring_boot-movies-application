import React from 'react'
import {Form, Button} from 'react-bootstrap'


const ReviewForm = ({hadleSubmit,revText,labelText,defaultValue}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    defaultValue={defaultValue}
                    onChange={revText}
                />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                onClick={hadleSubmit}
            >
                Submit
            </Button>
        </Form>
    )
}

export default ReviewForm