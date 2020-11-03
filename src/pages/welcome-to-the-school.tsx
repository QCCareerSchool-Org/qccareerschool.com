import React, { useContext } from 'react';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import PropTypes from 'prop-types';
import * as HttpStatus from '@qccareerschool/http-status';
import { telephoneNumber } from '@qccareerschool/helper-functions';

import { DefaultLayout } from '../layouts/default-layout';
import { SEO } from '../components/seo';
import { Enrollment } from '../models/enrollment';
import { LocationStateContext } from '../providers/location';

type Props = {
  enrollment?: Enrollment;
  errorCode?: number;
}

const WelcomeToTheSchoolPage: NextPage<Props> = ({ enrollment, errorCode }) => {
  const location = useContext(LocationStateContext);

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!enrollment) {
    return null;
  }

  const paymentDate = new Date(enrollment.paymentDate);

  return (
    <DefaultLayout noHero={true}>

      <SEO
        title="Welcome to the School"
        description="Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center."
        canonical="/welcome-to-the-school"
      />

      <section id="first-section">
        <div className="container">
          <div className="row row d-flex align-items-center mb-3 mt-3">
            <div className="col-12 col-sm-10 col-md-8 col-lg-8">
              <h1 className="text-dark">Thank You for Enrolling with QC Career School!</h1>
              <p>Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center. If you don't see an email from us, please check your spam folder.</p>
              <p>If you have any questions regarding the course, or if you want to discuss your goals, our friendly and knowledgeable student support advisors are available 7 days a week by email at <a href="mailto:info@qccareerschool.com">info@qccareerschool.com</a> or by phone at {telephoneNumber(location?.countryCode ?? 'US')}. We would be delighted to speak with you and assist you in any way we can. We hope your learning experience with us will be enjoyable, interesting, and valuable.</p>
              <p className="lead">Remember, we want to develop a personal relationship with you and be readily available for you whenever you need us.</p>
              <p className="text-dark"><strong>Best of luck with your studies!</strong></p>
              <p className="lead">Sincerely,</p>
              <p className="text-dark"><img src={require('../images/alex-myers.png')} className="text-center" alt="Alex Myers" /><br /><strong>Director</strong><br />QC Career School</p>
            </div>
          </div>
        </div>
      </section>

      <section id="detailsSection" className="bg-light text-dark">
        <div className="container">
          <h2>Enrollment Details</h2>
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <table id="enrollmentTable" className="mb-4 w-100">
                <tbody>
                  <tr>
                    <td><strong>Name</strong></td>
                    <td>{enrollment.firstName} {enrollment.lastName}</td>
                  </tr>
                  <tr>
                    <td><strong>Address</strong></td>
                    <td>
                      {enrollment.address1}<br />
                      {enrollment.address2 && <>{enrollment.address2}<br /></>}
                      {enrollment.city} {enrollment.provinceName} {enrollment.postalCode}<br />
                      {enrollment.countryName}
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Currency</strong></td>
                    <td>{enrollment.currencyName}</td>
                  </tr>
                  <tr>
                    <td><strong>Payment Plan</strong></td>
                    <td>{enrollment.paymentPlan === 'full' ? 'Full Payment' : 'Installment Plan'}</td>
                  </tr>
                  {enrollment.paymentPlan !== 'full' && (
                    <>
                      <tr>
                        <td><strong>Payment Day</strong></td>
                        <td>{enrollment.paymentDay}</td>
                      </tr>
                      <tr>
                        <td><strong>Installments Start</strong></td>
                        <td>{paymentDate.getFullYear()}-{paymentDate.getMonth().toString().padStart(2, '0')}-{paymentDate.getDate().toString().padStart(2, '0')}</td>
                      </tr>
                    </>
                  )}
                  {enrollment.courses.map((c, i) => (
                    <React.Fragment key={i}>
                      <tr>
                        <td colSpan={2}><h6 className="mt-4 mb-0">{c.name}</h6></td>
                      </tr>
                      <tr>
                        <td><strong>Cost</strong></td>
                        <td>{enrollment.currencySymbol}{c.baseCost.toFixed(2)}</td>
                      </tr>
                      {c.discount > 0 && (
                        <tr>
                          <td><strong>Discount</strong></td>
                          <td>&minus;{enrollment.currencySymbol}{c.discount.toFixed(2)}</td>
                        </tr>
                      )}
                      {c.secondaryDiscount > 0 && (
                        <tr>
                          <td><strong>Multi-Course Discount</strong></td>
                          <td>&minus;{enrollment.currencySymbol}{c.secondaryDiscount.toFixed(2)}</td>
                        </tr>
                      )}
                      <tr>
                        <td><strong>Today's Deposit</strong></td>
                        <td>{enrollment.currencySymbol}{c.deposit.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td><strong>Monthly Installment</strong></td>
                        <td>{enrollment.currencySymbol}{c.installment.toFixed(2)}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-12 col-xl-6">
              <table className="table table-bordered text-dark">
                <tbody>
                  <tr>
                    <td>Reference Code</td>
                    <td>{enrollment.authorizationId}</td>
                  </tr>
                  <tr>
                    <td>PAN</td>
                    <td>{enrollment.maskedPan}</td>
                  </tr>
                  <tr>
                    <td>Amount Processed</td>
                    <td>{enrollment.deposit.toFixed(2)} {enrollment.currencyCode}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{enrollment.transactionTime}</td>
                  </tr>
                  <tr>
                    <td>Auth Code</td>
                    <td>{enrollment.authCode}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p>If you would like to make changes to your account, please contact the School at your earliest convenience by phone or email.</p>
        </div>
      </section>

    </DefaultLayout>
  );
}

WelcomeToTheSchoolPage.propTypes = {
  enrollment: PropTypes.any,
  errorCode: PropTypes.number,
};

WelcomeToTheSchoolPage.getInitialProps = async ({ res, query }): Promise<Props> => {
  const url = `https://api.qccareerschool.com/enrollments/${query.enrollmentId}?code=${query.code}`;
  try {
    const response = await fetch(url, {
      headers: { 'X-API-Version': '2' },
    });
    if (!response.ok) {
      console.log(response.statusText);
      throw new HttpStatus.HttpResponse(response.status, response.statusText);
    }
    const enrollment: Enrollment = await response.json();
    if (!enrollment.complete || !enrollment.success) {
      throw new HttpStatus.NotFound();
    }
    return { enrollment };
  } catch (err) {
    console.log(err);
    const errorCode = typeof err.statusCode === 'undefined' ? 500 : err.statusCode;
    if (res) {
      res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

export default WelcomeToTheSchoolPage;
