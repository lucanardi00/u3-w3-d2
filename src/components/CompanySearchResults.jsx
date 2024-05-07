import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { setCompanyJobs } from '../redux/actions';


const CompanySearchResults = ({ company, companyJobs, fetchCompanyJobs }) => {
  useEffect(() => {
    fetchCompanyJobs(company);
  }, [company, fetchCompanyJobs]);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {company}</h1>
          {companyJobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  companyJobs: state.company.companyJobs
});

const mapDispatchToProps = dispatch => ({
  fetchCompanyJobs: companyName => {
    fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${companyName}&limit=20`)
      .then(response => response.json())
      .then(data => {
        dispatch(setCompanyJobs(data));
      })
      .catch(error => {
        console.error('Error fetching company jobs:', error);
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanySearchResults);