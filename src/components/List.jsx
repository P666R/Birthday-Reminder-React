import Person from "./Person";

function List({ people }) {
  return (
    <section>
      {people.map((indvidual) => {
        return <Person key={indvidual.id} {...indvidual} />;
      })}
    </section>
  );
}
export default List;
