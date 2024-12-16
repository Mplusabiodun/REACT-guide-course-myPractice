import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpeg/1280px-Stadtbild_M%C3%BCnchen.jpeg"
      title="First Meetup"
      address="Some address 12345, street."
      description="The meetup description"
    />
  );
}

export async function getStaticProps(context) {
  const meetupID = context.params.meetupId;

  console.log(meetupID);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpeg/1280px-Stadtbild_M%C3%BCnchen.jpeg",
        title: "First Meetup",
        address: "Some address 12345, street.",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
