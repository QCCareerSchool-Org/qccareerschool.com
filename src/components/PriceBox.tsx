// TODO: is this being used?

import { ReactElement, useState } from 'react';
import { useLocation } from '../hooks/useLocation';

import { usePrice } from '../hooks/usePrice';
import { formatPrice } from '../lib/formatPrice';

type Props = {
  courses: string[];
};

export const PriceBox = ({ courses }: Props): ReactElement | null => {
  const [ plan ] = useState('installment');
  const location = useLocation();
  const price = usePrice(courses, location?.countryCode, location?.provinceCode);

  if (!price) {
    return null;
  }

  return (
    <>
      {/* <Nav as="nav" variant="tabs" activeKey={plan} onSelect={(selectedKey: string) => setPlan(selectedKey)} className="mb-4">
        <Nav.Item>
          <Nav.Link eventKey="installment">Installment Plan</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="full">Pay In Full</Nav.Link>
        </Nav.Item>
      </Nav> */}
      <div className="text-center" style={{ height: 220 }}>
        {plan === 'full'
          ? (
            <>
              <h6 className="mb-4"><span className="display-4">{price.currency.symbol}{formatPrice(price.plans.full.total)}</span><br />One Time Payment</h6>
              <p>Save {price.currency.symbol}{formatPrice(price.plans.full.discount)}<br />when you pay in full.</p>
              <p className="lead">Total Tuition: <del>{price.currency.symbol}{formatPrice(price.cost)}</del> <strong>{price.currency.symbol}{formatPrice(price.plans.full.total)}</strong></p>
            </>
          ) : (
            <>
              <h6 className="mb-4"><span className="display-4">{price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}</span><br />/ month</h6>
              <p>{price.currency.symbol}{formatPrice(price.plans.part.deposit)} deposit then<br />{price.plans.part.installments} monthly payments.</p>
              <p className="lead">Total Tuition: {price.currency.symbol}{formatPrice(price.plans.part.total)}</p>
            </>
          )
        }
      </div>
    </>
  );
};
