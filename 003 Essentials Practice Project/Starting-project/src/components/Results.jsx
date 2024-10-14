import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  return (
    <>
      <h2>The result goes here</h2>
      <p>The initial investment is {input.initialInvestment}</p>
      <p>The annual investment is {input.annualInvestment}</p>
      <p>The expected return is {input.expectedReturn}</p>
      <p>The duration is {input.duration}</p>
    </>
  );
}
