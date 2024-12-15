// our-domain.com/
import MeetupList from "../components/meetups/MeetupList.js";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.rockoutbooks.com%2Fcdn%2Fshop%2Fproducts%2F0001_070484_ss_02.jpg%3Fv%3D1606855134&tbnid=KrS5sg-d3hVDjM&vet=10CAIQxiAoAGoXChMI4O-h8aepigMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.rockoutbooks.com%2Fproducts%2F0001_070484_ss_02&docid=HWUp2ZwU4r9LFM&w=1296&h=903&itg=1&q=wikipedia%20gathering&ved=0CAIQxiAoAGoXChMI4O-h8aepigMVAAAAAB0AAAAAEAc",
    address: "Some address 5, 12345 Some city.",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://www.google.com/imgres?q=meetup%20image&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1705882846961-c6b31413927a%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVldHVwfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmeetup&docid=3hfJ0rXvY0zAZM&tbnid=ER5eZPIlgK088M&vet=12ahUKEwjGueqdpKmKAxXKYEEAHXKAJvUQM3oECB0QAA..i&w=3000&h=2087&hcb=2&ved=2ahUKEwjGueqdpKmKAxXKYEEAHXKAJvUQM3oECB0QAA",
    address: "Some address 10, 12345 Some city.",
    description: "This is a Second Meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
