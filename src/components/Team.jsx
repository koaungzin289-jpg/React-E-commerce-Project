import member1 from "../assets/images/person_1.jpg";
import member2 from "../assets/images/person_2.jpg";
import member3 from "../assets/images/person_3.jpg";
import member4 from "../assets/images/person_4.jpg";
const memberList = [
  { image: member1, name: "Lawson Arnold" },
  { image: member2, name: "Jeremy Walker" },
  { image: member3, name: "Patrik White" },
  { image: member4, name: "Kathryn Ryan" },
];
export function MemberCard({ memberData }) {
  return (
    <>
      {memberData.map((member, index) => {
        return (
          <div className="memberCard col-md-6 col-lg-3" key={index}>
            <div className="memberPhoto">
              <img src={member.image} alt={member.name} />
            </div>
            <span className="memberName d-block pt-4">{member.name}</span>
            <span className="pt-2 text-black-50 d-block">CEO, Founder, Atty.</span>
            <p className="text-black-50 py-3">
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <a href="#">Learn more</a>
          </div>
        );
      })}
    </>
  );
}
function Team() {
  return (
    <div className="team pb-5">
      <h3 className="h-3 text-center py-5">Our Team</h3>
      <div className="row">
        <MemberCard memberData={memberList} />
      </div>
    </div>
  );
}

export default Team;
