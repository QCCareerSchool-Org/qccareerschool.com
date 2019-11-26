import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { Background } from '../components/background';
import { DefaultLayout } from '../layouts/default-layout';

const ContactPage: NextPage = () => (
  <DefaultLayout>
    <Head>
      <title>Contact Us - QC Career School</title>
    </Head>

    <Background image="home">
      <section id="first-section" className="text-light">
        <Container>
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum eros, lacinia sed dapibus sed, accumsan ut diam. In commodo, nisi eu ullamcorper pretium, eros felis fringilla nunc, quis laoreet urna lectus ut elit. Duis non fringilla justo. Sed quis mauris vitae massa ornare rhoncus sed eu risus. In hac habitasse platea dictumst. In nisl enim, maximus vel felis vitae, dictum efficitur ipsum. In malesuada, lacus malesuada mattis semper, tellus erat ultrices purus, gravida egestas mauris mi eget turpis. Mauris sem orci, porttitor ac nisi sit amet, varius consectetur purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec justo ut eros convallis ornare. Ut tincidunt arcu et congue mattis. Quisque vitae consectetur libero. Sed ac sem gravida, condimentum orci eget, efficitur turpis.</p>
          <p>Suspendisse potenti. Praesent bibendum pretium neque, quis imperdiet erat hendrerit vitae. Donec maximus ipsum et urna fermentum, nec vulputate odio gravida. Nunc commodo pulvinar ex. Ut non egestas odio. Suspendisse eget elit sollicitudin, pharetra sapien id, mattis velit. In pharetra convallis nibh a mattis. In egestas nunc non libero luctus, in porta erat gravida. Donec ut sodales dui, ut ornare ipsum. Phasellus pretium, urna ac fermentum rhoncus, ante nulla semper orci, eu pulvinar turpis metus rhoncus enim.</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi ut dignissim ligula, a rutrum orci. Suspendisse maximus faucibus luctus. Duis commodo condimentum viverra. Duis et odio mollis, eleifend odio at, lacinia massa. Nam ultrices malesuada lacus ut porttitor. Nam mattis pharetra cursus. Vestibulum imperdiet efficitur dolor sed eleifend. Quisque sodales purus nunc. Donec dignissim pretium interdum. Proin a porta quam, vitae dignissim justo. Morbi et hendrerit erat, luctus elementum erat. Aenean dignissim est eu lorem accumsan, vel commodo justo lobortis. Ut risus quam, finibus quis nibh eu, maximus sodales sapien. Aliquam semper leo ut turpis tristique sodales.</p>
          <p><Link href="/example"><a>Example</a></Link></p>
          <Button size="sm">Sdsds</Button>
        </Container>
      </section>
    </Background>
  </DefaultLayout>
);

export default ContactPage;
