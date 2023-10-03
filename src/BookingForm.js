import { useState } from "react";

export const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const listAvailableTimes = availableTimes.map((time) => {
    return <option>{time}</option>;
  });

  const [resDate, setResDate] = useState();
  const [resTime, setResTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  const handleEvent = (e) => {
    e.preventDefault();
    console.log(typeof guests);
    console.log(resDate, resTime, guests, occasion);
  };

  return (
    <form
      style={{ display: "grid", "max-width": "200px", gap: "20px" }}
      onSubmit={handleEvent}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={(e) => setResDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={resTime}
        onChange={(e) => setResTime(e.target.value)}
      >
        {listAvailableTimes}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};
