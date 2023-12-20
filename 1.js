const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const list = xmlDOM.querySelector("list");
const studentNode = xmlDOM.querySelectorAll("student");

const students = Array.from(studentNode).map((studentNode) => {
  const nameNode = studentNode.querySelector("name");
  const lang = nameNode.getAttribute("lang");
  const first = nameNode.querySelector("first").textContent;
  const second = nameNode.querySelector("second").textContent;
  const age = parseInt(studentNode.querySelector("age").textContent);
  const prof = studentNode.querySelector("prof").textContent;

  return {
    name: { lang, first, second },
    age,
    prof,
  };
});
const result = { list: students };

console.log(result);
