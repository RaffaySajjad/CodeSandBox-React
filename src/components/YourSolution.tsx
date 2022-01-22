import React, { useState } from "react";
import styled from "styled-components";

const Container = styled("div")`
  border: 1px solid grey;
  padding: 15px;
`;

const AddButton = styled("button")`
  border-radius: 10px;
  padding: 1px 6px 1px 6px;
  background-color: white;
  border: 1px solid grey;
  font-size: 12px;
  width: 110px;
  height: 35px;
`;

const DeleteButton = styled("button")`
  float: right; 
  border: 1px solid grey;
  padding-bottom: 50px
  align-items: center;
  border-radius: 10px;
  background-color: white;
  font-size: 12px;
  width: 60px;
  height: 35px;
`;

const BulletEditor = styled("h3")`
  background-color:rgb(16, 60, 100);
  color:white;
  font-size: 14px;
  padding: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ComponentPreview = styled("div")`
  word-wrap: break-word;
  border-radius: 10px;
  border-color: white;
  background-color: white;
  border-style: solid;
  margin: 10px;
  padding: 10px;
  width: 350px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const BulletInput = styled("input")`
  border-radius: 5px;
  border: 1px solid grey;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
  margin-bottom: 10px;
  margin-top: -5px;
  width: 70%;
`;

const HeadlineInput = styled("input")`
  border-radius: 5px;
  border: 1px solid grey;
  font-weight: bold;
  font-size: 14px;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 10px;
  margin-top: -10px;
  width: 97%;
`;

const Headline = styled("div") `
  font-weight: bold;
  font-size: 18px;
`;

const ComponentEditor = styled("div")`
  border-radius: 10px;
  margin: 30px;
  width: 500px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const EditorColumn = styled("td")`
  border: 5px solid red;
  border-top: 5px solid red;
`;

const AppHeader = styled("th")`
  background-color: black;
  border-bottom: 5px solid red;
  color: white;
`;

const Bullets = styled("div")`
  margin-top: -15px;
`;

export const YourSolution: React.FC<any> = (props) => {
  const defaultText = "Lorem Ipsum is simply dummy text of the printing"
  const [bullet, setBullet] = useState([defaultText]);
  const [headline, setHeadline] = useState("How it works");
  const onChangeHandler = (index: number, value: string) => {
    setBullet((bullets) =>
      bullets.map((bullet, i) => (i === index ? value : bullet))
    );
  };

  const addBullet = () => {
    setBullet((bullets) => [...bullets, defaultText]);
  };

  function deleteBullet(index: number) {
    const list = [...bullet];
    list.splice(index, 1);
    setBullet(list);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <AppHeader>Bullet Point Component</AppHeader>
            <AppHeader>Bullet Point Editor</AppHeader>
          </tr>
        </thead>
        <tbody>
        <tr>
          <EditorColumn>
            <ComponentPreview>
                <Headline>{headline}</Headline>
                <ul id="bulletColor">
                  {bullet.map((value) => {
                    return <li key={value}>{value}</li>;
                  })}
                </ul>
            </ComponentPreview>
          </EditorColumn>
          <EditorColumn>
            <ComponentEditor>
              <BulletEditor>Edit Component</BulletEditor>
              <div className="editSubComponent">
                <p id="heading">Headline</p>
                <HeadlineInput
                  type="text"
                  value={headline}
                  onChange={(event) => {
                    setHeadline(event.target.value);
                  }}
                />
                {bullet.map((text, i) => {
                  return (
                    <Bullets key={i}>
                      <p>Bullet #{i + 1}</p>
                      <div>
                        <BulletInput
                          placeholder="Enter text"
                          value={text}
                          onChange={(e) => onChangeHandler(i, e.target.value)}
                        />
                        <DeleteButton onClick={() => deleteBullet(i)}>
                          Delete
                        </DeleteButton>
                      </div>
                    </Bullets>
                  );
                })}
                <AddButton onClick={addBullet}>
                <img
                  className="addButton"
                  src="https://cdn-icons-png.flaticon.com/512/61/61112.png"
                  width="13"
                  height="13"
                  alt="plus"
                ></img>
                <span>Add Bullet</span>
              </AddButton>
              </div>
            </ComponentEditor>
          </EditorColumn>
        </tr>
        </tbody>
      </table>
    </Container>
  );
};
