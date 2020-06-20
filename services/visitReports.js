const VisitReport = require("../schema/visitReports");

const VisitReports = {};

VisitReports.newReport = data => {
  return new Promise(async (resolve, reject) => {
    VisitReport.create(data)
      .then(() => {
        resolve({
          success: true,
          msg: "Visit report created"
        });
      })
      .catch(err => {
        console.log("Error : ", err.message);
        reject({
          success: false,
          msg: "Visit report creation error"
        });
      });
  });
};

module.exports = VisitReports;
