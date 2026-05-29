/*Removing this will make Jest report a problem with filterByTerm.js, via the web browser, because there is already a function filterByTerm in filterByTerm.js. 

function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}*/

const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);

        expect(filterByTerm(input, "LINK")).toEqual(output);
        // actual test
    });

    test("it should throw error when searchTerm is empty", () => {
    const input = [{ url: "https://www.url.com" }];
    expect(() => {
      filterByTerm(input, "");
    }).toThrow("searchTerm cannot be empty");
  });

  test("it should throw error when inputArr is empty", () => {
    expect(() => {
      filterByTerm([], "term");
    }).toThrow("inputArr cannot be empty");
  });
    
});