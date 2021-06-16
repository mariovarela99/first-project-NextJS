import axios from "axios";
import Image from "next/image";
import styled from "styled-components";
import FadeIn from "react-fade-in";

export async function getStaticProps() {
  var data = "";

  await axios
    .get("https://jsonplaceholder.typicode.com/posts?limit=10")
    .then((response) => (data = response.data))
    .catch((error) => console.log(error));

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { data },
  };
}

const Info = styled.div`
  margin: 20px auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > li {
    list-style: none;
    width: 500px;
    background: #cccccc;
    border-radius: 10px;
    padding: 20px;
    margin: 15px auto;

    strong {
      font-size: 18px;
      line-height: 1.5;
      /* color: #5d5bf4; */
      /* color: #1e9387; */
      color: #0680fc;
      margin-left: 25px;
      width: 100%;
    }

    p {
      font-size: 13pt;
      color: #191919;
      padding-left: 25px;
      border-left: 5px solid #ffffff;
      line-height: 1.5;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 10px;

      span {
        color: #ffffff;
        font-size: 16pt;
        font-weight: bold;
        margin-left: 10px;
      }

      > div {
        padding: 5px;
        background: #ffffff;
        border-radius: 50%;
        width: 40px;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

function Posts({ data }) {
  return (
    <>
      <Info>
        <h1> NextJs API Rest with Axios </h1>
      </Info>
      <List>
        {/* <FadeIn> */}
        {data ? (
          data.map((item) => (
            <li key={item.id}>
              <div>
                <div>
                  <Image
                    src="/assets/user.png"
                    width={35}
                    height={35}
                    alt="Profile Image"
                  />
                </div>
                <span> {item.body.substring(5, 15)} </span>
              </div>
              <strong> {item.title} </strong>
              <p> {item.body} </p>
            </li>
          ))
        ) : (
          <p> Dados not arrived yet.! </p>
        )}
        {/* </FadeIn> */}
      </List>
    </>
  );
}

export default Posts;
