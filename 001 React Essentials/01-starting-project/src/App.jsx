import { useState } from "react";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelecedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelecedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let topicSelected = <p>Please select a topic</p>;
  if (selectedTopic) {
    topicSelected = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItems) => {
              return <CoreConcept key={conceptItems.title} {...conceptItems} />;
            })}
            {/* <CoreConcept
              title="Components"
              description="The core UI building blocks"
              image={componentsImg}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {/* {!selectedTopic ? (
              <p>Please select a topic</p>
            ) : (
              <div>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )} */}
            {topicSelected}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
