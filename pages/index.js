import Head from "next/head";
import Image from "next/image";
import { Menu, Header } from "../styles/index";

function HomePage() {
  return (
    <>
      <Head>
        <title>Primeiro Proejcto NextJs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>
              <Image
                src="/assets/user.png"
                alt="Image User Interface"
                width={30}
                height={30}
              />
              <span> User Info </span>
            </li>
            <li>
              <Image
                src="/assets/bell.png"
                alt="Image User Interface"
                width={30}
                height={30}
              />
              <span> Notifications </span>
            </li>
            <li>
              <Image
                src="/assets/messages.png"
                alt="Image User Interface"
                width={30}
                height={30}
              />
              <span> Messages </span>
            </li>
          </ul>
        </nav>
      </Header>
      <Menu>
        <nav>
          <ul>
            <li>
              <Image
                src="/assets/home.png"
                width={30}
                height={30}
                alt="Menu Item NextJs"
              />
              <span> Home </span>
            </li>
            <li>
              <Image
                src="/assets/messages.png"
                width={30}
                height={30}
                alt="Menu Item NextJs"
              />
              <span> Messages </span>
            </li>
            <li>
              <Image
                src="/assets/bell.png"
                width={30}
                height={30}
                alt="Menu Item NextJs"
              />
              <span> Notifications </span>
            </li>
            <li>
              <Image
                src="/assets/stats.png"
                width={30}
                height={30}
                alt="Menu Item NextJs"
              />
              <span> Dashboard </span>
            </li>
            <li>
              <Image
                src="/assets/user.png"
                width={30}
                height={30}
                alt="Menu Item NextJs"
              />
              <span>User Info</span>
            </li>
          </ul>
        </nav>
      </Menu>
      <div>
        <h1> Hello World </h1>
      </div>
    </>
  );
}

export default HomePage;
