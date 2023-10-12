import SingleQuestion from "./SingleQuestion";

const FAQ = ({ questions }) => {
  return (
    <section className="container">
      <h1>FAQ</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion key={question.id} {...question}></SingleQuestion>
        );
      })}
    </section>
  );
};
export default FAQ;
