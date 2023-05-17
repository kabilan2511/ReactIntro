import React from "react";
import styles from "../cssFile/BasicUI.module.css";
const BasicUi = () => {
  return (
    <>
      <div className={styles.align1}>
        <a href="https://www.google.com">
          <img
            src="images.jpg"
            alt="People and Nature"
            width="150"
            height="250"
          />
        </a>
        <p title="title attribute of <p> is for tooltip">Nature of a photo</p>
        <p style={{ color: "red" }}>dfhhdg</p>
        <bdo dir="ltr">
          What a <abbr title="srhegbestg">WHO</abbr> beautiful day!
        </bdo>
        <p
          style={{
            border: "2px solid powderblue",
            padding: "10px",
            margin: "30px",
          }}
        >
          CEnter BOX
        </p>
        <a href="mailto:kabilan2511@gmail.com">Click Here</a>
        <hr />
      </div>
      <hr />
      <div className={styles.align1}>
        <a href="#c4">Click to chap 3</a>
        <a href="html_demo.html#c4">Jump to Chapter 3</a>
        <h1>Chapter 1</h1> <p>this is chapter 1</p>
        <h3 id="c4">Chapter 3</h3> <p>this is chapter 3</p>
      </div>
      <hr />
      <div className={styles.align1}>
        <h1>HTML Links - The target Attribute</h1>
        <p>
          <a href="https://www.google.com">
            Opens the document in the same window/tab as it was clicked
          </a>
        </p>
        <p>
          <a href="https://www.google.com" target="_self">
            Opens the document in the same window/tab as it was clicked
          </a>
        </p>
        <p>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Opens the document in a new window or tab
          </a>
        </p>
        <p>
          <a href="https://www.google.com" target="_parent">
            Opens the document in the parent frame
          </a>
        </p>
        <p>
          <a href="https://www.google.com" target="_top">
            {" "}
            Opens the document in the full body of the window
          </a>
        </p>
        <img src="https://www.w3schools.com/html/programming.gif" alt="gif" />
      </div>
      <hr />
      {/* table, th, td{" "}
      {{
        border: "1px solid black",
      }} */}
      <div className={styles.align1}>
        <table className={styles.table}>
          <tr>
            <th>India</th>
            <th>Pakisthan</th>
            <th>America</th>z
          </tr>
          <tr>
            <td>India</td>
            <td>Pakisthan</td>
            <td>America</td>
          </tr>
          <tr>
            <td>India</td>
            <td>Pakisthan</td>
            <td>America</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default BasicUi;
