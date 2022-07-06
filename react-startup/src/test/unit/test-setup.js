import "@testing-library/jest-dom/extend-expect";

jest.mock("global", () => {
  function config(path) {
    return path;
  }
  config.getEndpoint = (name) => `http://www.example.org/${name}`;
  config.getResource = (name) => name;
  return {
    config,
    locale: {
      currentLocale: "en",
    },
    intl: {
      formatMessage: ({ id }) => id,
      formatNumber: ({ num }) => num,
      formatDate: () => [],
      formatDateToParts: () => [],
    },
  };
});
