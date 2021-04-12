import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import cx from "classnames";
import {
  Col,
  Row,
  Progress,
  Button,
  Input,
  Label,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";

import meal1 from "../../assets/dashboard/meal-1.svg";
import meal2 from "../../assets/dashboard/meal-2.svg";
import meal3 from "../../assets/dashboard/meal-3.svg";
import upgradeImage from "../../assets/dashboard/upgradeImage.svg";
import heartRed from "../../assets/dashboard/heartRed.svg";
import heartTeal from "../../assets/dashboard/heartTeal.svg";
import heartViolet from "../../assets/dashboard/heartViolet.svg";
import heartYellow from "../../assets/dashboard/heartYellow.svg";
import gymIcon from "../../assets/dashboard/gymIcon.svg";
import therapyIcon from "../../assets/dashboard/therapyIcon.svg";
import user from "../../assets/user.svg";
import statsPie from "../../assets/dashboard/statsPie.svg";

import s from "./Dashboard.module.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.toggleOne = this.toggleOne.bind(this);
    this.toggleTwo = this.toggleTwo.bind(this);
    this.toggleThree = this.toggleThree.bind(this);

    this.state = {
      dropdownOpenOne: false,
      dropdownOpenTwo: false,
      dropdownOpenThree: false,

      checkboxes: [false, true],
    };
  }

  meals = [meal1, meal2, meal3];

  toggleOne() {
    this.setState({
      dropdownOpenOne: !this.state.dropdownOpenOne,
    });
  }

  toggleTwo() {
    this.setState({
      dropdownOpenTwo: !this.state.dropdownOpenTwo,
    });
  }

  toggleThree() {
    this.setState({
      dropdownOpenThree: !this.state.dropdownOpenThree,
    });
  }

  changeCheck(event, checkbox, id) {
    this.state[checkbox][id] = event.target.checked;
    if (!event.target.checked) {
      this.state[checkbox][id] = false;
    }
    this.setState({
      [checkbox]: this.state[checkbox],
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="pr-grid-col" xs={12} lg={8}>
            <Row className="gutter mb-4">
              <Col className="mb-4 mb-md-0" xs={12} md={6}>
                <Widget className="widget-p-md">
                  <div className="d-flex justify-content-between">
                    <div className="headline-3 d-flex align-items-center">Your activity</div>
                    <ButtonDropdown
                      isOpen={this.state.dropdownOpenOne} toggle={this.toggleOne}
                      className=""
                    >
                      <DropdownToggle caret>
                        &nbsp; Weekly &nbsp;
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Daily</DropdownItem>
                        <DropdownItem>Weekly</DropdownItem>
                        <DropdownItem>Monthly</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </Widget>
              </Col>
              <Col xs={12} md={6}>
                <Widget className="widget-p-md">
                  <div className="d-flex justify-content-between">
                    <div className="headline-3 d-flex align-items-center">Your meals</div>
                    <ButtonDropdown
                      isOpen={this.state.dropdownOpenTwo} toggle={this.toggleTwo}
                      className=""
                    >
                      <DropdownToggle caret>
                        &nbsp; Weekly &nbsp;
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Daily</DropdownItem>
                        <DropdownItem>Weekly</DropdownItem>
                        <DropdownItem>Monthly</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                  {this.meals.map((meal) =>
                    <div className={`mt-4 ${s.widgetBlock}`}>
                      <div className={s.widgetBody}>
                        <div className="d-flex">
                          <img className="img-fluid mr-2" src={meal} alt="..." />
                          <div className="d-flex flex-column">
                            <p className="body-2">Salmon salad</p>
                            <p className="body-3 muted">300 g</p>
                          </div>
                        </div>
                        <div className="body-3 muted">
                          175 cal
                        </div>
                      </div>
                    </div>
                  )}
                </Widget>
              </Col>
            </Row>
            <Row className="gutter mb-4">
              <Col xs={12}>
                <Widget className="widget-p-none">
                  <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center col-12 col-xl-6 p-sm-4">
                      <p className="headline-1">Upgrade your plan</p>
                      <p className="body-3">So how did the classical Latin become so </p>
                      <div className="d-flex justify-content-between my-4">
                        <Button size="sm" className="rounded-pill mr-1" color="primary">Go Premium</Button>
                        <Button className="rounded-pill body-3" outline color="dark">Try for free</Button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center col-12 col-xl-6">
                      <img className="p-1 img-fluid" src={upgradeImage} alt="..." />
                    </div>
                  </div>
                </Widget>
              </Col>
            </Row>
            <Row className="gutter">
              {/*ОТРЕФАКТОРИТЬ И СОКРАТИТЬ КОД !!!!!!!!!!!*/}
              <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
                <Widget className="widget-p-sm">
                  <div className={s.smallWidget}>
                    <div className="d-flex mb-4">
                      <img className="py-1 mr-2 img-fluid" src={heartRed} alt="..." />
                      <div className="d-flex flex-column">
                        <p className="headline-3">Text</p>
                        <p className="body-2">Num<span className="body-3 muted">/ ber</span></p>
                      </div>
                    </div>
                    <div>
                      <Progress color="secondary-red" className={`progress-xs ${s.mutedPink}`} value="75" />
                    </div>
                  </div>
                </Widget>
              </Col>
              <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
                <Widget className="widget-p-sm">
                  <div className={s.smallWidget}>
                    <div className="d-flex mb-4">
                      <img className="py-1 mr-2 img-fluid" src={heartYellow} alt="..." />
                      <div className="d-flex flex-column">
                        <p className="headline-3">Text</p>
                        <p className="body-2">Num<span className="body-3 muted">/ ber</span></p>
                      </div>
                    </div>
                    <div>
                      <Progress color="secondary-yellow" className={`progress-xs ${s.mutedYellow}`} value="75" />
                    </div>
                  </div>
                </Widget>
              </Col>
              <Col xs={6} sm={6} xl={3}>
                <Widget className="widget-p-sm">
                  <div className={s.smallWidget}>
                    <div className="d-flex mb-4">
                      <img className="py-1 mr-2 img-fluid" src={heartTeal} alt="..." />
                      <div className="d-flex flex-column">
                        <p className="headline-3">Text</p>
                        <p className="body-2">Num<span className="body-3 muted">/ ber</span></p>
                      </div>
                    </div>
                    <div>
                      <Progress color="secondary-cyan" className={`progress-xs ${s.mutedTeal}`} value="75" />
                    </div>
                  </div>
                </Widget>
              </Col>
              <Col xs={6} sm={6} xl={3}>
                <Widget className="widget-p-sm">
                  <div className={s.smallWidget}>
                    <div className="d-flex mb-4">
                      <img className="py-1 mr-2 img-fluid" src={heartViolet} alt="..." />
                      <div className="d-flex flex-column">
                        <p className="headline-3">Text</p>
                        <p className="body-2">Num<span className="body-3 muted">/ ber</span></p>
                      </div>
                    </div>
                    <div>
                      <Progress color="violet" className={`progress-xs ${s.mutedViolet}`} value="75" />
                    </div>
                  </div>
                </Widget>
              </Col>
            </Row>
          </Col>
          <Col className="mt-4 mt-lg-0 pl-grid-col" xs={12} lg={4}>
            <Widget className="widget-p-lg">
              <div className="d-flex">
                <img className={s.image} src={user} alt="..." />
                <div className={s.userInfo}>
                  <p className="headline-3">Christina Karey</p>
                  <p className="body-3 muted">Brasil</p>
                </div>
              </div>
              <div className={s.userParams}>
                {/* REFACTOR THIS BY MAPPING DATA !!!!!!!!!*/}
                <div className="d-flex flex-column">
                  <p className="headline-3">63 kg</p>
                  <p className="body-3 muted">Weight</p>
                </div>
                <div className="d-flex flex-column">
                  <p className="headline-3">175 sm</p>
                  <p className="body-3 muted">Height</p>
                </div>
                <div className="d-flex flex-column">
                  <p className="headline-3">28 y.</p>
                  <p className="body-3 muted">Age</p>
                </div>
              </div>
              <div className={s.goals}>
                <div className={s.goalsTitle}>
                  <p className="headline-3">Your Goals</p>
                  <ButtonDropdown
                    isOpen={this.state.dropdownOpenThree} toggle={this.toggleThree}
                    className=""
                  >
                    <DropdownToggle caret>
                      &nbsp; Weekly &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Daily</DropdownItem>
                      <DropdownItem>Weekly</DropdownItem>
                      <DropdownItem>Monthly</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
                <div className="d-flex flex-column mt-3">
                  <div className={s.activity}>
                    <p className="body-2">Sleep</p>
                    <p className="body-2">92<span className="body-3 muted"> / 160</span></p>
                  </div>
                  <Progress color="secondary-red" className="progress-xs" value={60} />
                </div>
                <div className="d-flex flex-column mt-3">
                  <div className={s.activity}>
                    <p className="body-2">Sport</p>
                    <p className="body-2">40<span className="body-3 muted"> / 50</span></p>
                  </div>
                  <Progress color="secondary-yellow" className="progress-xs" value={80} />
                </div>
                <div className="d-flex flex-column mt-3">
                  <div className={s.activity}>
                    <p className="body-2">Water</p>
                    <p className="body-2">25<span className="body-3 muted"> / 40</span></p>
                  </div>
                  <Progress color="secondary-cyan" className="progress-xs" value={40} />
                </div>
              </div>
              {/* REFACTOR THIS BY MAPPING DATA !!!!!!!!!*/}
              <p className="headline-3">Appointments</p>
              <div className={`mt-3 ${s.widgetBlock}`}>
                <div className={s.widgetBody}>
                  <div className="d-flex">
                    <img className="img-fluid mr-2" src={gymIcon} alt="..." />
                    <div className="d-flex flex-column">
                      <p className="body-2">02.11 , 12:00 - 13:00</p>
                      <p className="body-3 muted">Yoga, Airplace Gym</p>
                    </div>
                  </div>
                  <div className="">
                    <Input
                      id="checkbox0"
                      type="checkbox"
                      checked={this.state.checkboxes[0]}
                      onChange={(event) =>
                        this.changeCheck(event, "checkboxes", 0)
                      }
                    />
                    <Label for="checkbox0" />
                  </div>
                </div>
              </div>
              <div className={`mt-3 ${s.widgetBlock}`}>
                <div className={s.widgetBody}>
                  <div className="d-flex">
                    <img className="img-fluid mr-2" src={therapyIcon} alt="..." />
                    <div className="d-flex flex-column">
                      <p className="body-2">03.11 , 16:00 - 17:30</p>
                      <p className="body-3 muted">Therapy</p>
                    </div>
                  </div>
                  <div className="">
                    <Input
                      id="checkbox1"
                      type="checkbox"
                      checked={this.state.checkboxes[1]}
                      onChange={(event) =>
                        this.changeCheck(event, "checkboxes", 1)
                      }
                    />
                    <Label for="checkbox1" />
                  </div>
                </div>
              </div>
              <a className={`btn-secondary-red ${s.statsBtn}`} href="#" role="button">
                <img className={s.pieImg}  src={statsPie} alt="..." />
                <div>
                  <p className="headline-2">STATISTIC</p>
                  <p className="body-3">Download your activity</p>
                </div>
              </a>
            </Widget>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;