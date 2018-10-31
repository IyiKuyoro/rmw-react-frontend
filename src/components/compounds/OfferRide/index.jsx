import React, { Component } from 'react';
import toastr from 'toastr';
import validator from 'validator';
import axios from 'axios';
import Button from '../../atoms/Button';
import style from './style.css';

export class OfferRide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      time: '',
      dropoff: false,
      space: 0,
      description: '',
    };

    this.postOffer = () => {
      const {
        origin, destination, time, dropoff, space, description,
      } = this.state;
      axios.post('https://iyikuyoro-ride-my-way.herokuapp.com/api/v1/users/rides', {
        origin,
        destination,
        time,
        allowStops: dropoff,
        avaliableSpace: space,
        description,
      }, {
        headers: {
          jwt: JSON.parse(localStorage.getItem('user')).token,
        },
      })
        .then(() => {
          toastr.success('Ride has been saved');
        })
        .catch((err) => {
          toastr.error(err.response.data.message || 'Opps, something is wrong');
        });
    };

    this.submit = () => {
      const {
        origin, destination, time, space, description,
      } = this.state;

      if (origin.trim() === '') {
        return toastr.error('Invalid origin');
      }
      if (destination.trim() === '') {
        return toastr.error('Invalid destination');
      }
      if (time.trim() === '') {
        return toastr.error('Invalid time');
      }
      if (description.trim() === '') {
        return toastr.error('Invalid description');
      }
      if (!validator.isNumeric(space.toString()) || space <= 0) {
        console.log('here');
        return toastr.error('Invalid space');
      }

      return this.postOffer();
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
          <label className={style.checkbox_label} htmlFor="dropoff">
            Drop-Off
            <input
              type="checkbox"
              id="space"
              value={dropoff}
              onChange={e => this.setState({
                dropoff: e.target.value,
              })}
              className={style.checkbox}
            />
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
          <label className={style.label_spec} htmlFor="description">
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
            onClick={() => this.submit()}
          >
            Offer
          </Button>
        </form>
      </div>
    );
  }
}

export default OfferRide;
