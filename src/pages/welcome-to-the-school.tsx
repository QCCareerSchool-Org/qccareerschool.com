import * as HttpStatus from '@qccareerschool/http-status';
import ErrorPage from 'next/error';
import Image from 'next/image';
import { Fragment, useEffect } from 'react';

import type { NextPageWithLayout } from './_app';
import { SEO } from '../components/SEO';
import { getTelephoneNumber } from '../functions';
import { useLocation } from '../hooks/useLocation';
import AlexSignature from '../images/alex-myers.png';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { formatDate } from '../lib/formateDate';
import type { Enrollment } from '../models/enrollment';

interface Props {
  data?: {
    enrollment: Enrollment;
    code: string;
  };
  errorCode?: number;
}

const WelcomeToTheSchoolPage: NextPageWithLayout<Props> = ({ data, errorCode }) => {
  const location = useLocation();

  const telephoneNumber = getTelephoneNumber(location?.countryCode ?? 'US');

  useEffect(() => {
    if (typeof data !== 'undefined') {
      if (!data.enrollment.emailed) {
        sendEmail(data.enrollment.id, data.code).catch(() => { /* */ });
      }
    }
  }, [ data ]);

  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!data) {
    return null;
  }

  const paymentDate = new Date(data.enrollment.paymentDate);

  return (
    <>
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
              <p>Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center. If you don&apos;t see an email from us, please check your spam folder.</p>
              <p>If you have any questions regarding the course, or if you want to discuss your goals, our friendly and knowledgeable student support advisors are available 7 days a week by email at <a href="mailto:info@qccareerschool.com">info@qccareerschool.com</a> or by phone at {telephoneNumber}. We would be delighted to speak with you and assist you in any way we can. We hope your learning experience with us will be enjoyable, interesting, and valuable.</p>
              <p className="lead">Remember, we want to develop a personal relationship with you and be readily available for you whenever you need us.</p>
              <p className="text-dark"><strong>Best of luck with your studies!</strong></p>
              <p className="lead">Sincerely,</p>
              <p className="text-dark"><Image src={AlexSignature} alt="Alex Myers" /><br /><strong>Director</strong><br />QC Career School</p>
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
                    <td>{data.enrollment.firstName} {data.enrollment.lastName}</td>
                  </tr>
                  <tr>
                    <td><strong>Address</strong></td>
                    <td>
                      {data.enrollment.address1}<br />
                      {data.enrollment.address2 && <>{data.enrollment.address2}<br /></>}
                      {data.enrollment.city} {data.enrollment.provinceName} {data.enrollment.postalCode}<br />
                      {data.enrollment.countryName}
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Currency</strong></td>
                    <td>{data.enrollment.currencyName}</td>
                  </tr>
                  <tr>
                    <td><strong>Payment Plan</strong></td>
                    <td>{data.enrollment.paymentPlan === 'full' ? 'Full Payment' : 'Installment Plan'}</td>
                  </tr>
                  {data.enrollment.paymentPlan !== 'full' && (
                    <>
                      <tr>
                        <td><strong>Payment Day</strong></td>
                        <td>{data.enrollment.paymentDay}</td>
                      </tr>
                      <tr>
                        <td><strong>Installments Start</strong></td>
                        <td>{paymentDate.getFullYear()}-{paymentDate.getMonth().toString().padStart(2, '0')}-{paymentDate.getDate().toString().padStart(2, '0')}</td>
                      </tr>
                    </>
                  )}
                  {data.enrollment.courses.map((c, i) => (
                    <Fragment key={i}>
                      <tr>
                        <td colSpan={2}><h6 className="mt-4 mb-0">{c.name}</h6></td>
                      </tr>
                      <tr>
                        <td><strong>Cost</strong></td>
                        <td>{data.enrollment.currencySymbol}{c.baseCost.toFixed(2)}</td>
                      </tr>
                      {c.planDiscount > 0 && (
                        <tr>
                          <td><strong>Discount</strong></td>
                          <td>&minus;{data.enrollment.currencySymbol}{c.planDiscount.toFixed(2)}</td>
                        </tr>
                      )}
                      {c.discount > 0 && (
                        <tr>
                          <td><strong>Special Discount</strong></td>
                          <td>&minus;{data.enrollment.currencySymbol}{c.discount.toFixed(2)}</td>
                        </tr>
                      )}
                      <tr>
                        <td><strong>Today&apos;s Deposit</strong></td>
                        <td>{data.enrollment.currencySymbol}{c.deposit.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td><strong>Monthly Installment</strong></td>
                        <td>{data.enrollment.currencySymbol}{c.installment.toFixed(2)}</td>
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-12 col-xl-6">
              <table className="table table-bordered text-dark">
                <tbody>
                  <tr>
                    <td>Reference Code</td>
                    <td>{data.enrollment.authorizationId}</td>
                  </tr>
                  <tr>
                    <td>PAN</td>
                    <td>{data.enrollment.maskedPan}</td>
                  </tr>
                  <tr>
                    <td>Amount Processed</td>
                    <td>{data.enrollment.deposit.toFixed(2)} {data.enrollment.currencyCode}</td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>{data.enrollment.transactionTime !== null ? formatDate(data.enrollment.transactionTime) : ''}</td>
                  </tr>
                  <tr>
                    <td>Auth Code</td>
                    <td>{data.enrollment.authCode}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p>If you would like to make changes to your account, please contact the School at your earliest convenience by phone or email.</p>
        </div>
      </section>
    </>
  );
};

WelcomeToTheSchoolPage.getLayout = page => <DefaultLayout noHero={true}>{page}</DefaultLayout>;

const sendEmail = async (enrollmentId: number, code: string): Promise<void> => {
  const response = await fetch(`https://api.qccareerschool.com/enrollments/${enrollmentId}/email`, {
    method: 'post',
    headers: {
      'X-API-Version': '2',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  await response.json();
};

const getEnrollment = async (enrollmentId: number, code: string): Promise<Enrollment> => {
  const url = `https://api.qccareerschool.com/enrollments/${enrollmentId}?code=${code}`;
  const response = await fetch(url, {
    headers: { 'X-API-Version': '2' },
  });
  if (!response.ok) {
    throw new HttpStatus.HttpResponse(response.status, response.statusText);
  }
  return response.json() as unknown as Promise<Enrollment>;
};

WelcomeToTheSchoolPage.getInitialProps = async ({ res, query }): Promise<Props> => {
  try {
    if (typeof query.enrollmentId !== 'string' || typeof query.code !== 'string') {
      throw new HttpStatus.BadRequest();
    }
    const enrollmentId = parseInt(query.enrollmentId, 10);
    const code = query.code;

    const enrollment = await getEnrollment(enrollmentId, code);

    if (!enrollment.complete || !enrollment.success) {
      throw new HttpStatus.NotFound();
    }

    return { data: { enrollment, code } };
  } catch (err) {
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.statusCode : 500;
    if (res) {
      res.statusCode = errorCode;
    }
    return { errorCode };
  }
};

export default WelcomeToTheSchoolPage;
