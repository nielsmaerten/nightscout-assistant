const expect = require("chai").expect;
const Nightscout = require("./stubs/nightscout");
const { i18next, initLocale } = require("../i18n");
initLocale();

let testUser = {
  nsUrl: "https://example.com",
  email: "test@example.com"
};

const getAnswerInLanguage = async language => {
  let t = i18next.getFixedT(language);
  return await Nightscout.getNightscoutStatus(
    testUser,
    testUser.email,
    t
  );
};

describe("Nightscout Status", () => {
  it("responds in English", async () => {
    let answer = await getAnswerInLanguage("en-US");
    expect(answer.response).to.eq("100 and stable as of a few seconds ago.");
  });

  it("responds in French", async () => {
    let answer = await getAnswerInLanguage("fr-FR");
    expect(answer.response).to.eq("100 et stable il y a quelques secondes.");
  });

  it("responds in Norwegian", async () => {
    let answer = await getAnswerInLanguage("no-NO");
    expect(answer.response).to.eq("100 og stabilt for noen sekunder siden.");
  });
});
