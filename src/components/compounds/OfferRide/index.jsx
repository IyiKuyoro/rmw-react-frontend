import React, { Component } from 'react';
import toastr from 'toastr';
import Button from '../../atoms/Button';
import style from './style.css';

class OfferRide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      time: '',
      dropoff: '',
      space: '',
      description: '',
    };
  }

  render() {
    const {
      origin, destination, time, dropoff, space, description,
    } = this.state;
    return (
      <div>
        <h2 className={style.title}>Offer a Ride</h2>
        <form className={style.form}>
          <label className={style.label} htmlFor="orign">
            Origin
            <input
              id="orign"
              type="text"
              value={origin}
              onChange={e => this.setState({
                origin: e.target.value,
              })}
              className={style.input}
            />
          </label>
          <label className={style.label} htmlFor="destination">
            Destination
            <input
              id="destination"
              type="text"
              value={destination}
              onChange={e => this.setState({
                destination: e.target.value,
              })}
              className={style.input}
            />
          </label>
          <label className={style.label} htmlFor="time">
            Time
            <input
              id="time"
              type="time"
              value={time}
              onChange={e => this.setState({
                time: e.target.value,
              })}
              className={style.input}
            />
          </label>
          <label className={style.label} htmlFor="dropoff">
            Drop-Off
            <select
              id="dropoff"
              value={dropoff}
              onChange={e => this.setState({
                dropoff: e.target.value,
              })}
              className={style.input}
            >
              <option>
                True
              </option>
              <option>
                False
              </option>
            </select>
          </label>
          <label className={style.label} htmlFor="space">
            Space
            <input
              id="space"
              type="text"
              value={space}
              onChange={e => this.setState({
                space: e.target.value,
              })}
              className={style.input}
            />
          </label>
          <label className={style.label} htmlFor="description">
            Proposed Route
            <textarea
              id="description"
              type="text"
              value={description}
              onChange={e => this.setState({
                description: e.target.value,
              })}
              className={style.textarea}
              placeholder="Describe your route"
            />
          </label>
          <Button
            className={style.button}
            onClick={() => {
              toastr.warning('Coming Soon!');
            }}
          >
            Offer
          </Button>
        </form>
      </div>
    );
  }
}

export default OfferRide;
