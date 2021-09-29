// Packages & Frameworks
import styled from "styled-components";

// Files
import arrowIcon from "../images/icon-arrow-down.svg";

// Styles
const Parent = styled.article`
  margin-top: 4em;
  border-radius: 25px;
  padding: 4em;

  .accordion-button:not(.collapsed) {
    border: none;
    background: none;
    outline: none;
    font-weight: bold;
    color: #000;
    box-shadow: none;
    font-size: 0.357em;
  }

  .accordion-button:focus {
    border: none;
  }

  h2 {
    text-align: start;
    padding-bottom: 0.7em;
    width: 100%;
    font-size: 3em;
    font-weight: bolder;
  }

  .accordion-button::after {
    background-image: url("${arrowIcon}");
    background-size: 15px;
  }

  .accordion {
    width: 500px;
    height: 500px;
  }

  .accordion-header {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: -50px;

    .accordion {
      width: 100%;
    }

    h2 {
      text-align: center;
    }
  }

  .accordion-body {
    font-size: 0.93em;
    color: #777;
  }

  @media screen and (max-width: 768px) {
    padding: 1em;
    padding-bottom: 3em;
    .accordion {
      height: auto;
    }
  }

  @media screen and (max-width: 425px) {
    padding: 1em 0em;
    padding-bottom: 2em;
  }
`;

// JSX
const Accordion = () => {
  return (
    <Parent>
      <div className="container">
        <h2>FAQ</h2>
        <div className="accordion accordion-flush" id="accordionExample">
          <div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How many team members can I invite?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  You can invite up to 2 additional users on the Free plan.
                  There is no limit on team members for the Premium plan.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is the maximum file upload size?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  No more than 2GB. All files in your account must fit your
                  allotted storage space.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How do I reset my password?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Click “Forgot password” from the login page or “Change
                  password” from your profile page. A reset link will be emailed
                  to you.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Can I cancel my subscription?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Yes! Send us a message and we’ll process your request no
                  questions asked.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Do you provide additional support?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Chat and email support is available 24/7. Phone lines are open
                  during normal business hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parent>
  );
};

export default Accordion;
