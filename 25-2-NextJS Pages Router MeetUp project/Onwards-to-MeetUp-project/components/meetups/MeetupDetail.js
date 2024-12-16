import classes from "./MeetupDetail.module.css";

function MeetupDetail(prop) {
  return (
    <section className={classes.detail}>
      <img src={prop.image} alt={prop.title} />
      <h1>{prop.title}</h1>
      <address>{prop.address}</address>
      <p>{prop.description}</p>
    </section>
  );
}
export default MeetupDetail;
