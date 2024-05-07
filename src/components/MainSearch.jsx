import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import Job from './Job';
import { searchJobs } from '../redux/actions';

const MainSearch = ({ searchJobs, searchResults }) => {
  const [query, setQuery] = useState("");
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Form submitted!');

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        searchJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {/* Render search results */}
          {searchResults && searchResults.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  searchResults: state.search.searchResults // Assuming searchResults is stored in Redux state
});

const mapDispatchToProps = dispatch => ({
  searchJobs: results => dispatch(searchJobs(results))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);
